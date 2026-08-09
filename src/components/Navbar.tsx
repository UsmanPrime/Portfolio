import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

import { motion } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
      const sections = navLinks.map((l) => l.href.substring(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-lg shadow-background/30"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 border border-primary/20">
              <motion.div
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 0, 0.5] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0 rounded-lg bg-primary/30"
              />
              <Shield className="w-4 h-4 text-primary relative z-10" />
            </div>
            <span className="font-semibold text-sm tracking-tight">
              <span className="text-foreground">Usman</span>
              <span className="text-primary"> Ibrahim</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`relative text-xs font-medium px-3 py-2 rounded-lg transition-all duration-200 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
              >
                {activeSection === link.href.substring(1) && (
                  <span className="absolute inset-0 bg-primary/10 rounded-lg" />
                )}
                <span className="relative">{link.label}</span>
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-secondary/50 rounded-lg"
          >
            <div className="relative w-5 h-5">
              <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'}`} />
              <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'}`} />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-3 border-t border-border/50 bg-background/95 backdrop-blur-md">
            <div className="flex flex-col gap-0.5">
              {navLinks.map((link, i) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left px-4 py-2.5 rounded-lg text-sm transition-all duration-200 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
