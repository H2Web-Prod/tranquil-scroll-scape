import ScrollReveal from "./ScrollReveal";
import EmpreendimentoBlock from "./EmpreendimentoBlock";

const items = [
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-infinita-treehouse.jpg",
    eyebrow: "01 · Residencial",
    title: "Infinitá Treehouse",
    subtitle: "Um refúgio suspenso entre a arquitetura e a natureza.",
    body: "O Infinitá Treehouse nasce em Itajaí como uma interpretação sensível do habitar contemporâneo, onde a arquitetura não se impõe ao entorno, mas dialoga com ele. Inserido em um território marcado pela presença da água, da vegetação e da escala humana, o empreendimento traduz a proposta da Blue Heaven de criar obras que respeitam a região e permanecem relevantes ao longo do tempo.",
    link: "/infinita-treehouse",
  },
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-aquos-oasis-home.jpg",
    eyebrow: "02 · Residencial",
    title: "Aquos Oasis Home",
    body: "O Aquos Oasis Home surge a partir do poder de transformação da água, atuando como a força que orienta o projeto, molda a arquitetura e estabelece a relação entre o habitar e o território.",
    link: "/aquos-oasis-home",
  },
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-monolyt.jpg",
    eyebrow: "03 · Residencial",
    title: "Monolyt",
    body: "Idealizado para aqueles que apreciam privacidade, o contato íntimo com a natureza e espaços de alto padrão para desfrutar plenamente da vida, o Monolyt introduz um design exclusivo e atemporal que redefine o conceito de viver com estilo.",
    link: "https://projetos.h2web.com.br/blueheaven/imoveis-exclusivos-blue-heaven/monolyt/",
  },
];

export default function Empreendimentos() {
  return (
    <>
      <section className="bg-white py-[100px] md:py-[180px] px-6">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal as="h2" className="font-light text-black">
            Nossos Empreendimentos
          </ScrollReveal>
          <p className="padrao-p mt-6">Obras esculpidas para serem vividas.</p>
          <style>{`
            section h2 { font-size: clamp(48px, 6vw, 72px); font-weight: 300; color: #000; }
          `}</style>
        </div>
      </section>
      {items.map((item) => (
        <EmpreendimentoBlock key={item.title} {...item} />
      ))}
    </>
  );
}
