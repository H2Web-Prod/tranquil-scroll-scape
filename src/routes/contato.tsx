import { createFileRoute } from "@tanstack/react-router";
import useLenis from "@/hooks/useLenis";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Blue Heaven" },
      {
        name: "description",
        content: "Entre em contato com a Blue Heaven para mais informações sobre os nossos empreendimentos.",
      },
      { property: "og:title", content: "Contato — Blue Heaven" },
      {
        property: "og:description",
        content: "Entre em contato com a Blue Heaven para mais informações sobre os nossos empreendimentos.",
      },
    ],
  }),
  component: ContatoPage,
});

const ENVELOPE = "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/icon-envelope-dark.jpg";
const WHATSAPP_ICON = "https://projetos.h2web.com.br/blueheaven/wp-content/uploads/2026/05/icon-whatsapp-dark.jpg";
const PIN_ICON = ENVELOPE; // user spec uses envelope icon for address per provided list

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

function ContatoPage() {
  return (
    <div className="bg-white text-black">
      <Header theme="dark" />

      {/* HERO COMPACTO */}
      <section className="relative bg-white w-full" style={{ height: "380px" }}>
        <div className="absolute" style={{ bottom: "40px", left: 0, right: 0 }}>
          <div className="px-6 md:px-10 mx-auto" style={{ maxWidth: "1200px" }}>
            <h1
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(48px, 6vw, 88px)",
                color: "#000000",
                lineHeight: 1.1,
                margin: 0,
              }}
            >
              Contato
            </h1>
            <p
              style={{
                fontFamily: "'Public Sans', sans-serif",
                fontWeight: 400,
                fontSize: "clamp(16px, 1.4vw, 22px)",
                color: "#000000",
                lineHeight: 1.4,
                marginTop: "16px",
              }}
            >
              Entre em contato com a Blue Heaven para mais informações sobre os nossos empreendimentos
            </p>
          </div>
        </div>
      </section>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="bg-white" style={{ paddingTop: "120px", paddingBottom: "120px" }}>
        <div className="px-6 md:px-10 mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-10 md:gap-20 items-start">
            {/* FORMULÁRIO */}
            <form
              onSubmit={(e) => e.preventDefault()}
              className="w-full"
              style={{ fontFamily: "'Public Sans', sans-serif" }}
            >
              <style>{`
                .contato-input {
                  font-family: 'Public Sans', sans-serif;
                  font-size: 16px;
                  color: #000000;
                  background: transparent;
                  border: none;
                  border-bottom: 1px solid #999999;
                  padding: 12px 0;
                  width: 100%;
                  outline: none;
                  transition: border-color 0.3s;
                }
                .contato-input::placeholder { color: #999999; }
                .contato-input:focus { border-bottom-color: #000000; }
                .contato-btn {
                  font-family: 'Roboto', sans-serif;
                  font-weight: 500;
                  font-size: 16px;
                  color: #FFFFFF;
                  background: #000000;
                  border: 1px solid #000000;
                  border-radius: 50px;
                  padding: 20px 35px 20px 35px;
                  cursor: pointer;
                  transition: background 0.3s, color 0.3s;
                }
                .contato-btn:hover { background: #FFFFFF; color: #000000; }
              `}</style>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" style={{ marginBottom: "24px" }}>
                <input className="contato-input" type="text" placeholder="Nome" />
                <input className="contato-input" type="tel" placeholder="Telefone / WhatsApp" />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <input className="contato-input" type="email" placeholder="E-mail" />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <input className="contato-input" type="text" placeholder="Assunto" />
              </div>

              <div style={{ marginBottom: "24px" }}>
                <textarea className="contato-input" rows={5} placeholder="Mensagem" />
              </div>

              <div>
                <button type="submit" className="contato-btn">
                  Quero contato
                </button>
              </div>
            </form>

            {/* BOX CONTATO */}
            <aside
              style={{
                background: "#070D18",
                padding: "32px",
                color: "#FFFFFF",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
                height: "fit-content",
                alignSelf: "flex-start",
              }}
            >
              <iframe
                title="Blue Heaven map"
                src="https://maps.google.com/maps?q=Av.%20Osvaldo%20Reis,%203281%20-%20Praia%20Brava,%20Itajai%20-%20SC&t=m&z=15&output=embed&iwloc=near"
                width="100%"
                height="250"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
              />

              <div className="flex items-center" style={{ gap: "12px" }}>
                <img src={PIN_ICON} alt="" style={{ width: "16px", height: "17px", filter: "invert(1)" }} />
                <span
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                    lineHeight: 1.5,
                  }}
                >
                  Av. Osvaldo Reis, 3281 - sala 26 - Praia Brava, Itajaí - SC, 88306-001
                </span>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:opacity-80 transition-opacity"
                style={{ gap: "12px", textDecoration: "none" }}
              >
                <img src={WHATSAPP_ICON} alt="" style={{ width: "19px", height: "19px", filter: "invert(1)" }} />
                <span
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                  }}
                >
                  (47) 99762-5209
                </span>
              </a>

              <a
                href="mailto:contato@blueheaven.com.br"
                className="flex items-center hover:opacity-80 transition-opacity"
                style={{ gap: "12px", textDecoration: "none" }}
              >
                <img src={ENVELOPE} alt="" style={{ width: "18px", height: "16px", filter: "invert(1)" }} />
                <span
                  style={{
                    fontFamily: "'Public Sans', sans-serif",
                    fontSize: "15px",
                    color: "#FFFFFF",
                  }}
                >
                  contato@blueheaven.com.br
                </span>
              </a>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
