import Image from "next/image";
import { Baby, CalendarCheck, GraduationCap, HeartPulse, Stethoscope } from "lucide-react";
import { asset } from "@/lib/asset";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./icons";

const POINTS = [
  {
    icon: CalendarCheck,
    title: "Antenatal care terjadwal",
    desc: "Kontrol kehamilan rutin yang terdokumentasi rapi, jadi Anda selalu tahu perkembangan si kecil.",
  },
  {
    icon: ScanIcon,
    title: "USG kehamilan",
    desc: "Lihat wajah janin, denyut jantung, dan perkiraan hari persalinan langsung di klinik.",
  },
  {
    icon: Baby,
    title: "Persalinan normal 24 jam",
    desc: "Tim bidan dan dokter bersiaga penuh saat HPL tiba — tanpa perlu antre atau menunggu.",
  },
  {
    icon: GraduationCap,
    title: "Edukasi & konsultasi",
    desc: "Persiapan persalinan, tanda-tanda persalinan, hingga perawatan bayi baru lahir.",
  },
];

function ScanIcon(props: React.ComponentProps<typeof HeartPulse>) {
  return <Stethoscope {...props} />;
}

export function Maternity() {
  return (
    <section id="ibu-anak" className="relative overflow-hidden bg-brand-deep py-16 text-white sm:py-20 lg:py-24" aria-labelledby="maternity-title">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="dot-grid absolute inset-0 opacity-40" />
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/5 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        {/* Copy */}
        <div>
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-soft">
              Layanan Ibu &amp; Anak
            </p>
            <h2
              id="maternity-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl"
            >
              Dari hamil sampai lahir,{" "}
              <em className="italic text-brand-soft">kami yang menemani</em>
            </h2>
            <p className="mt-5 leading-relaxed text-white/80">
              Kehamilan adalah perjalanan yang paling nikmat dijalani dengan
              rasa tenang. Di Klinik Fina Medika, ibu hamil adalah prioritas —
              dengan layanan yang berorientasi pada keselamatan ibu dan bayi,
              dijaga oleh tim bidan yang hangat dan berpengalaman.
            </p>
          </Reveal>

          <ul className="mt-9 space-y-5">
            {POINTS.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 70} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/15">
                  <p.icon className="h-5 w-5 text-brand-soft" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-white/70">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={280}>
            <a
              href={waLink(WA_MESSAGES.maternity)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-9 inline-flex min-h-[52px] items-center justify-center gap-2.5 rounded-full bg-white px-7 text-base font-semibold text-brand-deep shadow-soft-lg transition hover:-translate-y-0.5 hover:bg-brand-soft"
            >
              <WhatsAppIcon className="h-5 w-5 text-brand" />
              Konsultasi Kehamilan
            </a>
          </Reveal>
        </div>

        {/* Visual */}
        <Reveal delay={150} className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div className="overflow-hidden rounded-[2rem] shadow-soft-lg ring-1 ring-white/20">
            <Image
              src={asset("/images/maternity-checkup.jpg")}
              alt="Daftar layanan resmi ibu dan anak Klinik Fina Medika meliputi Persalinan 24 Jam dan Pemeriksaan Kehamilan"
              width={1152}
              height={864}
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 560px"
              className="h-auto w-full object-cover"
            />
          </div>
          <div className="animate-floaty card-shimmer group absolute -bottom-6 left-4 z-20 cursor-pointer rounded-2xl border border-white/80 bg-white/95 p-4 shadow-soft-lg backdrop-blur-md sm:left-8">
            <div className="flex items-center gap-3">
              <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand text-white shadow-md shadow-brand/20 transition-transform duration-300 group-hover:scale-110">
                <Baby className="h-5 w-5" aria-hidden="true" />
                {/* Live beacon indicator */}
                <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
                </span>
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <p className="text-sm font-bold text-brand-ink">
                    Persalinan siaga 24 jam
                  </p>
                  <span className="inline-flex items-center rounded-full bg-emerald-50 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
                    Siap HPL
                  </span>
                </div>
                <p className="mt-0.5 text-xs font-medium text-stone-500">
                  bidan &amp; dokter selalu tersedia saat HPL
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
