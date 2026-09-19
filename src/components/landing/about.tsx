import Image from "next/image";
import { BadgeCheck, Heart } from "lucide-react";
import { asset } from "@/lib/asset";
import { CLINIC } from "@/lib/site";
import { Reveal } from "./reveal";

const CHECKLIST = [
  {
    title: "Pemeriksaan bidan & dokter",
    desc: "konsultasi menyeluruh, tidak terburu-buru",
  },
  {
    title: "UGD & rawat inap 24 jam",
    desc: "kamar nyaman dengan visite dokter rutin",
  },
  {
    title: "USG, EKG, laboratorium & apotek",
    desc: "penunjang medis lengkap di satu tempat",
  },
  {
    title: "Persalinan siaga 24 jam",
    desc: "ditemani tim bidan & dokter berpengalaman",
  },
];

export function About() {
  return (
    <section id="tentang" className="bg-paper py-16 sm:py-20 lg:py-24" aria-labelledby="about-title">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        {/* Visual */}
        <Reveal className="relative order-2 mx-auto w-full max-w-lg lg:order-1 lg:max-w-none">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] shadow-soft-lg">
              <Image
                src={asset("/images/about-team.jpg")}
                alt="Papan nama resmi Klinik Pratama Rawat Inap Fina Medika dan pintu masuk ruang periksa dokter di Jalancagak Subang"
                width={1344}
                height={768}
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 70vw, 560px"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Small offset photo */}
            <div className="absolute -bottom-10 -right-2 hidden w-44 overflow-hidden rounded-2xl border-4 border-paper shadow-soft-lg sm:block lg:-right-8 lg:w-56">
              <Image
                src={asset("/images/inpatient-care.jpg")}
                alt="Pintu UGD dan plang tulisan Klinik Fina Medika tampak depan"
                width={1344}
                height={768}
                sizes="220px"
                className="h-auto w-full object-cover"
              />
            </div>
            {/* Badge */}
            <div className="animate-floaty-alt card-shimmer group absolute -top-5 left-4 z-20 cursor-pointer rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-soft-lg backdrop-blur-md sm:left-6">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-transform duration-300 group-hover:scale-110">
                  <Heart className="h-5 w-5 fill-brand/20 text-brand" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-display text-lg font-bold text-brand sm:text-xl leading-tight">
                    Sejak masuk,
                  </p>
                  <p className="text-xs font-semibold text-stone-500">
                    Anda sudah keluarga kami
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="order-1 max-w-xl lg:order-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
              Tentang Kami
            </p>
            <h2
              id="about-title"
              className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-brand-ink sm:text-4xl"
            >
              Klinik keluarga yang mengenal{" "}
              <em className="italic text-brand">nama Anda</em>, bukan nomor antrean
            </h2>
          </Reveal>

          <Reveal delay={100}>
            <p className="mt-6 leading-relaxed text-stone-600">
              {CLINIC.fullName} berada di Jl. Jabong, Curugrendeng, Kecamatan
              Jalancagak — dekat dengan rumah warga dan mudah dijangkau dari
              seluruh penjuru Subang. Kami percaya pelayanan kesehatan yang baik
              dimulai dari kehangatan: mendengarkan keluhan sampai tuntas,
              menjelaskan kondisi dengan bahasa yang mudah dipahami, dan
              memastikan setiap pasien pulang dengan tenang.
            </p>
            <p className="mt-4 leading-relaxed text-stone-600">
              Sebagai klinik pratama dengan fasilitas rawat inap, kami melayani
              pemeriksaan umum, penanganan gawat darurat, hingga proses
              persalinan — semua dalam satu tempat yang bersih, nyaman, dan
              terjaga.
            </p>
          </Reveal>

          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {CHECKLIST.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 70} className="flex gap-3">
                <BadgeCheck
                  className="mt-0.5 h-5 w-5 shrink-0 text-brand"
                  aria-hidden="true"
                />
                <p className="text-sm leading-snug text-stone-700">
                  <strong className="font-semibold text-brand-ink">{item.title}</strong>
                  <span className="mt-0.5 block text-[0.82rem] text-stone-500">
                    {item.desc}
                  </span>
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
