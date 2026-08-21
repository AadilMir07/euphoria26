"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import { StoredRegistration } from "@/services/registrationService";

import {
  ArrowLeft,
  Mail,
  Phone,
  GraduationCap,
  School,
  Calendar,
  Hash,
} from "lucide-react";

type Props = {
  id: string;
  student: StoredRegistration;
};

export default function StudentDetails({
  id,
  student,
}: Props) {
  const router = useRouter();
  const [loadingStatus, setLoadingStatus] = useState<
    "Approved" | "Rejected" | null
  >(null);

  async function updateStatus(
    status: "Approved" | "Rejected"
  ) {
    if (loadingStatus) return;

    const confirmed = window.confirm(
      `Are you sure you want to ${status.toLowerCase()} this registration?`
    );

    if (!confirmed) return;

    try {
      setLoadingStatus(status);

      const response = await fetch(
        "/api/admin/registration",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id,
            status,
          }),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result?.error ||
            "Unable to update registration."
        );
      }

      const idToken = await getFreshIdToken();

      const emailResponse = await fetch(
        "/api/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${idToken}`,
          },
          body: JSON.stringify({
            email: student.email,
            name: student.fullName,
            status,
          }),
        }
      );

      const emailResult =
        await emailResponse.json();

      if (!emailResponse.ok || !emailResult.success) {
        alert(
          "Status updated, but the email could not be sent."
        );
      } else {
        alert(
          "Status updated and email sent successfully."
        );
      }

      router.push("/admin/dashboard");
      router.refresh();
    } catch (error: unknown) {
      console.error(
        "Failed to update registration:",
        error
      );

      const message =
        error instanceof Error
          ? error.message
          : "Something went wrong.";

      alert(message);
    } finally {
      setLoadingStatus(null);
    }
  }

  async function getFreshIdToken() {
    // The email API currently authenticates using the
    // Firebase client ID token. Keep this isolated here so
    // the registration update itself remains server-session
    // protected.
    const { auth } = await import("@/lib/firestore");

    const user = auth.currentUser;

    if (!user) {
      throw new Error(
        "Your admin login session has expired. Please sign in again."
      );
    }

    return user.getIdToken(true);
  }

  const statusStyle =
    student.paymentStatus === "Approved"
      ? "bg-emerald-500/15 text-emerald-300 border-emerald-500/20"
      : student.paymentStatus === "Rejected"
        ? "bg-red-500/15 text-red-300 border-red-500/20"
        : "bg-yellow-500/15 text-yellow-300 border-yellow-500/20";

  return (
    <main className="min-h-screen bg-black px-8 py-10 text-white">
      <button
        onClick={() => router.back()}
        className="mb-8 flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 transition hover:border-violet-500 hover:bg-white/10"
      >
        <ArrowLeft size={18} />
        Back
      </button>

      <div className="mb-10 rounded-3xl border border-white/10 bg-[#111111] p-8">
        <div className="flex items-center gap-6">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-4xl font-bold text-white">
            {student.fullName?.charAt(0)}
          </div>

          <div>
            <h1 className="text-4xl font-black">
              {student.fullName}
            </h1>

            <p className="mt-2 text-zinc-400">
              {student.school}
            </p>

            <div className="mt-4">
              <span
                className={`rounded-full border px-4 py-2 text-sm font-medium ${statusStyle}`}
              >
                {student.paymentStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-10 xl:grid-cols-[420px_1fr]">
        <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#111111]">
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-xl font-bold">
              Student Details
            </h2>
          </div>

          <Info
            icon={<Hash size={18} />}
            label="Enrollment"
            value={student.enrollmentId}
          />
          <Info
            icon={<Mail size={18} />}
            label="Email"
            value={student.email}
          />
          <Info
            icon={<Phone size={18} />}
            label="Phone"
            value={student.phone}
          />
          <Info
            icon={<School size={18} />}
            label="School"
            value={student.school}
          />
          <Info
            icon={<GraduationCap size={18} />}
            label="Programme"
            value={student.programme}
          />
          <Info
            icon={<Calendar size={18} />}
            label="Year"
            value={student.year}
          />

          <div className="border-t border-white/10 p-6">
            <div className="flex gap-4">
              <button
                disabled={loadingStatus !== null}
                onClick={() =>
                  updateStatus("Approved")
                }
                className="flex-1 rounded-2xl border border-emerald-500/30 bg-emerald-500/10 py-4 font-semibold text-emerald-300 transition hover:bg-emerald-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loadingStatus === "Approved"
                  ? "Approving..."
                  : "✓ Approve"}
              </button>

              <button
                disabled={loadingStatus !== null}
                onClick={() =>
                  updateStatus("Rejected")
                }
                className="flex-1 rounded-2xl border border-red-500/30 bg-red-500/10 py-4 font-semibold text-red-300 transition hover:bg-red-500/20 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loadingStatus === "Rejected"
                  ? "Rejecting..."
                  : "✕ Reject"}
              </button>
            </div>
          </div>
        </section>

        <section className="rounded-3xl border border-white/10 bg-[#111111]">
          <div className="border-b border-white/10 px-8 py-6">
            <h2 className="text-2xl font-bold">
              Payment Screenshot
            </h2>

            <p className="mt-2 text-zinc-400">
              Verify the payment proof before approving.
            </p>
          </div>

          <div className="p-8">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-black">
              <img
                src={student.paymentScreenshot}
                alt="Payment Screenshot"
                className="w-full max-h-[700px] object-contain"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function Info({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 px-6 py-5 last:border-b-0">
      <div className="flex items-center gap-3 text-zinc-400">
        {icon}
        <span>{label}</span>
      </div>

      <div className="max-w-[60%] text-right font-medium text-white">
        {value}
      </div>
    </div>
  );
}
