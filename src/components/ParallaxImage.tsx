import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ParallaxImage({
  src,
  alt,
  aspectRatio = "4/5",
}: {
  src: string;
  alt: string;
  aspectRatio?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <div ref={ref} style={{ aspectRatio, overflow: "hidden", width: "100%" }}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y, width: "100%", height: "130%", objectFit: "cover", display: "block" }}
      />
    </div>
  );
}
