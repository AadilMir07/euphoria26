"use client";

import FadeIn from "@/components/animations/FadeIn";
import Image from "next/image";

const photos = [
  {
    src: "/images/genz/party-selfie.png",
    className:
      "w-40 sm:w-48 md:w-60 rotate-[-8deg] md:-translate-y-6",
  },
  {
    src: "/images/genz/rave-girl.png",
    className:
      "w-36 sm:w-44 md:w-52 rotate-[7deg] md:translate-y-10",
  },
  {
    src: "/images/genz/freshers-board.png",
    className:
      "w-48 sm:w-56 md:w-72 rotate-[-4deg]",
  },
  {
    src: "/images/genz/dancing-girl.png",
    className:
      "w-36 sm:w-44 md:w-52 rotate-[6deg] md:-translate-y-10",
  },
  {
    src: "/images/genz/young-free.png",
    className:
      "w-40 sm:w-48 md:w-60 rotate-[-6deg] md:translate-y-8",
  },
];

export default function CollegeEra() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* =========================================================
            COLLEGE ERA INTRO
        ========================================================= */}

        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
              Gen Z Vibes
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Your College Era
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                Starts Here.
              </span>
            </h2>

            <div className="mt-8 space-y-1 text-lg text-zinc-400">
              <p>Fresh starts.</p>
              <p>Real friendships.</p>
              <p>One unforgettable night.</p>
            </div>
          </div>
        </FadeIn>


        {/* =========================================================
            MOBILE
            Reuse the hero-style 05.09.26 collage.

            The old Gen-Z photo collage is completely hidden on
            mobile so users don't have to scroll through another
            huge photo section.
        ========================================================= */}

        <div className="mt-14 md:hidden">

          <div className="relative mx-auto h-[520px] w-full max-w-[430px]">

            {/* Main DJ image */}
            <div
              className="
                absolute
                left-[4%]
                top-[10%]
                z-10
                h-[300px]
                w-[62%]
                rotate-[-7deg]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                shadow-2xl
              "
            >
              <Image
                src="/images/experience/live-dj.png"
                alt=""
                fill
                sizes="260px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>


            {/* Girls / friends image */}
            <div
              className="
                absolute
                right-[4%]
                top-[2%]
                z-20
                h-[230px]
                w-[45%]
                rotate-[7deg]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                shadow-2xl
              "
            >
              <Image
                src="/images/strip/girls-group.png"
                alt=""
                fill
                sizes="190px"
                className="object-cover"
              />
            </div>


            {/* Main party image */}
            <div
              className="
                absolute
                left-[22%]
                top-[39%]
                z-30
                h-[270px]
                w-[55%]
                rotate-[3deg]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                shadow-2xl
              "
            >
              <Image
                src="/images/experience/celebrate.png"
                alt=""
                fill
                sizes="235px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>


            {/* Memory / polaroid image */}
            <div
              className="
                absolute
                right-[3%]
                top-[43%]
                z-20
                h-[230px]
                w-[39%]
                rotate-[-5deg]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                shadow-2xl
              "
            >
              <Image
                src="/images/experience/memories.png"
                alt=""
                fill
                sizes="165px"
                className="object-cover"
              />
            </div>


            {/* Live badge */}
            <div
              className="
                absolute
                right-[2%]
                top-[39%]
                z-40
                flex
                items-center
                gap-2
                rounded-full
                border
                border-white/10
                bg-[#191326]
                px-4
                py-2
                text-xs
                font-semibold
                text-zinc-300
                shadow-xl
              "
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              LIVE
            </div>


            {/* Save the date */}
            <div
              className="
                absolute
                bottom-[2%]
                left-[2%]
                z-50
                rounded-3xl
                border
                border-violet-500/20
                bg-[#0d0717]/95
                px-6
                py-5
                shadow-[0_20px_60px_rgba(0,0,0,.4)]
                backdrop-blur-md
              "
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                Save The Date
              </p>

              <p className="mt-2 text-2xl font-black text-white">
                05.09.26
              </p>
            </div>

          </div>


          {/* One night card */}
          <div className="mx-auto mt-3 w-fit rounded-3xl border border-white/10 bg-[#0d0717] px-8 py-5 text-center shadow-xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-violet-300">
              One Night
            </p>

            <p className="mt-2 text-lg font-bold text-white">
              Endless memories.
            </p>
          </div>

        </div>


        {/* =========================================================
            DESKTOP / TABLET
            Keep the original College Era photo collage.
        ========================================================= */}

        <div className="mt-14 hidden flex-wrap items-center justify-center gap-4 md:flex md:gap-8">

          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`
                group
                relative
                aspect-[4/5]
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/5
                shadow-2xl
                transition-[transform,border-color,box-shadow]
                duration-700
                ease-out
                hover:z-30
                hover:-translate-y-5
                hover:rotate-0
                hover:scale-105
                hover:border-violet-400/50
                hover:shadow-[0_25px_80px_rgba(168,85,247,.35)]
                ${photo.className}
              `}
              style={{
                marginTop: index % 2 === 0 ? "0px" : "35px",
              }}
            >
              <Image
                src={photo.src}
                alt=""
                fill
                sizes="(max-width:768px) 45vw, 260px"
                className="
                  object-cover
                  transition-transform
                  duration-700
                  ease-out
                  group-hover:scale-110
                "
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-30" />
            </div>
          ))}

        </div>


        {/* =========================================================
            BOTTOM STORY SECTION
        ========================================================= */}

        <FadeIn delay={0.15}>
          <div className="mx-auto mt-14 max-w-4xl text-center">

            <div className="mx-auto mb-8 h-px w-40 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
              Not just a party.
            </p>

            <h3 className="text-4xl font-black leading-tight md:text-6xl">
              The stories you'll tell
              <br />

              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                all semester.
              </span>
            </h3>

            <div className="mt-8 space-y-1 text-base leading-7 text-zinc-500 md:text-lg">
              <p>Come for the music.</p>
              <p>Stay for the people.</p>
              <p>Leave with memories.</p>
            </div>


            {/* Stats */}
            <div className="mx-auto mt-12 grid max-w-3xl grid-cols-3 border-y border-white/[0.08]">

              <div className="py-8">
                <p className="text-3xl font-black">
                  01
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Night
                </p>
              </div>


              <div className="border-x border-white/[0.08] py-8">
                <p className="text-3xl font-black text-violet-300">
                  ∞
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Memories
                </p>
              </div>


              <div className="py-8">
                <p className="text-3xl font-black">
                  YOU
                </p>

                <p className="mt-2 text-[10px] uppercase tracking-[0.25em] text-zinc-600">
                  Belong Here
                </p>
              </div>

            </div>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}