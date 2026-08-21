"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import ScaleIn from "@/components/animations/ScaleIn";

const images = [
  {
    src: "/images/venue-hall.png",
    number: "01",
    eyebrow: "THE MAIN HALL",
    title: "Where The Night Comes Alive.",
    meta: "The heart of EUPHORIA.",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/venue-entrance.png",
    number: "02",
    eyebrow: "THE ENTRANCE",
    title: "Your Night Starts Here.",
    meta: "Make an entrance.",
    span: "",
  },
  {
    src: "/images/venue-dining.png",
    number: "03",
    eyebrow: "THE DINING",
    title: "Come Hungry.",
    meta: "Eat. Talk. Repeat.",
    span: "",
  },
  {
    src: "/images/venue-outdoor.png",
    number: "04",
    eyebrow: "THE OUTDOORS",
    title: "Space To Make Memories.",
    meta: "Take the night outside.",
    span: "md:col-span-3",
  },
];

export default function VenueGallery() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pb-20 pt-16 sm:pb-24 sm:pt-20 md:pb-28 md:pt-24">

      {/* =====================================================
          AMBIENT ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[620px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/[0.035] blur-[180px]" />

      <div className="pointer-events-none absolute -right-40 top-[45%] h-[400px] w-[400px] rounded-full bg-fuchsia-500/[0.025] blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div className="mb-14 grid gap-10 md:mb-16 md:grid-cols-[0.95fr_1.05fr] md:items-end">

          <div>

            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-violet-400" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                The Venue
              </span>
            </div>

            <h2 className="max-w-xl text-6xl font-black leading-[0.86] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl">
              A Look
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                Inside.
              </span>
            </h2>

          </div>

          <div className="md:justify-self-end md:pb-1">

            <p className="max-w-lg text-base leading-8 text-zinc-500 md:text-lg">
              Get a glimpse of the spaces, atmosphere and little details that
              will make EUPHORIA '26 one to remember.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/15" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
                Scroll through the venue
              </span>
            </div>

          </div>

        </div>


        {/* =====================================================
            CINEMATIC GALLERY
        ===================================================== */}

        <div className="grid auto-rows-[250px] gap-4 sm:gap-5 md:auto-rows-[285px] md:grid-cols-3 md:gap-5">

          {images.map((image, index) => (
            <ScaleIn
              key={image.number}
              className={image.span}
            >
              <article className="group relative h-full overflow-hidden rounded-[1.75rem] border border-white/[0.11] bg-[#0a0a0a] shadow-2xl shadow-black/20">

                {/* Image */}
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes={
                    image.span
                      ? "(max-width: 768px) 100vw, 66vw"
                      : "(max-width: 768px) 100vw, 34vw"
                  }
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
                />

                {/* Cinematic image treatment */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/90" />

                <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

                {/* Hover colour wash */}
                <div className="absolute inset-0 bg-violet-500/0 transition-all duration-700 group-hover:bg-violet-500/[0.055]" />

                {/* Top information */}
                <div className="absolute left-6 right-6 top-6 flex items-center justify-between sm:left-7 sm:right-7 sm:top-7">

                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-semibold tracking-[0.35em] text-white/85">
                      {image.number}
                    </span>

                    <span className="h-px w-7 bg-white/30" />
                  </div>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/20 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-0 group-hover:scale-110 group-hover:border-violet-300/50 group-hover:bg-violet-500/75">
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>

                </div>


                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-7">

                  <div className="translate-y-1 transition-transform duration-500 group-hover:-translate-y-1">

                    <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.32em] text-violet-300">
                      {image.eyebrow}
                    </p>

                    <h3 className="max-w-3xl text-2xl font-bold leading-[1.05] tracking-tight text-white sm:text-3xl md:text-4xl">
                      {image.title}
                    </h3>

                    <p className="mt-3 max-h-0 overflow-hidden text-xs uppercase tracking-[0.2em] text-white/50 opacity-0 transition-all duration-500 group-hover:max-h-8 group-hover:opacity-100">
                      {image.meta}
                    </p>

                  </div>

                </div>


                {/* Corner index for desktop */}
                <div className="pointer-events-none absolute bottom-7 right-7 hidden text-[9px] tracking-[0.3em] text-white/25 md:block">
                  {String(index + 1).padStart(2, "0")} / 04
                </div>

              </article>
            </ScaleIn>
          ))}

        </div>


        {/* =====================================================
            GALLERY FOOTER
        ===================================================== */}

        <div className="mt-7 flex items-center justify-between border-t border-white/[0.08] pt-5">

          <div className="flex items-center gap-4">
            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
              Mad Over Grills
            </span>

            <span className="h-px w-7 bg-white/10" />

            <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
              Vadodara
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="hidden text-[9px] uppercase tracking-[0.35em] text-zinc-700 sm:block">
              The Venue
            </span>

            <span className="text-[9px] tracking-[0.3em] text-violet-300/70">
              04 / 04
            </span>
          </div>

        </div>


        {/* =====================================================
            TRANSITION INTO LOCATION
        ===================================================== */}

        <div className="relative mt-20 overflow-hidden border-t border-white/[0.07] pt-20 text-center md:mt-24 md:pt-24">

          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.05] blur-[120px]" />

          <div className="relative">

            <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-zinc-600">
              One Night. One Place.
            </p>

            <h3 className="mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
              This is where the{" "}
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                memories happen.
              </span>
            </h3>

            <div className="mx-auto mt-8 h-px w-16 bg-gradient-to-r from-transparent via-violet-400/70 to-transparent" />

          </div>

        </div>

      </div>
    </section>
  );
}
