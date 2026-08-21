"use client";

import { useState } from "react";
import Link from "next/link";

import Navbar from "@/components/home/Navbar";
import PageBackground from "@/components/ui/PageBackground";

import UploadBox from "@/components/payment/UploadBox";
import PaymentCard from "@/components/payment/PaymentCard";

export default function PaymentPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <PageBackground>
      <Navbar />

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-32 md:pt-36">
        {/* Header */}
        <section className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center rounded-full border border-violet-500/30 bg-violet-500/5 px-5 py-2">
            <span className="text-[11px] font-semibold tracking-[0.32em] text-violet-300">
              ✦ EUPHORIA '26 PAYMENT
            </span>
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight text-white sm:text-5xl md:text-6xl">
            Complete Your{" "}
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
              Registration.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-zinc-400 md:text-lg">
            Complete your payment and upload the payment proof to secure your
            spot at EUPHORIA '26.
          </p>
        </section>

        {/* Payment section */}
        <section className="mx-auto mt-14 max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-10">
            <UploadBox onFileSelect={setSelectedFile} />

            <PaymentCard selectedFile={selectedFile} />
          </div>
        </section>

        {/* Back link */}
        <div className="mt-10 text-center">
          <Link
            href="/register"
            className="text-sm font-medium text-zinc-500 transition-colors hover:text-violet-300"
          >
            ← Back to registration
          </Link>
        </div>
      </main>
    </PageBackground>
  );
}