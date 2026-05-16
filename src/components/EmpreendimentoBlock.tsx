import { useRef, useMemo } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

interface Props {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  body: string;
  link: string;
}

const RevealWord = ({
  children,
  progress,
  range,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
}) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <span style={{ color: "rgba(255,255,255,0.2)" }}>{children}</span>
      <motion.span style={{ opacity }} className="absolute inset-0 text-white">
        {children}
      </motion.span>
    </span>
  );
};

export default function EmpreendimentoBlock({ image, eyebrow, title, subtitle, body, link }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.0, 1.25]);

  const { scrollYProgress: titleProgress } = useScroll({
    target: titleRef,
    offset: ["start 0.85", "start 0.25"],
  });
  const words = useMemo(() => title.split(" "), [title]);

  return (
    <>
      <section ref={heroRef} className="h-[130vh] w-full overflow-hidden relative">
        <motion.div
          style={{ scale, backgroundImage: `url(${image})` }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/55" />
        <div className="absolute inset-0 flex">
          <div className="mt-auto pl-8 pb-8 md:pl-[80px] md:pb-[80px] pr-6 max-w-full">
            <h2
              ref={titleRef}
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(56px, 7vw, 96px)",
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
              }}
            >
              {words.map((w, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <RevealWord key={i} progress={titleProgress} range={[start, end]}>
                    {w}
                  </RevealWord>
                );
              })}
            </h2>
            {subtitle && (
              <p
                style={{
                  color: "#FFFFFF",
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: 400,
                  lineHeight: 1.5,
                  marginTop: "24px",
                  maxWidth: "480px",
                }}
              >
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="bg-white py-[160px] md:py-[280px] px-6">
        <div className="max-w-[880px] mx-auto">
          <p className="padrao-p" style={{ maxWidth: "720px", lineHeight: 1.9 }}>
            {body}
          </p>
          <div style={{ marginTop: "64px" }}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-roboto font-medium text-[16px] text-black bg-white border border-black rounded-full px-[25px] py-[12px] hover:bg-black hover:text-white transition-all duration-400"
            >
              Saiba Mais
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
