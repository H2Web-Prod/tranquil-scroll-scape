import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import FadeInUp from "@/components/FadeInUp";
import StaggerStack from "@/components/StaggerStack";
import VideoGrowSection from "@/components/VideoGrowSection";
import TabsVerticais from "@/components/TabsVerticais";
import TituloUnico from "@/components/TituloUnico";
import FinalCTA from "@/components/FinalCTA";
import FAQAccordion from "@/components/FAQAccordion";

export const Route = createFileRoute("/blue-heaven")({
  head: () => ({
    meta: [
      { title: "Quem Somos | Blue Heaven | Building with Nature" },
      {
        name: "description",
        content:
          "Quem Somos: Conheça a Blue Heaven, construtora que desenvolve imóveis exclusivos com arquitetos renomados no Brasil.",
      },
      { property: "og:title", content: "Quem Somos | Blue Heaven | Building with Nature" },
      {
        property: "og:description",
        content:
          "Quem Somos: Conheça a Blue Heaven, construtora que desenvolve imóveis exclusivos com arquitetos renomados no Brasil.",
      },
      {
        property: "og:image",
        content: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/bg-quem-somos-1.jpg",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: BlueHeavenPage,
});

const tabs = [
  {
    label: "Tecnologia",
    title: "Tecnologia",
    image:
      "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/tecnologia-blue-heaven2-543x1024-1.jpeg",
    paragraphs: [
      "Desde sistemas de automação até soluções inovadoras de sustentabilidade, a tecnologia é aplicada de forma inteligente e sensível ao contexto. Enfrentando desafios que vão além do convencional, os empreendimentos exclusivos Blue Heaven incorporam avanços tecnológicos que se manifestam em elementos distintivos, como piscinas suspensas, concreto aparente e colunas esculpidas em rocha.",
      "Cada um de nossos projetos conta com inovações que proporcionam experiências únicas, convertendo tecnologia em expressão arquitetônica e oferecendo mais do que simples comodidades: uma identidade singular para cada obra.",
    ],
    scrollWeight: 1.0,
  },
  {
    label: "Natureza",
    title: "Natureza",
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/natureza-blue-heaven.webp",
    paragraphs: [
      "Nossos projetos se integram à paisagem e respeitam o entorno. Essa relação cuidadosa proporciona uma experiência autêntica de viver em contato com a natureza, onde arquitetura e meio ambiente coexistem de forma equilibrada.",
    ],
    scrollWeight: 2.0,
  },
  {
    label: "Edificação",
    title: "Edificação",
    image:
      "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/edificacao-blue-heaven2-543x1024-1.jpeg",
    paragraphs: [
      "Seguimos padrões elevados, utilizamos materiais premium e técnicas avançadas para criar projetos que refletem sofisticação, durabilidade e rigor construtivo.",
      "Os empreendimentos Blue Heaven apresentam soluções complexas que exigem planejamento criativo, inovação e elevada habilidade técnica, resultando em obras que se destacam pela engenhosidade de sua construção.",
    ],
    scrollWeight: 1.0,
  },
];

const faqs = [
  {
    q: "Quem é a Blue Heaven?",
    a: "Somos uma construtora de imóveis exclusivos que atua a partir da arquitetura autoral integrando natureza e uma visão sensível sobre o habitar. Desenvolvemos empreendimentos que se tornam obras singulares, feitas para permanecerem relevantes ao longo do tempo.",
  },
  {
    q: "Qual é a filosofia da Blue Heaven?",
    a: "Nossa atuação é guiada pela filosofia Building With Nature. Colocamos inteligência construtiva, tecnologia e sensibilidade arquitetônica a serviço do equilíbrio da vida, criando projetos que dialogam com o território, a paisagem e a experiência humana.",
  },
  {
    q: "O que diferencia a Blue Heaven de outras construtoras?",
    a: "Nos diferenciamos pela abordagem autoral, com arquitetura renomada, tecnologia e natureza, que se integram desde a concepção do projeto. Toda obra é um novo desafio, que surge de uma leitura única do território e de seu entorno.",
  },
  {
    q: "Como a natureza está presente nos projetos da Blue Heaven?",
    a: "A natureza é parte estrutural dos projetos. Planejamos nossos empreendimentos para integrar paisagens naturais e promover uma relação equilibrada entre construção, meio ambiente e vida cotidiana.",
  },
  {
    q: "O que significa Building Wellness para a Blue Heaven?",
    a: "Building Wellness é o nosso compromisso em criar ambientes que promovem bem-estar físico, emocional e sensorial. Essa preocupação está presente desde o design arquitetônico até a escolha de materiais, sistemas construtivos e soluções que impactam diretamente a qualidade de vida.",
  },
  {
    q: "A Blue Heaven trabalha com arquitetura internacional?",
    a: "Sim. Todo projeto Blue Heaven conta com a assinatura de um arquiteto renomado. No Infinitá Treehouse, por exemplo, a presença é da Triptyque e da Architects Office, liderada por Greg Bousquet.",
  },
  {
    q: "Onde posso conhecer os empreendimentos da Blue Heaven?",
    a: "Os empreendimentos podem ser conhecidos por meio de uma visita física ou em nosso site, onde apresentamos cada projeto com detalhes arquitetônicos, conceituais e visuais, permitindo uma compreensão profunda de cada obra.",
  },
];

function BlueHeavenPage() {
  useLenis();

  return (
    <div className="bg-white relative">
      <Header />
      <main>
        {/* 1. HERO */}
        <section
          className="relative w-full"
          style={{
            height: "100vh",
            backgroundImage:
              "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/bg-quem-somos-1.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute px-6 md:px-10 bottom-[60px] md:bottom-[100px]"
            style={{
              left: 0,
              right: 0,
              textAlign: "left",
            }}
          >
            <h1
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(64px, 8vw, 120px)",
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Blue Heaven
            </h1>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.4vw, 22px)",
                color: "#FFFFFF",
                lineHeight: 1.4,
                marginTop: "12px",
                marginLeft: "10px",
              }}
            >
              Desafiamos o inalcançável, esculpindo o extraordinário
            </p>
          </div>
        </section>

        {/* 2. PILARES + TABS */}
        <section className="pt-[140px] md:pt-[240px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal
              as="h2"
              className="font-light text-black text-[clamp(28px,3.5vw,48px)] leading-[1.1] max-w-[1200px] md:whitespace-nowrap"
            >
              Os pilares que sustentam os nossos projetos
            </ScrollReveal>
          </div>
          <div className="max-w-[1300px] mx-auto" style={{ marginTop: "80px" }}>
            <TabsVerticais tabs={tabs} />
          </div>
        </section>

        {/* 3. BUILDING WELLNESS */}
        <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <FadeInUp>
              <StaggerStack>
                <ScrollReveal as="h2" className="font-light text-black text-[clamp(40px,5vw,64px)] max-w-[1100px]">
                  Building Wellness
                </ScrollReveal>
                <p className="padrao-p-internas" style={{ marginTop: "32px", maxWidth: "1100px" }}>
                  Com a filosofia 'Building With Nature', colocamos nossa inteligência construtiva e tecnologia a
                  serviço do equilíbrio da vida, desenvolvendo empreendimentos que se tornam obras de artes esculpidas
                  com uma abordagem artesanal e única, transformando espaços em ambientes que enaltecem a natureza e a
                  modernidade concebida pela vida humana.
                </p>
              </StaggerStack>
            </FadeInUp>
          </div>
        </section>

        {/* 4. VIDEO SCROLL 100% */}
        <VideoGrowSection src="https://projetos.h2web.com.br/blueheaven/videos/blueheaven-video-hero.mp4" />

        {/* 5. ASSINATURA INTERNACIONAL (Greg) */}
        <FadeInUp>
          <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
            <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <ParallaxImage
                src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Greg-Bousquet-PB.jpg.webp"
                alt="Greg Bousquet"
                aspectRatio="3/4"
              />
              <div>
                <StaggerStack>
                  <ScrollReveal as="h2" className="font-light text-black text-[clamp(36px,4.5vw,56px)] leading-[1.1]">
                    Assinatura internacional na arquitetura
                  </ScrollReveal>
                  <p className="padrao-p-internas" style={{ marginTop: "32px" }}>
                    A Architects Office cria projetos que harmonizam inovação, natureza e estética. Liderada por Greg
                    Bousquet, a empresa integra referências globais e contextos locais, o orgânico e o mineral, com
                    atenção cuidadosa à escala humana, à paisagem e ao meio ambiente.
                  </p>
                  <p className="padrao-p-internas" style={{ marginTop: "20px" }}>
                    Essa colaboração reforça a identidade autoral dos empreendimentos Blue Heaven, consolidando uma
                    arquitetura singular, sensível e atemporal.
                  </p>
                </StaggerStack>
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* 6. TÍTULO ÚNICO */}
        <TituloUnico>
          Construir com bem-estar é proporcionar um refúgio onde os moradores podem viver com equilíbrio, saúde e
          felicidade.
        </TituloUnico>

        {/* 7. BLUE HEAVEN NÃO SE LIMITA */}
        <FadeInUp>
          <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
            <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <ParallaxImage
                src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Galeria-natureza.webp"
                alt="Galeria Natureza"
                aspectRatio="4/5"
              />
              <div>
                <StaggerStack>
                  <ScrollReveal as="h2" className="font-light text-black text-[clamp(36px,4.5vw,56px)] leading-[1.1]">
                    A Blue Heaven não se limita a construir apenas residências.
                  </ScrollReveal>
                  <p className="padrao-p-internas" style={{ marginTop: "32px" }}>
                    Pensando em ambientes que promovem o bem-estar em todos os aspectos, a preocupação com Building
                    Wellness é adotada desde o design arquitetônico até os materiais escolhidos, criando espaços que
                    inspiram e elevam a qualidade de vida.
                  </p>
                </StaggerStack>
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* 8. CTA */}
        <FinalCTA />

        {/* 9. FAQ */}
        <section className="py-[140px] md:py-[200px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal
              as="h2"
              className="font-light text-black text-[clamp(28px,3.5vw,48px)] leading-[1.1] max-w-[1200px] md:whitespace-nowrap"
            >
              Perguntas Frequentes sobre Quem Somos
            </ScrollReveal>
            <div style={{ marginTop: "60px" }}>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
