import { useState } from "react";
import { Play } from "lucide-react";
import VideoModal from "./VideoModal";

export default function VideoTriggerCard({
  videoSrc,
  label = "Assista o vídeo",
  className = "",
  style,
}: {
  videoSrc: string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  return (
    <>
      <div
        role="button"
        tabIndex={0}
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          width: 220,
          background: "#FFFFFF",
          padding: "12px 16px",
          borderRadius: 0,
          cursor: "pointer",
          boxShadow: hover
            ? "0 8px 30px rgba(0, 0, 0, 0.15)"
            : "0 4px 20px rgba(0, 0, 0, 0.08)",
          transform: hover ? "translateY(-2px)" : "translateY(0)",
          transition: "all 0.3s ease",
          ...style,
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#000000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <Play size={14} color="#FFFFFF" fill="#FFFFFF" />
        </div>
        <span
          style={{
            fontFamily: "'Public Sans', sans-serif",
            fontWeight: 400,
            fontSize: 14,
            color: "#000000",
          }}
        >
          {label}
        </span>
      </div>
      <VideoModal src={videoSrc} isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
