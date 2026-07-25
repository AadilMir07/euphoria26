"use client";

import { useState } from "react";

import GlassCard from "@/components/ui/GlassCard";
import GlowButton from "@/components/ui/GlowButton";

import TextInput from "./TextInput";
import SelectInput from "./SelectInput";
import CheckboxField from "./CheckboxField";

import { UI } from "@/constants/ui";
import { SCHOOLS } from "@/constants/schools";
import { YEARS } from "@/constants/years";

export default function RegistrationForm() {
  const [acceptedTerms, setAcceptedTerms] = useState(false);

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
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter your phone number"
          type="tel"
        />

        <TextInput
          label="Email Address"
          placeholder="Enter your email"
          type="email"
        />

        <SelectInput
          label="School"
          options={SCHOOLS}
        />

        <TextInput
          label="Course"
          placeholder="e.g. BCA, B.Tech CSE"
        />

        <SelectInput
          label="Year"
          options={YEARS}
        />

      </div>

      <div className="mt-8">
        <CheckboxField
          checked={acceptedTerms}
          onChange={setAcceptedTerms}
        />
      </div>

      <div className="mt-10">
        <GlowButton>
          {UI.register.button}
        </GlowButton>
      </div>

      <p className="mt-6 text-sm text-zinc-500">
        Your information is used solely for managing registrations for EUPHORIA '26.
      </p>

    </GlassCard>
  );
}