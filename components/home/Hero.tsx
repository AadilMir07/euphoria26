import TicketCard from "@/components/ui/TicketCard";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { EVENT } from "@/constants/event";
import { UI } from "@/constants/ui";

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
             {UI.hero.badge}
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
              {UI.hero.cta}
            </Button>

          </div>

          {/* RIGHT */}
          {/* RIGHT */}
        <TicketCard />

        </div>
      </Container>
    </section>
  );
}