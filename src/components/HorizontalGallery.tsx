import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HorizontalGalleryProps {
  images: string[];
  displayCount?: number;
}

export default function HorizontalGallery({ images, displayCount }: HorizontalGalleryProps) {
  const containerRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [translateDistance, setTranslateDistance] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const displayed = displayCount ? images.slice(0, displayCount) : images;

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
  }, [displayed, isMobile]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i - 1 + images.length) % images.length);
      if (e.key === "Escape") setLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, images.length]);

  // Block body scroll when lightbox open
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      const lenis = (window as any).__lenis;
      if (lenis) lenis.stop();
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis) lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis) lenis.start();
    };
  }, [lightboxOpen]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateDistance]);

  if (isMobile) {
    return (
      <>
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
          <style>{`.horizontal-gallery-mobile::-webkit-scrollbar { display: none; }`}</style>
          <div
            className="horizontal-gallery-mobile"
            style={{ display: "flex", gap: "16px", paddingLeft: "24px", paddingRight: "24px" }}
          >
            {displayed.map((src, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                style={{
                  flex: "none",
                  width: "75vw",
                  aspectRatio: "3 / 4",
                  overflow: "hidden",
                  background: "#f2f2f2",
                  cursor: "pointer",
                }}
              >
                <img
                  src={src}
                  alt=""
                  draggable={false}
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </div>
            ))}
          </div>
        </section>
        {lightboxOpen && (
          <LightboxOverlay
            images={images}
            index={lightboxIndex}
            onClose={() => setLightboxOpen(false)}
            onNavigate={setLightboxIndex}
          />
        )}
      </>
    );
  }

  return (
    <>
      <section ref={containerRef} style={{ height: "500vh", background: "#FFFFFF", position: "relative" }}>
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
              .horizontal-gallery-track > div { width: 25vw; aspect-ratio: 3 / 4; }
              @media (max-width: 1023px) { .horizontal-gallery-track > div { width: 35vw; } }
            `}</style>
            {displayed.map((src, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                style={{ flex: "none", overflow: "hidden", background: "#f2f2f2", cursor: "pointer" }}
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
                    transition: "transform 0.4s ease",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
      {lightboxOpen && (
        <LightboxOverlay
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setLightboxIndex}
        />
      )}
    </>
  );
}

// ─── Lightbox custom ───────────────────────────────────────────────────────────

interface LightboxOverlayProps {
  images: string[];
  index: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

function LightboxOverlay({ images, index, onClose, onNavigate }: LightboxOverlayProps) {
  const touchStartX = useRef<number>(0);

  const prev = () => onNavigate((index - 1 + images.length) % images.length);
  const next = () => onNavigate((index + 1) % images.length);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
  };

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "rgba(0,0,0,0.95)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Faixa de indicadores — área exclusiva no topo, nunca sobrepõe a imagem */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          flexWrap: "nowrap",
          zIndex: 2,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => onNavigate(i)}
            aria-label={`Ir para imagem ${i + 1}`}
            style={{
              width: "28px",
              height: "4px",
              padding: 0,
              border: "none",
              borderRadius: 0,
              background: i === index ? "#ffffff" : "rgba(255,255,255,0.35)",
              cursor: "pointer",
              transition: "background 0.2s",
              flexShrink: 0,
            }}
          />
        ))}
      </div>

      {/* Botão fechar */}
      <button
        onClick={onClose}
        aria-label="Fechar"
        style={{
          position: "absolute",
          top: "16px",
          right: "16px",
          width: "40px",
          height: "40px",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "24px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 3,
          lineHeight: 1,
        }}
      >
        ✕
      </button>

      {/* Seta esquerda */}
      <button
        onClick={prev}
        aria-label="Anterior"
        style={{
          position: "absolute",
          left: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "2.5rem",
          cursor: "pointer",
          padding: "8px 16px",
          zIndex: 2,
          lineHeight: 1,
        }}
      >
        ‹
      </button>

      {/* Imagem — começa abaixo dos 56px dos indicadores */}
      <div
        style={{
          marginTop: "56px",
          width: "100%",
          height: "calc(100vh - 56px)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px 80px",
          boxSizing: "border-box",
        }}
      >
        <img
          key={index}
          src={images[index]}
          alt=""
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
        />
      </div>

      {/* Seta direita */}
      <button
        onClick={next}
        aria-label="Próxima"
        style={{
          position: "absolute",
          right: "16px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "transparent",
          border: "none",
          color: "#fff",
          fontSize: "2.5rem",
          cursor: "pointer",
          padding: "8px 16px",
          zIndex: 2,
          lineHeight: 1,
        }}
      >
        ›
      </button>
    </div>
  );
}
