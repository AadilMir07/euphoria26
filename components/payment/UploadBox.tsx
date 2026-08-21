"use client";

import Image from "next/image";
import { Check, FileImage, Upload, X } from "lucide-react";
import { useRef, useState } from "react";

interface UploadBoxProps {
  onFileSelect: (file: File) => void;
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const ALLOWED_TYPES = [
  "image/png",
  "image/jpeg",
  "image/jpg",
];

export default function UploadBox({
  onFileSelect,
}: UploadBoxProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const handleFile = (file: File | undefined) => {
    if (!file) return;

    setError("");

    if (!ALLOWED_TYPES.includes(file.type)) {
      setFileName("");
      setError("Please upload a PNG or JPG image.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setFileName("");
      setError("Image must be smaller than 5 MB.");
      return;
    }

    setFileName(file.name);
    onFileSelect(file);
  };

  const handleRemove = () => {
    setFileName("");
    setError("");

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="w-full">
      {/* QR Code */}
      <div className="mb-8 flex flex-col items-center">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-4 shadow-2xl shadow-violet-950/20">
          <Image
            src="/images/qr/payment-qr.jpeg"
            alt="EUPHORIA '26 payment QR code"
            width={240}
            height={240}
            className="rounded-2xl bg-white p-3"
            priority
          />
        </div>

        <p className="mt-4 text-sm text-zinc-400">
          Scan using any UPI app
        </p>

        <p className="mt-1 text-xs text-zinc-600">
          Complete the payment before uploading your screenshot
        </p>
      </div>

      {/* Hidden file input */}
      <input
        ref={inputRef}
        type="file"
        accept="image/png,image/jpeg,image/jpg"
        className="hidden"
        onChange={(event) => {
          handleFile(event.target.files?.[0]);
        }}
      />

      {/* Upload area */}
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className="
          group
          flex
          min-h-[260px]
          w-full
          flex-col
          items-center
          justify-center
          rounded-3xl
          border
          border-dashed
          border-white/15
          bg-white/[0.03]
          px-8
          py-12
          text-center
          transition-all
          duration-300
          hover:border-violet-500/60
          hover:bg-violet-500/[0.04]
          focus:outline-none
          focus:ring-2
          focus:ring-violet-500/50
          focus:ring-offset-2
          focus:ring-offset-[#09060f]
        "
      >
        {fileName ? (
          <>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10">
              <Check className="h-7 w-7 text-emerald-400" />
            </div>

            <p className="font-medium text-white">
              Payment screenshot selected
            </p>

            <div className="mt-3 flex max-w-full items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2">
              <FileImage className="h-4 w-4 shrink-0 text-violet-400" />

              <span className="max-w-[260px] truncate text-sm text-zinc-300">
                {fileName}
              </span>
            </div>

            <p className="mt-4 text-xs text-zinc-500">
              Click to replace the screenshot
            </p>
          </>
        ) : (
          <>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 transition-transform duration-300 group-hover:scale-110">
              <Upload className="h-7 w-7 text-violet-400" />
            </div>

            <p className="font-medium text-white">
              Upload Payment Screenshot
            </p>

            <p className="mt-2 text-sm text-zinc-500">
              Click here to choose your screenshot
            </p>

            <p className="mt-4 text-xs tracking-wide text-zinc-600">
              PNG • JPG • JPEG • MAX 5 MB
            </p>
          </>
        )}
      </button>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-2xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-sm text-red-300">
          <X className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Remove selected file */}
      {fileName && (
        <button
          type="button"
          onClick={handleRemove}
          className="mt-4 w-full text-center text-sm text-zinc-500 transition-colors hover:text-red-300"
        >
          Remove selected screenshot
        </button>
      )}
    </div>
  );
}