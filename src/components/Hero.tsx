import { Shield, ChevronDown, FileText, FolderOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useTypingEffect, useDecryptText } from "@/hooks/useAnimations";
import ParticlesBackground from "@/components/ParticlesBackground";
import usmanPhoto from "@/assets/usman.jpg";
import { useState, useEffect } from "react";

const Hero = () => {
  const heroSkills = [
    "SOC Operations",
    "DFIR",
    "MERN Stack",
    "MITRE ATT&CK",
    "Splunk",
    "Wazuh",
    "Threat Detection",
    "Blue Team",
    "Incident Response",
    "Network Security",
  ];

  const roles = [
    "SOC Analyst",
    "Blue Team Specialist",
    "Cybersecurity Student",
    "DFIR Specialist",
    "Full-Stack Developer",
    "Detection Engineer",
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
      }, 250);
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 md:pt-20">
      <ParticlesBackground />
      <div className="absolute inset-0 grid-bg opacity-15" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/40 to-background" />

      {/* Cyber Motifs */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-24 right-[-10%] sm:right-[5%] w-64 h-64 sm:w-96 sm:h-96 cyber-reticle opacity-50 z-0 pointer-events-none"
      >
        <div className="absolute inset-[15%] border-2 border-dashed border-primary/40 rounded-full" />
        <div className="absolute inset-[30%] border border-primary/20 rounded-full" />
      </motion.div>
      
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-32 left-[2%] sm:left-[10%] flex items-center gap-3 opacity-60 z-0 font-mono text-primary text-4xl sm:text-5xl pointer-events-none"
      >
        <span>[</span>
        <motion.span 
          animate={{ opacity: [1, 0, 1] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-4 h-8 sm:h-10 bg-primary"
        />
        <span>]</span>
      </motion.div>

      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-[10%] w-[800px] h-[800px] rounded-full bg-primary/20 blur-[180px] animate-pulse-subtle z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 -right-[10%] w-[700px] h-[700px] rounded-full bg-accent/20 blur-[150px] animate-pulse-subtle z-0 pointer-events-none" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-10 items-center">
            {/* Left Content */}
            <div className="lg:col-span-3">
              {/* Status */}
              <div className="animate-fade-in-up">
                <div className="eyebrow-badge">
                  Blue Team | SOC &amp; DFIR
                </div>
              </div>

              {/* Name */}
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-3 animate-fade-in-up tracking-tighter"
                style={{ animationDelay: "0.1s" }}
              >
                <span className={`transition-all duration-500 ${nameDecrypted ? 'text-foreground' : 'text-primary/60'}`}>
                  {nameText}
                </span>
              </h1>

              {/* Role */}
              <div
                className="h-9 flex items-center gap-2 mb-5 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <span
                  className={`text-lg md:text-xl font-semibold transition-all duration-200 inline-block ${
                    isRoleVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"
                  } text-foreground`}
                >
                  {roles[currentRoleIndex].split(' ').map((word, index) => 
                    ['Blue', 'Team', 'SOC', 'DFIR', 'Security'].includes(word) ? 
                    <span key={index} className="text-primary mr-1.5">{word}</span> : 
                    <span key={index} className="mr-1.5">{word}</span>
                  )}
                </span>
              </div>

              {/* Tagline */}
              <p
                className="text-base text-muted-foreground mb-2 animate-fade-in-up"
                style={{ animationDelay: "0.25s" }}
              >
                Cyber Security Student at FAST NUCES '28
              </p>
              <p
                className="text-sm text-muted-foreground/60 max-w-lg mb-6 leading-relaxed animate-fade-in-up"
                style={{ animationDelay: "0.3s" }}
              >
                I'm a cybersecurity student at FAST NUCES '28 specializing in SOC operations, digital forensics, and threat detection. I have hands-on experience triaging alerts using SIEM tools like Splunk and Wazuh, investigating incidents, and building secure full-stack applications.
              </p>

              {/* Skill Badges */}
              <div
                className="flex flex-wrap gap-1.5 mb-8 animate-fade-in-up"
                style={{ animationDelay: "0.35s" }}
              >
                {heroSkills.map((skill, i) => (
                  <span
                    key={skill}
                    className="skill-tag cursor-default"
                    style={{ animationDelay: `${i * 0.03}s` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div
                className="flex flex-col sm:flex-row gap-3 animate-fade-in-up"
                style={{ animationDelay: "0.4s" }}
              >
                <Button
                  size="lg"
                  onClick={() => scrollToSection("#projects")}
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 gap-2 group magnetic-btn rounded-lg"
                >
                  <FolderOpen className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  View Projects
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToSection("#resume")}
                  className="border-border hover:border-primary/40 text-foreground font-medium px-6 gap-2 rounded-lg transition-all duration-250 hover:bg-primary/5"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </Button>
              </div>
            </div>

            {/* Right - Photo */}
            <div className="lg:col-span-2 flex justify-center animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="relative">
                {/* Photo */}
                <div className="profile-photo-ring">
                  <div className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-2 border-background relative z-10">
                    <img
                      src={usmanPhoto}
                      alt="Usman Ibrahim - Cyber Security Professional"
                      className="w-full h-full object-cover transition-transform duration-700"
                      style={{
                        objectPosition: "center 15%",
                        transform: "scale(1.4)",
                        transformOrigin: "center 20%",
                      }}
                    />
                  </div>
                </div>

                {/* Floating labels */}
                <div className="absolute -top-2 -right-4 px-3 py-1.5 bg-card border border-border rounded-lg text-xs font-mono text-primary animate-float shadow-lg shadow-background/50">
                  <Shield className="w-3 h-3 inline mr-1" />
                  Blue Team
                </div>
                <div className="absolute -bottom-2 -left-4 px-3 py-1.5 bg-card border border-primary/20 rounded-lg text-xs font-mono text-accent animate-float shadow-lg shadow-background/50" style={{ animationDelay: '2s' }}>
                  SOC Analyst
                </div>
              </div>
            </div>
          </div>

          {/* Terminal */}
          <div className="mt-16 max-w-2xl animate-fade-in-up" style={{ animationDelay: "0.55s" }}>
            <div className="terminal-panel">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500/60" />
                <div className="terminal-dot bg-yellow-500/60" />
                <div className="terminal-dot bg-green-500/60" />
                <span className="text-[11px] text-muted-foreground ml-2 font-mono">
                  threat_monitor.sh
                </span>
              </div>
              <div className="p-4 font-mono text-xs space-y-1 overflow-x-auto whitespace-nowrap scrollbar-none">
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
                        Monitoring 50+ daily security events...
                      </span>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <button
          onClick={() => scrollToSection("#about")}
          className="p-2 text-muted-foreground hover:text-primary transition-all duration-200 hover:-translate-y-1"
        >
          <ChevronDown className="w-5 h-5 animate-float" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
