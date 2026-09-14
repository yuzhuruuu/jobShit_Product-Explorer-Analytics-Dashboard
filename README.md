# Product Explorer & Analytics Dashboard 

Sebuah aplikasi web interaktif yang dibangun menggunakan **Vanilla JavaScript (ES6+)** murni tanpa framework tambahan. Proyek ini merupakan studi kasus komprehensif untuk implementasi struktur data lanjutan (Set, Map, Stack) dan algoritma (Searching, Sorting) dalam ekosistem pengembangan web modern.

## Deskripsi Proyek

Aplikasi ini mengambil data produk menggunakan REST API dari [DummyJSON](https://dummyjson.com/products), mengelolanya dalam arsitektur *State Management* mandiri, dan merendernya ke DOM secara dinamis. Proyek ini menerapkan **ES Modules** untuk memastikan *separation of concerns* yang baik antara logika antarmuka, manipulasi data, dan panggilan API.

## Fitur Utama

- **Data Fetching:** Pengambilan data asinkron menggunakan `Fetch API` dan `async/await`.
- **Advanced Filtering & Sorting:** Pemilahan data berdasarkan multikriteria (Pencarian teks, kategori, urutan harga, dan rating).
- **Struktur Data Kustom:**
  - `Set` untuk mengekstrak dan menampilkan daftar kategori yang unik.
  - `Stack` (LIFO) untuk mengimplementasikan fitur riwayat mundur (*Undo Search*).
  - `Map` untuk optimasi pencarian data berulang.
- **State Management:** Seluruh perubahan UI dikendalikan oleh satu sumber kebenaran (*Single Source of Truth*) melalui *state object*.
- **Analytics Dashboard:** Kalkulasi statistik otomatis menggunakan metode fungsional array (`map`, `filter`, `reduce`).

## Teknologi yang Digunakan

- **HTML5 & CSS3:** Desain responsif dan modern.
- **JavaScript (ES6+):** Arrow functions, destructuring, spread operators, optional chaining.
- **Arsitektur:** ES Modules (`import`/`export`).

## Struktur Direktori Main Project

```text
📁 product_Explorer/
├── 📄 index.html      
├── 📄 style.css       
└── 📁 js/             
    ├── 📄 main.js       
    ├── 📄 state.js       
    ├── 📄 api.js        
    ├── 📄 utils.js       
    ├── 📄 ui.js         
    └── 📄 algorithms.js # Algoritma Searching, Sorting, Stack, Map, dan Set
