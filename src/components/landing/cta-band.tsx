import { Siren } from "lucide-react";
import { waLink, WA_MESSAGES, CLINIC } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./icons";

export function CtaBand() {
  return (
    <section className="relative overflow-hidden bg-brand-deep" aria-labelledby="cta-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-28 -left-16 h-80 w-80 rounded-full bg-sand/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
        <Reveal>
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/20">
            <Siren className="h-7 w-7 text-brand-soft" aria-hidden="true" />
          </span>
          <h2
            id="cta-title"
            className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl"
          >
            Sakit tidak pilih waktu.{" "}
            <em className="italic text-brand-soft">Kami juga tidak.</em>
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-white/75">
            Simpan nomor kami sekarang, sebelum Anda membutuhkannya. Tim medis{" "}
            {CLINIC.name} siap menjawab WhatsApp Anda — siang atau malam.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-full bg-white px-8 text-base font-bold text-brand-deep shadow-soft-lg transition hover:-translate-y-0.5 hover:bg-brand-soft sm:w-auto"
            >
              <WhatsAppIcon className="h-5 w-5 text-brand" />
              Chat {CLINIC.phoneDisplay}
            </a>
            <a
              href={CLINIC.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[54px] w-full items-center justify-center gap-2 rounded-full border border-white/25 px-8 text-base font-semibold text-white transition hover:bg-white/10 sm:w-auto"
            >
              Datang Langsung ke Klinik
            </a>
          </div>
          <p className="mt-5 text-xs font-medium text-white/60">
            Kondisi gawat darurat? Datang langsung lebih baik — UGD kami buka 24 jam.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
