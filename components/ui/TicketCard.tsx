import {
  CalendarDays,
  Clock3,
  MapPin,
  Sparkles,
} from "lucide-react";

import GlassCard from "./GlassCard";
import { EVENT } from "@/constants/event";

export default function TicketCard() {
  return (
    <GlassCard
      className="
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-violet-400/20
        bg-white/[0.035]
        p-8
        shadow-[0_0_80px_rgba(139,92,246,0.12)]
        backdrop-blur-xl
        transition-all
        duration-500
        ease-out
        hover:-translate-y-4
        hover:rotate-[1.5deg]
        hover:scale-[1.02]
        hover:border-violet-400/40
        hover:shadow-[0_25px_80px_rgba(139,92,246,0.25)]
      "
    >
      {/* Animated Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-20
          bottom-0
          h-56
          w-56
          rounded-full
          bg-fuchsia-500/10
          blur-[120px]
        "
      />

      {/* Shine Effect */}
      <div
        className="
          pointer-events-none
          absolute
          -left-40
          top-0
          h-[140%]
          w-24
          rotate-12
          bg-white/10
          blur-xl
          transition-all
          duration-1000
          ease-out
          group-hover:left-[130%]
        "
      />

      {/* Ticket Cutout — Left */}
      <div
        className="
          pointer-events-none
          absolute
          -left-3
          top-1/2
          h-6
          w-6
          -translate-y-1/2
          rounded-full
          bg-[#09040f]
        "
      />

      {/* Ticket Cutout — Right */}
      <div
        className="
          pointer-events-none
          absolute
          -right-3
          top-1/2
          h-6
          w-6
          -translate-y-1/2
          rounded-full
          bg-[#09040f]
        "
      />

      <div className="relative z-10">
        {/* Background E26 */}
        <div
          className="
            pointer-events-none
            absolute
            right-6
            top-24
            select-none
            text-[180px]
            font-black
            leading-none
            text-white/[0.03]
          "
        >
          E26
        </div>

        {/* Header */}
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.45em] text-violet-400">
            EUPHORIA '26
          </p>

          <span
            className="
              rounded-full
              border
              border-violet-400/20
              bg-violet-500/10
              px-3
              py-1
              text-[10px]
              font-semibold
              uppercase
              tracking-widest
              text-violet-300
            "
          >
            EUPHORIA '26 PASS
          </span>
        </div>

        {/* Title */}
        <h2 className="relative mt-4 text-3xl font-black">
          EUPHORIA '26 PASS
        </h2>

        {/* Price */}
        <div className="relative mt-6 flex items-end gap-2">
          <p className="text-7xl font-black tracking-tight">
            ₹{EVENT.price}
          </p>
        </div>

        {/* Perforation */}
        <div className="relative my-8 flex items-center justify-center gap-1.5">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full bg-white/20"
            />
          ))}
        </div>

        {/* Event Details */}
        <div className="relative space-y-5">
          {/* Date */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-500/10
                bg-violet-500/10
                backdrop-blur-xl
              "
            >
              <CalendarDays className="h-5 w-5 text-violet-400" />
            </div>

            <span>{EVENT.date}</span>
          </div>

          {/* Time */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-500/10
                bg-violet-500/10
                backdrop-blur-xl
              "
            >
              <Clock3 className="h-5 w-5 text-violet-400" />
            </div>

            <span>{EVENT.time}</span>
          </div>

          {/* Venue */}
          <div className="flex items-center gap-4">
            <div
              className="
                flex
                h-11
                w-11
                shrink-0
                items-center
                justify-center
                rounded-2xl
                border
                border-violet-500/10
                bg-violet-500/10
                backdrop-blur-xl
              "
            >
              <MapPin className="h-5 w-5 text-violet-400" />
            </div>

            <span>{EVENT.venue}</span>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-violet-300">
            <Sparkles className="h-4 w-4" />

            <span className="text-sm font-medium">
              Your story starts here.
            </span>
          </div>

          <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
        </div>
      </div>
    </GlassCard>
  );
}