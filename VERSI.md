# Tiga versi untuk disubmit

Satu repo, satu project Vercel, tiga subfolder. Masing-masing adalah salinan
penuh aplikasi dengan tema dikunci, jadi tidak perlu repo atau project baru.

| Versi | Link | Ciri |
|---|---|---|
| A | https://housebets-sportsbook-ashy.vercel.app/a/ | Tanpa border, datar. Kartu menyatu dengan halaman, hanya rambut pemisah. Huruf harga lebih besar. |
| B | https://housebets-sportsbook-ashy.vercel.app/b/ | Kartu lebih gelap, label mikro huruf kapital dengan jarak antarhuruf. Terkesan lebih teknis. |
| C | https://housebets-sportsbook-ashy.vercel.app/c/ | Versi utama. Papan skor tebal, harga 14.5px, radius 16px. |

Kontes mengizinkan 3 submission per hari dan menilai semuanya.

## Cara kerja

`boot()` di `assets/app.js` biasanya membaca `?theme=`. Di masing-masing
subfolder baris itu diganti menjadi konstanta:

    const th = 'a';   // versi ini dikunci ke tema A

Jadi `/a/` selalu tema A berapa pun query string-nya.

## Sebelum disubmit

- [ ] Buka ketiganya, bandingkan, pilih yang paling kuat sebagai submission utama
- [ ] Periksa versi A dan B di lebar 390 dan 360 — keduanya sudah bebas
      truncated, tapi belum dipoles separuh versi C
- [ ] Isi "Your big idea" per versi (bedakan narasinya, jangan diulang)

## Status verifikasi

- 0 nama terpotong di 5 halaman x 3 tema x 15 lebar (225 kombinasi)
- Tidak ada overflow horizontal 320 → 1440
- 27/27 assertion lulus, 0 error konsol
