import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import VideoModal from "@/components/VideoModal";
import FadeInUp from "@/components/FadeInUp";
import ParallaxImage from "@/components/ParallaxImage";
import ImageGrowSection from "@/components/ImageGrowSection";
import ZoomImage from "@/components/ZoomImage";
import FAQAccordion, { type FAQItem } from "@/components/FAQAccordion";

export const Route = createFileRoute("/infinita-treehouse")({
  head: () => ({
    meta: [
      { title: "Infinitá Treehouse | Imóvel Exclusivo em Itajaí | Blue Heaven" },
      { name: "description", content: "Um refúgio suspenso entre a arquitetura e a natureza." },
      { property: "og:title", content: "Infinitá Treehouse | Imóvel Exclusivo em Itajaí | Blue Heaven" },
      { property: "og:description", content: "Um refúgio suspenso entre a arquitetura e a natureza." },
      { property: "og:image", content: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/alex-bertha-Jyg7xHRmXiU-unsplash-scaled.jpg" },
      { property: "og:type", content: "article" },
    ],
  }),
  component: InfinitaTreehouse,
});

const WHATSAPP =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

const VIDEO_RENATA = "https://projetos.h2web.com.br/blueheaven/videos/blueheaven-renata.mp4";
const VIDEO_GREG = "https://projetos.h2web.com.br/blueheaven/videos/greg-video.mp4";

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
};

const quoteStyle: React.CSSProperties = {
  fontStyle: "italic",
  fontSize: "22px",
  color: "#000000",
  lineHeight: 1.6,
  borderLeft: "2px solid #000000",
  paddingLeft: "24px",
  fontFamily: "'Public Sans', sans-serif",
};

const faqs: FAQItem[] = [
  { q: "O que é o Infinitá Treehouse?", a: "O Infinitá Treehouse é um empreendimento residencial exclusivo da Blue Heaven, localizado em Itajaí, próximo à Marina. Com um apartamento por pavimento, piscinas privativas nas unidades e forte presença de arquitetura autoral, o projeto propõe uma forma de morar sofisticada, integrada à paisagem e ao estilo de vida da região. O Infinitá se destaca pelo cuidado técnico, escolha de materiais premium, soluções arquitetônicas renomadas e experiência espacial oferecida aos moradores, posicionando-se como um dos projetos mais exclusivos da cidade." },
  { q: "Onde o Infinitá Treehouse está localizado?", a: "O Infinitá Treehouse está localizado em Itajaí, no bairro Fazenda, a poucos metros da Marina de Itajaí. A região é reconhecida pelo alto padrão urbano, proximidade com o eixo náutico da cidade e infraestrutura completa de serviços, gastronomia e mobilidade. A localização garante acesso rápido à Beira-Rio, ao centro e às principais conexões da cidade, além de uma relação direta com a paisagem da marina." },
  { q: "Por que Itajaí foi escolhida para receber o Infinitá Treehouse?", a: "Itajaí foi escolhida pela combinação entre desenvolvimento urbano, força econômica e relação direta com o universo náutico. A cidade concentra uma marina estruturada, infraestrutura completa, acesso facilitado às principais vias da região e um público que valoriza projetos residenciais exclusivos. O bairro Fazenda, em especial, apresenta localização estratégica, qualidade urbana e proximidade com a Beira-Rio, criando o contexto ideal para um empreendimento como o Infinitá Treehouse." },
  { q: "Como a região influencia o conceito do Infinitá Treehouse?", a: "A região influencia diretamente as decisões arquitetônicas e a forma de viver proposta pelo Infinitá Treehouse. A proximidade com a Marina de Itajaí, a Beira-Rio e a dinâmica náutica da cidade orientaram soluções como a integração dos ambientes sociais, a valorização da vista, a relação entre interior e exterior e o uso de materiais com forte presença natural. O projeto foi desenvolvido para dialogar com o entorno urbano e paisagístico do bairro Fazenda, respeitando sua escala, seu ritmo e o perfil de quem vive ou circula por essa área da cidade." },
  { q: "O Infinitá Treehouse dialoga com o desenvolvimento urbano de Itajaí?", a: "Sim. O Infinitá Treehouse foi desenvolvido em sintonia com o crescimento urbano de Itajaí, especialmente do bairro Fazenda, que concentra investimentos qualificados, infraestrutura consolidada e forte relação com a Marina e a Beira-Rio. O projeto acompanha a evolução da cidade ao propor arquitetura autoral, soluções construtivas alinhadas ao contexto local e um padrão residencial compatível com a vocação náutica e o perfil econômico da região. Essa leitura urbana orienta decisões de implantação, volumetria e uso dos espaços, garantindo coerência com o momento atual de Itajaí." },
  { q: "Quem assina a arquitetura do Infinitá Treehouse?", a: "A arquitetura do Infinitá Treehouse é assinada pela Architects Office, com participação do escritório Triptyque Architecture. O projeto reúne expertise nacional e internacional, com uma abordagem autoral que orienta decisões de volumetria, implantação, materiais e relação com o entorno urbano e natural de Itajaí." },
  { q: "Quem é a Triptyque?", a: "A Triptyque Architecture é um escritório de arquitetura com atuação internacional, fundado por Greg Bousquet. Reconhecida por projetos residenciais e institucionais de alto padrão, a Triptyque desenvolve trabalhos que exploram estrutura, materialidade e relação urbana, com obras realizadas no Brasil e no exterior." },
  { q: "Quem é a Architects Office?", a: "A Architects Office é um estúdio de arquitetura que atua no desenvolvimento de projetos autorais e complexos, com forte domínio técnico e atenção à experiência espacial. No Infinitá Treehouse, a Architects Office conduz a arquitetura do empreendimento em parceria com a Triptyque, garantindo coerência entre conceito, execução e qualidade construtiva." },
  { q: "Por que a Triptyque e a Architects Office foram escolhidas para assinar o Infinitá Treehouse?", a: "A escolha da Triptyque Architecture e da Architects Office está ligada à capacidade técnica, ao repertório construído e à afinidade com a visão da Blue Heaven. Ambos os escritórios atuam em projetos residenciais complexos, com domínio de escala, materialidade e soluções arquitetônicas consistentes. Essa combinação permite desenvolver um empreendimento com identidade própria, coerência entre conceito e execução e alto nível de precisão construtiva, alinhado ao contexto urbano e ao padrão do Infinitá Treehouse." },
  { q: "Qual é o conceito arquitetônico do projeto?", a: "O conceito arquitetônico do Infinitá Treehouse parte da relação entre arquitetura, paisagem e modo de viver. O projeto prioriza plantas amplas, integração entre áreas sociais e externas, uso criterioso de materiais naturais e soluções que favorecem vista, ventilação e iluminação. A arquitetura foi desenvolvida para dialogar com o ambiente urbano e náutico de Itajaí, criando uma experiência residencial sofisticada, funcional e alinhada ao padrão construtivo único da Blue Heaven." },
  { q: "Como a natureza está presente no Infinitá Treehouse?", a: "A natureza está integrada ao Infinitá Treehouse por meio de soluções arquitetônicas e paisagísticas que qualificam a experiência de morar. O projeto valoriza a relação com a vegetação, a vista para a marina e a presença de áreas externas amplas, como varandas e piscinas privativas. Materiais de origem natural, texturas orgânicas e o cuidado com luz, ventilação e paisagem reforçam essa proximidade, criando ambientes que dialogam com o entorno e ampliam a sensação de bem-estar no uso diário do apartamento." },
  { q: "Quem assina o paisagismo do empreendimento?", a: "O projeto paisagístico é assinado por Renata Tilli, que desenvolve uma proposta onde a vegetação atua como extensão da arquitetura. O paisagismo cria transições suaves entre os espaços construídos e o ambiente natural, reforçando a integração com o entorno." },
  { q: "O Infinitá Treehouse é um imóvel exclusivo?", a: "Sim. O Infinitá Treehouse é um imóvel exclusivo, pensado para um público que busca mais do que uma residência. É um projeto voltado a quem valoriza arquitetura autoral, integração com a natureza e uma forma de viver alinhada ao equilíbrio, à estética e à essência do lugar." },
  { q: "Para quem o Infinitá Treehouse foi concebido?", a: "O Infinitá Treehouse foi idealizado para pessoas que buscam um imóvel residencial único, com localização estratégica, arquitetura autoral e relação direta com o estilo de vida náutico de Itajaí. O projeto atende moradores que valorizam privacidade, conforto, vista qualificada e soluções construtivas precisas, além de investidores que reconhecem o potencial de valorização do bairro Fazenda e da região da Marina. É um empreendimento voltado a quem procura exclusividade, qualidade técnica e uma forma de viver alinhada ao padrão urbano e econômico da cidade." },
  { q: "Qual é a visão da Blue Heaven neste projeto?", a: "A visão da Blue Heaven no Infinitá Treehouse está centrada na criação de um empreendimento residencial que represente um novo patamar de morar em Itajaí. O projeto parte de decisões arquitetônicas autorais, escolhas técnicas rigorosas e uma implantação estratégica que privilegia vista, privacidade e integração urbana. A Blue Heaven enxerga o Infinitá Treehouse como um ativo imobiliário consistente, pensado para manter relevância ao longo do tempo, alinhado ao crescimento da cidade, à força da Marina Itajaí e ao perfil de um público que busca qualidade construtiva, exclusividade e valor real no longo prazo." },
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
      <section className="py-[100px] md:py-[180px] px-6 md:px-10">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reverse ? "md:order-2" : ""}>
            <ParallaxImage src={image} alt={alt} aspectRatio="4/5" />
          </div>
          <div className={reverse ? "md:order-1" : ""}>{children}</div>
        </div>
      </section>
    </FadeInUp>
  );
}

function PersonBlock({
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
      <section className="py-[100px] md:py-[160px] px-6 md:px-10 bg-white">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className={reverse ? "md:order-2" : ""}>
            <ParallaxImage src={image} alt={alt} aspectRatio="3/4" />
          </div>
          <div className={reverse ? "md:order-1" : ""}>{children}</div>
        </div>
      </section>
    </FadeInUp>
  );
}

function InfinitaTreehouse() {
  useLenis();
  const [renataOpen, setRenataOpen] = useState(false);
  const [gregOpen, setGregOpen] = useState(false);

  return (
    <div className="bg-white relative">
      <Header theme="dark" />
      <main>
        {/* HERO */}
        <section
          className="relative w-full"
          style={{
            height: "100vh",
            backgroundImage:
              "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/alex-bertha-Jyg7xHRmXiU-unsplash-scaled.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className="absolute top-[100px] right-[32px] md:top-[140px] md:right-[80px]"
            style={{
              maxWidth: "50vw",
              textAlign: "right",
              zIndex: 5,
            }}
          >
            <h1
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 88px)",
                lineHeight: 1.1,
                color: "#000000",
                letterSpacing: "-0.02em",
              }}
            >
              Infinitá Treehouse<br />
              by Architects Office &amp; Triptyque
            </h1>
          </div>
        </section>

        {/* SEÇÃO 1 */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black" >
              Moldado pelo homem, inspirado pela natureza
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
              Um refúgio suspenso entre a arquitetura e a natureza.
            </p>
            <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
              O Infinitá Treehouse nasce em Itajaí como uma interpretação sensível do habitar contemporâneo, onde a arquitetura não se impõe ao entorno, mas dialoga com ele.
            </p>
            <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
              Inserido em um território marcado pela presença da água, da vegetação e da escala humana, o empreendimento traduz a proposta da Blue Heaven de criar obras que respeitam a região e permanecem relevantes ao longo do tempo.
            </p>
            <p className="padrao-p-internas">
              Aqui, morar é experimentar o equilíbrio entre cidade e natureza, em um endereço que traz a contemplação, o silêncio e a integração com a paisagem.
            </p>
          </div>
        </section>

        {/* IMAGEM SCROLL 100% */}
        <ImageGrowSection src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-infinita-treehouse.jpg" />

        {/* SEÇÃO 2 — Arquitetura (Colunas Efeito) */}
        <ZigZagBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/infinita-02.jpg"
          alt="Infinitá Treehouse — arquitetura"
        >
          <span style={eyebrowStyle}>ARQUITETURA</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Arquitetura que se constrói a partir do entorno
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              O Infinitá Treehouse é assinado pela Architects Office em colaboração com a Triptyque. Dois escritórios com atuação internacional e repertório consistente em projetos que consideram território, clima e forma de ocupação.
            </p>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              O desenho parte de uma leitura precisa do terreno, com volumes e aberturas que organizam a presença do empreendimento sem romper a relação com a paisagem. A implantação conduz essa lógica ao longo de todo o projeto. A arquitetura se estabelece a partir do lugar, introduzindo escala, vegetação e topografia para orientar decisões que definem a forma construída.
            </p>
            <p className="padrao-p-internas">
              Architects Office e Triptyque conduzem o projeto alinhados à visão da Blue Heaven. A arquitetura assume papel ativo na forma como o espaço é vivido, mantendo coerência entre construção, entorno e tempo.
            </p>
          </div>
        </ZigZagBlock>

        {/* SEÇÃO 3 — texto puro */}
        <section className="bg-white py-[140px] md:py-[240px] px-6">
          <div className="max-w-[1300px] mx-auto">
            <ScrollReveal as="h2" className="font-light text-black">
              Um projeto que nasce do território
            </ScrollReveal>
            <div style={{ marginTop: "40px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                O Infinitá Treehouse é assinado pela Architects Office em colaboração com a Triptyque. Dois escritórios com atuação internacional e repertório consistente em projetos que consideram território, clima e forma de ocupação.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                O desenho parte de uma leitura precisa do terreno, com volumes e aberturas que organizam a presença do empreendimento sem romper a relação com a paisagem. A implantação conduz essa lógica ao longo de todo o projeto. A arquitetura se estabelece a partir do lugar, introduzindo escala, vegetação e topografia para orientar decisões que definem a forma construída.
              </p>
              <p className="padrao-p-internas">
                Architects Office e Triptyque conduzem o projeto alinhados à visão da Blue Heaven. A arquitetura assume papel ativo na forma como o espaço é vivido, mantendo coerência entre construção, entorno e tempo.
              </p>
            </div>
          </div>
        </section>

        {/* DUAS IMAGENS COM ZOOM EMPREENDIMENTO EM SEQUÊNCIA */}
        <ZoomImage
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/BHE_INF_Fachada_Voo_EF.webp"
          alt="Infinitá Treehouse — fachada vista aérea"
        />
        <ZoomImage
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/BHE_INF_Fachada_Extra.webp"
          alt="Infinitá Treehouse — fachada"
        />

        {/* RENATA */}
        <PersonBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Renata.webp"
          alt="Renata Tilli"
        >
          <span style={eyebrowStyle}>PAISAGISMO</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Paisagismo como extensão da arquitetura
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <p className="padrao-p-internas" style={{ marginBottom: "20px" }}>
              O projeto paisagístico, assinado por Renata Tilli, reforça a proposta de integração com a natureza. A vegetação é tratada como elemento estrutural do projeto, criando transições suaves entre os espaços construídos e o ambiente natural, além de contribuir para o conforto térmico, visual e sensorial dos moradores.
            </p>
            <p className="padrao-p-internas" style={{ marginBottom: "32px" }}>
              A natureza não aparece como cenário, mas como parte essencial da experiência de habitar.
            </p>
            <button className={btnClass} onClick={() => setRenataOpen(true)}>
              Assistir vídeo
            </button>
          </div>
        </PersonBlock>

        {/* GREG */}
        <PersonBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/Triptyque_Greg-Bousquet_FotoJulia-Rodrigues.webp"
          alt="Greg Bousquet"
          reverse
        >
          <span style={eyebrowStyle}>ARQUITETURA</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Assinatura internacional Architects Office
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <blockquote style={quoteStyle}>
              "Encontramos em Itajaí a beleza brasileira que fez parte da equação total ao prédio com essas vistas, o interno com externo e conexão do ser humano com a natureza"
            </blockquote>
            <p className="padrao-p-internas" style={{ marginTop: "16px", marginBottom: "32px" }}>
              — Greg Bousquet, fundador da Architects Office, responsável pelo projeto do Infinitá Treehouse.
            </p>
            <button className={btnClass} onClick={() => setGregOpen(true)}>
              Assistir vídeo
            </button>
          </div>
        </PersonBlock>

        {/* RAPHAELL */}
        <PersonBlock
          image="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/rafael.jpg"
          alt="Raphaell Valença"
        >
          <span style={eyebrowStyle}>DESIGN DE INTERIORES</span>
          <ScrollReveal as="h2" className="font-light text-black">
            Design que dialoga com o entorno
          </ScrollReveal>
          <div style={{ marginTop: "32px" }}>
            <blockquote style={quoteStyle}>
              "O prédio está localizado entre águas, a mata e as montanhas e perto de uma das principais marinas do país, então desenvolvemos um estudo para criar piscinas com vidro e lajes inclinadas em frente a todos os apartamentos gerando essa ligação com o horizonte. A parte de trás, onde é a suíte master fica em frente para um quadro vivo verde, e o uso de vidros volta o espaço completamente para a mata"
            </blockquote>
            <p className="padrao-p-internas" style={{ marginTop: "12px", marginBottom: "28px" }}>
              — Raphaell Valença, designer de interiores da Architects Office.
            </p>
            <blockquote style={quoteStyle}>
              "Dentro da nossa proposta de decoração para um dos apartamentos, traduzimos esse universo náutico, o mar, e trazer cores, materiais curvos e assimétricos, que geram fluidez por meio das linhas orgânicas. Utilizamos uma base mais neutra nas áreas sociais para fortalecer a iluminação natural e o contato visual com a água e tons mais quentes na área íntima para a sensação de aconchego. A arquitetura foi pensada para contribuir com a melhoria da qualidade de vida das pessoas"
            </blockquote>
            <p className="padrao-p-internas" style={{ marginTop: "12px", marginBottom: "28px" }}>
              — Valença.
            </p>
            <blockquote style={quoteStyle}>
              "Hoje mais de 55% da população mundial vive em centros urbanos, então o meio ambiente é arquitetura, estamos criando o nosso mundo"
            </blockquote>
            <p className="padrao-p-internas" style={{ marginTop: "12px" }}>
              — Bousquet.
            </p>
          </div>
        </PersonBlock>

        {/* CTA */}
        <section className="px-6 py-[120px] md:py-[200px]" style={{ background: "#F5F5F5" }}>
          <div className="max-w-[1300px] mx-auto text-left">
            <ScrollReveal
              as="h2"
              className="font-light text-black text-[clamp(40px,5vw,64px)] max-w-[1200px]"
            >
              Viver Infinitá é viver em sintonia com o tempo e o espaço
            </ScrollReveal>
            <div style={{ marginTop: "40px", maxWidth: "1200px" }}>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                O Infinitá Treehouse traduz a visão da Blue Heaven de criar empreendimentos autorais, onde arquitetura, natureza e experiência caminham juntas.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "24px" }}>
                Um projeto de imóvel exclusivo pensado para quem busca mais do que uma residência, mas uma forma de viver alinhada ao equilíbrio, à estética e à essência do lugar.
              </p>
              <p className="padrao-p-internas" style={{ marginBottom: "48px" }}>
                Uma obra singular, concebida para permanecer.
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
              Perguntas Frequentes sobre o Infinitá Treehouse
            </ScrollReveal>
            <div style={{ marginTop: "48px" }}>
              <FAQAccordion items={faqs} />
            </div>
          </div>
        </section>
      </main>
      <Footer />

      <VideoModal src={VIDEO_RENATA} isOpen={renataOpen} onClose={() => setRenataOpen(false)} />
      <VideoModal src={VIDEO_GREG} isOpen={gregOpen} onClose={() => setGregOpen(false)} />
    </div>
  );
}
