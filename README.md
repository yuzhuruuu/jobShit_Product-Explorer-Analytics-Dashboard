# Product Explorer & Analytics Dashboard

Sebuah studi kasus praktikum pengembangan aplikasi web berbasis **Vanilla JavaScript (ES6+)**, berfokus pada penerapan struktur data, algoritma, dan *problem solving* tanpa menggunakan *framework* atau *library* eksternal.

## Tentang Proyek
Proyek ini merupakan implementasi dari jobsheet "Advanced JavaScript & Data Structures for Web Development". Aplikasi ini mensimulasikan *dashboard* eksplorasi produk dan analitik menggunakan data dari [DummyJSON API](https://dummyjson.com/products). Fokus utama dari proyek ini adalah bagaimana merepresentasikan data kompleks, mengelola *state*, dan merender antarmuka pengguna (UI) secara terstruktur.

## Fitur Utama
- **Eksplorasi Produk:** Menampilkan daftar produk beserta detail (gambar, judul, harga, kategori, rating, dan stok).
- **Pencarian Lanjutan:** Pencarian dinamis dengan mode *Exact*, *Partial*, dan *Case-insensitive* yang dioptimasi dengan *Linear* dan *Binary Search*.
- **Filter & Sorting:** Penyaringan berdasarkan kategori dan pengurutan (*sorting*) berdasarkan harga, rating, atau abjad.
- **Dashboard Statistik:** Menampilkan metrik analitik seperti total produk, rata-rata harga, total stok, dan analisis per kategori.
- **Riwayat Pencarian (Search History):** Implementasi struktur data **Stack** (LIFO) untuk melacak riwayat *keyword* pencarian pengguna.
- **Optimasi Data:** Penggunaan struktur data **Map** untuk *lookup* data dengan performa O(1) dan **Set** untuk mengekstrak kategori atau *tag* unik secara efisien.
- **State Management:** Pengelolaan siklus hidup aplikasi (*idle, loading, success, error, empty*) secara terpusat murni menggunakan objek JavaScript.

## Teknologi yang Digunakan
- **HTML5 & CSS3:** Struktur dan presentasi antarmuka (cocok disesuaikan dengan *dark-mode* agar visual aplikasi lebih elegan).
- **Vanilla JavaScript (ES6+):** Logika inti, manipulasi DOM dinamis, dan *Event Handling*.
- **ES Modules:** Arsitektur modular *separation of concerns* (`api.js`, `algorithms.js`, `state.js`, `ui.js`, `main.js`).
- **Fetch API & Async/Await:** Komunikasi asinkron dengan REST API.

## Struktur Proyek
```text
📦 product-explorer
┣ belum, sabarrrrr ya
```

## Cara Menjalankan Proyek
Karena proyek ini mengadopsi sistem **ES Modules** (`<script type="module">`), aplikasi ini harus dijalankan melalui *local web server* untuk menghindari masalah CORS.
1. *Clone* repositori ini:
   ```bash
   git clone https://github.com/yuzhuruuu/jobShit_Product-Explorer-Analytics-Dashboard.git
   ```
2. Buka folder direktori proyek.
3. Jalankan *local server*. Jika menggunakan VS Code, gunakan ekstensi **Live Server**. Atau via terminal menggunakan Python:
   ```bash
   python -m http.server 8000
   ```
4. Buka `http://localhost:8000` di *browser*.

## Konsep Algoritma & Struktur Data (DSA)
Di balik antarmukanya, proyek ini mengintegrasikan berbagai konsep DSA:
- **Searching:** *Linear Search* (O(n)) dan *Binary Search* (O(log n)).
- **Sorting:** Implementasi manual (*Bubble Sort*) dan pemanfaatan *built-in array methods*.
- **Agregasi Data:** Penggunaan `reduce` untuk *frequency counting* dan *grouping*.
- **Struktur Data:** Set, Map, Stack, dan Queue.
- **Rekursi:** Untuk memproses data atau struktur kategori yang bertingkat (*nested*).

---
*Dikembangkan sebagai bagian dari tugas mata kuliah Pemrograman Web Fullstack.*
