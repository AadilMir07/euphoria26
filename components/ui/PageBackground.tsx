type PageBackgroundProps = {
  children: React.ReactNode;
};

export default function PageBackground({
  children,
}: PageBackgroundProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050505] text-white">
      {/* Purple Glow */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/20 blur-[180px]" />

      {/* Gold Accent */}
      <div className="absolute right-20 top-32 h-60 w-60 rounded-full bg-yellow-400/10 blur-[140px]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-violet-500/10 blur-[140px]" />

      <div className="relative z-10">
        {children}
      </div>
    </main>
  );
}