import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoGrowSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0.1, 0.6], ["40%", "100%"]);
  const height = useTransform(scrollYProgress, [0.1, 0.6], ["56vh", "100vh"]);

  return (
    <section ref={ref} className="relative h-[250vh] w-full bg-white overflow-hidden">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.video
          style={{ width, height, borderRadius: 0 }}
          src="https://projetos.h2web.com.br/blueheaven/videos/video-1.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="object-cover will-change-transform"
        />
      </div>
    </section>
  );
}
