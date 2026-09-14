// main.js — menghubungkan semua modul: fetch data, event handling, render.

import { fetchProducts } from "./api.js";
import {
  applyFilters,
  getStatistics,
  buildProductLookup,
} from "./algorithms.js";
import {
  renderProducts,
  renderStatus,
  renderStatistics,
  renderResultCount,
  populateCategoryOptions,
} from "./ui.js";
import { state, searchHistory } from "./state.js";
import { debounce } from "./utils.js";

let productLookup = new Map(); // dibangun ulang setiap kali data produk berubah

// ---------- Core render function ----------
// Dipanggil setiap kali state berubah. Ini satu-satunya pintu ke UI.

function render() {
  renderStatus(state.status, state.errorMessage);

  if (state.status === "loading" || state.status === "error") return;

  const filtered = applyFilters(state.products, {
    search: state.search,
    category: state.category,
    sortBy: state.sortBy,
    minPrice: state.minPrice,
    maxPrice: state.maxPrice,
    minRating: state.minRating,
  });

  if (state.products.length > 0 && filtered.length === 0) {
    renderStatus("empty");
    renderResultCount(0, state.products.length);
    return;
  }

  renderProducts(filtered, state.favorites);
  renderResultCount(filtered.length, state.products.length);
  renderStatistics(getStatistics(filtered));
}

// ---------- Data loading ----------

async function loadProducts() {
  state.status = "loading";
  render();

  try {
    const products = await fetchProducts(30);
    state.products = products;
    state.status = "success";

    productLookup = buildProductLookup(products);

    const categories = [...new Set(products.map((p) => p.category))];
    populateCategoryOptions(categories);
  } catch (error) {
    state.status = "error";
    state.errorMessage = error.message;
    console.error("Gagal mengambil data produk:", error);
  } finally {
    render();
  }
}

// ---------- Event handlers ----------

function setupEventListeners() {
  const searchInput = document.querySelector("#search-input");
  const categorySelect = document.querySelector("#category-select");
  const sortSelect = document.querySelector("#sort-select");
  const minPriceInput = document.querySelector("#min-price");
  const maxPriceInput = document.querySelector("#max-price");
  const minRatingInput = document.querySelector("#min-rating");
  const productList = document.querySelector("#product-list");
  const resetBtn = document.querySelector("#reset-filters");

  const onSearchInput = debounce((e) => {
    state.search = e.target.value;
    if (state.search.trim()) {
      searchHistory.push(state.search.trim());
    }
    render();
  }, 300);

  searchInput.addEventListener("input", onSearchInput);

  categorySelect.addEventListener("change", (e) => {
    state.category = e.target.value;
    render();
  });

  sortSelect.addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    render();
  });

  minPriceInput.addEventListener("input", (e) => {
    state.minPrice = e.target.value;
    render();
  });

  maxPriceInput.addEventListener("input", (e) => {
    state.maxPrice = e.target.value;
    render();
  });

  minRatingInput.addEventListener("input", (e) => {
    state.minRating = e.target.value;
    render();
  });

  resetBtn.addEventListener("click", () => {
    state.search = "";
    state.category = "all";
    state.sortBy = "default";
    state.minPrice = "";
    state.maxPrice = "";
    state.minRating = "";
    searchInput.value = "";
    categorySelect.value = "all";
    sortSelect.value = "default";
    minPriceInput.value = "";
    maxPriceInput.value = "";
    minRatingInput.value = "";
    render();
  });

  // Event delegation buat tombol favorit, biar tidak pasang listener per-card
  productList.addEventListener("click", (e) => {
    const btn = e.target.closest(".fav-btn");
    if (!btn) return;

    const id = Number(btn.dataset.id);
    if (state.favorites.has(id)) {
      state.favorites.delete(id);
    } else {
      state.favorites.add(id);
    }
    render();
  });
}

// ---------- Start app ----------

setupEventListeners();
loadProducts();