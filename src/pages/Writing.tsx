import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, FloatingDecoElement, PaisleyPattern, ScatteredDots, DiagonalLine, DottedCircle, RangoliCorner, DistortedText, ParallaxLayer, CreativeMandala, ImagePattern } from "@/components/DecorativeElements";
import { ExternalLink } from "lucide-react";

const articles = [
  { title: "A Third Space", excerpt: "On the liminal spaces between identities, cultures, and art forms — where creation happens in the in-between.", link: "https://substack.com/@ruhigh/note/p-192065027?r=6vuc5k&utm_source=notes-share-action&utm_medium=web" },
  { title: "Doorway", excerpt: "What stands at the threshold of memory and forgetting — a meditation on passage and permanence.", link: "https://substack.com/@ruhigh/note/p-190555196?r=6vuc5k&utm_source=notes-share-action&utm_medium=web" },
  { title: "My Name", excerpt: "An exploration of names, naming, and the weight they carry across languages and lives.", link: "https://substack.com/@ruhigh/note/p-190554784?r=6vuc5k&utm_source=notes-share-action&utm_medium=web" },
];

const Writing = () => {
  return (
    <PageTransition>
      <section className="relative pt-24 pb-12 px-6 md:px-12 lg:px-24 overflow-hidden">
        <FloatingDecoElement x={75} y={10} delay={0}>
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={350} opacity={0.12} className="-rotate-12" />
        </FloatingDecoElement>
        <FloatingDecoElement x={5} y={40} delay={2}>
          <ImagePattern src="/bg/Head-removebg-preview.png" size={300} opacity={0.1} className="rotate-6" />
        </FloatingDecoElement>
        <RangoliCorner className="absolute top-0 right-0 text-primary" flip />
        <ScatteredDots count={20} />
        <DiagonalLine className="top-32 right-[20%]" />

        <div className="absolute top-[40%] left-[10%] w-[400px] h-[400px] rounded-full bg-accent blur-[200px] animate-pulse-glow opacity-15" />

        <motion.div className="relative z-10">
          <motion.h1
            className="font-cinzel text-6xl md:text-8xl font-black chromatic-text"
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8 }}
          >
            <DistortedText>Writing</DistortedText>
          </motion.h1>

          <motion.div
            className="flex items-center gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="https://substack.com/@ruhigh"
              target="_blank"
              rel="noopener noreferrer"
              className="font-grotesk text-sm text-muted-foreground/60 hover:text-primary transition-colors flex items-center gap-2 story-link"
            >
              Substack <ExternalLink size={12} />
            </a>
            <div className="w-8 h-px bg-border/20" />
            <div className="w-1.5 h-1.5 rotate-45 border border-primary/20" />
          </motion.div>

          {/* Marquee */}
          <motion.div
            className="overflow-hidden mt-8 border-y border-border/10 py-2 max-w-lg"
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <div className="animate-marquee whitespace-nowrap">
              <span className="font-cormorant text-xs text-muted-foreground/20 tracking-[0.3em] italic">
                {"PROSE • POETRY • ESSAYS • THOUGHTS • FRAGMENTS • ".repeat(4)}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Articles - asymmetric editorial */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 relative overflow-hidden">
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <ImagePattern src="/bg/Head-removebg-preview.png" size={450} opacity={0.08} className="absolute right-[5%] top-[15%] rotate-12" />
          <CreativeMandala size={350} className="absolute left-[10%] top-[45%] text-burnt-orange -rotate-45 opacity-40" />
        </ParallaxLayer>

        {/* Paper texture bg */}
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/15 to-transparent pointer-events-none z-0" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 max-w-7xl mx-auto">
          {articles.map((article, i) => (
            <motion.a
              href={article.link}
              target="_blank"
              rel="noopener noreferrer"
              key={article.title}
              className="group relative bg-card/50 backdrop-blur-md border-2 border-primary/20 p-8 hover:border-primary/60 hover:shadow-[0_0_30px_rgba(255,215,0,0.1)] transition-all duration-500 overflow-hidden warp-slight block cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Pattern inside card */}
              <CreativeMandala size={250} className="absolute -top-10 -right-10 text-primary/10 rotate-45 group-hover:rotate-90 transition-transform duration-1000" />
              
              {/* Background number */}
              <span className="absolute -top-4 -right-2 font-cinzel text-7xl font-black text-foreground/[0.04] select-none pointer-events-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              <div className="relative pl-8 border-l-2 border-border/20 group-hover:border-primary/40 transition-colors duration-700">
                {/* Decorative dot on border */}
                <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-border/30 group-hover:bg-primary/60 transition-colors duration-500" />

                <span className="font-grotesk text-[10px] text-muted-foreground/30 tracking-[0.4em] uppercase block mb-3">
                  {["essay", "prose", "personal"][i]}
                </span>

                <h2 className="font-cinzel text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-500 chromatic-text mb-4">
                  {article.title}
                </h2>

                <p className="font-cormorant text-base md:text-lg text-muted-foreground/60 italic leading-relaxed max-w-lg">
                  {article.excerpt}
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="w-0 group-hover:w-20 h-px bg-primary/30 transition-all duration-700" />
                  <div className="w-1 h-1 rounded-full bg-primary/0 group-hover:bg-primary/40 transition-all duration-500" />
                </div>
              </div>

              {/* Side decoration */}
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <DottedCircle size={40} className="text-primary" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Bottom ornament */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-px bg-gradient-to-r from-transparent to-border/20" />
          <div className="w-2 h-2 rotate-45 border border-border/15" />
          <span className="font-grotesk text-[9px] tracking-[0.4em] text-muted-foreground/15 uppercase">words</span>
          <div className="w-2 h-2 rotate-45 border border-border/15" />
          <div className="w-16 h-px bg-gradient-to-l from-transparent to-border/20" />
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Writing;
