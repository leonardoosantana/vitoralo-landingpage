import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectMonolith from "./ProjectMonolith";

export default function Projects() {
  return (
    <section id="projetos" className="bg-background">
      {/* Section intro */}
      <div className="mx-auto max-w-[1600px] px-6 pb-8 pt-28 sm:px-10 sm:pt-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-vast text-accent">
              Obra Selecionada
            </span>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
              Monólitos
            </h2>
          </div>
          <p className="max-w-md font-body text-lg leading-[1.55] text-foreground/70">
            Cada projeto é tratado como um monumento de ofício — imagem,
            respiro e silêncio entre um e outro.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col gap-8 pb-24 sm:gap-16 sm:pb-40">
        {projects.map((p, i) => (
          <ProjectMonolith key={p.num} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}