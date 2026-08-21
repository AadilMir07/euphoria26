"use client";

import FadeIn from "@/components/animations/FadeIn";

const highlights = [
  {
    number: "01",
    label: "THE SPACE",
    title: "Grand Banquet Hall",
    description: "A spacious setting built around the night.",
  },
  {
    number: "02",
    label: "THE ENERGY",
    title: "Live DJ & Music",
    description: "Lights, sound and a dance floor made to move.",
  },
  {
    number: "03",
    label: "THE MOMENTS",
    title: "Dining & Memories",
    description: "Good food, good people, one unforgettable evening.",
  },
];

export default function VenueHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#050505]">

      {/* =====================================================
          SUBTLE ATMOSPHERE
      ===================================================== */}

      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.025] blur-[160px]" />


      {/* =====================================================
          SMALL TRANSITION FROM EXPERIENCE
      ===================================================== */}

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="h-8 sm:h-10 md:h-12" />


        {/* ===================================================
            SECTION INTRO
        =================================================== */}

        <FadeIn>

          <div className="border-t border-white/[0.07] pt-12 sm:pt-14 md:pt-16">

            <div className="flex items-end justify-between gap-8">

              <div>

                {/* Eyebrow */}

                <div className="mb-5 flex items-center gap-4">

                  <span className="h-px w-12 bg-violet-400" />

                  <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                    The Night At A Glance
                  </p>

                </div>


                {/* Heading */}

                <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">

                  Everything you need.
                  <span className="text-zinc-600">
                    {" "}
                    Nothing you don't.
                  </span>

                </h2>

              </div>


              {/* Event label */}

              <div className="hidden pb-1 text-right md:block">

                <p className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
                  EUPHORIA '26
                </p>

              </div>

            </div>

          </div>

        </FadeIn>


        {/* ===================================================
            HIGHLIGHTS
        =================================================== */}

        <FadeIn delay={0.1}>

          <div className="mt-10 grid border-y border-white/[0.07] sm:grid-cols-3">

            {highlights.map((item, index) => (

              <div
                key={item.number}
                className={[
                  "group relative min-h-[190px] p-7 transition duration-500 hover:bg-white/[0.018] sm:p-8 md:min-h-[205px] md:p-9",
                  index !== 0 ? "border-t border-white/[0.07] sm:border-l sm:border-t-0" : "",
                ].join(" ")}
              >

                {/* Top row */}

                <div className="flex items-center justify-between">

                  <span className="text-[9px] tracking-[0.35em] text-violet-300/80">
                    {item.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">
                    {item.label}
                  </span>

                </div>


                {/* Content */}

                <div className="mt-9">

                  <h3 className="text-xl font-bold tracking-tight text-white md:text-2xl">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-600 transition duration-500 group-hover:text-zinc-500">
                    {item.description}
                  </p>

                </div>


                {/* Bottom accent */}

                <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-violet-400/50 transition duration-500 group-hover:scale-x-100" />

              </div>

            ))}

          </div>

        </FadeIn>


        {/* ===================================================
            SMALL FOOTER LINE
        =================================================== */}

        <FadeIn delay={0.15}>

          <div className="flex items-center justify-between py-6">

            <div className="flex items-center gap-4">

              <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-700">
                Mad Over Grills
              </span>

              <span className="h-px w-7 bg-white/[0.08]" />

              <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-700">
                Vadodara
              </span>

            </div>


            <span className="text-[9px] tracking-[0.3em] text-zinc-700">
              EUPHORIA '26
            </span>

          </div>

        </FadeIn>


        {/* ===================================================
            CLEAN TRANSITION INTO GALLERY
        =================================================== */}

        <div className="h-6 sm:h-8 md:h-10" />

      </div>

    </section>
  );
}