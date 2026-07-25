import Link from "next/link";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function CheckboxField({
  checked,
  onChange,
}: Props) {
  return (
    <label className="flex items-start gap-3 text-sm text-zinc-300">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 h-4 w-4 accent-violet-600"
      />

      <span>
        I have read and agree to the{" "}
        <Link
          href="/terms"
          className="text-violet-400 hover:underline"
        >
          Terms & Conditions
        </Link>
      </span>
    </label>
  );
}