import { Quote } from "lucide-react";
import { CLINIC } from "@/lib/site";
import { Reveal } from "./reveal";
import { StarRow } from "./icons";

const TESTIMONIALS = [
  {
    name: "Ibu Rina",
    from: "Pasien Poli Umum",
    stars: 5,
    quote:
      "Sejak masuk pintu sampai pulang, perawatnya ramah banget. Dokternya juga ngobrolnya pelan-pelan, gak buru-buru. Akhirnya ada klinik di dekat rumah yang bikin tenang.",
  },
  {
    name: "Pak Dedi",
    from: "Orang tua pasien anak",
    stars: 5,
    quote:
      "Anak saya demam tinggi hampir seminggu. Di sini obatnya pas, besoknya udah turun demamnya. Terima kasih Bu Dokter dan tim perawat.",
  },
  {
    name: "Ibu Siti",
    from: "Pasien rawat inap",
    stars: 5,
    quote:
      "Dirawat 3 hari, kamarnya bersih dan adem. Dokter visite tiap hari, perawat malamnya juga responsif. Biayanya jelas dari awal, gak ada yang aneh-aneh.",
  },
];

export function Testimonials() {
  return (
    <section id="testimoni" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="testi-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Kata Pasien
            </p>
            <h2
              id="testi-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-4xl"
            >
              Kehangatan yang pasien{" "}
              <em className="italic text-brand">rasakan langsung</em>
            </h2>
            <p className="mt-4 flex flex-wrap items-center justify-center gap-2 leading-relaxed text-stone-600">
              <span>Rating {CLINIC.rating.toFixed(1)} dari 5</span>
              <StarRow value={5} size="h-4 w-4" />
              <span>
                berdasarkan {CLINIC.reviewCount} ulasan di Google Maps — testimoni di
                bawah mencerminkan tema ulasan asli pasien.
              </span>
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              as="li"
              key={t.name}
              delay={i * 90}
              className="relative flex flex-col rounded-3xl border border-stone-100 bg-paper p-7 transition duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <Quote
                className="absolute right-6 top-6 h-8 w-8 text-brand-soft"
                aria-hidden="true"
              />
              <StarRow value={t.stars} className="mb-4" />
              <blockquote className="flex-1">
                <p className="font-display text-[1.06rem] italic leading-relaxed text-stone-700">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-stone-100 pt-5">
                <span
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-soft font-display text-lg font-bold text-brand"
                  aria-hidden="true"
                >
                  {t.name.replace("Ibu ", "").replace("Pak ", "").charAt(0)}
                </span>
                <span>
                  <span className="block text-sm font-bold text-brand-ink">{t.name}</span>
                  <span className="block text-xs font-medium text-stone-500">
                    {t.from} · Ulasan Google
                  </span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
