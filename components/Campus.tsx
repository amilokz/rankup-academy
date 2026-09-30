import Image from "next/image";
import { Clock, MapPin } from "lucide-react";
import Reveal from "./Reveal";

const campuses = [
  {
    name: "Main Campus",
    area: "Satellite Town, Rawalpindi",
    timing: "Mon – Sat · 2:00 PM – 9:00 PM",
  },
  {
    name: "Branch Campus",
    area: "DHA Phase 2, Islamabad",
    timing: "Mon – Sat · 2:00 PM – 9:00 PM",
  },
];

export default function Campus() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            Campus life
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Built for <span className="text-indigo-600">focus</span>
          </h2>
          <p className="mt-4 text-lg text-indigo-950/60">
            Air-conditioned classrooms, a silent study hall, and a library that
            stays open till 9 PM.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl shadow-indigo-600/15">
              <Image
                src="/img-classroom.webp"
                alt="Classroom session at RankUp Academy"
                width={1000}
                height={750}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-display text-2xl font-extrabold text-white">
                Smart classrooms
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="group relative overflow-hidden rounded-[2rem] shadow-xl shadow-indigo-600/15">
              <Image
                src="/img-library.webp"
                alt="Study hall and library at RankUp Academy"
                width={1000}
                height={750}
                className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/80 via-transparent to-transparent" />
              <p className="absolute bottom-6 left-6 font-display text-2xl font-extrabold text-white">
                Silent study hall · till 9 PM
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {campuses.map((c, i) => (
            <Reveal key={c.name} delay={i * 100}>
              <div className="flex items-start gap-4 rounded-3xl border-2 border-indigo-100 bg-indigo-50/50 p-6">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-600">
                  <MapPin className="h-6 w-6 text-white" />
                </span>
                <div>
                  <p className="font-display text-xl font-extrabold text-indigo-950">
                    {c.name}
                  </p>
                  <p className="mt-0.5 font-medium text-indigo-950/60">{c.area}</p>
                  <p className="mt-2 flex items-center gap-2 text-sm font-bold text-indigo-600">
                    <Clock className="h-4 w-4" />
                    {c.timing}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
