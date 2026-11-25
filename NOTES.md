# NOTES — One-Line Laugh-Off (u-zkhiel-one-line-laugh-off-714618ae)

## Entry (satu baris)

> My houseplants staged an intervention: watering them "whenever I remember" isn't a care plan, it's a hostage negotiation.

## Alasan desain

- **Struktur setup → twist:** kalimat dibuka dengan gambaran absurd tapi
  relatable (tanaman mengadakan "intervention"), lalu punchline di akhir
  membingkai ulang kebiasaan malas menyiram sebagai "hostage negotiation".
  Twist-nya jatuh di 2 kata terakhir, sesuai kriteria judge: laugh yang
  keras dan tiba-tiba pada cold read.
- **Surprise:** "intervention" biasanya untuk kecanduan; diterapkan ke
  tanaman, lalu "care plan" vs "hostage negotiation" membalik ekspektasi
  dari perawatan menjadi penyanderaan.
- **Economy:** 121 karakter, satu kalimat, tidak ada kata yang bisa
  dipangkas tanpa melemahkan punchline. Jauh di bawah batas gate 200 karakter.
- **Freshness:** bukan setup daur ulang (bukan dokter/pesawat/tebak-tebakan
  klasik); premis tanaman + intervensi + negosiasi sandera adalah kombinasi
  yang belum umum sebagai one-liner.
- **Cold read:** berdiri sendiri tanpa konteks, setup notes, atau penjelasan.
- **Deterministik:** `main.ts` menulis string konstan ke `/output/entry.txt`,
  tanpa input, network, randomness, atau secret — program yang sama selalu
  menghasilkan byte yang sama.

## Validasi

- `node main.ts` dijalankan 2x; output `/output/entry.txt` dibandingkan
  dengan `sha256sum` — hash kedua run identik (lihat di bawah).
- Gate check lokal: UTF-8, 1–200 karakter, bukan hanya whitespace.
- Anchor: `makefun anchor d7e8191ac8d4786e3d64c879e45a9fc7b887124e round 34256209`
  (dicetak oleh `node <kit>/cli/makefun.mjs init` sebelum edit apa pun).
