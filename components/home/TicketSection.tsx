"use client";

export default function TicketSection() {
  return (
    <section
      id="tickets"
      className="relative overflow-hidden bg-[#050505] py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">

            Ready For

          </div>

          <h2 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">

            Euphoria '26?

          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-zinc-400">

            One unforgettable night begins with one decision.

          </p>

        </div>

        {/* Ticket */}

        <div className="mt-20 flex justify-center">

        <div
  className="
    group
    relative
    w-full
    max-w-xl
    overflow-hidden
    rounded-[42px]
    border
    border-white/10
    bg-white/[0.04]
    backdrop-blur-2xl
    transition-all
    duration-700
    hover:-translate-y-3
    hover:rotate-[1deg]
    hover:border-violet-400/30
    hover:shadow-[0_45px_120px_rgba(168,85,247,.25)]
  "
>

  {/* Background Glow */}

  <div className="absolute -bottom-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-500/20 blur-[140px] opacity-70" />

  {/* Light Sweep */}

  <div
    className="
      absolute
      inset-y-0
      -left-40
      w-24
      rotate-12
      bg-white/10
      blur-2xl
      transition-all
      duration-[2200ms]
      group-hover:left-[120%]
    "
  />

  {/* Ticket Notches */}

  <div className="absolute -left-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#09040f]" />
  <div className="absolute -right-4 top-1/2 h-8 w-8 -translate-y-1/2 rounded-full bg-[#09040f]" />

  <div className="relative p-12 text-center">

    <div className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">

      ✦ EUPHORIA '26 ✦

    </div>

    <p className="mt-8 text-sm font-semibold uppercase tracking-[0.5em] text-zinc-400">

      EUPHORIA '26 PASS

    </p>

    <h3 className="mt-6 bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-7xl font-black text-transparent">

      ₹899

    </h3>

    <p className="mt-8 text-2xl font-semibold leading-10 text-white">

      The night you'll remember.

      <br />

      <span className="text-zinc-400">

        The memories you'll keep.

      </span>

    </p>

    <div className="mx-auto mt-14 h-px w-48 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />
    <div className="mt-14 space-y-4">

  <p className="text-sm font-semibold uppercase tracking-[0.45em] text-zinc-500">
    Saturday
  </p>

  <h4 className="text-4xl font-black text-white">
    5
SEPTEMBER
  </h4>

  <p className="text-lg text-zinc-400">
    7 PM
ONWARDS
  </p>

</div>

<div className="mx-auto mt-14 h-px w-48 bg-gradient-to-r from-transparent via-violet-400 to-transparent" />

<button
  className="
    group/button
    mt-14
    inline-flex
    items-center
    gap-3
    rounded-full
    border
    border-violet-500/20
    bg-violet-500/10
    px-8
    py-4
    text-lg
    font-semibold
    text-white
    backdrop-blur-xl
    transition-all
    duration-500
    hover:scale-105
    hover:border-violet-400
    hover:bg-violet-500/20
  "
>

  Reserve Your Pass

  <span className="transition-transform duration-300 group-hover/button:translate-x-1">
    →
  </span>

</button>

<p className="mt-8 text-sm text-zinc-500">
  L
</p>

  </div>

</div>

</div>

</div>

</section>

  );
}