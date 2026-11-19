// ==========================================================================
// 1. CONFIGURACIÓN Y CATÁLOGO BASE (SOLO VESTIR, SANDALIAS TEJIDAS Y CARTERAS)
// ==========================================================================
// Cambia este número por tu WhatsApp real con código de país (ej. 51999888777)
const STORE_WHATSAPP = "51917233318";

const SECTION_DESCRIPTIONS = {
  "Todos": {
    title: "Toda la Colección",
    sub: "Calzado de vestir para hombre y mujer, sandalias tejidas artesanalmente y carteras."
  },
  "Calzado Hombre": {
    title: "Calzado de Vestir — Hombre",
    sub: "Zapatos Oxford, Derby y mocasines de etiqueta confeccionados en cuero seleccionado."
  },
  "Calzado Mujer": {
    title: "Calzado de Vestir — Mujer",
    sub: "Zapatos de salón, tacones finos y modelos de gala para ocasiones formales."
  },
  "Sandalias Tejidas": {
    title: "Sandalias Tejidas Artesanalmente",
    sub: "Diseños trenzados a mano con tiras finas, frescura y acabado elegante."
  },
  "Carteras": {
    title: "Carteras y Marroquinería",
    sub: "Carteras estructuradas, bolsos de mano y bandoleras de acabado refinado."
  }
};

const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: "Oxford Cap-Toe Negro Ébano",
    category: "Calzado Hombre",
    price: 389.0,
    badge: "Etiqueta",
    badgeAccent: false,
    isNew: true,
    popularity: 98,
    sizes: ["39", "40", "41", "42", "43"],
    tags: "oxford vestir hombre gala negro cuero formal etiqueta",
    image: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Stiletto Salón Nude Clásico",
    category: "Calzado Mujer",
    price: 339.0,
    badge: "Nueva Colección",
    badgeAccent: true,
    isNew: true,
    popularity: 96,
    sizes: ["35", "36", "37", "38", "39"],
    tags: "salon taco mujer vestir gala nude elegante ceremonia",
    image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Sandalia Tejida Trenza Arena",
    category: "Sandalias Tejidas",
    price: 229.0,
    badge: "Tejido a Mano",
    badgeAccent: true,
    isNew: true,
    popularity: 95,
    sizes: ["35", "36", "37", "38", "39"],
    tags: "sandalia zandalia tejida trenzada artesanal mujer beige arena",
    image: "https://images.unsplash.com/photo-1603487742131-4160ec999306?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Cartera Tote Estructurada Coñac",
    category: "Carteras",
    price: 359.0,
    badge: "Cuero Genuino",
    badgeAccent: false,
    isNew: true,
    popularity: 94,
    sizes: ["Única"],
    tags: "cartera bolso tote mujer cuero marron conac mano",
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Mocasín Penny de Vestir Borgoña",
    category: "Calzado Hombre",
    price: 365.0,
    badge: "Clásico",
    badgeAccent: false,
    isNew: false,
    popularity: 91,
    sizes: ["39", "40", "41", "42", "43"],
    tags: "mocasin vestir hombre cuero borgona vino elegante formal",
    image: "https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Zapato Salón Punta Fina Negro",
    category: "Calzado Mujer",
    price: 349.0,
    badge: "Top Ventas",
    badgeAccent: false,
    isNew: false,
    popularity: 93,
    sizes: ["35", "36", "37", "38", "39"],
    tags: "zapato salon taco negro mujer vestir oficina gala",
    image: "https://images.unsplash.com/photo-1515347619252-60a4bf4fff4f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    name: "Sandalia Romana Tejida Tierra",
    category: "Sandalias Tejidas",
    price: 245.0,
    badge: "Artesanal",
    badgeAccent: false,
    isNew: true,
    popularity: 89,
    sizes: ["36", "37", "38", "39", "40"],
    tags: "sandalia zandalia tejida romana cuero tierra trenza",
    image: "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Cartera Bandolera Solapa Marfil",
    category: "Carteras",
    price: 295.0,
    badge: "Edición Fina",
    badgeAccent: true,
    isNew: true,
    popularity: 92,
    sizes: ["Única"],
    tags: "cartera bandolera bolso marfil crema mujer elegante",
    image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 9,
    name: "Derby Brogue Cuero Tabaco",
    category: "Calzado Hombre",
    price: 415.0,
    badge: "Cuero Genuino",
    badgeAccent: false,
    isNew: false,
    popularity: 88,
    sizes: ["40", "41", "42", "43"],
    tags: "derby brogue hombre vestir cuero tabaco marron traje",
    image: "https://images.unsplash.com/photo-1449505278894-297fdb3edbc1?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 10,
    name: "Cartera de Mano Clutch Noche",
    category: "Carteras",
    price: 259.0,
    badge: "Gala",
    badgeAccent: false,
    isNew: false,
    popularity: 86,
    sizes: ["Única"],
    tags: "cartera clutch mano noche gala negro mujer",
    image: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?auto=format&fit=crop&w=800&q=80"
  }
];

// ==========================================================================
// 2. ESTADO GLOBAL PERSISTENTE
// ==========================================================================
const supabaseConfig = window.SUPABASE_CONFIG || {};
const supabaseReady =
  Boolean(window.supabase && typeof window.supabase.createClient === "function") &&
  typeof supabaseConfig.url === "string" &&
  supabaseConfig.url.startsWith("https://") &&
  !supabaseConfig.url.includes("YOUR_PROJECT_ID") &&
  typeof supabaseConfig.anonKey === "string" &&
  supabaseConfig.anonKey.length > 20 &&
  !supabaseConfig.anonKey.includes("YOUR_SUPABASE");
let supabaseClient = null;
if (supabaseReady) {
  try {
    supabaseClient = window.supabase.createClient(supabaseConfig.url, supabaseConfig.anonKey);
  } catch (error) {
    console.error("La configuración de Supabase no es válida:", error);
  }
}
let inventoryStatus = supabaseClient ? "loading" : "unconfigured";
let colorInventoryReady = false;

const state = {
  products: DEFAULT_PRODUCTS.map((product) => ({
    ...product,
    stockByColor: {
      "": Object.fromEntries(product.sizes.map((size) => [String(size), 0]))
    }
  })),
  orders: [],
  isAdmin: false,
  category: "Todos",
  search: "",
  sort: "popular",
  sizeFilter: "all",
  maxPrice: 800,
  onlyWishlist: false,
  selectedSizes: {},
  selectedColors: {},
  wishlist: JSON.parse(localStorage.getItem("trazo_wishlist_v2") || "[]"),
  cart: JSON.parse(localStorage.getItem("trazo_cart_v2") || "[]")
};

function productUsesColors(product) {
  return colorInventoryReady && product.category !== "Carteras";
}

function isMissingColorColumn(error) {
  const message = String(error && error.message || "").toLowerCase();
  return (
    (error && (error.code === "42703" || error.code === "PGRST204")) &&
    message.includes("color")
  );
}

function syncSelectedSizes() {
  state.products.forEach((p) => {
    if (!p.stockByColor) {
      p.stockByColor = {
        "": Object.fromEntries((p.sizes || []).map((size) => [String(size), 0]))
      };
    }
    const colors = Object.keys(p.stockByColor);
    p.sizes = [...new Set(colors.flatMap((color) => Object.keys(p.stockByColor[color]).map(String)))];

    const selectableColors = productUsesColors(p) ? colors.filter(Boolean) : [""];
    if (!selectableColors.includes(state.selectedColors[p.id])) {
      state.selectedColors[p.id] = selectableColors[0] || "";
    }
    const currentSizes = Object.keys(p.stockByColor[state.selectedColors[p.id]] || {});
    if (!currentSizes.includes(String(state.selectedSizes[p.id]))) {
      state.selectedSizes[p.id] =
        currentSizes[Math.floor(currentSizes.length / 2)] || currentSizes[0] || "";
    }
  });
}
syncSelectedSizes();

function saveUserLists() {
  localStorage.setItem("trazo_cart_v2", JSON.stringify(state.cart));
  localStorage.setItem("trazo_wishlist_v2", JSON.stringify(state.wishlist));
}

// ==========================================================================
// 3. REFERENCIAS AL DOM
// ==========================================================================
const productsGrid = document.getElementById("productsGrid");
const resultsCounter = document.getElementById("resultsCounter");
const emptyState = document.getElementById("emptyState");
const searchInput = document.getElementById("searchInput");
const clearSearchBtn = document.getElementById("clearSearchBtn");
const sortSelect = document.getElementById("sortSelect");
const filtersPanel = document.getElementById("filtersPanel");
const toggleFiltersBtn = document.getElementById("toggleFiltersBtn");
const maxPriceRange = document.getElementById("maxPriceRange");
const maxPriceLabel = document.getElementById("maxPriceLabel");
const activeSectionTitle = document.getElementById("activeSectionTitle");
const activeSectionSub = document.getElementById("activeSectionSub");
const databaseStatus = document.getElementById("databaseStatus");

const cartDrawer = document.getElementById("cartDrawer");
const cartBackdrop = document.getElementById("cartBackdrop");
const cartItemsContainer = document.getElementById("cartItemsContainer");
const cartSubtotal = document.getElementById("cartSubtotal");
const cartCount = document.getElementById("cartCount");
const wishlistCount = document.getElementById("wishlistCount");
const toastEl = document.getElementById("toast");

// Admin DOM
const openAdminEntryBtn = document.getElementById("openAdminEntryBtn");
const adminEntryLabel = document.getElementById("adminEntryLabel");
const footerAdminLink = document.getElementById("footerAdminLink");
const adminLoginModal = document.getElementById("adminLoginModal");
const adminPanelModal = document.getElementById("adminPanelModal");
const adminLoginRequested = new URLSearchParams(window.location.search).get("admin") === "1";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[character]);
}

function setDatabaseStatus(message) {
  databaseStatus.textContent = message;
  databaseStatus.hidden = !message;
}

async function loadProductsFromDatabase() {
  let { data, error } = await supabaseClient
    .from("products")
    .select("id, name, category, price, badge, badge_accent, is_new, popularity, tags, image, product_sizes(color, size, stock)")
    .order("id");
  if (error && isMissingColorColumn(error)) {
    const legacyResult = await supabaseClient
      .from("products")
      .select("id, name, category, price, badge, badge_accent, is_new, popularity, tags, image, product_sizes(size, stock)")
      .order("id");
    if (legacyResult.error) {
      inventoryStatus = "error";
      throw legacyResult.error;
    }
    data = legacyResult.data.map((product) => ({
      ...product,
      product_sizes: product.product_sizes.map((variant) => ({ ...variant, color: "" }))
    }));
    error = null;
    colorInventoryReady = false;
  } else if (!error) {
    colorInventoryReady = true;
  }
  if (error) {
    inventoryStatus = "error";
    throw error;
  }
  if (!data) {
    inventoryStatus = "error";
    throw new Error("La base de datos no devolvió el catálogo.");
  }

  state.products = data.map((product) => {
    const stockByColor = Object.create(null);
    product.product_sizes.forEach((variant) => {
      const color = String(variant.color || "");
      if (!stockByColor[color]) stockByColor[color] = {};
      stockByColor[color][String(variant.size)] = Number(variant.stock);
    });
    return {
      id: Number(product.id),
      name: product.name,
      category: product.category,
      price: Number(product.price),
      badge: product.badge,
      badgeAccent: product.badge_accent,
      isNew: product.is_new,
      popularity: product.popularity,
      tags: product.tags,
      image: product.image,
      sizes: [...new Set(product.product_sizes.map((variant) => String(variant.size)))],
      stockByColor
    };
  });
  syncSelectedSizes();
  let cartChanged = false;
  state.cart.forEach((item) => {
    const product = state.products.find((entry) => entry.id === item.id);
    if (!product) return;
    if (
      item.name !== product.name ||
      item.price !== product.price ||
      item.image !== product.image ||
      item.category !== product.category
    ) {
      item.name = product.name;
      item.price = product.price;
      item.image = product.image;
      item.category = product.category;
      cartChanged = true;
    }
  });
  if (cartChanged) {
    saveUserLists();
    renderCart();
  }
  inventoryStatus = "ready";
  renderProducts();
  setDatabaseStatus(
    colorInventoryReady
      ? ""
      : "Ejecuta la migración 002 para activar la selección de color."
  );
}

// ==========================================================================
// 4. TIENDA PÚBLICA: CAMBIO DE APARTADOS, FILTROS Y RENDERIZADO
// ==========================================================================
function setActiveCategory(cat) {
  state.category = cat;
  state.onlyWishlist = false;

  document.querySelectorAll("#categoryPills .pill").forEach((el) => {
    el.classList.toggle("active", el.dataset.category === cat);
  });

  const info = SECTION_DESCRIPTIONS[cat] || SECTION_DESCRIPTIONS["Todos"];
  activeSectionTitle.textContent = info.title;
  activeSectionSub.textContent = info.sub;

  renderProducts();
}

function getFilteredProducts() {
  return state.products
    .filter((product) => {
      const matchesCategory =
        state.category === "Todos" || product.category === state.category;

      const query = state.search.trim().toLowerCase();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        (product.tags || "").toLowerCase().includes(query);

      const matchesSize =
        state.sizeFilter === "all" ||
        product.sizes.map(String).includes(String(state.sizeFilter));

      const matchesPrice = product.price <= state.maxPrice;

      const matchesWishlist =
        !state.onlyWishlist || state.wishlist.includes(product.id);

      return (
        matchesCategory &&
        matchesSearch &&
        matchesSize &&
        matchesPrice &&
        matchesWishlist
      );
    })
    .sort((a, b) => {
      if (state.sort === "price-asc") return a.price - b.price;
      if (state.sort === "price-desc") return b.price - a.price;
      if (state.sort === "newest") return Number(b.isNew) - Number(a.isNew);
      return (b.popularity || 80) - (a.popularity || 80);
    });
}

function getCartQuantity(productId, color, size) {
  const item = state.cart.find(
    (cartItem) =>
      cartItem.id === productId &&
      String(cartItem.color || "") === String(color || "") &&
      String(cartItem.size) === String(size)
  );
  return item ? item.qty : 0;
}

function renderProducts() {
  syncSelectedSizes();
  const filtered = getFilteredProducts();
  resultsCounter.textContent = `Mostrando ${filtered.length} ${
    filtered.length === 1 ? "artículo" : "artículos"
  }`;

  if (filtered.length === 0) {
    productsGrid.innerHTML = "";
    emptyState.hidden = false;
    return;
  }

  emptyState.hidden = true;
  productsGrid.innerHTML = filtered
    .map((product) => {
      const isFav = state.wishlist.includes(product.id);
      const hasColorSelection = productUsesColors(product);
      const colors = Object.keys(product.stockByColor).filter(Boolean);
      const activeColor = hasColorSelection ? String(state.selectedColors[product.id] || "") : "";
      const stockBySize = product.stockByColor[activeColor] || {};
      const activeSize = String(state.selectedSizes[product.id]);
      const selectedStock = Number(stockBySize[activeSize] || 0);
      const selectedAvailableStock =
        selectedStock - getCartQuantity(product.id, activeColor, activeSize);
      const canAddSelectedSize =
        inventoryStatus === "ready" &&
        (!hasColorSelection || Boolean(activeColor)) &&
        selectedAvailableStock > 0;

      const colorsHTML = hasColorSelection
        ? colors.length
          ? `
            <div class="card-colors" aria-label="Seleccionar color">
              ${colors
                .map(
                  (color) => `
                    <button
                      type="button"
                      class="color-option ${color === activeColor ? "selected" : ""}"
                      data-action="select-color"
                      data-id="${product.id}"
                      data-color="${escapeHtml(color)}"
                      aria-pressed="${color === activeColor}"
                    >${escapeHtml(color)}</button>
                  `
                )
                .join("")}
            </div>
          `
          : '<p class="color-pending">Colores pendientes de configurar</p>'
        : "";

      const sizesHTML = Object.keys(stockBySize)
        .map((size) => {
          const stock = Number(stockBySize[String(size)] || 0);
          const available =
            inventoryStatus === "ready" &&
            stock > getCartQuantity(product.id, activeColor, size);
          return `
          <button
            type="button"
            class="size-option ${String(size) === activeSize ? "selected" : ""} ${available ? "" : "out-of-stock"}"
            data-action="select-size"
            data-id="${product.id}"
            data-size="${escapeHtml(size)}"
            aria-label="${escapeHtml(`${size === "Única" ? "Talla única" : `Talla ${size}`}${available ? ", disponible" : inventoryStatus === "ready" ? ", agotada" : ", stock no disponible"}`)}"
            ${available ? "" : "disabled"}
          >${escapeHtml(size === "Única" ? "Talla Única" : size)}</button>
        `;
        })
        .join("");

      return `
        <article class="product-card">
          <div class="card-media">
            ${
              product.badge
                ? `<span class="card-badge ${
                    product.badgeAccent ? "accent" : ""
                  }">${escapeHtml(product.badge)}</span>`
                : ""
            }
            <button
              type="button"
              class="card-fav-btn ${isFav ? "is-fav" : ""}"
              data-action="toggle-fav"
              data-id="${product.id}"
              aria-label="Guardar en favoritos"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <img
              src="${escapeHtml(product.image)}"
              alt="${escapeHtml(product.name)}"
              loading="lazy"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f8f7f4%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2216%22 fill=%22%236e6d7a%22>${encodeURIComponent(product.name)}</text></svg>'"
            />
          </div>

          <div class="card-header">
            <h3 class="card-title">${escapeHtml(product.name)}</h3>
            <span class="card-price">S/ ${Number(product.price).toFixed(2)}</span>
          </div>
          <p class="card-category">${escapeHtml(product.category)}</p>
          ${colorsHTML}
          <p class="card-stock ${selectedAvailableStock > 0 ? "" : "out-of-stock"}">
            ${inventoryStatus === "unconfigured" ? "Stock pendiente de configurar" : inventoryStatus === "loading" ? "Cargando stock..." : inventoryStatus === "error" ? "Stock no disponible" : hasColorSelection && !activeColor ? "Asigna colores en el panel" : selectedAvailableStock > 0 ? "Disponible" : "Agotado"}
          </p>

          <div class="card-sizes" aria-label="Seleccionar talla o medida">
            ${sizesHTML || (hasColorSelection && !activeColor ? '<span class="size-pending">Selecciona un color para ver tallas</span>' : "")}
          </div>

          <button
            type="button"
            class="btn-add-cart"
            data-action="add-cart"
            data-id="${product.id}"
            ${canAddSelectedSize ? "" : "disabled"}
          >
            ${canAddSelectedSize ? "Agregar al carrito" : inventoryStatus === "ready" && hasColorSelection && !activeColor ? "Color pendiente" : inventoryStatus === "ready" ? "Agotado" : "No disponible"}
          </button>
        </article>
      `;
    })
    .join("");
}

// ==========================================================================
// 5. CARRITO DE COMPRAS Y REGISTRO DE VENTAS
// ==========================================================================
function updateBadges() {
  const totalItems = state.cart.reduce((acc, item) => acc + item.qty, 0);
  cartCount.textContent = totalItems;
  wishlistCount.textContent = state.wishlist.length;
}

function addToCart(productId) {
  const product = state.products.find((p) => p.id === productId);
  const color = product && productUsesColors(product) ? String(state.selectedColors[productId] || "") : "";
  const size = String(state.selectedSizes[productId]);
  if (!product) return;

  if (productUsesColors(product) && !color) {
    showToast("Este artículo aún no tiene colores asignados.");
    return;
  }
  const stock = Number((product.stockByColor[color] || {})[size] || 0);
  if (inventoryStatus !== "ready" || getCartQuantity(productId, color, size) >= stock) {
    showToast(stock === 0 ? "Esta talla está agotada" : "No hay más unidades disponibles de esta talla");
    return;
  }

  const existing = state.cart.find(
    (item) =>
      item.id === productId &&
      String(item.color || "") === color &&
      String(item.size) === size
  );

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      category: product.category,
      color,
      size,
      qty: 1
    });
  }

  saveUserLists();
  updateBadges();
  renderCart();
  renderProducts();
  const sizeText = size === "Única" ? "Talla Única" : `Talla ${size}`;
  const colorText = color ? `, ${color}` : "";
  showToast(`Agregado: ${product.name} (${sizeText}${colorText})`);
}

function changeCartQty(index, delta) {
  const item = state.cart[index];
  if (!item) return;
  if (delta > 0) {
    const product = state.products.find((entry) => entry.id === item.id);
    const color = String(item.color || "");
    if (
      inventoryStatus !== "ready" ||
      !product ||
      item.qty >= Number((product.stockByColor[color] || {})[String(item.size)] || 0)
    ) {
      showToast("No hay más unidades disponibles de esta talla");
      return;
    }
  }

  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveUserLists();
  updateBadges();
  renderCart();
  renderProducts();
}

function renderCart() {
  if (state.cart.length === 0) {
    cartItemsContainer.innerHTML = `
      <p style="color: var(--text-secondary); text-align:center; margin-top: 40px;">
        Tu selección está vacía. Explora nuestro calzado de vestir, sandalias tejidas y carteras.
      </p>
    `;
    cartSubtotal.textContent = "S/ 0.00";
    return;
  }

  let subtotal = 0;
  cartItemsContainer.innerHTML = state.cart
    .map((item, idx) => {
      subtotal += item.price * item.qty;
      const product = state.products.find((entry) => entry.id === item.id);
      const category = product ? product.category : item.category;
      const sizeLabel = item.size === "Única" ? "Talla Única" : `Talla ${item.size}`;
      const variantLabels = [];
      if (category !== "Carteras" && item.color) variantLabels.push(`Color: ${item.color}`);
      if (sizeLabel) variantLabels.push(sizeLabel);
      return `
        <div class="cart-item">
          <img src="${escapeHtml(item.image)}" alt="${escapeHtml(item.name)}" />
          <div>
            <div class="cart-item-title">${escapeHtml(item.name)}</div>
            <div class="cart-item-meta">${escapeHtml(variantLabels.join(" · "))} &middot; S/ ${item.price.toFixed(2)}</div>
            <div class="qty-controls">
              <button class="qty-btn" data-cart-idx="${idx}" data-delta="-1">-</button>
              <span>${item.qty}</span>
              <button class="qty-btn" data-cart-idx="${idx}" data-delta="1">+</button>
            </div>
          </div>
          <strong>S/ ${(item.price * item.qty).toFixed(2)}</strong>
        </div>
      `;
    })
    .join("");

  cartSubtotal.textContent = `S/ ${subtotal.toFixed(2)}`;
}

function openCart() {
  cartBackdrop.hidden = false;
  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartBackdrop.hidden = true;
  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

function showToast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(window._toastTimer);
  window._toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2500);
}

// ==========================================================================
// 6. AUTENTICACIÓN Y PANEL DE ADMINISTRADOR
// ==========================================================================
function updateAdminUIState() {
  openAdminEntryBtn.hidden = !state.isAdmin;
  footerAdminLink.hidden = !state.isAdmin;
  if (state.isAdmin) {
    openAdminEntryBtn.classList.add("is-logged");
    adminEntryLabel.textContent = "Panel Admin";
  } else {
    openAdminEntryBtn.classList.remove("is-logged");
    adminEntryLabel.textContent = "Admin";
  }
}

async function verifyAdminUser(userId) {
  const { data, error } = await supabaseClient
    .from("admin_users")
    .select("user_id")
    .eq("user_id", userId)
    .maybeSingle();
  if (error) throw error;
  return Boolean(data);
}

async function loadOrdersFromDatabase() {
  let { data, error } = await supabaseClient
    .from("orders")
    .select("order_code, created_at, status, total, total_items, channel, delivery_address, customers(full_name, phone), order_items(product_name, color, size, quantity, unit_price, subtotal)")
    .order("created_at", { ascending: false });
  if (error && isMissingColorColumn(error)) {
    const legacyResult = await supabaseClient
      .from("orders")
      .select("order_code, created_at, status, total, total_items, channel, delivery_address, customers(full_name, phone), order_items(product_name, size, quantity, unit_price, subtotal)")
      .order("created_at", { ascending: false });
    if (legacyResult.error) throw legacyResult.error;
    data = legacyResult.data.map((order) => ({
      ...order,
      order_items: order.order_items.map((item) => ({ ...item, color: "" }))
    }));
    error = null;
  }
  if (error) throw error;

  state.orders = data.map((order) => {
    const customer = Array.isArray(order.customers)
      ? (order.customers[0] || {})
      : (order.customers || {});
    return {
      id: order.order_code,
      date: order.created_at,
      customer: customer.full_name || "Cliente",
      phone: customer.phone || "",
      address: order.delivery_address,
      channel: order.channel,
      status: order.status,
      totalPairs: order.total_items,
      total: Number(order.total),
      items: order.order_items.map((item) => ({
        name: item.product_name,
        color: item.color || "",
        size: item.size,
        qty: item.quantity,
        price: Number(item.unit_price),
        subtotal: Number(item.subtotal)
      }))
    };
  });
}

function handleAdminEntryClick(e) {
  if (e) e.preventDefault();
  if (state.isAdmin) {
    openAdminPanel();
  } else {
    requestAdminLogin();
  }
}

function requestAdminLogin() {
  if (state.isAdmin) {
    openAdminPanel();
    return;
  }
  const loginError = document.getElementById("loginErrorMsg");
  loginError.textContent = supabaseClient ? "" : "La base de datos aún no está configurada.";
  loginError.hidden = Boolean(supabaseClient);
  adminLoginModal.hidden = false;
}

async function openAdminPanel() {
  if (!state.isAdmin) return;
  try {
    await Promise.all([loadProductsFromDatabase(), loadOrdersFromDatabase()]);
    renderColorStockEditor(editorStockByColor, selectedEditorColor);
    renderAdminProductsTable();
    renderSalesReports();
    adminPanelModal.hidden = false;
  } catch (error) {
    console.error("No se pudo cargar el panel de administración:", error);
    showToast("No se pudieron cargar los datos del panel. Revisa la conexión.");
  }
}

function closeAdminPanel() {
  adminPanelModal.hidden = true;
}

document.getElementById("adminLoginForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!supabaseClient) {
    document.getElementById("loginErrorMsg").textContent = "La base de datos aún no está configurada.";
    document.getElementById("loginErrorMsg").hidden = false;
    return;
  }

  const user = document.getElementById("adminUserInput").value.trim();
  const pass = document.getElementById("adminPassInput").value.trim();
  const loginError = document.getElementById("loginErrorMsg");
  const submitButton = e.currentTarget.querySelector('button[type="submit"]');
  submitButton.disabled = true;

  try {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email: user,
      password: pass
    });
    if (error) throw error;

    if (!(await verifyAdminUser(data.user.id))) {
      await supabaseClient.auth.signOut();
      loginError.textContent = "Esta cuenta no tiene permisos de administración.";
      loginError.hidden = false;
      return;
    }

    state.isAdmin = true;
    adminLoginModal.hidden = true;
    document.getElementById("adminLoginForm").reset();
    updateAdminUIState();
    await openAdminPanel();
    showToast("Sesión de administrador iniciada");
  } catch (error) {
    console.error("No se pudo iniciar sesión de administrador:", error);
    loginError.textContent = "No se pudo iniciar sesión. Verifica tu correo y contraseña.";
    loginError.hidden = false;
  } finally {
    submitButton.disabled = false;
  }
});

document.getElementById("adminLogoutBtn").addEventListener("click", async () => {
  if (supabaseClient) {
    const { error } = await supabaseClient.auth.signOut();
    if (error) {
      console.error("No se pudo cerrar la sesión de Supabase:", error);
      showToast("No se pudo cerrar la sesión. Inténtalo nuevamente.");
      return;
    }
  }
  state.isAdmin = false;
  updateAdminUIState();
  closeAdminPanel();
  showToast("Sesión de administrador cerrada");
});

openAdminEntryBtn.addEventListener("click", handleAdminEntryClick);
footerAdminLink.addEventListener("click", handleAdminEntryClick);
document.getElementById("closeLoginModalBtn").addEventListener("click", () => {
  adminLoginModal.hidden = true;
});
document.getElementById("closeAdminPanelBtn").addEventListener("click", closeAdminPanel);

document.querySelectorAll(".admin-tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    document.querySelectorAll(".admin-tab").forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    const target = tab.dataset.adminTab;
    document.getElementById("adminInventoryView").hidden = target !== "inventory";
    document.getElementById("adminReportsView").hidden = target !== "reports";

    if (target === "reports") {
      loadOrdersFromDatabase()
        .then(renderSalesReports)
        .catch((error) => {
          console.error("No se pudieron cargar los pedidos:", error);
          showToast("No se pudieron cargar los pedidos.");
        });
    }
    if (target === "inventory") renderAdminProductsTable();
  });
});

// ==========================================================================
// 7. CRUD DE PRODUCTOS (SUBIR, EDITAR, ELIMINAR)
// ==========================================================================
const productAdminForm = document.getElementById("productAdminForm");
const prodCategorySelect = document.getElementById("prodCategory");
const prodColorField = document.getElementById("prodColorField");
const prodColorSelect = document.getElementById("prodColorSelect");
const prodNewColorInput = document.getElementById("prodNewColor");
const prodSizeRows = document.getElementById("prodSizeRows");
const prodNewSizeInput = document.getElementById("prodNewSize");
const prodNewSizeStockInput = document.getElementById("prodNewSizeStock");
const prodImageUrlInput = document.getElementById("prodImageUrl");
const prodImageFileInput = document.getElementById("prodImageFile");
const prodPreviewBox = document.getElementById("prodPreviewBox");
const prodPreviewImg = document.getElementById("prodPreviewImg");
let editorStockByColor = {};
let selectedEditorColor = "";

function getSuggestedStockEntries(category) {
  const sizes =
    category === "Carteras"
      ? ["Única"]
      : category === "Calzado Mujer" || category === "Sandalias Tejidas"
        ? ["35", "36", "37", "38", "39"]
        : ["39", "40", "41", "42", "43"];
  return Object.fromEntries(sizes.map((size) => [size, 0]));
}

function getSuggestedColorStock(category) {
  return { "": getSuggestedStockEntries(category) };
}

function renderSizeStockEditor(stockBySize) {
  const entries = Object.entries(stockBySize);
  prodSizeRows.innerHTML = entries.length
    ? entries
        .map(
          ([size, stock]) => `
            <div class="size-stock-row">
              <span class="size-stock-name">Talla ${escapeHtml(size)}</span>
              <input
                type="number"
                min="0"
                step="1"
                value="${Number(stock)}"
                data-size-stock="${escapeHtml(size)}"
                aria-label="Unidades disponibles para talla ${escapeHtml(size)}"
              />
              <button
                type="button"
                class="btn-remove-size"
                data-remove-size="${escapeHtml(size)}"
                aria-label="Quitar talla ${escapeHtml(size)}"
              >×</button>
            </div>
          `
        )
        .join("")
    : '<p class="size-stock-hint">Agrega al menos una talla.</p>';
}

function readSizeStockEditor() {
  const inputs = prodSizeRows.querySelectorAll("[data-size-stock]");
  if (inputs.length === 0) throw new Error("Agrega al menos una talla y su stock.");

  const stockBySize = Object.create(null);
  inputs.forEach((input) => {
    const size = input.dataset.sizeStock.trim();
    const value = input.value.trim();
    const stock = Number(value);
    if (
      !size ||
      size.length > 20 ||
      !value ||
      !Number.isSafeInteger(stock) ||
      stock < 0 ||
      stock > 2147483647 ||
      Object.prototype.hasOwnProperty.call(stockBySize, size)
    ) {
      throw new Error("Revisa las tallas y usa cantidades enteras entre 0 y 2,147,483,647.");
    }
    stockBySize[size] = stock;
  });
  return stockBySize;
}

function saveCurrentColorStock() {
  editorStockByColor[selectedEditorColor] = readSizeStockEditor();
}

function renderColorStockEditor(stockByColor, selectedColor) {
  editorStockByColor = Object.fromEntries(
    Object.entries(stockByColor).map(([color, stockBySize]) => [
      String(color),
      { ...stockBySize }
    ])
  );
  if (Object.keys(editorStockByColor).length === 0) {
    editorStockByColor = getSuggestedColorStock(prodCategorySelect.value);
  }

  const colors = Object.keys(editorStockByColor);
  const supportsColors =
    (colorInventoryReady && prodCategorySelect.value !== "Carteras") || colors.some(Boolean);
  prodColorField.hidden = !supportsColors;
  selectedEditorColor = colors.includes(String(selectedColor)) ? String(selectedColor) : colors[0];
  prodColorSelect.innerHTML = colors
    .map(
      (color) => `<option value="${escapeHtml(color)}">${escapeHtml(color || "Sin color asignado")}</option>`
    )
    .join("");
  prodColorSelect.value = selectedEditorColor;
  document.getElementById("stockEditorTitle").textContent =
    `Stock disponible por talla${selectedEditorColor ? ` — ${selectedEditorColor}` : ""} *`;
  renderSizeStockEditor(editorStockByColor[selectedEditorColor] || {});
}

function readColorStockEditor() {
  saveCurrentColorStock();
  const colors = Object.keys(editorStockByColor);
  if (
    colorInventoryReady &&
    prodCategorySelect.value === "Carteras" &&
    colors.some((color) => color.trim())
  ) {
    throw new Error("Quita los colores antes de cambiar el producto a Carteras.");
  }
  if (
    colorInventoryReady &&
    prodCategorySelect.value !== "Carteras" &&
    !colors.some((color) => color.trim())
  ) {
    throw new Error("Agrega al menos un color para el calzado o las sandalias.");
  }
  return colors.flatMap((color) =>
    Object.entries(editorStockByColor[color]).map(([size, stock]) => ({
      color,
      size,
      stock
    }))
  );
}

prodColorSelect.addEventListener("change", () => {
  try {
    saveCurrentColorStock();
  } catch (error) {
    showToast(error.message);
    prodColorSelect.value = selectedEditorColor;
    return;
  }
  selectedEditorColor = prodColorSelect.value;
  document.getElementById("stockEditorTitle").textContent =
    `Stock disponible por talla${selectedEditorColor ? ` — ${selectedEditorColor}` : ""} *`;
  renderSizeStockEditor(editorStockByColor[selectedEditorColor] || {});
});

document.getElementById("addProductColorBtn").addEventListener("click", () => {
  if (!colorInventoryReady) {
    showToast("Ejecuta la migración 002 para activar el inventario por color.");
    return;
  }
  if (prodCategorySelect.value === "Carteras") {
    showToast("Las carteras no usan variantes de color.");
    return;
  }
  const color = prodNewColorInput.value.trim();
  if (!color) {
    showToast("Escribe el color que deseas agregar.");
    prodNewColorInput.focus();
    return;
  }

  try {
    saveCurrentColorStock();
  } catch (error) {
    showToast(error.message);
    return;
  }
  if (color.length > 60) {
    showToast("El nombre del color no puede superar 60 caracteres.");
    return;
  }
  if (Object.keys(editorStockByColor).some((entry) => entry.toLowerCase() === color.toLowerCase())) {
    showToast(`El color ${color} ya está agregado.`);
    prodNewColorInput.focus();
    return;
  }

  const currentSizes = Object.keys(editorStockByColor[selectedEditorColor] || {});
  const suggestedSizes = Object.keys(getSuggestedStockEntries(prodCategorySelect.value));
  editorStockByColor[color] = Object.fromEntries(
    (currentSizes.length ? currentSizes : suggestedSizes).map((size) => [size, 0])
  );
  selectedEditorColor = color;
  prodNewColorInput.value = "";
  renderColorStockEditor(editorStockByColor, selectedEditorColor);
  prodNewSizeInput.focus();
});

document.getElementById("removeProductColorBtn").addEventListener("click", () => {
  if (!selectedEditorColor) {
    showToast("El stock sin color asignado no se puede quitar; pon sus unidades en cero.");
    return;
  }

  try {
    saveCurrentColorStock();
  } catch (error) {
    showToast(error.message);
    return;
  }
  if (Object.values(editorStockByColor[selectedEditorColor]).some((stock) => stock > 0)) {
    showToast("Pon en cero las unidades de este color antes de quitarlo.");
    return;
  }

  delete editorStockByColor[selectedEditorColor];
  if (Object.keys(editorStockByColor).length === 0) {
    editorStockByColor = getSuggestedColorStock(prodCategorySelect.value);
  }
  selectedEditorColor = Object.keys(editorStockByColor)[0];
  renderColorStockEditor(editorStockByColor, selectedEditorColor);
});

document.getElementById("addProductSizeBtn").addEventListener("click", () => {
  const size = prodNewSizeInput.value.trim();
  const stockValue = prodNewSizeStockInput.value.trim();
  const stock = Number(stockValue);
  if (!size) {
    showToast("Escribe la talla que deseas agregar.");
    prodNewSizeInput.focus();
    return;
  }
  if (!stockValue || !Number.isSafeInteger(stock) || stock < 0 || stock > 2147483647) {
    showToast("Ingresa una cantidad entera entre 0 y 2,147,483,647.");
    prodNewSizeStockInput.focus();
    return;
  }

  let stockBySize;
  try {
    stockBySize = readSizeStockEditor();
  } catch (error) {
    showToast(error.message);
    return;
  }
  if (Object.prototype.hasOwnProperty.call(stockBySize, size)) {
    showToast(`La talla ${size} ya está agregada.`);
    prodNewSizeInput.focus();
    return;
  }

  stockBySize[size] = stock;
  editorStockByColor[selectedEditorColor] = stockBySize;
  renderSizeStockEditor(stockBySize);
  prodNewSizeInput.value = "";
  prodNewSizeStockInput.value = "0";
  prodNewSizeInput.focus();
});

prodSizeRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-remove-size]");
  if (!button) return;

  let stockBySize;
  try {
    stockBySize = readSizeStockEditor();
  } catch (error) {
    showToast(error.message);
    return;
  }
  if (Object.keys(stockBySize).length === 1) {
    showToast("El producto debe conservar al menos una talla.");
    return;
  }
  delete stockBySize[button.dataset.removeSize];
  editorStockByColor[selectedEditorColor] = stockBySize;
  renderSizeStockEditor(stockBySize);
});

prodCategorySelect.addEventListener("change", () => {
  if (document.getElementById("editProductId").value) {
    try {
      saveCurrentColorStock();
    } catch (error) {
      showToast(error.message);
      return;
    }
    renderColorStockEditor(editorStockByColor, selectedEditorColor);
    return;
  }
  renderColorStockEditor(getSuggestedColorStock(prodCategorySelect.value), "");
});

prodImageFileInput.addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const maxWidth = 700;
      const scale = Math.min(1, maxWidth / img.width);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const compressedDataUrl = canvas.toDataURL("image/jpeg", 0.82);
      prodImageUrlInput.value = compressedDataUrl;
      prodPreviewImg.src = compressedDataUrl;
      prodPreviewBox.hidden = false;
      document.getElementById("fileUploadStatus").textContent = file.name;
    };
    img.src = event.target.result;
  };
  reader.readAsDataURL(file);
});

prodImageUrlInput.addEventListener("input", () => {
  const val = prodImageUrlInput.value.trim();
  if (val) {
    prodPreviewImg.src = val;
    prodPreviewBox.hidden = false;
  } else {
    prodPreviewBox.hidden = true;
  }
});

function resetProductForm() {
  productAdminForm.reset();
  document.getElementById("editProductId").value = "";
  document.getElementById("productFormTitle").textContent = "Subir Nuevo Artículo";
  document.getElementById("saveProductBtn").textContent = "Publicar Artículo";
  document.getElementById("cancelEditBtn").hidden = true;
  document.getElementById("fileUploadStatus").textContent = "JPG, PNG o WebP";
  prodNewColorInput.value = "";
  renderColorStockEditor(getSuggestedColorStock(prodCategorySelect.value), "");
  prodPreviewBox.hidden = true;
}

renderColorStockEditor(getSuggestedColorStock(prodCategorySelect.value), "");
document.getElementById("cancelEditBtn").addEventListener("click", resetProductForm);

function formatStockEntries(product) {
  return Object.entries(product.stockByColor)
    .map(([color, stockBySize]) => {
      const sizes = Object.entries(stockBySize)
        .map(([size, stock]) => `${size}:${Number(stock)}`)
        .join(", ");
      return `${color || "Sin color asignado"} — ${sizes}`;
    })
    .join(" | ");
}

async function refreshAdminCatalog() {
  try {
    await loadProductsFromDatabase();
    renderAdminProductsTable();
  } catch (error) {
    console.error("No se pudo actualizar el catálogo desde la base de datos:", error);
    renderProducts();
    setDatabaseStatus("No se pudo actualizar el catálogo. Verifica tu conexión.");
    showToast("El cambio se guardó, pero no se pudo actualizar la vista.");
  }
}

productAdminForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  if (!state.isAdmin || !supabaseClient) return;

  const editId = document.getElementById("editProductId").value;
  const name = document.getElementById("prodName").value.trim();
  const category = prodCategorySelect.value;
  const price = parseFloat(document.getElementById("prodPrice").value);
  const badge = document.getElementById("prodBadge").value.trim();
  const tags = document.getElementById("prodTags").value.trim();
  const image =
    prodImageUrlInput.value.trim() ||
    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80";

  let variants;
  try {
    variants = readColorStockEditor();
  } catch (error) {
    showToast(error.message);
    const firstSizeInput = prodSizeRows.querySelector("[data-size-stock]");
    if (firstSizeInput) firstSizeInput.focus();
    return;
  }

  const currentProduct = state.products.find((product) => product.id === Number(editId));
  const product = {
    name,
    category,
    price,
    badge: badge || (editId ? "" : "Nuevo"),
    badge_accent: Boolean(badge),
    is_new: editId ? Boolean(currentProduct && currentProduct.isNew) : true,
    popularity: editId ? (currentProduct ? currentProduct.popularity : 80) : 99,
    tags: tags || `${name.toLowerCase()} ${category.toLowerCase()}`,
    image
  };
  const saveButton = document.getElementById("saveProductBtn");
  saveButton.disabled = true;

  try {
    const { error } = await supabaseClient.rpc("save_product", {
      p_product_id: editId ? Number(editId) : null,
      p_product: product,
      p_sizes: variants
    });
    if (error) throw error;

    showToast(editId ? "Artículo actualizado correctamente" : "Nuevo artículo publicado en la tienda");
    resetProductForm();
    await refreshAdminCatalog();
  } catch (error) {
    console.error("No se pudo guardar el producto:", error);
    const errorMessage = String(error.message || "");
    if (errorMessage.includes("VARIANT_HAS_STOCK_OR_PENDING_ORDER")) {
      showToast("No puedes quitar una combinación de color y talla con stock o pedidos pendientes.");
    } else if (errorMessage.includes("COLOR_NOT_SUPPORTED_FOR_CATEGORY")) {
      showToast("Quita los colores antes de cambiar el producto a Carteras.");
    } else {
      showToast("No se pudo guardar el producto. Revisa los datos e inténtalo de nuevo.");
    }
  } finally {
    saveButton.disabled = false;
  }
});

function renderAdminProductsTable() {
  const tbody = document.getElementById("adminProductsTableBody");
  document.getElementById("adminProductCount").textContent = state.products.length;

  tbody.innerHTML = state.products
    .map(
      (prod) => `
      <tr>
        <td>
          <div class="table-prod-cell">
            <img src="${escapeHtml(prod.image)}" alt="${escapeHtml(prod.name)}" />
            <div>
              <strong>${escapeHtml(prod.name)}</strong>
              <div style="font-size:0.75rem; color:var(--text-secondary);">${escapeHtml(prod.badge || "Sin etiqueta")}</div>
            </div>
          </div>
        </td>
        <td>${escapeHtml(prod.category)}</td>
        <td>${escapeHtml(formatStockEntries(prod))}</td>
        <td><strong>S/ ${Number(prod.price).toFixed(2)}</strong></td>
        <td>
          <div class="table-actions">
            <button type="button" class="btn-tbl-edit" data-admin-action="edit" data-id="${prod.id}">Editar</button>
            <button type="button" class="btn-tbl-del" data-admin-action="delete" data-id="${prod.id}">Borrar</button>
          </div>
        </td>
      </tr>
    `
    )
    .join("");
}

document.getElementById("adminProductsTableBody").addEventListener("click", async (e) => {
  const btn = e.target.closest("button");
  if (!btn || !state.isAdmin) return;

  const action = btn.dataset.adminAction;
  const id = Number(btn.dataset.id);

  if (action === "edit") {
    const prod = state.products.find((p) => p.id === id);
    if (!prod) return;

    document.getElementById("editProductId").value = prod.id;
    document.getElementById("prodName").value = prod.name;
    prodCategorySelect.value = prod.category;
    document.getElementById("prodPrice").value = prod.price;
    document.getElementById("prodBadge").value = prod.badge || "";
    prodNewColorInput.value = "";
    renderColorStockEditor(prod.stockByColor, "");
    document.getElementById("prodTags").value = prod.tags || "";
    prodImageUrlInput.value = prod.image;
    prodPreviewImg.src = prod.image;
    prodPreviewBox.hidden = false;

    document.getElementById("productFormTitle").textContent = `Editando: ${prod.name}`;
    document.getElementById("saveProductBtn").textContent = "Guardar Cambios";
    document.getElementById("cancelEditBtn").hidden = false;
  } else if (action === "delete") {
    const prod = state.products.find((p) => p.id === id);
    if (!prod) return;
    if (confirm(`¿Seguro que deseas eliminar "${prod.name}" del catálogo?`)) {
      try {
        const { error } = await supabaseClient.rpc("delete_product", { p_product_id: id });
        if (error) throw error;
        showToast("Artículo eliminado");
        await refreshAdminCatalog();
      } catch (error) {
        console.error("No se pudo eliminar el producto:", error);
        showToast(
          error.message.includes("PRODUCT_HAS_PENDING_ORDERS")
            ? "No puedes eliminar un artículo con pedidos pendientes."
            : "No se pudo eliminar el artículo."
        );
      }
    }
  }
});

// ==========================================================================
// 8. REPORTES DE VENTAS Y EXPORTACIÓN A EXCEL (.CSV)
// ==========================================================================
function renderSalesReports() {
  const filterStatus = document.getElementById("reportStatusFilter").value;
  const filteredOrders =
    filterStatus === "all"
      ? state.orders
      : state.orders.filter((o) => o.status === filterStatus);

  const activeOrders = state.orders.filter((order) => order.status !== "Cancelado");
  const totalRevenue = activeOrders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = state.orders.length;
  const totalPairs = activeOrders.reduce((sum, o) => sum + o.totalPairs, 0);

  const productSalesMap = {};
  activeOrders.forEach((order) => {
    order.items.forEach((item) => {
      productSalesMap[item.name] = (productSalesMap[item.name] || 0) + item.qty;
    });
  });

  let topProduct = "—";
  let topQty = 0;
  Object.entries(productSalesMap).forEach(([name, qty]) => {
    if (qty > topQty) {
      topQty = qty;
      topProduct = name;
    }
  });

  document.getElementById("kpiTotalRevenue").textContent = `S/ ${totalRevenue.toFixed(2)}`;
  document.getElementById("kpiTotalOrders").textContent = totalOrders;
  document.getElementById("kpiTotalPairs").textContent = totalPairs;
  document.getElementById("kpiTopProduct").textContent = topProduct;
  document.getElementById("kpiTopProductSub").textContent =
    topQty > 0 ? `${topQty} unidades vendidas` : "Sin ventas registradas";

  const tbody = document.getElementById("adminOrdersTableBody");
  if (filteredOrders.length === 0) {
    tbody.innerHTML = `<tr><td colspan="7" style="text-align:center; padding:28px; color:var(--text-secondary);">No hay pedidos en esta categoría.</td></tr>`;
    return;
  }

  tbody.innerHTML = filteredOrders
    .map((order) => {
      const dateStr = new Date(order.date).toLocaleDateString("es-PE", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });

      const itemsSummary = order.items
        .map((i) => escapeHtml(`${i.qty}x ${i.name}${i.color ? ` — ${i.color}` : ""} (${i.size === "Única" ? "Única" : "T." + i.size})`))
        .join("<br/>");

      return `
        <tr>
          <td><strong>${escapeHtml(order.id)}</strong></td>
          <td>${dateStr}</td>
          <td>
            <strong>${escapeHtml(order.customer)}</strong>
            ${order.phone ? `<div style="font-size:0.76rem; color:var(--text-secondary);">WhatsApp: ${escapeHtml(order.phone)}</div>` : ""}
            <div style="font-size:0.76rem; color:var(--text-secondary);">${escapeHtml(order.address)}</div>
          </td>
          <td>${itemsSummary}</td>
          <td>${escapeHtml(order.channel)}</td>
          <td><strong>S/ ${order.total.toFixed(2)}</strong></td>
          <td>
            <select class="status-select" data-order-id="${escapeHtml(order.id)}" ${order.status === "Cancelado" ? "disabled" : ""}>
              <option value="Pendiente" ${order.status === "Pendiente" ? "selected" : ""}>Pendiente</option>
              <option value="Enviado" ${order.status === "Enviado" ? "selected" : ""}>Enviado</option>
              <option value="Entregado" ${order.status === "Entregado" ? "selected" : ""}>Entregado</option>
              <option value="Cancelado" ${order.status === "Cancelado" ? "selected" : ""}>Cancelado</option>
            </select>
          </td>
        </tr>
      `;
    })
    .join("");
}

document.getElementById("reportStatusFilter").addEventListener("change", renderSalesReports);

document.getElementById("adminOrdersTableBody").addEventListener("change", async (e) => {
  const select = e.target.closest(".status-select");
  if (!select || !state.isAdmin) return;
  const order = state.orders.find((o) => o.id === select.dataset.orderId);
  if (!order) return;

  const previousStatus = order.status;
  select.disabled = true;
  try {
    const { error } = await supabaseClient.rpc("set_order_status", {
      p_order_code: order.id,
      p_status: select.value
    });
    if (error) throw error;

    order.status = select.value;
    renderSalesReports();
    showToast(`Pedido ${order.id} actualizado a ${order.status}`);
    if (order.status === "Cancelado") {
      try {
        await loadProductsFromDatabase();
      } catch (refreshError) {
        console.error("No se pudo actualizar el inventario tras cancelar el pedido:", refreshError);
        renderProducts();
        setDatabaseStatus("Pedido cancelado; recarga la página para ver el stock actualizado.");
      }
    }
  } catch (error) {
    console.error("No se pudo actualizar el estado del pedido:", error);
    select.value = previousStatus;
    select.disabled = false;
    showToast("No se pudo actualizar el pedido.");
  }
});

document.getElementById("exportCsvBtn").addEventListener("click", () => {
  if (!state.isAdmin) return;

  const headers = ["Codigo", "Fecha", "Cliente", "Telefono", "Direccion", "Canal", "Estado", "Unidades", "Detalle", "Total_Soles"];
  const rows = state.orders.map((o) => {
    const fecha = new Date(o.date).toLocaleString("es-PE").replace(",", "");
    const detalle = o.items
      .map((i) => `${i.qty}x ${i.name}${i.color ? ` - ${i.color}` : ""} (${i.size})`)
      .join(" | ");
    return [
      o.id,
      `"${fecha}"`,
      `"${o.customer.replace(/"/g, '""')}"`,
      `"${o.phone.replace(/"/g, '""')}"`,
      `"${o.address.replace(/"/g, '""')}"`,
      o.channel,
      o.status,
      o.totalPairs,
      `"${detalle.replace(/"/g, '""')}"`,
      o.total.toFixed(2)
    ].join(";");
  });

  const csvContent = "\uFEFF" + [headers.join(";"), ...rows].join("\n");
  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const today = new Date().toISOString().slice(0, 10);

  link.href = url;
  link.download = `reporte-ventas-trazo-${today}.csv`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  showToast("Reporte de ventas descargado");
});

// ==========================================================================
// 9. EVENTOS DE LA TIENDA PÚBLICA
// ==========================================================================
productsGrid.addEventListener("click", (e) => {
  const btn = e.target.closest("button");
  if (!btn) return;

  const action = btn.dataset.action;
  const id = Number(btn.dataset.id);

  if (action === "select-color") {
    const product = state.products.find((entry) => entry.id === id);
    const color = btn.dataset.color;
    if (!product || !Object.prototype.hasOwnProperty.call(product.stockByColor, color)) return;
    state.selectedColors[id] = color;
    const sizes = Object.keys(product.stockByColor[color]);
    state.selectedSizes[id] = sizes[Math.floor(sizes.length / 2)] || sizes[0] || "";
    renderProducts();
  } else if (action === "select-size") {
    state.selectedSizes[id] = String(btn.dataset.size);
    renderProducts();
  } else if (action === "add-cart") {
    addToCart(id);
  } else if (action === "toggle-fav") {
    const idx = state.wishlist.indexOf(id);
    if (idx > -1) {
      state.wishlist.splice(idx, 1);
      showToast("Eliminado de favoritos");
    } else {
      state.wishlist.push(id);
      showToast("Guardado en favoritos");
    }
    saveUserLists();
    updateBadges();
    renderProducts();
  }
});

// Píldoras del Hero
document.getElementById("categoryPills").addEventListener("click", (e) => {
  const pill = e.target.closest(".pill");
  if (!pill) return;
  setActiveCategory(pill.dataset.category);
});

// Enlaces de navegación (Header y Footer)
document.querySelectorAll("[data-nav-cat]").forEach((link) => {
  link.addEventListener("click", () => {
    setActiveCategory(link.dataset.navCat);
  });
});

searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  clearSearchBtn.hidden = !state.search;
  renderProducts();
});

clearSearchBtn.addEventListener("click", () => {
  searchInput.value = "";
  state.search = "";
  clearSearchBtn.hidden = true;
  renderProducts();
});

sortSelect.addEventListener("change", (e) => {
  state.sort = e.target.value;
  renderProducts();
});

toggleFiltersBtn.addEventListener("click", () => {
  const isHidden = filtersPanel.hidden;
  filtersPanel.hidden = !isHidden;
  toggleFiltersBtn.setAttribute("aria-expanded", String(isHidden));
});

document.getElementById("sizeFilterPills").addEventListener("click", (e) => {
  const chip = e.target.closest(".size-chip");
  if (!chip) return;
  document.querySelectorAll(".size-chip").forEach((c) => c.classList.remove("active"));
  chip.classList.add("active");
  state.sizeFilter = chip.dataset.size;
  renderProducts();
});

maxPriceRange.addEventListener("input", (e) => {
  state.maxPrice = Number(e.target.value);
  maxPriceLabel.textContent = `S/ ${state.maxPrice}`;
  renderProducts();
});

function resetAllFilters() {
  state.search = "";
  state.sizeFilter = "all";
  state.maxPrice = 800;
  state.onlyWishlist = false;
  searchInput.value = "";
  clearSearchBtn.hidden = true;
  maxPriceRange.value = 800;
  maxPriceLabel.textContent = "S/ 800";

  document.querySelectorAll(".size-chip").forEach((c) => {
    c.classList.toggle("active", c.dataset.size === "all");
  });
  setActiveCategory("Todos");
}

document.getElementById("resetFiltersBtn").addEventListener("click", resetAllFilters);
document.getElementById("emptyResetBtn").addEventListener("click", resetAllFilters);

document.getElementById("openWishlistBtn").addEventListener("click", () => {
  state.onlyWishlist = !state.onlyWishlist;
  showToast(state.onlyWishlist ? "Mostrando tus favoritos" : "Mostrando toda la colección");
  renderProducts();
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("openCartBtn").addEventListener("click", openCart);
document.getElementById("closeCartBtn").addEventListener("click", closeCart);
cartBackdrop.addEventListener("click", closeCart);

cartItemsContainer.addEventListener("click", (e) => {
  const btn = e.target.closest(".qty-btn");
  if (!btn) return;
  changeCartQty(Number(btn.dataset.cartIdx), Number(btn.dataset.delta));
});

function formatWhatsAppOrderItem(item) {
  const variantDetails =
    item.category === "Carteras"
      ? []
      : [`  Color: ${item.color}`, `  Talla: ${item.size}`];
  return [
    `- ${item.name}`,
    ...variantDetails,
    `  Cantidad: ${item.quantity}`
  ].join("\n");
}

document.getElementById("whatsappCheckoutBtn").addEventListener("click", async (e) => {
  if (state.cart.length === 0) {
    showToast("Agrega al menos un artículo primero");
    return;
  }
  if (!supabaseClient) {
    showToast("La tienda aún no tiene la base de datos configurada.");
    return;
  }
  if (inventoryStatus !== "ready") {
    showToast("No se pudo cargar el inventario. Inténtalo nuevamente en unos momentos.");
    return;
  }
  const missingColor = state.cart.some((item) => {
    const product = state.products.find((entry) => entry.id === item.id);
    return product && productUsesColors(product) && !item.color;
  });
  if (missingColor) {
    showToast("El carrito tiene artículos sin color. Elimínalos y agrégalos de nuevo seleccionando color.");
    return;
  }

  const customerName = document.getElementById("customerName");
  const customerPhone = document.getElementById("customerPhone");
  const customerAddress = document.getElementById("customerAddress");
  if (!customerName.value.trim() || !customerAddress.value.trim()) {
    showToast("Completa tu nombre y dirección para continuar");
    (customerName.value.trim() ? customerAddress : customerName).focus();
    return;
  }

  const whatsappWindow = window.open("about:blank", "_blank");
  if (!whatsappWindow) {
    showToast("No se pudo abrir WhatsApp. Permite las ventanas emergentes e inténtalo de nuevo.");
    return;
  }
  const submitButton = e.currentTarget;
  submitButton.disabled = true;

  try {
    const { data, error } = await supabaseClient.rpc("place_order", {
      p_customer_name: customerName.value.trim(),
      p_customer_address: customerAddress.value.trim(),
      p_customer_phone: customerPhone.value.trim(),
      p_items: state.cart.map((item) => ({
        product_id: item.id,
        color: String(item.color || ""),
        size: String(item.size),
        quantity: item.qty
      }))
    });
    if (error) throw error;

    const lines = data.items.map(formatWhatsAppOrderItem);
    const message = [
      "Hola, quiero realizar este pedido en trazo.",
      `Pedido: ${data.order_id}`,
      "",
      "PRODUCTOS:",
      ...lines,
      "",
      `Total (${data.total_items} ${data.total_items === 1 ? "artículo" : "artículos"}): S/ ${Number(data.total).toFixed(2)}`,
      "",
      "DATOS PARA LA ENTREGA:",
      `Nombre: ${customerName.value.trim()}`,
      ...(customerPhone.value.trim() ? [`WhatsApp: ${customerPhone.value.trim()}`] : []),
      `Dirección: ${customerAddress.value.trim()}`,
      "",
      "Por favor, confirmen el pedido y coordinen el envío."
    ].join("\n");

    whatsappWindow.location.href =
      `https://wa.me/${STORE_WHATSAPP}?text=${encodeURIComponent(message)}`;
    whatsappWindow.opener = null;

    data.items.forEach((item) => {
      const product = state.products.find((entry) => entry.id === Number(item.product_id));
      if (product) {
        const color = String(item.color || "");
        if (!product.stockByColor[color]) product.stockByColor[color] = {};
        product.stockByColor[color][String(item.size)] = Number(item.remaining_stock);
      }
    });
    state.cart = [];
    saveUserLists();
    updateBadges();
    renderCart();
    renderProducts();
    closeCart();
    customerName.value = "";
    customerPhone.value = "";
    customerAddress.value = "";
    showToast("Pedido registrado. Confirma el envío desde WhatsApp.");
  } catch (error) {
    whatsappWindow.close();
    console.error("No se pudo registrar el pedido:", error);
    const errorMessage = String(error.message || "");
    if (errorMessage.includes("STOCK_UNAVAILABLE")) {
      showToast("Se agotó el stock de ese color y talla. Actualizamos el inventario.");
      try {
        await loadProductsFromDatabase();
      } catch (refreshError) {
        console.error("No se pudo actualizar el inventario:", refreshError);
        inventoryStatus = "error";
        renderProducts();
        setDatabaseStatus("No se pudo actualizar el inventario. Recarga la página.");
      }
    } else if (errorMessage.includes("COLOR_REQUIRED")) {
      showToast("Actualiza la página y vuelve a seleccionar el color del producto.");
    } else {
      showToast("No se pudo registrar el pedido. Revisa tu conexión e inténtalo de nuevo.");
    }
  } finally {
    submitButton.disabled = false;
  }
});

// Inicializar aplicación
updateAdminUIState();
updateBadges();
renderProducts();
renderCart();

async function initializeStore() {
  if (!supabaseClient) {
    setDatabaseStatus("Inventario pendiente de configurar en Supabase. Las tallas aparecen sin stock.");
    if (adminLoginRequested) requestAdminLogin();
    return;
  }

  setDatabaseStatus("Conectando con el inventario...");
  try {
    await loadProductsFromDatabase();
    const { data, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    if (data.session) {
      state.isAdmin = await verifyAdminUser(data.session.user.id);
      updateAdminUIState();
    }
  } catch (error) {
    console.error("No se pudo inicializar la tienda:", error);
    inventoryStatus = "error";
    setDatabaseStatus("No se pudo conectar con el inventario. Recarga la página o revisa Supabase.");
    renderProducts();
  }
  if (adminLoginRequested) {
    if (state.isAdmin) await openAdminPanel();
    else requestAdminLogin();
  }
}

initializeStore();
