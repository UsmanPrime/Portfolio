import { ShieldCheck, Search, Activity, Lock, Code, ArrowRight, Database, Building2, BadgeCheck, Clock, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import usmanPhoto from "@/assets/usman.jpg";
import { useScrollReveal, useCountUp } from "@/hooks/useAnimations";

const About = () => {
  const { ref: sectionRef, isRevealed: sectionRevealed } = useScrollReveal();
  const { ref: statsRef, isRevealed: statsRevealed } = useScrollReveal();
  const { count: alertCount, ref: alertRef } = useCountUp(30, 2000);
  const { count: attackScenarios, ref: attackRef } = useCountUp(5, 1500);
  const { count: projectCount, ref: projectRef } = useCountUp(8, 1800);

  const focusAreas = [
    {
      title: "SOC Operations",
      description: "Triaged 30+ daily alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to classify IOCs and escalate incidents.",
    },
    {
      title: "Digital Forensics",
      description: "Analyzed memory, endpoint telemetry, and network artifacts using Volatility 3, Autopsy, and Belkasoft to identify compromise indicators.",
    },
    {
      title: "Full-Stack Development",
      description: "Building production MERN applications with secure authentication (JWT, TOTP, reCAPTCHA), RBAC, and hardened APIs with Helmet.js and CSRF protection.",
    },
    {
      title: "Systems Programming",
      description: "Engineering low-level systems in x86 Assembly and C++ with custom data structures, Win32 API integration, and SFML-based game physics.",
    },
    {
      title: "AI Solution Support",
      description: "Supporting AI opportunity discovery and proposal preparation across RAG, LLMs, Deep Learning, Generative AI, Voice AI, and Agentic AI.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div
            ref={sectionRef}
            className={`mb-14 transition-all duration-600 ${
              sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">About</h2>
            <p className="section-subtitle mt-4">
              Cybersecurity professional with hands-on experience in SOC operations, full-stack web development,
              and systems programming
            </p>
          </div>

          {/* Top Section: 2 Column Split */}
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-16">
            
            {/* Left - Photo + Bio */}
            <div className="space-y-6">
              
              {/* Photo Card */}
              <div
                className={`intel-card p-6 transition-all duration-600 ${
                  sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '100ms' }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="profile-photo-ring mb-4">
                    <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-background relative z-10">
                      <img
                        src={usmanPhoto}
                        alt="Usman Ibrahim"
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{
                          objectPosition: "center 20%",
                          transform: "scale(1.4)",
                          transformOrigin: "center center",
                        }}
                      />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground text-base mb-0.5">Usman Ibrahim</h3>
                  <p className="text-xs text-muted-foreground mb-0.5">BS Cyber Security</p>
                  <p className="text-xs text-muted-foreground/60 mb-3">FAST NUCES Islamabad '28</p>
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-60" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                    </span>
                    <span className="text-[11px] font-mono text-primary">Blue Team · Detection Engineering</span>
                  </div>
                </div>
              </div>

              {/* Bio Narrative (No Card) */}
              <div
                className={`transition-all duration-600 ${
                  sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
                  I'm currently pursuing my BS in Cyber Security at FAST NUCES Islamabad. I specialize in application security, SOC operations, and digital forensics. Most recently, I've been heavily focused on hardening production platforms, like a POS Inventory System, against SQL injection, XSS, and privilege escalation using layered RBAC and strict input validation.
                </p>
                <p className="text-[14px] text-muted-foreground leading-relaxed mb-4">
                  My hands-on experience includes working as a <span className="text-foreground font-medium">Security Research Intern at NetraLink Solutions</span>, where I led the analytics and security testing for an enterprise DNS firewall, actively finding and patching authentication gaps and CORS misconfigurations. Before that, as a <span className="text-foreground font-medium">SOC Analyst Intern at Tech Hierarchy</span>, I spent my days triaging security alerts in Splunk and Wazuh, mapping IOCs back to the MITRE ATT&CK framework to weed out false positives.
                </p>
                <p className="text-[14px] text-muted-foreground leading-relaxed">
                  I am also deeply involved in the security community — designing hard-level memory forensics challenges for national CTFs and bringing experience driving B2B sales cycles for enterprise AI solutions at Intellema. I focus on the intersection of detection engineering and secure software development, building the tools SOC teams rely on while staying sharp on the analyst side.
                </p>
              </div>
            </div>

            {/* Right - System Status + Stats + Certs */}
            <div className="space-y-6">
              
              {/* System Status Panel */}
              <div 
                className={`terminal-panel transition-all duration-600 ${
                  sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                <div className="terminal-header">
                  <div className="flex gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-[11px] text-muted-foreground ml-auto font-mono flex items-center gap-1.5">
                    <Terminal className="w-3 h-3" /> system_status.sh
                  </span>
                </div>
                <div className="p-5 font-mono text-[12px] space-y-3 bg-card/50">
                  <div className="flex items-start gap-4">
                    <span className="text-emerald-400 w-20 shrink-0">[UPTIME]</span>
                    <span className="text-muted-foreground">99.9% Operational</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-primary w-20 shrink-0">[FOCUS]</span>
                    <span className="text-muted-foreground">Application Security & DefSec</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-cyan-400 w-20 shrink-0">[ROLE]</span>
                    <span className="text-muted-foreground">Detection Engineering</span>
                  </div>
                  <div className="flex items-start gap-4">
                    <span className="text-amber-400 w-20 shrink-0">[LATEST]</span>
                    <span className="text-muted-foreground">CDSA Certification (In Progress)</span>
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div
                ref={statsRef}
                className={`grid grid-cols-3 gap-3 transition-all duration-600 ${
                  statsRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: '250ms' }}
              >
                <div className="intel-card text-center py-5 group" ref={alertRef}>
                  <div className="stat-number text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">{alertCount}+</div>
                  <div className="data-label mt-1">Alerts/Day</div>
                </div>
                <div className="intel-card text-center py-5 group" ref={projectRef}>
                  <div className="stat-number text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">{projectCount}</div>
                  <div className="data-label mt-1">Projects</div>
                </div>
                <div className="intel-card text-center py-5 group" ref={attackRef}>
                  <div className="stat-number text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">{attackScenarios}+</div>
                  <div className="data-label mt-1">Lab Scenarios</div>
                </div>
              </div>

              {/* Cert Badges */}
              <div className={`flex flex-wrap gap-2 transition-all duration-600 ${
                statsRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`} style={{ transitionDelay: '350ms' }}>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-emerald-500/20 bg-emerald-500/5 text-[11px] font-mono text-emerald-500/90">
                  <BadgeCheck className="w-3.5 h-3.5" />
                  ISO/IEC 27001:2022
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-amber-500/20 bg-amber-500/5 text-[11px] font-mono text-amber-500/90">
                  <Clock className="w-3.5 h-3.5" />
                  CDSA — In Progress
                </span>
              </div>

            </div>
          </div>

          {/* Bottom Section: Core Competencies (Full Width Editorial) */}
          <div 
            className={`transition-all duration-700 ${
              sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground flex items-center">
              <span className="text-primary font-mono text-sm mr-3">▎</span>
              Core Competencies
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8">
              {focusAreas.map((area, index) => (
                <div key={area.title}>
                  <div className="skill-group-header !mb-3">// {area.title}</div>
                  <p className="text-[13px] text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
