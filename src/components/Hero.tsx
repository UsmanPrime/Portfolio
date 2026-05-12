import { Shield, ChevronDown, FileText, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const heroSkills = [
    "SOC Operations",
    "Memory Forensics",
    "MITRE ATT&CK",
    "Splunk",
    "Wazuh",
    "DFIR",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to AI and Cybersecurity Opportunities</span>
          </div>

          {/* Shield Icon */}
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-foreground/10 rounded-full blur-2xl" />
              <div className="relative p-6 bg-secondary/50 border border-border rounded-full">
                <Shield className="w-16 h-16 text-foreground" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Usman Ibrahim</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/95 mb-3 animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
            Cyber Security & AI Student at FAST NUCES '28
          </h2>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-5 animate-fade-in-up" style={{ animationDelay: "0.28s" }}>
            Business Development Intern at Intellema | AI Solutions | Blue Team | DFIR
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            {heroSkills.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 text-xs md:text-sm rounded-full border border-primary/40 bg-secondary/60 text-muted-foreground transition-all duration-200 hover:border-primary/70 hover:bg-primary/10 hover:text-foreground hover:-translate-y-0.5 hover:shadow-md hover:shadow-primary/10 cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
            BS Cyber Security student at FAST NUCES Islamabad with experience across SOC operations, DFIR workflows, AI solution support, client engagement, and CTF challenge authoring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#projects")}
              className="border-primary/40 hover:bg-secondary text-foreground font-medium px-8 gap-2"
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#resume")}
              className="border-primary/40 hover:bg-secondary gap-2 text-foreground"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </Button>
          </div>

          {/* Terminal Preview */}
          <div className="mt-16 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            <div className="terminal-panel">
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive/70" />
                <div className="terminal-dot bg-yellow-500/70" />
                <div className="terminal-dot bg-accent/70" />
                <span className="text-xs text-muted-foreground ml-2 font-mono">security_monitor.log</span>
              </div>
              <div className="p-4 font-mono text-sm">
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">[INFO]</span>
                  <span>Initializing threat detection systems...</span>
                </div>
                <div className="flex gap-3 text-muted-foreground mt-1">
                  <span className="text-accent">[OK]</span>
                  <span>Wazuh + Splunk telemetry pipelines active</span>
                </div>
                <div className="flex gap-3 text-muted-foreground mt-1">
                  <span className="text-accent">[OK]</span>
                  <span>Alert triage workflow synchronized</span>
                </div>
                <div className="flex gap-3 mt-1">
                  <span className="text-primary">[READY]</span>
                  <span className="text-foreground">Monitoring for security events...</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="p-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
