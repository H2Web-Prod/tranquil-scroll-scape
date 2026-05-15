import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function ArchitectsOffice() {
  return (
    <section className="bg-white text-black">
      {/* Tela 1 */}
      <div className="min-h-screen flex items-center px-6 md:px-16 py-[100px]">
        <div className="max-w-[1200px] mx-auto">
          <p className="text-[#b85c3c] font-medium text-[13px] tracking-[0.3em] uppercase mb-8">
            — Assinatura Internacional na Arquitetura
          </p>
          <ScrollReveal as="h2" className="font-light leading-[1.15]">
            Desafiamos o inalcançável, esculpindo o extraordinário.
          </ScrollReveal>
          <style>{`
            section h2 { font-size: clamp(40px, 6vw, 88px); }
          `}</style>
        </div>
      </div>

      {/* Tela 2 */}
      <div className="min-h-screen flex items-center px-6 md:px-16 py-[100px]">
        <div className="max-w-[1100px] mx-auto">
          <ScrollReveal as="h3" className="font-light text-[clamp(32px,4vw,56px)] mb-12">
            Conectando o humano ao ambiente.
          </ScrollReveal>
          <div className="text-black" style={{ fontSize: "20px", lineHeight: 1.7 }}>
            <ScrollReveal as="p" className="font-light">
              A Architects Office combina o global e o local, o orgânico e o mineral, com uma atenção detalhada à escala humana e ao meio ambiente, trazendo abordagens únicas para cada projeto.
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Tela 3 - Founder */}
      <div className="min-h-screen flex items-center px-6 md:px-16 py-[100px]">
        <div className="max-w-[1100px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden rounded-sm"
          >
            <img
              src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/greg-bousquet-fundador-architects-office.jpg"
              alt="Greg Bousquet"
              loading="lazy"
              className="w-full h-auto"
            />
          </motion.div>
          <div>
            <h4 className="font-light text-[clamp(32px,3vw,48px)] mb-6 text-black">Greg Bousquet</h4>
            <p className="text-black font-light text-[18px] leading-[1.7]">
              Fundador do Architects Office e Triptyque Architecture. Sócio fundador do Architects Office LX.
            </p>
          </div>
        </div>
      </div>
    </section>
