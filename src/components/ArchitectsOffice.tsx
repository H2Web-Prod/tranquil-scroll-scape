import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import MinimalAudioPlayer from "./MinimalAudioPlayer";

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
          A Architects Office combina o global e o local, o orgânico e o mineral, com uma atenção detalhada à escala humana e ao meio ambiente, trazendo abordagens únicas para cada projeto.
        </p>

        <div className="relative mt-[120px] md:mt-[160px] grid md:grid-cols-[42%_1fr] gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
            style={{ aspectRatio: "3/4" }}
          >
            <img
              src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/greg-bousquet-fundador-architects-office.jpg"
              alt="Greg Bousquet"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div>
            <h3 className="mb-6 text-black" style={{ fontWeight: 400, fontSize: "32px" }}>Greg Bousquet</h3>
            <p className="padrao-p">
              Fundador do Architects Office e Triptyque Architecture. Sócio fundador do Architects Office LX.
            </p>
          </div>

          {/* Player sobreposto — desktop */}
          <div className="hidden md:block absolute z-10" style={{ top: 80, left: "30%" }}>
            <MinimalAudioPlayer src={GREG_AUDIO} />
          </div>

          {/* Player abaixo da imagem — mobile */}
          <div className="block md:hidden -mt-6">
            <MinimalAudioPlayer src={GREG_AUDIO} />
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
