import Navbar from "@/components/home/Navbar";
import VenueHero from "@/components/venue/VenueHero";
import VenueHighlights from "@/components/venue/VenueHighlights";
import VenueGallery from "@/components/venue/VenueGallery";
import VenueMap from "@/components/venue/VenueMap";
import Footer from "@/components/home/Footer";

export default function VenuePage() {
  return (
    <main className="bg-[#09040f] text-white">
      <Navbar />
      <VenueHero />
      <VenueHighlights />
      <VenueGallery />
      <VenueMap />
      <Footer />
    </main>
  );
}