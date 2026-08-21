import Navbar from "@/components/home/Navbar";
import Help from "@/components/help/Help";
import Footer from "@/components/home/Footer";

export default function HelpPage() {
  return (
    <main className="min-h-screen bg-[#09040f] text-white">
      <Navbar />
      <Help />
      <Footer />
    </main>
  );
}