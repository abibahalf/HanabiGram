# Outline Instalasi Aplikasi React Native dengan Expo

Panduan ringkas membuat proyek Expo baru dan memasang paket satu per satu. Perintah di bawah menggunakan npm dan Expo CLI. `npx expo install` disarankan untuk memilih versi paket yang kompatibel dengan SDK Expo.

## 1. Persiapan

- Pasang Node.js versi LTS.
- Siapkan npm (sudah disertakan dengan Node.js).
- Siapkan Visual Studio Code atau editor pilihan.
- Android Studio/perangkat Android dan Xcode/perangkat iOS diperlukan hanya jika ingin menjalankan aplikasi pada emulator atau perangkat terkait. Xcode memerlukan macOS.

## 2. Buat proyek baru

```bash
npx create-expo-app@latest nama-aplikasi
cd nama-aplikasi
```

Template default sudah memasang paket dasar, TypeScript, dan Expo Router. Untuk proyek baru, biasanya tidak perlu memasang ulang paket-paket yang sudah ada.

## 3. Paket inti

Paket berikut disiapkan otomatis oleh `create-expo-app`. Perintah ditampilkan sebagai referensi jika paket inti memang belum ada di proyek.

```bash
npx expo install expo
npx expo install react
npx expo install react-native
```

## 4. Navigasi dan tautan

Pasang jika proyek belum menyertakannya dan aplikasi akan memakai Expo Router.

```bash
npx expo install expo-router
npx expo install expo-linking
```

Expo Router juga memerlukan beberapa paket pendukung:

```bash
npx expo install react-native-safe-area-context
npx expo install react-native-screens
npx expo install expo-constants
npx expo install expo-status-bar
```

Pada template default, paket tersebut biasanya sudah terpasang. Ikuti panduan instalasi Expo Router jika menambahkannya ke proyek yang sudah berjalan.

## 5. Tampilan dan fitur perangkat

Pasang hanya fitur yang digunakan aplikasi. Paket-paket ini umum dijumpai di template atau aplikasi Expo.

```bash
npx expo install expo-image
npx expo install expo-font
npx expo install expo-device
npx expo install expo-system-ui
npx expo install expo-web-browser
npx expo install expo-splash-screen
npx expo install expo-symbols
```

## 6. Gestur dan animasi

Tambahkan bila aplikasi menggunakan gestur atau animasi yang memerlukannya.

```bash
npx expo install react-native-gesture-handler
npx expo install react-native-reanimated
npx expo install react-native-worklets
```

## 7. TypeScript

Template default sudah menyertakan TypeScript. Jika perlu memasangnya pada proyek yang sudah ada, jalankan perintah berikut di Windows PowerShell:

```powershell
npx expo install typescript "--" --dev
npx expo install @types/react "--" --dev
```

## 8. Dukungan web (opsional)

Pasang jika aplikasi juga akan dijalankan di web.

```bash
npx expo install react-dom
npx expo install react-native-web
```

## 9. Pasang semua dependensi proyek dan jalankan aplikasi

Jika proyek sudah dibuat tetapi dependensinya belum dipasang, gunakan:

```bash
npm install
npx expo start
```

## 10. Catatan penting

- Periksa `package.json` sebelum memasang paket; jangan memasang ulang paket yang sudah tercantum.
- Gunakan `npx expo install nama-paket` untuk dependensi Expo dan React Native agar versi disesuaikan dengan SDK proyek.
- Tidak semua paket pada outline ini wajib. Pasang hanya paket yang diperlukan oleh fitur aplikasi.
- `npm install` memasang dependensi yang sudah tercantum dalam proyek; untuk menambahkan paket Expo baru, gunakan `npx expo install`.
- Versi paket yang tersedia bergantung pada versi Expo SDK yang digunakan.

## Referensi resmi

- Membuat proyek: https://docs.expo.dev/get-started/create-a-project/
- Instalasi Expo Router: https://docs.expo.dev/router/installation/
- Menggunakan TypeScript: https://docs.expo.dev/guides/typescript/
