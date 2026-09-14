// ui.js — semua kode yang menyentuh DOM dikumpulkan di sini.
// Modul lain (algorithms, api, state) tidak boleh tahu soal DOM.

import { formatCurrency, capitalize } from "./utils.js";

const productList = document.querySelector("#product-list");
const statusArea = document.querySelector("#status-area");
const statsArea = document.querySelector("#stats-area");
const categorySelect = document.querySelector("#category-select");
const resultCount = document.querySelector("#result-count");

export function renderStatus(status, errorMessage = "") {
  if (status === "loading") {
    statusArea.textContent = "Memuat data produk...";
    statusArea.hidden = false;
    productList.innerHTML = "";
    return;
  }

  if (status === "error") {
    statusArea.textContent = `Gagal memuat data: ${errorMessage}`;
    statusArea.hidden = false;
    productList.innerHTML = "";
    return;
  }

  if (status === "empty") {
    statusArea.textContent = "Tidak ada produk yang cocok dengan filter saat ini.";
    statusArea.hidden = false;
    productList.innerHTML = "";
    return;
  }

  statusArea.hidden = true;
}

export function renderProducts(products, favorites) {
  productList.innerHTML = "";

  const fragment = document.createDocumentFragment();

  for (const product of products) {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = product.id;

    const isFav = favorites.has(product.id);

    card.innerHTML = `
      <div class="product-thumb">
        <img src="${product.thumbnail}" alt="${product.title}" loading="lazy">
      </div>
      <div class="product-body">
        <h3 class="product-title">${product.title}</h3>
        <p class="product-category">${capitalize(product.category)}</p>
        <div class="product-meta">
          <span class="product-price">${formatCurrency(product.price)}</span>
          <span class="product-rating">★ ${product.rating}</span>
        </div>
        <p class="product-stock ${product.stock < 10 ? "low-stock" : ""}">
          Stok: ${product.stock}
        </p>
        <button class="fav-btn ${isFav ? "is-fav" : ""}" data-id="${product.id}">
          ${isFav ? "★ Favorit" : "☆ Tambah Favorit"}
        </button>
      </div>
    `;

    fragment.appendChild(card);
  }

  productList.appendChild(fragment);
}

export function renderResultCount(count, total) {
  resultCount.textContent = `Menampilkan ${count} dari ${total} produk`;
}

export function renderStatistics(stats) {
  statsArea.innerHTML = `
    <div class="stat-item">
      <span class="stat-value">${stats.totalProducts}</span>
      <span class="stat-label">Total Produk</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${formatCurrency(stats.averagePrice)}</span>
      <span class="stat-label">Rata-rata Harga</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${formatCurrency(stats.highestPrice)}</span>
      <span class="stat-label">Harga Tertinggi</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${formatCurrency(stats.lowestPrice)}</span>
      <span class="stat-label">Harga Terendah</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${stats.totalStock}</span>
      <span class="stat-label">Total Stok</span>
    </div>
    <div class="stat-item">
      <span class="stat-value">${stats.averageRating}</span>
      <span class="stat-label">Rata-rata Rating</span>
    </div>
  `;
}

export function populateCategoryOptions(categories) {
  categorySelect.innerHTML = `<option value="all">Semua Kategori</option>`;
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = capitalize(category);
    categorySelect.appendChild(option);
  }
}