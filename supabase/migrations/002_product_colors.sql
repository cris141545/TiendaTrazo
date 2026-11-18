alter table public.product_sizes
  add column if not exists color text not null default '';

alter table public.order_items
  add column if not exists color text not null default '';

alter table public.product_sizes
  drop constraint product_sizes_pkey;

alter table public.product_sizes
  drop constraint if exists product_sizes_color_length_check;

alter table public.order_items
  drop constraint if exists order_items_color_length_check;

alter table public.product_sizes
  add constraint product_sizes_pkey primary key (product_id, color, size),
  add constraint product_sizes_color_length_check check (length(color) <= 60);

alter table public.order_items
  add constraint order_items_color_length_check check (length(color) <= 60);

create or replace function public.save_product(
  p_product_id bigint,
  p_product jsonb,
  p_sizes jsonb
)
returns bigint
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_product_id bigint;
  v_variant jsonb;
  v_existing record;
  v_name text;
  v_category text;
  v_price numeric(10, 2);
  v_color text;
  v_size text;
begin
  if not public.is_store_admin() then
    raise exception 'ADMIN_REQUIRED';
  end if;

  v_name := nullif(trim(p_product->>'name'), '');
  v_category := p_product->>'category';
  v_price := (p_product->>'price')::numeric;
  if v_name is null or length(v_name) > 160 or v_price <= 0 then
    raise exception 'INVALID_PRODUCT';
  end if;
  if v_category not in ('Calzado Hombre', 'Calzado Mujer', 'Sandalias Tejidas', 'Carteras') then
    raise exception 'INVALID_CATEGORY';
  end if;
  if jsonb_typeof(p_sizes) <> 'array' or jsonb_array_length(p_sizes) = 0 then
    raise exception 'SIZES_REQUIRED';
  end if;

  if p_product_id is null then
    insert into public.products (
      name, category, price, badge, badge_accent, is_new, popularity, tags, image
    ) values (
      v_name,
      v_category,
      v_price,
      coalesce(p_product->>'badge', ''),
      coalesce((p_product->>'badge_accent')::boolean, false),
      coalesce((p_product->>'is_new')::boolean, true),
      coalesce((p_product->>'popularity')::integer, 80),
      coalesce(p_product->>'tags', ''),
      coalesce(p_product->>'image', '')
    )
    returning id into v_product_id;
  else
    update public.products set
      name = v_name,
      category = v_category,
      price = v_price,
      badge = coalesce(p_product->>'badge', ''),
      badge_accent = coalesce((p_product->>'badge_accent')::boolean, false),
      is_new = coalesce((p_product->>'is_new')::boolean, true),
      popularity = coalesce((p_product->>'popularity')::integer, 80),
      tags = coalesce(p_product->>'tags', ''),
      image = coalesce(p_product->>'image', '')
    where id = p_product_id
    returning id into v_product_id;

    if v_product_id is null then
      raise exception 'PRODUCT_NOT_FOUND';
    end if;
  end if;

  for v_variant in select value from jsonb_array_elements(p_sizes)
  loop
    v_color := coalesce(trim(v_variant->>'color'), '');
    v_size := trim(v_variant->>'size');
    if length(v_color) > 60
      or v_size is null
      or length(v_size) > 20
      or (v_variant->>'stock') !~ '^[0-9]+$' then
      raise exception 'INVALID_COLOR_SIZE_OR_STOCK';
    end if;
    if v_category = 'Carteras' and v_color <> '' then
      raise exception 'COLOR_NOT_SUPPORTED_FOR_CATEGORY';
    end if;

    insert into public.product_sizes (product_id, color, size, stock)
    values (v_product_id, v_color, v_size, (v_variant->>'stock')::integer)
    on conflict (product_id, color, size) do update
      set stock = excluded.stock;
  end loop;

  for v_existing in
    select ps.color, ps.size, ps.stock
    from public.product_sizes ps
    where ps.product_id = v_product_id
      and not exists (
        select 1
        from jsonb_array_elements(p_sizes) variants(value)
        where coalesce(trim(variants.value->>'color'), '') = ps.color
          and trim(variants.value->>'size') = ps.size
      )
  loop
    if v_existing.stock > 0 or exists (
      select 1
      from public.order_items oi
      join public.orders o on o.order_code = oi.order_code
      where oi.product_id = v_product_id
        and oi.color = v_existing.color
        and oi.size = v_existing.size
        and o.status = 'Pendiente'
    ) then
      raise exception 'VARIANT_HAS_STOCK_OR_PENDING_ORDER:%:%', v_existing.color, v_existing.size;
    end if;

    delete from public.product_sizes
    where product_id = v_product_id
      and color = v_existing.color
      and size = v_existing.size;
  end loop;

  return v_product_id;
end;
$$;

create or replace function public.place_order(
  p_customer_name text,
  p_customer_address text,
  p_customer_phone text,
  p_items jsonb
)
returns jsonb
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_customer_id uuid;
  v_order_code text;
  v_item jsonb;
  v_product_id bigint;
  v_product_name text;
  v_product_category text;
  v_color text;
  v_size text;
  v_quantity integer;
  v_price numeric(10, 2);
  v_total numeric(10, 2) := 0;
  v_total_items integer := 0;
  v_remaining integer;
  v_lines jsonb := '[]'::jsonb;
  v_phone text;
begin
  if nullif(trim(p_customer_name), '') is null or length(trim(p_customer_name)) > 120
    or nullif(trim(p_customer_address), '') is null or length(trim(p_customer_address)) > 500 then
    raise exception 'CUSTOMER_DETAILS_REQUIRED';
  end if;
  if jsonb_typeof(p_items) <> 'array' or jsonb_array_length(p_items) = 0 then
    raise exception 'EMPTY_ORDER';
  end if;

  v_phone := nullif(regexp_replace(coalesce(p_customer_phone, ''), '[^0-9]', '', 'g'), '');
  if v_phone is not null and length(v_phone) > 20 then
    raise exception 'INVALID_PHONE';
  end if;

  if v_phone is null then
    insert into public.customers (full_name, address)
    values (trim(p_customer_name), trim(p_customer_address))
    returning id into v_customer_id;
  else
    insert into public.customers (full_name, phone, address)
    values (trim(p_customer_name), v_phone, trim(p_customer_address))
    on conflict (phone) do nothing
    returning id into v_customer_id;
    if v_customer_id is null then
      select id into v_customer_id
      from public.customers
      where phone = v_phone;
    end if;
  end if;

  insert into public.orders (customer_id, delivery_address)
  values (v_customer_id, trim(p_customer_address))
  returning order_code into v_order_code;

  for v_item in select value from jsonb_array_elements(p_items)
  loop
    begin
      v_product_id := (v_item->>'product_id')::bigint;
      v_quantity := (v_item->>'quantity')::integer;
      v_size := trim(v_item->>'size');
      v_color := coalesce(trim(v_item->>'color'), '');
    exception when others then
      raise exception 'INVALID_ORDER_ITEM';
    end;

    if v_quantity < 1 or v_quantity > 100 or v_size = '' or length(v_color) > 60 then
      raise exception 'INVALID_ORDER_ITEM';
    end if;

    select p.name, p.price, p.category
    into v_product_name, v_price, v_product_category
    from public.products p
    where p.id = v_product_id;
    if not found then
      raise exception 'PRODUCT_NOT_FOUND:%', v_product_id;
    end if;

    if v_product_category = 'Carteras' then
      v_color := '';
    elsif v_color = '' then
      raise exception 'COLOR_REQUIRED:%', v_product_id;
    end if;

    update public.product_sizes
    set stock = stock - v_quantity
    where product_id = v_product_id
      and color = v_color
      and size = v_size
      and stock >= v_quantity
    returning stock into v_remaining;
    if not found then
      raise exception 'STOCK_UNAVAILABLE:%:%:%', v_product_id, v_color, v_size;
    end if;

    insert into public.order_items (
      order_code, product_id, product_name, color, size, quantity, unit_price, subtotal
    ) values (
      v_order_code, v_product_id, v_product_name, v_color, v_size, v_quantity, v_price, v_price * v_quantity
    );

    v_total := v_total + v_price * v_quantity;
    v_total_items := v_total_items + v_quantity;
    v_lines := v_lines || jsonb_build_array(jsonb_build_object(
      'product_id', v_product_id,
      'name', v_product_name,
      'category', v_product_category,
      'color', v_color,
      'size', v_size,
      'quantity', v_quantity,
      'price', v_price,
      'subtotal', v_price * v_quantity,
      'remaining_stock', v_remaining
    ));
  end loop;

  update public.orders
  set total = v_total, total_items = v_total_items
  where order_code = v_order_code;

  return jsonb_build_object(
    'order_id', v_order_code,
    'total', v_total,
    'total_items', v_total_items,
    'items', v_lines
  );
end;
$$;

create or replace function public.set_order_status(
  p_order_code text,
  p_status text
)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
declare
  v_previous_status text;
  v_item record;
begin
  if not public.is_store_admin() then
    raise exception 'ADMIN_REQUIRED';
  end if;
  if p_status not in ('Pendiente', 'Enviado', 'Entregado', 'Cancelado') then
    raise exception 'INVALID_ORDER_STATUS';
  end if;

  select status into v_previous_status
  from public.orders
  where order_code = p_order_code
  for update;
  if not found then
    raise exception 'ORDER_NOT_FOUND';
  end if;
  if v_previous_status = 'Cancelado' and p_status <> 'Cancelado' then
    raise exception 'CANCELLED_ORDER_CANNOT_BE_REOPENED';
  end if;

  if p_status = 'Cancelado' and v_previous_status <> 'Cancelado' then
    for v_item in
      select product_id, color, size, quantity
      from public.order_items
      where order_code = p_order_code and product_id is not null
    loop
      update public.product_sizes
      set stock = stock + v_item.quantity
      where product_id = v_item.product_id
        and color = v_item.color
        and size = v_item.size;
    end loop;
  end if;

  update public.orders set status = p_status where order_code = p_order_code;
end;
$$;

revoke all on function public.save_product(bigint, jsonb, jsonb) from public, anon;
revoke all on function public.place_order(text, text, text, jsonb) from public;
revoke all on function public.set_order_status(text, text) from public, anon;
grant execute on function public.save_product(bigint, jsonb, jsonb) to authenticated;
grant execute on function public.place_order(text, text, text, jsonb) to anon, authenticated;
grant execute on function public.set_order_status(text, text) to authenticated;

notify pgrst, 'reload schema';
