import Navbar from "@/components/home/Navbar";
import Hero from "@/components/home/Hero";
import CollegeEra from "@/components/home/CollegeEra";
import PhotoStrip from "@/components/home/PhotoStrip";
import CinematicDivider from "@/components/home/CinematicDivider";
import EventExperience from "@/components/home/Experience/EventExperience";
import Footer from "@/components/home/Footer";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#09040f]">
      <Loader />
      <Navbar />
      <main className="bg-[#09040f] text-white">
        <Hero />
        <CollegeEra />
        <PhotoStrip />
        <CinematicDivider />
        <EventExperience />
        <Footer />
      </main>
    </div>
  );
}
