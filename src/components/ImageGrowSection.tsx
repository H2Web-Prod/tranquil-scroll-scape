import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageGrowSection({
  src = "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/desafio-1.jpg",
}: { src?: string } = {}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0.1, 0.6], ["40%", "100%"]);
  const height = useTransform(scrollYProgress, [0.1, 0.6], ["56vh", "100vh"]);

  return (
    <section ref={ref} className="h-[250vh] relative bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.img
          style={{ width, height, borderRadius: 0 }}
          src={src}
          alt=""
          loading="lazy"
          className="object-cover will-change-transform"
        />
      </div>
    </section>
  );
}
