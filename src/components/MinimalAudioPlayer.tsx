import { useEffect, useRef, useState } from "react";

interface MinimalAudioPlayerProps {
  src: string;
}

function fmt(t: number) {
  if (!isFinite(t)) return "0:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function MinimalAudioPlayer({ src }: MinimalAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    const onTime = () => setCurrent(a.currentTime);
    const onMeta = () => setDuration(a.duration);
    const onEnd = () => setPlaying(false);
    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play();
      setPlaying(true);
    }
  };

  const pct = duration > 0 ? (current / duration) * 100 : 0;

  return (
    <div
      className="flex items-center gap-3"
      style={{
        background: "#FFFFFF",
        padding: "12px 16px",
        borderRadius: 0,
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        width: 280,
        fontFamily: "'Public Sans', sans-serif",
      }}
    >
      <audio ref={audioRef} src={src} preload="metadata" />
      <button
        onClick={toggle}
        aria-label={playing ? "Pausar" : "Reproduzir"}
        className="flex items-center justify-center shrink-0"
        style={{ width: 32, height: 32, background: "#000", color: "#fff", borderRadius: 0 }}
      >
        {playing ? (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><rect width="3" height="12"/><rect x="7" width="3" height="12"/></svg>
        ) : (
          <svg width="10" height="12" viewBox="0 0 10 12" fill="currentColor"><path d="M0 0L10 6L0 12V0Z"/></svg>
        )}
      </button>
      <div className="flex-1 min-w-0">
        <div style={{ height: 2, background: "#E5E5E5", position: "relative" }}>
          <div style={{ position: "absolute", inset: 0, width: `${pct}%`, background: "#000" }} />
        </div>
        <div className="flex justify-between mt-1" style={{ fontSize: 11, color: "#666" }}>
          <span>{fmt(current)}</span>
          <span>{fmt(duration)}</span>
        </div>
      </div>
    </div>
  );
}
