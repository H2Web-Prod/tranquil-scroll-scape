import { motion } from "framer-motion";

export default function Hero() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .hero-section { height: 75vw !important; min-height: 320px; }
          .hero-scroll-indicator { bottom: 16px !important; }
        }
      `}</style>
      <section className="hero-section relative w-screen overflow-hidden" style={{ height: "100svh" }}>
        <video
          src="https://projetos.h2web.com.br/blueheaven/videos/blueheaven-video-hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.35) 100%)",
          }}
        />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-light leading-[1.1] tracking-[-0.02em]"
            style={{ fontSize: "clamp(48px, 6vw, 88px)" }}
          ></motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4, delay: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-white font-light text-[18px] max-w-[720px] leading-[1.7] mt-8"
          ></motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 2, duration: 1 }}
          className="hero-scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ scaleY: [0.3, 1, 0.3], originY: 0 }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] h-[60px] bg-white"
          />
        </motion.div>
      </section>
    </>
  );
}
