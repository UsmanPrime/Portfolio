import { Shield, ChevronDown, FileText, FolderOpen, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect, useDecryptText } from "@/hooks/useAnimations";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useState, useEffect } from "react";

const Hero = () => {
  const heroSkills = [
    "SOC Operations",
    "DFIR",
    "MERN Stack",
    "MITRE ATT&CK",
    "Splunk",
    "Wazuh",
    "x86 Assembly",
    "Blue Team",
    "Threat Hunting",
    "Network Architecture",
  ];

  const roles = [
    "SOC Analyst",
    "Full-Stack Developer",
    "DFIR Specialist",
    "Systems Programmer",
    "Blue Team Operator",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isRoleVisible, setIsRoleVisible] = useState(true);
  const { displayedText: nameText, isComplete: nameDecrypted } = useDecryptText("USMAN IBRAHIM", { speed: 40, startDelay: 300 });
  const { displayedText, isComplete } = useTypingEffect(
    "$ soc-monitor --init --pipeline=active",
    30,
    1200
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsRoleVisible(false);
      setTimeout(() => {
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        setIsRoleVisible(true);
      }, 200);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24">
      <ParticlesBackground />
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Status indicator */}
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="flex items-center gap-2 px-3 py-1.5 border border-border rounded bg-secondary/40">
              <span className="w-1.5 h-1.5 rounded-full bg-accent" />
              <span className="text-xs font-mono text-muted-foreground">
                ACTIVE — Seeking Cybersecurity & Software Engineering Internship
              </span>
            </div>
          </div>

          {/* Name — decrypts into view */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-3 animate-fade-in-up font-mono tracking-tighter"
            style={{ animationDelay: "0.15s" }}
          >
            <span className={`transition-colors duration-300 ${nameDecrypted ? 'text-foreground' : 'text-primary/70'}`}>
              {nameText}
            </span>
          </h1>

          {/* Dynamic Role */}
          <div
            className="h-9 md:h-10 flex items-center mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-xl md:text-2xl font-semibold text-primary font-mono">
              {"// "}
            </span>
            <span
              className={`text-xl md:text-2xl font-semibold text-primary transition-all duration-150 inline-block ${
                isRoleVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1"
              }`}
            >
              {roles[currentRoleIndex]}
            </span>
          </div>

          {/* Description — tight, authoritative */}
          <p
            className="text-base text-muted-foreground max-w-xl mb-4 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            Cybersecurity & Software Engineering Student at FAST NUCES '28
          </p>
          <p
            className="text-sm text-muted-foreground/70 max-w-2xl mb-8 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Hands-on experience in SOC operations, full-stack web development, and systems
            programming. Proficient in triaging 30+ daily alerts using Splunk & Wazuh, building
            production MERN apps with secure authentication, and engineering low-level systems
            in x86 Assembly and C++.
          </p>

          {/* Skill Badges — monospaced, precise */}
          <div
            className="flex flex-wrap items-center gap-1.5 mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            {heroSkills.map((skill) => (
              <span
                key={skill}
                className="skill-tag cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-start gap-3 mb-16 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 gap-2 group magnetic-btn rounded-md transition-all duration-150"
            >
              <FolderOpen className="w-4 h-4" />
              View Projects
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#resume")}
              className="border-border hover:border-primary/40 text-foreground font-medium px-6 gap-2 rounded-md transition-all duration-150"
            >
              <FileText className="w-4 h-4" />
              Download Resume
            </Button>
          </div>

          {/* Terminal */}
          <div
            className="max-w-2xl animate-fade-in-up"
            style={{ animationDelay: "0.5s" }}
          >
            <div className="terminal-panel">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500/60" />
                <div className="terminal-dot bg-yellow-500/60" />
                <div className="terminal-dot bg-green-500/60" />
                <span className="text-[11px] text-muted-foreground ml-2 font-mono">
                  threat_monitor.sh
                </span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1">
                <div className="flex gap-2 text-muted-foreground">
                  <span className="text-primary select-none">❯</span>
                  <span className={isComplete ? "" : "typing-cursor"}>
                    {displayedText}
                  </span>
                </div>
                {isComplete && (
                  <>
                    <div className="flex gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
                      <span className="text-accent select-none">[✓]</span>
                      <span>Wazuh + Splunk + ELK telemetry pipelines active</span>
                    </div>
                    <div className="flex gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                      <span className="text-accent select-none">[✓]</span>
                      <span>MITRE ATT&CK TTP correlation engine online</span>
                    </div>
                    <div className="flex gap-2 text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                      <span className="text-accent select-none">[✓]</span>
                      <span>IOC analysis & alert triage workflow synchronized</span>
                    </div>
                    <div className="flex gap-2 animate-fade-in-up" style={{ animationDelay: "0.35s" }}>
                      <span className="text-primary select-none">[●]</span>
                      <span className="text-foreground">
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
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("#about")}
          className="p-2 text-muted-foreground hover:text-primary transition-colors duration-150"
        >
          <ChevronDown className="w-5 h-5 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
