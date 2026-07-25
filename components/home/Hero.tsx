import { CalendarDays, Clock3, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { EVENT } from "@/constants/event";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Background Glow */}
      <div className="absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

      <Container className="relative z-10 flex min-h-screen items-center pt-24">
        <div className="grid w-full items-center gap-16 lg:grid-cols-2">

          {/* LEFT */}
          <div>

            <p className="mb-4 uppercase tracking-[0.45em] text-violet-400">
              Freshers' Party
            </p>

            <h1 className="text-6xl font-black leading-none md:text-8xl">
              {EVENT.name}
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-300">
              {EVENT.tagline}
            </p>

            <Button
              className="mt-10 h-14 rounded-full px-8 text-base"
            >
              Get Your Pass →
            </Button>

          </div>

          {/* RIGHT */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
              Early Bird
            </p>

            <h2 className="mt-4 text-6xl font-black">
              ₹{EVENT.earlyBirdPrice}
            </h2>

            <p className="mt-2 text-zinc-400">
              Limited-Time Price
            </p>

            <div className="mt-10 space-y-5">

              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5 text-violet-400" />
                <span>
                  {EVENT.date} • {EVENT.day}
                </span>
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

          </div>

        </div>
      </Container>
    </section>
  );
}