import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function GlassPanel({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(124,58,237,0.08)]
        transition-all
        duration-300
        ${className}
      `}
    >
      {children}
    </div>
  );
}