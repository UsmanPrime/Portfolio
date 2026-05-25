import { Shield, ChevronDown, FileText, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useAnimations";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useState, useEffect } from "react";

const Hero = () => {
  const heroSkills = [
    "SOC Operations",
    "DFIR",
    "Memory Forensics",
    "MITRE ATT&CK",
    "Splunk",
    "Wazuh",
    "Threat Hunting",
    "Blue Team",
  ];

  const roles = [
    "SOC Analyst",
    "DFIR Specialist",
    "Threat Hunter",
    "Blue Team Operator",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(true);
  const { displayedText, isComplete } = useTypingEffect(
    "Initializing threat detection systems...",
    35,
    800
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsRoleVisible(true);
      }, 400);
    }, 3000);
    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 md:pt-28">
      {/* Particles Background */}
      <ParticlesBackground />

      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30" />

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[120px] animate-pulse-glow" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent/8 rounded-full blur-[100px] animate-pulse-glow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] animate-pulse-glow -translate-x-1/2 -translate-y-1/2"
        style={{ animationDelay: "4s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary/40 border border-primary/20 rounded-full mb-8 animate-fade-in-up backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent" />
            </span>
            <span className="text-sm text-muted-foreground font-medium">
              Seeking SOC Analyst Internship
            </span>
          </div>

          {/* Shield Icon with glow */}
          <div
            className="flex justify-center mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/15 rounded-full blur-3xl transition-all duration-700 group-hover:bg-primary/25 group-hover:blur-[60px]" />
              <div className="relative p-7 bg-secondary/40 border border-primary/30 rounded-full backdrop-blur-md transition-all duration-500 group-hover:border-primary/60 animate-float">
                <Shield className="w-16 h-16 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              {/* Orbital ring */}
              <div className="absolute inset-[-12px] border border-primary/10 rounded-full animate-rotate-slow" />
            </div>
          </div>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-in-up tracking-tighter"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="bg-gradient-to-r from-foreground via-foreground to-primary/80 bg-clip-text text-transparent">
              Usman Ibrahim
            </span>
          </h1>

          {/* Dynamic Role */}
          <div
            className="h-10 md:h-12 flex items-center justify-center mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold">
              <span
                className={`gradient-text transition-all duration-400 inline-block ${
                  isRoleVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
              >
                {roles[currentRoleIndex]}
              </span>
            </h2>
          </div>

          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-3 animate-fade-in-up font-medium"
            style={{ animationDelay: "0.28s" }}
          >
            Cyber Security Student at FAST NUCES '28
          </p>

          <p
            className="text-sm md:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Business Development Intern at Intellema | SOC Analyst | Blue Team | DFIR
          </p>

          {/* Skill Badges */}
          <div
            className="flex flex-wrap items-center justify-center gap-2 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            {heroSkills.map((skill, i) => (
              <span
                key={skill}
                className="px-3 py-1.5 text-xs md:text-sm rounded-full border border-primary/30 bg-secondary/40 text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-primary/70 hover:bg-primary/15 hover:text-foreground hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/10 cursor-default"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Subtitle */}
          <p
            className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Hands-on experience triaging 30+ daily security alerts and conducting real-time 
            security monitoring using Splunk, Wazuh, and Elastic Stack. Proficient in MITRE 
            ATT&CK-mapped threat hunting and DFIR workflows.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 gap-2 group magnetic-btn rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <FolderOpen className="w-5 h-5 transition-transform group-hover:scale-110" />
              View Projects
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#resume")}
              className="border-primary/40 hover:bg-secondary/80 text-foreground font-medium px-8 gap-2 group rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:-translate-y-0.5"
            >
              <FileText className="w-5 h-5 transition-transform group-hover:scale-110" />
              Download Resume
            </Button>
          </div>

          {/* Terminal Preview */}
          <div
            className="mt-16 max-w-2xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.55s" }}
          >
            <div className="terminal-panel group">
              <div className="terminal-header">
                <div className="terminal-dot bg-destructive/70" />
                <div className="terminal-dot bg-yellow-500/70" />
                <div className="terminal-dot bg-accent/70" />
                <span className="text-xs text-muted-foreground ml-2 font-mono">
                  security_monitor.log
                </span>
              </div>
              <div className="p-5 font-mono text-sm space-y-1.5">
                <div className="flex gap-3 text-muted-foreground">
                  <span className="text-primary">[INFO]</span>
                  <span className={isComplete ? "" : "typing-cursor"}>
                    {displayedText}
                  </span>
                </div>
                {isComplete && (
                  <>
                    <div className="flex gap-3 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                      <span className="text-accent">[OK]</span>
                      <span>Wazuh + Splunk + ELK telemetry pipelines active</span>
                    </div>
                    <div className="flex gap-3 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                      <span className="text-accent">[OK]</span>
                      <span>MITRE ATT&CK TTP correlation engine online</span>
                    </div>
                    <div className="flex gap-3 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                      <span className="text-accent">[OK]</span>
                      <span>IOC analysis & alert triage workflow synchronized</span>
                    </div>
                    <div className="flex gap-3 animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
                      <span className="text-primary">[READY]</span>
                      <span className="text-foreground font-medium">
                        Monitoring 30+ daily security events...
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("#about")}
          className="p-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
        >
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
