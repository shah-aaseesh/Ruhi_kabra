import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useRef } from "react";
import PageTransition from "@/components/PageTransition";
import { MandalaPattern, PaisleyPattern, FloatingDecoElement, DottedCircle, ScatteredDots, DiagonalLine, ParallaxLayer, DistortedText, CreativeMandala, ImagePattern } from "@/components/DecorativeElements";
import { X } from "lucide-react";
import { useFilmProjects } from "@/hooks/useSanityData";
import { urlFor } from "@/lib/sanity";

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

const Film = () => {
  const { data: projects, isLoading } = useFilmProjects();
  const [lightbox, setLightbox] = useState<{ type: 'youtube' | 'local' | 'drive', src: string } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Helper to extract YouTube video ID from URL
  const getYoutubeId = (url: string) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url?.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

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
                className="overflow-hidden my-6 border-y border-border/15 py-2 w-[100vw] relative left-1/2 -translate-x-1/2"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <div className="animate-marquee whitespace-nowrap">
                  <span className="font-cormorant text-xs text-muted-foreground/60 tracking-[0.3em] italic">
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
          {isLoading && <div className="text-center w-full py-12 text-primary font-cinzel">Loading films...</div>}
          {projects?.map((project: any, i: number) => {
            const embedId = getYoutubeId(project.youtubeLink);
            const offsets = [0, 12, 5, 15, 3, 10, 7, 14, 2, 8, 4];
            const rotations = [-0.5, 0.3, -0.8, 0.5, -0.3, 0.7, -0.4, 0.6, -0.2, 0.4, -0.6];
            const overlayGradients = [
              "from-primary/40 to-transparent",
              "from-secondary/40 to-transparent",
              "from-accent/40 to-transparent",
              "from-burnt-orange/40 to-transparent",
              "from-maroon/40 to-transparent",
            ];
            const borderColors = [
              "border-primary/50 group-hover/vid:border-primary group-hover/vid:shadow-[0_0_30px_rgba(255,215,0,0.3)]",
              "border-secondary/50 group-hover/vid:border-secondary group-hover/vid:shadow-[0_0_30px_rgba(220,20,60,0.3)]",
              "border-accent/50 group-hover/vid:border-accent group-hover/vid:shadow-[0_0_30px_rgba(0,128,128,0.3)]",
              "border-burnt-orange/50 group-hover/vid:border-burnt-orange group-hover/vid:shadow-[0_0_30px_rgba(255,140,0,0.3)]",
              "border-maroon/50 group-hover/vid:border-maroon group-hover/vid:shadow-[0_0_30px_rgba(128,0,0,0.3)]",
            ];
            const overlayGrad = overlayGradients[i % overlayGradients.length];
            const borderCol = borderColors[i % borderColors.length];

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

                <div className={`grid gap-6 md:gap-10 ${embedId || project.image ? "md:grid-cols-[1fr_1.4fr]" : ""} items-start`}
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
                  {(embedId || project.image) && (
                    <div
                      style={{ direction: "ltr" }}
                      className={`relative aspect-video bg-muted/10 border-2 ${borderCol} overflow-hidden cursor-pointer group/vid warp-slight transition-all duration-500 rounded-sm`}
                      onClick={() => embedId && setLightbox({ type: 'youtube', src: embedId })}
                    >
                      {embedId ? (
                        <img
                          src={`https://img.youtube.com/vi/${embedId}/hqdefault.jpg`}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-90 group-hover/vid:opacity-100 group-hover/vid:scale-105 saturate-[1.1] group-hover/vid:saturate-[1.3] transition-all duration-700"
                          loading="lazy"
                        />
                      ) : project.image ? (
                        <img
                          src={urlFor(project.image).width(800).url()}
                          alt={project.title}
                          className="w-full h-full object-cover opacity-90 group-hover/vid:opacity-100 group-hover/vid:scale-105 saturate-[1.1] group-hover/vid:saturate-[1.3] transition-all duration-700"
                          loading="lazy"
                        />
                      ) : (
                        <div className="w-full h-full bg-black/40 flex items-center justify-center opacity-90 group-hover/vid:opacity-100 transition-all duration-700">
                          <span className="font-cinzel text-muted-foreground text-xl">Play Video</span>
                        </div>
                      )}
                      
                      <div className={`absolute inset-0 bg-gradient-to-tr ${overlayGrad} mix-blend-multiply opacity-70 group-hover/vid:opacity-20 transition-opacity duration-500`} />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="w-16 h-16 rounded-full border-2 border-primary/60 flex items-center justify-center backdrop-blur-md bg-background/40 group-hover/vid:bg-primary/20 group-hover/vid:scale-110 group-hover/vid:border-primary transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
                          whileHover={{ scale: 1.2 }}
                        >
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent border-l-[14px] border-l-primary ml-1" />
                        </motion.div>
                      </div>
                      {/* Decorative corner */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 opacity-0 group-hover/vid:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/40 opacity-0 group-hover/vid:opacity-100 transition-opacity" />
                    </div>
                  )}

                  {/* No embed placeholder */}
                  {!embedId && !project.image && (
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
