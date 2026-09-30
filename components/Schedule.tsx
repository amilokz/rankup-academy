import { CalendarDays, Clock } from "lucide-react";
import Reveal from "./Reveal";
import { schedule } from "@/data/content";

export default function Schedule() {
  return (
    <section id="schedule" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            Timings
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Class <span className="text-indigo-600">schedule</span>
          </h2>
          <p className="mt-4 text-lg text-indigo-950/60">
            Fixed slots, zero overlap with school hours. Pick yours.
          </p>
        </Reveal>

        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-indigo-100 shadow-xl shadow-indigo-600/10">
          <div className="hidden grid-cols-3 gap-4 bg-indigo-950 px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-white sm:grid">
            <span>Program</span>
            <span>Days</span>
            <span>Time</span>
          </div>
          {schedule.map((row, i) => (
            <Reveal key={row.program} delay={i * 60}>
              <div
                className={`grid gap-2 px-8 py-5 sm:grid-cols-3 sm:gap-4 sm:py-6 ${
                  i % 2 === 0 ? "bg-indigo-50/60" : "bg-white"
                } ${i !== schedule.length - 1 ? "border-b border-indigo-100" : ""}`}
              >
                <p className="flex items-center gap-2.5 font-display text-lg font-extrabold text-indigo-950">
                  <CalendarDays className="h-5 w-5 shrink-0 text-indigo-600 sm:hidden" />
                  {row.program}
                </p>
                <p className="text-sm font-semibold text-indigo-950/60 sm:text-base">
                  {row.days}
                </p>
                <p className="flex items-center gap-2 text-sm font-bold text-indigo-600 sm:text-base">
                  <Clock className="h-4.5 w-4.5 shrink-0" />
                  {row.time}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
