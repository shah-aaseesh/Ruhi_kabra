import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, FloatingDecoElement, PaisleyPattern, ScatteredDots, DiagonalLine, DottedCircle, RangoliCorner, DistortedText, CreativeMandala, ImagePattern } from "@/components/DecorativeElements";
import { useArtPieces } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";

const Art = () => {
  const { data: artPieces, isLoading } = useArtPieces();

  return (
    <PageTransition>
      <section className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        <FloatingDecoElement x={85} y={5} delay={0}>
          <ImagePattern src="/bg/Head-removebg-preview.png" size={350} opacity={0.15} className="rotate-12" />
        </FloatingDecoElement>
        <FloatingDecoElement x={5} y={30} delay={2}>
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={300} opacity={0.12} className="-rotate-6" />
        </FloatingDecoElement>
        <FloatingDecoElement x={45} y={15} delay={1}>
          <CreativeMandala size={250} className="text-burnt-orange opacity-40 animate-slow-spin" />
        </FloatingDecoElement>
        <RangoliCorner className="absolute top-0 right-0 text-burnt-orange" flip />
        <ScatteredDots count={25} />
        <DiagonalLine className="top-20 right-[30%]" />

        <div className="absolute top-[30%] right-[10%] w-[400px] h-[400px] rounded-full bg-burnt-orange blur-[200px] animate-pulse-glow opacity-20" />

        <motion.div className="relative z-10">
          <motion.h1
            className="font-cinzel text-6xl md:text-8xl font-black chromatic-text"
            initial={{ opacity: 0, x: -40, rotate: -3 }}
            animate={{ opacity: 1, x: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <DistortedText>Art</DistortedText>
          </motion.h1>
          <motion.p
            className="font-cormorant text-lg text-muted-foreground/60 italic mt-4 max-w-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Sketches, paintings & visual experiments — scattered like thoughts at 2am
          </motion.p>

          {/* Ornamental line */}
          <motion.div
            className="flex items-center gap-3 mt-6"
            initial={{ opacity: 0, scaleX: 0, originX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="w-20 h-px bg-primary/30" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/30" />
            <div className="w-12 h-px bg-primary/20" />
          </motion.div>
        </motion.div>
      </section>

      {/* Chaotic Masonry Grid */}
      <section className="px-4 md:px-8 pb-24 relative overflow-hidden">
        <ScatteredDots count={20} />

        <div className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
          {isLoading && <div className="text-center w-full col-span-full py-12 text-primary font-cinzel">Loading gallery...</div>}
          {artPieces?.map((piece: any, i: number) => {
            const rotate = (i % 2 === 0 ? -1 : 1) * ((i % 3) + 1.5);
            return (
            <motion.div
              key={piece._id}
              className="group relative break-inside-avoid mb-6 md:mb-8 overflow-hidden bg-muted/10 warp-slight"
              style={{
                rotate: `${rotate}deg`,
              }}
              initial={{ opacity: 0, y: 40, scale: 0.9, rotate: rotate * 3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: rotate }}
              transition={{ delay: i * 0.04, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.06,
                rotate: 0,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}
            >
              {/* Border that becomes visible */}
              <div className="absolute inset-0 border border-border/10 group-hover:border-primary/30 transition-colors duration-500 z-20" />

              <img 
                src={urlFor(piece.image).width(800).url()} 
                alt={piece.title} 
                className="w-full h-auto block grayscale-[30%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" 
                loading="lazy" 
              />

              {/* Noise texture overlay */}
              <div className="absolute inset-0 noise-texture mix-blend-overlay opacity-30 pointer-events-none" />

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/10 shadow-[inset_0_0_60px_hsl(43_52%_54%/0.15)] z-10 pointer-events-none" />

              {/* Title reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-20">
                <p className="font-grotesk text-[10px] text-foreground/70 tracking-wider">{piece.title}</p>
              </div>

              {/* Corner decorations on hover */}
              <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary/30 transition-colors duration-500 z-20" />
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-primary/0 group-hover:border-primary/30 transition-colors duration-500 z-20" />
            </motion.div>
            );
          })}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex items-center justify-center gap-4 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <DottedCircle size={40} className="text-primary" />
          <span className="font-grotesk text-[9px] tracking-[0.4em] text-muted-foreground/20 uppercase">more coming</span>
          <DottedCircle size={40} className="text-primary" />
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Art;
