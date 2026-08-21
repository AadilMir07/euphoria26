import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import Navbar from "@/components/home/Navbar";
import Footer from "@/components/home/Footer";
import { EVENT } from "@/constants/event";

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#09040f] text-white">
      <Navbar />

      <div className="mx-auto max-w-3xl px-6 pb-24 pt-36">
        <Link
          href="/register"
          className="mb-10 inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-violet-300"
        >
          <ArrowLeft size={16} />
          Back to Registration
        </Link>

        <h1 className="text-4xl font-black md:text-5xl">
          Terms &amp; Conditions
        </h1>

        <p className="mt-4 text-zinc-400">
          Please read the following carefully before registering
          for {EVENT.name}. By completing your registration, you
          agree to all the terms below.
        </p>

        <div className="mt-12 space-y-10">
          <Section title="1. Registration & Eligibility">
            <p>
              Registration for {EVENT.name} is open to currently
              enrolled students. You must provide accurate details,
              including your full name, enrollment ID, and contact
              information, exactly as they appear on your student
              records. Registrations with incomplete or incorrect
              details may be rejected without a refund.
            </p>
          </Section>

          <Section title="2. Payment & Verification">
            <p>
              Your pass is only confirmed once your payment
              screenshot has been reviewed and manually approved by
              the organizing team. Submitting a payment screenshot
              does not guarantee immediate confirmation — please
              allow time for verification. You will be notified by
              email once your status changes to Approved or
              Rejected.
            </p>

            <p className="mt-4">
              Ensure the payment is made to the exact UPI ID shown
              on the payment page, for the correct amount. Payments
              made to any other UPI ID or account are not the
              organizers&apos; responsibility.
            </p>
          </Section>

          <Section title="3. Refund Policy">
            <p>
              All registrations are final. Passes are
              non-refundable and non-transferable to another person
              once approved, except in the case of event
              cancellation by the organizers, in which case a full
              refund will be issued.
            </p>
          </Section>

          <Section title="4. Entry & Identification">
            <p>
              Entry to the venue is subject to presenting a valid
              approved pass along with your original college ID
              card. Entry may be denied if the details don&apos;t
              match your registration, or if you arrive without a
              valid ID.
            </p>
          </Section>

          <Section title="5. Code of Conduct">
            <p>
              All attendees are expected to behave respectfully
              towards other guests, staff, and venue property.
              Consumption of illegal substances, physical
              altercations, harassment, or vandalism will result in
              immediate removal from the venue without a refund,
              and may be reported to college authorities.
            </p>
          </Section>

          <Section title="6. Event Changes">
            <p>
              The organizing team reserves the right to make
              reasonable changes to the event schedule, lineup, or
              minor venue arrangements if required. Any significant
              change to the date or venue will be communicated to
              registered attendees in advance.
            </p>
          </Section>

          <Section title="7. Media Consent">
            <p>
              Photos and videos may be captured during the event
              for official promotional use on social media and
              future marketing. By attending, you consent to being
              featured in this media unless you inform the
              organizing team in writing beforehand.
            </p>
          </Section>

          <Section title="8. Contact">
            <p>
              For any questions regarding these terms, registration
              issues, or payment verification, please reach out to
              the organizing team through the contact details
              listed in the footer of this website.
            </p>
          </Section>
        </div>

        <p className="mt-16 text-sm text-zinc-500">
          Last updated for {EVENT.name} — {EVENT.date}.
        </p>
      </div>

      <Footer />
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-3 leading-7 text-zinc-400">{children}</div>
    </section>
  );
}
