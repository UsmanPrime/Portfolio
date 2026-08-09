import { FileText, Download, Shield, Monitor, Wrench, GraduationCap, Award, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

const Resume = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  const competencies = [
    {
      icon: GraduationCap,
      title: "Education",
      items: [
        "BS Cyber Security",
        "FAST NUCES Islamabad",
        "Aug 2024 – Jun 2028",
        "Coursework: Software Engineering, Cybersecurity-I, Computer Networks",
      ],
    },
    {
      icon: Monitor,
      title: "Experience",
      items: [
        "Business Development Intern — Intellema | May 2026 – Present",
        "SOC Analyst Intern — Tech Hierarchy | Mar 2026",
        "Challenge Author — NASCON 2026 Forensics Arena",
        "Organizer & Author — RDX National CTF",
      ],
    },
    {
      icon: Award,
      title: "Achievements",
      items: [
        "3rd Place — SudoFuzzers CTF (Forensics & OSINT)",
        "7th Place — CyberFest 2025 (National CTF)",
        "Star of CyberFest '25 — Individual Recognition Award",
      ],
    },
    {
      icon: Shield,
      title: "Security & Forensics",
      items: [
        "SOC Operations, Alert Triage, Incident Response, DFIR",
        "Splunk, Wazuh, Elastic Stack (ELK), Wireshark, Volatility 3",
        "MITRE ATT&CK, Memory Forensics, PCAP Analysis, OSINT",
      ],
    },
    {
      icon: Code,
      title: "Programming Languages",
      items: [
        "Python, C++, x86 Assembly (MASM32)",
        "JavaScript, TypeScript, Bash",
      ],
    },
    {
      icon: Wrench,
      title: "Web & Full-Stack",
      items: [
        "React 18, Node.js, Express.js, MongoDB",
        "REST APIs, JWT Auth, Tailwind CSS, Vercel",
      ],
    },
    {
      icon: Code,
      title: "Networking & Tools",
      items: [
        "OSPF, EIGRP, RIPv2, VLSM, NAT, ACLs",
        "Docker, Linux, Git, SFML, CMake, Cisco Packet Tracer",
      ],
    },
  ];

  return (
    <section id="resume" className="py-24 relative bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-8" />

      {/* Ambient Document Motif */}
      <div className="absolute top-[10%] left-[-2%] sm:left-[5%] w-48 sm:w-80 h-64 sm:h-96 z-0 opacity-40 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full border border-primary/30 rounded bg-background/20 relative overflow-hidden backdrop-blur-sm shadow-xl shadow-primary/10"
        >
          <div className="absolute top-6 left-6 right-6 h-2 sm:h-3 bg-primary/30 rounded" />
          <div className="absolute top-14 left-6 right-16 h-2 sm:h-3 bg-primary/20 rounded" />
          <div className="absolute top-22 left-6 right-10 h-2 sm:h-3 bg-primary/20 rounded" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border border-primary/50 rounded-full flex items-center justify-center">
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 bg-primary rounded-full" />
          </div>
          <motion.div 
            animate={{ y: [-150, 400] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle mt-4">
              Download my full resume or review key competencies across cybersecurity, AI support, and development
            </p>
          </div>

          {/* Download Card */}
          <div
            ref={contentRef}
            className={`intel-card mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-500 ${
              contentRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Full Resume</h3>
                <p className="text-xs text-muted-foreground">
                  SOC Analyst | Cybersecurity Professional — Complete background
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 magnetic-btn rounded-lg text-xs"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" download>
                  <Download className="w-3.5 h-3.5" />
                  Download PDF
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5 rounded-lg text-xs border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-3.5 h-3.5" />
                  View Online
                </a>
              </Button>
            </div>
          </div>

          {/* Competencies */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {competencies.map((comp) => (
              <div key={comp.title} className="intel-card group">
                <div className="flex items-center gap-2.5 mb-3 pb-2.5 border-b border-border/60">
                  <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <comp.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <h4 className="text-sm font-semibold group-hover:text-primary transition-colors duration-200">
                    {comp.title}
                  </h4>
                </div>
                <ul className="space-y-1.5">
                  {comp.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="font-mono text-primary/50 select-none mt-px">▸</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
