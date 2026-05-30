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
}

export default function TabsVerticais({ tabs }: { tabs: TabItem[] }) {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const isScrollingToTab = useRef(false);
  const current = tabs[active];

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
      if (isScrollingToTab.current) return; // ignora durante scroll programático

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const viewportHeight = window.innerHeight;
      const scrollableDistance = containerHeight - viewportHeight;

      // Progress de 0 a 1 dentro da seção
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      // Divide o progress em N abas
      const tabIndex = Math.min(tabs.length - 1, Math.floor(progress * tabs.length));
      setActive(tabIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile, tabs.length]);

  // Handler de clique numa aba — rola pra posição correspondente
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

    // Posição relativa da aba dentro do range scrollable
    const targetProgress = (i + 0.5) / tabs.length;
    const targetScroll = containerTop + scrollableDistance * targetProgress;

    window.scrollTo({ top: targetScroll, behavior: "smooth" });

    // Libera o handleScroll depois de 600ms (tempo do scroll suave)
    setTimeout(() => {
      isScrollingToTab.current = false;
    }, 600);
  };

  // Versão mobile — comportamento original (sem sticky)
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

  // Versão desktop — com sticky scroll
  return (
    <section
      ref={containerRef}
      style={{
        height: `${tabs.length * 100}vh`,
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
          {/* Tabs column */}
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

          {/* Content column */}
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
