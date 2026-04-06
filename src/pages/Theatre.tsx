import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import PageTransition from "@/components/PageTransition";

const theatreProjects = [
  { title: "Embers", role: "Director" },
  { title: "Kumbh ka Mela", role: "Set Designer" },
  { title: "Devdas", role: "Set Designer" },
  { title: "Bombay Dying", role: "Set Designer" },
  { title: "Atyachaar", role: "Acting" },
  { title: "Two Lives", role: "Set Designer" },
  { title: "Maiyya", role: "Set Designer" },
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

      {/* Curtain Effect */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-maroon/10 origin-left z-20"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-maroon/10 origin-right z-20"
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ delay: 0.3, duration: 1.2, ease: "easeInOut" }}
        />

        <motion.h1
          className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold tracking-[0.1em] relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          Theatre
        </motion.h1>
        <motion.div
          className="w-24 h-px bg-primary/40 mt-6 relative z-10"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        />
      </section>

      {/* Projects */}
      <section className="px-6 md:px-12 lg:px-24 pb-32 -mt-32 relative z-10">
        <div className="max-w-3xl mx-auto space-y-0">
          {theatreProjects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group py-8 border-b border-border/20 flex items-baseline justify-between gap-4"
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-baseline gap-4">
                <span className="font-grotesk text-xs text-muted-foreground/40">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-cinzel text-xl md:text-3xl font-semibold group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h2>
              </div>
              <p className="font-cormorant text-sm md:text-base text-muted-foreground italic whitespace-nowrap">
                {project.role}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
};

export default Theatre;
