"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] flex items-center justify-between bg-gradient-to-b from-[rgba(11,14,20,0.9)] to-transparent px-[6vw] py-[18px] backdrop-blur-[2px] md:py-[22px]">
      <div className="flex items-center gap-[10px]">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-blue font-display text-[13px] text-blue">
          AD
        </div>
        <div className="font-mono text-[13px] tracking-[0.08em] text-ink">
          ANAS DAMINE
        </div>
      </div>

      {/* Desktop links */}
      <div className="hidden gap-9 font-mono text-[12px] uppercase tracking-[0.1em] text-muted min-[761px]:flex">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="group relative transition-colors duration-200 hover:text-ink"
          >
            {link.label}
            <span className="absolute -bottom-1.5 left-0 h-px w-0 bg-blue transition-[width] duration-250 group-hover:w-full" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="inline-block rounded-[2px] bg-blue px-[18px] py-[9px] font-mono text-[11px] font-bold uppercase tracking-[0.08em] text-[#050710] sm:text-[12px]"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] rounded-[2px] border border-line min-[761px]:hidden"
        >
          <span
            className={`h-px w-4 bg-ink transition-transform duration-200 ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-ink transition-opacity duration-200 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-px w-4 bg-ink transition-transform duration-200 ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <div
        className={`absolute inset-x-0 top-full origin-top border-b border-line bg-[rgba(11,14,20,0.97)] backdrop-blur-md transition-all duration-200 min-[761px]:hidden ${
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col px-[6vw] py-2">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line py-4 font-mono text-[13px] uppercase tracking-[0.1em] text-muted transition-colors hover:text-ink last:border-b-0"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
