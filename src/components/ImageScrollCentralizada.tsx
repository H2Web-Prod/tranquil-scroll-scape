import { useRef, useState, useEffect } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

export default function ImageScrollCentralizada({
  src,
  alt = "",
}: {
  src: string;
  alt?: string;
}) {
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
  const width = useTransform(scrollYProgress, [0, 1], ["50%", "78%"]);

  if (isMobile) {
    return (
      <section className="bg-white w-full">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          style={{ width: "100%", height: "60vw", objectFit: "cover", display: "block" }}
        />
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-white overflow-hidden" style={{ height: "150vh" }}>
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
