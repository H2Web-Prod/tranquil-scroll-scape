import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalGalleryProps {
  images: string[];
}

export default function HorizontalGallery({ images }: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateDistance, setTranslateDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setTranslateDistance(0);
      return;
    }

    const calculateDistance = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const viewportWidth = window.innerWidth;
      const distance = trackWidth - viewportWidth;
      setTranslateDistance(distance > 0 ? distance : 0);
    };

    calculateDistance();
    window.addEventListener("resize", calculateDistance);
    const timer = setTimeout(calculateDistance, 500);
    return () => {
      window.removeEventListener("resize", calculateDistance);
      clearTimeout(timer);
    };
  }, [images, isMobile]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateDistance]);

  if (isMobile) {
    return (
      <section className="relative bg-white">
        <style>{`
          .horizontal-gallery-mobile::-webkit-scrollbar { display: none; }
          .horizontal-gallery-mobile { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
        <div
          className="horizontal-gallery-mobile flex gap-4 overflow-x-auto px-4 py-8"
          style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden"
              style={{ width: "75vw", aspectRatio: "3 / 4", scrollSnapAlign: "start" }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative bg-white"
      style={{ height: "300vh" }}
    >
      <style>{`
        @media (max-width: 1023px) {
          .horizontal-gallery-track > div { width: 35vw !important; }
        }
      `}</style>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="horizontal-gallery-track flex gap-6 px-6 will-change-transform"
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 overflow-hidden"
              style={{ width: "25vw", aspectRatio: "3 / 4" }}
            >
              <img
                src={src}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
