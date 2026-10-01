import { Clock, GraduationCap, MapPin, MessageCircle, Phone } from "lucide-react";
import { waLink } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 pb-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-lime-400">
                <GraduationCap className="h-6 w-6 text-indigo-950" />
              </span>
              <span className="font-display text-2xl font-extrabold tracking-tight">
                RankUp<span className="text-lime-400">.</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm leading-relaxed text-white/55">
              Rawalpindi&apos;s results-obsessed tuition &amp; coaching center.
              Matric, FSc, MDCAT, CSS/PMS and Spoken English — taught by people
              who&apos;ve marked the papers.
            </p>
            <a
              href={waLink("Assalam-o-Alaikum! I want admission details for RankUp Academy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 font-display text-sm font-bold text-indigo-950 transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-lime-400">
              Visit us
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                Main Campus: Satellite Town, Rawalpindi
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-lime-400" />
                Branch: DHA Phase 2, Islamabad
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="h-4 w-4 shrink-0 text-lime-400" />
                Mon – Sat · 2:00 PM – 9:00 PM
              </li>
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-bold uppercase tracking-widest text-lime-400">
              Contact
            </p>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-lime-400" />
                0300-1234567
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="h-4 w-4 shrink-0 text-lime-400" />
                WhatsApp: 0300-1234567
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Matric", "FSc", "CSS", "MDCAT"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/15 px-3 py-1 text-xs font-bold text-white/60"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 py-6 text-center text-xs font-medium text-white/40">
          © 2026 RankUp Academy — Demo website crafted for illustration. All
          names, marks and figures are fictional. · Designed &amp; built by <a href="https://akclnt.com" className="text-white/60 underline underline-offset-4">AKCLNT</a>
        </div>
      </div>
    </footer>
  );
}
