import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function VideoModal({
  src,
  isOpen,
  onClose,
}: {
  src: string;
  isOpen: boolean;
  onClose: () => void;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.85)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            aria-label="Fechar"
            onClick={onClose}
            style={{
              position: "absolute",
              top: 24,
              right: 24,
              color: "#fff",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: 32,
              lineHeight: 1,
              width: 40,
              height: 40,
            }}
          >
            ×
          </button>
          <video
            ref={videoRef}
            src={src}
            controls
            autoPlay
            onClick={(e) => e.stopPropagation()}
            style={{ maxWidth: 1200, width: "90%", maxHeight: "90vh" }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
