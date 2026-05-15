import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const empreendimentos = [
  { name: "Infinitá Treehouse", url: "https://projetos.h2web.com.br/blueheaven/imoveis-exclusivos-blue-heaven/infinita-treehouse/" },
  { name: "Aquos", url: "https://projetos.h2web.com.br/blueheaven/imoveis-exclusivos-blue-heaven/aquos-oasis-home/" },
  { name: "Monolyt", url: "https://projetos.h2web.com.br/blueheaven/imoveis-exclusivos-blue-heaven/monolyt/" },
];

const navLinks = [
  { name: "Blue Heaven", href: "#manifesto" },
  { name: "Blog", href: "#blog" },
  { name: "Imprensa", href: "https://projetos.h2web.com.br/blueheaven/imprensa/" },
  { name: "Contato", href: "https://projetos.h2web.com.br/blueheaven/contato/" },
];

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [empOpen, setEmpOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(20, 38, 67, 0.7)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
      }}
    >
      <div className="px-6 md:px-16 py-5 flex items-center justify-between border-b border-white/30">
        <a href="/" className="flex-shrink-0">
          <img
            src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/03/construtora-imobiliaria-blue-heaven.png"
            alt="Blue Heaven"
            className="w-[160px] md:w-[248px] h-auto"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-10 font-manrope font-light text-[18px] text-white">
          <a href="#manifesto" className="hover:opacity-70 transition">Blue Heaven</a>
          <div
            className="relative"
            onMouseEnter={() => setEmpOpen(true)}
            onMouseLeave={() => setEmpOpen(false)}
          >
            <button className="hover:opacity-70 transition">Empreendimentos</button>
            <AnimatePresence>
              {empOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.25 }}
                  className="absolute top-full left-0 pt-4 min-w-[240px]"
                >
                  <div
                    className="rounded-lg p-4 flex flex-col gap-2"
                    style={{
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                    }}
                  >
                    {empreendimentos.map((e) => (
                      <a
                        key={e.name}
                        href={e.url}
                        className="text-[16px] font-normal text-[#142643] hover:opacity-60 px-3 py-2 rounded transition"
                      >
                        {e.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {navLinks.slice(1).map((l) => (
            <a key={l.name} href={l.href} className="hover:opacity-70 transition">
              {l.name}
            </a>
          ))}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block font-manrope text-[18px] font-medium text-[#142643] bg-white rounded-full px-[30px] py-[15px] hover:bg-[#142643] hover:text-white transition-colors duration-300"
        >
          Fale Conosco
        </a>

        <button
          className="lg:hidden text-white p-2"
          aria-label="Abrir menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="8" x2="21" y2="8" />
            <line x1="3" y1="16" x2="21" y2="16" />
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 bg-[#142643] flex flex-col px-6 py-8"
          >
            <div className="flex justify-between items-center mb-12">
              <img
                src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/03/construtora-imobiliaria-blue-heaven.png"
                alt="Blue Heaven"
                className="w-[160px]"
              />
              <button
                aria-label="Fechar menu"
                onClick={() => setMobileOpen(false)}
                className="text-white p-2"
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-6 font-manrope text-2xl text-white font-light">
              <a href="#manifesto" onClick={() => setMobileOpen(false)}>Blue Heaven</a>
              <div className="flex flex-col gap-3">
                <span>Empreendimentos</span>
                <div className="flex flex-col gap-3 pl-4 text-lg opacity-80">
                  {empreendimentos.map((e) => (
                    <a key={e.name} href={e.url}>{e.name}</a>
                  ))}
                </div>
              </div>
              {navLinks.slice(1).map((l) => (
                <a key={l.name} href={l.href} onClick={() => setMobileOpen(false)}>{l.name}</a>
              ))}
            </nav>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center font-manrope text-[18px] font-medium text-[#142643] bg-white rounded-full px-[30px] py-[15px]"
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
