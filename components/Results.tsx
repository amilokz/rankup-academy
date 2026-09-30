import Image from "next/image";
import { Award } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";
import { stats, toppers } from "@/data/content";

export default function Results() {
  return (
    <section id="results" className="relative overflow-hidden bg-indigo-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="text-stroke-lime pointer-events-none absolute top-6 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[16vw] font-black leading-none lg:text-[12rem]"
      >
        TOPPERS
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">
            Hall of fame
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            The wall our students built
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Real marks. Real names. This is what weekly testing does.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 80}>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-sm">
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-4xl font-black text-lime-400 sm:text-5xl"
                />
                <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/50 sm:text-sm">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {toppers.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 100}>
              <div className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:border-lime-400/40">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-indigo-600 font-display text-lg font-extrabold text-white">
                  {t.name.split(" ").map((w) => w[0]).join("")}
                </span>
                <div className="min-w-0">
                  <p className="truncate font-display text-lg font-extrabold text-white">
                    {t.name}
                  </p>
                  <p className="font-display text-xl font-black text-lime-400">{t.score}</p>
                  <p className="text-xs font-semibold text-white/50">
                    {t.exam} · {t.badge}
                  </p>
                </div>
                <Award className="ml-auto h-6 w-6 shrink-0 text-lime-400/60 transition-transform group-hover:scale-125 group-hover:text-lime-400" />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/img-results.webp"
              alt="RankUp Academy students celebrating their board results"
              width={1600}
              height={700}
              className="h-72 w-full object-cover sm:h-96"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-indigo-950/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-10">
              <p className="font-display text-2xl font-black text-white sm:text-4xl">
                Class of 2025: 1,200+ A &amp; A+ grades
              </p>
              <p className="mt-2 max-w-xl text-sm text-white/70 sm:text-base">
                Your photo belongs on this wall. Admissions for Session 2026 are open now.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
