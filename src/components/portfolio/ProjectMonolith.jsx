import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};

export default function ProjectMonolith({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Lazy parallax — images move slightly slower than scroll
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const metaY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const isWide = project.images.length > 1;
  const alignRight = index % 2 === 1;

  return (
    <article ref={ref} className="relative bg-background">
      {/* Project header */}
      <div className="mx-auto max-w-[1600px] px-6 pt-24 sm:px-10 sm:pt-32">
        <motion.div
          variants={fade}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className={`flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-end sm:justify-between ${
            alignRight ? "sm:flex-row-reverse" : ""
          }`}
        >
          <div className={alignRight ? "sm:text-right" : ""}>
            <span className="font-mono text-[11px] uppercase tracking-vast text-accent">
              {project.num} / Projeto
            </span>
            <h3 className="mt-3 font-heading text-4xl font-medium tracking-tight text-foreground sm:text-6xl">
              {project.name}
            </h3>
          </div>
          <motion.dl
            style={{ y: metaY }}
            className="flex gap-8 font-mono text-[11px] uppercase tracking-vast text-muted-foreground sm:gap-12"
          >
            <div>
              <dt className="opacity-60">Local</dt>
              <dd className="mt-1.5 text-foreground">{project.location}</dd>
            </div>
            <div>
              <dt className="opacity-60">Tipologia</dt>
              <dd className="mt-1.5 text-foreground">{project.typology}</dd>
            </div>
          </motion.dl>
        </motion.div>
      </div>

      {/* Images */}
      <div className="mx-auto mt-12 max-w-[1600px] px-0 sm:px-10">
        {project.images.map((img, i) => (
          <ProjectImage key={i} img={img} index={i} total={project.images.length} />
        ))}
      </div>
    </article>
  );
}

function ProjectImage({ img, index, total }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  const full = img.span === "full";

  return (
    <motion.div
      ref={ref}
      variants={fade}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      className={`relative overflow-hidden bg-secondary ${
        full ? "aspect-[16/10] w-full sm:aspect-[21/9]" : "aspect-[16/10] w-full"
      } ${total > 1 && index > 0 ? "mt-6 sm:mt-10" : ""}`}
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 h-[112%] -top-[6%]">
        <Image
          src={img.src}
          alt={img.alt}
          fittingType="fill"
          className="block h-full w-full"
        />
      </motion.div>
    </motion.div>
  );
}