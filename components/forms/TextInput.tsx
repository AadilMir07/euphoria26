type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  error?: string;
};

export default function TextInput({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  error,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className={`
          w-full
          rounded-2xl
          border
          px-5
          py-4
          bg-white/5
          text-white
          placeholder:text-zinc-500
          outline-none
          transition-all
          ${
            error
              ? "border-red-500"
              : "border-white/10 focus:border-violet-500"
          }
        `}
      />

      {error && (
        <p className="text-sm text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}