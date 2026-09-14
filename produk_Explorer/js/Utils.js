// utils.js — helper kecil yang dipakai di beberapa tempat.

export function formatCurrency(value) {
  return `$${Number(value).toFixed(2)}`;
}

export function debounce(fn, delay = 300) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

export function capitalize(text) {
  if (!text) return "";
  return text.charAt(0).toUpperCase() + text.slice(1);
}