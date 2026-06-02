import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ParallaxImage from "@/components/ParallaxImage";
import VideoGrowSection from "@/components/VideoGrowSection";
import ZoomImage from "@/components/ZoomImage";
import ImageScrollCentralizada from "@/components/ImageScrollCentralizada";
import FadeInUp from "@/components/FadeInUp";
import StaggerStack from "@/components/StaggerStack";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";
import HorizontalGallery from "@/components/HorizontalGallery";

export const Route = createFileRoute("/aquos-oasis-home")({
  head: () => ({
    meta: [
      { title: "Aquos | Imóvel Exclusivo na Praia do Estaleiro | Blue Heaven" },
      {
        name: "description",
        content:
          "Residencial exclusivo frente-mar na Praia do Estaleiro. O Aquos Oasis Home oferece arquitetura autoral, acesso direto à praia e exclusividade.",
      },
      { property: "og:title", content: "Aquos | Imóvel Exclusivo na Praia do Estaleiro | Blue Heaven" },
      {
        property: "og:description",
        content:
          "Residencial exclusivo frente-mar na Praia do Estaleiro. O Aquos Oasis Home oferece arquitetura autoral, acesso direto à praia e exclusividade.",
      },
      {
        property: "og:image",
        content: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Banner-Aquos.webp",
      },
      { property: "og:type", content: "article" },
    ],
  }),
  component: AquosOasisHome,
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

const faqs: FAQItem[] = [
  {
    q: "O que é o Aquos Oasis Home?",
    a: "O Aquos Oasis Home é um empreendimento residencial exclusivo da Blue Heaven. O projeto parte do conceito do poder de transformação da água para orientar decisões arquitetônicas, espaciais e sensoriais, resultando em um conjunto autoral, pé na areia, inserido em uma área de preservação ambiental e com acesso direto à praia.",
  },
  {
    q: "Onde está localizado o Aquos Oasis Home?",
    a: "O empreendimento está situado na Praia do Estaleiro, uma das regiões mais preservadas e exclusivas de Balneário Camboriú, reconhecida pela forte presença da natureza, proximidade com o mar e ritmo mais tranquilo de vida.",
  },
  {
    q: "Qual é o conceito arquitetônico do Aquos Oasis Home?",
    a: "O projeto parte da água como elemento estruturante, orientando a arquitetura, os espaços e a experiência de habitar. A proposta busca integração contínua entre interior, exterior e paisagem natural.",
  },
  {
    q: "Quem assina a arquitetura do Aquos Oasis Home?",
    a: "O Aquos Oasis Home é assinado pela Architects Office, escritório de arquitetura internacional liderado por Greg Bousquet, conhecido por projetos que conectam arquitetura, natureza e experiência humana de forma sensível e contemporânea.",
  },
  {
    q: "Quem é Greg Bousquet?",
    a: "Greg Bousquet é um arquiteto à frente do Architects Office, reconhecido por uma abordagem que integra arquitetura, natureza e experiência humana, com atenção ao território e à escala do viver.",
  },
  {
    q: "Qual o diferencial da Praia do Estaleiro em relação a outras regiões de Balneário Camboriú?",
    a: "A Praia do Estaleiro se diferencia por manter um controle rigoroso de ocupação e verticalização, inserida em uma área de preservação ambiental que limita a densidade urbana. Esse contexto garante uma paisagem preservada, acesso direto ao mar e um perfil de ocupação mais reservado, atraindo moradores que buscam privacidade, contato com a natureza e exclusividade em Balneário Camboriú.",
  },
  {
    q: "O Aquos Oasis Home é considerado um imóvel exclusivo?",
    a: "Sim. Trata-se de um imóvel exclusivo, pensado para um público que valoriza arquitetura autoral, localização diferenciada e uma forma de viver conectada à natureza e ao bem-estar.",
  },
  {
    q: "Como a natureza está integrada ao projeto?",
    a: "A natureza está integrada ao projeto por meio da implantação frente-mar, da preservação da vegetação existente e do uso da água como elemento estruturado dos espaços. A arquitetura respeita a topografia, mantém aberturas amplas para ventilação e luz natural e estabelece uma relação direta entre áreas internas, varandas e paisagem, reforçando a presença constante do ambiente natural no cotidiano dos moradores.",
  },
  {
    q: "Para quem o Aquos Oasis Home foi pensado?",
    a: "O Aquos Oasis Home foi pensado para pessoas que buscam um residencial autoral, reservado e conectado ao mar, com alto nível de privacidade e qualidade espacial. É direcionado a um perfil que valoriza localização frente-mar, baixa densidade, arquitetura assinada e a experiência de viver em uma área preservada, com conforto e exclusividade.",
  },
];

function ZigZagBlock({
  image,
  alt,
  reverse = false,
  children,
}: {
  image: string;
  alt: string;
  reverse?: boolean;
  children: React.ReactNode;
}) {
  return (
    <FadeInUp>
      <section className="py-[140px] md:py-[240px] px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reverse ? "md:order-2" : ""}>
            <ParallaxImage src={image} alt={alt} aspectRatio={reverse ? "3/4" : "4/5"} />
          </div>
          <div className={reverse ? "md:order-1" : ""}>
            <StaggerStack>{children}</StaggerStack>
          </div>
        </div>
      </section>
    </FadeInUp>
  );
}

const distancias: [string, string][] = [
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

const AQUOS_GALLERY_IMAGES = [
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-1.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-2.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-3.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-4.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-5.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-6.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-7.jpg",
  "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/infinita-8.jpg",
];

function AquosOasisHome() {
  useLenis();

  return (
    <div className="bg-white relative">
      <Header />
      <main>
        {/* HERO */}
        <section
          className="relative w-full"
          style={{
            height: "100vh",
            backgroundImage:
              "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Banner-Aquos.webp)",
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
              zIndex: 5,
            }}
          >
            <h1
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 88px)",
                lineHeight: 1.1,
                color: "#FFFFFF",
                letterSpacing: "-0.02em",
                margin: 0,
                whiteSpace: "nowrap",
              }}
            >
              Aquos Oasis Home
            </h1>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "20px",
                color: "#FFFFFF",
                marginTop: "12px",
                margin: "12px 0 0 10px",
              }}
            >
              by Architects Office &amp; Triptyque
            </p>
          </div>
        </section>

        {/* SEÇÃO 2 */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <div className="bloco-direita">
              <ScrollReveal as="h2" className="font-light text-black">
                Explore o exclusivo, viva o incomparável
              </ScrollReveal>
              <style>{`section h2 { font-size: clamp(40px, 5vw, 64px); font-weight: 300; color: #000; line-height: 1.15; }`}</style>
              <p
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontWeight: 400,
                  fontSize: "24px",
                  color: "#000",
                  lineHeight: 1.5,
                  marginTop: "40px",
                  marginBottom: "40px",
                }}
              >
                Onde a água define o espaço e o tempo desacelera.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                O Aquos Oasis Home nasce a partir de um elemento essencial: a água. Não como metáfora, mas como força
                que orienta o projeto, molda a arquitetura e estabelece a relação entre o habitar e o território.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                Localizado na Praia do Estaleiro, em Balneário Camboriú, o empreendimento se insere em um dos trechos
                mais preservados do litoral catarinense, onde a natureza permanece presente, o ritmo é mais silencioso e
                a paisagem conduz a experiência de viver.
              </p>
              <p className="padrao-p-internas">
                Aqui, a arquitetura não compete com o entorno. Ela se adapta, se dilui e se revela aos poucos.
              </p>
            </div>
          </div>
        </section>

        {/* VÍDEO SCROLL 100% */}
        <VideoGrowSection src="https://projetos.h2web.com.br/blueheaven/videos/aquos-institucional.mp4" />

        {/* SEÇÃO 4 — Conceito (Colunas Efeito) */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/aquos-02.jpg"
          alt="Aquos Oasis Home — conceito"
        >
          <span style={eyebrowStyle}>CONCEITO</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Um refúgio desenhado pelo território
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              O Aquos Oasis Home foi concebido para respeitar a geografia natural da Praia do Estaleiro, valorizando a
              proximidade com o mar, a vegetação nativa e a atmosfera contemplativa da região.
            </p>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              Cada decisão de projeto parte da leitura sensível do lugar, criando espaços que favorecem a conexão com o
              exterior e permitem que a paisagem atravesse o cotidiano de quem habita.
            </p>
            <p className="padrao-p-internas">
              Mais do que um endereço exclusivo, o Aquos Oasis Home é uma resposta arquitetônica ao território onde está
              inserido.
            </p>
          </div>
        </ZigZagBlock>

        {/* SEÇÃO 5 — Greg (Colunas Efeito invertido, sem vídeo) */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/greg-02.jpg"
          alt="Greg Bousquet — Architects Office"
          reverse
        >
          <span style={eyebrowStyle}>ARQUITETURA</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Arquitetura com assinatura internacional
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              O projeto é assinado pelo Architects Office, escritório reconhecido internacionalmente por sua abordagem
              que integra arquitetura, paisagem e experiência humana.
            </p>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              Sob a liderança de Greg Bousquet, o Architects Office desenvolve projetos que equilibram precisão técnica
              e liberdade criativa, explorando a relação entre o construído e o natural com atenção à escala, à
              materialidade e ao clima.
            </p>
            <p className="padrao-p-internas">
              No Aquos Oasis Home, essa assinatura se traduz em uma arquitetura que privilegia a fluidez dos espaços, a
              integração visual e a sensação de continuidade entre interior e exterior.
            </p>
          </div>
        </ZigZagBlock>

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
                src="https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/mapa-aquos.jpg"
                alt="Mapa de distâncias Aquos"
                loading="lazy"
                style={{ width: "100%", height: "auto", objectFit: "contain", display: "block", borderRadius: 0 }}
              />
              {/* Pulse 1 — onda inicial */}
              <span
                style={{
                  position: "absolute",
                  left: "58%",
                  top: "67.4%",
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
                  left: "58%",
                  top: "67.4%",
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

        {/* SEÇÃO 6 — texto puro */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Paisagem como elemento estruturante
            </ScrollReveal>
            <div style={{ marginTop: "40px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                A paisagem é parte da arquitetura do Aquos.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                A presença da água, combinada ao desenho cuidadoso das áreas verdes, cria uma experiência sensorial
                contínua, promovendo conforto térmico, bem-estar e uma relação mais profunda com o ambiente natural.
              </p>
              <p className="padrao-p-internas">Viver aqui é perceber a natureza como parte do cotidiano.</p>
            </div>
          </div>
        </section>

        {/* ZOOM EMPREENDIMENTO */}
        <ZoomImage
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Aquos-6.webp"
          alt="Aquos Oasis Home — fachada"
        />

        {/* GALERIA HORIZONTAL */}
        <HorizontalGallery images={AQUOS_GALLERY_IMAGES} />

        {/* SEÇÃO 8 — texto puro */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Praia do Estaleiro: exclusividade natural
            </ScrollReveal>
            <div style={{ marginTop: "40px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                A escolha da Praia do Estaleiro reforça o posicionamento do Aquos Oasis Home como um empreendimento
                exclusivo, voltado para quem busca viver com mais privacidade, contato com a natureza e qualidade
                ambiental.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                A região preserva características raras em Balneário Camboriú, unindo paisagem natural, mar, vegetação e
                uma ocupação urbana mais controlada, que valoriza o silêncio e o tempo.
              </p>
              <p className="padrao-p-internas">
                O Aquos Oasis Home nasce desse contexto, ampliando a experiência de viver na região sem
                descaracterizá-la.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGEM SCROLL CENTRALIZADA */}
        <ImageScrollCentralizada
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/aquos-32.jpg"
          alt="Aquos Oasis Home — interior"
        />

        {/* CTA */}
        <section className="px-6 py-[120px] md:py-[200px]" style={{ background: "#F5F5F5" }}>
          <div className="max-w-[1300px] mx-auto text-left">
            <ScrollReveal as="h2" className="font-light text-black text-[clamp(40px,5vw,64px)] max-w-[1200px]">
              Honre o seu legado
            </ScrollReveal>
            <div style={{ marginTop: "40px", maxWidth: "1200px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                O Aquos Oasis Home expressa a visão da Blue Heaven de criar empreendimentos autorais, onde arquitetura,
                território e bem-estar coexistem em equilíbrio.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                Um imóvel exclusivo concebido para quem valoriza a paisagem, a arquitetura sensível e uma forma de viver
                conectada à essência do lugar.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "48px" }}>
                Uma obra que nasce da água, do território e do tempo. E permanece.
              </p>
              <a className={btnClass} href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white py-[100px] md:py-[160px] px-6">
          <div className="max-w-[1100px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Perguntas Frequentes sobre o Aquos Oasis Home
            </ScrollReveal>
            <div style={{ marginTop: "48px" }}>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
