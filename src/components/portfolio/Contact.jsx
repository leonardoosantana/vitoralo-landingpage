import { motion } from "framer-motion";
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from "@/data/projects";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};

export default function Contact() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-foreground px-6 py-28 text-background sm:px-10 sm:py-44"
    >
      <div className="mx-auto max-w-[1600px]">
        <motion.span
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="font-mono text-[11px] uppercase tracking-vast text-background/50"
        >
          Contato / Direto
        </motion.span>

        <motion.h2
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={1}
          className="mt-8 max-w-4xl font-heading text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl md:text-7xl text-balance"
        >
          Vamos dar forma ao seu projeto.
        </motion.h2>

        <motion.p
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={2}
          className="mt-8 max-w-xl font-body text-xl leading-[1.6] text-background/70"
        >
          Projetos e acompanhamentos. Conversa direta, sem intermediários —
          pelo WhatsApp.
        </motion.p>

        <motion.a
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          custom={3}
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-14 inline-flex items-center gap-5 border border-background/30 px-8 py-5 transition-colors hover:bg-background hover:text-foreground"
        >
          <span className="font-heading text-base font-medium uppercase tracking-monumental">
            Iniciar Projeto
          </span>
          <span className="h-px w-12 bg-current transition-all duration-300 group-hover:w-20" />
          <span className="font-mono text-sm tracking-wide">{WHATSAPP_DISPLAY}</span>
        </motion.a>

        {/* Footer meta row */}
        <div className="mt-24 flex flex-col gap-6 border-t border-background/15 pt-8 font-mono text-[11px] uppercase tracking-vast text-background/50 sm:flex-row sm:items-center sm:justify-between">
          <span>Victor Aló — Arquitetura e Urbanismo</span>
          <span>Clássicos e Atemporais · Brasil</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </section>
  );
}