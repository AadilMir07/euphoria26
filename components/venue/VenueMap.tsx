"use client";

import { MapPin, Navigation, ArrowUpRight } from "lucide-react";

export default function VenueMap() {
  return (
    <section className="relative overflow-hidden bg-[#050505] pb-28 pt-20 sm:pb-32 sm:pt-24 md:pb-40 md:pt-28">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[760px] -translate-x-1/2 rounded-full bg-violet-700/[0.07] blur-[180px]" />
      <div className="pointer-events-none absolute bottom-0 right-[-180px] h-[420px] w-[420px] rounded-full bg-fuchsia-500/[0.035] blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="mb-14 grid gap-8 md:mb-16 md:grid-cols-[1fr_0.8fr] md:items-end">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-12 bg-violet-400" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                The Location
              </span>
            </div>

            <h2 className="max-w-3xl text-6xl font-black leading-[0.86] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl">
              Find Your
              <br />
              <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                Way Here.
              </span>
            </h2>
          </div>

          <div className="md:justify-self-end md:pb-2">
            <p className="max-w-md text-base leading-8 text-zinc-500 md:text-lg">
              One night. One destination. Everything you need to get to
              EUPHORIA '26, without the guesswork.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <span className="h-px w-8 bg-white/15" />
              <span className="text-[9px] uppercase tracking-[0.35em] text-zinc-600">
                Vadodara, Gujarat
              </span>
            </div>
          </div>
        </div>

        <div className="grid overflow-hidden rounded-[2rem] border border-white/[0.11] bg-white/[0.025] lg:grid-cols-[0.78fr_1.22fr]">

          <div className="relative flex min-h-[560px] flex-col justify-between overflow-hidden p-7 sm:p-9 md:p-11">
            <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[100px]" />

            <div className="relative">
              <div className="flex items-start justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/15 bg-violet-500/[0.11]">
                  <MapPin className="h-6 w-6 text-violet-300" />
                </div>

                <span className="text-[9px] uppercase tracking-[0.35em] text-white/25">
                  01 / LOCATION
                </span>
              </div>

              <p className="mt-12 text-[9px] font-semibold uppercase tracking-[0.35em] text-violet-300">
                EUPHORIA '26
              </p>

              <h3 className="mt-4 text-4xl font-bold leading-[0.95] tracking-tight text-white sm:text-5xl">
                Mad Over
                <br />
                Grills.
              </h3>

              <p className="mt-4 text-base text-zinc-500">
                Restaurant & Banquet Hall
              </p>

              <div className="mt-8 flex items-center gap-3">
                <span className="text-sm font-semibold text-white">4.8</span>
                <span className="text-sm tracking-[0.15em] text-violet-300">★★★★★</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-zinc-600">
                  Rated Venue
                </span>
              </div>

              <div className="mt-10 border-t border-white/[0.08] pt-7">
                <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-zinc-600">
                  Address
                </p>

                <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-400">
                  Police Chowki, Behind Sears Towers,
                  <br />
                  Sevasi, Khanpur,
                  <br />
                  Vadodara, Gujarat 391101
                </p>
              </div>
            </div>

            <div className="relative mt-10">
              <a
                href="https://maps.google.com/?q=Mad+Over+Grills+Gotri+Vadodara"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-violet-100"
              >
                <Navigation className="h-4 w-4" />
                Open Google Maps
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>

          <div className="relative min-h-[480px] overflow-hidden border-t border-white/[0.08] lg:border-l lg:border-t-0">
            <div className="pointer-events-none absolute inset-0 z-10 bg-violet-950/[0.06] mix-blend-multiply" />

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118108.63819322672!2d72.9702289972656!3d22.319812600000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc9664d55f901%3A0x76052030cce4e371!2sMad%20Over%20Grills%20Gotri%20-%20Restaurant%20%26%20Banquet%20Hall!5e0!3m2!1sen!2sin!4v1785594484625!5m2!1sen!2sin"
              title="Mad Over Grills Location"
              className="h-full min-h-[480px] w-full grayscale-[0.2] contrast-[0.95]"
              loading="lazy"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            />

            <div className="absolute bottom-6 left-6 z-20 hidden rounded-2xl border border-white/10 bg-black/65 px-5 py-4 backdrop-blur-xl sm:block">
              <p className="text-[9px] uppercase tracking-[0.35em] text-violet-300">
                The Destination
              </p>
              <p className="mt-1 text-sm font-semibold text-white">
                Mad Over Grills
              </p>
            </div>
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-3">
          {[
            ["01", "VENUE", "Mad Over Grills"],
            ["02", "CITY", "Vadodara, Gujarat"],
            ["03", "DATE", "05 September 2026"],
          ].map(([number, label, value]) => (
            <div key={number} className="border-t border-white/[0.08] pt-4">
              <div className="flex items-center justify-between">
                <span className="text-[9px] tracking-[0.3em] text-violet-300/70">{number}</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-600">{label}</span>
              </div>
              <p className="mt-3 text-sm text-zinc-400">{value}</p>
            </div>
          ))}
        </div>

        <div className="relative mt-24 border-t border-white/[0.07] pt-20 text-center md:mt-28 md:pt-24">
          <div className="pointer-events-none absolute left-1/2 top-0 h-48 w-[500px] -translate-x-1/2 rounded-full bg-violet-600/[0.045] blur-[120px]" />

          <p className="relative text-[9px] font-semibold uppercase tracking-[0.45em] text-zinc-600">
            Now You Know Where
          </p>

          <h3 className="relative mx-auto mt-5 max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            All that's left is to{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
              show up.
            </span>
          </h3>
        </div>

      </div>
    </section>
  );
}
