import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ArchitectsOffice() {
  return (
    <section className="bg-white text-black">
      <div className="px-6 md:px-16 py-[180px] md:py-[280px]">
        <div className="max-w-[1200px] mx-auto">
          <ScrollReveal
            as="h2"
            className="font-light text-left"
          >
            Desafiamos o inalcançável, esculpindo o extraordinário.
          </ScrollReveal>
          <style>{`
            section h2 {
              font-family: 'Public Sans', sans-serif;
              font-size: clamp(48px, 6vw, 88px);
              font-weight: 300;
              line-height: 1.1;
              color: #000;
            }
          `}</style>
        </div>
      </div>
    </section>
  );
}

export function ConnectingHumans() {
  return (
    <section className="bg-white text-black px-6 md:px-16 py-[180px] md:py-[280px]">
      <div className="max-w-[1200px] mx-auto">
        <ScrollReveal
          as="h2"
          className="font-light text-left"
        >
          Conectando o humano ao ambiente.
        </ScrollReveal>
        <style>{`
          section h2 {
            font-family: 'Public Sans', sans-serif;
            font-size: clamp(40px, 5vw, 64px);
            font-weight: 300;
            color: #000;
            line-height: 1.15;
          }
        `}</style>
        <p className="padrao-p mt-10" style={{ maxWidth: "1200px", color: "#000", lineHeight: 1.7 }}>
          A Architects Office combina o global e o local, o orgânico e o mineral, com uma atenção detalhada à escala humana e ao meio ambiente, trazendo abordagens únicas para cada projeto.
        </p>

        <div className="grid md:grid-cols-[42%_1fr] gap-12 md:gap-16 items-center" style={{ marginTop: "120px" }}>
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
            <h3 style={{ fontFamily: "'Public Sans', sans-serif", fontWeight: 400, fontSize: "32px", color: "#000", marginBottom: "16px" }}>
              Greg Bousquet
            </h3>
            <p className="padrao-p" style={{ color: "#000" }}>
              Fundador do Architects Office e Triptyque Architecture. Sócio fundador do Architects Office LX.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
