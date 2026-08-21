"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, ShieldCheck } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

import { EVENT } from "@/constants/event";

import { uploadPaymentScreenshot } from "@/services/cloudinaryService";
import {
  saveRegistration,
  enrollmentExists,
} from "@/services/registrationService";

import { useRegistrationStore } from "@/store/registrationStore";

interface PaymentCardProps {
  selectedFile: File | null;
}

export default function PaymentCard({
  selectedFile,
}: PaymentCardProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [hasHydrated, setHasHydrated] = useState(false);

  const {
    registration,
    clearRegistration,
  } = useRegistrationStore();

  useEffect(() => {
    if (useRegistrationStore.persist.hasHydrated()) {
      setHasHydrated(true);
      return;
    }

    const unsubscribe =
      useRegistrationStore.persist.onFinishHydration(() => {
        setHasHydrated(true);
      });

    return unsubscribe;
  }, []);

  async function handleCompleteRegistration() {
    if (loading) return;

    if (!hasHydrated) {
      alert(
        "Please wait a moment while your registration details load."
      );
      return;
    }

    if (
      !registration ||
      !registration.fullName ||
      !registration.enrollmentId ||
      !registration.phone ||
      !registration.email ||
      !registration.school ||
      !registration.programme ||
      !registration.year
    ) {
      alert(
        "Your registration details are missing. Please go back and complete the registration form again."
      );

      router.push("/register");
      return;
    }

    if (!selectedFile) {
      alert("Please upload your payment screenshot first.");
      return;
    }

    try {
      setLoading(true);

      const alreadyRegistered =
        await enrollmentExists(
          registration.enrollmentId.trim()
        );

      if (alreadyRegistered) {
        alert(
          "This Enrollment ID is already registered. Please contact the EUPHORIA team if you believe this is a mistake."
        );
        return;
      }

      const uploadResult =
        await uploadPaymentScreenshot(selectedFile);

      if (!uploadResult?.secure_url) {
        throw new Error(
          "Payment screenshot upload failed."
        );
      }

      await saveRegistration({
        ...registration,
        enrollmentId:
          registration.enrollmentId.trim(),
        fullName: registration.fullName.trim(),
        phone: registration.phone.trim(),
        email: registration.email.trim(),
        school: registration.school.trim(),
        programme: registration.programme.trim(),
        year: registration.year.trim(),
        paymentScreenshot:
          uploadResult.secure_url,
        paymentStatus: "Pending",
      });

      clearRegistration();

      router.push("/success");
    } catch (error) {
      console.error(
        "Registration/payment submission failed:",
        error
      );

      alert(
        "We couldn't complete your registration right now. Please check your internet connection and try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <GlassCard className="p-8 md:p-10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.35em] text-violet-400">
            Payment Details
          </p>

          <h2 className="mt-4 text-4xl font-black text-white">
            ₹{EVENT.price}
          </h2>
        </div>

        <div className="flex shrink-0 items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-2">
          <ShieldCheck className="h-4 w-4 text-emerald-400" />

          <span className="text-xs font-medium text-emerald-300">
            Secure
          </span>
        </div>
      </div>

      <p className="mt-3 text-sm leading-6 text-zinc-500">
        Complete the payment using the details below, then upload
        your payment screenshot.
      </p>

      <div className="my-8 h-px bg-white/10" />

      <div className="space-y-6">
        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            UPI ID
          </p>

          <p className="mt-2 break-all font-medium text-white">
            {EVENT.upiId}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.25em] text-zinc-600">
            Payment Note
          </p>

          <p className="mt-2 font-medium text-white">
            {EVENT.paymentNote}
          </p>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-violet-500/15 bg-violet-500/[0.04] p-4">
        <div className="flex gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-violet-400" />

          <div>
            <p className="text-sm font-medium text-zinc-200">
              Almost there
            </p>

            <p className="mt-1 text-xs leading-5 text-zinc-500">
              After you submit, your payment screenshot will be
              uploaded and your registration will be sent for
              verification.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <GlowButton
          disabled={loading || !hasHydrated}
          onClick={handleCompleteRegistration}
        >
          {loading
            ? "Processing Registration..."
            : !hasHydrated
              ? "Loading Your Details..."
              : "Complete Registration"}
        </GlowButton>
      </div>

      <p className="mt-4 text-center text-xs leading-5 text-zinc-600">
        Please don't close or refresh this page while your
        registration is being submitted.
      </p>
    </GlassCard>
  );
}