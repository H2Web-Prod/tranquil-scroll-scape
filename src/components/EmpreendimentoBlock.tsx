import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

interface Props {
  image: string;
  title: string;
  headline?: string;
  body: string;
  link: string;
}

export default function EmpreendimentoBlock({ image, title, headline, body, link }: Props) {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1.25, 1.0]);

  return (
    <>
      <section ref={heroRef} className="h-screen w-full overflow-hidden relative">
        <motion.div
          style={{ scale, backgroundImage: `url(${image})` }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 to-black/55" />
        <div className="relative h-full flex items-center justify-center px-6 text-center">
          <ScrollReveal
            as="h2"
            light
            className="font-light tracking-[-0.02em]"
          >
            {title}
          </ScrollReveal>
        </div>
        <style>{`
          section h2 { font-size: clamp(56px, 8vw, 120px); }
        `}</style>
      </section>

      <section className="bg-white py-[100px] md:py-[200px] px-6">
        <div className="max-w-[880px] mx-auto">
          {headline && (
            <p className="padrao-p mb-8" style={{ fontWeight: 500 }}>
              {headline}
            </p>
          )}
          <p className="padrao-p mb-12">
            {body}
          </p>
          <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-block font-roboto font-medium text-[16px] text-black bg-white border border-black rounded-full px-[25px] py-[12px] hover:bg-black hover:text-white transition-all duration-400"
          >
            Saiba Mais
          </motion.a>
        </div>
      </section>
    </>
  );
}
