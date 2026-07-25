type SectionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({
  children,
  className = "",
}: SectionProps) {
  return (
    <section className={`py-20 md:py-28 ${className}`}>
      {children}
    </section>
  );
}