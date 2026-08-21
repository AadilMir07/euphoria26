type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionHeader({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-sm text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}