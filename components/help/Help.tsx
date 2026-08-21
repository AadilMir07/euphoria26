"use client";

import { Mail } from "lucide-react";

export default function Help() {
  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">

          <p className="uppercase tracking-[0.35em] text-purple-400">
            Need Help?
          </p>

          <h1 className="mt-4 text-5xl font-black">
            We're Here{" "}
            <span className="text-purple-400">
              For You
            </span>
          </h1>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            Questions about registration, payment, venue,
            or anything related to EUPHORIA '26'?
          </p>

        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-14 backdrop-blur-xl text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-500/20">
            <Mail className="h-9 w-9 text-purple-400" />
          </div>

          <h2 className="mt-8 text-3xl font-bold">
            Email Us
          </h2>

          <p className="mt-4 text-zinc-400">
            Send us your query anytime.
          </p>

          <a
            href="mailto:euphoria.nuv@gmail.com"
            className="mt-8 inline-flex rounded-full bg-purple-600 px-8 py-4 font-semibold hover:bg-purple-700 transition"
          >
            euphoria.nuv@gmail.com
          </a>

          <p className="mt-6 text-zinc-500">
            We usually reply as soon as possible.
          </p>

        </div>

      </div>
    </section>
  );
}