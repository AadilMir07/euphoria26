"use client";

import { exportRegistrations } from "@/services/excelService";
import { StoredRegistration } from "@/services/registrationService";

type Props = {
  registrations: StoredRegistration[];
};

export default function ExportExcelButton({
  registrations,
}: Props) {
  return (
    <button
      onClick={() =>
        exportRegistrations(registrations)
      }
      className="rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white transition hover:bg-emerald-500"
    >
      Export Excel
    </button>
  );
}