import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import ImageGrowSection from "@/components/ImageGrowSection";
import ZoomImage from "@/components/ZoomImage";
import ImageScrollCentralizada from "@/components/ImageScrollCentralizada";
import FadeInUp from "@/components/FadeInUp";
import StaggerStack from "@/components/StaggerStack";
import HorizontalGallery from "@/components/HorizontalGallery";

export const Route = createFileRoute("/monolyt")({
  head: () => ({
    meta: [
      { title: "Empreendimento Monolyt - Blue Heaven" },
      {
        name: "description",
        content:
          "Idealizado para aqueles que apreciam privacidade, o contato íntimo com a natureza e espaços de alto padrão para desfrutar plenamente da vida, o Monolyt",
      },
      { property: "og:title", content: "Empreendimento Monolyt - Blue Heaven" },
      {
        property: "og:description",
        content:
          "Idealizado para aqueles que apreciam privacidade, o contato íntimo com a natureza e espaços de alto padrão para desfrutar plenamente da vida, o Monolyt",
      },
      {
        property: "og:image",
        content:
          "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/banner-monlyt-desktop-scaled-1.webp",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: MonolytPage,
});

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

const btnClass =
  "inline-block font-roboto font-medium text-[16px] text-black bg-white border border-black rounded-full px-[25px] py-[12px] hover:bg-black hover:text-white transition-all duration-400 cursor-pointer";

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "'Public Sans', sans-serif",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  fontSize: "13px",
  color: "#000000",
  marginBottom: "24px",
  display: "block",
  fontWeight: 500,
};

const blockquoteStyle: React.CSSProperties = {
  fontFamily: "'Public Sans', sans-serif",
  fontSize: "20px",
  fontStyle: "italic",
  color: "#606060",
  fontWeight: 400,
  lineHeight: 1.6,
  borderLeft: "2px solid #606060",
  paddingLeft: "24px",
  marginTop: "32px",
};

function ZigZagBlock({
  image,
  alt,
  reverse = false,
  aspectRatio = "4/5",
  children,
}: {
  image: string;
  alt: string;
  reverse?: boolean;
  aspectRatio?: string;
  children: React.ReactNode;
}) {
  return (
    <FadeInUp>
      <section className="py-[140px] md:py-[240px] px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reverse ? "md:order-2" : ""}>
            <ParallaxImage src={image} alt={alt} aspectRatio={aspectRatio} />
          </div>
          <div className={reverse ? "md:order-1" : ""}>
            <StaggerStack>{children}</StaggerStack>
          </div>
        </div>
      </section>
    </FadeInUp>
  );
}

const distancias = [
  ["Balneário Camboriú", "7 min"],
  ["Porto Belo", "26 min"],
  ["Navegantes", "35 min"],
  ["Bombinhas", "41 min"],
  ["Beto Carrero World", "54 min"],
  ["Florianópolis", "1h11 min"],
  ["Blumenau", "1h18 min"],
  ["Joinville", "1h55 min"],
  ["Curitiba", "3h45 min"],
  ["Porto Alegre", "6h10 min"],
  ["São Paulo", "10h min"],
];

const diferenciais = [
  "Arquitetura Architects Office",
  "Inserido em uma Área de Preservação Permanente (APP)",
  "Privacidade, com vãos livres entre as unidades, proporcionando um ambiente exclusivo e íntimo.",
  "Paredes externas de vidro, com esquadrias de chão ao teto",
  "2 torres com 3 andares. Garagem no subsolo em uma das torres.",
  "Pedras brutas como coluna de sustentação dos andares, uma inovação na arquitetura.",
  "24 unidades",
  "Apartamentos tipo Duplex, Gardens e Cobertura com metragens de 240 m² a 547 m² de área privativa",
  "3 e 4 suítes",
];

const MONOLYT_GALLERY_IMAGES = [
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-1.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-2.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-3.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-4.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-5.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-6.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-7.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-8.jpg",
];

function MonolytPage() {
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
              "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/banner-monlyt-desktop-scaled-1.webp)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Degradê sutil inferior */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "50%",
              background: "linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.5) 100%)",
              pointerEvents: "none",
              zIndex: 1,
            }}
          />

          <div
            className="absolute px-6 md:px-10 bottom-[60px] md:bottom-[100px]"
            style={{
              left: 0,
              right: 0,
              textAlign: "left",
              zIndex: 5,
            }}
          >
            <h1
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(56px, 7vw, 96px)",
                lineHeight: 1.1,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                margin: 0,
              }}
            >
              Monolyt
            </h1>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "20px",
                color: "#FFFFFF",
                margin: "12px 0 0 10px",
              }}
            >
              by Architects Office &amp; Triptyque
            </p>
          </div>
        </section>

        {/* 2. Texto */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <div className="bloco-direita">
              <ScrollReveal as="h2" className="font-light text-black">
                Uma obra de arte esculpida em pedra bruta
              </ScrollReveal>
              <style>{`section h2 { font-size: clamp(40px, 5vw, 64px); font-weight: 300; color: #000; line-height: 1.15; }`}</style>
              <p className="padrao-p-internas" style={{ marginTop: "40px" }}>
                Idealizado para aqueles que apreciam privacidade, o contato íntimo com a natureza e espaços de alto padrão
                para desfrutar plenamente da vida, o Monolyt introduz um design exclusivo e atemporal que redefine o
                conceito de viver com estilo.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Imagem Scroll 100% */}
        <ImageGrowSection src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/monolyt.jpg" />

        {/* 4. Mapa de Distâncias */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <style>{`
  @keyframes monolytMapPulse {
    0% {
      width: 20px;
      height: 20px;
      opacity: 0.6;
    }
    100% {
      width: 80px;
      height: 80px;
      opacity: 0;
    }
  }
  @media (max-width: 767px) {
    .monolyt-map-pulse {
      display: none;
    }
  }
`}</style>
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Mapa de Distâncias
            </ScrollReveal>
            <div style={{ position: "relative", width: "100%", marginTop: "48px" }}>
              <img
                src="https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/05/mapa-monolyt.jpg"
                alt="Mapa de distâncias Monolyt"
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block", borderRadius: 0 }}
              />
              {/* Pulse 1 — onda inicial */}
              <span
                style={{
                  position: "absolute",
                  left: "67.3%",
                  top: "49.2%",
                  width: "20px",
                  height: "20px",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  backgroundColor: "#142643",
                  opacity: 0.6,
                  animation: "monolytMapPulse 2s ease-out infinite",
                  pointerEvents: "none",
                }}
              />
              {/* Pulse 2 — onda com delay (cria efeito contínuo) */}
              <span
                style={{
                  position: "absolute",
                  left: "67.3%",
                  top: "49.2%",
                  width: "20px",
                  height: "20px",
                  transform: "translate(-50%, -50%)",
                  borderRadius: "50%",
                  backgroundColor: "#142643",
                  opacity: 0.6,
                  animation: "monolytMapPulse 2s ease-out infinite 1s",
                  pointerEvents: "none",
                }}
              />
            </div>
            <div style={{ marginTop: "64px", maxWidth: "500px", marginLeft: "auto", marginRight: "auto" }}>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {distancias.map(([place, t], i) => (
                  <li
                    key={place}
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "16px",
                      color: "#000000",
                      lineHeight: 1.5,
                      padding: "14px 0",
                      display: "flex",
                      justifyContent: "space-between",
                      gap: 24,
                      borderBottom: i === distancias.length - 1 ? "none" : "1px solid #E5E5E5",
                    }}
                  >
                    <span>{place}</span>
                    <span style={{ color: "#666666" }}>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 5. Zoom Empreendimento */}
        <ZoomImage
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/monolyt-imagem-61.webp"
          alt="Monolyt — fachada"
        />

        {/* GALERIA HORIZONTAL */}
        <HorizontalGallery images={MONOLYT_GALLERY_IMAGES} />

        {/* 6. Architects Office + Imagem Scroll Centralizada */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Um projeto com arquitetura internacional: Architects Office
            </ScrollReveal>
          </div>
        </section>
        <ImageScrollCentralizada
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/monopoly-image2.jpeg"
          alt="Architects Office — Monolyt"
        />

        {/* 7. Arte Arquitetônica — Colunas Efeito + selo */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/monolyt-1.jpg"
          alt="Monolyt — arquitetura"
        >
          <span style={eyebrowStyle}>ARQUITETURA</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Arte Arquitetônica que ecoa sabedoria Natural
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas">
              Com dois volumes distintos, o Monolyt incorpora o elemento de rocha no primeiro edifício, lembrando a casa
              primordial dos primeiros humanos. A entrada deste bloco simula a sensação de entrar em uma caverna,
              levando a um pátio onde estão localizados a academia, o espaço de coworking e o playground, próximos às
              piscinas naturais do local.
            </p>
          </div>
          <div style={{ marginTop: "48px" }}>
            <span style={{ ...eyebrowStyle, marginBottom: 0 }}>UM EMPREENDIMENTO PREMIADO:</span>
            <img
              src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/selo-desktop.webp"
              alt="Selo de prêmio"
              loading="lazy"
              style={{ width: "337px", height: "auto", marginTop: "16px", display: "block" }}
            />
          </div>
        </ZigZagBlock>

        {/* 8. Texto puro */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
              O segundo volume presta homenagem ao fogo, incorporando a intimidade desse elemento na arquitetura,
              apresentando ambientes com lareiras, um spa, espaços para prática de yoga e uma área gourmet.
            </p>
            <p className="padrao-p-internas">
              Na curadoria de materiais, destaca-se o contraste entre pedras sólidas e a transparência do vidro que
              envolve as fachadas com varandas. A madeira está presente, humanizando a experiência e adicionando um
              toque contemporâneo por meio do uso de acabamentos em aço escovado.
            </p>
          </div>
        </section>

        {/* 9. Equilíbrio — Colunas Efeito invertido */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/monolyt-2a.jpg"
          alt="Monolyt — equilíbrio"
          reverse
        >
          <ScrollReveal as="h2" className="font-light text-black">
            O equilíbrio entre o ser humano e a natureza, entre o extraordinário e cotidiano
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              São 24 unidades distribuídas em 2 torres com 3 andares, e uma delas contando com garagem no subsolo para
              maior comodidade.
            </p>
            <p className="padrao-p-internas">
              O Monolyt está inserido em um terreno de 7.413,67 m², proporcionando uma sensação de amplitude e
              integração com a natureza circundante. Desses números, 2.654,45 m² são terrenos APP (área de Preservação
              Permanente), dedicados ao ecossistema local. O riacho que corta o terreno, parte integrante da APP,
              contribui para a atmosfera natural e única do empreendimento.
            </p>
          </div>
        </ZigZagBlock>

        {/* 10. Arquitetura em sintonia */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Arquitetura em sintonia com o meio ambiente
            </ScrollReveal>
            <div style={{ marginTop: "40px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                As "grutas" entre as torres são a entrada das áreas internas, representando verdadeiros espaços zen
                contemporâneos.
              </p>
              <p className="padrao-p-internas">
                Pedras brutas desafiam sua função estrutural e emergem como colunas de sustentação dos andares, contando
                uma história visual única e representando o ápice do design arquitetônico.
              </p>
            </div>
          </div>
        </section>

        {/* 11. Greg Bousquet */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/greg-02.jpg"
          alt="Greg Bousquet — Architects Office"
          aspectRatio="3/4"
        >
          <span style={eyebrowStyle}>ARQUITETURA</span>
          <span style={{ ...eyebrowStyle, marginTop: "-12px" }}>UM PROJETO ARCHITECTS OFFICE.</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Greg Bousquet
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              Greg Bousquet, fundador da Architects Office, consolidou ao longo de 21 anos uma trajetória marcada por
              projetos e premiações por todo o globo. Nos últimos anos, o arquiteto se tornou referência por sua
              experiência global, repertório multicultural e olhar estratégico para a eficiência de projetos.
            </p>
            <p className="padrao-p-internas">
              Hoje, lidera o ARCHITECTS OFFICE, a agência que articula o urbanismo virtuoso e a arquitetura ética, dando
              seguimento a sua independência criativa com uma nova identidade.
            </p>
            <blockquote style={blockquoteStyle}>
              "O propósito é integrar a natureza no vocabulário da arquitetura não mais como um enfeite ou um
              paisagismo. Tentamos sempre traduzir como o mineral e o vegetal podem conviver em harmonia."
            </blockquote>
          </div>
        </ZigZagBlock>

        {/* 12. Rodrigo Oliveira */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Aquos-12-728x1024-1.webp"
          alt="Rodrigo Oliveira — paisagismo"
          reverse
          aspectRatio="3/4"
        >
          <span style={eyebrowStyle}>PAISAGISMO</span>
          <span style={{ ...eyebrowStyle, marginTop: "-12px" }}>A ARTE AUTORAL QUE REALÇA A NATUREZA.</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Rodrigo Oliveira
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              Formado em engenharia agronômica e com especialização em Arborist, na Flórida, o paisagista traz consigo
              referências de diversas escolas – da assimetria japonesa aos clássicos italianos.
            </p>
            <p className="padrao-p-internas">
              As texturas e volumes verdes ganham vida e criam cenários incríveis com as composições de Rodrigo
              Oliveira. É pôr a mão na terra, contar com um olhar experimentado, exalar empatia e revelar a sabedoria da
              intuição. O paisagismo de Rodrigo Oliveira é de beleza tão genuína quanto livre, como a natureza.
            </p>
          </div>
        </ZigZagBlock>

        {/* 13. Diferenciais */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto grid md:grid-cols-[35fr_65fr] gap-12 md:gap-16">
            <div>
              <span style={eyebrowStyle}>DIFERENCIAIS</span>
              <h2
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 3vw, 40px)",
                  color: "#000",
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                O equilíbrio entre o ser humano e a natureza, entre o extraordinário e cotidiano.
              </h2>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, borderTop: "1px solid #E5E5E5" }}>
              {diferenciais.map((item) => (
                <li
                  key={item}
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontWeight: 400,
                    fontSize: "18px",
                    color: "#000",
                    lineHeight: 1.5,
                    padding: "20px 0",
                    borderBottom: "1px solid #E5E5E5",
                  }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 14. CTA */}
        <section className="px-6 py-[120px] md:py-[200px]" style={{ background: "#F5F5F5" }}>
          <div className="max-w-[1300px] mx-auto text-left">
            <ScrollReveal as="h2" className="font-light text-black text-[clamp(40px,5vw,64px)] max-w-[1200px]">
              Seu novo estilo de vida começa aqui
            </ScrollReveal>
            <div style={{ marginTop: "40px", maxWidth: "1200px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "48px" }}>
                Descubra como é viver em um lugar que conecta natureza, conforto e modernidade. Fale conosco e agende
                sua visita.
              </p>
              <a className={btnClass} href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
