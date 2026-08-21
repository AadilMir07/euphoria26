import Link from "next/link";

import Navbar from "@/components/home/Navbar";
import PageBackground from "@/components/ui/PageBackground";
import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

export default function SuccessPage() {
  return (
    <PageBackground>
      <Navbar />

      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center px-6 pt-32 pb-20">
        <GlassCard className="w-full p-12 text-center">
          <div className="mb-6 text-6xl">🎉</div>

          <h1 className="text-4xl font-black">
            Registration Submitted!
          </h1>

          <p className="mt-5 text-zinc-400 leading-7">
            Your payment screenshot has been uploaded successfully.
            <br />
            Our team will verify your payment and contact you soon.
          </p>

          <div className="mt-10 flex justify-center">
            <div className="w-72">
              <Link href="/">
                <GlowButton>
                  Back to Home
                </GlowButton>
              </Link>
            </div>
          </div>
        </GlassCard>
      </div>
    </PageBackground>
  );
}