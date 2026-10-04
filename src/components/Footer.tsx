import { Shield, Github, Linkedin, Mail, ChevronUp } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="portfolio-footer border-t border-border/60 bg-card/30">
      <div className="layout-container">
        <div className="content-standard">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="footer-focus flex items-center gap-3">
              <div className="p-1.5 rounded-sm bg-primary/10 shadow-[inset_0_0_8px_hsl(var(--primary)/0.1)]">
                <Shield className="w-4 h-4 text-primary" />
              </div>
              <span className="text-[13px] font-medium tracking-wide">
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
                  className="panel-interactive p-2.5 text-muted-foreground hover:text-primary transition duration-250 hover:bg-primary/10 rounded-sm hover:scale-110"
                  aria-label={link.label}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-5 border-t border-border/40 flex items-center justify-between">
            <p className="text-[11px] text-muted-foreground flex items-center gap-1">
              © {currentYear} Usman Ibrahim · Built with React &amp; TypeScript.
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0 })}
              className="p-2 text-muted-foreground hover:text-primary transition duration-250 hover:bg-primary/10 rounded-md hover:-translate-y-1"
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
