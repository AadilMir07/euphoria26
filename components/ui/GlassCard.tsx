import type { ReactNode } from "react";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        rounded-[2rem]
        border
        border-white/10
        bg-white/[0.035]
        shadow-[0_25px_80px_rgba(0,0,0,0.45)]
        backdrop-blur-xl
        transition-all
        duration-500
        ease-out
        hover:-translate-y-3
        hover:scale-[1.015]
        hover:rotate-[1deg]
        hover:border-violet-400/30
        hover:shadow-[0_35px_100px_rgba(139,92,246,0.25)]
        ${className}
      `}
    >
      {children}
    </div>
  );
}