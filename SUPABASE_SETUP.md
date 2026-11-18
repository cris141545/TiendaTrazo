# Configuración de Supabase

La tienda está publicada como sitio estático en GitHub Pages. Supabase guarda el catálogo, las existencias por talla, los clientes y los pedidos en una base compartida.

## Preparar el proyecto

1. Crea un proyecto en Supabase y espera a que termine de aprovisionarse.
2. En **SQL Editor**, ejecuta el contenido de `supabase/migrations/001_store.sql`. El catálogo inicial se crea con stock **0**; no se asignan existencias ficticias.
3. En **Authentication → Users**, crea la cuenta del dueño con su correo y una contraseña segura. Desactiva los registros públicos.
4. En SQL Editor, autoriza esa cuenta como administradora, reemplazando el correo:

   ```sql
   insert into public.admin_users (user_id)
   select id from auth.users where email = 'correo-del-dueno@ejemplo.com'
   on conflict (user_id) do nothing;
   ```

5. En **Project Settings → API**, copia la URL del proyecto y la clave **publishable** (o `anon`).
6. Reemplaza los dos valores de `window.SUPABASE_CONFIG` al final de `index.html` por la URL y la clave. Esta clave es pública por diseño: las políticas RLS restringen el acceso. **Nunca uses `service_role` en la tienda ni la publiques en GitHub.**
7. Publica el cambio en GitHub Pages y abre **Admin**. Inicia sesión con la cuenta creada y, al editar cada producto, registra sus tallas y unidades con el formato `39:4, 40:2, 41:0`. Para carteras puedes usar `Única:3`.

## Inventario y pedidos

- Solo se pueden elegir tallas con stock disponible.
- Al enviar el pedido, Supabase valida y reserva las existencias en una operación atómica, y registra el cliente y el detalle del pedido.
- Los pedidos quedan como **Pendiente** hasta coordinarlos por WhatsApp. Si se cancelan desde el panel, las unidades reservadas se devuelven al inventario.
- Los datos personales de clientes y los pedidos solo se consultan desde una sesión de administrador autorizada.

Hasta completar estos pasos, la página muestra el catálogo de referencia sin disponibilidad y no registra pedidos; así se evita vender unidades cuyo stock todavía no se ha configurado.
