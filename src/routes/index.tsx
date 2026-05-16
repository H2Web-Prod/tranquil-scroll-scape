import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import VideoGrowSection from "@/components/VideoGrowSection";
import Empreendimentos from "@/components/Empreendimentos";
import { ChallengeSection, ConnectingSection } from "@/components/ArchitectsOffice";
import ImageGrowSection from "@/components/ImageGrowSection";
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
        <ChallengeSection />
        <ImageGrowSection />
        <ConnectingSection />
        <BlogGrid />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
