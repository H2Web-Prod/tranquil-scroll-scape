import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageScrollCentralizada({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["50%", "78%"]);

  return (
    <section
      ref={ref}
      className="relative bg-white overflow-hidden"
      style={{ height: "150vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width, height: "auto", objectFit: "cover", display: "block" }}
          className="will-change-transform"
        />
      </div>
    </section>
  );
}
