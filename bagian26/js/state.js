// state.js — satu-satunya sumber kebenaran untuk data aplikasi.
// UI selalu dirender berdasarkan state ini, bukan dimanipulasi langsung.

export const state = {
  products: [],        // hasil fetch dari DummyJSON
  search: "",
  category: "all",
  sortBy: "default",
  minPrice: "",
  maxPrice: "",
  minRating: "",
  favorites: new Set(),   // id produk favorit, Set supaya tidak ada duplikasi
  status: "idle",          // idle | loading | success | error | empty
  errorMessage: "",
};

// Stack sederhana buat riwayat pencarian (LIFO).
// Kalau user tekan "undo search", keyword terakhir yang dipakai duluan.
export class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
  toArray() {
    return [...this.items];
  }
}

export const searchHistory = new Stack();