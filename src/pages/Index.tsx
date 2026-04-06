import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageTransition from "@/components/PageTransition";
import { Film, Theater, Palette, PenTool } from "lucide-react";

const heroLetters = "RUHI KABRA".split("");

const navBlocks = [
  { to: "/film", label: "Film", icon: Film, color: "from-maroon/20 to-transparent" },
  { to: "/theatre", label: "Theatre", icon: Theater, color: "from-accent/20 to-transparent" },
  { to: "/art", label: "Art", icon: Palette, color: "from-burnt-orange/20 to-transparent" },
  { to: "/writing", label: "Writing", icon: PenTool, color: "from-gold/20 to-transparent" },
];

const featuredFilms = [
  { title: "BAI", role: "Documentary" },
  { title: "The Man", role: "Short Film" },
  { title: "Off Script", role: "Award Winning" },
  { title: "Stained", role: "Short Film" },
];

const Index = () => {
  return (
    <PageTransition>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        {/* Background texture layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-maroon blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-gold blur-[80px]" />
        </div>

        <div className="relative z-10 text-center px-4">
          <h1 className="font-cinzel text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-[0.1em] mb-6" style={{ perspective: "1000px" }}>
            {heroLetters.map((letter, i) => (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 100, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ delay: i * 0.08, duration: 0.8, ease: "easeOut" }}
                style={{ color: letter === " " ? "transparent" : undefined }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="font-cormorant text-xl md:text-2xl text-muted-foreground tracking-[0.4em] italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            Filmmaker &bull; Artist &bull; Writer
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-muted-foreground/40" />
          <span className="font-grotesk text-[10px] tracking-[0.3em] text-muted-foreground uppercase">scroll</span>
        </motion.div>
      </section>

      {/* About - Handwritten Note */}
      <section className="relative py-32 px-6 md:px-12 flex justify-center">
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="w-[500px] h-[500px] rounded-full bg-gold/5 blur-[150px]" />
        </div>
        <motion.div
          className="relative max-w-xl -rotate-1 bg-card/50 backdrop-blur-sm border border-border/50 p-8 md:p-12 rounded-sm"
          initial={{ opacity: 0, y: 40, rotate: -3 }}
          whileInView={{ opacity: 1, y: 0, rotate: -1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="absolute -top-3 left-8 w-8 h-6 bg-gold/20 rounded-sm" />
          <p className="font-cormorant text-lg md:text-xl leading-relaxed text-foreground/90 italic">
            "Hello! I'm Ruhi Kabra. I love doing anything creative and I am a yapper when I feel.
            I've been drawing ever since I could remember and have recently expanded my artistic
            pursuits into film and writing. Here is a bunch of my recent work. I hope you enjoy
            going through it as much as I did creating them."
          </p>
          <div className="mt-6 w-20 h-px bg-primary/40" />
        </motion.div>
      </section>

      {/* Featured Films */}
      <section className="py-24 px-6 md:px-12">
        <motion.h2
          className="font-cinzel text-sm tracking-[0.4em] text-muted-foreground uppercase mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Featured Work
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredFilms.map((film, i) => (
            <motion.div
              key={film.title}
              className="group relative aspect-[3/4] bg-muted/30 border border-border/30 overflow-hidden glitch-hover"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="font-cinzel text-lg font-semibold">{film.title}</h3>
                <p className="font-grotesk text-xs text-muted-foreground mt-1">{film.role}</p>
              </div>
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
        <Link
          to="/film"
          className="inline-block mt-8 font-grotesk text-xs tracking-[0.3em] uppercase text-muted-foreground hover:text-primary transition-colors story-link"
        >
          View all films →
        </Link>
      </section>

      {/* Navigation Blocks */}
      <section className="py-24 px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-4xl mx-auto">
          {navBlocks.map((block, i) => (
            <motion.div
              key={block.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              style={{ marginTop: i % 2 === 1 ? "2rem" : "0" }}
            >
              <Link
                to={block.to}
                className="group block relative p-8 md:p-12 border border-border/30 bg-card/30 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${block.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <block.icon className="relative w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mb-4" />
                <h3 className="relative font-cinzel text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
                  {block.label}
                </h3>
                <div className="relative mt-4 w-0 group-hover:w-12 h-px bg-primary transition-all duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 border-t border-border/20 text-center">
        <p className="font-cormorant text-sm text-muted-foreground tracking-widest">
          © 2024 Ruhi Kabra. All rights reserved.
        </p>
      </footer>
    </PageTransition>
  );
};

export default Index;
