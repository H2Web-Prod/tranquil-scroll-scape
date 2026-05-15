import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function AboutBlueHeaven() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-40, 40]);

  return (
    <section className="bg-white py-[100px] md:py-[200px] px-6">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 gap-16 md:gap-24 items-center">
        <div>
          <p className="text-[#b85c3c] font-medium text-[13px] tracking-[0.3em] uppercase mb-8">
            — A Blue Heaven
          </p>
          <ScrollReveal as="h2" className="font-light text-black mb-12">
            Construímos com a natureza, não contra ela.
          </ScrollReveal>
          <style>{`
            section h2 { font-size: clamp(36px, 4.5vw, 64px); line-height: 1.15; }
          `}</style>
          <div className="text-black mb-12" style={{ fontSize: "18px", lineHeight: 1.8 }}>
            <ScrollReveal as="p" className="font-light">
              Somos a Blue Heaven, construtora de imóveis exclusivos, criadora da filosofia Building With Nature. Utilizamos nossa inteligência construtiva e tecnologia para desenvolver empreendimentos que se tornam obras de arte esculpidas a partir de uma abordagem artesanal e única, transformando espaços em ambientes que enaltecem a natureza e a modernidade concebida pela vida humana.
            </ScrollReveal>
          </div>
          <motion.a
            href="https://projetos.h2web.com.br/blueheaven/quem-somos/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block font-roboto font-medium text-[16px] text-black bg-white border border-black rounded-full px-[25px] py-[12px] hover:bg-black hover:text-white transition-all duration-400"
          >
            Saiba Mais
          </motion.a>
        </div>
        <div ref={ref} className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
          <motion.div
            style={{
              y,
              backgroundImage:
                "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-infinita-treehouse.jpg)",
            }}
            className="w-full h-[110%] -mt-[5%] bg-cover bg-center will-change-transform"
          />
        </div>
      </div>
    </section>
  );
}
