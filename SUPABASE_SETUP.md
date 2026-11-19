# Configuración de Supabase

La tienda está publicada como sitio estático en GitHub Pages. Supabase guarda el catálogo, las existencias por talla, los clientes y los pedidos en una base compartida.

## Preparar el proyecto

1. Crea un proyecto en Supabase y espera a que termine de aprovisionarse.
2. En **SQL Editor**, ejecuta en orden `supabase/migrations/001_store.sql` y `supabase/migrations/002_product_colors.sql`. El catálogo inicial se crea con stock **0**; no se asignan existencias ficticias.
3. En **Authentication → Users**, crea la cuenta del dueño con su correo y una contraseña segura. Desactiva los registros públicos.
4. En SQL Editor, autoriza esa cuenta como administradora, reemplazando el correo:

   ```sql
   insert into public.admin_users (user_id)
   select id from auth.users where email = 'correo-del-dueno@ejemplo.com'
   on conflict (user_id) do nothing;
   ```

5. En **Project Settings → API**, copia la URL del proyecto y la clave **publishable** (o `anon`).
6. Reemplaza los dos valores de `window.SUPABASE_CONFIG` al final de `index.html` por la URL y la clave. Esta clave es pública por diseño: las políticas RLS restringen el acceso. **Nunca uses `service_role` en la tienda ni la publiques en GitHub.**
7. Publica el cambio en GitHub Pages. Para iniciar sesión, abre la dirección de la tienda agregando `?admin=1` (por ejemplo, `https://tu-usuario.github.io/tu-repositorio/?admin=1`) e ingresa con la cuenta creada. El acceso del panel solo se muestra después de que Supabase confirma que esa cuenta está autorizada en `admin_users`. Registra las unidades en cada color y talla. Para una talla nueva, como `46`, escribe la talla y sus unidades y pulsa **Agregar talla**; al guardar el producto, esa talla aparecerá como opción en la tienda. Las carteras no requieren color y pueden usar `Única`.

## Actualizar una base ya configurada

Si ya ejecutaste `001_store.sql`, ejecuta únicamente `supabase/migrations/002_product_colors.sql` desde **SQL Editor**; no vuelvas a ejecutar `001_store.sql`. Hasta aplicar 002, la tienda conserva temporalmente el inventario anterior por talla y no muestra selectores de color.

La migración conserva el stock actual como **Sin color asignado**. Luego, en **Admin → Gestión de Productos**, agrega los colores reales, reparte las existencias por talla entre ellos y deja en cero las unidades sin color asignado. Así no se inventa el color del stock existente ni se pierde su cantidad. Las unidades sin color no se ofrecen para la venta; si ya había pedidos pendientes antes de la migración y luego se cancelan, reasigna también al color correcto el stock que vuelva a **Sin color asignado**.

## Inventario y pedidos

- En calzado y sandalias se elige primero el color y luego una talla que tenga stock para esa combinación. Las carteras no muestran selector de color.
- Al enviar el pedido, Supabase valida y reserva las existencias en una operación atómica, y registra el cliente y el detalle del pedido.
- El mensaje de WhatsApp incluye modelo, color y talla para calzado y sandalias; para carteras omite color y talla.
- Los pedidos quedan como **Pendiente** hasta coordinarlos por WhatsApp. Si se cancelan desde el panel, las unidades reservadas se devuelven al inventario.
- Los datos personales de clientes y los pedidos solo se consultan desde una sesión de administrador autorizada.

Después de aplicar 002, los productos sin colores configurados aparecen sin disponibilidad y no se pueden pedir hasta que asignes el stock real. Así se evita vender unidades cuyo color no se ha verificado.
