import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, FloatingDecoElement, DottedCircle, ScatteredDots, RangoliCorner, DiagonalLine, DistortedText } from "@/components/DecorativeElements";

const theatreProjects = [
  { title: "Embers", role: "Director", accent: "text-burnt-orange" },
  { title: "Kumbh ka Mela", role: "Set Designer", accent: "text-primary" },
  { title: "Devdas", role: "Set Designer", accent: "text-secondary" },
  { title: "Bombay Dying", role: "Set Designer", accent: "text-accent" },
  { title: "Atyachaar", role: "Acting", accent: "text-maroon" },
  { title: "Two Lives", role: "Set Designer", accent: "text-gold" },
  { title: "Maiyya", role: "Set Designer", accent: "text-burnt-orange" },
];

const Theatre = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--mouse-x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--mouse-y", `${e.clientY}px`);
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <PageTransition>
      <div ref={spotlightRef} className="spotlight fixed inset-0 pointer-events-none z-10" />

      {/* Curtain Effect - heavier */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-maroon/30 to-maroon/10 origin-left z-20"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-maroon/30 to-maroon/10 origin-right z-20"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ delay: 0.2, duration: 1.5, ease: [0.76, 0, 0.24, 1] }}
        />

        {/* Decorative elements */}
        <FloatingDecoElement x={10} y={20} delay={2}>
          <MandalaPattern size={300} className="text-primary animate-slow-spin" opacity={0.02} />
        </FloatingDecoElement>
        <FloatingDecoElement x={75} y={65} delay={3}>
          <DottedCircle size={150} className="text-secondary" />
        </FloatingDecoElement>
        <RangoliCorner className="absolute top-0 left-0 text-primary" />
        <RangoliCorner className="absolute top-0 right-0 text-primary" flip />
        <ScatteredDots count={25} />
        <DiagonalLine className="top-32 left-[30%]" />
        <DiagonalLine className="bottom-20 right-[25%]" />

        {/* Background blobs */}
        <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] rounded-full bg-maroon blur-[200px] animate-pulse-glow opacity-30" />
        <div className="absolute bottom-[20%] right-[20%] w-[300px] h-[300px] rounded-full bg-accent blur-[150px] animate-pulse-glow opacity-20" style={{ animationDelay: "3s" }} />

        <motion.div className="relative z-10 text-center">
          <motion.div
            className="font-grotesk text-[10px] tracking-[0.6em] text-muted-foreground/30 uppercase mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            the stage awaits
          </motion.div>
          <motion.h1
            className="font-cinzel text-6xl md:text-8xl lg:text-9xl font-black tracking-[0.05em] chromatic-text"
            initial={{ opacity: 0, y: 40, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <DistortedText>Theatre</DistortedText>
          </motion.h1>

          {/* Ornamental divider */}
          <motion.div
            className="flex items-center justify-center gap-3 mt-8"
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <div className="w-20 h-px bg-gradient-to-r from-transparent to-primary/30" />
            <div className="w-2 h-2 rotate-45 border border-primary/30" />
            <div className="w-3 h-3 rotate-45 border border-primary/20" />
            <div className="w-2 h-2 rotate-45 border border-primary/30" />
            <div className="w-20 h-px bg-gradient-to-l from-transparent to-primary/30" />
          </motion.div>
        </motion.div>

        {/* Side text */}
        <motion.div
          className="absolute left-4 bottom-1/3 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ delay: 2 }}
        >
          <span className="font-cormorant text-xs tracking-[0.3em] [writing-mode:vertical-rl] rotate-180 italic">
            lights, camera, stage
          </span>
        </motion.div>
      </section>

      {/* Projects - More dramatic layout */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 -mt-24 relative z-10">
        <div className="max-w-4xl mx-auto">
          {theatreProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative"
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60, rotate: i % 2 === 0 ? -2 : 2 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ delay: i * 0.08, duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
              style={{
                marginLeft: i % 3 === 0 ? "0" : i % 3 === 1 ? "8%" : "4%",
                marginRight: i % 3 === 0 ? "8%" : i % 3 === 1 ? "0" : "12%",
              }}
            >
              <div className="py-8 md:py-10 border-b border-border/15 flex items-center justify-between gap-6 group-hover:border-primary/20 transition-colors duration-500">
                {/* Left side */}
                <div className="flex items-center gap-4 md:gap-6 flex-1 min-w-0">
                  <span className="font-grotesk text-xs text-muted-foreground/20 group-hover:text-primary/40 transition-colors">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="w-0 group-hover:w-8 h-px bg-primary/30 transition-all duration-500" />
                  <h2 className="font-cinzel text-xl md:text-3xl lg:text-4xl font-bold group-hover:text-primary transition-colors duration-500 chromatic-text truncate">
                    {project.title}
                  </h2>
                </div>

                {/* Right side */}
                <div className="flex items-center gap-4 shrink-0">
                  <p className="font-cormorant text-sm md:text-base text-muted-foreground/50 italic group-hover:text-muted-foreground/80 transition-colors">
                    {project.role}
                  </p>
                  <motion.div
                    className={`w-2 h-2 rounded-full ${project.accent} opacity-0 group-hover:opacity-60`}
                    style={{ backgroundColor: "currentColor" }}
                    whileHover={{ scale: 2 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>

              {/* Hover reveal decoration */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <DottedCircle size={50} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom decoration */}
        <motion.div
          className="flex items-center justify-center gap-3 mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-border/20" />
          <span className="font-grotesk text-[9px] tracking-[0.4em] text-muted-foreground/20 uppercase">fin</span>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-border/20" />
        </motion.div>
      </section>
    </PageTransition>
  );
};

export default Theatre;
