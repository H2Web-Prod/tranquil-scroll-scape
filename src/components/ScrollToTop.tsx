import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };


  return (
    <button
      onClick={scrollToTop}
      aria-label="Voltar ao topo"
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center rounded-full bg-white cursor-pointer transition-all duration-300"
      style={{
        width: 48,
        height: 48,
        border: "1.5px solid #000000",
      }}
    >
      <ChevronUp size={24} color="#000000" strokeWidth={1.5} />
    </button>
  );
}
