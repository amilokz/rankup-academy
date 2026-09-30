import Image from "next/image";
import { GraduationCap } from "lucide-react";
import Reveal from "./Reveal";
import { faculty } from "@/data/content";

export default function Faculty() {
  return (
    <section id="faculty" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative">
              <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-indigo-600/20">
                <Image
                  src="/img-teacher.webp"
                  alt="RankUp Academy teacher explaining a concept on the board"
                  width={900}
                  height={1000}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 animate-float rounded-2xl bg-lime-400 p-5 shadow-xl sm:-right-6">
                <p className="font-display text-3xl font-black text-indigo-950">120+</p>
                <p className="text-xs font-bold uppercase tracking-wide text-indigo-950/70">
                  Years combined
                  <br />
                  experience
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Faculty
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
                Taught by people who&apos;ve{" "}
                <span className="text-indigo-600">marked the papers</span>
              </h2>
              <p className="mt-4 text-lg text-indigo-950/60">
                Ex-board examiners, PhDs and CSP mentors. When they say
                &ldquo;this will come in the exam&rdquo; — it comes.
              </p>
            </Reveal>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {faculty.map((f, i) => (
                <Reveal key={f.name} delay={i * 80}>
                  <div className="flex items-center gap-4 rounded-2xl border border-indigo-100 bg-indigo-50/50 p-4 transition-transform hover:-translate-y-1">
                    <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-indigo-600 font-display text-base font-extrabold text-white">
                      {f.initials}
                    </span>
                    <div>
                      <p className="font-display font-extrabold text-indigo-950">{f.name}</p>
                      <p className="text-sm font-bold text-indigo-600">{f.subject}</p>
                      <p className="text-xs font-medium text-indigo-950/50">{f.credential}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={200}>
              <p className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-950/50">
                <GraduationCap className="h-5 w-5 text-indigo-600" />
                Plus 18 more full-time teachers across both campuses.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
