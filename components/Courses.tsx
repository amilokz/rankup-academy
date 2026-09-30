import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Cog,
  Landmark,
  MessageCircle,
  Mic,
  Stethoscope,
  Zap,
} from "lucide-react";
import Reveal from "./Reveal";
import { courses, waLink, type Course } from "@/data/content";

const icons: Record<Course["icon"], typeof BookOpen> = {
  book: BookOpen,
  stethoscope: Stethoscope,
  cog: Cog,
  landmark: Landmark,
  mic: Mic,
  zap: Zap,
};

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            Programs
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Pick your <span className="text-indigo-600">battlefield</span>
          </h2>
          <p className="mt-4 text-lg text-indigo-950/60">
            Six focused programs. One obsession: your result card.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => {
            const Icon = icons[course.icon];
            return (
              <Reveal key={course.name} delay={(i % 3) * 100}>
                <div
                  className={`relative flex h-full flex-col rounded-3xl border-2 p-7 transition-transform hover:-translate-y-1.5 ${
                    course.popular
                      ? "border-indigo-600 bg-indigo-950 text-white shadow-2xl shadow-indigo-600/25"
                      : "border-indigo-100 bg-white shadow-lg shadow-indigo-600/5 hover:border-indigo-300"
                  }`}
                >
                  {course.popular && (
                    <span className="absolute -top-3.5 left-6 rounded-full bg-lime-400 px-4 py-1 text-xs font-extrabold uppercase tracking-wide text-indigo-950">
                      Most popular
                    </span>
                  )}
                  <span
                    className={`grid h-13 w-13 place-items-center rounded-2xl p-3 ${
                      course.popular ? "bg-lime-400" : "bg-indigo-100"
                    }`}
                  >
                    <Icon
                      className={`h-7 w-7 ${course.popular ? "text-indigo-950" : "text-indigo-600"}`}
                    />
                  </span>
                  <h3 className="mt-5 font-display text-2xl font-extrabold tracking-tight">
                    {course.name}
                  </h3>
                  <p
                    className={`mt-1 text-sm font-medium ${
                      course.popular ? "text-white/60" : "text-indigo-950/50"
                    }`}
                  >
                    {course.tagline}
                  </p>
                  <div className="mt-5 flex items-baseline gap-1.5">
                    <span className="font-display text-4xl font-black text-indigo-600">
                      {course.fee}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        course.popular ? "text-white/50" : "text-indigo-950/40"
                      }`}
                    >
                      {course.feeNote}
                    </span>
                  </div>
                  <p
                    className={`mt-1 text-xs font-bold uppercase tracking-widest ${
                      course.popular ? "text-lime-300" : "text-indigo-500"
                    }`}
                  >
                    {course.duration}
                  </p>
                  <ul className="mt-5 flex flex-col gap-2.5">
                    {course.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2.5 text-sm font-medium">
                        <CheckCircle2
                          className={`mt-0.5 h-4.5 w-4.5 shrink-0 ${
                            course.popular ? "text-lime-400" : "text-indigo-600"
                          }`}
                        />
                        <span className={course.popular ? "text-white/80" : "text-indigo-950/70"}>
                          {h}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={waLink(
                      `Assalam-o-Alaikum! I want to enroll in ${course.name} at RankUp Academy. Please share details.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group mt-7 inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-display text-sm font-bold transition-transform hover:scale-[1.03] ${
                      course.popular
                        ? "bg-lime-400 text-indigo-950"
                        : "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
                    }`}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Enroll via WhatsApp
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
