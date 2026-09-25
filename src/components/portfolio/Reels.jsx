import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { reels } from "@/data/projects";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Reels() {
  return (
    <section className="bg-background px-6 py-28 sm:px-10 sm:py-36">
      <div className="mx-auto max-w-[1600px]">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <span className="font-mono text-[11px] uppercase tracking-vast text-accent">
              Em Movimento
            </span>
            <h2 className="mt-3 font-heading text-3xl font-medium tracking-tight text-foreground sm:text-5xl">
              Reels
            </h2>
          </div>
          <p className="max-w-md font-body text-lg leading-[1.55] text-foreground/70">
            Processos e projetos em vídeo — abertos direto no Instagram.
          </p>
        </motion.div>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
          {reels.map((r, i) => (
            <motion.a
              key={r.num}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="group relative flex aspect-[4/5] flex-col justify-between overflow-hidden bg-foreground p-6 text-background outline-none ring-foreground/40 transition-colors focus-visible:ring-2 sm:aspect-video"
            >
              <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-vast text-background/60">
                <span>{r.num} / {r.label}</span>
                <span>Instagram</span>
              </div>

              <div className="flex flex-1 items-center justify-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full border border-background/40 transition-all duration-500 group-hover:scale-110 group-hover:border-background">
                  <Play
                    className="ml-1 h-6 w-6 fill-background text-background"
                    strokeWidth={1.2}
                  />
                </span>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-heading text-sm font-medium uppercase tracking-monumental">
                  Ver projeto
                </span>
                <span className="h-px w-10 bg-background/40 transition-all duration-300 group-hover:w-16 group-hover:bg-background" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}