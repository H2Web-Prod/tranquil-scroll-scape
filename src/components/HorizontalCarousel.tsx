import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const images = [
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/extraordinario-reside-nos-detalhes.jpg",
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/projetos-voltados-experiencias-humanas.jpg",
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/sincronismo-tecnologia-garmonia-natureza.jpg",
];

export default function HorizontalCarousel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // 3 imagens de 38vw + 2 gaps de 24px ≈ 114vw + 48px. Margem inicial esquerda 80px.
  // Para a última imagem ficar totalmente visível à direita com ~80px de respiro:
  // translateX final ≈ -(114vw + 48px - 100vw + 160px) ≈ -14vw - 208px → arredondamos.
  const x = useTransform(scrollYProgress, [0, 1], ["0px", "calc(-14vw - 210px)"]);

  return (
    <section ref={ref} className="h-[350vh] relative bg-white w-full overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute top-[80px] left-8 md:top-[120px] md:left-[80px] max-w-[90%] md:max-w-[50%] z-10">
          <ScrollReveal as="h2" className="font-light text-left carousel-title">
            Desafiamos o inalcançável, esculpindo o extraordinário.
          </ScrollReveal>
          <style>{`
            .carousel-title {
              font-family: 'Public Sans', sans-serif;
              font-size: clamp(40px, 5vw, 64px);
              font-weight: 300;
              line-height: 1.1;
              color: #000;
            }
          `}</style>
        </div>

        <motion.div
          style={{ x }}
          className="absolute bottom-[80px] left-8 md:left-[80px] flex gap-6 h-[55vh]"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-[80vw] md:w-[38vw] object-cover flex-shrink-0"
              style={{ borderRadius: 0 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
