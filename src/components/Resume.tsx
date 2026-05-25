import { FileText, Download, Shield, Monitor, Wrench, GraduationCap, Award, Code } from "lucide-react";
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
      title: "Security Operations",
      items: [
        "SOC Operations, Alert Triage, Incident Response, DFIR",
        "Threat Hunting, IOC Analysis, Playbook Execution",
        "MITRE ATT&CK, ISO/IEC 27001, NIST CSF",
      ],
    },
    {
      icon: Wrench,
      title: "SIEM & Forensics Tools",
      items: [
        "Splunk, Wazuh, Elastic Stack (ELK)",
        "Wireshark, Volatility 3, Autopsy, Belkasoft",
        "Memory Forensics, PCAP Analysis, OSINT",
      ],
    },
    {
      icon: Code,
      title: "Languages & Dev Tools",
      items: [
        "Python, Bash, C++, JavaScript, TypeScript",
        "React, Node.js, MongoDB, Tailwind CSS",
        "Linux, Docker, Git, Vercel",
      ],
    },
  ];

  return (
    <section id="resume" className="py-28 relative bg-secondary/20">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle mx-auto mt-6">
              Download my full resume or review key competencies across cybersecurity, AI support, and development
            </p>
          </div>

          {/* Download Card */}
          <div
            ref={contentRef}
            className={`cyber-card mb-12 flex flex-col sm:flex-row items-center justify-between gap-6 transition-all duration-700 ${
              contentRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-xl transition-all duration-500 hover:bg-primary/20 hover:scale-110 hover:shadow-lg hover:shadow-primary/10">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Full Resume</h3>
                <p className="text-muted-foreground text-sm">
                  SOC Analyst | Cybersecurity Student — Complete professional background
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 magnetic-btn rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" download>
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-xl backdrop-blur-sm transition-all duration-300 hover:border-primary/60 hover:-translate-y-0.5"
                asChild
              >
                <a
                  href="/Usman_Ibrahim.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="w-5 h-5" />
                  View Online
                </a>
              </Button>
            </div>
          </div>

          {/* Competencies Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {competencies.map((comp, index) => (
              <div
                key={comp.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110">
                    <comp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold group-hover:text-primary transition-colors duration-300">
                    {comp.title}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {comp.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
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
