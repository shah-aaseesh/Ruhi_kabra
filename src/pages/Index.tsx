import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useRef } from "react";
import PageTransition from "@/components/PageTransition";
import {
  MandalaPattern, PaisleyPattern, RangoliCorner, FloatingDecoElement,
  DistortedText, ParallaxLayer, DiagonalLine, DottedCircle, ScatteredDots, CreativeMandala, ImagePattern
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
  { title: "BAI", role: "Documentary", rotate: "-2deg", image: "/bg/BAI.jpg" },
  { title: "The Man", role: "Short Film", rotate: "1deg", image: "/bg/The Man.jpg" },
  { title: "Off Script", role: "Award Winning", rotate: "-1deg", image: "/bg/OFF SCRIPT.jpg" },
  { title: "A Couple of Shots", role: "Short Film", rotate: "2deg", image: "/bg/A couple of shots.jpg" },
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

        {/* Pattern images floating */}
        <FloatingDecoElement x={5} y={10} delay={0}>
          <ImagePattern src="/bg/Head-removebg-preview.png" size={380} opacity={0.15} className="animate-slow-spin opacity-50" />
        </FloatingDecoElement>
        <FloatingDecoElement x={65} y={50} delay={2}>
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={400} opacity={0.12} className="animate-slow-spin" />
        </FloatingDecoElement>
        {/* Other patterns */}
        <FloatingDecoElement x={85} y={15} delay={1}>
          <PaisleyPattern className="text-burnt-orange scale-110" />
        </FloatingDecoElement>
        <FloatingDecoElement x={10} y={75} delay={3}>
          <CreativeMandala size={250} className="text-primary rotate-45 opacity-60" />
        </FloatingDecoElement>
        <FloatingDecoElement x={45} y={35} delay={1.5}>
          <CreativeMandala size={300} className="text-gold animate-slow-spin opacity-30" />
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
                whileTap={{ y: -10, scale: 1.1, transition: { duration: 0.2 } }}
                style={{ color: letter === " " ? "transparent" : undefined }}
              >
                <span className={`inline-block ${letter !== " " ? "mobile-wave" : ""}`} style={{ animationDelay: `${i * 0.1 + 2}s` }}>
                  {letter === " " ? "\u00A0" : letter}
                </span>
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



      </section>

      {/* About - Handwritten Note */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        {/* Background decorations */}
        <ParallaxLayer speed={0.3} className="absolute inset-0 pointer-events-none">
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={600} opacity={0.12} className="absolute -right-40 top-10 rotate-12" />
          <PaisleyPattern className="absolute left-[10%] top-[40%] text-burnt-orange scale-125 rotate-45" />
          <ImagePattern src="/bg/Head-removebg-preview.png" size={450} opacity={0.1} className="absolute left-[5%] bottom-[-5%] -rotate-6" />
        </ParallaxLayer>
        <FloatingDecoElement x={80} y={20} delay={1}>
          <DottedCircle size={120} className="text-gold" />
        </FloatingDecoElement>

        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[600px] h-[600px] rounded-full bg-gold/5 blur-[200px]" />
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16 max-w-6xl mx-auto">
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
            className="relative max-w-xl rotate-[-1.5deg] bg-card/60 backdrop-blur-md border-2 border-primary/40 shadow-[0_0_50px_rgba(255,215,0,0.1)] p-8 md:p-12 distorted-border noise-texture"
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
              "Hello! I’m <DistortedText className="font-semibold not-italic">Ruhi Kabra</DistortedText>. I love doing anything creative and adventurous. I express myself by creating all kinds of art and I am a yapper when I feel. I’ve been drawing ever since I could remember and have recently expanded my artistic pursuits into film and writing. I’m finishing up my undergrad at Ashoka University as a psych major and media studies minor. I also completed a summer course at Prague film school last year after which I travelled solo around Europe for a few weeks. Here is a bunch of my recent work. I hope you enjoy going through it as much as I did creating them and hopefully I can be of some help to you!"
            </p>
            <div className="mt-6 flex items-center gap-3 relative z-10">
              <div className="w-16 h-px bg-primary/30" />
              <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </div>
            {/* Ink splatter decoration */}
            <div className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-secondary/5 blur-md" />
          </motion.div>

          {/* Portrait Placeholder 2 (About section tape) */}
          <motion.div
            className="relative w-56 h-72 lg:w-64 lg:h-80 mx-auto md:-ml-10 mt-8 md:mt-16 -rotate-3 md:-rotate-6 bg-card/40 backdrop-blur-md border border-border/30 p-2 pb-10 shadow-[0_0_30px_rgba(255,215,0,0.02)] z-20 warp-slight group block"
            initial={{ opacity: 0, x: -30, rotate: -15 }}
            whileInView={{ opacity: 1, x: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img src="/Photos/image2.png" alt="Ruhi Kabra" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
            <div className="absolute bottom-3 left-0 right-0 text-center font-cormorant italic text-sm text-foreground/40"></div>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-5 bg-secondary/30 rotate-2 blur-[1px]" />
          </motion.div>

          {/* Side annotations */}
          <motion.div
            className="flex md:flex-col justify-center items-center md:items-start gap-4 md:gap-0 md:space-y-6 pt-8 md:pt-20 w-full md:w-auto text-center md:text-left"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 0.4, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center md:items-start">
              <p className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50">Based in</p>
              <p className="font-cormorant text-sm italic text-muted-foreground/40">Pune, Maharashtra</p>
            </div>
            <div className="hidden md:block w-px h-8 bg-border/20 ml-4" />
            <div className="md:hidden w-8 h-px bg-border/20" />
            <p className="font-grotesk text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 mt-2 md:mt-0">Ashoka University</p>
          </motion.div>
        </div>
      </section>

      {/* Featured Films - Overlapping cards */}
      <section className="py-24 px-6 md:px-12 relative overflow-hidden">
        <ParallaxLayer speed={0.2} className="absolute inset-0 pointer-events-none">
          <ImagePattern src="/bg/Head-removebg-preview.png" size={400} opacity={0.12} className="absolute left-[5%] top-[10%] rotate-12" />
          <PaisleyPattern className="absolute right-[10%] bottom-[10%] text-secondary/40 -rotate-45 scale-110" />
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={500} opacity={0.08} className="absolute left-[50%] top-[50%] -translate-y-1/2 -translate-x-1/2" />
        </ParallaxLayer>
        <ScatteredDots count={30} className="text-primary" />

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
              className="group relative aspect-[3/4] bg-card/70 backdrop-blur-sm border-2 border-primary/30 hover:border-primary/80 overflow-hidden glitch-hover warp-slight shadow-xl"
              style={{ rotate: film.rotate, marginTop: i % 2 === 1 ? "2rem" : "0" }}
              initial={{ opacity: 0, y: 50, rotate: Number(film.rotate.replace("deg", "")) * 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: Number(film.rotate.replace("deg", "")) }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0, transition: { duration: 0.3 } }}
            >
              {/* Image background */}
              {film.image && (
                <img src={film.image} alt={film.title} className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700 grayscale-[30%] group-hover:grayscale-0" />
              )}
              {/* Colored overlay gradients */}
              <div className={`absolute inset-0 ${["bg-gradient-to-br from-maroon/40 to-transparent", "bg-gradient-to-bl from-accent/40 to-transparent", "bg-gradient-to-tr from-burnt-orange/30 to-transparent", "bg-gradient-to-tl from-gold/30 to-transparent"][i]} mix-blend-multiply`} />
              {/* Noise */}
              <div className="absolute inset-0 noise-texture mix-blend-overlay opacity-50" />
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
      <section className="py-24 px-6 md:px-12 relative overflow-hidden border-t-2 border-primary/20 mt-12 bg-background/50 backdrop-blur-xl noise-texture drop-shadow-[0_0_100px_rgba(255,215,0,0.05)]">
        {/* Portrait Placeholder 1 (Explore background) */}
        <motion.div
          className="relative md:absolute mx-auto md:mx-0 md:right-[5%] md:bottom-[10%] mb-12 md:mb-0 w-48 h-60 lg:w-56 lg:h-72 rotate-[4deg] md:rotate-[8deg] bg-card/40 backdrop-blur-md border border-border/30 p-2 pb-10 shadow-2xl z-0 warp-slight group block"
          initial={{ opacity: 0, y: 30, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: 8 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src="/Photos/image3.png" alt="Ruhi Kabra" className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" />
          <div className="absolute bottom-3 left-0 right-0 text-center font-cormorant italic text-sm text-muted-foreground/60"></div>
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 bg-primary/20 -rotate-3 blur-[1px]" />
        </motion.div>

        <FloatingDecoElement x={85} y={15} delay={0}>
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={350} opacity={0.15} className="-rotate-12" />
        </FloatingDecoElement>
        <FloatingDecoElement x={5} y={55} delay={2}>
          <ImagePattern src="/bg/Head-removebg-preview.png" size={280} opacity={0.12} className="rotate-6" />
        </FloatingDecoElement>
        <FloatingDecoElement x={45} y={5} delay={1}>
          <CreativeMandala size={250} className="text-secondary/40 rotate-90 opacity-40" />
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
              className={i % 2 === 1 ? "sm:mt-12" : ""}
              initial={{ opacity: 0, y: 40, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, y: 0, rotate: i % 2 === 0 ? -0.5 : 0.5 }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              viewport={{ once: true }}
            >
              <Link
                to={block.to}
                className={`group block relative p-8 md:p-12 border-2 border-primary/30 bg-card/80 hover:border-primary/100 hover:shadow-[0_0_40px_rgba(255,215,0,0.2)] transition-all duration-500 overflow-hidden border-l-4 border-b-4 ${block.accent} warp-slight backdrop-blur-sm`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-40 group-hover:opacity-100 transition-opacity duration-700`} />
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


    </PageTransition>
  );
};

export default Index;
