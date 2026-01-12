# Panduan Deployment ke GitHub Pages

File ini berisi panduan langkah demi langkah untuk men-deploy website portofolio ini ke GitHub Pages.

## 1. Persiapan Repository

Pastikan semua file (`index.html`, `style.css`, `script.js`) sudah ada di dalam repository GitHub Anda.

## 2. Mengaktifkan GitHub Pages

1.  Buka repository Anda di GitHub (https://github.com/yogiloop3-bit/Percobaan).
2.  Klik tab **Settings** (Pengaturan).
3.  Di menu sebelah kiri, cari dan klik bagian **Pages**.
4.  Pada bagian **Build and deployment**:
    *   **Source**: Pilih `Deploy from a branch`.
    *   **Branch**: Pilih `main` (atau `master` jika itu branch utama Anda) dan folder `/ (root)`.
    *   Klik tombol **Save**.

## 3. Menunggu Proses Build

Setelah Anda klik Save, GitHub akan memulai proses deployment.
*   Tunggu beberapa menit (biasanya 1-3 menit).
*   Refresh halaman Settings > Pages.
*   Anda akan melihat pesan sukses: "Your site is live at..." beserta link website Anda.

## 4. Troubleshooting Custom Domain (Jika Menggunakan)

Jika Anda ingin menggunakan custom domain (seperti `pijatpaktoyibi.com`), pastikan Anda telah melakukan konfigurasi DNS:

*   **CNAME Record**: Di penyedia domain Anda, buat CNAME record yang mengarah ke `yogiloop3-bit.github.io`.
*   **Di GitHub**: Masukkan nama domain Anda di kolom **Custom domain** pada halaman Settings > Pages.
*   **HTTPS**: Centang "Enforce HTTPS" untuk keamanan.

Jika link GitHub Pages Anda masih format default (`yogiloop3-bit.github.io/Percobaan`), itu normal jika Anda belum mensetting custom domain.

## 5. Memeriksa Website

Klik link yang diberikan oleh GitHub Pages untuk melihat website Anda secara live.

Selamat! Portofolio Anda sekarang online.
