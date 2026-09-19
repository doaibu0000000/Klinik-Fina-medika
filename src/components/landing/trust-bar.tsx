import { Clock4, HeartHandshake, Star, UserRoundCheck } from "lucide-react";
import { CLINIC } from "@/lib/site";
import { Reveal } from "./reveal";

const ITEMS = [
  {
    icon: Clock4,
    title: "Siaga 24 Jam",
    desc: "UGD, rawat inap & persalinan setiap hari",
  },
  {
    icon: UserRoundCheck,
    title: "Dokter & Bidan",
    desc: "Tim medis berpengalaman & perhatian",
  },
  {
    icon: Star,
    title: `Rating ${CLINIC.rating.toFixed(1)} / 5`,
    desc: `Dari ${CLINIC.reviewCount} ulasan di Google Maps`,
  },
  {
    icon: HeartHandshake,
    title: "Ramah & Perhatian",
    desc: "Disebut langsung oleh pasien di ulasan",
  },
];

export function TrustBar() {
  return (
    <section aria-label="Keunggulan singkat klinik" className="bg-paper border-y border-stone-100">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 gap-y-6 px-4 py-9 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {ITEMS.map((item, i) => (
          <Reveal
            key={item.title}
            delay={i * 70}
            className="flex items-center gap-3.5 sm:justify-center lg:justify-start"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-soft">
              <item.icon className="h-5 w-5 text-brand" aria-hidden="true" />
            </span>
            <div className="leading-tight">
              <p className="text-[0.95rem] font-bold text-brand-ink">{item.title}</p>
              <p className="mt-0.5 text-[0.82rem] font-medium text-stone-500">
                {item.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
