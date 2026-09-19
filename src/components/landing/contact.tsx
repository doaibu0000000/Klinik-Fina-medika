import { MapPin, Navigation, Phone } from "lucide-react";
import { CLINIC, waLink, WA_MESSAGES } from "@/lib/site";
import { Reveal } from "./reveal";
import { InstagramIcon, TikTokIcon, WhatsAppIcon } from "./icons";

export function Contact() {
  return (
    <section id="kontak" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="contact-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Kunjungi Kami
            </p>
            <h2
              id="contact-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-4xl"
            >
              Lokasi mudah dijangkau,{" "}
              <em className="italic text-brand">pintu selalu terbuka</em>
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {/* Info */}
          <Reveal className="flex flex-col gap-5">
            <div className="rounded-3xl border border-stone-100 bg-paper p-6 sm:p-7">
              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-brand-ink">Alamat Klinik</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-stone-600">
                    {CLINIC.address}
                  </p>
                  <p className="mt-1 text-xs font-medium text-stone-400">
                    Plus code: {CLINIC.plusCode}
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-stone-200/70" aria-hidden="true" />

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-bold text-brand-ink">Telepon / WhatsApp</h3>
                  <a
                    href={`tel:${CLINIC.phoneIntl}`}
                    className="mt-1.5 block text-sm font-semibold text-brand hover:underline"
                  >
                    {CLINIC.phoneDisplay}
                  </a>
                  <p className="mt-0.5 text-xs text-stone-500">
                    Telepon kapan pun untuk kondisi darurat
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-stone-200/70" aria-hidden="true" />

              <div className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand text-white">
                  <WhatsAppIcon className="h-5 w-5" />
                </span>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-ink">Jam Layanan</h3>
                  <dl className="mt-2 space-y-2 text-sm">
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-stone-600">UGD, rawat inap &amp; persalinan</dt>
                      <dd className="whitespace-nowrap text-right font-semibold text-brand">
                        24 Jam
                      </dd>
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <dt className="text-stone-600">Poli pemeriksaan dokter &amp; bidan</dt>
                      <dd className="whitespace-nowrap text-right font-semibold text-brand">
                        Setiap hari
                      </dd>
                    </div>
                  </dl>
                  <p className="mt-2 text-xs text-stone-500">
                    Untuk jadwal praktik dokter hari ini, tanyakan lewat WhatsApp
                    — kami balas secepatnya.
                  </p>
                </div>
              </div>

              <div className="my-6 h-px bg-stone-200/70" aria-hidden="true" />

              <div className="flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-stone-400">
                  Ikuti kami
                </span>
                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={CLINIC.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-600 transition hover:border-brand hover:text-brand"
                    aria-label={`Instagram klinik ${CLINIC.instagramHandle}`}
                  >
                    <InstagramIcon className="h-4 w-4" />
                    {CLINIC.instagramHandle}
                  </a>
                  <a
                    href={CLINIC.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-stone-200 bg-white px-3 py-1.5 text-xs font-semibold text-stone-600 transition hover:border-brand hover:text-brand"
                    aria-label={`TikTok klinik ${CLINIC.tiktokHandle}`}
                  >
                    <TikTokIcon className="h-4 w-4" />
                    {CLINIC.tiktokHandle}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={CLINIC.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-base font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-brand-deep"
            >
              <Navigation className="h-5 w-5" aria-hidden="true" />
              Petunjuk Arah di Google Maps
            </a>
          </Reveal>

          {/* Map */}
          <Reveal delay={120} className="min-h-[380px] overflow-hidden rounded-3xl border border-stone-100 shadow-soft lg:min-h-full">
            <iframe
              title={`Peta lokasi ${CLINIC.name} di Google Maps`}
              src={CLINIC.mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "420px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
