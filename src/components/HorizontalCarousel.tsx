import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-200%"]);

  return (
    <section ref={ref} className="h-[300vh] relative bg-white w-full overflow-hidden">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex flex-row gap-4 h-full">
          {images.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className="h-full w-[85vw] flex-shrink-0 object-cover"
              style={{ borderRadius: 0 }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
