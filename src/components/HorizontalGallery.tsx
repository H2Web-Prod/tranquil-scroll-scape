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
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
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
      <section
        style={{
          background: "#FFFFFF",
          padding: "60px 0",
          width: "100%",
          overflowX: "auto",
          overflowY: "hidden",
          WebkitOverflowScrolling: "touch",
          scrollbarWidth: "none",
        }}
      >
        <style>{`
          .horizontal-gallery-mobile::-webkit-scrollbar { display: none; }
        `}</style>
        <div
          className="horizontal-gallery-mobile"
          style={{
            display: "flex",
            gap: "16px",
            paddingLeft: "24px",
            paddingRight: "24px",
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                flex: "none",
                width: "75vw",
                aspectRatio: "3 / 4",
                overflow: "hidden",
                background: "#f2f2f2",
              }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
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
      style={{
        height: "500vh",
        background: "#FFFFFF",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          width: "100%",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
        }}
      >
        <motion.div
          ref={trackRef}
          className="horizontal-gallery-track"
          style={{
            x,
            display: "flex",
            gap: "24px",
            paddingLeft: "120px",
            paddingRight: "80px",
            willChange: "transform",
          }}
        >
          <style>{`
            .horizontal-gallery-track > div {
              width: 25vw;
              aspect-ratio: 3 / 4;
            }
            @media (max-width: 1023px) {
              .horizontal-gallery-track > div {
                width: 35vw;
              }
            }
          `}</style>
          {images.map((src, i) => (
            <div
              key={i}
              style={{
                flex: "none",
                overflow: "hidden",
                background: "#f2f2f2",
              }}
            >
              <img
                src={src}
                alt=""
                draggable={false}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
