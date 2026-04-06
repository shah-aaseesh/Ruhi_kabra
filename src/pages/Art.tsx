import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, FloatingDecoElement, PaisleyPattern, ScatteredDots, DiagonalLine, DottedCircle, RangoliCorner, DistortedText } from "@/components/DecorativeElements";

const artPieces = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  title: `Untitled ${i + 1}`,
  aspect: [1.4, 0.8, 1.2, 0.7, 1.5, 0.9, 1.1, 1.6, 0.75, 1.3, 0.85, 1.45][i],
  gradient: [
    "from-maroon/20 via-accent/10 to-transparent",
    "from-burnt-orange/15 via-transparent to-accent/10",
    "from-gold/10 via-maroon/10 to-transparent",
    "from-accent/20 via-transparent to-burnt-orange/10",
    "from-secondary/15 via-gold/10 to-transparent",
    "from-maroon/10 via-accent/15 to-transparent",
    "from-burnt-orange/20 via-transparent to-gold/10",
    "from-accent/15 via-secondary/10 to-transparent",
    "from-gold/15 via-burnt-orange/10 to-transparent",
    "from-secondary/20 via-transparent to-accent/10",
    "from-maroon/15 via-gold/10 to-transparent",
    "from-accent/10 via-burnt-orange/15 to-transparent",
  ][i],
  rotate: [-2, 1.5, -0.8, 2, -1.5, 0.5, -1, 1.8, -0.5, 1.2, -1.8, 0.8][i],
}));

const Art = () => {
  return (
    <PageTransition>
      <section className="relative pt-24 pb-12 px-6 md:px-12 overflow-hidden">
        <FloatingDecoElement x={85} y={5} delay={0}>
          <MandalaPattern size={280} className="text-burnt-orange animate-slow-spin" opacity={0.03} />
        </FloatingDecoElement>
        <FloatingDecoElement x={5} y={30} delay={2}>
          <PaisleyPattern className="text-primary" opacity={0.04} />
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
          {artPieces.map((piece, i) => (
            <motion.div
              key={piece.id}
              className="group relative break-inside-avoid mb-3 md:mb-4 overflow-hidden"
              style={{
                aspectRatio: `1 / ${piece.aspect}`,
                rotate: `${piece.rotate}deg`,
              }}
              initial={{ opacity: 0, y: 40, scale: 0.9, rotate: piece.rotate * 3 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotate: piece.rotate }}
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

              {/* Gradient bg */}
              <div className={`absolute inset-0 bg-gradient-to-br ${piece.gradient}`} />

              {/* Noise texture */}
              <div className="absolute inset-0 noise-texture" />

              {/* Number watermark */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cinzel text-5xl md:text-6xl font-black text-foreground/[0.03] group-hover:text-foreground/[0.06] transition-colors">
                  {String(piece.id).padStart(2, "0")}
                </span>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-primary/5 shadow-[inset_0_0_60px_hsl(43_52%_54%/0.1)] z-10" />

              {/* Title reveal */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-background/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-400 z-20">
                <p className="font-grotesk text-[10px] text-foreground/70 tracking-wider">{piece.title}</p>
              </div>

              {/* Corner decorations on hover */}
              <div className="absolute top-1 left-1 w-4 h-4 border-t border-l border-primary/0 group-hover:border-primary/30 transition-colors duration-500 z-20" />
              <div className="absolute bottom-1 right-1 w-4 h-4 border-b border-r border-primary/0 group-hover:border-primary/30 transition-colors duration-500 z-20" />
            </motion.div>
          ))}
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
