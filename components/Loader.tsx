"use client";

import { useEffect, useState } from "react";

export default function Loader() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHide(true);
    }, 1800);

    return () => clearTimeout(timer);
  }, []);

  const letters = "EUPHORIA".split("");

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#050505] transition-all duration-700 ${
        hide ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      {/* Main Background Glow */}

      <div className="absolute h-[700px] w-[700px] animate-pulse rounded-full bg-violet-600/20 blur-[180px]" />

      {/* Secondary Glow */}

      <div className="absolute h-[350px] w-[350px] rounded-full bg-fuchsia-500/10 blur-[120px]" />

      {/* Subtle Outer Glow */}

      <div className="absolute h-[500px] w-[500px] rounded-full border border-violet-500/[0.04] shadow-[0_0_180px_rgba(139,92,246,0.08)]" />

      {/* Logo */}

      <div className="relative text-center">

        {/* EUPHORIA */}

        <h1
          className="
            flex
            justify-center
            text-7xl
            font-black
            tracking-tight
            text-white
            sm:text-8xl
            md:text-[9rem]
          "
        >
          {letters.map((letter, index) => (
            <span
              key={letter}
              className="animate-[fadeIn_0.8s_ease-out_both]"
              style={{
                animationDelay: `${index * 90}ms`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>

        {/* '26 */}

        <p
          className="
            mt-3
            text-5xl
            font-black
            bg-gradient-to-r
            from-violet-300
            via-fuchsia-300
            to-violet-500
            bg-clip-text
            text-transparent
            drop-shadow-[0_0_35px_rgba(192,132,252,0.65)]
            animate-[fadeIn_0.9s_ease-out_both]
            md:text-6xl
          "
          style={{
            animationDelay: "700ms",
          }}
        >
          '26
        </p>

        {/* Loading Indicator */}

        <div
          className="mt-10 flex justify-center gap-2 animate-[fadeIn_0.8s_ease-out_both]"
          style={{
            animationDelay: "950ms",
          }}
        >
          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-300 [animation-delay:0ms]" />

          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-300 [animation-delay:150ms]" />

          <div className="h-1.5 w-1.5 animate-bounce rounded-full bg-violet-300 [animation-delay:300ms]" />
        </div>

      </div>
    </div>
  );
}