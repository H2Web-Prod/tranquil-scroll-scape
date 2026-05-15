import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const cards = [
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/extraordinario-reside-nos-detalhes.jpg",
    text: "Empreendimentos com assinatura Architects Office",
  },
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/projetos-voltados-experiencias-humanas.jpg",
    text: "Projetos voltados às experiências humanas",
  },
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/sincronismo-tecnologia-garmonia-natureza.jpg",
    text: "Sincronismo de tecnologia e harmonia com a natureza",
  },
];

function ParallaxCard({ image, text, index }: { image: string; text: string; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-30, 30]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1.2, delay: index * 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col gap-6"
    >
      <div className="overflow-hidden" style={{ aspectRatio: "4/5" }}>
        <motion.div
          style={{ y, backgroundImage: `url(${image})` }}
          className="w-full h-[110%] -mt-[5%] bg-cover bg-center will-change-transform"
        />
      </div>
      <p className="text-black font-light text-[20px] leading-[1.5]">{text}</p>
    </motion.div>
  );
}

export default function DetailsGrid() {
  return (
    <section className="bg-white py-[100px] md:py-[200px] px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="text-center mb-20">
          <ScrollReveal
            as="h2"
            className="font-light text-black tracking-[0.05em]"
          >
            O EXTRAORDINÁRIO RESIDE NOS DETALHES
          </ScrollReveal>
          <style>{`
            section h2 { font-size: clamp(32px, 5vw, 72px); }
          `}</style>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {cards.map((c, i) => (
            <ParallaxCard key={c.text} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
