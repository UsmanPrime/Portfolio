import { ShieldCheck, Search, Activity, Lock, Code } from "lucide-react";
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
      icon: ShieldCheck,
      title: "SOC Operations",
      description:
        "Triaged 30+ daily alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to classify IOCs and escalate incidents.",
    },
    {
      icon: Search,
      title: "Digital Forensics",
      description:
        "Analyzed memory, endpoint telemetry, and network artifacts using Volatility 3, Autopsy, and Belkasoft to identify compromise indicators.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building production MERN applications with secure authentication (JWT, TOTP, reCAPTCHA), RBAC, and hardened APIs with Helmet.js and CSRF protection.",
    },
    {
      icon: Activity,
      title: "Systems Programming",
      description:
        "Engineering low-level systems in x86 Assembly and C++ with custom data structures, Win32 API integration, and SFML-based game physics.",
    },
    {
      icon: Lock,
      title: "AI Solution Support",
      description:
        "Supporting AI opportunity discovery and proposal preparation across RAG, LLMs, Deep Learning, Generative AI, Voice AI, and Agentic AI.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      
      {/* Ambient Data / Terminal Motif */}
      <div className="absolute top-[10%] right-[-5%] sm:right-[5%] w-64 sm:w-96 h-64 sm:h-96 z-0 opacity-50 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 30, 0], rotate: [0, 2, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full border border-primary/30 rounded-lg p-6 relative backdrop-blur-sm bg-background/20"
        >
          <div className="flex gap-2 mb-6">
            <div className="w-3 h-3 rounded-full bg-destructive/60" />
            <div className="w-3 h-3 rounded-full bg-accent/60" />
            <div className="w-3 h-3 rounded-full bg-primary/60" />
          </div>
          <div className="w-1/2 h-2 bg-primary/40 mb-4 rounded" />
          <div className="w-3/4 h-2 bg-primary/20 mb-4 rounded" />
          <div className="w-1/3 h-2 bg-primary/20 rounded" />
          
          <motion.div 
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="absolute bottom-6 right-6 w-4 h-4 bg-primary"
          />
        </motion.div>
      </div>

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

          <div className="grid lg:grid-cols-5 gap-10 items-start">
            {/* Left - Photo + Stats + Bio */}
            <div className="lg:col-span-2 space-y-5">
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
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
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



              {/* Bio */}
              <div
                className={`intel-card transition-all duration-600 ${
                  sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: '200ms' }}
              >
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                  I'm currently pursuing my BS in Cyber Security at FAST NUCES Islamabad. I specialize in application security, SOC operations, and digital forensics. Most recently, I've been heavily focused on hardening production platforms, like a POS Inventory System, against SQL injection, XSS, and privilege escalation using layered RBAC and strict input validation.
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                  My hands-on experience includes working as a Security Research Intern at NetraLink Solutions, where I led the analytics and security testing for an enterprise DNS firewall, actively finding and patching authentication gaps and CORS misconfigurations. Before that, as a SOC Analyst Intern at Tech Hierarchy, I spent my days triaging security alerts in Splunk and Wazuh, mapping IOCs back to the MITRE ATT&CK framework to weed out false positives.
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  I am also deeply involved in the security community — designing hard-level memory forensics challenges for national CTFs and bringing experience driving B2B sales cycles for enterprise AI solutions at Intellema. I focus on the intersection of detection engineering and secure software development, building the tools SOC teams rely on while staying sharp on the analyst side.
                </p>
              </div>
            </div>

            {/* Right - Focus Areas */}
            <div className="lg:col-span-3 space-y-3">
              {/* Stats */}
              <div
                ref={statsRef}
                className={`grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6 transition-all duration-600 ${
                  statsRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                <div className="intel-card text-center py-4 group" ref={alertRef}>
                  <div className="stat-number text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">{alertCount}+</div>
                  <div className="data-label mt-1">Alerts/Day</div>
                </div>
                <div className="intel-card text-center py-4 group" ref={projectRef}>
                  <div className="stat-number text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">{projectCount}</div>
                  <div className="data-label mt-1">Projects</div>
                </div>
                <div className="intel-card text-center py-4 group" ref={attackRef}>
                  <div className="stat-number text-2xl group-hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.4)] transition-all duration-300">{attackScenarios}+</div>
                  <div className="data-label mt-1">Lab Scenarios</div>
                </div>
              </div>

              <div className="data-label mb-4">Core Competencies</div>
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`intel-card group transition-all duration-500 ${
                    sectionRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 80 + 150}ms` }}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 shrink-0">
                      <area.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-1.5 group-hover:text-primary transition-colors duration-200">
                        {area.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
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
