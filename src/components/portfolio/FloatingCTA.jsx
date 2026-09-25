import { useState } from "react";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/data/projects";

export default function FloatingCTA() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Iniciar projeto no WhatsApp ${WHATSAPP_DISPLAY}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
      className="group fixed bottom-5 right-5 z-50 flex min-h-[48px] items-center gap-3 bg-foreground px-5 py-3.5 text-background shadow-[0_8px_30px_rgba(0,0,0,0.25)] outline-none ring-foreground/40 transition-all duration-300 hover:bg-accent hover:text-background focus-visible:ring-2 sm:bottom-8 sm:right-8"
    >
      <span className="font-heading text-[13px] font-medium uppercase tracking-monumental whitespace-nowrap">
        Iniciar Projeto
      </span>
      <span
        className={`grid overflow-hidden font-mono text-[12px] tracking-wide transition-all duration-300 ${
          hovered ? "max-w-[180px] opacity-100" : "max-w-0 opacity-0"
        }`}
      >
        <span className="whitespace-nowrap pl-1">{WHATSAPP_DISPLAY}</span>
      </span>
    </a>
  );
}