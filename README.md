# Jejak Kita

> Perencana perjalanan pribadi dan jurnal kenangan yang tenang, manusiawi, dan fokus pada kenyamanan.

## 1. Deskripsi Proyek

**Jejak Kita** adalah aplikasi web untuk merencanakan perjalanan bersama keluarga — khususnya perjalanan Rangga dan Ibu — dengan ritme yang santai. Aplikasi ini menggabungkan penyusunan itinerary, pengelolaan anggaran, checklist kesiapan, preferensi kenyamanan, rekomendasi destinasi, dan jurnal kenangan dalam satu tempat.

Berbeda dari aplikasi travel yang mengejar fitur sebanyak mungkin, Jejak Kita menekankan pengalaman yang sederhana: informasi penting terlihat jelas, keputusan bisa diambil tanpa terburu-buru, dan kenangan perjalanan tetap tersimpan rapi.

## 2. Kenapa Proyek Ini Dibuat

Perencanaan perjalanan sering kali terasa melelahkan karena harus berpindah-pindah antara catatan itinerary, spreadsheet anggaran, daftar bawaan, dan galeri foto. Bagi perjalanan bersama orang tua, kebutuhan utamanya bukan sekadar "tempat apa yang harus dikunjungi", tetapi juga ritme yang nyaman, jeda istirahat yang cukup, dan kepastian bahwa semua kebutuhan penting sudah siap.

Jejak Kita dibuat untuk:

- Menyusun itinerary yang mempertimbangkan tempo perjalanan, intensitas jalan kaki, dan frekuensi istirahat.
- Menjaga anggaran tetap transparan antara rencana dan realisasi.
- Memastikan dokumen, obat, dan perlengkapan penting tidak terlewat.
- Menyimpan cerita dan foto perjalanan sebagai kenangan yang bisa dibuka kembali.
- Memberi rekomendasi destinasi yang sesuai dengan preferensi, bukan sekadar daftar tempat populer.

## 3. Fungsi & Fitur Utama

1. **Manajemen Perjalanan** — membuat, melihat, dan mengubah rencana perjalanan dengan status `planning`, `booked`, `active`, `completed`, atau `archived`.
2. **Itinerary Builder** — menyusun hari perjalanan dan item aktivitas (atraksi, kuliner, transportasi, istirahat, belanja, hotel) lengkap dengan waktu, durasi, lokasi, dan catatan.
3. **Profil Kenyamanan** — menyimpan preferensi tempo perjalanan, intensitas jalan kaki, frekuensi istirahat, kepadatan aktivitas, moda transportasi, minat, preferensi makanan, dan preferensi budaya/alam.
4. **Rekomendasi Destinasi** — mengevaluasi kesesuaian destinasi dengan preferensi pengguna dan menampilkan faktor pendukung serta trade-off-nya.
5. **Anggaran Perjalanan** — mencatat item anggaran per kategori, memantau plafon rencana, dan membandingkannya dengan realisasi.
6. **Checklist Kesiapan** — mengelompokkan dokumen, perlengkapan kesehatan, barang kenyamanan, dan kebutuhan packing dengan indikator progres.
7. **Jurnal Kenangan** — mencatat cerita perjalanan, momen reflektif, referensi foto, dan menandai kenangan favorit.
8. **Data Master Destinasi** — katalog negara/kota prioritas (Jepang, Korea Selatan, Tiongkok, dan alternatif lain) sebagai dasar perencanaan.

## 4. Bahasa Pemrograman & Teknologi

| Lapisan | Teknologi |
| --- | --- |
| Bahasa utama | TypeScript |
| Framework | Next.js 14 (App Router) |
| UI | React, Tailwind CSS |
| Validasi | Zod |
| Database (rencana) | Supabase/PostgreSQL — skema tersedia di `supabase/schema.sql` |
| Testing | Vitest |
| Penyimpanan saat ini | Repository in-memory dengan data awal (seed) |

## 5. Struktur Direktori

```text
Jejak-Kita/
├── src/
│   ├── app/                 # Halaman dan API routes (trips, budget, checklist, memories, recommendations)
│   ├── components/          # Navbar, mobile tab bar, form, dan tampilan perjalanan
│   ├── domain/              # Schema Zod, tipe, repository, recommendation engine, baseline data
│   └── lib/                 # Utilitas dan klien Supabase
├── supabase/
│   └── schema.sql           # Skema database untuk pengembangan lanjutan
├── tests/                   # Pengujian domain dan slice
└── package.json
```

## 6. Cara Menjalankan

**Prasyarat:** Node.js 18+ dan npm.

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

**Konfigurasi opsional:** salin `.env.example` menjadi `.env.local` dan isi kredensial Supabase. Saat ini aplikasi menggunakan repository in-memory dengan data contoh, sehingga data akan kembali ke kondisi awal ketika server dijalankan ulang. Skema Supabase disiapkan untuk tahap persistensi berikutnya.

**Build produksi:**

```bash
npm run build
npm run start
```

## 7. Pengujian

```bash
npm test
```

Pengujian mencakup validasi domain, alur itinerary/anggaran/checklist, serta perilaku slice aplikasi.

## 8. Status & Lisensi

- **Status:** proyek pribadi yang sedang dikembangkan.
- **Lisensi:** private/personal project. Belum ada berkas lisensi di repo.
