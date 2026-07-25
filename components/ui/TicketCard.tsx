import { CalendarDays, Clock3, MapPin, Sparkles } from "lucide-react";
import GlassCard from "./GlassCard";
import { EVENT } from "@/constants/event";

export default function TicketCard() {
  return (
    <GlassCard className="relative overflow-hidden p-8">

      {/* Top glow */}
      <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="relative z-10">

        <p className="text-xs uppercase tracking-[0.4em] text-violet-400">
          EUPHORIA '26
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          Early Bird Pass
        </h2>

        <p className="mt-6 text-5xl font-black">
          ₹{EVENT.earlyBirdPrice}
        </p>

        <div className="my-8 h-px bg-white/10" />

        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5 text-violet-400" />
            <span>{EVENT.date}</span>
          </div>

          <div className="flex items-center gap-3">
            <Clock3 className="h-5 w-5 text-violet-400" />
            <span>{EVENT.time}</span>
          </div>

          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5 text-violet-400" />
            <span>{EVENT.venue}</span>
          </div>

        </div>

        <div className="my-8 h-px bg-white/10" />

        <div className="flex items-center gap-2 text-violet-300">
          <Sparkles className="h-4 w-4" />
          <span className="text-sm">
            Limited Passes Available
          </span>
        </div>

      </div>

    </GlassCard>
  );
}