"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Check, ShieldCheck, Sparkles } from "lucide-react";

import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckboxField from "./CheckboxField";

import { UI } from "@/constants/ui";
import { SCHOOLS } from "@/constants/schools";
import { YEARS } from "@/constants/years";

import { useRegistrationStore } from "@/store/registrationStore";

export default function RegistrationForm() {
  const router = useRouter();
  const { setRegistration } = useRegistrationStore();

  const [formData, setFormData] = useState({
    fullName: "",
    enrollmentId: "",
    phone: "",
    email: "",
    school: "",
    programme: "",
    year: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [errors, setErrors] = useState<
    Partial<Record<keyof typeof formData, string>>
  >({});
  const [termsError, setTermsError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isContinuing, setIsContinuing] = useState(false);

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (submitted) {
      setErrors((prev) => ({
        ...prev,
        [field]: undefined,
      }));
    }
  };

  const phoneChange = (value: string) => {
    updateField("phone", value.replace(/\D/g, "").slice(0, 10));
  };

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validate() {
    const next: Partial<Record<keyof typeof formData, string>> = {};

    if (!formData.fullName.trim()) {
      next.fullName = "Full name is required.";
    }

    if (formData.phone.length !== 10) {
      next.phone = "Enter a valid 10-digit phone number.";
    }

    if (!emailRegex.test(formData.email.trim())) {
      next.email = "Enter a valid email address.";
    }

    if (!formData.enrollmentId.trim()) {
      next.enrollmentId = "Enrollment ID is required.";
    }

    if (!formData.school) {
      next.school = "Please select your school.";
    }

    if (!formData.programme.trim()) {
      next.programme = "Programme is required.";
    }

    if (!formData.year) {
      next.year = "Please select your year.";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }

  const handleContinue = () => {
    setSubmitted(true);

    const valid = validate();

    if (!valid) {
      return;
    }

    if (!acceptedTerms) {
      setTermsError("Please accept the Terms & Conditions to continue.");
      return;
    }

    setTermsError("");
    setIsContinuing(true);

    try {
      setRegistration(formData);
      router.push("/payment");
    } catch (err) {
      console.error("Failed to continue to payment:", err);
      setIsContinuing(false);
      alert(
        "Something went wrong saving your details. If you're in Private/Incognito mode, please switch to a normal browser tab and try again."
      );
    }
  };

  return (
    <GlassCard className="p-6 sm:p-8 md:p-10">
      {/* Form header */}
      <div className="border-b border-white/[0.07] pb-7">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10">
              <Sparkles className="h-4 w-4 text-violet-300" />
            </div>

            <div>
              <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-violet-300">
                EUPHORIA '26
              </p>
              <p className="mt-1 text-xs text-zinc-500">
                Registration
              </p>
            </div>
          </div>

          <span className="hidden rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-emerald-300 sm:inline-flex">
            <Check className="mr-1.5 h-3 w-3" />
            Secure
          </span>
        </div>

        <h2 className="mt-7 text-3xl font-black tracking-[-0.03em] sm:text-4xl">
          {UI.register.title}
        </h2>

        <p className="mt-3 max-w-lg text-sm leading-6 text-zinc-500">
          {UI.register.subtitle}
        </p>
      </div>

      {/* Fields */}
      <div className="mt-8">
        <div className="mb-5 flex items-center gap-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            Personal details
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="space-y-6">
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            value={formData.fullName}
            onChange={(v) => updateField("fullName", v)}
            error={submitted ? errors.fullName : undefined}
          />

          <TextInput
            label="Phone Number"
            placeholder="Enter your phone number"
            type="tel"
            value={formData.phone}
            onChange={phoneChange}
            error={submitted ? errors.phone : undefined}
          />

          <TextInput
            label="Email Address"
            placeholder="Enter your email"
            type="email"
            value={formData.email}
            onChange={(v) => updateField("email", v)}
            error={submitted ? errors.email : undefined}
          />
        </div>

        <div className="mb-5 mt-9 flex items-center gap-3">
          <span className="text-[9px] font-semibold uppercase tracking-[0.3em] text-zinc-600">
            College details
          </span>
          <div className="h-px flex-1 bg-white/[0.06]" />
        </div>

        <div className="space-y-6">
          <TextInput
            label="Enrollment ID"
            placeholder="Enter your Enrollment ID"
            value={formData.enrollmentId}
            onChange={(v) => updateField("enrollmentId", v)}
            error={submitted ? errors.enrollmentId : undefined}
          />

          <SelectInput
            label="School"
            options={SCHOOLS}
            value={formData.school}
            onChange={(v) => updateField("school", v)}
            error={submitted ? errors.school : undefined}
          />

          <TextInput
            label="Programme"
            placeholder="e.g. BCA, B.Tech CSE"
            value={formData.programme}
            onChange={(v) => updateField("programme", v)}
            error={submitted ? errors.programme : undefined}
          />

          <SelectInput
            label="Year"
            options={YEARS}
            value={formData.year}
            onChange={(v) => updateField("year", v)}
            error={submitted ? errors.year : undefined}
          />
        </div>
      </div>

      {/* Terms */}
      <div className="mt-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-4">
        <CheckboxField
          checked={acceptedTerms}
          onChange={(checked) => {
            setAcceptedTerms(checked);
            if (checked) setTermsError("");
          }}
        />

        {termsError && (
          <p className="mt-3 text-xs text-red-400">{termsError}</p>
        )}
      </div>

      {/* CTA */}
      <div className="mt-5">
        <GlowButton onClick={handleContinue}>
          {isContinuing ? "Opening Payment..." : "Continue to Payment"}
        </GlowButton>
      </div>

      {/* Trust note */}
      <div className="mt-6 flex items-start gap-3 border-t border-white/[0.06] pt-6">
        <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-violet-400" />

        <p className="text-xs leading-5 text-zinc-600">
          Your information is used solely for managing registrations for
          EUPHORIA '26.
        </p>
      </div>
    </GlassCard>
  );
}
