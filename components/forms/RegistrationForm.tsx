"use client";

import { useMemo, useState } from "react";

import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckboxField from "./CheckboxField";

import { UI } from "@/constants/ui";
import { SCHOOLS } from "@/constants/schools";
import { YEARS } from "@/constants/years";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    school: "",
    course: "",
    year: "",
  });

  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const phoneChange = (value: string) => {
    updateField(
      "phone",
      value.replace(/\D/g, "").slice(0, 10)
    );
  };

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
    formData.email
  );

  const formValid = useMemo(() => {
    return (
      formData.fullName.trim().length >= 3 &&
      formData.phone.length === 10 &&
      emailValid &&
      formData.school !== "" &&
      formData.course.trim() !== "" &&
      formData.year !== "" &&
      acceptedTerms
    );
  }, [formData, acceptedTerms, emailValid]);

  return (
    <GlassCard className="p-8 md:p-10">

      <h1 className="text-4xl font-black">
        {UI.register.title}
      </h1>

      <p className="mt-3 text-zinc-400">
        {UI.register.subtitle}
      </p>

      <div className="mt-10 space-y-6">

        <TextInput
          label="Full Name"
          placeholder="Enter your full name"
          value={formData.fullName}
          onChange={(v) => updateField("fullName", v)}
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          value={formData.phone}
          onChange={phoneChange}
          type="tel"
        />

        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          value={formData.email}
          onChange={(v) => updateField("email", v)}
          type="email"
        />

        <SelectInput
          label="School"
          options={SCHOOLS}
          value={formData.school}
          onChange={(v) => updateField("school", v)}
        />

        <TextInput
          label="Course"
          placeholder="e.g. BCA, B.Tech CSE"
          value={formData.course}
          onChange={(v) => updateField("course", v)}
        />

        <SelectInput
          label="Year"
          options={YEARS}
          value={formData.year}
          onChange={(v) => updateField("year", v)}
        />

      </div>

      <div className="mt-8">
        <CheckboxField
          checked={acceptedTerms}
          onChange={setAcceptedTerms}
        />
      </div>

      <div className="mt-10">
        <GlowButton disabled={!formValid}>
          {UI.register.button}
        </GlowButton>
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        Your information is used solely for managing registrations for EUPHORIA '26.
      </p>

    </GlassCard>
  );
}