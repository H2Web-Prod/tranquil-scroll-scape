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
          className="font-light text-black"
        >
          {children}
        </ScrollReveal>
        <style>{`
          section h2 { font-family: 'Public Sans', sans-serif; font-weight: 300; font-size: clamp(40px, 5vw, 72px); color: #000; line-height: 1.2; max-width: 1100px; }
        `}</style>
      </div>
    </section>
  );
}
