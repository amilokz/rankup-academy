import {
  Award,
  BadgePercent,
  ClipboardCheck,
  MessageCircle,
  Target,
  Users,
} from "lucide-react";
import Reveal from "./Reveal";

const features = [
  {
    icon: Users,
    title: "Max 25 per batch",
    text: "Small groups mean the teacher knows your name — and exactly which chapter you're weak in.",
  },
  {
    icon: ClipboardCheck,
    title: "Board-pattern tests weekly",
    text: "A full test every Sunday, marked exactly like the board marks it. No surprises in the real exam.",
  },
  {
    icon: Award,
    title: "Ex-board examiners",
    text: "Faculty includes former board examiners who teach you how marking schemes actually work.",
  },
  {
    icon: Target,
    title: "Personal weak-area plan",
    text: "Monthly one-on-one review: your mistakes mapped, your next 30 days planned.",
  },
  {
    icon: MessageCircle,
    title: "Parents on WhatsApp",
    text: "Test scores and attendance land in the parents' WhatsApp the same evening. Full transparency.",
  },
  {
    icon: BadgePercent,
    title: "Merit scholarships",
    text: "Up to 50% fee scholarship for board toppers, plus 15% sibling discount. Talent never pays full.",
  },
];

export default function WhyUs() {
  return (
    <section className="bg-indigo-50/60 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-indigo-600">
                Why RankUp
              </p>
              <h2 className="mt-3 font-display text-4xl font-black tracking-tight text-indigo-950 sm:text-5xl">
                Built different,
                <br />
                on <span className="text-indigo-600">purpose</span>
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-indigo-950/60">
                Anyone can open a tuition center. We built a result machine —
                every process here exists for one reason: marks.
              </p>
              <a
                href="#admission"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-indigo-950 px-7 py-4 font-display text-base font-bold text-white transition-transform hover:scale-105"
              >
                Claim free demo class
              </a>
            </Reveal>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:col-span-8">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 2) * 100}>
              <div className="h-full rounded-3xl border border-indigo-100 bg-white p-7 shadow-lg shadow-indigo-600/5 transition-transform hover:-translate-y-1.5">
                <span className="grid h-13 w-13 place-items-center rounded-2xl bg-indigo-600 p-3 shadow-lg shadow-indigo-600/30">
                  <f.icon className="h-7 w-7 text-white" />
                </span>
                <h3 className="mt-5 font-display text-xl font-extrabold text-indigo-950">
                  {f.title}
                </h3>
                <p className="mt-2.5 leading-relaxed text-indigo-950/60">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
