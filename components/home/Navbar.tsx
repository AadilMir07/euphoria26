"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Experience", href: "/" },
    { name: "Venue", href: "/venue" },
    { name: "Sponsors", href: "/sponsors" },
    { name: "Help", href: "/help" },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-[100] px-4 pt-5 sm:px-6 sm:pt-7">
      <nav className="mx-auto flex max-w-[1320px] items-center justify-between rounded-full border border-white/[0.12] bg-black/35 px-5 py-3 shadow-[0_10px_45px_rgba(0,0,0,0.35)] backdrop-blur-2xl sm:px-8 sm:py-4">
        <Link href="/" className="text-xl font-black tracking-[0.3em] text-white transition-opacity duration-300 hover:opacity-75 sm:text-2xl">
          EUPHORIA
        </Link>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link, index) => (
            <Link
              key={link.name}
              href={link.href}
              className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                index === 0 ? "text-white" : "text-zinc-400 hover:text-white"
              }`}
            >
              {link.name}
              {index === 0 && (
                <span className="absolute -bottom-1 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-violet-400 to-fuchsia-400 shadow-[0_0_14px_rgba(168,85,247,0.8)]" />
              )}
            </Link>
          ))}
        </div>

        <Link href="/admin" className="hidden rounded-full border border-white/10 bg-white/[0.04] px-6 py-2.5 text-sm font-medium text-zinc-300 backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white md:block">
          Admin
        </Link>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white backdrop-blur-xl transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="mx-auto mt-3 max-w-[1320px] rounded-3xl border border-white/10 bg-black/75 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-2xl px-5 py-4 text-sm font-medium transition-all duration-300 ${
                  index === 0 ? "bg-violet-500/10 text-violet-300" : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm font-medium text-zinc-300 transition-all duration-300 hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
            >
              Admin
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
