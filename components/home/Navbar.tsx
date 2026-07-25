"use client";

import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed top-6 left-0 z-50 w-full">
      <Container>

        <div
          className="
            flex items-center justify-between
            rounded-full
            border border-white/10
            bg-white/5
            px-7 py-4
            backdrop-blur-xl
            shadow-[0_0_40px_rgba(139,92,246,0.08)]
        "
        >
          <h1 className="text-lg font-bold tracking-[0.25em] text-white">
            EUPHORIA
          </h1>

        <Link href="/register">
            <Button
                className="
                r ounded-full
                bg-violet-600
                px-6
                hover:bg-violet-500
                transition-all
                 "
                >
                Register
            </Button>
        </Link>

        </div>

      </Container>
    </header>
  );
}