import { Clock4, HeartPulse, MessageCircleHeart, ShieldCheck, Stethoscope, Wallet } from "lucide-react";
import { Reveal } from "./reveal";

const REASONS = [
  {
    icon: MessageCircleHeart,
    title: "Perawat yang ramah",
    desc: "Hal pertama yang paling sering dipuji pasien di ulasan Google kami: tim perawat yang menyambut dengan senyum dan sabar.",
    tag: "Disebut di 3+ ulasan Google",
  },
  {
    icon: Stethoscope,
    title: "Dokter yang baik & telaten",
    desc: "Dokter kami mendengarkan keluhan sampai tuntas dan menjelaskan diagnosis dengan bahasa yang mudah dipahami.",
    tag: "Disebut di ulasan Google",
  },
  {
    icon: HeartPulse,
    title: "Obat yang tepat",
    desc: "Resep yang disusun sesuai kondisi, plus edukasi cara pakai — pasien kami merasakan hasilnya.",
    tag: "Disebut di ulasan Google",
  },
  {
    icon: Clock4,
    title: "Tidak ada kata tutup",
    desc: "Demam tengah malam? Sakit di hari libur? UGD dan rawat inap kami siaga 24 jam, tujuh hari seminggu.",
    tag: "Siaga 24 jam",
  },
  {
    icon: ShieldCheck,
    title: "Rawat inap seperti di rumah",
    desc: "Pasien rawat inap tetap mendapat visite dokter secara rutin — bukan hanya saat hari kerja.",
    tag: "Visite dokter rutin",
  },
  {
    icon: Wallet,
    title: "Biaya jujur & transparan",
    desc: "Estimasi biaya dijelaskan di awal, tanpa biaya tersembunyi. Kesehatan tidak harus bikin dompet kering.",
    tag: "Transparan sejak awal",
  },
];

export function WhyUs() {
  return (
    <section id="keunggulan" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="why-title">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Kenapa Fina Medika
            </p>
            <h2
              id="why-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-4xl"
            >
              Yang pasien bilang soal kami,{" "}
              <em className="italic text-brand">bukan yang kami klaim</em>
            </h2>
            <p className="mt-4 leading-relaxed text-stone-600">
              Enam alasan ini bukan karangan marketing — semuanya bersumber dari
              ulasan jujur pasien di Google Maps dan praktik klinik kami sehari-hari.
            </p>
          </Reveal>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal
              as="li"
              key={r.title}
              delay={(i % 3) * 80}
              className="flex flex-col rounded-3xl border border-stone-100 bg-paper p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-soft">
                <r.icon className="h-6 w-6 text-brand" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-[1.05rem] font-bold text-brand-ink">{r.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
                {r.desc}
              </p>
              <p className="mt-4 inline-flex w-fit items-center rounded-full bg-sand-soft px-3 py-1 text-[0.72rem] font-semibold text-amber-800">
                {r.tag}
              </p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
