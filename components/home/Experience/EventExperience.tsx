"use client";

import Image from "next/image";
import FadeIn from "@/components/animations/FadeIn";

const experiences = [
  {
    title: "Unlimited Dinner",
    desc: "Take a break. Grab a plate. Meet new people.",
    image: "/images/experience/dinner.png",
    badge: "🍴 FOOD • DRINKS",
    accent: "amber",
  },
  {
    title: "Capture Memories",
    desc: "The photos you'll laugh about years later.",
    image: "/images/experience/memories.png",
    badge: "📸 POLAROIDS",
    accent: "pink",
  },
  {
    title: "Meet New Friends",
    desc: "Walk in as strangers. Leave with your squad.",
    image: "/images/experience/friends.png",
    badge: "💜 NEW PEOPLE",
    accent: "emerald",
  },
  {
    title: "Fun Activities",
    desc: "Games, giveaways and unforgettable moments.",
    image: "/images/experience/fun.png",
    badge: "🎮 LET'S PLAY",
    accent: "cyan",
  },
  {
    title: "Celebrate Together",
    desc: "Dance. Laugh. Repeat.",
    image: "/images/experience/celebrate.png",
    badge: "✨ EUPHORIA '26",
    accent: "violet",
  },
];

const chips = [
  ["🎤 Karaoke", "🎁 Giveaways", "🎲 Games", "😂 Icebreakers"],
  ["📸 Selfies", "🎥 Reels", "✨ Stories"],
];

const mobileExperiences = [
  {
    title: "Live DJ Night",
    desc: "Feel the bass. Dance beneath immersive lights. Experience the biggest celebration of your first semester.",
    image: "/images/experience/live-dj.png",
    badge: "🎧 DJ • LIGHT SHOW",
    accent: "violet",
  },
  ...experiences,
];


function ExperienceCard({
  item,
  className,
  index,
}: {
  item: (typeof experiences)[number];
  className: string;
  index: number;
}) {
  return (
    <div className={`${className} relative`}>
      <FadeIn delay={index * 0.06} className="h-full w-full">
        <div className="group relative h-full w-full overflow-hidden rounded-[34px] border border-white/[0.10] bg-[#100815] shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
          <Image
            src={item.image}
            alt={item.title}
            fill
            sizes="(max-width: 768px) 88vw, 50vw"
            className="object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-transparent opacity-90" />

          <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.10] via-transparent to-fuchsia-500/[0.05] opacity-70 transition-opacity duration-700 group-hover:opacity-100" />

          <div className="absolute left-6 top-6 rounded-full border border-white/10 bg-black/30 px-4 py-2 backdrop-blur-xl">
            <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-white/80">
              {item.badge}
            </span>
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-9">
            <h3 className="text-3xl font-black leading-[0.92] tracking-[-0.04em] text-white md:text-5xl">
              {item.title}
            </h3>

            <p className="mt-4 max-w-md text-sm leading-6 text-zinc-300 md:text-base md:leading-7">
              {item.desc}
            </p>

            {index === 1 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {chips[1].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}

            {index === 3 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {chips[0].map((chip) => (
                  <span
                    key={chip}
                    className="rounded-full border border-white/10 bg-white/10 px-3 py-1.5 text-[9px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="pointer-events-none absolute -bottom-20 -right-20 h-48 w-48 rounded-full bg-violet-500/20 blur-[80px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
        </div>
      </FadeIn>
    </div>
  );
}

export default function EventExperience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#09040f] py-16 md:py-20"
    >
      {/* =========================================================
          ATMOSPHERE
      ========================================================= */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-700/[0.09] blur-[180px]" />
        <div className="absolute -left-48 top-[45%] h-[500px] w-[500px] rounded-full bg-fuchsia-600/[0.05] blur-[180px]" />
        <div className="absolute -right-48 bottom-0 h-[500px] w-[500px] rounded-full bg-violet-600/[0.06] blur-[180px]" />

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

      <div className="relative mx-auto max-w-7xl px-6">
        {/* =========================================================
            HEADER
        ========================================================= */}
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            <div className="flex items-center justify-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-violet-500/60" />

              <span className="rounded-full border border-violet-400/20 bg-violet-500/[0.07] px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                WHAT'S WAITING FOR YOU
              </span>

              <span className="h-px w-12 bg-gradient-to-l from-transparent to-violet-500/60" />
            </div>

            <p className="mt-6 text-[9px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
              05 SEPTEMBER 2026 • MAD OVER GRILLS
            </p>

            <h2 className="mt-7 text-[clamp(3.2rem,7vw,6.5rem)] font-black leading-[0.86] tracking-[-0.055em]">
              ONE NIGHT.
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                EVERYTHING YOU NEED.
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
              Music. Food. Games. New people.
              <br className="hidden sm:block" />
              Everything is set for your first unforgettable college night.
            </p>
          </div>
        </FadeIn>

        {/* =========================================================
            MOBILE
        ========================================================= */}
        <div className="mt-12 md:hidden">
          <p className="mb-4 text-center text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Swipe to explore →
          </p>

          <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5">
            {mobileExperiences.map((item, index) => (
              <ExperienceCard
                key={item.title}
                item={item}
                index={index}
                className="h-[390px] w-[82vw] shrink-0 snap-center"
              />
            ))}
          </div>
        </div>

        {/* =========================================================
            DESKTOP FEATURED EXPERIENCE
        ========================================================= */}
        <div className="mt-14 hidden md:block">
          <FadeIn>
            <div className="group relative overflow-hidden rounded-[42px] border border-white/[0.10] bg-black shadow-[0_40px_120px_rgba(0,0,0,0.55)]">
              <div className="relative h-[650px]">
                <Image
                  src="/images/experience/live-dj.png"
                  alt="Live DJ"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/55 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 via-transparent to-fuchsia-500/10" />

                <div className="absolute bottom-0 left-0 right-0 p-10 md:p-14">
                  <div className="flex flex-wrap gap-2">
                    {["🎧 DJ", "🎆 LIGHT SHOW", "🔥 LIVE ENERGY"].map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-black/30 px-4 py-2 text-[9px] font-semibold uppercase tracking-[0.25em] text-violet-200 backdrop-blur-xl"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mt-7 text-[clamp(4rem,7vw,7rem)] font-black leading-[0.82] tracking-[-0.06em]">
                    LIVE
                    <br />
                    <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                      DJ NIGHT
                    </span>
                  </h3>

                  <p className="mt-7 max-w-xl text-base leading-7 text-zinc-300 md:text-lg md:leading-8">
                    Feel the bass. Dance beneath immersive lights.
                    Experience the biggest celebration of your first semester.
                  </p>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-fuchsia-500/20 blur-[140px] opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
            </div>
          </FadeIn>

          {/* =======================================================
              EXPERIENCE GRID
          ======================================================= */}
          <div className="mt-6 grid grid-cols-12 gap-6">
            <ExperienceCard
              item={experiences[0]}
              index={0}
              className="col-span-4 h-[330px]"
            />

            <ExperienceCard
              item={experiences[1]}
              index={1}
              className="col-span-4 h-[690px]"
            />

            <ExperienceCard
              item={experiences[2]}
              index={2}
              className="col-span-4 h-[330px]"
            />

            <ExperienceCard
              item={experiences[3]}
              index={3}
              className="col-span-5 h-[350px]"
            />

            <ExperienceCard
              item={experiences[4]}
              index={4}
              className="col-span-7 h-[350px]"
            />
          </div>
        </div>

        {/* =========================================================
            BOTTOM STATEMENT
        ========================================================= */}
        <FadeIn delay={0.15}>
          <div className="mx-auto mt-12 max-w-5xl text-center md:mt-16">
            <div className="mx-auto h-px w-40 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

            <p className="mt-8 text-[9px] font-semibold uppercase tracking-[0.4em] text-zinc-600">
              IT'S ALL INCLUDED
            </p>

            <h3 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.04em] md:text-6xl">
              One night.
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                Hundreds of memories.
              </span>
            </h3>

            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-500 md:text-lg md:leading-8">
              Come for the music. Stay for the people.
              <br />
              Leave with a story worth telling.
            </p>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 border-y border-white/[0.08]">
              <div className="py-7">
                <p className="text-2xl font-black">01</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  Night
                </p>
              </div>

              <div className="border-x border-white/[0.08] py-7">
                <p className="text-2xl font-black text-violet-300">∞</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  Memories
                </p>
              </div>

              <div className="py-7">
                <p className="text-2xl font-black">₹899</p>
                <p className="mt-2 text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  Pass
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
