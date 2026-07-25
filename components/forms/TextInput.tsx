type Props = {
  label: string;
  placeholder: string;
  type?: string;
};

export default function TextInput({
  label,
  placeholder,
  type = "text",
}: Props) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-zinc-300">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/5
          px-5
          py-4
          text-white
          placeholder:text-zinc-500
          outline-none
          transition
          focus:border-violet-500
          focus:bg-white/10
        "
      />
    </div>
  );
}