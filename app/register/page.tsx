import Navbar from "@/components/home/Navbar";
import PageBackground from "@/components/ui/PageBackground";
import RegistrationForm from "@/components/forms/RegistrationForm";

export default function RegisterPage() {
  return (
    <PageBackground>
      <Navbar />

      <main className="mx-auto max-w-6xl px-6 pb-20 pt-32 sm:pt-36">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/[0.08] px-5 py-2 text-[9px] font-semibold uppercase tracking-[0.4em] text-violet-300 backdrop-blur-xl">
            <span>✦</span>
            EUPHORIA '26 REGISTRATION
          </div>

          <h1 className="mt-7 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl md:text-7xl">
            Reserve Your
            <br />
            <span className="bg-gradient-to-r from-violet-300 via-fuchsia-300 to-violet-500 bg-clip-text text-transparent">
              Euphoria Pass.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-zinc-500 sm:text-base sm:leading-8">
            One night. New faces. New friends.
            <br className="hidden sm:block" />
            Secure your spot for Euphoria '26.
          </p>
        </div>

        {/* Registration */}
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16">
          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 rounded-[60px] bg-violet-600/[0.08] blur-[90px]" />

            <div className="relative rounded-[32px] border border-white/[0.08] bg-black/20 p-1 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-xl">
              <RegistrationForm />
            </div>
          </div>
        </div>

        {/* Event details */}
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-3 border-y border-white/[0.08]">
          <div className="py-6 text-center">
            <p className="text-xl font-black sm:text-2xl">5</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-zinc-600 sm:text-[10px]">
              September
            </p>
          </div>

          <div className="border-x border-white/[0.08] py-6 text-center">
            <p className="text-xl font-black text-violet-300 sm:text-2xl">
              7 PM
            </p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-zinc-600 sm:text-[10px]">
              Onwards
            </p>
          </div>

          <div className="py-6 text-center">
            <p className="text-xl font-black sm:text-2xl">₹899</p>
            <p className="mt-1 text-[9px] uppercase tracking-[0.2em] text-zinc-600 sm:text-[10px]">
              Pass
            </p>
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-xl text-center text-xs leading-6 text-zinc-600">
          5 September 2026 · Mad Over Grills - Restaurant & Banquet Hall,
          Gotri
        </p>
      </main>
    </PageBackground>
  );
}
