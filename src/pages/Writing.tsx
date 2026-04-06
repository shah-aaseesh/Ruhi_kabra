import { motion } from "framer-motion";
import PageTransition from "@/components/PageTransition";
import { ExternalLink } from "lucide-react";

const articles = [
  { title: "A Third Space", excerpt: "On the liminal spaces between identities, cultures, and art forms." },
  { title: "Doorway", excerpt: "What stands at the threshold of memory and forgetting." },
  { title: "My Name", excerpt: "An exploration of names, naming, and the weight they carry." },
];

const Writing = () => {
  return (
    <PageTransition>
      <section className="pt-24 pb-12 px-6 md:px-12 lg:px-24">
        <motion.h1
          className="font-cinzel text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Writing
        </motion.h1>
        <motion.div
          className="flex items-center gap-2 mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://substack.com/@ruhigh"
            target="_blank"
            rel="noopener noreferrer"
            className="font-grotesk text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1.5 story-link"
          >
            Substack <ExternalLink size={12} />
          </a>
        </motion.div>
      </section>

      {/* Articles */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-2xl space-y-16">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              className="group breathe"
              style={{ animationDelay: `${i * 0.5}s` }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="relative pl-6 border-l border-border/30 group-hover:border-primary/40 transition-colors duration-500">
                <span className="font-grotesk text-[10px] text-muted-foreground/40 tracking-[0.3em] uppercase block mb-2">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="font-cinzel text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors duration-500 mb-3">
                  {article.title}
                </h2>
                <p className="font-cormorant text-base md:text-lg text-muted-foreground italic leading-relaxed">
                  {article.excerpt}
                </p>
                <div className="mt-4 w-0 group-hover:w-16 h-px bg-primary/40 transition-all duration-700" />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Paper texture background element */}
        <div className="fixed top-0 right-0 w-1/3 h-full bg-gradient-to-l from-card/20 to-transparent pointer-events-none z-0" />
      </section>
    </PageTransition>
  );
};

export default Writing;
