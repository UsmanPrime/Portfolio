import { Shield, ChevronDown, FileText, Mail, FolderOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            <span className="text-sm text-muted-foreground">Former SOC Analyst Intern | Blue Team | DFIR & Threat Hunting</span>
          </div>

          {/* Shield Icon */}
          <div className="flex justify-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl" />
              <div className="relative p-6 bg-secondary/50 border border-primary/30 rounded-full cyber-glow">
                <Shield className="w-16 h-16 text-primary" />
              </div>
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <span className="text-foreground">Cyber Security Student @ FAST NUCES '28</span>
            <br />
            <span className="gradient-text">SOC Operations · Memory Forensics · MITRE ATT&CK · Splunk · Wazuh</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            BS Cyber Security student at FAST NUCES Islamabad with hands-on experience in 
            SOC monitoring, DFIR workflows, incident response, and CTF challenge authoring.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 gap-2"
            >
              <FolderOpen className="w-5 h-5" />
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#resume")}
              className="border-border hover:bg-secondary hover:border-primary/50 gap-2"
            >
              <FileText className="w-5 h-5" />
              Download Resume
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollToSection("#contact")}
              className="text-muted-foreground hover:text-foreground gap-2"
            >
              <Mail className="w-5 h-5" />
              Contact
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
