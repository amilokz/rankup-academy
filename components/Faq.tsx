"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal";
import { faqs } from "@/data/content";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Questions? <span className="text-indigo-600">Answered.</span>
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 60}>
                <div
                  className={`overflow-hidden rounded-2xl border-2 transition-colors ${
                    isOpen ? "border-indigo-600 bg-indigo-50/60" : "border-indigo-100 bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg font-extrabold text-indigo-950">
                      {f.q}
                    </span>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full transition-all ${
                        isOpen ? "rotate-180 bg-indigo-600 text-white" : "bg-indigo-100 text-indigo-600"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 leading-relaxed text-indigo-950/65">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
