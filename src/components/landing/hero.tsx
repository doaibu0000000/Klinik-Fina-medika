import Image from "next/image";
import { ArrowDown, ShieldCheck, Siren } from "lucide-react";
import { asset } from "@/lib/asset";
import { CLINIC, waLink, WA_MESSAGES } from "@/lib/site";
import { StarRow, WhatsAppIcon } from "./icons";
import { Reveal } from "./reveal";

export function Hero() {
  return (
    <section id="beranda" className="relative overflow-hidden bg-paper" aria-labelledby="hero-title">
      {/* Decorative background wash */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-soft blur-3xl opacity-70" />
        <div className="absolute bottom-[-30%] left-[-8%] h-[380px] w-[380px] rounded-full bg-sand-soft blur-3xl opacity-60" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 pb-16 pt-10 sm:px-6 md:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-12 lg:pb-24 lg:pt-20">
        {/* Copy */}
        <div className="max-w-xl">
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand shadow-sm">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              Klinik Pratama Rawat Inap · Subang
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1
              id="hero-title"
              className="mt-5 font-display text-[2.35rem] font-semibold leading-[1.12] tracking-tight text-brand-ink sm:text-5xl lg:text-[3.4rem]"
            >
              Perawatan yang{" "}
              <em className="font-display italic text-brand">hangat</em> untuk
              keluarga Anda,{" "}
              <span className="relative whitespace-nowrap">
                siaga 24 jam
                <svg
                  aria-hidden="true"
                  viewBox="0 0 220 12"
                  className="absolute -bottom-1.5 left-0 w-full text-sand"
                  fill="none"
                >
                  <path
                    d="M3 9c40-5.5 130-7.5 214-4"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              .
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 text-base leading-relaxed text-stone-600 sm:text-lg">
              Dari pemeriksaan dokter hingga persalinan, {CLINIC.name} di
              Jalancagak siap menemani keluarga Anda dengan layanan medis yang
              lengkap, perawat yang ramah, dan biaya yang jelas —{" "}
              <strong className="font-semibold text-brand-ink">
                kapan pun Anda butuhkan.
              </strong>
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={waLink(WA_MESSAGES.general)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-brand px-7 text-base font-semibold text-white shadow-soft-lg transition hover:-translate-y-0.5 hover:bg-brand-deep"
              >
                <WhatsAppIcon className="h-5 w-5" />
                Konsultasi via WhatsApp
              </a>
              <a
                href="#layanan"
                className="inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full border border-stone-300 bg-white px-7 text-base font-semibold text-brand-ink transition hover:border-brand hover:text-brand"
              >
                Lihat Layanan
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
              <a
                href={CLINIC.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5"
                aria-label={`Rating ${CLINIC.rating} dari 5 di Google Maps, lihat ${CLINIC.reviewCount} ulasan`}
              >
                <span className="font-display text-2xl font-bold text-brand-ink">
                  {CLINIC.rating.toFixed(1)}
                </span>
                <span className="flex flex-col">
                  <StarRow value={5} size="h-4 w-4" />
                  <span className="mt-0.5 text-xs font-medium text-stone-500">
                    {CLINIC.reviewCount} ulasan Google
                  </span>
                </span>
              </a>
              <span aria-hidden="true" className="hidden h-9 w-px bg-stone-200 sm:block" />
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft">
                  <Siren className="h-4.5 w-4.5 text-brand" aria-hidden="true" />
                </span>
                <p className="text-sm font-semibold leading-tight text-brand-ink">
                  UGD &amp; Rawat Inap
                  <span className="block text-xs font-medium text-stone-500">
                    siaga 24 jam, setiap hari
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={200} className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative">
            {/* Organic frame */}
            <div className="blob-shape relative overflow-hidden bg-brand-soft shadow-soft-lg">
              <Image
                src={asset("/images/hero-doctor.jpg")}
                alt="Gedung dan pintu masuk UGD 24 jam Klinik Fina Medika di Jalancagak, Subang"
                width={864}
                height={1152}
                priority
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 60vw, 480px"
                className="h-auto w-full scale-[1.02] object-cover"
              />
            </div>

            {/* Floating card: 24 jam */}
            <div className="animate-floaty card-shimmer group absolute -left-3 top-8 z-20 cursor-pointer rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-soft-lg backdrop-blur-md sm:-left-8 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/30 transition-transform duration-300 group-hover:scale-110">
                    <Siren className="animate-siren h-5 w-5" aria-hidden="true" />
                  </span>
                  {/* Live beacon indicator */}
                  <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 shadow-sm"></span>
                  </span>
                </div>
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-brand-ink">UGD 24 Jam</p>
                    <span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                      Siaga
                    </span>
                  </div>
                  <p className="text-xs font-medium text-stone-500">
                    siaga siang &amp; malam
                  </p>
                </div>
              </div>
            </div>

            {/* Floating card: rating */}
            <div className="animate-floaty-slow card-shimmer group absolute -bottom-5 right-2 z-20 cursor-pointer rounded-2xl border border-white/80 bg-white/95 p-3.5 shadow-soft-lg backdrop-blur-md sm:-right-4 sm:p-4">
              <div className="flex items-center gap-3">
                <div className="leading-tight">
                  <div className="flex items-center gap-1.5">
                    <p className="text-sm font-bold text-brand-ink">
                      Pasien merasa nyaman
                    </p>
                    <span className="flex h-4 w-4 items-center justify-center rounded-full bg-amber-100 text-[10px] font-bold text-amber-700">
                      ✓
                    </span>
                  </div>
                  <div className="animate-star-twinkle">
                    <StarRow value={5} size="h-3.5 w-3.5" className="mt-1" />
                  </div>
                  <p className="mt-1 text-xs font-medium text-stone-500 italic">
                    &ldquo;perawatnya ramah banget&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
