import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ParallaxImage from "./ParallaxImage";
import ScrollReveal from "./ScrollReveal";
import StaggerStack from "./StaggerStack";
import FadeInUp from "./FadeInUp";

export interface TabItem {
  label: string;
  title: string;
  image: string;
  paragraphs: string[];
  scrollWeight?: number; // peso opcional do scroll (default = 1)
}

export default function TabsVerticais({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingToTab = useRef(false);
  const current = tabs[active];

  // Calcula os pesos e os limites (start/end) de cada aba em % do scroll total
  const weights = tabs.map((t) => t.scrollWeight ?? 1);
  const totalWeight = weights.reduce((sum, w) => sum + w, 0);

  // tabRanges: array com { start, end } em valores de 0 a 1
  // Ex: pesos [1.5, 0.8, 1.5] → ranges [{0, 0.39}, {0.39, 0.6}, {0.6, 1}]
  const tabRanges = weights.reduce<{ start: number; end: number }[]>((acc, w, i) => {
    const prevEnd = i === 0 ? 0 : acc[i - 1].end;
    const range = w / totalWeight;
    acc.push({ start: prevEnd, end: prevEnd + range });
    return acc;
  }, []);

  // Detecta mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Lógica de scroll → aba ativa (apenas desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      if (isScrollingToTab.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerHeight - viewportHeight;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      // Encontra a aba ativa baseado nos ranges ponderados
      let tabIndex = 0;
      for (let i = 0; i < tabRanges.length; i++) {
        if (progress >= tabRanges[i].start && progress < tabRanges[i].end) {
          tabIndex = i;
          break;
        }
        if (i === tabRanges.length - 1 && progress >= tabRanges[i].start) {
          tabIndex = i;
        }
      }

      setActive(tabIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, tabRanges]);

  // Handler de clique numa aba
  const handleTabClick = (i: number) => {
    if (isMobile) {
      setActive(i);
      return;
    }

    if (!containerRef.current) return;

    isScrollingToTab.current = true;
    setActive(i);

    const containerTop = containerRef.current.offsetTop;
    const containerHeight = containerRef.current.offsetHeight;
    const viewportHeight = window.innerHeight;
    const scrollableDistance = containerHeight - viewportHeight;

    // Vai pro meio do range da aba clicada
    const range = tabRanges[i];
    const targetProgress = (range.start + range.end) / 2;
    const targetScroll = containerTop + scrollableDistance * targetProgress;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });

    setTimeout(() => {
      isScrollingToTab.current = false;
    }, 600);
  };

  // Mobile — comportamento original
  if (isMobile) {
    return (
      <div className="grid grid-cols-1 gap-8">
        <div className="flex flex-col">
          {tabs.map((t, i) => {
            const isActive = i === active;
            return (
              <button
                key={t.label}
                onClick={() => handleTabClick(i)}
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: isActive ? 500 : 400,
                  color: isActive ? "#000000" : "#999999",
                  padding: "14px 0",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  transition: "color 0.3s ease",
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div>
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <FadeInUp>
                <div className="grid grid-cols-1 gap-8">
                  <div>
                    <StaggerStack>
                      <ScrollReveal
                        as="h2"
                        className="font-light text-black text-[clamp(28px,4vw,44px)] leading-[1.1] mb-6"
                      >
                        {current.title}
                      </ScrollReveal>
                      {current.paragraphs.map((p, i) => (
                        <p key={i} className="padrao-p-internas" style={{ marginTop: i > 0 ? "20px" : 0 }}>
                          {p}
                        </p>
                      ))}
                    </StaggerStack>
                  </div>
                  <div style={{ width: "100%", overflow: "hidden" }}>
                    <img
                      src={current.image}
                      alt={current.title}
                      style={{ width: "100%", height: "auto", display: "block" }}
                    />
                  </div>
                </div>
              </FadeInUp>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    );
  }

  // Desktop — sticky scroll com pesos ponderados
  return (
    <section
      ref={containerRef}
      style={{
        height: `${totalWeight * 100}vh`,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <div className="grid md:grid-cols-[28%_1fr] gap-12 md:gap-16 w-full">
          <div className="flex flex-col">
            {tabs.map((t, i) => {
              const isActive = i === active;
              return (
                <button
                  key={t.label}
                  onClick={() => handleTabClick(i)}
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "22px",
                    fontWeight: isActive ? 500 : 400,
                    color: isActive ? "#000000" : "#999999",
                    padding: "16px 0",
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "color 0.3s ease, font-weight 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#555555";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) e.currentTarget.style.color = "#999999";
                  }}
                >
                  {t.label}
                </button>
              );
            })}
          </div>

          <div className="relative" style={{ minHeight: "70vh" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                  <div>
                    <h2 className="font-light text-black text-[clamp(32px,4vw,52px)] leading-[1.1] mb-6">
                      {current.title}
                    </h2>
                    {current.paragraphs.map((p, i) => (
                      <p key={i} className="padrao-p-internas" style={{ marginTop: i > 0 ? "20px" : 0 }}>
                        {p}
                      </p>
                    ))}
                  </div>
                  <div style={{ width: "100%", maxHeight: "70vh", overflow: "hidden" }}>
                    <img
                      src={current.image}
                      alt={current.title}
                      style={{ width: "100%", height: "70vh", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
