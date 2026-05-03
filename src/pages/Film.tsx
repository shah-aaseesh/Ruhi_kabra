import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, PaisleyPattern, FloatingDecoElement, DottedCircle, ScatteredDots, DiagonalLine, ParallaxLayer, DistortedText, CreativeMandala, ImagePattern } from "@/components/DecorativeElements";
import { X } from "lucide-react";

interface FilmProject {
  title: string;
  type: string;
  role: string;
  description?: string;
  embedId?: string;
  localVideo?: string;
  driveVideo?: string;
  thumbnail?: string;
  links?: { label: string; url: string }[];
  episodes?: { label: string; embedId?: string; }[];
}

const projects: FilmProject[] = [
  {
    title: "Hanco Tools",
    type: "Short Film",
    role: "Co-writer, Co-director, Production manager, set, and costume.",
    description: "A 10 minute short film that follows 2 workers around a factory after one witnesses a murder. A 1 week project made for fun with friends to do what we love to do. Create and make art. Tried a new genre involving fake blood and gore!",
    driveVideo: "https://drive.google.com/file/d/1BOSh1OC4oC6kwQI0FAr74YOO_twORV6L/preview",
    thumbnail: "/bg/Hanco.jpg",
    links: [{ label: "Instagram", url: "https://www.instagram.com/hancotools.tm" }]
  },
  { 
    title: "BAI", 
    type: "Documentary", 
    role: "Everything.", 
    description: "A 15 minute documentary on my great grandmother, Bai. Made for a documentary making course over a month.",
    embedId: "W2YftDU3pss" 
  },
  { 
    title: "The Man", 
    type: "Short Film", 
    role: "Co-writer, Director, Cinematographer, and Editor.", 
    description: "A 7 minute satire piece on the men around me, which proves a point in a fun way. This was made for a audio-visual production course over the span of a week.",
    embedId: "C2vBNhXg0Ug" 
  },
  { 
    title: "Off Script", 
    type: "Award Winning Short Film", 
    role: "Assistant Director, Set Design, Costume Design, and Acting", 
    description: "This is a 30 minute short film that has done well in festival runs made in college, by students over 2 months.",
    embedId: "f6FHM7UZY0Y",
    links: [{ label: "Instagram", url: "https://www.instagram.com/offscript.movie" }]
  },
  { 
    title: "A Couple of Shots", 
    type: "Short Film", 
    role: "Co-writer, Co-Director, Cinematographer.", 
    description: "It is a 7 minute short film about female friends and the point is there is no point. It was my first short and I learned everything on set.",
    embedId: "zqZqfEDgX-0" 
  },
  { 
    title: "Stained", 
    type: "Short Film", 
    role: "Writer, Director, and Editor.", 
    description: "A 5 minute short film made in Prague Film School as a part of their summer workshops. It follows a messed up family and involved children! I loved being on this set!",
    embedId: "5ML3KR0G3RU" 
  },
  { 
    title: "Key Decisions", 
    type: "Short Film", 
    role: "Cinematographer", 
    embedId: "cXJdsOJLwv0" 
  },
  { 
    title: "In the Event of a Fire", 
    type: "Short Film", 
    role: "Gaffer", 
    embedId: "K2Vxvhi_Lus" 
  },
  { 
    title: "Sugar Baby", 
    type: "Short Film", 
    role: "Assistant Director", 
    embedId: "YGx2e91T33o" 
  },
  {
    title: "Have You Seen Tara",
    type: "Episodic Series",
    role: "Actor (Tara): ONGOING",
    links: [
      { label: "YouTube", url: "https://www.youtube.com/@haveyouseentara" },
      { label: "Instagram", url: "https://l.instagram.com/?u=http%3A%2F%2Fyoutube.com%2F%40haveyouseentara%3Ffbclid%3DPAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnT0-t1D0tSuH62a6NxyECeGwpBwKFBW-PG1vlhK3RRDsnrPbdIH2IUKTfhZQ_aem_oFmX6SQGB8eedWU92I0NVg&e=AT4jd6RE-6MDgMjrTmBXtjeKQyEDEnYq6yIqu7y7JWtBD4oHUBT_nCwmZZHUHYuoJ1e_WP6rpQmNwBaRJhi1E7Fmwp7AzXpPgXNFewTWwQ" }
    ],
    episodes: [
      { label: "Episode 1", embedId: "BmpywBtQ_To" },
      { label: "Episode 2", embedId: "CYnqyyutfo4" },
    ],
  },
  { 
    title: "Doctrine", 
    type: "Student Feature Film", 
    role: "Actor: ONGOING" 
  },
];

const Film = () => {
  const [lightbox, setLightbox] = useState<{ type: 'youtube' | 'local' | 'drive', src: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <PageTransition>
      {/* Header with decorations */}
      <section className="relative pt-24 pb-16 px-6 md:px-12 overflow-hidden">
        <FloatingDecoElement x={80} y={10} delay={0}>
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={400} opacity={0.15} className="-rotate-12" />
        </FloatingDecoElement>
        <FloatingDecoElement x={10} y={40} delay={2}>
          <ImagePattern src="/bg/Head-removebg-preview.png" size={350} opacity={0.1} className="rotate-6" />
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
          <ImagePattern src="/bg/Head-removebg-preview.png" size={450} opacity={0.1} className="absolute right-[5%] top-[15%] rotate-12" />
          <CreativeMandala size={250} className="absolute left-[3%] top-[45%] text-burnt-orange -rotate-30 opacity-40" />
          <ImagePattern src="/bg/Octopus-removebg-preview.png" size={500} opacity={0.08} className="absolute left-[50%] top-[70%] -translate-x-1/2" />
        </ParallaxLayer>

        <div className="space-y-20 md:space-y-28">
          {projects.map((project, i) => {
            const offsets = [0, 12, 5, 15, 3, 10, 7, 14, 2, 8, 4];
            const rotations = [-0.5, 0.3, -0.8, 0.5, -0.3, 0.7, -0.4, 0.6, -0.2, 0.4, -0.6];

            return (
              <motion.div
                key={project.title}
                className="group relative"
                initial={{ opacity: 0, y: 60, rotate: rotations[i % rotations.length] * 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: rotations[i % rotations.length] }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, margin: "-80px" }}
                style={{
                  marginLeft: `${offsets[i % offsets.length]}%`,
                  marginRight: `${offsets[(i + 5) % offsets.length] / 2}%`,
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

                <div className={`grid gap-6 md:gap-10 ${project.embedId || project.localVideo || project.driveVideo || project.episodes ? "md:grid-cols-[1fr_1.4fr]" : ""} items-start`}
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
                    
                    {project.description && (
                      <p className="font-cormorant text-base text-foreground/85 leading-relaxed mt-4">{project.description}</p>
                    )}
                    
                    {project.links && project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3 pt-3">
                        {project.links.map(link => (
                          <a key={link.label} href={link.url} target="_blank" rel="noopener noreferrer" className="font-grotesk text-[10px] tracking-[0.2em] uppercase text-primary/70 hover:text-primary transition-colors border border-primary/20 hover:border-primary/50 px-3 py-1.5 rounded-sm backdrop-blur-sm">
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex items-center gap-2 pt-2">
                      <div className="w-12 h-px bg-border/20 group-hover:w-20 group-hover:bg-primary/30 transition-all duration-700" />
                      <div className="w-1 h-1 rounded-full bg-border/30 group-hover:bg-primary/40 transition-colors" />
                    </div>
                  </div>

                  {/* Video embed */}
                  {(project.embedId || project.localVideo || project.driveVideo) && (
                    <div
                      style={{ direction: "ltr" }}
                      className="relative aspect-video bg-muted/10 border border-border/20 overflow-hidden cursor-pointer group/vid warp-slight"
                      onClick={() => setLightbox(project.embedId ? { type: 'youtube', src: project.embedId } : project.driveVideo ? { type: 'drive', src: project.driveVideo } : { type: 'local', src: project.localVideo! })}
                    >
                      {project.embedId ? (
                        <img
                          src={`https://img.youtube.com/vi/${project.embedId}/hqdefault.jpg`}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-60 group-hover/vid:opacity-85 group-hover/vid:scale-110 transition-all duration-700"
                          loading="lazy"
                        />
                      ) : project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-60 group-hover/vid:opacity-85 group-hover/vid:scale-110 transition-all duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-black/40 flex items-center justify-center opacity-60 group-hover/vid:opacity-85 transition-all duration-700">
                          <span className="font-cinzel text-muted-foreground text-xl">Play Video</span>
                        </div>
                      )}
                      
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
                    <div style={{ direction: "ltr" }} className="grid grid-cols-2 gap-3 sm:gap-4">
                      {project.episodes.map((ep) => (
                        <div
                          key={ep.label}
                          className={`relative aspect-video bg-muted/10 border border-border/20 overflow-hidden ${ep.embedId ? 'cursor-pointer group/ep warp-slight' : 'border-dashed opacity-50 flex items-center justify-center'}`}
                          onClick={() => ep.embedId && setLightbox({ type: 'youtube', src: ep.embedId })}
                        >
                          {ep.embedId ? (
                            <>
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
                            </>
                          ) : (
                            <span className="font-grotesk text-xs text-muted-foreground/50 tracking-[0.2em] uppercase">{ep.label} - Coming Soon</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {/* No embed placeholder */}
                  {!project.embedId && !project.localVideo && !project.driveVideo && !project.episodes && (
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
            className="w-full max-w-5xl aspect-video border border-border/30 bg-black"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            onClick={(e) => e.stopPropagation()}
          >
            {lightbox.type === 'youtube' ? (
              <iframe
                src={`https://www.youtube.com/embed/${lightbox.src}?autoplay=1`}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Video player"
              />
            ) : lightbox.type === 'drive' ? (
              <iframe
                src={lightbox.src}
                className="w-full h-full border-0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Google Drive Video player"
              />
            ) : (
              <video 
                src={lightbox.src}
                className="w-full h-full border-0"
                controls
                autoPlay
              />
            )}
          </motion.div>
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Film;
