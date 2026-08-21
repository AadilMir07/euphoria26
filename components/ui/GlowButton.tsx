"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

export default function GlowButton({
  children,
  disabled = false,
  onClick,
  type = "button",
}: Props) {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`
        h-14
        w-full
        rounded-full
        px-8
        text-base
        transition-all
        duration-300
        ${
          disabled
            ? "cursor-not-allowed bg-zinc-700 text-zinc-400"
            : "bg-violet-600 hover:scale-[1.02] hover:bg-violet-500 hover:shadow-[0_0_30px_rgba(139,92,246,0.45)]"
        }
      `}
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}