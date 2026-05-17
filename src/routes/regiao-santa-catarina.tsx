import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import FadeInUp from "@/components/FadeInUp";
import StaggerStack from "@/components/StaggerStack";
import ImageGrowSection from "@/components/ImageGrowSection";
import ZoomImage from "@/components/ZoomImage";
import FinalCTA from "@/components/FinalCTA";
import FAQAccordion from "@/components/FAQAccordion";

export const Route = createFileRoute("/regiao-santa-catarina")({
  head: () => ({
    meta: [
      { title: "Santa Catarina | Território de Natureza e Arquitetura | Blue Heaven" },
      {
        name: "description",
        content:
          "Descubra a região de Santa Catarina, um território de paisagens singulares, natureza preservada e arquitetura autoral.",
      },
      { property: "og:title", content: "Santa Catarina | Território de Natureza e Arquitetura | Blue Heaven" },
      {
        property: "og:description",
        content:
          "Descubra a região de Santa Catarina, um território de paisagens singulares, natureza preservada e arquitetura autoral.",
      },
      {
        property: "og:image",
        content:
          "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/pexels-riccardo-307006.webp",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: RegiaoPage,
});

const faqs = [
  {
    q: "Qual é a importância histórica de Santa Catarina?",
    a: "A história de Santa Catarina é marcada pela diversidade cultural, resultado da presença de povos indígenas e de diferentes correntes migratórias europeias, como açorianos, alemães e italianos. Essa herança influencia até hoje a arquitetura, a gastronomia e os costumes do estado.",
  },
  {
    q: "Santa Catarina é um bom lugar para viver?",
    a: "Sim. Santa Catarina é reconhecida nacionalmente por seus altos índices de qualidade de vida, segurança, infraestrutura e desenvolvimento humano. O estado atrai pessoas que buscam equilíbrio entre vida urbana, contato com a natureza e estabilidade no longo prazo.",
  },
  {
    q: "Por que Santa Catarina apresenta alto crescimento econômico?",
    a: "O crescimento do estado está ligado a uma economia diversificada, que inclui indústria, tecnologia, logística, turismo e serviços. Além disso, a gestão urbana, a infraestrutura e o planejamento contribuem para um desenvolvimento consistente ao longo dos anos.",
  },
  {
    q: "O que explica o destaque de Santa Catarina no Índice de Desenvolvimento Humano (IDH)?",
    a: "Santa Catarina ocupa posição de destaque no IDH devido aos bons indicadores de educação, renda e expectativa de vida. Esse cenário reflete investimentos contínuos em infraestrutura, serviços públicos e qualidade ambiental.",
  },
  {
    q: "Como é o litoral de Santa Catarina?",
    a: "O litoral catarinense possui mais de 500 quilômetros de extensão e grande diversidade de praias. Há regiões mais urbanas e movimentadas, assim como praias mais preservadas, cercadas por Mata Atlântica, oferecendo diferentes formas de viver e se relacionar com o mar.",
  },
  {
    q: "Quais são as características das praias de Santa Catarina?",
    a: "As praias do estado variam entre extensas faixas de areia, enseadas protegidas e regiões com forte presença de vegetação nativa. Em comum, oferecem paisagens naturais, boa qualidade ambiental e integração com cidades que mantêm infraestrutura e serviços.",
  },
  {
    q: "Santa Catarina é um estado promissor para o futuro?",
    a: "Sim. O estado figura entre os que mais crescem no país e concentra cidades consideradas promissoras em diferentes setores. Esse movimento indica continuidade de desenvolvimento, valorização territorial e atratividade para quem pensa no futuro.",
  },
  {
    q: "Que tipo de estilo de vida Santa Catarina oferece?",
    a: "Santa Catarina oferece um estilo de vida equilibrado, onde é possível conciliar trabalho, lazer, natureza e vida urbana. É um estado que atrai pessoas interessadas em viver com mais qualidade, ritmo consciente e conexão com o ambiente ao redor.",
  },
];

function RegiaoPage() {
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
              "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/pexels-riccardo-307006.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute hero-title-block"
            style={{
              textAlign: "right",
            }}
          >
            <h1
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 88px)",
                color: "#FFFFFF",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Descubra a região de Santa Catarina
            </h1>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.4vw, 22px)",
                color: "#FFFFFF",
                lineHeight: 1.4,
                marginTop: "16px",
              }}
            >
              Um território onde história, natureza e qualidade de vida coexistem
            </p>
          </div>
          <style>{`
            .hero-title-block { bottom: 60px; right: 32px; max-width: calc(100% - 64px); }
            @media (min-width: 768px) {
              .hero-title-block { bottom: 100px; right: 80px; max-width: 60vw; }
            }
          `}</style>
        </section>

        {/* 2. A HISTÓRIA */}
        <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <FadeInUp>
              <StaggerStack>
                <ScrollReveal
                  as="h2"
                  className="font-light text-black text-[clamp(40px,5vw,64px)] leading-[1.1] max-w-[1100px]"
                >
                  A História de Santa Catarina
                </ScrollReveal>
                <p className="padrao-p-internas" style={{ marginTop: "32px", maxWidth: "1100px" }}>
                  A história de Santa Catarina é marcada pelo encontro de culturas. Povos indígenas, colonizadores europeus, especialmente açorianos, alemães e italianos, e fluxos migratórios posteriores moldaram a identidade do estado ao longo dos séculos.
                </p>
                <p className="padrao-p-internas" style={{ marginTop: "20px", maxWidth: "1100px" }}>
                  Essa diversidade se reflete na arquitetura, nos costumes, na gastronomia e na forma como as cidades se organizam. Muitas regiões preservam traços históricos em diálogo com uma vida contemporânea ativa, criando um ambiente onde tradição e modernidade coexistem de maneira natural.
                </p>
              </StaggerStack>
            </FadeInUp>
          </div>
        </section>

        {/* 3. IMAGEM SCROLL 100% */}
        <ImageGrowSection src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-infinita-treehouse.jpg" />

        {/* 4. UM ESTADO QUE CRESCE — Colunas Efeito (img esq / txt dir) */}
        <FadeInUp>
          <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
            <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <ParallaxImage
                src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/santa-catarina-02.jpg"
                alt="Santa Catarina"
                aspectRatio="4/5"
              />
              <div>
                <StaggerStack>
                  <ScrollReveal
                    as="h2"
                    className="font-light text-black text-[clamp(36px,4.5vw,56px)] leading-[1.1]"
                  >
                    Um estado que cresce com consistência
                  </ScrollReveal>
                  <p className="padrao-p-internas" style={{ marginTop: "32px" }}>
                    Santa Catarina é o segundo estado que mais cresceu no Brasil nos últimos anos, reflexo de uma economia diversificada, gestão eficiente e forte presença de setores como indústria, tecnologia, logística, turismo e serviços.
                  </p>
                  <p className="padrao-p-internas" style={{ marginTop: "20px" }}>
                    O estado também figura entre os mais bem posicionados no Índice de Desenvolvimento Humano (IDH), com média de 0,792, ocupando o terceiro lugar no ranking nacional. Esse indicador reflete avanços consistentes em educação, renda e expectativa de vida, tornando a região atrativa para diferentes perfis de moradores.
                  </p>
                </StaggerStack>
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* 5. CURIOSIDADES — Colunas Efeito INVERTIDA (txt esq / img dir) */}
        <FadeInUp>
          <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
            <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="md:order-1 order-2">
                <StaggerStack>
                  <ScrollReveal
                    as="h2"
                    className="font-light text-black text-[clamp(36px,4.5vw,56px)] leading-[1.1]"
                  >
                    Curiosidades sobre Santa Catarina
                  </ScrollReveal>
                  <p className="padrao-p-internas" style={{ marginTop: "32px" }}>
                    Santa Catarina reúne cinco das cidades consideradas mais promissoras para investimentos no país, entre elas Balneário Camboriú, Itajaí, Itapema, São José e Blumenau. Esse movimento é impulsionado pela combinação entre infraestrutura urbana, qualidade ambiental e crescimento planejado.
                  </p>
                  <p className="padrao-p-internas" style={{ marginTop: "20px" }}>
                    Outro destaque é a diversidade de estilos de vida concentrados em um único estado. É possível viver próximo ao mar, em regiões serranas ou em polos urbanos bem conectados, sem abrir mão de segurança, serviços e contato com a natureza.
                  </p>
                  <p className="padrao-p-internas" style={{ marginTop: "20px" }}>
                    O estado também se destaca pela forte presença de áreas preservadas da Mata Atlântica, um dos biomas mais ricos e importantes do Brasil, o que contribui diretamente para a qualidade ambiental e o bem-estar de quem vive na região.
                  </p>
                </StaggerStack>
              </div>
              <div className="md:order-2 order-1">
                <ParallaxImage
                  src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/santa-catarina-03.jpg"
                  alt="Curiosidades Santa Catarina"
                  aspectRatio="4/5"
                />
              </div>
            </div>
          </section>
        </FadeInUp>

        {/* 6. AS PRAIAS */}
        <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <FadeInUp>
              <StaggerStack>
                <ScrollReveal
                  as="h2"
                  className="font-light text-black text-[clamp(40px,5vw,64px)] leading-[1.1] max-w-[1100px]"
                >
                  As praias de Santa Catarina
                </ScrollReveal>
                <p className="padrao-p-internas" style={{ marginTop: "32px", maxWidth: "1100px" }}>
                  O litoral catarinense é um dos mais variados do país. Com mais de 500 quilômetros de costa, Santa Catarina abriga praias com características muito distintas entre si: desde faixas de areia extensas e abertas até enseadas mais reservadas, cercadas por vegetação nativa.
                </p>
                <p className="padrao-p-internas" style={{ marginTop: "20px", maxWidth: "1100px" }}>
                  Essa diversidade permite diferentes formas de viver o litoral, seja de maneira mais urbana, próxima a centros movimentados, ou em regiões onde a natureza permanece como protagonista. Em comum, as praias do estado oferecem paisagens preservadas, águas limpas e uma forte relação com o cotidiano de quem escolhe viver próximo ao mar.
                </p>
              </StaggerStack>
            </FadeInUp>
          </div>
        </section>

        {/* 7. ZOOM EMPREENDIMENTO */}
        <ZoomImage
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/santa-catarina-04.jpg"
          alt="Santa Catarina"
        />

        {/* 8. ESCOLHA DE VIDA */}
        <section className="py-[140px] md:py-[240px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <FadeInUp>
              <StaggerStack>
                <ScrollReveal
                  as="h2"
                  className="font-light text-black text-[clamp(40px,5vw,64px)] leading-[1.1] max-w-[1100px]"
                >
                  Santa Catarina como escolha de vida
                </ScrollReveal>
                <p className="padrao-p-internas" style={{ marginTop: "32px", maxWidth: "1100px" }}>
                  Mais do que um destino turístico, Santa Catarina se consolidou como um território de permanência. Um lugar onde é possível construir uma rotina equilibrada, com acesso à natureza, infraestrutura de qualidade e cidades que oferecem oportunidades sem perder a escala humana.
                </p>
                <p className="padrao-p-internas" style={{ marginTop: "20px", maxWidth: "1100px" }}>
                  É essa combinação, história, paisagem, desenvolvimento e qualidade de vida, que faz de Santa Catarina um estado escolhido por quem busca viver com mais consciência, estabilidade e conexão com o lugar.
                </p>
                <p className="padrao-p-internas" style={{ marginTop: "20px", maxWidth: "1100px" }}>
                  Santa Catarina não é apenas onde se vive.
                </p>
                <p className="padrao-p-internas" style={{ marginTop: "20px", maxWidth: "1100px" }}>
                  É onde o tempo encontra espaço para acontecer.
                </p>
              </StaggerStack>
            </FadeInUp>
          </div>
        </section>

        {/* 9. IMAGEM SCROLL 100% */}
        <ImageGrowSection src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/santa-catarina-05.jpg" />

        {/* 10. CTA */}
        <FinalCTA />

        {/* 11. FAQ */}
        <section className="py-[140px] md:py-[200px] px-6 md:px-10 bg-white">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal
              as="h2"
              className="font-light text-black text-[clamp(28px,3.5vw,48px)] leading-[1.1] max-w-[1200px] md:whitespace-nowrap"
            >
              Perguntas Frequentes sobre Santa Catarina
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
