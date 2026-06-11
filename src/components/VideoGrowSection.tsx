import { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function VideoGrowSection({ src }: { src: string }) {
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0.1, 0.6], ["40%", "100%"]);
  const height = useTransform(scrollYProgress, [0.1, 0.6], ["56vh", "100vh"]);

  if (isMobile) {
    return (
      <section className="bg-white w-full">
        <video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "auto",
            display: "block",
            objectFit: "contain",
          }}
        />
      </section>
    );
  }

  return (
    <section ref={ref} className="h-[250vh] relative bg-white">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <motion.video
          src={src}
          autoPlay
          muted
          loop
          playsInline
          style={{ width, height, borderRadius: 0 }}
          className="object-cover will-change-transform"
        />
      </div>
    </section>
  );
}
