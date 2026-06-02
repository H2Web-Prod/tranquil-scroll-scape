import ScrollReveal from "./ScrollReveal";

export default function Manifesto() {
  return (
    <section id="manifesto" className="bg-white py-[180px] md:py-[380px] px-6">
      <div className="max-w-[1100px] mx-auto">
        <div className="bloco-direita">
          <ScrollReveal
            as="h2"
            className="font-light text-black leading-[1.2] mb-12"
          >
            {`Blue Heaven Building with Nature`}
          </ScrollReveal>
          <p className="padrao-p">
            Com a filosofia "Building With Nature", colocamos nossa inteligência construtiva e tecnologia a serviço do equilíbrio da vida, desenvolvendo empreendimentos que se tornam obras de artes esculpidas com uma abordagem artesanal e única, transformando espaços em ambientes que enaltecem a natureza e a modernidade concebida pela vida humana.
          </p>
        </div>
      </div>
      <style>{`
        section#manifesto h2 { font-size: clamp(40px, 5vw, 64px); }
      `}</style>
    </section>
  );
}
