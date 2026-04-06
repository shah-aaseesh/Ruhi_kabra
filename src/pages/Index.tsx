import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import {
  MandalaPattern, PaisleyPattern, RangoliCorner, FloatingDecoElement,
  DistortedText, ParallaxLayer, DiagonalLine, DottedCircle, ScatteredDots
} from "@/components/DecorativeElements";
import { Film, Theater, Palette, PenTool } from "lucide-react";

const heroLetters = "RUHI KABRA".split("");

const navBlocks = [
  { to: "/film", label: "Film", icon: Film, color: "from-maroon/30 to-transparent", accent: "border-l-secondary" },
  { to: "/theatre", label: "Theatre", icon: Theater, color: "from-accent/30 to-transparent", accent: "border-l-accent" },
  { to: "/art", label: "Art", icon: Palette, color: "from-burnt-orange/30 to-transparent", accent: "border-l-burnt-orange" },
  { to: "/writing", label: "Writing", icon: PenTool, color: "from-gold/30 to-transparent", accent: "border-l-primary" },
];

const featuredFilms = [
  { title: "BAI", role: "Documentary", rotate: "-2deg" },
  { title: "The Man", role: "Short Film", rotate: "1deg" },
  { title: "Off Script", role: "Award Winning", rotate: "-1deg" },
  { title: "Stained", role: "Short Film", rotate: "2deg" },
];

const marqueeText = "FILMMAKER • ARTIST • WRITER • STORYTELLER • CREATOR • DREAMER • ";

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <PageTransition>
      {/* Hero */}
      <section ref={heroRef} className="relative min-h-[110vh] flex flex-col items-center justify-center overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0">
          <motion.div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] rounded-full bg-maroon blur-[180px] animate-pulse-glow" />
          <motion.div className="absolute bottom-[20%] right-[5%] w-[400px] h-[400px] rounded-full bg-accent blur-[160px] animate-pulse-glow" style={{ animationDelay: "2s" }} />
          <motion.div className="absolute top-[60%] left-[50%] w-[300px] h-[300px] rounded-full bg-burnt-orange blur-[120px] animate-pulse-glow" style={{ animationDelay: "4s" }} />
          <motion.div className="absolute top-[5%] right-[30%] w-[200px] h-[200px] rounded-full bg-gold blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }} />
        </div>

        {/* Mandala patterns floating */}
        <FloatingDecoElement x={5} y={15} delay={0}>
          <MandalaPattern size={300} className="text-primary animate-slow-spin" />
        </FloatingDecoElement>
        <FloatingDecoElement x={75} y={60} delay={2}>
          <MandalaPattern size={200} className="text-secondary" opacity={0.03} />
        </FloatingDecoElement>
        <FloatingDecoElement x={85} y={10} delay={1}>
          <PaisleyPattern className="text-burnt-orange" opacity={0.04} />
        </FloatingDecoElement>
        <FloatingDecoElement x={10} y={70} delay={3}>
          <PaisleyPattern className="text-primary rotate-45" opacity={0.03} />
        </FloatingDecoElement>

        {/* Rangoli corners */}
        <RangoliCorner className="absolute top-0 left-0 text-primary" />
        <RangoliCorner className="absolute top-0 right-0 text-primary" flip />
        <RangoliCorner className="absolute bottom-0 left-0 text-primary rotate-180" flip />
        <RangoliCorner className="absolute bottom-0 right-0 text-primary rotate-180" />

        {/* Diagonal lines */}
        <DiagonalLine className="top-20 left-[20%] text-primary" />
        <DiagonalLine className="top-40 right-[15%] text-secondary" />
        <DiagonalLine className="bottom-20 left-[60%] text-accent" />

        {/* Dotted circles */}
        <DottedCircle size={150} className="absolute top-[20%] right-[10%] text-primary animate-slow-spin" />
        <DottedCircle size={80} className="absolute bottom-[30%] left-[15%] text-secondary" />

        {/* Scattered dots */}
        <ScatteredDots count={30} />

        {/* Main title */}
        <motion.div className="relative z-10 text-center px-4" style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}>
          <motion.div
            className="mb-4 font-grotesk text-[10px] tracking-[0.5em] text-muted-foreground/50 uppercase"
            initial={{ opacity: 0, letterSpacing: "1em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            portfolio of
          </motion.div>

          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] font-black tracking-[0.05em] mb-6 chromatic-text leading-[0.85]"
            style={{ perspective: "1000px" }}>
            {heroLetters.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block hover:text-primary transition-colors duration-200"
                initial={{ opacity: 0, y: 120, rotateX: -90, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
                transition={{ delay: 0.3 + i * 0.06, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -10, scale: 1.1, transition: { duration: 0.2 } }}
                style={{ color: letter === " " ? "transparent" : undefined }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>

          {/* Marquee subtitle */}
          <motion.div
            className="overflow-hidden mt-8 border-y border-border/20 py-3"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <div className="animate-marquee whitespace-nowrap">
              <span className="font-cormorant text-lg md:text-xl text-muted-foreground/60 tracking-[0.3em] italic">
                {marqueeText.repeat(4)}
              </span>
            </div>
          </motion.div>

          {/* Decorative Hindi/Devanagari-inspired ornamental line */}
          <motion.div
            className="mt-6 flex items-center justify-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
          >
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/40" />
            <div className="w-2 h-2 rotate-45 border border-primary/40" />
            <div className="w-8 h-px bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary/30" />
            <div className="w-8 h-px bg-primary/40" />
            <div className="w-2 h-2 rotate-45 border border-primary/40" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/40" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 flex flex-col items-center gap-2 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
        >
          <motion.div
            className="w-px h-16 bg-gradient-to-b from-transparent to-primary/40"
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="font-grotesk text-[9px] tracking-[0.4em] text-muted-foreground/40 uppercase">scroll</span>
        </motion.div>

        {/* Asymmetric side text */}
        <motion.div
          className="absolute left-4 top-1/2 -translate-y-1/2 hidden md:block"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ delay: 2 }}
        >
          <span className="font-cinzel text-[10px] tracking-[0.5em] uppercase [writing-mode:vertical-rl] rotate-180">
            multidisciplinary artist
          </span>
        </motion.div>
        <motion.div
          className="absolute right-4 top-1/3 hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.1, x: 0 }}
          transition={{ delay: 2.2 }}
        >
          <span className="font-cormorant text-xs tracking-[0.3em] italic [writing-mode:vertical-rl]">
            Sonipat, Haryana
          </span>
        </motion.div>
      </section>

      {/* About - Handwritten Note */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        {/* Background decorations */}
        <ParallaxLayer speed={0.3} className="absolute inset-0 pointer-events-none">
          <MandalaPattern size={400} className="absolute -right-40 top-10 text-secondary animate-slow-spin" opacity={0.02} />
        </ParallaxLayer>
        <FloatingDecoElement x={80} y={20} delay={1}>
          <DottedCircle size={120} className="text-gold" />
        </FloatingDecoElement>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gold/5 blur-[200px]" />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 max-w-5xl mx-auto">
          {/* Decorative vertical bar */}
          <motion.div
            className="hidden md:flex flex-col items-center gap-4 pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="w-px h-20 bg-gradient-to-b from-transparent to-primary/30" />
            <div className="w-3 h-3 rotate-45 border border-primary/30" />
            <div className="w-px h-40 bg-gradient-to-b from-primary/30 to-transparent" />
          </motion.div>

          <motion.div
            className="relative max-w-xl rotate-[-1.5deg] bg-card/40 backdrop-blur-sm border border-border/30 p-8 md:p-12 distorted-border noise-texture"
            initial={{ opacity: 0, y: 50, rotate: -4, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, rotate: -1.5, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {/* Tape strips */}
            <div className="absolute -top-3 left-12 w-12 h-5 bg-gold/15 rotate-3 rounded-sm" />
            <div className="absolute -top-2 right-16 w-10 h-4 bg-gold/10 -rotate-2 rounded-sm" />
            {/* Corner fold */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-muted/50 to-transparent" />

            <p className="font-cormorant text-lg md:text-xl leading-relaxed text-foreground/85 italic relative z-10">
              "Hello! I'm <DistortedText className="font-semibold not-italic">Ruhi Kabra</DistortedText>. I love doing anything creative and I am a yapper when I feel.
              I've been drawing ever since I could remember and have recently expanded my artistic
              pursuits into film and writing. Here is a bunch of my recent work. I hope you enjoy
              going through it as much as I did creating them."
            </p>
            <div className="mt-6 flex items-center gap-3 relative z-10">
              <div className="w-16 h-px bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
            {/* Ink splatter decoration */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-secondary/5 blur-md" />
          </motion.div>

          {/* Side annotations */}
          <motion.div
            className="hidden md:block space-y-6 pt-20"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">Based in</p>
            <p className="font-cormorant text-sm italic text-muted-foreground/40">Haryana & Maharashtra</p>
            <div className="w-px h-8 bg-border/20 ml-4" />
            <p className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">Ashoka University</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Films - Overlapping cards */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <PaisleyPattern className="absolute left-[5%] top-[20%] text-primary rotate-12" opacity={0.04} />
          <PaisleyPattern className="absolute right-[10%] bottom-[10%] text-secondary -rotate-45" opacity={0.03} />
        </ParallaxLayer>
        <ScatteredDots count={15} />

        <div className="flex items-baseline gap-6 mb-16">
          <motion.h2
            className="font-cinzel text-sm tracking-[0.4em] text-muted-foreground uppercase"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            Featured Work
          </motion.h2>
          <motion.div
            className="flex-1 h-px bg-gradient-to-r from-border/30 to-transparent"
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {featuredFilms.map((film, i) => (
            <motion.div
              key={film.title}
              className="group relative aspect-[3/4] bg-muted/20 border border-border/20 overflow-hidden glitch-hover warp-slight"
              style={{ rotate: film.rotate, marginTop: i % 2 === 1 ? "2rem" : "0" }}
              initial={{ opacity: 0, y: 50, rotate: Number(film.rotate.replace("deg", "")) * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: Number(film.rotate.replace("deg", "")) }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
            >
              {/* Colored overlay gradients */}
              <div className={`absolute inset-0 ${["bg-gradient-to-br from-maroon/20 to-transparent", "bg-gradient-to-bl from-accent/20 to-transparent", "bg-gradient-to-tr from-burnt-orange/15 to-transparent", "bg-gradient-to-tl from-gold/15 to-transparent"][i]}`} />
              {/* Noise */}
              <div className="absolute inset-0 noise-texture" />
              {/* Number watermark */}
              <span className="absolute top-3 right-3 font-cinzel text-6xl font-black text-foreground/[0.03]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 via-background/40 to-transparent">
                <h3 className="font-cinzel text-base md:text-lg font-semibold group-hover:text-primary transition-colors">{film.title}</h3>
                <p className="font-grotesk text-[10px] text-muted-foreground mt-1 tracking-wider uppercase">{film.role}</p>
              </div>
              {/* Hover glow border */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-colors duration-500" />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 flex items-center gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            to="/film"
            className="font-grotesk text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors story-link"
          >
            View all films →
          </Link>
          <div className="flex-1 h-px bg-border/10" />
        </motion.div>
      </section>

      {/* Navigation Blocks - More dramatic */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <FloatingDecoElement x={90} y={30} delay={0}>
          <MandalaPattern size={250} className="text-gold animate-slow-spin" opacity={0.02} />
        </FloatingDecoElement>

        <motion.h2
          className="font-cinzel text-sm tracking-[0.4em] text-muted-foreground/40 uppercase mb-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Explore
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {navBlocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              style={{ marginTop: i % 2 === 1 ? "3rem" : "0" }}
            >
              <Link
                to={block.to}
                className={`group block relative p-8 md:p-12 border border-border/20 bg-card/20 hover:border-primary/30 transition-all duration-500 overflow-hidden border-l-2 ${block.accent} warp-slight`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                {/* Pattern overlay */}
                <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <DottedCircle size={60} className="text-primary" />
                </div>
                <div className="relative z-10">
                  <block.icon className="w-5 h-5 text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 mb-4" />
                  <h3 className="font-cinzel text-3xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300 chromatic-text">
                    {block.label}
                  </h3>
                  <div className="mt-4 w-0 group-hover:w-16 h-px bg-primary transition-all duration-700" />
                  <p className="mt-3 font-grotesk text-[10px] tracking-[0.2em] text-muted-foreground/30 uppercase opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    View works →
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Horizontal divider marquee */}
      <section className="py-8 overflow-hidden border-y border-border/10">
        <div className="animate-marquee whitespace-nowrap">
          <span className="font-cinzel text-sm text-muted-foreground/10 tracking-[0.5em]">
            {"FILM • THEATRE • ART • WRITING • FILM • THEATRE • ART • WRITING • ".repeat(6)}
          </span>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 relative overflow-hidden">
        <RangoliCorner className="absolute bottom-0 left-0 text-primary rotate-180" flip />
        <div className="text-center space-y-4">
          <p className="font-cinzel text-2xl tracking-[0.2em] text-foreground/20">RK</p>
          <p className="font-cormorant text-sm text-muted-foreground/40 tracking-widest">
            © 2024 Ruhi Kabra
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-8 h-px bg-border/20" />
            <div className="w-1.5 h-1.5 rotate-45 border border-border/20" />
            <div className="w-8 h-px bg-border/20" />
          </div>
        </div>
      </footer>
    </PageTransition>
  );
};

export default Index;
