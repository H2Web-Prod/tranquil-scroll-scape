import { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageGrowSection({
  src = "https://projetos.h2web.com.br/blueheaven/blog/wp-content/uploads/2026/06/home-1b.jpg",
}: { src?: string } = {}) {
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
        <img
          src={src}
          alt=""
          loading="lazy"
          style={{ width: "100%", height: "60vw", objectFit: "cover", display: "block" }}
        />
      </section>
    );
  }

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
