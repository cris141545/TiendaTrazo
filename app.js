// ==========================================================================
// 1. CONFIGURACIÓN Y CATÁLOGO BASE (SOLO VESTIR, SANDALIAS TEJIDAS Y CARTERAS)
// ==========================================================================
const ADMIN_CREDENTIALS = {
  email: "admin@trazo.pe",
  password: "admin2026"
};

// Cambia este número por tu WhatsApp real con código de país (ej. 51999888777)
const STORE_WHATSAPP = "51999999999";

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

const INITIAL_ORDERS = [
  {
    id: "TRZ-204821",
    date: "2026-11-16T14:25:00",
    customer: "Valeria Mendoza",
    address: "Trujillo - Urb. California",
    channel: "WhatsApp",
    status: "Entregado",
    items: [
      { name: "Stiletto Salón Nude Clásico", size: "37", qty: 1, price: 339.0 },
      { name: "Cartera Tote Estructurada Coñac", size: "Única", qty: 1, price: 359.0 }
    ],
    totalPairs: 2,
    total: 698.0
  },
  {
    id: "TRZ-204935",
    date: "2026-11-17T10:15:00",
    customer: "Carlos Paredes",
    address: "Lima - Miraflores",
    channel: "Web Directa",
    status: "Enviado",
    items: [
      { name: "Oxford Cap-Toe Negro Ébano", size: "41", qty: 1, price: 389.0 },
      { name: "Sandalia Tejida Trenza Arena", size: "37", qty: 1, price: 229.0 }
    ],
    totalPairs: 2,
    total: 618.0
  }
];

// ==========================================================================
// 2. ESTADO GLOBAL PERSISTENTE
// ==========================================================================
const storedProducts = JSON.parse(localStorage.getItem("trazo_products_v2") || "null");
const storedOrders = JSON.parse(localStorage.getItem("trazo_orders_v2") || "null");

const state = {
  products: Array.isArray(storedProducts) && storedProducts.length > 0 ? storedProducts : [...DEFAULT_PRODUCTS],
  orders: Array.isArray(storedOrders) ? storedOrders : [...INITIAL_ORDERS],
  isAdmin: sessionStorage.getItem("trazo_admin_auth") === "true",
  category: "Todos",
  search: "",
  sort: "popular",
  sizeFilter: "all",
  maxPrice: 800,
  onlyWishlist: false,
  selectedSizes: {},
  wishlist: JSON.parse(localStorage.getItem("trazo_wishlist_v2") || "[]"),
  cart: JSON.parse(localStorage.getItem("trazo_cart_v2") || "[]")
};

function syncSelectedSizes() {
  state.products.forEach((p) => {
    const normalizedSizes = p.sizes.map(String);
    p.sizes = normalizedSizes;
    if (!state.selectedSizes[p.id] || !normalizedSizes.includes(String(state.selectedSizes[p.id]))) {
      state.selectedSizes[p.id] = normalizedSizes[Math.floor(normalizedSizes.length / 2)] || normalizedSizes[0];
    }
  });
}
syncSelectedSizes();

function saveProducts() {
  localStorage.setItem("trazo_products_v2", JSON.stringify(state.products));
}

function saveOrders() {
  localStorage.setItem("trazo_orders_v2", JSON.stringify(state.orders));
}

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
const adminLoginModal = document.getElementById("adminLoginModal");
const adminPanelModal = document.getElementById("adminPanelModal");

// ==========================================================================
// 4. TIENDA PÚBLICA: CAMBIO DE APARTADOS, FILTROS Y RENDERIZADO
// ==========================================================================
function setActiveCategory(cat) {
  state.category = cat;
  state.onlyWishlist = false;

  document.querySelectorAll("#categoryPills .pill").forEach((el) => {
    el.classList.toggle("active", el.dataset.category === cat);
  });

  document.querySelectorAll(".dept-card").forEach((card) => {
    card.classList.toggle("active-dept", card.dataset.deptCat === cat);
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
      const activeSize = String(state.selectedSizes[product.id]);

      const sizesHTML = product.sizes
        .map(
          (size) => `
          <button
            type="button"
            class="size-option ${String(size) === activeSize ? "selected" : ""}"
            data-action="select-size"
            data-id="${product.id}"
            data-size="${size}"
          >${size === "Única" ? "Talla Única" : size}</button>
        `
        )
        .join("");

      return `
        <article class="product-card">
          <div class="card-media">
            ${
              product.badge
                ? `<span class="card-badge ${
                    product.badgeAccent ? "accent" : ""
                  }">${product.badge}</span>`
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
              src="${product.image}"
              alt="${product.name}"
              loading="lazy"
              onerror="this.src='data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22300%22><rect width=%22100%25%22 height=%22100%25%22 fill=%22%23f8f7f4%22/><text x=%2250%25%22 y=%2250%25%22 dominant-baseline=%22middle%22 text-anchor=%22middle%22 font-family=%22sans-serif%22 font-size=%2216%22 fill=%22%236e6d7a%22>${encodeURIComponent(product.name)}</text></svg>'"
            />
          </div>

          <div class="card-header">
            <h3 class="card-title">${product.name}</h3>
            <span class="card-price">S/ ${Number(product.price).toFixed(2)}</span>
          </div>
          <p class="card-category">${product.category}</p>

          <div class="card-sizes" aria-label="Seleccionar talla o medida">
            ${sizesHTML}
          </div>

          <button
            type="button"
            class="btn-add-cart"
            data-action="add-cart"
            data-id="${product.id}"
          >
            Agregar al carrito
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
  const size = String(state.selectedSizes[productId]);
  if (!product) return;

  const existing = state.cart.find(
    (item) => item.id === productId && String(item.size) === size
  );

  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: Number(product.price),
      image: product.image,
      size,
      qty: 1
    });
  }

  saveUserLists();
  updateBadges();
  renderCart();
  const sizeText = size === "Única" ? "Talla Única" : `Talla ${size}`;
  showToast(`Agregado: ${product.name} (${sizeText})`);
}

function changeCartQty(index, delta) {
  state.cart[index].qty += delta;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
  }
  saveUserLists();
  updateBadges();
  renderCart();
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
      const sizeLabel = item.size === "Única" ? "Talla Única" : `Talla ${item.size}`;
      return `
        <div class="cart-item">
          <img src="${item.image}" alt="${item.name}" />
          <div>
            <div class="cart-item-title">${item.name}</div>
            <div class="cart-item-meta">${sizeLabel} &middot; S/ ${item.price.toFixed(2)}</div>
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

function recordOrder(channel) {
  const name = document.getElementById("customerName").value.trim() || "Cliente Web";
  const address = document.getElementById("customerAddress").value.trim() || "Por coordinar";
  const total = state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const totalPairs = state.cart.reduce((sum, item) => sum + item.qty, 0);

  const newOrder = {
    id: "TRZ-" + Math.floor(100000 + Math.random() * 900000),
    date: new Date().toISOString(),
    customer: name,
    address: address,
    channel: channel,
    status: "Pendiente",
    items: state.cart.map((i) => ({
      name: i.name,
      size: i.size,
      qty: i.qty,
      price: i.price
    })),
    totalPairs,
    total
  };

  state.orders.unshift(newOrder);
  saveOrders();
  return newOrder;
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
  if (state.isAdmin) {
    openAdminEntryBtn.classList.add("is-logged");
    adminEntryLabel.textContent = "Panel Admin";
  } else {
    openAdminEntryBtn.classList.remove("is-logged");
    adminEntryLabel.textContent = "Admin";
  }
}

function handleAdminEntryClick(e) {
  if (e) e.preventDefault();
  if (state.isAdmin) {
    openAdminPanel();
  } else {
    document.getElementById("loginErrorMsg").hidden = true;
    adminLoginModal.hidden = false;
  }
}

function openAdminPanel() {
  if (!state.isAdmin) return;
  renderAdminProductsTable();
  renderSalesReports();
  adminPanelModal.hidden = false;
}

function closeAdminPanel() {
  adminPanelModal.hidden = true;
}

document.getElementById("adminLoginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const user = document.getElementById("adminUserInput").value.trim();
  const pass = document.getElementById("adminPassInput").value.trim();

  if (user === ADMIN_CREDENTIALS.email && pass === ADMIN_CREDENTIALS.password) {
    state.isAdmin = true;
    sessionStorage.setItem("trazo_admin_auth", "true");
    adminLoginModal.hidden = true;
    document.getElementById("adminLoginForm").reset();
    updateAdminUIState();
    openAdminPanel();
    showToast("Sesión de administrador iniciada");
  } else {
    document.getElementById("loginErrorMsg").hidden = false;
  }
});

document.getElementById("adminLogoutBtn").addEventListener("click", () => {
  state.isAdmin = false;
  sessionStorage.removeItem("trazo_admin_auth");
  updateAdminUIState();
  closeAdminPanel();
  showToast("Sesión de administrador cerrada");
});

openAdminEntryBtn.addEventListener("click", handleAdminEntryClick);
document.getElementById("footerAdminLink").addEventListener("click", handleAdminEntryClick);
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

    if (target === "reports") renderSalesReports();
    if (target === "inventory") renderAdminProductsTable();
  });
});

// ==========================================================================
// 7. CRUD DE PRODUCTOS (SUBIR, EDITAR, ELIMINAR)
// ==========================================================================
const productAdminForm = document.getElementById("productAdminForm");
const prodCategorySelect = document.getElementById("prodCategory");
const prodSizesInput = document.getElementById("prodSizes");
const prodImageUrlInput = document.getElementById("prodImageUrl");
const prodImageFileInput = document.getElementById("prodImageFile");
const prodPreviewBox = document.getElementById("prodPreviewBox");
const prodPreviewImg = document.getElementById("prodPreviewImg");

// Sugerir tallas automáticamente según el apartado seleccionado en el Admin
prodCategorySelect.addEventListener("change", () => {
  if (document.getElementById("editProductId").value) return;
  const cat = prodCategorySelect.value;
  if (cat === "Carteras") {
    prodSizesInput.value = "Única";
  } else if (cat === "Calzado Mujer" || cat === "Sandalias Tejidas") {
    prodSizesInput.value = "35, 36, 37, 38, 39";
  } else {
    prodSizesInput.value = "39, 40, 41, 42, 43";
  }
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
  prodSizesInput.value = "39, 40, 41, 42";
  prodPreviewBox.hidden = true;
}

document.getElementById("cancelEditBtn").addEventListener("click", resetProductForm);

productAdminForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!state.isAdmin) return;

  const editId = document.getElementById("editProductId").value;
  const name = document.getElementById("prodName").value.trim();
  const category = prodCategorySelect.value;
  const price = parseFloat(document.getElementById("prodPrice").value);
  const badge = document.getElementById("prodBadge").value.trim();
  const tags = document.getElementById("prodTags").value.trim();
  const image =
    prodImageUrlInput.value.trim() ||
    "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80";

  const parsedSizes = prodSizesInput.value
    .split(",")
    .map((s) => s.trim())
    .filter((s) => s.length > 0);

  const sizes =
    parsedSizes.length > 0
      ? parsedSizes
      : category === "Carteras"
      ? ["Única"]
      : ["38", "39", "40", "41"];

  if (editId) {
    const index = state.products.findIndex((p) => p.id === Number(editId));
    if (index > -1) {
      state.products[index] = {
        ...state.products[index],
        name,
        category,
        price,
        badge,
        badgeAccent: Boolean(badge),
        sizes,
        tags,
        image
      };
      showToast("Artículo actualizado correctamente");
    }
  } else {
    const newId =
      state.products.length > 0
        ? Math.max(...state.products.map((p) => p.id)) + 1
        : 1;

    state.products.unshift({
      id: newId,
      name,
      category,
      price,
      badge: badge || "Nuevo",
      badgeAccent: true,
      isNew: true,
      popularity: 99,
      sizes,
      tags: `${name.toLowerCase()} ${category.toLowerCase()} ${tags.toLowerCase()}`,
      image
    });
    showToast("Nuevo artículo publicado en la tienda");
  }

  saveProducts();
  renderAdminProductsTable();
  renderProducts();
  resetProductForm();
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
            <img src="${prod.image}" alt="${prod.name}" />
            <div>
              <strong>${prod.name}</strong>
              <div style="font-size:0.75rem; color:var(--text-secondary);">${prod.badge || "Sin etiqueta"}</div>
            </div>
          </div>
        </td>
        <td>${prod.category}</td>
        <td>${prod.sizes.join(", ")}</td>
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

document.getElementById("adminProductsTableBody").addEventListener("click", (e) => {
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
    prodSizesInput.value = prod.sizes.join(", ");
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
      state.products = state.products.filter((p) => p.id !== id);
      saveProducts();
      renderAdminProductsTable();
      renderProducts();
      showToast("Artículo eliminado");
    }
  }
});

document.getElementById("restoreDefaultCatalogBtn").addEventListener("click", () => {
  if (!state.isAdmin) return;
  if (confirm("¿Restaurar los 10 artículos iniciales de vestir, sandalias tejidas y carteras?")) {
    state.products = [...DEFAULT_PRODUCTS];
    saveProducts();
    renderAdminProductsTable();
    renderProducts();
    showToast("Catálogo base restaurado");
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

  const totalRevenue = state.orders.reduce((sum, o) => sum + o.total, 0);
  const totalOrders = state.orders.length;
  const totalPairs = state.orders.reduce((sum, o) => sum + o.totalPairs, 0);

  const productSalesMap = {};
  state.orders.forEach((order) => {
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
        .map((i) => `${i.qty}x ${i.name} (${i.size === "Única" ? "Única" : "T." + i.size})`)
        .join("<br/>");

      return `
        <tr>
          <td><strong>${order.id}</strong></td>
          <td>${dateStr}</td>
          <td>
            <strong>${order.customer}</strong>
            <div style="font-size:0.76rem; color:var(--text-secondary);">${order.address}</div>
          </td>
          <td>${itemsSummary}</td>
          <td>${order.channel}</td>
          <td><strong>S/ ${order.total.toFixed(2)}</strong></td>
          <td>
            <select class="status-select" data-order-id="${order.id}">
              <option value="Pendiente" ${order.status === "Pendiente" ? "selected" : ""}>Pendiente</option>
              <option value="Enviado" ${order.status === "Enviado" ? "selected" : ""}>Enviado</option>
              <option value="Entregado" ${order.status === "Entregado" ? "selected" : ""}>Entregado</option>
            </select>
          </td>
        </tr>
      `;
    })
    .join("");
}

document.getElementById("reportStatusFilter").addEventListener("change", renderSalesReports);

document.getElementById("adminOrdersTableBody").addEventListener("change", (e) => {
  const select = e.target.closest(".status-select");
  if (!select || !state.isAdmin) return;
  const order = state.orders.find((o) => o.id === select.dataset.orderId);
  if (order) {
    order.status = select.value;
    saveOrders();
    showToast(`Pedido ${order.id} actualizado a ${order.status}`);
  }
});

document.getElementById("exportCsvBtn").addEventListener("click", () => {
  if (!state.isAdmin) return;

  const headers = ["Codigo", "Fecha", "Cliente", "Direccion", "Canal", "Estado", "Unidades", "Detalle", "Total_Soles"];
  const rows = state.orders.map((o) => {
    const fecha = new Date(o.date).toLocaleString("es-PE").replace(",", "");
    const detalle = o.items.map((i) => `${i.qty}x ${i.name} (${i.size})`).join(" | ");
    return [
      o.id,
      `"${fecha}"`,
      `"${o.customer.replace(/"/g, '""')}"`,
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

  if (action === "select-size") {
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

// Tarjetas de Apartados (Hombre, Mujer, Sandalias Tejidas, Carteras)
document.getElementById("departmentsGrid").addEventListener("click", (e) => {
  const card = e.target.closest(".dept-card");
  if (!card) return;
  setActiveCategory(card.dataset.deptCat);
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
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

document.getElementById("trendingTags").addEventListener("click", (e) => {
  const tag = e.target.closest(".trend-tag");
  if (!tag) return;
  searchInput.value = tag.dataset.search;
  state.search = tag.dataset.search;
  clearSearchBtn.hidden = false;
  renderProducts();
  document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
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

document.getElementById("whatsappCheckoutBtn").addEventListener("click", () => {
  if (state.cart.length === 0) {
    showToast("Agrega al menos un artículo primero");
    return;
  }

  const order = recordOrder("WhatsApp");
  const lines = order.items.map(
    (item) =>
      `• ${item.qty}x ${item.name} (${
        item.size === "Única" ? "Talla Única" : "Talla " + item.size
      }) - S/ ${(item.price * item.qty).toFixed(2)}`
  );

  const message =
    `Hola trazo., quiero confirmar mi pedido *#${order.id}*:%0A%0A` +
    `${lines.join("%0A")}%0A%0A` +
    `*Total:* S/ ${order.total.toFixed(2)}%0A` +
    `*Cliente:* ${encodeURIComponent(order.customer)}%0A` +
    `*Entrega:* ${encodeURIComponent(order.address)}`;

  state.cart = [];
  saveUserLists();
  updateBadges();
  renderCart();
  closeCart();

  window.open(`https://wa.me/${STORE_WHATSAPP}?text=${message}`, "_blank");
});

document.getElementById("simulateOrderBtn").addEventListener("click", () => {
  if (state.cart.length === 0) {
    showToast("Tu carrito está vacío");
    return;
  }

  const order = recordOrder("Web Directa");
  document.getElementById("orderModalText").textContent =
    `Tu orden #${order.id} por S/ ${order.total.toFixed(2)} ha sido registrada correctamente.`;

  state.cart = [];
  saveUserLists();
  updateBadges();
  renderCart();
  closeCart();
  document.getElementById("orderModal").hidden = false;
});

document.getElementById("closeOrderModalBtn").addEventListener("click", () => {
  document.getElementById("orderModal").hidden = true;
});

// Inicializar aplicación
updateAdminUIState();
updateBadges();
renderProducts();
renderCart();
