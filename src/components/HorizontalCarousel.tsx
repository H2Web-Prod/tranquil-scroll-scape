import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const images = [
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/extraordinario-reside-nos-detalhes.jpg",
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/projetos-voltados-experiencias-humanas.jpg",
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/sincronismo-tecnologia-garmonia-natureza.jpg",
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/04/extraordinario-reside-nos-detalhes.jpg",
];

export default function HorizontalCarousel() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", "-180vw"]);

  return (
    <section ref={ref} className="h-[400vh] relative bg-white w-full overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <div className="absolute top-[120px] left-8 md:left-[80px] w-[calc(100%-64px)] max-w-[1200px] z-10">
          <ScrollReveal as="h2" className="font-light text-left carousel-title">
            Desafiamos o inalcançável, esculpindo o extraordinário.
          </ScrollReveal>
          <style>{`
            .carousel-title {
              font-family: 'Public Sans', sans-serif;
              font-size: clamp(48px, 6vw, 88px);
              font-weight: 300;
              line-height: 1.1;
              color: #000;
            }
          `}</style>
        </div>

        <motion.div
          style={{ x }}
          className="absolute bottom-[60px] left-0 flex gap-6 h-[70vh] pl-[80px]"
        >
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              loading="lazy"
              className="h-full w-[55vw] object-cover flex-shrink-0"
              style={{ borderRadius: 0 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
