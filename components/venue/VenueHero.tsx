"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";
import { ArrowDown, CalendarDays, MapPin } from "lucide-react";

export default function VenueHero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden bg-[#050505]">

      {/* Background image */}
      <Image
        src="/images/venue-hall.png"
        alt="Mad Over Grills banquet hall"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* Cinematic overlay — slightly brighter than before */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Stronger cinematic bottom fade */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-black/15 to-black/35" />

      {/* Subtle violet atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      {/* Content */}
      <div className="relative z-10 flex min-h-[92svh] items-end">

        <div className="mx-auto w-full max-w-7xl px-6 pb-14 pt-40 md:px-8 md:pb-20 md:pt-44">

          <FadeIn>

            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3 md:mb-7">
              <span className="h-px w-10 bg-violet-400" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                The Venue
              </p>
            </div>

            {/* Main heading */}
            <h1 className="max-w-5xl text-[3.8rem] font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[8rem]">
              This Is Where
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                The Night Begins.
              </span>
            </h1>

            {/* Venue information */}
            <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7 md:mt-9">

              <div>
                <p className="text-xl font-bold text-white md:text-2xl">
                  Mad Over Grills
                </p>

                <p className="mt-1 text-sm text-zinc-300/80">
                  Restaurant &amp; Banquet Hall
                </p>
              </div>

              <div className="hidden h-10 w-px bg-white/20 sm:block" />

              {/* Date */}
              <div className="flex items-center gap-3 text-sm text-zinc-200">
                <CalendarDays className="h-4 w-4 text-violet-300" />
                <span>05 September 2026</span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-sm text-zinc-200">
                <MapPin className="h-4 w-4 text-violet-300" />
                <span>Vadodara, Gujarat</span>
              </div>

            </div>

            {/* Bottom actions */}
            <div className="mt-9 flex items-center gap-6 md:mt-10">

              <a
                href="https://maps.google.com/?q=Mad+Over+Grills+Gotri+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition duration-300 hover:scale-105 hover:bg-violet-100"
              >
                Explore Location
              </a>

              <div className="hidden items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-400 sm:flex">
                <ArrowDown className="h-4 w-4 animate-bounce text-violet-300" />
                Scroll to explore
              </div>

            </div>

          </FadeIn>

        </div>
      </div>

      {/* Cinematic transition into the next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/75 to-transparent" />

      <div className="pointer-events-none absolute bottom-[-70px] left-1/2 z-20 h-44 w-[55vw] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[100px]" />

      {/* Edge label */}
      <div className="absolute bottom-7 right-6 z-30 hidden text-right md:block">
        <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
          EUPHORIA '26
        </p>

        <p className="mt-1 text-[9px] uppercase tracking-[0.3em] text-white/25">
          01 / VENUE
        </p>
      </div>

    </section>
  );
}
