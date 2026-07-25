import Navbar from "@/components/home/Navbar";
import PageBackground from "@/components/ui/PageBackground";
import TicketCard from "@/components/ui/TicketCard";
import RegistrationForm from "@/components/forms/RegistrationForm";

export default function RegisterPage() {
  return (
    <PageBackground>
      <Navbar />

      <div className="mx-auto max-w-7xl px-6 pt-36 pb-20">
        <div className="grid gap-12 lg:grid-cols-2">
          <RegistrationForm />
          <TicketCard />
        </div>
      </div>
    </PageBackground>
  );
}