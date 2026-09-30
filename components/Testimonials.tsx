import { Quote, Star } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/data/content";

export default function Testimonials() {
  return (
    <section className="bg-indigo-50/60 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
            Reviews
          </p>
          <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
            Parents trust us. <span className="text-indigo-600">Results prove us.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <figure className="relative flex h-full flex-col rounded-3xl border border-indigo-100 bg-white p-8 shadow-lg shadow-indigo-600/5">
                <Quote className="h-8 w-8 text-lime-500" />
                <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-indigo-950/75">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-lime-400 text-lime-400" />
                  ))}
                </div>
                <figcaption className="mt-3">
                  <p className="font-display font-extrabold text-indigo-950">{t.name}</p>
                  <p className="text-sm font-medium text-indigo-950/50">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
