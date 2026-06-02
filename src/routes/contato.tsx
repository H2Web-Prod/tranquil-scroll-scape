import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail } from "lucide-react";
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

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

function ContatoPage() {
  useLenis();

  return (
    <div className="bg-white text-black">
      <Header theme="dark" />

      {/* HERO COMPACTO */}
      <section className="relative bg-white w-full" style={{ height: "380px" }}>
        <div className="absolute" style={{ bottom: "40px", left: 0, right: 0 }}>
          <div className="px-6 md:px-10">
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
                marginLeft: "10px",
              }}
            >
              Entre em contato com a Blue Heaven para mais informações sobre os nossos empreendimentos
            </p>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO FULLWIDTH */}
      <section className="bg-white" style={{ paddingTop: "120px", paddingBottom: "80px" }}>
        <div className="px-6 md:px-10 mx-auto" style={{ maxWidth: "1200px" }}>
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
        </div>
      </section>

      {/* SEÇÃO 2 COLUNAS COM ÍCONES LUCIDE */}
      <section className="bg-white" style={{ paddingTop: "40px", paddingBottom: "80px" }}>
        <div className="px-6 md:px-10 mx-auto" style={{ maxWidth: "1200px" }}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 hover:opacity-70 transition"
              style={{ textDecoration: "none" }}
            >
              <Phone size={32} color="#000000" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: "18px",
                  color: "#000000",
                  fontWeight: 400,
                }}
              >
                (47) 99762-5209
              </span>
            </a>

            <a
              href="mailto:contato@blueheaven.com.br"
              className="flex items-center gap-4 hover:opacity-70 transition"
              style={{ textDecoration: "none" }}
            >
              <Mail size={32} color="#000000" strokeWidth={1.5} />
              <span
                style={{
                  fontFamily: "'Public Sans', sans-serif",
                  fontSize: "18px",
                  color: "#000000",
                  fontWeight: 400,
                }}
              >
                contato@blueheaven.com.br
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* IFRAME GOOGLE MAPS FULLWIDTH */}
      <section className="bg-white w-full">
        <iframe
          title="Blue Heaven map"
          src="https://maps.google.com/maps?q=Av.%20Osvaldo%20Reis,%203281%20-%20Praia%20Brava,%20Itajai%20-%20SC&t=m&z=15&output=embed&iwloc=near"
          width="100%"
          height="500"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
        />
      </section>

      <Footer />
    </div>
  );
}
