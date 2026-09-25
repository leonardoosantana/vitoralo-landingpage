import { motion, useScroll, useTransform } from "framer-motion";
import { Image } from "@/components/ui/image";

const PORTRAIT_URL =
  "https://media.base44.com/images/public/6aa1e2586a4b0818517255f9/1190954d5_2987448d-a62c-43ff-8260-4f9b82e02c90.jpeg";

const fade = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  const { scrollY } = useScroll();
  const yImg = useTransform(scrollY, [0, 800], [0, 120]);
  const yNameTop = useTransform(scrollY, [0, 800], [0, -30]);
  const yNameBottom = useTransform(scrollY, [0, 800], [0, 40]);
  const opacity = useTransform(scrollY, [0, 600], [1, 0]);

  return (
    <section
      id="sobre"
      className="relative min-h-[100svh] w-full overflow-hidden bg-foreground text-background"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-[1600px] grid-cols-1 md:grid-cols-12">
        {/* Portrait + split names */}
        <div className="relative col-span-1 h-[62svh] overflow-hidden md:col-span-7 md:h-[100svh]">
          <motion.div style={{ y: yImg }} className="absolute inset-0 -top-8 h-[114%]">
            <Image
              src={PORTRAIT_URL}
              alt="Victor Aló — arquiteto e urbanista, retrato em estúdio"
              fittingType="fill"
              focalPointX={0.5}
              focalPointY={0.38}
              className="block h-full w-full"
            />
          </motion.div>

          <motion.h1
            style={{ y: yNameTop, opacity }}
            className="absolute left-5 top-[7vh] z-20 font-heading text-foreground sm:left-8"
          >
            <span className="block text-[16vw] font-medium leading-[0.82] tracking-monumental md:text-[5.4vw]">
              VICTOR
            </span>
          </motion.h1>
          <motion.h1
            style={{ y: yNameBottom, opacity }}
            className="absolute bottom-[3vh] right-5 z-20 text-right font-heading text-foreground sm:right-8"
          >
            <span className="block text-[16vw] font-medium leading-[0.82] tracking-monumental md:text-[5.4vw]">
              ALÓ
            </span>
          </motion.h1>
        </div>

        {/* Bio */}
        <div className="relative col-span-1 flex flex-col justify-center gap-6 px-6 py-12 sm:px-10 md:col-span-5 md:px-12">
          <motion.span
            variants={fade}
            initial="hidden"
            animate="show"
            className="font-mono text-[11px] uppercase tracking-vast text-background/60"
          >
            Arquitetura e Urbanismo · Estúdio BR
          </motion.span>

          <motion.p
            variants={fade}
            custom={1}
            initial="hidden"
            animate="show"
            className="max-w-md font-body text-lg leading-[1.6] text-background/85 sm:text-xl"
          >
            Sou Victor Aló, técnico em Design de Interiores e bacharel em
            Arquitetura e Urbanismo. Meu processo criativo começa entendendo os
            desejos e o estilo de vida de cada cliente, seguido pela análise do
            entorno, iluminação, ventilação e outros aspectos técnicos.
          </motion.p>

          <motion.p
            variants={fade}
            custom={2}
            initial="hidden"
            animate="show"
            className="max-w-md font-body text-lg leading-[1.6] text-background/70 sm:text-xl"
          >
            Busco unir tecnologia, funcionalidade e estética, criando espaços
            que equilibram tradição e inovação. Para mim, um bom projeto
            transforma aspectos técnicos em ambientes bonitos, confortáveis e
            funcionais.
          </motion.p>

          <motion.div
            style={{ opacity }}
            className="mt-2 flex items-center gap-3"
          >
            <span className="font-mono text-[10px] uppercase tracking-vast text-background/50">
              Role para ver projetos
            </span>
            <span className="h-px w-12 bg-background/40" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}