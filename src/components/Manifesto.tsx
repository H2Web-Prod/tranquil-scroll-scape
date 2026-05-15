import ScrollReveal from "./ScrollReveal";

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-white py-[100px] md:py-[200px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <p className="text-[#b85c3c] font-medium text-[13px] tracking-[0.3em] uppercase mb-8">
          — Manifesto
        </p>
        <ScrollReveal
          as="h2"
          className="font-light text-[#000000] leading-[1.2] mb-12"
        >
          {`Blue Heaven Building with Nature`}
        </ScrollReveal>
        <div style={{ fontSize: "clamp(18px, 1.6vw, 24px)", lineHeight: 1.6 }}>
          <ScrollReveal as="p" className="font-normal">
            Com a filosofia "Building With Nature", colocamos nossa inteligência construtiva e tecnologia a serviço do equilíbrio da vida, desenvolvendo empreendimentos que se tornam obras de artes esculpidas com uma abordagem artesanal e única, transformando espaços em ambientes que enaltecem a natureza e a modernidade concebida pela vida humana.
          </ScrollReveal>
        </div>
      </div>
      <style>{`
        section#manifesto h2 { font-size: clamp(40px, 5vw, 64px); }
      `}</style>
    </section>
  );
}
