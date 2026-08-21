import Navbar from "@/components/home/Navbar";
import Sponsors from "@/components/sponsors/Sponsors";
import Footer from "@/components/home/Footer";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-[#09040f] text-white">
      <Navbar />
      <Sponsors />
      <Footer />
    </main>
  );
}