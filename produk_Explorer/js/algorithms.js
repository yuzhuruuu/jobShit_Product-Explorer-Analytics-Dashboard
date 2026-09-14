// algorithms.js — semua logika DSA dikumpulkan di sini, terpisah dari DOM.

// ---------- Searching ----------

export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}

export function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// ---------- Sorting ----------

export function sortProducts(products, sortBy) {
  const list = [...products]; // jangan mutasi array asli

  switch (sortBy) {
    case "price-asc":
      return list.sort((a, b) => a.price - b.price);
    case "price-desc":
      return list.sort((a, b) => b.price - a.price);
    case "rating":
      return list.sort((a, b) => b.rating - a.rating);
    case "title":
      return list.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return list;
  }
}

// ---------- Grouping & Aggregation ----------

export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

export function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

export function getStatistics(products) {
  if (products.length === 0) {
    return {
      totalProducts: 0,
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      totalStock: 0,
      averageRating: 0,
    };
  }

  const prices = products.map((p) => p.price);
  const totalStock = products.reduce((sum, p) => sum + (p.stock ?? 0), 0);
  const totalRating = products.reduce((sum, p) => sum + (p.rating ?? 0), 0);

  return {
    totalProducts: products.length,
    averagePrice: totalRating ? +(prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2) : 0,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock,
    averageRating: +(totalRating / products.length).toFixed(2),
  };
}

export function getCategoryAnalytics(products) {
  const grouped = groupByCategory(products);

  return Object.entries(grouped).map(([category, items]) => {
    const totalPrice = items.reduce((sum, p) => sum + p.price, 0);
    const totalRating = items.reduce((sum, p) => sum + (p.rating ?? 0), 0);
    const totalStock = items.reduce((sum, p) => sum + (p.stock ?? 0), 0);

    return {
      category,
      totalProducts: items.length,
      averagePrice: +(totalPrice / items.length).toFixed(2),
      averageRating: +(totalRating / items.length).toFixed(2),
      totalStock,
    };
  });
}

// ---------- Map sebagai struktur data (bukan Array.prototype.map) ----------

export function buildProductLookup(products) {
  const map = new Map();
  for (const product of products) {
    map.set(product.id, product);
  }
  return map;
}

// ---------- Search dengan ranking (Challenge 5) ----------
// Prioritas: 1) exact title match, 2) title mengandung keyword, 3) rating tertinggi

export function searchWithRanking(products, keyword) {
  if (!keyword.trim()) return products;
  const lower = keyword.toLowerCase();

  return products
    .filter((p) => p.title.toLowerCase().includes(lower))
    .map((p) => {
      let score = 0;
      if (p.title.toLowerCase() === lower) score += 100;
      else score += 50;
      score += p.rating; // rating jadi tie-breaker
      return { ...p, _score: score };
    })
    .sort((a, b) => b._score - a._score);
}

// ---------- Multi-filter pipeline ----------
// Urutan: search dulu (paling banyak membuang data), baru category, price, rating

export function applyFilters(products, filters) {
  let result = products;

  if (filters.search) {
    result = searchWithRanking(result, filters.search);
  }

  if (filters.category && filters.category !== "all") {
    result = result.filter((p) => p.category === filters.category);
  }

  if (filters.minPrice !== "" && filters.minPrice != null) {
    result = result.filter((p) => p.price >= Number(filters.minPrice));
  }

  if (filters.maxPrice !== "" && filters.maxPrice != null) {
    result = result.filter((p) => p.price <= Number(filters.maxPrice));
  }

  if (filters.minRating !== "" && filters.minRating != null) {
    result = result.filter((p) => p.rating >= Number(filters.minRating));
  }

  if (filters.sortBy && filters.sortBy !== "default" && !filters.search) {
    // kalau lagi search, urutan ranking dipertahankan, jangan di-sort ulang
    result = sortProducts(result, filters.sortBy);
  }

  return result;
}