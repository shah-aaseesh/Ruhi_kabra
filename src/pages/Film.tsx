import { motion } from "framer-motion";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
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

  return (
    <PageTransition>
      {/* Header */}
      <section className="pt-24 pb-12 px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold mb-4">Film</h1>
          <div className="font-grotesk text-xs text-muted-foreground space-y-1 tracking-wide">
            <p>Ruhi Kabra</p>
            <p>Sonipat, Haryana & Pune, Maharashtra, IN</p>
            <p>+91 7757069920</p>
            <a href="mailto:ruhi.kabra_ug25@ashoka.edu.in" className="hover:text-primary transition-colors story-link">
              ruhi.kabra_ug25@ashoka.edu.in
            </a>
          </div>
        </motion.div>
      </section>

      {/* Projects Grid - Asymmetrical */}
      <section className="px-6 md:px-12 pb-24">
        <div className="space-y-16">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ marginLeft: i % 3 === 1 ? "8%" : i % 3 === 2 ? "4%" : "0" }}
            >
              <div className={`grid gap-6 ${project.embedId || project.episodes ? "md:grid-cols-[1fr_1.2fr]" : ""} items-start`}
                style={{ direction: i % 2 === 0 ? "ltr" : "rtl" }}
              >
                {/* Info */}
                <div style={{ direction: "ltr" }} className="space-y-3">
                  <div className="flex items-baseline gap-3">
                    <span className="font-grotesk text-xs text-muted-foreground/50">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h2 className="font-cinzel text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h2>
                  </div>
                  <p className="font-grotesk text-xs tracking-[0.15em] text-primary/70 uppercase">{project.type}</p>
                  <p className="font-cormorant text-base text-muted-foreground italic">{project.role}</p>
                  <div className="w-12 h-px bg-border group-hover:w-24 group-hover:bg-primary/40 transition-all duration-500" />
                </div>

                {/* Video embed */}
                {project.embedId && (
                  <div
                    style={{ direction: "ltr" }}
                    className="relative aspect-video bg-muted/20 border border-border/30 overflow-hidden cursor-pointer glitch-hover"
                    onClick={() => setLightbox(project.embedId!)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${project.embedId}/hqdefault.jpg`}
                      alt={project.title}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 rounded-full border border-foreground/30 flex items-center justify-center group-hover:border-primary group-hover:scale-110 transition-all">
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-foreground/70 ml-1" />
                      </div>
                    </div>
                  </div>
                )}

                {/* Episodes */}
                {project.episodes && (
                  <div style={{ direction: "ltr" }} className="space-y-3">
                    {project.episodes.map((ep) => (
                      <div
                        key={ep.embedId}
                        className="relative aspect-video bg-muted/20 border border-border/30 overflow-hidden cursor-pointer glitch-hover"
                        onClick={() => setLightbox(ep.embedId)}
                      >
                        <img
                          src={`https://img.youtube.com/vi/${ep.embedId}/hqdefault.jpg`}
                          alt={ep.label}
                          className="w-full h-full object-cover opacity-70 hover:opacity-90 hover:scale-105 transition-all duration-500"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                        <div className="absolute bottom-3 left-3 font-grotesk text-xs tracking-wider">{ep.label}</div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full border border-foreground/30 flex items-center justify-center">
                            <div className="w-0 h-0 border-t-[5px] border-t-transparent border-b-[5px] border-b-transparent border-l-[8px] border-l-foreground/70 ml-0.5" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* No embed placeholder */}
                {!project.embedId && !project.episodes && (
                  <div style={{ direction: "ltr" }} className="aspect-video bg-muted/10 border border-border/20 flex items-center justify-center">
                    <span className="font-grotesk text-xs text-muted-foreground/40 tracking-wider uppercase">Coming Soon</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/70 hover:text-foreground transition-colors"
            onClick={() => setLightbox(null)}
          >
            <X size={28} />
          </button>
          <div className="w-full max-w-4xl aspect-video" onClick={(e) => e.stopPropagation()}>
            <iframe
              src={`https://www.youtube.com/embed/${lightbox}?autoplay=1`}
              className="w-full h-full border-0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Video player"
            />
          </div>
        </motion.div>
      )}
    </PageTransition>
  );
};

export default Film;
