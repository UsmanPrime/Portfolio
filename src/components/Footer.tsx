import { Shield, Github, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-12 border-t border-border/50 bg-card/30 backdrop-blur-sm relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Tagline */}
            <div className="flex items-center gap-3 group">
              <Shield className="w-5 h-5 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
              <span className="text-muted-foreground text-sm">
                SOC Operations · DFIR · Threat Detection · Blue Team
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/UsmanPrime"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/usman-ibrahim-992253276/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:i242038@isb.nu.edu.pk"
                className="p-2.5 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl hover:scale-110 hover:shadow-lg hover:shadow-primary/10"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-border/50 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Usman Ibrahim. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:bg-primary/10 rounded-xl hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
