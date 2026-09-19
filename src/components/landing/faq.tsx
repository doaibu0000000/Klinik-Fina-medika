"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { waLink, WA_MESSAGES, CLINIC } from "@/lib/site";
import { Reveal } from "./reveal";

const FAQS = [
  {
    q: "Apakah Klinik Fina Medika buka 24 jam?",
    a: "Ya. UGD, rawat inap, dan persalinan kami siaga 24 jam setiap hari — termasuk hari libur dan akhir pekan. Anda bisa datang langsung kapan pun kondisi darurat datang, atau hubungi WhatsApp kami terlebih dahulu agar tim siap menyambut.",
  },
  {
    q: "Bagaimana cara mendaftar berobat di klinik?",
    a: "Cukup datang langsung ke klinik (Jl. Jabong No.1, Curugrendeng, Jalancagak), atau daftar lebih dulu lewat WhatsApp 0811-2079-090 supaya antrean Anda lebih singkat. Untuk kondisi darurat, datang langsung tanpa perlu mendaftar.",
  },
  {
    q: "Apakah tersedia layanan rawat inap?",
    a: "Ya, kami adalah klinik pratama rawat inap. Kamar kami bersih, nyaman, dan dijaga tim perawat 24 jam. Selama menjalani rawat inap, dokter akan melakukan visite secara rutin — bukan hanya saat hari kerja — agar perkembangan Anda selalu terpantau.",
  },
  {
    q: "Layanan apa saja yang tersedia untuk ibu hamil?",
    a: "Kami menyediakan pemeriksaan kehamilan (antenatal care), USG untuk memantau janin, hingga persalinan normal yang disiaga 24 jam oleh bidan dan dokter berpengalaman. Ibu hamil adalah prioritas utama kami — mulai dari konsultasi persiapan sampai perawatan setelah persalinan.",
  },
  {
    q: "Bagaimana kalau mengalami keadaan darurat di malam hari?",
    a: "Segera datang ke UGD kami di Jl. Jabong No.1, Curugrendeng — terbuka 24 jam. Jika memungkinkan, telepon atau WhatsApp 0811-2079-090 selama di jalan agar tim dapat bersiap menangani saat Anda tiba.",
  },
  {
    q: "Berapa perkiraan biaya pemeriksaan?",
    a: "Biaya tergantung layanan dan tindakan yang diperlukan, tetapi kami selalu menjelaskan estimasi secara jelas sebelum penanganan dimulai — tanpa biaya tersembunyi. Silakan tanyakan langsung lewat WhatsApp untuk perkiraan biaya sesuai keluhan Anda.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="faq-title">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Tanya Jawab
            </p>
            <h2
              id="faq-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-4xl"
            >
              Masih ragu?{" "}
              <em className="italic text-brand">Wajar kok</em>
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Berikut pertanyaan yang paling sering diajukan calon pasien. Kalau
              jawabannya belum ada di sini, tim kami siap menjawab langsung.
            </p>
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full bg-brand px-6 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-deep"
            >
              Tanya Langsung via WhatsApp
            </a>
            <p className="mt-3 text-xs text-stone-500">
              Balasan cepat di jam operasional chat · {CLINIC.phoneDisplay}
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <Accordion type="single" collapsible className="space-y-3">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`faq-${i}`}
                className="rounded-2xl border border-stone-200/80 bg-paper px-5 data-[state=open]:border-brand/30 data-[state=open]:shadow-soft sm:px-6"
              >
                <AccordionTrigger className="py-4.5 text-left text-[0.98rem] font-semibold text-brand-ink hover:no-underline sm:text-base [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-stone-600 sm:text-[0.95rem]">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
