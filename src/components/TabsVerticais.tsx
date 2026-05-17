import { useState } from "react";
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
  const current = tabs[active];

  return (
    <div className="grid md:grid-cols-[28%_1fr] gap-12 md:gap-16">
      {/* Tabs column */}
      <div className="flex flex-col">
        {tabs.map((t, i) => {
          const isActive = i === active;
          return (
            <button
              key={t.label}
              onClick={() => setActive(i)}
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
                transition: "color 0.3s ease",
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
      <div className="relative min-h-[500px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <FadeInUp>
              <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
                <div>
                  <StaggerStack>
                    <ScrollReveal
                      as="h2"
                      className="font-light text-black text-[clamp(32px,4vw,52px)] leading-[1.1] mb-6"
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
                <div style={{ width: "100%", maxHeight: "1024px", overflow: "hidden" }}>
                  <img
                    src={current.image}
                    alt={current.title}
                    style={{ width: "100%", height: "1024px", maxHeight: "1024px", objectFit: "cover", display: "block" }}
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
