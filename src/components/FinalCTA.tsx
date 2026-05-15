import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

export default function FinalCTA() {
  return (
    <section
      className="relative py-[120px] md:py-[220px] px-6 bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/empreendimento-aquos-oasis-home.jpg)",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative max-w-[900px] mx-auto text-center">
        <ScrollReveal as="h2" light className="font-light text-white">
          Seu novo estilo de vida começa aqui
        </ScrollReveal>
        <style>{`
          section h2 { font-size: clamp(36px, 5vw, 80px); line-height: 1.15; }
        `}</style>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 0.9, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="text-white text-[20px] max-w-[640px] mx-auto mt-10 font-light leading-[1.6]"
        >
          Descubra como é viver em um lugar que conecta natureza, conforto e modernidade. Fale conosco e agende sua visita.
        </motion.p>
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block mt-12 font-roboto font-medium bg-white text-black border border-white rounded-full px-[25px] py-[12px] hover:bg-transparent hover:text-white transition-all duration-400"
        >
          Fale Conosco
        </motion.a>
      </div>
    </section>
  );
}
