type Props = {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

export default function SelectInput({
  label,
  options,
  value,
  onChange,
  error,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full
          rounded-2xl
          border
          bg-white/5
          px-5
          py-4
          text-white
          outline-none
          transition-all
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-violet-500"
          }
        `}
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-zinc-900"
          >
            {option}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}