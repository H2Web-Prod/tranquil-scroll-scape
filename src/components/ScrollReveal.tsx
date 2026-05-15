import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface ScrollRevealProps {
  children: string;
  className?: string;
  as?: "p" | "h2" | "h3" | "span" | "div";
  light?: boolean;
}

const Word = ({ children, progress, range, light }: { children: string; progress: MotionValue<number>; range: [number, number]; light?: boolean }) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const baseClass = light ? "text-white/20" : "text-black/15";
  const liveClass = light ? "text-white" : "text-black";
  return (
    <span className="relative mr-[0.25em] inline-block">
      <span className={baseClass}>{children}</span>
      <motion.span style={{ opacity }} className={`absolute inset-0 ${liveClass}`}>
        {children}
      </motion.span>
    </span>
  );
};

export default function ScrollReveal({ children, className = "", as = "p", light = false }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "start 0.25"],
  });
  const words = useMemo(() => children.split(" "), [children]);

  const Tag = as as any;

  return (
    <Tag ref={ref} className={`leading-relaxed ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} light={light}>
            {word}
          </Word>
        );
      })}
    </Tag>
  );
}
