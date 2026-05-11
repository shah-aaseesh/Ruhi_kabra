import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PortableText } from '@portabletext/react';
import PageTransition from "@/components/PageTransition";
import { useWritingBySlug } from "@/hooks/useSanityData";
import { ScatteredDots, DiagonalLine, RangoliCorner, DistortedText } from "@/components/DecorativeElements";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, isLoading } = useWritingBySlug(slug || '');

  if (isLoading) {
    return (
      <PageTransition>
        <div className="min-h-screen flex items-center justify-center font-cinzel text-2xl text-primary animate-pulse">
          Loading...
        </div>
      </PageTransition>
    );
  }

  if (!post) {
    return (
      <PageTransition>
        <div className="min-h-screen flex flex-col items-center justify-center font-cinzel gap-4">
          <h1 className="text-4xl text-primary">Post Not Found</h1>
          <Link to="/writing" className="text-muted-foreground hover:text-primary transition-colors uppercase tracking-[0.2em] text-xs">← Back to Writing</Link>
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <section className="relative pt-32 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden min-h-screen">
        <RangoliCorner className="absolute top-0 right-0 text-primary opacity-30" flip />
        <ScatteredDots count={15} />
        <DiagonalLine className="top-40 right-[10%] opacity-20" />

        <div className="max-w-3xl mx-auto relative z-10">
          <Link to="/writing" className="inline-block mb-12 font-grotesk text-[10px] tracking-[0.3em] uppercase text-muted-foreground/50 hover:text-primary transition-colors">
            ← Back
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="font-grotesk text-[10px] text-primary/60 tracking-[0.4em] uppercase block mb-4">
              {post.category || "essay"}
            </span>
            <h1 className="font-cinzel text-4xl md:text-6xl font-black text-foreground mb-8 chromatic-text">
              <DistortedText>{post.title}</DistortedText>
            </h1>
            
            <div className="flex items-center gap-4 mb-16">
              <div className="w-12 h-px bg-primary/30" />
              <div className="w-1.5 h-1.5 rotate-45 border border-primary/30" />
            </div>

            <div className="prose prose-invert prose-lg prose-p:font-cormorant prose-p:text-xl prose-p:leading-relaxed prose-p:text-muted-foreground/80 prose-headings:font-cinzel prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
              <PortableText value={post.content} />
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default BlogPost;
