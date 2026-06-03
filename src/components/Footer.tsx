import { Shield, Github, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-primary" />
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
                  className="p-2 text-muted-foreground hover:text-primary transition-colors duration-150"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-border/50 flex items-center justify-between">
            <p className="text-[11px] font-mono text-muted-foreground/60">
              © {currentYear} Usman Ibrahim
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-1.5 text-muted-foreground hover:text-primary transition-colors duration-150"
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
