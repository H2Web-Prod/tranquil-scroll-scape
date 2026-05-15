const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

const base = "https://projetos.h2web.com.br/blueheaven";

const institucional = [
  { label: "Blue Heaven", href: `${base}/quem-somos/` },
  { label: "Empreendimentos", href: `${base}/imoveis-exclusivos-blue-heaven/` },
  { label: "Blog", href: `${base}/blog/` },
  { label: "Imprensa", href: `${base}/imprensa/` },
  { label: "Região", href: `${base}/regiao-santa-catarina/` },
  { label: "Contato", href: `${base}/contato/` },
];

const empreendimentos = [
  { label: "Infinitá Treehouse", href: `${base}/imoveis-exclusivos-blue-heaven/infinita-treehouse/` },
  { label: "Aquos", href: `${base}/imoveis-exclusivos-blue-heaven/aquos-oasis-home/` },
  { label: "Monolyt", href: `${base}/imoveis-exclusivos-blue-heaven/monolyt/` },
];

function SocialIcon({ children, href, label }: { children: React.ReactNode; href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-10 h-10 rounded-full bg-[#000000] text-white flex items-center justify-center hover:opacity-80 transition"
    >
      {children}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-white text-[#000000]">
      <div className="px-6 md:px-16 py-[80px] md:py-[100px]">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-16">
          {/* Col 1 */}
          <div>
            <p className="font-semibold text-[28px] tracking-[0.15em] mb-8">BLUE HEAVEN</p>
            <p className="font-light text-[15px] leading-[1.7] mb-8">
              Com a filosofia Building With Nature, colocamos nossa inteligência construtiva e tecnologia a serviço do equilíbrio da vida, desenvolvendo empreendimentos que se tornam obras de arte esculpidas a partir de uma abordagem artesanal e única, transformando espaços em ambientes que enaltecem a natureza e a modernidade concebida pela vida humana.
            </p>
            <div className="border-t border-[#E5E5E5] pt-6 mb-8 flex gap-6 text-sm">
              <a href={`${base}/politica-de-privacidade/`} className="hover:opacity-70">› Política de Privacidade</a>
              <a href={`${base}/termos-de-uso/`} className="hover:opacity-70">› Termos de Uso</a>
            </div>
            <p className="font-semibold tracking-[0.15em] text-[13px] mb-4">SIGA A BLUE HEAVEN</p>
            <div className="flex gap-3">
              <SocialIcon href="https://www.facebook.com/blueheavenemp" label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com/blueheavenemp/" label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.069 1.646.069 4.85s-.012 3.584-.069 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608-.058-1.266-.069-1.646-.069-4.85s.012-3.584.069-4.85c.062-1.366.336-2.633 1.311-3.608.975-.975 2.242-1.249 3.608-1.311 1.266-.058 1.646-.069 4.85-.069m0-2.163c-3.259 0-3.667.014-4.947.072-1.978.09-3.717.494-5.151 1.928s-1.838 3.173-1.928 5.151c-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.09 1.978.494 3.717 1.928 5.151s3.173 1.838 5.151 1.928c1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.978-.09 3.717-.494 5.151-1.928s1.838-3.173 1.928-5.151c.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.09-1.978-.494-3.717-1.928-5.151s-3.173-1.838-5.151-1.928c-1.28-.058-1.688-.072-4.947-.072zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </SocialIcon>
              <SocialIcon href="https://www.youtube.com/@BlueHeavenEmp" label="YouTube">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </SocialIcon>
            </div>
          </div>

          {/* Col 2 */}
          <div className="grid grid-cols-1 gap-10">
            <div>
              <p className="font-semibold tracking-[0.15em] text-[13px] mb-4 uppercase">Institucional</p>
              <ul>
                {institucional.map((l) => (
                  <li key={l.label} className="border-b border-[#E5E5E5]">
                    <a href={l.href} className="block py-3 text-[15px] hover:opacity-70 transition">› {l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="font-semibold tracking-[0.15em] text-[13px] mb-4 uppercase">Empreendimentos</p>
              <ul>
                {empreendimentos.map((l) => (
                  <li key={l.label} className="border-b border-[#E5E5E5]">
                    <a href={l.href} className="block py-3 text-[15px] hover:opacity-70 transition">› {l.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3 */}
          <div className="flex flex-col gap-5">
            <iframe
              title="Blue Heaven map"
              src="https://maps.google.com/maps?q=Blue%20Heaven&t=m&z=15&output=embed&iwloc=near"
              className="w-full h-[240px] rounded-md border-0"
              loading="lazy"
            />
            <div className="flex items-start gap-3 text-[15px]">
              <span className="text-[#000000] mt-1">📍</span>
              <span>Av. Osvaldo Reis, 3281 - sala 26 - Praia Brava, Itajaí - SC, 88306-001</span>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[15px] hover:opacity-70">
              <span>💬</span>
              <span>(47) 99762-5209</span>
            </a>
            <a href="mailto:contato@blueheaven.com.br" className="flex items-center gap-3 text-[15px] hover:opacity-70">
              <span>✉️</span>
              <span>contato@blueheaven.com.br</span>
            </a>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="border-t border-[#E5E5E5] px-6 md:px-16 py-6">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between gap-3 text-[13px] text-[#000000]">
          <p>Copyright © 2026 Todos os Direitos Reservados – Blue Heaven – CNPJ: 19.515.552/0001-60</p>
          <p>
            <a href="https://h2web.com.br/" target="_blank" rel="noopener noreferrer" className="underline">
              Estratégia de Marketing Digital
            </a>{" "}
            – H2Web
          </p>
        </div>
      </div>

      {/* Faixa gigante */}
      <div className="bg-[#000000] h-[120px] md:h-[280px] overflow-hidden">
        <img
          src="https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/BLUEHEAVEN-2048x276-1.webp"
          alt="Blue Heaven"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </footer>
  );
}
