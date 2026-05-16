import ScrollReveal from "./ScrollReveal";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=5547997625209&text=Olá+vim+pelo+site+Blue+Heaven+e+gostaria+de+mais+informações!";

export default function FinalCTA() {
  return (
    <section className="px-6 py-[120px] md:py-[200px]" style={{ background: "#F5F5F5" }}>
      <div className="max-w-[1300px] mx-auto text-left">
        <ScrollReveal
          as="h2"
          className="font-light text-black"
        >
          Seu novo estilo de vida começa aqui
        </ScrollReveal>
        <p
          className="padrao-p"
          style={{
            maxWidth: "1200px",
            marginTop: "24px",
            textAlign: "left",
            lineHeight: 1.7,
            color: "#000000",
          }}
        >
          Descubra como é viver em um lugar que conecta natureza, conforto e modernidade. Fale conosco e agende sua visita.
        </p>
        <div style={{ marginTop: "48px", textAlign: "left" }}>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-roboto font-medium text-[16px] text-black bg-white border border-black rounded-full px-[25px] py-[12px] hover:bg-black hover:text-white transition-all duration-400"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  );
}
