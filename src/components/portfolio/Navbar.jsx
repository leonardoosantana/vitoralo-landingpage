import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/data/projects";

const links = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 sm:px-10">
        <a
          href="#top"
          className={`font-heading text-sm font-semibold tracking-monumental uppercase transition-colors ${
            scrolled ? "text-foreground" : "text-white mix-blend-difference"
          }`}
        >
          Victor Aló
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`group relative font-mono text-[11px] uppercase tracking-vast transition-colors ${
                scrolled
                  ? "text-foreground/70 hover:text-foreground"
                  : "text-white/80 hover:text-white mix-blend-difference"
              }`}
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-current transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`font-mono text-[11px] uppercase tracking-vast border px-4 py-2 transition-colors ${
              scrolled
                ? "border-foreground text-foreground hover:bg-foreground hover:text-background"
                : "border-white/70 text-white mix-blend-difference hover:bg-white hover:text-foreground"
            }`}
          >
            Iniciar Projeto
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Menu"
          className={`md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5 ${
            scrolled ? "text-foreground" : "text-white mix-blend-difference"
          }`}
        >
          <span className={`h-px w-6 bg-current transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`} />
          <span className={`h-px w-6 bg-current transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden border-t border-border bg-background transition-all duration-500 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-mono text-xs uppercase tracking-vast py-3 text-foreground/80 border-b border-border/60"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-block bg-foreground px-4 py-3 text-center font-mono text-xs uppercase tracking-vast text-background"
          >
            Iniciar Projeto
          </a>
        </div>
      </div>
    </header>
  );
}