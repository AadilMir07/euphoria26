import { LucideIcon } from "lucide-react";

interface HighlightCardProps {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export default function HighlightCard({
  icon: Icon,
  title,
  desc,
}: HighlightCardProps) {
  return (
    <div
      className="
        group relative flex min-h-[240px] flex-col
        overflow-hidden rounded-3xl
        border border-white/[0.08]
        bg-white/[0.025]
        p-6
        backdrop-blur-xl
        transition-all duration-500 ease-out

        hover:-translate-y-2
        hover:border-violet-400/30
        hover:bg-white/[0.045]
        hover:shadow-[0_25px_80px_rgba(139,92,246,0.14)]

        sm:min-h-[280px]
        sm:p-8
        lg:min-h-[300px]
        lg:p-10
      "
    >
      {/* Subtle glow */}
      <div
        className="
          pointer-events-none absolute
          -right-16 -top-16
          h-40 w-40
          rounded-full
          bg-violet-600/10
          blur-3xl
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />

      {/* Icon */}
      <div
        className="
          relative z-10
          flex h-12 w-12
          items-center justify-center
          rounded-2xl
          border border-violet-400/10
          bg-violet-500/10
          text-violet-300
          transition-all duration-500

          group-hover:scale-110
          group-hover:border-violet-400/20
          group-hover:bg-violet-500/15
        "
      >
        <Icon
          size={22}
          strokeWidth={1.8}
          className="transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 mt-auto pt-12">
        <h3
          className="
            text-xl font-bold tracking-tight text-white
            sm:text-2xl
            lg:text-[27px]
          "
        >
          {title}
        </h3>

        <p
          className="
            mt-3 max-w-xl
            text-sm leading-6 text-zinc-400
            sm:text-base sm:leading-7
          "
        >
          {desc}
        </p>
      </div>

      {/* Bottom accent */}
      <div
        className="
          absolute bottom-0 left-8 right-8
          h-px
          bg-gradient-to-r
          from-transparent
          via-violet-500/30
          to-transparent
          opacity-0
          transition-opacity duration-500
          group-hover:opacity-100
        "
      />
    </div>
  );
}