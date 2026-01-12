# Panduan Meng-online-kan Website Portfolio

Berikut adalah langkah-langkah mudah untuk membuat website portfolio Anda bisa diakses oleh siapa saja di internet menggunakan **GitHub Pages** (Gratis).

## Cara 1: Upload Lewat Website GitHub (Paling Mudah)

Jika Anda belum menginstall Git di komputer, gunakan cara ini.

1.  **Login ke GitHub**: Buka [github.com](https://github.com) dan login.
2.  **Buat Repository Baru**:
    *   Klik tanda `+` di pojok kanan atas, lalu pilih **New repository**.
    *   **Repository name**: Isi dengan `portfolio` atau nama lain yang Anda suka.
        *   *Tips*: Jika Anda menamakannya `yogi.github.io` (sesuai username Anda), website akan tampil di alamat `https://yogi.github.io`. Jika namanya `portfolio`, alamatnya jadi `https://yogi.github.io/portfolio`.
    *   Pilih **Public**.
    *   Klik **Create repository**.
3.  **Upload File**:
    *   Di halaman repository yang baru dibuat, klik link **uploading an existing file**.
    *   Drag & drop (seret) semua file proyek ini (`index.html`, `style.css`, `script.js`, dll) ke kotak upload.
    *   Tunggu proses upload selesai.
    *   Di kotak "Commit changes" di bawah, ketik pesan (misal: "Upload pertama").
    *   Klik tombol hijau **Commit changes**.
4.  **Aktifkan Website**:
    *   Klik tab **Settings** di menu atas repository.
    *   Di menu sebelah kiri, klik **Pages**.
    *   Di bagian **Build and deployment** -> **Branch**, pilih `main` (atau `master`) lalu folder `/ (root)`.
    *   Klik **Save**.
5.  **Selesai!**
    *   Tunggu sekitar 1-2 menit. Refresh halaman Settings > Pages tersebut.
    *   Anda akan melihat pesan: "Your site is live at..." dengan link website Anda.

## Cara 2: Menggunakan Git Command Line (Untuk Developer)

Jika Anda sudah biasa menggunakan terminal/command prompt.

1.  Buat repository baru di GitHub.
2.  Buka terminal di folder proyek ini.
3.  Jalankan perintah berikut (ganti `USERNAME` dan `REPO` sesuai milik Anda):

```bash
git init
git add .
git commit -m "Initial deploy"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

4.  Ikuti langkah "Aktifkan Website" (Langkah ke-4 di Cara 1) di atas.

## Tips Tambahan

*   **Update Konten**: Jika ingin mengubah teks atau warna di masa depan, cukup edit file di komputer Anda, lalu upload ulang (atau `git push`) file yang berubah.

## Menggunakan Custom Domain (Opsional)

Jika Anda ingin mengubah alamat dari `yogi.github.io` menjadi domain sendiri seperti `www.pijatpaktoyibi.com`:

1.  **Beli Domain**: Anda harus membeli domain terlebih dahulu dari penyedia domain (seperti Niagahoster, GoDaddy, dll).
2.  **Format Domain**: Pastikan domain memiliki akhiran (ekstensi) seperti `.com`, `.id`, `.net`.
    *   ❌ Salah: `pijatpaktoyibi`
    *   ✅ Benar: `www.pijatpaktoyibi.com` atau `pijatpaktoyibi.com`
3.  **Setting di GitHub**:
    *   Masuk ke **Settings > Pages**.
    *   Di kolom **Custom domain**, masukkan nama domain lengkap Anda.
    *   Klik **Save**.
    *   *Catatan*: Jika muncul error "domain not properly formatted", itu berarti Anda lupa menuliskan akhiran domain (seperti `.com`).
