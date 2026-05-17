import ScrollReveal from "./ScrollReveal";

export default function TituloUnico({ children }: { children: string }) {
  return (
    <section
      className="bg-white px-6 md:px-10 flex items-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="max-w-[1300px] mx-auto w-full text-left">
        <ScrollReveal
          as="h2"
          className="font-light text-black text-[clamp(40px,5vw,72px)] leading-[1.2] max-w-[1100px]"
        >
          {children}
        </ScrollReveal>
      </div>
    </section>
  );
}
