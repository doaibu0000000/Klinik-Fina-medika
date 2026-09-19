// ============================================================
// Sumber data tunggal untuk seluruh konten landing page.
// Ubah nilai di sini untuk memperbarui seluruh halaman.
// Data faktual bersumber dari Google Maps & media resmi klinik.
// ============================================================

export const CLINIC = {
  name: "Klinik Fina Medika",
  fullName: "Klinik Pratama Rawat Inap Fina Medika",
  shortDesc:
    "Klinik pratama rawat inap di Jalancagak, Subang — melayani pemeriksaan dokter & bidan, UGD, rawat inap, hingga persalinan, 24 jam setiap hari.",
  phoneDisplay: "0811-2079-090",
  phoneIntl: "+628112079090",
  address:
    "Jl. Jabong No.1, Curugrendeng, Kec. Jalancagak, Kabupaten Subang, Jawa Barat 41281",
  plusCode: "8M6G+HH Curugrendeng",
  rating: 4.2,
  reviewCount: 18,
  coordinates: { lat: -6.688595, lng: 107.6764419 },
  mapsUrl: "https://www.google.com/maps/place/Klinik+Fina+medika/@-6.688595,107.6764419,17z",
  mapsEmbedUrl:
    "https://maps.google.com/maps?q=Klinik%20Fina%20medika%20Jalancagak%20Subang&z=16&output=embed",
  mapsDirectionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=-6.688595,107.6764419&destination_place_id=0x2e69218b056b9059:0x2008a8d13990b2fe",
  instagram: "https://www.instagram.com/klinik.fina.medika/",
  instagramHandle: "@klinik.fina.medika",
  tiktok: "https://www.tiktok.com/@klinikfinamedika",
  tiktokHandle: "@klinikfinamedika",
  openingNote: "UGD, rawat inap & persalinan siaga 24 jam, setiap hari",
} as const;

export function waLink(message: string): string {
  return `https://wa.me/628112079090?text=${encodeURIComponent(message)}`;
}

export const WA_MESSAGES = {
  general: "Halo Klinik Fina Medika, saya ingin bertanya tentang layanan klinik.",
  emergency: "Halo Klinik Fina Medika, saya butuh bantuan medis segera.",
  maternity:
    "Halo Klinik Fina Medika, saya ingin konsultasi mengenai kehamilan / persalinan.",
  inpatient: "Halo Klinik Fina Medika, saya ingin bertanya tentang rawat inap.",
} as const;

export const NAV_LINKS = [
  { label: "Tentang", href: "#tentang" },
  { label: "Layanan", href: "#layanan" },
  { label: "Ibu & Anak", href: "#ibu-anak" },
  { label: "Testimoni", href: "#testimoni" },
  { label: "Kontak", href: "#kontak" },
] as const;
