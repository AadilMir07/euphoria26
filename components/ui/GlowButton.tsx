"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";

interface Props {
  children: React.ReactNode;
}

export default function GlowButton({ children }: Props) {
  return (
    <Button
      className="
        h-14
        rounded-full
        bg-violet-600
        px-8
        text-base
        transition-all
        duration-300
        hover:scale-105
        hover:bg-violet-500
        hover:shadow-[0_0_30px_rgba(139,92,246,0.4)]
      "
    >
      {children}
      <ArrowRight className="ml-2 h-5 w-5" />
    </Button>
  );
}