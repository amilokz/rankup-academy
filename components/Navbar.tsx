"use client";

import { useState } from "react";
import { GraduationCap, Menu, MessageCircle, X } from "lucide-react";
import { waLink } from "@/data/content";

const links = [
  { label: "Courses", href: "#courses" },
  { label: "Results", href: "#results" },
  { label: "Faculty", href: "#faculty" },
  { label: "Schedule", href: "#schedule" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-indigo-100/70 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-indigo-600 shadow-lg shadow-indigo-600/30">
            <GraduationCap className="h-6 w-6 text-white" />
          </span>
          <span className="font-display text-2xl font-extrabold tracking-tight text-indigo-950">
            RankUp<span className="text-lime-500">.</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-indigo-950/70 transition-colors hover:text-indigo-600"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={waLink("Assalam-o-Alaikum! I want admission details for RankUp Academy.")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-indigo-600/30 transition-transform hover:scale-105 sm:inline-flex"
          >
            <MessageCircle className="h-4 w-4" />
            Apply on WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-indigo-100 text-indigo-950 lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-indigo-100 bg-white px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-semibold text-indigo-950/80 hover:bg-indigo-50"
              >
                {l.label}
              </a>
            ))}
            <a
              href={waLink("Assalam-o-Alaikum! I want admission details for RankUp Academy.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-5 py-3 text-sm font-bold text-white"
            >
              <MessageCircle className="h-4 w-4" />
              Apply on WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
