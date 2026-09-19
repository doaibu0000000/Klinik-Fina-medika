import { MapPin, Phone } from "lucide-react";
import { CLINIC, NAV_LINKS, waLink, WA_MESSAGES } from "@/lib/site";
import { InstagramIcon, LogoLockup, TikTokIcon, WhatsAppIcon } from "./icons";

const SERVICE_LINKS = [
  "Poli Umum",
  "UGD 24 Jam",
  "Rawat Inap",
  "Persalinan 24 Jam",
  "USG & Laboratorium",
  "Apotek",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto bg-[#0b3f37] text-white/75">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1.2fr]">
        {/* Brand */}
        <div>
          <LogoLockup light />
          <p className="mt-4 max-w-xs text-sm leading-relaxed">
            Klinik pratama rawat inap keluarga di Jalancagak, Subang. Layanan
            dokter, UGD, rawat inap, dan persalinan — siaga 24 jam setiap hari.
          </p>
          <div className="mt-5 flex items-center gap-2.5">
            <a
              href={CLINIC.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram ${CLINIC.instagramHandle}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 hover:text-white"
            >
              <InstagramIcon />
            </a>
            <a
              href={CLINIC.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`TikTok ${CLINIC.tiktokHandle}`}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 hover:text-white"
            >
              <TikTokIcon />
            </a>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp Klinik Fina Medika"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20 hover:text-white"
            >
              <WhatsAppIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>

        {/* Nav */}
        <nav aria-label="Navigasi footer" className="hidden lg:block">
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#faq" className="transition hover:text-white">
                Tanya Jawab
              </a>
            </li>
          </ul>
        </nav>

        {/* Services */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Layanan
          </h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {SERVICE_LINKS.map((s) => (
              <li key={s}>
                <a href="#layanan" className="transition hover:text-white">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white">
            Hubungi Kami
          </h3>
          <ul className="mt-4 space-y-3.5 text-sm">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-soft" aria-hidden="true" />
              <span className="leading-relaxed">{CLINIC.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4.5 w-4.5 shrink-0 text-brand-soft" aria-hidden="true" />
              <a href={`tel:${CLINIC.phoneIntl}`} className="transition hover:text-white">
                {CLINIC.phoneDisplay}
              </a>
            </li>
          </ul>
          <a
            href={waLink(WA_MESSAGES.general)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-deep"
          >
            <WhatsAppIcon className="h-4 w-4" />
            Chat WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-center text-xs text-white/50 sm:flex-row sm:px-6 sm:text-left">
          <p>
            © {year} {CLINIC.fullName}. Seluruh hak cipta dilindungi.
          </p>
          <p>
            Informasi lokasi &amp; rating bersumber dari Google Maps.
          </p>
        </div>
      </div>
    </footer>
  );
}
