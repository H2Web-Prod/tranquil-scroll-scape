import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import VideoGrowSection from "@/components/VideoGrowSection";
import Empreendimentos from "@/components/Empreendimentos";
import ArchitectsOffice, { ConnectingHumans } from "@/components/ArchitectsOffice";
import HorizontalCarousel from "@/components/HorizontalCarousel";
import DetailsGrid from "@/components/DetailsGrid";
import AboutBlueHeaven from "@/components/AboutBlueHeaven";
import BlogGrid from "@/components/BlogGrid";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Blue Heaven — Building with Nature" },
      {
        name: "description",
        content:
          "Construtora de imóveis exclusivos em Itajaí. Empreendimentos esculpidos com a filosofia Building With Nature.",
      },
      { property: "og:title", content: "Blue Heaven — Building with Nature" },
      {
        property: "og:description",
        content:
          "Empreendimentos exclusivos com a filosofia Building With Nature em Santa Catarina.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <div className="bg-white relative">
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <VideoGrowSection />
        <Empreendimentos />
        <ArchitectsOffice />
        <HorizontalCarousel />
        <ConnectingHumans />
        <DetailsGrid />
        <AboutBlueHeaven />
        <BlogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
