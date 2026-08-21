"use client";

import Image from "next/image";

const topRow = [
  "crowd-party",
  "party-selfie",
  "girls-group",
  "dj-night",
  "freshers-board",
  "hallway",
  "young-free",
  "dance-floor",
];

const bottomRow = [
  "friends",
  "group-selfie",
  "night-walk",
  "neon-sign",
  "party-board",
  "rave-girl",
  "dancing-girl",
  "crowd-party",
];

const sizes = [
  "md:w-60 md:h-80",
  "md:w-72 md:h-60",
  "md:w-64 md:h-96",
  "md:w-80 md:h-56",
  "md:w-60 md:h-80",
  "md:w-64 md:h-64",
];

const rotations = [
  "-rotate-3",
  "rotate-2",
  "-rotate-2",
  "rotate-3",
  "-rotate-1",
  "rotate-1",
];

function Row({
  images,
  reverse = false,
}: {
  images: string[];
  reverse?: boolean;
}) {
  const gallery = [...images, ...images];

  return (
    <div
      className={`flex w-max gap-5 sm:gap-6 ${
        reverse ? "animate-marquee-reverse" : "animate-marquee"
      }`}
    >
      {gallery.map((image, index) => (
        <div
          key={`${image}-${index}`}
          className={`
            group
            relative
            h-60
            w-44
            sm:h-72
            sm:w-52
            md:h-64
            md:w-48
            ${sizes[index % sizes.length]}
            shrink-0
            overflow-hidden
            rounded-[24px]
            border
            border-white/[0.10]
            bg-[#11091a]
            shadow-[0_25px_70px_rgba(0,0,0,0.45)]
            transition-all
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]
            hover:z-30
            hover:-translate-y-3
            hover:scale-[1.035]
            hover:rotate-0
            hover:border-violet-400/40
            hover:shadow-[0_35px_90px_rgba(168,85,247,0.22)]
            ${rotations[index % rotations.length]}
          `}
          style={{
            marginTop:
              index % 5 === 0
                ? "24px"
                : index % 3 === 0
                  ? "12px"
                  : "0px",
          }}
        >
          <Image
            src={`/images/strip/${image}.png`}
            alt=""
            fill
            sizes="(max-width:768px) 180px, 320px"
            className="
              object-cover
              transition-transform
              duration-1000
              ease-out
              group-hover:scale-110
            "
          />

          {/* Cinematic overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/55
              via-black/5
              to-white/[0.04]
              opacity-80
              transition-opacity
              duration-700
              group-hover:opacity-40
            "
          />

          {/* Purple light */}
          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              h-40
              w-40
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/0
              blur-3xl
              transition-all
              duration-700
              group-hover:bg-violet-500/20
            "
          />

          {/* Film-frame detail */}
          <div className="absolute inset-x-4 bottom-4 flex items-center justify-between opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <span className="text-[8px] font-semibold uppercase tracking-[0.28em] text-white/70">
              EUPHORIA '26
            </span>

            <span className="text-xs text-violet-300">↗</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function PhotoStrip() {
  return (
    <section className="relative overflow-hidden bg-[#09040f] py-20 md:py-24">
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[20%] h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-violet-600/[0.10] blur-[180px]" />

        <div className="absolute left-[-250px] top-[50%] h-[450px] w-[450px] rounded-full bg-fuchsia-600/[0.06] blur-[160px]" />

        <div className="absolute right-[-250px] top-[50%] h-[450px] w-[450px] rounded-full bg-violet-700/[0.06] blur-[160px]" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.16) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.16) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =========================================================
          HEADER
      ========================================================= */}

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <div className="flex items-center justify-center gap-4">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500/60" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-violet-300">
            LAST YEAR&apos;S VIBES
          </span>

          <span className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500/60" />
        </div>

        <div className="mt-5 flex items-center justify-center gap-3 text-[9px] uppercase tracking-[0.3em] text-zinc-600">
          <span>EUPHORIA '26</span>
          <span className="text-violet-400">✦</span>
          <span>05.09.26</span>
        </div>

        <h2 className="mt-7 text-[clamp(3rem,7vw,6rem)] font-black leading-[0.88] tracking-[-0.05em]">
          A Glimpse Into
          <br />

          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
            Euphoria.
          </span>
        </h2>

        <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 sm:text-lg sm:leading-8">
          Every smile.
          <span className="text-zinc-300"> Every dance.</span>{" "}
          Every friendship.
          <br className="hidden sm:block" />
          It all starts with one unforgettable night.
        </p>
      </div>

      {/* =========================================================
          PHOTO FILM STRIPS
      ========================================================= */}

      <div className="relative mt-14 md:mt-16">
        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-[#09040f] via-[#09040f]/80 to-transparent sm:w-40 md:w-64" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-[#09040f] via-[#09040f]/80 to-transparent sm:w-40 md:w-64" />

        {/* Top row */}
        <div className="overflow-hidden">
          <Row images={topRow} />
        </div>

        {/* Middle spacing */}
        <div className="relative my-5 flex items-center justify-center md:my-8">
          <div className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

          <div className="relative z-10 rounded-full border border-white/[0.08] bg-[#09040f] px-5 py-2 text-[8px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
            THE NIGHT WE REMEMBER
          </div>
        </div>

        {/* Bottom row */}
        <div className="overflow-hidden">
          <Row images={bottomRow} reverse />
        </div>
      </div>

      {/* =========================================================
          BOTTOM STATEMENT
      ========================================================= */}

      <div className="relative mx-auto mt-16 max-w-4xl px-6 text-center md:mt-20">
        <div className="mx-auto h-px w-32 bg-gradient-to-r from-transparent via-violet-500/70 to-transparent" />

        <p className="mt-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
          More than a night
        </p>

        <h3 className="mt-5 text-3xl font-black leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
          Some moments are meant
          <br />
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
            to be remembered.
          </span>
        </h3>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-6 text-zinc-600 sm:text-base">
          And this is only the beginning.
        </p>
      </div>
    </section>
  );
}