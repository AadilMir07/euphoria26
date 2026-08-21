"use client";

import { motion } from "framer-motion";

export default function CinematicDivider() {
  return (
    <section className="relative overflow-hidden bg-[#09040f] py-16 md:py-20">
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/[0.09] blur-[180px]" />

        <div className="absolute left-[-250px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-fuchsia-600/[0.05] blur-[160px]" />

        <div className="absolute right-[-250px] top-1/2 h-[400px] w-[400px] -translate-y-1/2 rounded-full bg-violet-700/[0.05] blur-[160px]" />

        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />
      </div>

      {/* =========================================================
          TOP DIVIDER
      ========================================================= */}

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.10]" />

          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-zinc-600">
            EUPHORIA '26
          </span>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.10]" />
        </div>
      </div>

      {/* =========================================================
          MAIN MOMENT
      ========================================================= */}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative mx-auto mt-10 max-w-6xl px-6 text-center md:mt-12"
      >
        {/* POV */}
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-violet-500/40" />

          <p className="text-[10px] font-semibold uppercase tracking-[0.5em] text-violet-400">
            POV
          </p>

          <span className="h-px w-8 bg-violet-500/40" />
        </div>

        {/* Date */}
        <p className="mt-6 text-[10px] font-medium uppercase tracking-[0.35em] text-zinc-600">
          05 SEPTEMBER 2026 • 7 PM ONWARDS
        </p>

        {/* Main heading */}
        <h2
          className="
            mt-8
            text-[clamp(3.2rem,7.5vw,7.5rem)]
            font-black
            leading-[0.86]
            tracking-[-0.06em]
          "
        >
          5 SEPTEMBER.
          <br />

          <span
            className="
              bg-gradient-to-r
              from-violet-300
              via-fuchsia-300
              to-violet-500
              bg-clip-text
              text-transparent
            "
          >
            YOU SHOWED UP.
          </span>

          <br />

          <span className="text-white/90">
            THE REST BECAME
          </span>

          <br />

          <span className="text-white/90">
            MEMORIES.
          </span>
        </h2>

        {/* Supporting copy */}
        <p className="mx-auto mt-9 max-w-2xl text-base leading-7 text-zinc-500 md:mt-11 md:text-lg md:leading-8">
          Good music.
          <span className="text-zinc-300"> Great food.</span>{" "}
          New friendships.
          <br />
          One unforgettable night that marks the beginning of your college
          journey.
        </p>

        {/* Tiny details */}
        <div className="mt-10 flex items-center justify-center gap-5 text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
          <span>NEW FACES</span>
          <span className="text-violet-400">✦</span>
          <span>NEW FRIENDS</span>
          <span className="text-violet-400">✦</span>
          <span>ONE NIGHT</span>
        </div>
      </motion.div>

      {/* =========================================================
          BOTTOM DIVIDER
      ========================================================= */}

      <div className="relative mx-auto mt-10 max-w-7xl px-6 md:mt-12">
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/[0.10]" />

          <div className="flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[0.06] text-xs text-violet-300">
            ↓
          </div>

          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/[0.10]" />
        </div>
      </div>
    </section>
  );
}