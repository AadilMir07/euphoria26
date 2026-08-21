import FadeIn from "@/components/animations/FadeIn";
import Link from "next/link";
import Image from "next/image";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#05020a] text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-280px] h-[800px] w-[800px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[180px]" />

        <div className="absolute left-[-250px] top-[35%] h-[550px] w-[550px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

        <div className="absolute right-[-180px] top-[35%] h-[650px] w-[650px] rounded-full bg-violet-600/[0.12] blur-[180px]" />

        {/* Extra desktop glow behind the collage */}
        <div className="absolute right-[4%] top-[42%] hidden h-[500px] w-[500px] rounded-full bg-fuchsia-500/[0.07] blur-[150px] lg:block" />

        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)
            `,
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,#05020a_90%)]" />
      </div>

      <Container className="relative z-10">
        <div className="relative min-h-screen pt-32 pb-24 lg:pt-36 lg:pb-28">
          {/* =====================================================
              TOP LABEL
          ===================================================== */}
          <FadeIn>
            <div className="flex justify-center lg:justify-start">
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  border
                  border-violet-400/30
                  bg-violet-500/[0.08]
                  px-5
                  py-2
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.35em]
                  text-violet-300
                  backdrop-blur-xl
                "
              >
                <span className="text-violet-300">✦</span>
                START YOUR COLLEGE ERA HERE
              </span>
            </div>
          </FadeIn>

          {/* =====================================================
              HERO CONTENT
          ===================================================== */}
          <div
            className="
              mt-6
              grid
              items-center
              gap-16
              lg:grid-cols-[1.08fr_0.92fr]
              lg:gap-4
            "
          >
            {/* =================================================
                LEFT SIDE
            ================================================= */}
            <div className="relative z-20">
              <FadeIn>
                {/* Huge background text */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -left-8
                    -top-16
                    select-none
                    text-[120px]
                    font-black
                    leading-none
                    text-white/[0.025]
                    sm:text-[180px]
                    lg:text-[210px]
                  "
                >
                  E26
                </div>

                {/* Event metadata */}
                <p
                  className="
                    relative
                    mb-4
                    text-[9px]
                    font-semibold
                    uppercase
                    tracking-[0.35em]
                    text-violet-200/60
                    sm:text-[10px]
                    lg:mb-3
                  "
                >
                  NUV • 05 SEPTEMBER 2026
                </p>

                <h1
                  className="
                    relative
                    text-center
                    text-[clamp(4rem,10.4vw,8rem)]
                    font-black
                    leading-[0.78]
                    tracking-[-0.065em]
                    lg:text-left
                  "
                >
                  <span className="block">EUPHORIA</span>

                  <span
                    className="
                      mt-4
                      block
                      bg-gradient-to-r
                      from-violet-300
                      via-fuchsia-300
                      to-violet-500
                      bg-clip-text
                      text-transparent
                    "
                  >
                    '26
                  </span>
                </h1>

                <div className="mt-5 h-px w-28 bg-gradient-to-r from-violet-400/70 to-transparent lg:mt-6" />

                {/* Description */}
                <p
                  className="
                    mx-auto
                    mt-8
                    max-w-2xl
                    text-center
                    text-base
                    leading-7
                    text-zinc-400
                    sm:text-lg
                    sm:leading-8
                    lg:mx-0
                    lg:mt-8
                    lg:text-left
                  "
                >
                  One unforgettable night.
                  <span className="font-semibold text-white">
                    {" "}
                    Endless memories.
                  </span>{" "}
                  Your college story starts here.
                </p>

                {/* Stats */}
                <div
                  className="
                    mx-auto
                    mt-9
                    grid
                    max-w-2xl
                    grid-cols-3
                    border-y
                    border-white/[0.08]
                    py-6
                    lg:mx-0
                    lg:mt-10
                  "
                >
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-black sm:text-3xl">05</p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-zinc-500
                        sm:text-xs
                      "
                    >
                      September
                    </p>
                  </div>

                  <div className="border-x border-white/[0.08] text-center">
                    <p
                      className="
                        text-2xl
                        font-black
                        text-violet-300
                        sm:text-3xl
                      "
                    >
                      7 PM
                    </p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        uppercase
                        tracking-[0.2em]
                        text-zinc-500
                        sm:text-xs
                      "
                    >
                      Onwards
                    </p>
                  </div>

                  <div className="text-center lg:pl-6 lg:text-left">
                    <p className="text-2xl font-black sm:text-3xl">₹899</p>

                    <p
                      className="
                        mt-1
                        text-[10px]
                        uppercase
                        tracking-[0.15em]
                        text-zinc-500
                        sm:text-xs
                      "
                    >
                      Euphoria '26 Pass
                    </p>
                  </div>
                </div>

                {/* CTA */}
                <div
                  className="
                    mt-8
                    flex
                    flex-col
                    gap-3
                    sm:flex-row
                    lg:justify-start
                  "
                >
                  <Link href="/register">
                    <Button
                      className="
                        group
                        h-14
                        w-full
                        rounded-full
                        bg-gradient-to-r
                        from-violet-600
                        via-fuchsia-500
                        to-purple-500
                        px-9
                        text-base
                        font-semibold
                        shadow-[0_0_40px_rgba(168,85,247,0.2)]
                        transition-all
                        duration-500
                        hover:-translate-y-1
                        hover:scale-[1.03]
                        hover:shadow-[0_0_70px_rgba(168,85,247,0.45)]
                        sm:w-auto
                      "
                    >
                      Reserve Your Pass

                      <span
                        className="
                          ml-2
                          inline-block
                          transition-transform
                          duration-300
                          group-hover:translate-x-1
                        "
                      >
                        →
                      </span>
                    </Button>
                  </Link>

                  <Link href="/venue">
                    <Button
                      variant="outline"
                      className="
                        h-14
                        w-full
                        rounded-full
                        border-white/10
                        bg-white/[0.03]
                        px-9
                        text-base
                        text-white
                        backdrop-blur-xl
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-violet-400/30
                        hover:bg-violet-500/10
                        hover:text-violet-200
                        sm:w-auto
                      "
                    >
                      Explore Venue
                    </Button>
                  </Link>
                </div>
              </FadeIn>
            </div>

            {/* =================================================
                RIGHT SIDE — PHOTO COLLAGE
                Desktop/tablet only — mobile uses the CollegeEra collage
            ================================================= */}
            <div className="hidden md:block">
              <FadeIn delay={0.2}>
              <div
                className="
                  relative
                  mx-auto
                  mt-4
                  h-[520px]
                  w-full
                  max-w-[540px]
                  translate-x-0
                  sm:h-[600px]
                  lg:mt-4
                  lg:h-[680px]
                  lg:translate-x-[7%]
                "
              >
                {/* Purple glow */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    h-[400px]
                    w-[400px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-violet-600/20
                    blur-[130px]
                  "
                />

                {/* Main image */}
                <div
                  className="
                    group
                    absolute
                    left-[8%]
                    top-[12%]
                    z-20
                    h-[340px]
                    w-[245px]
                    rotate-[-6deg]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/15
                    bg-zinc-900
                    shadow-[0_30px_100px_rgba(0,0,0,0.6)]
                    transition-all
                    duration-700
                    hover:z-50
                    hover:rotate-[-2deg]
                    hover:scale-[1.04]
                    lg:left-[9%]
                    lg:top-[11%]
                  "
                >
                  <Image
                    src="/images/experience/live-dj.png"
                    alt="Euphoria live DJ"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  <div
                    className="
                      absolute
                      bottom-5
                      left-5
                      rounded-full
                      border
                      border-white/20
                      bg-black/40
                      px-4
                      py-2
                      text-[10px]
                      font-semibold
                      uppercase
                      tracking-[0.25em]
                      backdrop-blur-xl
                    "
                  >
                    LIVE ENERGY
                  </div>
                </div>

                {/* Second image */}
                <div
                  className="
                    group
                    absolute
                    right-[5%]
                    top-[5%]
                    z-10
                    h-[260px]
                    w-[190px]
                    rotate-[7deg]
                    overflow-hidden
                    rounded-[26px]
                    border
                    border-white/15
                    bg-zinc-900
                    shadow-[0_30px_80px_rgba(0,0,0,0.55)]
                    transition-all
                    duration-700
                    hover:z-50
                    hover:rotate-[2deg]
                    hover:scale-[1.05]
                    lg:right-[-1%]
                    lg:top-[1%]
                  "
                >
                  <Image
                    src="/images/strip/girls-group.png"
                    alt="Friends at Euphoria"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Third image */}
                <div
                  className="
                    group
                    absolute
                    bottom-[6%]
                    left-[22%]
                    z-30
                    h-[280px]
                    w-[205px]
                    rotate-[5deg]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/15
                    bg-zinc-900
                    shadow-[0_35px_100px_rgba(0,0,0,0.65)]
                    transition-all
                    duration-700
                    hover:z-50
                    hover:rotate-[1deg]
                    hover:scale-[1.05]
                    lg:left-[23%]
                  "
                >
                  <Image
                    src="/images/experience/celebrate.png"
                    alt="Celebrating at Euphoria"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div
                    className="
                      absolute
                      inset-x-4
                      bottom-4
                      rounded-full
                      border
                      border-white/20
                      bg-black/40
                      px-3
                      py-2
                      text-center
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      backdrop-blur-xl
                    "
                  >
                    MAKE MEMORIES
                  </div>
                </div>

                {/* Fourth image */}
                <div
                  className="
                    group
                    absolute
                    bottom-[15%]
                    right-[5%]
                    z-20
                    h-[235px]
                    w-[175px]
                    rotate-[-8deg]
                    overflow-hidden
                    rounded-[25px]
                    border
                    border-white/15
                    bg-zinc-900
                    shadow-[0_30px_90px_rgba(0,0,0,0.6)]
                    transition-all
                    duration-700
                    hover:z-50
                    hover:rotate-[-3deg]
                    hover:scale-[1.05]
                    lg:right-[-1%]
                  "
                >
                  <Image
                    src="/images/experience/memories.png"
                    alt="Euphoria memories"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Floating date card */}
                <div
                  className="
                    absolute
                    bottom-[1%]
                    left-[2%]
                    z-40
                    rounded-2xl
                    border
                    border-violet-400/20
                    bg-[#10091b]/80
                    px-5
                    py-4
                    shadow-[0_20px_60px_rgba(0,0,0,0.5)]
                    backdrop-blur-xl
                  "
                >
                  <p
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-[0.3em]
                      text-violet-300
                    "
                  >
                    SAVE THE DATE
                  </p>

                  <p className="mt-1 text-xl font-black">05.09.26</p>
                </div>

                {/* Live indicator */}
                <div
                  className="
                    absolute
                    right-[2%]
                    top-[48%]
                    z-40
                    flex
                    items-center
                    gap-2
                    rounded-full
                    border
                    border-emerald-400/20
                    bg-black/40
                    px-3
                    py-2
                    backdrop-blur-xl
                  "
                >
                  <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />

                  <span
                    className="
                      text-[9px]
                      font-semibold
                      uppercase
                      tracking-widest
                      text-zinc-300
                    "
                  >
                    LIVE
                  </span>
                </div>
                </div>
              </FadeIn>
            </div>
          </div>

          {/* =====================================================
              BOTTOM SCROLL INDICATOR
          ===================================================== */}
          <div
            className="
              absolute
              bottom-6
              left-1/2
              hidden
              -translate-x-1/2
              items-center
              gap-3
              text-xs
              uppercase
              tracking-[0.3em]
              text-zinc-500
              md:flex
            "
          >
            <div className="h-8 w-px bg-white/10" />

            <span>Scroll to discover</span>

            <span className="animate-bounce text-lg text-violet-300">↓</span>
          </div>
        </div>
      </Container>
    </section>
  );
}
