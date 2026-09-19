import {
  Baby,
  BedDouble,
  HeartPulse,
  MessageCircle,
  Microscope,
  Pill,
  ScanLine,
  Siren,
  Stethoscope,
} from "lucide-react";
import { waLink, WA_MESSAGES } from "@/lib/site";
import { Reveal } from "./reveal";
import { WhatsAppIcon } from "./icons";

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Poli Umum",
    desc: "Pemeriksaan dokter dan bidan untuk segala keluhan kesehatan keluarga — dari anak hingga lansia.",
  },
  {
    icon: Siren,
    title: "UGD 24 Jam",
    desc: "Penanganan gawat darurat yang cepat dan tenang, siaga siang dan malam tanpa libur.",
  },
  {
    icon: BedDouble,
    title: "Rawat Inap",
    desc: "Kamar rawat inap yang bersih dan nyaman, dengan visite dokter rutin selama perawatan.",
  },
  {
    icon: Baby,
    title: "Persalinan 24 Jam",
    desc: "Persalinan normal didampingi bidan dan dokter berpengalaman, dengan fasilitas lengkap.",
  },
  {
    icon: ScanLine,
    title: "USG Kehamilan",
    desc: "Pantau tumbuh kembang janin dan perkiraan hari lahir dengan pemeriksaan USG.",
  },
  {
    icon: HeartPulse,
    title: "EKG",
    desc: "Pemeriksaan irama jantung untuk deteksi dini gangguan kardiovaskular.",
  },
  {
    icon: Microscope,
    title: "Laboratorium",
    desc: "Cek darah lengkap dan pemeriksaan penunjang lain dengan hasil yang akurat.",
  },
  {
    icon: Pill,
    title: "Apotek",
    desc: "Obat lengkap dan asli, dengan edukasi pemakaian yang jelas dari tim kami.",
  },
];

export function Services() {
  return (
    <section id="layanan" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="services-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Layanan Kami
            </p>
            <h2
              id="services-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-4xl"
            >
              Satu klinik untuk{" "}
              <em className="italic text-brand">semua kebutuhan</em> keluarga
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Tidak perlu berpindah-pindah tempat. Dari pemeriksaan rutin,
              penunjang medis, sampai kondisi darurat — semua tersedia di Klinik
              Fina Medika.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 4) * 70}
              className="group relative overflow-hidden rounded-3xl border border-stone-100 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:border-brand/25 hover:shadow-soft-lg"
            >
              <span
                aria-hidden="true"
                className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-soft transition duration-300 group-hover:scale-[1.7]"
              />
              <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand text-white shadow-soft">
                <s.icon className="h-6 w-6" aria-hidden="true" />
              </span>
              <h3 className="relative mt-5 text-[1.05rem] font-bold text-brand-ink">
                {s.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-stone-600">
                {s.desc}
              </p>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-sm text-stone-500">
            Tidak yakin harus mulai dari mana?{" "}
            <a
              href={waLink(WA_MESSAGES.general)}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition hover:decoration-brand"
            >
              Ceritakan keluhan Anda
            </a>{" "}
            — kami bantu arahkan.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesCtaIcon() {
  return <MessageCircle aria-hidden="true" />;
}
