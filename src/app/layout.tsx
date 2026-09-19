import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { CLINIC } from "@/lib/site";

const jakarta = localFont({
  src: [
    { path: "../fonts/PlusJakartaSans-normal.woff2", style: "normal" },
    { path: "../fonts/PlusJakartaSans-italic.woff2", style: "italic" },
  ],
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

const fraunces = localFont({
  src: [
    { path: "../fonts/Fraunces-normal.woff2", style: "normal" },
    { path: "../fonts/Fraunces-italic.woff2", style: "italic" },
  ],
  variable: "--font-fraunces",
  weight: "300 900",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://klinik-finamedika.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Klinik Fina Medika — Klinik Pratama Rawat Inap 24 Jam di Subang",
    template: "%s | Klinik Fina Medika",
  },
  description:
    "Klinik Pratama Rawat Inap Fina Medika di Jalancagak, Subang. Pemeriksaan dokter & bidan, UGD 24 jam, rawat inap, persalinan 24 jam, USG, EKG, laboratorium & apotek. Siaga setiap hari untuk keluarga Anda.",
  keywords: [
    "klinik fina medika",
    "klinik subang",
    "klinik jalancagak",
    "klinik rawat inap subang",
    "klinik 24 jam subang",
    "klinik persalinan subang",
    "klinik pratama subang",
    "USG kehamilan subang",
    "klinik terdekat jalancagak",
  ],
  applicationName: "Klinik Fina Medika",
  authors: [{ name: "Klinik Fina Medika" }],
  creator: "Klinik Fina Medika",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Klinik Fina Medika — Klinik Pratama Rawat Inap 24 Jam di Subang",
    description:
      "Mitra kesehatan keluarga di Jalancagak, Subang. Pemeriksaan dokter, UGD, rawat inap & persalinan siaga 24 jam. Hubungi via WhatsApp.",
    url: "/",
    siteName: "Klinik Fina Medika",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/about-team.jpg",
        width: 1344,
        height: 768,
        alt: "Tim medis Klinik Fina Medika di ruang resepsionis",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Klinik Fina Medika — Klinik Pratama Rawat Inap 24 Jam di Subang",
    description:
      "Pemeriksaan dokter, UGD, rawat inap & persalinan siaga 24 jam di Jalancagak, Subang.",
    images: ["/images/about-team.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: CLINIC.fullName,
  alternateName: CLINIC.name,
  description: CLINIC.shortDesc,
  url: siteUrl,
  telephone: CLINIC.phoneIntl,
  image: `${siteUrl}/images/about-team.jpg`,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Jabong No.1, Curugrendeng",
    addressLocality: "Jalancagak",
    addressRegion: "Jawa Barat",
    postalCode: "41281",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: CLINIC.coordinates.lat,
    longitude: CLINIC.coordinates.lng,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: CLINIC.rating,
    reviewCount: CLINIC.reviewCount,
    bestRating: 5,
  },
  medicalSpecialty: ["GeneralPractice", "Obstetric", "Midwifery"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning style={{ backgroundColor: "#fcfbf8" }}>
      <body className={`${jakarta.variable} ${fraunces.variable} antialiased`} style={{ backgroundColor: "#fcfbf8", color: "#22332f" }}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
