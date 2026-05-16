import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const posts = [
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/01/post-1.jpg",
    title: "Arquitetura regenerativa: quando o projeto devolve mais ao ambiente do que retira",
    date: "28 de janeiro de 2026",
    link: "https://projetos.h2web.com.br/blueheaven/arquitetura-regenerativa-quando-o-projeto-devolve-mais-ao-ambiente-do-que-retira/",
  },
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/03/post-2.jpg",
    title: "O papel da luz indireta na criação de atmosferas sofisticadas",
    date: "21 de janeiro de 2026",
    link: "https://projetos.h2web.com.br/blueheaven/o-papel-da-luz-indireta-na-criacao-de-atmosferas-sofisticadas/",
  },
  {
    image: "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/03/post-3.jpg",
    title: "Materiais inteligentes na construção de alto padrão: tecnologia que trabalha em segundo plano",
    date: "13 de janeiro de 2026",
    link: "https://projetos.h2web.com.br/blueheaven/materiais-inteligentes-na-construcao-de-alto-padrao-tecnologia-que-trabalha-em-segundo-plano/",
  },
];

export default function BlogGrid() {
  return (
    <section id="blog" className="bg-white py-[100px] md:py-[200px] px-6">
      <div className="max-w-[1300px] mx-auto">
        <div className="mb-20">
          <p className="text-[#b85c3c] font-medium text-[13px] tracking-[0.3em] uppercase mb-8">
            — Diário Blue Heaven
          </p>
          <ScrollReveal as="h2" className="font-light text-black text-[clamp(36px,5vw,56px)]">
            Nosso Blog
          </ScrollReveal>
        </div>
        <div className="grid md:grid-cols-3 gap-12 md:gap-10">
          {posts.map((p, i) => (
            <motion.div
              key={p.link}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.1, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="block"
            >
              <a href={p.link} target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
                <div className="overflow-hidden mb-6" style={{ aspectRatio: "4/3" }}>
                  <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover" />
                </div>
                <h3 className="font-normal text-[22px] text-black leading-[1.35]">{p.title}</h3>
              </a>
              <p className="text-[14px] text-black opacity-60 mt-4">{p.date}</p>
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginTop: "24px" }}
                className="inline-block font-roboto font-medium text-[14px] text-black bg-white border border-black rounded-full px-[22px] py-[10px] hover:bg-black hover:text-white transition-all duration-400"
              >
                Ler matéria
              </a>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-20">
          <a
            href="https://projetos.h2web.com.br/blueheaven/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-roboto font-medium text-[16px] text-black bg-white border border-black rounded-full px-[25px] py-[12px] hover:bg-black hover:text-white transition-all duration-400"
          >
            Veja mais notícias
          </a>
        </div>
      </div>
    </section>
  );
}
