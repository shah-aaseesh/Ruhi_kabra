import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/* Reusable Indian-maximalist decorative elements */

export const MandalaPattern = ({ className = "", size = 200, opacity = 0.04 }: { className?: string; size?: number; opacity?: number }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 200 200" fill="none" style={{ opacity }}>
    <circle cx="100" cy="100" r="95" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="75" stroke="currentColor" strokeWidth="0.3" />
    <circle cx="100" cy="100" r="55" stroke="currentColor" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="35" stroke="currentColor" strokeWidth="0.3" />
    {Array.from({ length: 12 }).map((_, i) => (
      <line key={i} x1="100" y1="5" x2="100" y2="195" stroke="currentColor" strokeWidth="0.3"
        transform={`rotate(${i * 15} 100 100)`} />
    ))}
    {Array.from({ length: 8 }).map((_, i) => (
      <path key={`p-${i}`} d={`M100,100 L${100 + 90 * Math.cos((i * Math.PI) / 4)},${100 + 90 * Math.sin((i * Math.PI) / 4)}`}
        stroke="currentColor" strokeWidth="0.5" />
    ))}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 16;
      const r = 65;
      return <circle key={`d-${i}`} cx={100 + r * Math.cos(angle)} cy={100 + r * Math.sin(angle)} r="3" stroke="currentColor" strokeWidth="0.4" fill="none" />;
    })}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * Math.PI * 2) / 8;
      return (
        <path key={`leaf-${i}`}
          d={`M100,100 Q${100 + 40 * Math.cos(angle - 0.3)},${100 + 40 * Math.sin(angle - 0.3)} ${100 + 80 * Math.cos(angle)},${100 + 80 * Math.sin(angle)} Q${100 + 40 * Math.cos(angle + 0.3)},${100 + 40 * Math.sin(angle + 0.3)} 100,100`}
          stroke="currentColor" strokeWidth="0.3" fill="none" />
      );
    })}
  </svg>
);

export const PaisleyPattern = ({ className = "", opacity = 0.03 }: { className?: string; opacity?: number }) => (
  <svg className={className} width="120" height="180" viewBox="0 0 120 180" fill="none" style={{ opacity }}>
    <path d="M60,10 Q100,40 90,100 Q80,160 40,170 Q10,160 20,100 Q30,60 60,10Z" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M60,30 Q85,50 80,95 Q72,145 45,155 Q25,145 32,95 Q40,60 60,30Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <circle cx="55" cy="90" r="8" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <circle cx="55" cy="90" r="3" fill="currentColor" fillOpacity="0.3" />
  </svg>
);

export const RangoliCorner = ({ className = "", flip = false }: { className?: string; flip?: boolean }) => (
  <svg className={className} width="150" height="150" viewBox="0 0 150 150" fill="none"
    style={{ transform: flip ? "scaleX(-1)" : undefined, opacity: 0.06 }}>
    <path d="M0,0 Q75,20 150,0" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M0,0 Q20,75 0,150" stroke="currentColor" strokeWidth="0.8" fill="none" />
    <path d="M0,0 C40,40 40,40 80,0" stroke="currentColor" strokeWidth="0.5" fill="none" />
    <path d="M0,0 C40,40 40,40 0,80" stroke="currentColor" strokeWidth="0.5" fill="none" />
    {Array.from({ length: 5 }).map((_, i) => (
      <circle key={i} cx={20 + i * 10} cy={20 + i * 10} r={3 + i} stroke="currentColor" strokeWidth="0.4" fill="none" />
    ))}
    <path d="M10,10 L60,10 L60,60 L10,60 Z" stroke="currentColor" strokeWidth="0.3" fill="none" transform="rotate(45 35 35)" />
  </svg>
);

export const FloatingDecoElement = ({ delay = 0, x = 0, y = 0, children }: { delay?: number; x?: number; y?: number; children: React.ReactNode }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{ left: `${x}%`, top: `${y}%` }}
    animate={{
      y: [0, -15, 5, -10, 0],
      rotate: [0, 2, -1, 1.5, 0],
      opacity: [0.3, 0.6, 0.4, 0.7, 0.3],
    }}
    transition={{
      duration: 8 + delay,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  >
    {children}
  </motion.div>
);

export const DistortedText = ({ children, className = "" }: { children: string; className?: string }) => (
  <span className={`relative inline-block group ${className}`}>
    <span className="relative z-10">{children}</span>
    <span className="absolute inset-0 text-secondary/30 blur-[1px] translate-x-[2px] -translate-y-[1px] z-0 group-hover:translate-x-[4px] group-hover:-translate-y-[2px] transition-transform duration-300">
      {children}
    </span>
    <span className="absolute inset-0 text-accent/20 blur-[1px] -translate-x-[1px] translate-y-[1px] z-0 group-hover:-translate-x-[3px] group-hover:translate-y-[2px] transition-transform duration-300">
      {children}
    </span>
  </span>
);

export const ParallaxLayer = ({ children, speed = 0.5, className = "" }: { children: React.ReactNode; speed?: number; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 100, -speed * 100]);

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
};

export const DiagonalLine = ({ className = "" }: { className?: string }) => (
  <div className={`absolute w-px bg-gradient-to-b from-transparent via-primary/10 to-transparent ${className}`}
    style={{ height: "200px", transform: "rotate(30deg)" }} />
);

export const DottedCircle = ({ size = 100, className = "" }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" className={className} style={{ opacity: 0.06 }}>
    <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1" strokeDasharray="3 6" fill="none" />
    <circle cx="50" cy="50" r="30" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 8" fill="none" />
  </svg>
);

export const ScatteredDots = ({ count = 20, className = "" }: { count?: number; className?: string }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    {Array.from({ length: count }).map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 rounded-full bg-primary/10"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 3 + Math.random() * 4, repeat: Infinity, delay: Math.random() * 3 }}
      />
    ))}
  </div>
);
