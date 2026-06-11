import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

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
  }, [displayed, isMobile]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -translateDistance]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const lightbox = (
    <>
      <style>{`
        .yarl__thumbnails_thumbnail img { display: none !important; }

        .yarl__thumbnails_thumbnail { width: 15px !important; height: 15px !important; min-width: 15px !important; min-height: 15px !important; padding: 0 !important; border: 1.5px solid rgba(255,255,255,0.4) !important; border-radius: 0 !important; background: transparent !important; opacity: 1 !important; }

        .yarl__thumbnails_thumbnail_active, .yarl__thumbnails_thumbnail[aria-selected="true"] { border-color: #ffffff !important; background: #ffffff !important; }

        .yarl__button[data-testid="yarl__button_close"], button.yarl__button:has(svg[data-testid="yarl__icon_close"]) { position: fixed !important; top: 1rem !important; right: 1rem !important; z-index: 9999 !important; }
      `}</style>
      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={images.map((src) => ({ src }))}
        plugins={[Thumbnails]}
        thumbnails={{
          position: "top",
          width: 15,
          height: 15,
          border: 0,
          borderRadius: 0,
          padding: 0,
          gap: 8,
        }}
      />
    </>
  );

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
        {lightbox}
      </>
    );
  }

  return (
    <>
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
            {displayed.map((src, i) => (
              <div
                key={i}
                onClick={() => openLightbox(i)}
                style={{
                  flex: "none",
                  overflow: "hidden",
                  background: "#f2f2f2",
                  cursor: "pointer",
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
      {lightbox}
    </>
  );
}
