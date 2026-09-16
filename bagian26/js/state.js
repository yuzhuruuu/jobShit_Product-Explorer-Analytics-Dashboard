// state.js — satu-satunya sumber kebenaran untuk data aplikasi.
// UI selalu dirender berdasarkan state ini, bukan dimanipulasi langsung.

export const state = {
  products: [],        
  search: "",
  category: "all",
  sortBy: "default",
  minPrice: "",
  maxPrice: "",
  minRating: "",
  favorites: new Set(),   
  status: "idle",          
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