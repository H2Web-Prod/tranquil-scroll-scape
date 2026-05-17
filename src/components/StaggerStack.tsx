import { Children } from "react";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

export default function StaggerStack({
  children,
  baseDelay = 0.2,
  step = 0.2,
}: {
  children: ReactNode;
  baseDelay?: number;
  step?: number;
}) {
  const items = Children.toArray(children);
  return (
    <>
      {items.map((child, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1,
            delay: baseDelay + i * step,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {child}
        </motion.div>
      ))}
    </>
  );
}
