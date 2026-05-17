import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export interface FAQItem {
  q: string;
  a: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} style={{ borderBottom: "1px solid #E5E5E5" }}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full flex items-start justify-between text-left py-5 cursor-pointer"
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 500,
                fontSize: "22px",
                color: "#000000",
                background: "transparent",
                border: "none",
                gap: "24px",
              }}
            >
              <span>{item.q}</span>
              <span style={{ fontSize: "24px", lineHeight: 1, flexShrink: 0 }}>
                {isOpen ? "−" : "+"}
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  style={{ overflow: "hidden" }}
                >
                  <p
                    style={{
                      fontFamily: "'Public Sans', sans-serif",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#000000",
                      lineHeight: 1.7,
                      paddingTop: "16px",
                      paddingBottom: "24px",
                    }}
                  >
                    {item.a}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
