# Klinik Fina Medika — Landing Page

Landing page profesional untuk **Klinik Pratama Rawat Inap Fina Medika** — klinik 24 jam di Jl. Jabong No.1, Curugrendeng, Jalancagak, Kabupaten Subang. Dibangun untuk presentasi demo kepada pemilik bisnis: mobile-first, cepat, dan berorientasi konversi (WhatsApp CTA di seluruh halaman).

## Fitur

- **Mobile-first & responsif** — dioptimalkan dari layar 320px hingga desktop besar, tanpa horizontal scroll
- **Conversion-oriented** — CTA WhatsApp berulang (topbar, navbar, hero, section CTA, floating button), rating Google 4.2★ ditampilkan sebagai social proof
- **Data bisnis real** — alamat, nomor WA, koordinat, jam layanan, dan tema ulasan bersumber dari Google Maps & media resmi klinik
- **SEO lokal lengkap** — metadata, Open Graph, dan JSON-LD schema `MedicalClinic` (alamat, koordinat, jam buka 24 jam, aggregate rating)
- **Self-hosted fonts** (Plus Jakarta Sans + Fraunces) — tanpa dependensi CDN eksternal
- **Animasi halus** — scroll reveal via IntersectionObserver, menghormati `prefers-reduced-motion`
- **Peta Google Maps embed** — tanpa API key

## Teknologi

| Bagian     | Teknologi                                  |
| ---------- | ------------------------------------------ |
| Framework  | Next.js 16 (App Router) + TypeScript 5     |
| Styling    | Tailwind CSS 4                             |
| Komponen   | shadcn/ui (Accordion, Sheet) + Lucide icons |
| Font       | next/font/local (Plus Jakarta Sans, Fraunces) |
| Animasi    | CSS + IntersectionObserver (tanpa library) |

## Struktur Proyek

```
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Metadata SEO, font, JSON-LD schema
│   │   ├── page.tsx          # Halaman utama (merangkai semua section)
│   │   ├── icon.svg          # Favicon
│   │   └── globals.css       # Design tokens & utilitas kustom
│   ├── components/landing/   # 14 komponen section (hero, layanan, dll.)
│   ├── lib/site.ts           # ⭐ SEMUA data bisnis & konten di satu file
│   └── fonts/                # WOFF2 variable fonts (self-hosted)
├── public/images/            # Foto landing page
└── .github/workflows/        # CI deploy ke GitHub Pages
```

> **Mengubah konten** (nomor WA, alamat, layanan, rating, link sosmed): cukup edit `src/lib/site.ts`.

## Menjalankan Proyek

**Prasyarat:** [Bun](https://bun.sh) ≥ 1.1 (atau Node.js ≥ 20 dengan npm/yarn/pnpm)

```bash
# 1. Install dependencies
bun install

# 2. Jalankan development server
bun run dev
# → http://localhost:3000
```

Perintah lain:

```bash
bun run lint          # ESLint
bun run build         # Production build (untuk Vercel / self-host)
bun run start         # Jalankan hasil production build
bun run build:pages   # Static export ke folder out/ (untuk GitHub Pages)
```

## Deployment

### 1. Vercel (direkomendasikan untuk produksi)

1. Push repo ke GitHub.
2. Di [vercel.com](https://vercel.com), klik **Add New Project** lalu pilih repo.
3. Framework preset terdeteksi otomatis (Next.js) — cukup klik **Deploy**. Tanpa env var tambahan.

Opsional: set `NEXT_PUBLIC_SITE_URL` (mis. `https://klinikfinamedika.com`) agar URL Open Graph & canonical absolut.

### 2. GitHub Pages (untuk testing)

Repo ini sudah termasuk workflow `.github/workflows/deploy-pages.yml`:

1. Push ke branch `main`.
2. Aktifkan **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. Workflow otomatis build static export dengan `basePath /<nama-repo>` lalu mem-publish.

URL hasil: `https://<username>.github.io/<nama-repo>/`

### 3. Manual static export

```bash
NEXT_PUBLIC_BASE_PATH=/nama-repo NEXT_EXPORT=true bun run build
# hasil ada di folder out/, upload ke hosting statik apa pun
```

## Environment Variables

Semua opsional:

| Variable                | Fungsi                                                    | Default          |
| ----------------------- | --------------------------------------------------------- | ---------------- |
| `NEXT_PUBLIC_SITE_URL`  | Domain produksi untuk SEO/canonical/OG                    | domain demo      |
| `NEXT_PUBLIC_BASE_PATH` | Base path (hanya untuk GitHub Pages / subfolder hosting)  | –                |
| `NEXT_EXPORT`           | `true` = mode static export (`output: "export"`)          | –                |

## Catatan Konten (untuk presentasi demo)

- Rating 4.2★ (18 ulasan), alamat, nomor telepon, dan koordinat sesuai listing Google Maps "Klinik Fina medika".
- Testimoni pada section "Kata Pasien" adalah **ilustrasi yang mencerminkan tema ulasan asli** (perawat ramah, dokter baik, obat tepat, rawat inap nyaman) — bukan kutipan verbatim, dan diberi keterangan demikian di halaman.
- Foto adalah ilustrasi AI yang dibuat khusus untuk demo ini; sebelum go-live, ganti dengan foto asli klinik untuk hasil terbaik.
- Jam layanan poli pemeriksaan ditampilkan "setiap hari" — mohon konfirmasi jadwal praktik dokter resmi kepada pemilik klinik sebelum publikasi.
