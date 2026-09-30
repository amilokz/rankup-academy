"use client";

import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";
import Reveal from "./Reveal";
import { courses, waLink } from "@/data/content";

const classLevels = [
  "9th Class",
  "10th Class",
  "1st Year (FSc)",
  "2nd Year (FSc)",
  "CSS / PMS Aspirant",
  "Spoken English / IELTS",
  "MDCAT Crash",
  "Other",
];

export default function Admission() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState(courses[1].name);
  const [level, setLevel] = useState(classLevels[0]);

  const message = `Assalam-o-Alaikum! I want admission at RankUp Academy.\n\nName: ${name || "-"}\nPhone: ${phone || "-"}\nCourse: ${course}\nClass: ${level}\n\nPlease share the admission process and fee details.`;

  const inputClass =
    "w-full rounded-2xl border-2 border-indigo-100 bg-white px-5 py-3.5 text-sm font-semibold text-indigo-950 placeholder:text-indigo-950/30 outline-none transition-colors focus:border-indigo-600";

  return (
    <section id="admission" className="relative overflow-hidden bg-indigo-950 py-20 sm:py-28">
      <div
        aria-hidden
        className="text-stroke-lime pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[16vw] font-black leading-none lg:text-[11rem]"
      >
        ADMISSION
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-lime-400">
            Admissions open · Session 2026
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-white sm:text-5xl">
            Your seat is <span className="text-lime-400">one message</span> away
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-white/60">
            Fill the form and hit send — your admission request lands directly
            in our WhatsApp. Our counselor replies within 2 hours with your
            free demo class slot.
          </p>
          <ul className="mt-8 flex flex-col gap-4">
            {[
              "2 FREE demo classes — no advance, no commitment",
              "No admission fee for the first 50 students",
              "Merit scholarships up to 50% for board toppers",
            ].map((point) => (
              <li key={point} className="flex items-start gap-3 text-white/80">
                <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-lime-400 font-display text-xs font-black text-indigo-950">
                  ✓
                </span>
                <span className="font-medium">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={150}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(waLink(message), "_blank", "noopener,noreferrer");
            }}
            className="rounded-[2rem] bg-white p-7 shadow-2xl sm:p-9"
          >
            <h3 className="font-display text-2xl font-extrabold text-indigo-950">
              Admission form
            </h3>
            <p className="mt-1 text-sm font-medium text-indigo-950/50">
              Takes 30 seconds. We reply within 2 hours.
            </p>

            <div className="mt-6 flex flex-col gap-4">
              <input
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Student name"
                className={inputClass}
              />
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone / WhatsApp number"
                inputMode="tel"
                className={inputClass}
              />
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-950/50">
                    Course
                  </span>
                  <select
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    className={inputClass}
                  >
                    {courses.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-bold uppercase tracking-wide text-indigo-950/50">
                    Class / level
                  </span>
                  <select
                    value={level}
                    onChange={(e) => setLevel(e.target.value)}
                    className={inputClass}
                  >
                    {classLevels.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2.5 rounded-full bg-indigo-600 px-7 py-4 font-display text-base font-bold text-white shadow-xl shadow-indigo-600/30 transition-transform hover:scale-[1.02]"
              >
                <Send className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                Send on WhatsApp
              </button>
              <p className="flex items-center justify-center gap-2 text-center text-xs font-semibold text-indigo-950/40">
                <MessageCircle className="h-3.5 w-3.5" />
                Opens WhatsApp with your details pre-filled
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
