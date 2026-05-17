import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZoomImage({ src, alt = "" }: { src: string; alt?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.25]);

  return (
    <section ref={ref} className="h-[130vh] w-full overflow-hidden relative">
      <motion.div
        style={{ scale, backgroundImage: `url(${src})` }}
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        aria-label={alt}
      />
    </section>
  );
}
