import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";

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
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navLinks.map((l) => l.href.substring(1));
      let current = "";
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = id;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg shadow-background/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2.5 group"
          >
            <div className="relative">
              <Shield className="w-6 h-6 text-primary transition-all duration-500 group-hover:text-accent group-hover:scale-110" />
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <span className="font-bold text-lg tracking-tight">
              <span className="text-foreground">Usman</span>
              <span className="text-primary">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`nav-link text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === link.href.substring(1)
                    ? "text-primary bg-primary/10"
                    : "hover:bg-secondary/50"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-all duration-300 hover:bg-secondary/50 rounded-lg"
          >
            <div className="relative w-6 h-6">
              <X
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-100 rotate-0"
                    : "opacity-0 rotate-90"
                }`}
              />
              <Menu
                className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
                  isMobileMenuOpen
                    ? "opacity-0 -rotate-90"
                    : "opacity-100 rotate-0"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 border-t border-border/50 bg-background/95 backdrop-blur-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                    activeSection === link.href.substring(1)
                      ? "text-primary bg-primary/10 font-medium"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                  }`}
                  style={{ transitionDelay: `${index * 50}ms` }}
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
