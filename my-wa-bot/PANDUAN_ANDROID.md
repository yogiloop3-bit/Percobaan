# Panduan Menjalankan Bot di Android

Anda dapat menjalankan bot ini di Android menggunakan aplikasi **Termux**.

## Persiapan

1.  **Download Termux**
    *   Sangat disarankan mengunduh Termux dari [F-Droid](https://f-droid.org/en/packages/com.termux/), bukan Play Store (versi Play Store sudah usang).

2.  **Buka Termux dan Update**
    Jalankan perintah berikut:
    ```bash
    pkg update && pkg upgrade
    ```

## Instalasi

1.  **Install Git, Node.js, dan Chromium**
    Chromium diperlukan karena versi browser bawaan bot mungkin tidak kompatibel dengan Android (ARM).
    ```bash
    pkg install git nodejs chromium
    ```

2.  **Clone Repository (Ambil Kode Bot)**
    Jika kode bot sudah ada di GitHub, clone dengan perintah:
    ```bash
    git clone https://github.com/yogiloop3-bit/Bot-wa-triall.git
    cd Bot-wa-triall
    # Jika kode bot Anda berada di dalam folder (misal: my-wa-bot), masuk ke folder tersebut:
    # cd my-wa-bot
    ```

    Atau jika Anda menyalin file secara manual ke penyimpanan internal HP:
    ```bash
    termux-setup-storage
    cd storage/shared/Bot-wa-triall
    ```

3.  **Install Dependencies**
    Kita perlu memberitahu npm untuk melewati download Chromium bawaan Puppeteer karena kita sudah menginstallnya lewat `pkg`.
    ```bash
    export PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true
    npm install
    ```

## Menjalankan Bot

Setiap kali ingin menjalankan bot, gunakan perintah berikut untuk memastikan bot menggunakan Chromium yang terinstall di Termux:

```bash
export PUPPETEER_EXECUTABLE_PATH=$(which chromium)
npm start
```

## Scan QR Code

Setelah perintah `npm start` dijalankan, kode QR akan muncul di terminal.
1.  Buka WhatsApp di HP lain (atau gunakan fitur "Perangkat Tertaut" di HP yang sama jika bisa split screen/screenshot).
2.  Scan kode QR tersebut.
3.  Bot siap digunakan! Coba kirim `!ping` ke nomor bot Anda.

## Troubleshooting

*   **Error "Browser is not downloaded"**: Pastikan Anda sudah menjalankan perintah `export PUPPETEER_EXECUTABLE_PATH=$(which chromium)` sebelum `npm start`.
*   **Error "EACCES"**: Pastikan Anda memiliki izin akses penyimpanan jika menjalankan file dari penyimpanan internal.
