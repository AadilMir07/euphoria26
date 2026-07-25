"use client";

type Props = {
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function CheckboxField({
  checked,
  onChange,
}: Props) {
  return (
    <label className="flex cursor-pointer items-start gap-3">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="
          mt-1
          h-5
          w-5
          rounded
          accent-violet-600
        "
      />

      <span className="text-sm leading-6 text-zinc-400">
        I have read and agree to the{" "}
        <a
          href="/terms"
          target="_blank"
          className="font-medium text-violet-400 hover:underline"
        >
          Terms & Conditions
        </a>
      </span>
    </label>
  );
}