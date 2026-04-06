import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";

const artPieces = Array.from({ length: 9 }, (_, i) => ({
  id: i + 1,
  title: `Untitled ${i + 1}`,
  aspect: [1, 1.3, 0.8, 1.5, 0.7, 1.2, 0.9, 1.4, 1.1][i],
}));

const Art = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 px-6 md:px-12">
        <motion.h1
          className="font-cinzel text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Art
        </motion.h1>
        <motion.p
          className="font-cormorant text-lg text-muted-foreground italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Sketches, paintings & visual experiments
        </motion.p>
      </section>

      {/* Masonry Grid */}
      <section className="px-6 md:px-12 pb-24">
        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {artPieces.map((piece, i) => (
            <motion.div
              key={piece.id}
              className="group relative break-inside-avoid bg-muted/20 border border-border/20 overflow-hidden"
              style={{ aspectRatio: `1 / ${piece.aspect}` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maroon/10 via-accent/10 to-burnt-orange/10" />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-cinzel text-4xl text-foreground/5">{piece.id}</span>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-primary/5 shadow-[inset_0_0_40px_hsl(43_52%_54%/0.1)]" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-grotesk text-xs text-muted-foreground">{piece.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Art;
