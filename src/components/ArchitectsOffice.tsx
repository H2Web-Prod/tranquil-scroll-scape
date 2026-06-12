import ScrollReveal from "./ScrollReveal";
import MinimalAudioPlayer from "./MinimalAudioPlayer";
import ParallaxImage from "./ParallaxImage";
import FadeInUp from "./FadeInUp";
import StaggerStack from "./StaggerStack";

const GREG_AUDIO = "https://projetos.h2web.com.br/blueheaven/videos/greg-audio.mp3";

export function ChallengeSection() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-[180px] md:py-[280px]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal as="h2" className="font-light text-left">
          Desafiamos o inalcançável, esculpindo o extraordinário.
        </ScrollReveal>
        <style>{`
          section h2.font-light { font-family: 'Public Sans', sans-serif; font-size: clamp(48px, 6vw, 88px); line-height: 1.1; font-weight: 300; color: #000; }
        `}</style>
      </div>
    </section>
  );
}

export function ConnectingSection() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-[180px] md:py-[280px]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal as="h2" className="font-light mb-12">
          Conectando o humano ao ambiente.
        </ScrollReveal>
        <style>{`
          section h2.font-light { font-family: 'Public Sans', sans-serif; font-size: clamp(40px, 5vw, 64px); line-height: 1.15; font-weight: 300; color: #000; max-width: 1200px; }
        `}</style>
        <p className="padrao-p" style={{ maxWidth: "1200px" }}>
          A Architects Office combina o global e o local, o orgânico e o mineral, com uma atenção detalhada à escala
          humana e ao meio ambiente, trazendo abordagens únicas para cada projeto.
        </p>

<div className="mt-[120px] md:mt-[160px] grid md:grid-cols-[42%_1fr] gap-12 md:gap-20 items-center">
          <FadeInUp>
            <ParallaxImage
              src="https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/greg-1.jpg"
              alt="Greg Bousquet"
              aspectRatio="3/4"
            />
          </FadeInUp>
          <div>
            <StaggerStack baseDelay={0.4} step={0.2}>
              <h3 className="mb-6 text-black" style={{ fontWeight: 400, fontSize: "32px" }}>
                Greg Bousquet
              </h3>
              <div style={{ margin: "16px 0 24px" }}>
                <MinimalAudioPlayer src={GREG_AUDIO} />
              </div>
              <p className="padrao-p">
                Fundador do Architects Office e Triptyque Architecture. Sócio fundador do Architects Office LX.
              </p>
            </StaggerStack>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function ArchitectsOffice() {
  return (
    <>
      <ChallengeSection />
      <ConnectingSection />
    </>
  );
}
