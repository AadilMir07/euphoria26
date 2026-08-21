import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#050505] pt-24 pb-8 text-white">

      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-violet-700/10 blur-[160px]" />

      {/* Main Footer Content */}

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-3">

        {/* Brand */}

        <div>

          <h2 className="text-3xl font-black tracking-tight">
            EUPHORIA
          </h2>

          <p className="mt-5 max-w-sm text-base leading-7 text-zinc-400">
            One unforgettable night.
            <br />
            Endless memories.
            <br />
            Your college story starts here.
          </p>

          <Link
            href="/"
            className="
              mt-8
              inline-flex
              items-center
              gap-2
              text-sm
              font-semibold
              text-violet-300
              transition-all
              duration-300
              hover:gap-3
              hover:text-violet-200
            "
          >
            Back to home
            <ArrowUpRight className="h-4 w-4" />
          </Link>

        </div>

        {/* Event */}

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
            EUPHORIA '26
          </p>

          <h3 className="mt-5 text-2xl font-black">
            The night you'll remember.
          </h3>

          <div className="mt-7 space-y-5">

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10">
                <MapPin className="h-4 w-4 text-violet-300" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Venue
                </p>

                <p className="mt-1 text-sm leading-6 text-zinc-500">
                  Euphoria '26 Event Venue
                </p>
              </div>

            </div>

            <div className="flex items-start gap-4">

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10">
                <Phone className="h-4 w-4 text-violet-300" />
              </div>

              <div>
                <p className="text-sm font-medium text-white">
                  Contact
                </p>

                <p className="mt-1 text-sm text-zinc-500">
                  Event Support
                </p>
              </div>

            </div>

          </div>

        </div>

        {/* Connect */}

        <div>

          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">
            Stay Connected
          </p>

          <h3 className="mt-5 text-2xl font-black">
            Follow the journey.
          </h3>

          <p className="mt-4 max-w-sm text-sm leading-7 text-zinc-500">
            Stay updated with announcements, behind-the-scenes moments and
            everything coming your way at Euphoria '26.
          </p>

          <div className="mt-7 flex gap-3">

            <a
              href="#"
              aria-label="Instagram"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-violet-500/10
                hover:text-violet-300
              "
            >
              <Instagram className="h-5 w-5" />
            </a>

            <a
              href="mailto:hello@euphoria26.com"
              aria-label="Email"
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white/5
                text-zinc-400
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-500/40
                hover:bg-violet-500/10
                hover:text-violet-300
              "
            >
              <Mail className="h-5 w-5" />
            </a>

          </div>

        </div>

      </div>

      {/* Bottom Copyright */}

      <div className="relative mx-auto mt-20 max-w-7xl border-t border-white/10 px-6 pt-8">

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

          <p>
            © 2026 EUPHORIA. All rights reserved.
          </p>

          <p>
            Designed by Aadil Mir
          </p>

        </div>

      </div>

    </footer>
  );
}