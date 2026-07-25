type Props = {
  label: string;
  options: string[];
};

export default function SelectInput({
  label,
  options,
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <select
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          text-white
          outline-none
          transition
          focus:border-violet-500
          focus:bg-white/10
        "
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
            className="bg-[#111]"
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}