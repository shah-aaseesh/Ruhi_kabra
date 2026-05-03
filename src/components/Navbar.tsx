import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/film", label: "Film" },
  { to: "/theatre", label: "Theatre" },
  { to: "/art", label: "Art" },
  { to: "/writing", label: "Writing" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      open ? "bg-background/95 backdrop-blur-md border-b border-border" : 
      scrolled ? "bg-background/80 backdrop-blur-md border-b border-border/20 shadow-lg" : 
      "mix-blend-difference"
    )}>
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <Link to="/" className="font-cinzel text-lg tracking-[0.3em] text-foreground hover:text-primary transition-colors" onClick={() => setOpen(false)}>
          Ruhi Kabra
        </Link>
        <button className="md:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "font-grotesk text-xs tracking-[0.2em] uppercase transition-colors duration-300",
                pathname === l.to ? "text-primary" : "text-muted-foreground hover:text-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={cn(
                "block font-grotesk text-sm tracking-[0.2em] uppercase transition-colors",
                pathname === l.to ? "text-primary" : "text-muted-foreground"
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
