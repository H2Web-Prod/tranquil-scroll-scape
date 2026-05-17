import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";

const empreendimentos = [
  { name: "Infinitá Treehouse", url: "/infinita-treehouse", internal: true },
  { name: "Aquos", url: "/aquos-oasis-home", internal: true },
  { name: "Monolyt", url: "/monolyt", internal: true },
];

const navLinks = [
  { name: "Blue Heaven", href: "#manifesto" },
  { name: "Blog", href: "#blog" },
  { name: "Imprensa", href: "https://projetos.h2web.com.br/blueheaven/imprensa/" },
  { name: "Contato", href: "https://projetos.h2web.com.br/blueheaven/contato/" },
];

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

const LOGO_LIGHT =
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/03/construtora-imobiliaria-blue-heaven.png";
const LOGO_DARK =
  "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/03/logo-blue-heaven-1.svg";

export default function Header({ theme = "light" }: { theme?: "light" | "dark" }) {
  const [empOpen, setEmpOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [submenuLeft, setSubmenuLeft] = useState(0);
  const headerRef = useRef<HTMLElement>(null);
  const empRef = useRef<HTMLDivElement>(null);

  const isDark = theme === "dark";
  const navClass = `nav-link${isDark ? " dark" : ""}`;
  const borderClass = isDark ? "border-black" : "border-white";
  const iconColor = isDark ? "text-black" : "text-white";

  const openEmpreendimentos = () => {
    if (headerRef.current && empRef.current) {
      const headerRect = headerRef.current.getBoundingClientRect();
      const empRect = empRef.current.getBoundingClientRect();
      setSubmenuLeft(empRect.left - headerRect.left);
    }
    setEmpOpen(true);
  };

  return (
    <header
      ref={headerRef}
      className="absolute top-0 left-0 right-0 z-50 w-full bg-transparent"
      onMouseLeave={() => setEmpOpen(false)}
    >
      <div className="px-6 md:px-10">
        <div className={`py-5 flex items-center justify-between border-b-2 ${borderClass}`}>
        <Link to="/" className="flex-shrink-0">
          <img
            src={isDark ? LOGO_DARK : LOGO_LIGHT}
            alt="Blue Heaven"
            className="w-[160px] md:w-[248px] h-auto"
          />
        </Link>

        <nav className={`hidden lg:flex items-stretch gap-10 ml-auto mr-8 font-manrope font-light text-[18px] nav-links ${isDark ? "text-black" : "text-white"}`}>
          <a href={isDark ? "/#manifesto" : "#manifesto"} className={`${navClass} flex items-center`}>Blue Heaven</a>
          <div
            ref={empRef}
            className="flex items-center py-5 -my-5"
            onMouseEnter={openEmpreendimentos}
          >
            <button className={navClass}>Empreendimentos</button>
          </div>
          {navLinks.slice(1).map((l) => {
            const href = isDark && l.href.startsWith("#") ? `/${l.href}` : l.href;
            return (
              <a key={l.name} href={href} className={navClass}>
                {l.name}
              </a>
            );
          })}
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-block font-manrope text-[18px] font-medium text-black bg-white rounded-full px-[30px] py-[15px] hover:bg-[#142643] hover:text-white transition-colors duration-300"
        >
          Fale Conosco
        </a>

        <button
          className={`lg:hidden p-2 ${iconColor}`}
          aria-label="Abrir menu"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <line x1="3" y1="8" x2="21" y2="8" />
            <line x1="3" y1="16" x2="21" y2="16" />
          </svg>
        </button>
        </div>
      </div>

      {empOpen && (
        <div
          className="absolute min-w-[240px]"
          onMouseEnter={openEmpreendimentos}
          style={{
            top: "100%",
            left: `${submenuLeft}px`,
            margin: 0,
            marginTop: 0,
            paddingTop: 0,
            transform: "none",
          }}
        >
          <div
            className="p-4 flex flex-col gap-2"
            style={{
              background: "rgba(255,255,255,0.92)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {empreendimentos.map((e) =>
              e.internal ? (
                <Link
                  key={e.name}
                  to={e.url}
                  className="text-[16px] font-normal text-black hover:opacity-60 px-3 py-2"
                >
                  {e.name}
                </Link>
              ) : (
                <a
                  key={e.name}
                  href={e.url}
                  className="text-[16px] font-normal text-black hover:opacity-60 px-3 py-2"
                >
                  {e.name}
                </a>
              )
            )}
          </div>
        </div>
      )}

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
                src={LOGO_LIGHT}
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
              <a href={isDark ? "/#manifesto" : "#manifesto"} onClick={() => setMobileOpen(false)}>Blue Heaven</a>
              <div className="flex flex-col gap-3">
                <span>Empreendimentos</span>
                <div className="flex flex-col gap-3 pl-4 text-lg opacity-80">
                  {empreendimentos.map((e) =>
                    e.internal ? (
                      <Link key={e.name} to={e.url} onClick={() => setMobileOpen(false)}>{e.name}</Link>
                    ) : (
                      <a key={e.name} href={e.url}>{e.name}</a>
                    )
                  )}
                </div>
              </div>
              {navLinks.slice(1).map((l) => {
                const href = isDark && l.href.startsWith("#") ? `/${l.href}` : l.href;
                return (
                  <a key={l.name} href={href} onClick={() => setMobileOpen(false)}>{l.name}</a>
                );
              })}
            </nav>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-center font-manrope text-[18px] font-medium text-black bg-white rounded-full px-[30px] py-[15px]"
            >
              Fale Conosco
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
