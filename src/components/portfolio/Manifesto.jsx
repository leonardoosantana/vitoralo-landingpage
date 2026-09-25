import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Manifesto() {
  return (
    <section
      id="manifesto"
      className="relative bg-background px-6 py-28 sm:px-10 sm:py-40"
    >
      {/* Datum line */}
      <div className="datum-line absolute inset-x-0 top-0 h-px" />

      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-16 md:grid-cols-12 md:gap-10">
        {/* Left — label */}
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="md:col-span-3"
        >
          <span className="font-mono text-[11px] uppercase tracking-vast text-accent">
            00 / Manifesto
          </span>
        </motion.div>

        {/* Center — statement */}
        <div className="md:col-span-9 md:col-start-4">
          <motion.h2
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-3xl font-medium leading-[1.12] tracking-tight text-foreground sm:text-5xl md:text-6xl text-balance"
          >
            Clássicos e Atemporais.
          </motion.h2>

          <motion.p
            custom={1}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-10 max-w-2xl font-body text-xl leading-[1.6] text-foreground/80 sm:text-[1.35rem]"
          >
            Projetos e acompanhamentos que tratam a arquitetura como
            permanência — onde luz, sombra e materialidade convergem em
            espaços pensados para durar além do tempo.
          </motion.p>

          {/* Credentials */}
          <motion.div
            custom={2}
            variants={fade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mt-16 grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2"
          >
            <div className="bg-background p-8">
              <span className="font-mono text-[10px] uppercase tracking-vast text-muted-foreground">
                Formação
              </span>
              <p className="mt-3 font-heading text-lg font-medium text-foreground">
                Arquiteto e Urbanista
              </p>
              <p className="mt-1 font-body text-base text-foreground/70">
                Doctum — Juiz de Fora, MG
              </p>
            </div>
            <div className="bg-background p-8">
              <span className="font-mono text-[10px] uppercase tracking-vast text-muted-foreground">
                Especialização
              </span>
              <p className="mt-3 font-heading text-lg font-medium text-foreground">
                Designer de Interiores
              </p>
              <p className="mt-1 font-body text-base text-foreground/70">
                PUC — Minas Gerais
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}