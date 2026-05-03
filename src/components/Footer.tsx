import { RangoliCorner } from "./DecorativeElements";

const Footer = () => {
  return (
    <footer className="py-20 px-6 md:px-12 relative overflow-hidden bg-background">
      <RangoliCorner className="absolute bottom-0 left-0 text-primary rotate-180" flip />
      <div className="text-center space-y-6 max-w-xl mx-auto">
        <p className="font-cinzel text-2xl tracking-[0.2em] text-foreground/80">Ruhi Kabra</p>
        
        <div className="font-grotesk text-xs text-muted-foreground/60 space-y-2 tracking-wide">
          <p>Pune, Maharashtra, IN</p>
          <p>+91 7757069920</p>
          <a href="mailto:ruhi@smriti.com" className="hover:text-primary transition-colors block">
            ruhi@smriti.com
          </a>
        </div>

        <p className="font-cormorant text-sm text-muted-foreground/40 tracking-widest pt-4">
          © 2024 Ruhi Kabra
        </p>
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-px bg-border/20" />
          <div className="w-1.5 h-1.5 rotate-45 border border-border/20" />
          <div className="w-8 h-px bg-border/20" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
