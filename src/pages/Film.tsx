import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, PaisleyPattern, FloatingDecoElement, DottedCircle, ScatteredDots, DiagonalLine, ParallaxLayer, DistortedText } from "@/components/DecorativeElements";
import { X } from "lucide-react";

interface FilmProject {
  title: string;
  type: string;
  role: string;
  embedId?: string;
  episodes?: { label: string; embedId: string }[];
}

const projects: FilmProject[] = [
  { title: "BAI", type: "Documentary", role: "Everything", embedId: "oL0FqRAROhI" },
  { title: "The Man", type: "Short Film", role: "Co-writer, Director, Cinematographer, Editor", embedId: "nGxT_3MgVtQ" },
  { title: "Off Script", type: "Short Film", role: "Assistant Director, Set Design, Costume Design, Acting", embedId: "gHdfvhWNcuw" },
  { title: "A Couple of Shots", type: "Short Film", role: "Co-writer, Co-Director, Cinematographer", embedId: "cS9ASIz5lpo" },
  { title: "Stained", type: "Short Film", role: "Writer, Director, Editor", embedId: "7yZwzrxPEjU" },
  { title: "Key Decisions", type: "Short Film", role: "Cinematographer", embedId: "dFvZc0RBkf0" },
  { title: "In the Event of a Fire", type: "Short Film", role: "Gaffer", embedId: "9-PUWkRDdUk" },
  { title: "Sugar Baby", type: "Short Film", role: "Assistant Director", embedId: "fHbwrAiPx7o" },
  {
    title: "Have You Seen Tara",
    type: "Episodic Series",
    role: "Actor (Tara) – Ongoing",
    episodes: [
      { label: "Episode 1", embedId: "8p_C5RbQIQk" },
      { label: "Episode 2", embedId: "QQ1kXbUlx6Q" },
    ],
  },
  { title: "Doctrine", type: "Student Feature Film", role: "Actor – Ongoing" },
];

const Film = () => {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <PageTransition>
      {/* Header with decorations */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        <FloatingDecoElement x={80} y={10} delay={0}>
          <MandalaPattern size={250} className="text-primary animate-slow-spin" opacity={0.03} />
        </FloatingDecoElement>
        <DiagonalLine className="top-10 right-[20%]" />
        <ScatteredDots count={20} />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative z-10"
        >
          <div className="flex items-start gap-8">
            <div className="flex-1">
              <motion.h1
                className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-black chromatic-text"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <DistortedText>Film</DistortedText>
              </motion.h1>

              {/* Marquee divider */}
              <motion.div
                className="overflow-hidden my-6 border-y border-border/15 py-2 max-w-md"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="animate-marquee whitespace-nowrap">
                  <span className="font-cormorant text-xs text-muted-foreground/30 tracking-[0.3em] italic">
                    {"DOCUMENTARY • SHORT FILM • EPISODIC • FEATURE • ".repeat(4)}
                  </span>
                </div>
              </motion.div>

              <motion.div
                className="font-grotesk text-xs text-muted-foreground/60 space-y-1.5 tracking-wide"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <p className="text-foreground/70 font-medium">Ruhi Kabra</p>
                <p>Sonipat, Haryana & Pune, Maharashtra, IN</p>
                <p>+91 7757069920</p>
                <a href="mailto:ruhi.kabra_ug25@ashoka.edu.in" className="hover:text-primary transition-colors story-link">
                  ruhi.kabra_ug25@ashoka.edu.in
                </a>
              </motion.div>
            </div>

            {/* Vertical decorative element */}
            <motion.div
              className="hidden md:flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.3 }}
              transition={{ delay: 1 }}
            >
              <div className="w-px h-24 bg-gradient-to-b from-transparent to-primary/30" />
              <div className="w-2 h-2 rotate-45 border border-primary/30" />
              <div className="w-px h-12 bg-primary/20" />
              <div className="w-1 h-1 rounded-full bg-primary/30" />
              <div className="w-px h-32 bg-gradient-to-b from-primary/20 to-transparent" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid - More asymmetric & decorated */}
      <section ref={containerRef} className="px-6 md:px-12 pb-24 relative">
        <ParallaxLayer speed={0.15} className="absolute inset-0 pointer-events-none">
          <PaisleyPattern className="absolute right-[5%] top-[15%] text-secondary rotate-12" opacity={0.03} />
          <PaisleyPattern className="absolute left-[3%] top-[45%] text-burnt-orange -rotate-30" opacity={0.025} />
          <MandalaPattern size={180} className="absolute left-[50%] top-[70%] text-accent" opacity={0.015} />
        </ParallaxLayer>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => {
            const offsets = [0, 12, 5, 15, 3, 10, 7, 14, 2, 8];
            const rotations = [-0.5, 0.3, -0.8, 0.5, -0.3, 0.7, -0.4, 0.6, -0.2, 0.4];

            return (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 60, rotate: rotations[i] * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotations[i] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
                style={{
                  marginLeft: `${offsets[i]}%`,
                  marginRight: `${offsets[(i + 5) % 10] / 2}%`,
                }}
              >
                {/* Decorative number bg */}
                <motion.span
                  className="absolute -top-8 -left-4 font-cinzel text-8xl md:text-[10rem] font-black text-foreground/[0.02] select-none pointer-events-none leading-none"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  {String(i + 1).padStart(2, "0")}
                </motion.span>

                <div className={`grid gap-6 md:gap-10 ${project.embedId || project.episodes ? "md:grid-cols-[1fr_1.4fr]" : ""} items-start`}
                  style={{ direction: i % 2 === 0 ? "ltr" : "rtl" }}
                >
                  {/* Info */}
                  <div style={{ direction: "ltr" }} className="space-y-3 relative z-10">
                    <div className="flex items-baseline gap-3">
                      <span className="font-grotesk text-xs text-primary/30">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div className="w-8 h-px bg-border/30 group-hover:w-16 group-hover:bg-primary/30 transition-all duration-500" />
                    </div>
                    <h2 className="font-cinzel text-2xl md:text-4xl font-bold group-hover:text-primary transition-colors duration-300 chromatic-text">
                      {project.title}
                    </h2>
                    <p className="font-grotesk text-[10px] tracking-[0.2em] text-primary/50 uppercase">{project.type}</p>
                    <p className="font-cormorant text-base text-muted-foreground/70 italic leading-relaxed">{project.role}</p>
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-12 h-px bg-border/20 group-hover:w-20 group-hover:bg-primary/30 transition-all duration-700" />
                      <div className="w-1 h-1 rounded-full bg-border/30 group-hover:bg-primary/40 transition-colors" />
                    </div>
                  </div>

                  {/* Video embed */}
                  {project.embedId && (
                    <div
                      style={{ direction: "ltr" }}
                      className="relative aspect-video bg-muted/10 border border-border/20 overflow-hidden cursor-pointer group/vid warp-slight"
                      onClick={() => setLightbox(project.embedId!)}
                    >
                      <img
                        src={`https://img.youtube.com/vi/${project.embedId}/hqdefault.jpg`}
                        alt={project.title}
                        className="w-full h-full object-cover opacity-60 group-hover/vid:opacity-85 group-hover/vid:scale-110 transition-all duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-accent/10 opacity-0 group-hover/vid:opacity-100 transition-opacity duration-500 mix-blend-overlay" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-14 h-14 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-sm bg-background/20 group-hover/vid:border-primary/60 group-hover/vid:scale-110 transition-all duration-300"
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-0 h-0 border-t-[7px] border-t-transparent border-b-[7px] border-b-transparent border-l-[12px] border-l-foreground/70 ml-1" />
                        </motion.div>
                      </div>
                      {/* Decorative corner */}
                      <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/20 opacity-0 group-hover/vid:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/20 opacity-0 group-hover/vid:opacity-100 transition-opacity" />
                    </div>
                  )}

                  {/* Episodes */}
                  {project.episodes && (
                    <div style={{ direction: "ltr" }} className="space-y-4">
                      {project.episodes.map((ep) => (
                        <div
                          key={ep.embedId}
                          className="relative aspect-video bg-muted/10 border border-border/20 overflow-hidden cursor-pointer group/ep warp-slight"
                          onClick={() => setLightbox(ep.embedId)}
                        >
                          <img
                            src={`https://img.youtube.com/vi/${ep.embedId}/hqdefault.jpg`}
                            alt={ep.label}
                            className="w-full h-full object-cover opacity-60 group-hover/ep:opacity-85 group-hover/ep:scale-110 transition-all duration-700"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                          <div className="absolute bottom-3 left-3 font-grotesk text-xs tracking-wider">{ep.label}</div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-11 h-11 rounded-full border border-foreground/20 flex items-center justify-center backdrop-blur-sm bg-background/20">
                              <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[9px] border-l-foreground/70 ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No embed placeholder */}
                  {!project.embedId && !project.episodes && (
                    <div style={{ direction: "ltr" }} className="relative aspect-video bg-muted/5 border border-border/15 border-dashed flex items-center justify-center noise-texture overflow-hidden">
                      <span className="font-grotesk text-xs text-muted-foreground/25 tracking-[0.3em] uppercase relative z-10">Coming Soon</span>
                      <DottedCircle size={100} className="absolute text-muted-foreground" />
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background/97 backdrop-blur-md flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setLightbox(null)}
        >
          <motion.button
            className="absolute top-6 right-6 text-foreground/50 hover:text-foreground transition-colors"
            onClick={() => setLightbox(null)}
            whileHover={{ rotate: 90, scale: 1.1 }}
          >
            <X size={28} />
          </motion.button>
          <motion.div
            className="w-full max-w-5xl aspect-video border border-border/30"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              src={`https://www.youtube.com/embed/${lightbox}?autoplay=1`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video player"
            />
          </motion.div>
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Film;
