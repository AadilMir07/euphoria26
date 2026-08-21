"use client";

import Image from "next/image";
import {
  ArrowUpRight,
  Check,
  MapPin,
  Sparkles,
  Ticket,
} from "lucide-react";

const benefits = [
  {
    number: "01",
    label: "EXCLUSIVE DISCOUNTS",
    title: "Exclusive Discounts",
    description: "Offers available only to EUPHORIA students.",
  },
  {
    number: "02",
    label: "PARTNER REWARDS",
    title: "Partner Rewards",
    description: "Extra value beyond your event ticket.",
  },
  {
    number: "03",
    label: "STUDENT PERKS",
    title: "Student Perks",
    description: "Register. Show up. Unlock your benefits.",
  },
];

const steps = [
  {
    number: "01",
    title: "Register",
    description: "Get your EUPHORIA '26 registration and secure your access.",
  },
  {
    number: "02",
    title: "Show Your Pass",
    description: "Present your registration when visiting a partner.",
  },
  {
    number: "03",
    title: "Claim Your Perk",
    description: "Unlock the exclusive offer and enjoy more beyond the night.",
  },
];

export default function Sponsors() {
  return (
    <main className="relative overflow-hidden bg-[#050505] text-white">

      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-violet-700/[0.045] blur-[180px]" />

      {/* ========================================================= */}
      {/* HERO */}
      {/* ========================================================= */}

      <section className="relative pb-20 pt-36 sm:pb-24 sm:pt-40 md:pb-28 md:pt-44">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-12 md:grid-cols-[0.95fr_1.05fr] md:items-end">

            {/* Left */}
            <div>

              <div className="mb-7 flex items-center gap-4">
                <span className="h-px w-12 bg-violet-400" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                  Our Partners
                </span>
              </div>

              <h1 className="max-w-3xl text-6xl font-black leading-[0.86] tracking-[-0.04em] text-white sm:text-7xl md:text-8xl">
                The People
                <br />
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                  Behind The
                </span>
                <br />
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                  Night.
                </span>
              </h1>

            </div>

            {/* Right */}
            <div className="md:justify-self-end md:pb-3">

              <p className="max-w-xl text-base leading-8 text-zinc-500 md:text-lg">
                Your EUPHORIA '26 registration comes with more than entry.
                Unlock exclusive offers from the people making the night
                happen.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-8 bg-white/15" />

                <span className="text-[9px] uppercase tracking-[0.4em] text-zinc-600">
                  02 Official Partners
                </span>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
{/* PARTNERS */}
{/* ========================================================= */}

<section className="relative pb-20 md:pb-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">

      {/* =================================================== */}
      {/* ZEETALIAN */}
      {/* =================================================== */}

      <div className="group relative overflow-hidden rounded-[2rem] border border-violet-400/20 bg-white/[0.025] p-7 sm:p-9 md:p-10">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-[360px] w-[360px] rounded-full bg-violet-600/[0.07] blur-[120px] transition duration-700 group-hover:bg-violet-600/[0.11]" />

        {/* Header */}
        <div className="relative flex items-center justify-between">

          <div className="flex items-center gap-4">
            <Sparkles className="h-4 w-4 text-violet-300" />

            <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-violet-300">
              Featured Partner
            </span>
          </div>

          <span className="text-[9px] tracking-[0.3em] text-zinc-700">
            01 / 02
          </span>

        </div>

        {/* Main content */}
        <div className="relative mt-9 grid gap-8 sm:grid-cols-[120px_1fr] sm:items-center">

          {/* Logo */}
          <div className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-2xl bg-white p-3">
            <Image
              src="/images/logos/zeetalian.jpeg"
              alt="Zeetalian"
              width={160}
              height={160}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Text */}
          <div>

            <h2 className="text-4xl font-bold tracking-tight text-white">
              Zeetalian
            </h2>

            <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-500 sm:text-base">
              FREE Slushie worth ₹50 + 25% OFF menu coupon.
            </p>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-4 py-2">

              <Check className="h-3.5 w-3.5 text-violet-300" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-violet-300">
                Exclusive Student Offer
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="relative mt-9 flex items-center justify-between border-t border-white/[0.08] pt-6">

          <a
            href="https://www.google.com/maps/place/ZEETALIAN/"
            target="_blank"
            rel="noopener noreferrer"
            className="group/button inline-flex items-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-black transition-all duration-300 hover:scale-[1.03] hover:bg-violet-100"
          >
            <MapPin className="h-4 w-4" />

            View Location

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
          </a>

          <span className="hidden text-[9px] uppercase tracking-[0.35em] text-zinc-700 sm:block">
            Student Perk
          </span>

        </div>

      </div>


      {/* =================================================== */}
      {/* BEAUTY SIGNATURE */}
      {/* =================================================== */}

      <div className="group relative overflow-hidden rounded-[2rem] border border-white/[0.1] bg-white/[0.02] p-7 sm:p-9 md:p-10">

        {/* Ambient glow */}
        <div className="pointer-events-none absolute bottom-[-100px] right-[-80px] h-[300px] w-[300px] rounded-full bg-fuchsia-600/[0.05] blur-[120px] transition duration-700 group-hover:bg-fuchsia-600/[0.09]" />

        {/* Header */}
        <div className="relative flex items-center justify-between">

          <span className="text-[9px] font-semibold uppercase tracking-[0.4em] text-zinc-500">
            Official Partner
          </span>

          <span className="text-[9px] tracking-[0.3em] text-zinc-700">
            02 / 02
          </span>

        </div>

        {/* Main content */}
        <div className="relative mt-9 grid gap-8 sm:grid-cols-[120px_1fr] sm:items-center">

          {/* Logo */}
          <div className="flex h-[120px] w-[120px] items-center justify-center overflow-hidden rounded-2xl bg-white p-3">
            <Image
              src="/images/logos/beauty-signature.jpeg"
              alt="Beauty Signature Studio"
              width={160}
              height={160}
              className="h-full w-full object-contain"
            />
          </div>

          {/* Text */}
          <div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white">
              Beauty Signature
              <br />
              Studio
            </h2>

            <p className="mt-3 text-sm leading-7 text-zinc-500 sm:text-base">
              Enjoy 30% OFF on all salon services.
            </p>

            <div className="mt-5 inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.025] px-4 py-2">

              <Check className="h-3.5 w-3.5 text-violet-300" />

              <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-500">
                Exclusive Student Offer
              </span>

            </div>

          </div>

        </div>

        {/* Footer */}
        <div className="relative mt-9 border-t border-white/[0.08] pt-6">

          <a
            href="https://www.google.com/maps/place/Beauty+Signature+Studio/@22.280732,73.1530583,17z/data=!3m1!4b1!4m6!3m5!1s0x395fc7a9447a2949:0x208031063f2dca16!8m2!3d22.280732!4d73.1556332!16s%2Fg%2F11y_2fm_g6?entry=ttu&g_ep=EgoyMDI2MDgxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="group/button inline-flex items-center gap-4 rounded-full border border-white/[0.12] bg-white/[0.025] px-6 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.03] hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
          >
            <MapPin className="h-4 w-4 text-violet-300" />

            View Location

            <ArrowUpRight className="h-4 w-4 text-zinc-500 transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5" />
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

      {/* ========================================================= */}
      {/* BENEFITS STRIP */}
      {/* ========================================================= */}

      <section className="relative">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid border-y border-white/[0.08] md:grid-cols-3">

            {benefits.map((benefit) => (
              <div
                key={benefit.number}
                className="group relative overflow-hidden border-b border-white/[0.08] px-7 py-8 transition-colors duration-500 hover:bg-white/[0.02] md:border-b-0 md:border-r last:border-r-0"
              >

                {/* Hover line */}
                <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-400 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-center justify-between">

                  <span className="text-[9px] tracking-[0.3em] text-violet-300">
                    {benefit.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
                    {benefit.label}
                  </span>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-white">
                  {benefit.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600 transition-colors duration-500 group-hover:text-zinc-500">
                  {benefit.description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* ========================================================= */}
      {/* HOW IT WORKS */}
      {/* ========================================================= */}

      <section className="relative py-24 sm:py-28 md:py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[450px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-700/[0.035] blur-[160px]" />

        <div className="relative mx-auto max-w-7xl px-6">

          {/* Heading */}
          <div className="mb-14 grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-end">

            <div>

              <div className="mb-6 flex items-center gap-4">

                <span className="h-px w-10 bg-violet-400" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-violet-300">
                  How It Works
                </span>

              </div>

              <h2 className="max-w-xl text-5xl font-black leading-[0.9] tracking-tight text-white sm:text-6xl md:text-7xl">
                Register.
                <br />
                <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
                  Unlock More.
                </span>
              </h2>

            </div>

            <p className="max-w-xl text-base leading-8 text-zinc-500 md:justify-self-end md:text-lg">
              Your EUPHORIA registration doesn't end at the venue. Use your
              pass to unlock the exclusive benefits waiting for you from our
              partners.
            </p>

          </div>

          {/* Steps */}
          <div className="grid border-y border-white/[0.08] md:grid-cols-3">

            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`group relative px-7 py-9 md:px-9 ${
                  index !== 2 ? "border-b md:border-b-0 md:border-r" : ""
                } border-white/[0.08]`}
              >

                <div className="flex items-center justify-between">

                  <span className="text-[10px] tracking-[0.35em] text-violet-300">
                    {step.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.3em] text-zinc-700">
                    EUPHORIA '26
                  </span>

                </div>

                <div className="mt-10 flex h-11 w-11 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/[0.07]">
                  {index === 0 ? (
                    <Ticket className="h-5 w-5 text-violet-300" />
                  ) : index === 1 ? (
                    <MapPin className="h-5 w-5 text-violet-300" />
                  ) : (
                    <Check className="h-5 w-5 text-violet-300" />
                  )}
                </div>

                <h3 className="mt-7 text-2xl font-bold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-7 text-zinc-600 transition-colors duration-500 group-hover:text-zinc-500">
                  {step.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* FINAL CTA */}
      {/* ========================================================= */}

      <section className="relative overflow-hidden border-t border-white/[0.07] py-28 sm:py-32 md:py-40">

        <div className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/[0.055] blur-[150px]" />

        <div className="relative mx-auto max-w-4xl px-6 text-center">

          <p className="text-[9px] font-semibold uppercase tracking-[0.45em] text-zinc-600">
            Your Pass. Their Perks.
          </p>

          <h2 className="mt-6 text-5xl font-black leading-[0.92] tracking-tight text-white sm:text-6xl md:text-7xl">

            More than a night.
            <br />

            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
              More to take home.
            </span>

          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-zinc-600">
            Register for EUPHORIA '26 and make sure you don't miss the perks
            waiting for you beyond the venue.
          </p>

          <a
            href="/register"
            className="group mt-9 inline-flex items-center gap-4 rounded-full bg-white px-8 py-4 text-sm font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-violet-100"
          >
            Register Now

            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

        </div>

      </section>

    </main>
  );
}