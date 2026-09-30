"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, Medal, MessageCircle, Sparkles, Trophy } from "lucide-react";
import Counter from "./Counter";
import { stats, tickerItems, waLink } from "@/data/content";

function KineticWord({
  children,
  delay,
  className = "",
}: {
  children: React.ReactNode;
  delay: number;
  className?: string;
}) {
  return (
    <span className="inline-block overflow-hidden pb-1 align-bottom">
      <span
        className={`inline-block animate-rise ${className}`}
        style={{ animationDelay: `${delay}ms` }}
      >
        {children}
      </span>
    </span>
  );
}

function Ticker() {
  const items = [...tickerItems, ...tickerItems];
  return (
    <div className="relative overflow-hidden border-y-4 border-lime-400 bg-indigo-950 py-3.5">
      <div className="flex w-max animate-marquee items-center gap-10 pr-10">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-2.5 whitespace-nowrap font-display text-sm font-bold tracking-wide text-white"
          >
            <Trophy className="h-4 w-4 shrink-0 text-lime-400" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches &&
      videoRef.current
    ) {
      videoRef.current.pause();
    }
  }, []);

  return (
    <section id="top" className="relative overflow-hidden bg-white">
      {/* dotted backdrop + giant watermark */}
      <div className="dot-grid pointer-events-none absolute inset-x-0 top-0 h-[420px] opacity-60 [mask-image:linear-gradient(to_bottom,black,transparent)]" />
      <div
        aria-hidden
        className="text-stroke-indigo pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[19vw] font-black leading-none tracking-tight lg:text-[15rem]"
      >
        RANK UP
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-14 px-4 pb-16 pt-32 sm:px-6 lg:grid-cols-12 lg:gap-8 lg:pt-40">
        {/* ---- Left: kinetic typography ---- */}
        <div className="lg:col-span-7">
          <div className="inline-flex animate-pop items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-700">
            <Sparkles className="h-3.5 w-3.5" />
            Admissions open · Session 2026
          </div>

          <h1 className="mt-6 font-display text-[17vw] font-black leading-[0.92] tracking-tight text-indigo-950 sm:text-7xl lg:text-[5.6rem] xl:text-[6.5rem]">
            <KineticWord delay={0}>RESULTS.</KineticWord>
            <br />
            <KineticWord delay={120}>NOT</KineticWord>{" "}
            <KineticWord delay={240}>
              <span className="relative inline-block px-2">
                <span className="absolute inset-0 -skew-x-6 rounded-lg bg-lime-300" />
                <span className="relative">PROMISES.</span>
              </span>
            </KineticWord>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-indigo-950/60">
            Rawalpindi&apos;s most results-obsessed tuition &amp; coaching center.
            Matric, FSc, MDCAT, CSS/PMS — taught by board examiners, tested every
            single week, in batches of max 25.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#courses"
              className="group inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 font-display text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-transform hover:scale-105"
            >
              Explore Courses
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={waLink(
                "Assalam-o-Alaikum! I want to book a FREE demo class at RankUp Academy."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-2 border-indigo-950/15 bg-white px-7 py-[14px] font-display text-base font-bold text-indigo-950 transition-colors hover:border-indigo-600 hover:text-indigo-600"
            >
              <MessageCircle className="h-5 w-5" />
              Free Demo Class
            </a>
          </div>

          {/* animated counters */}
          <div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t-2 border-dashed border-indigo-100 pt-8">
            {stats.slice(0, 3).map((s) => (
              <div key={s.label}>
                <Counter
                  value={s.value}
                  suffix={s.suffix}
                  className="font-display text-4xl font-black text-indigo-950 sm:text-5xl"
                />
                <p className="mt-1.5 text-xs font-semibold uppercase tracking-wide text-indigo-950/50 sm:text-sm">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---- Right: trophy-wall collage ---- */}
        <div className="relative lg:col-span-5">
          <div className="relative mx-auto max-w-md lg:max-w-none">
            {/* video tile */}
            <div
              className="animate-pop overflow-hidden rounded-[2rem] border-8 border-white shadow-2xl shadow-indigo-600/25"
              style={{ animationDelay: "300ms", transform: "rotate(2deg)" }}
            >
              <video
                ref={videoRef}
                src="/hero.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            {/* floating topper card */}
            <div
              className="absolute -left-4 top-8 animate-float rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-xl shadow-indigo-600/15 backdrop-blur-md sm:-left-8"
              style={{ ["--float-rotate" as string]: "-3deg" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime-400">
                  <Trophy className="h-6 w-6 text-indigo-950" />
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold text-indigo-950">
                    Ayesha Khan
                  </p>
                  <p className="text-xs font-bold text-indigo-600">
                    1098/1100 · Matric 2025
                  </p>
                </div>
              </div>
            </div>

            {/* floating CSS card */}
            <div
              className="absolute -bottom-6 right-2 animate-float-slow rounded-2xl border border-indigo-100 bg-white/90 p-4 shadow-xl shadow-indigo-600/15 backdrop-blur-md sm:right-6"
              style={{ ["--float-rotate" as string]: "2deg" }}
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-600">
                  <Medal className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="font-display text-sm font-extrabold text-indigo-950">
                    Bilal Ahmed
                  </p>
                  <p className="text-xs font-bold text-indigo-600">
                    CSS 2025 · Qualified
                  </p>
                </div>
              </div>
            </div>

            {/* rotating badge */}
            <div className="absolute -top-8 right-4 animate-pop sm:right-10" style={{ animationDelay: "600ms" }}>
              <div className="relative grid h-28 w-28 place-items-center">
                <div className="absolute inset-0 animate-spin-slower rounded-full border-4 border-dashed border-indigo-300" />
                <div className="grid h-20 w-20 place-items-center rounded-full bg-indigo-600 text-center shadow-lg shadow-indigo-600/40">
                  <p className="font-display text-[11px] font-extrabold leading-tight text-white">
                    TOP
                    <br />
                    RANKED
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}
