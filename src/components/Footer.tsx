import { Shield, Github, Linkedin, Mail, ChevronUp, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border/60 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-2.5 group">
              <Shield className="w-5 h-5 text-primary transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
              <span className="text-xs font-mono text-muted-foreground">
                SOC Operations · DFIR · Threat Detection · Blue Team
              </span>
            </div>

            <div className="flex items-center gap-1">
              {[
                { icon: Github, href: "https://github.com/UsmanPrime", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/usman-ibrahim-992253276/", label: "LinkedIn" },
                { icon: Mail, href: "mailto:i242038@isb.nu.edu.pk", label: "Email" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 text-muted-foreground hover:text-primary transition-all duration-250 hover:bg-primary/10 rounded-lg hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground/60 flex items-center gap-1">
              © {currentYear} Usman Ibrahim · Built with
              <Heart className="w-3 h-3 text-primary/60 animate-pulse-subtle" />
              using React & TypeScript
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 text-muted-foreground hover:text-primary transition-all duration-250 hover:bg-primary/10 rounded-lg hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
