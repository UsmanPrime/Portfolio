import { Shield, Monitor, Wrench, Server, Code, Terminal } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

interface SkillCategory {
  icon: typeof Shield;
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Shield,
    title: "Security Operations",
    description: "Core SOC and incident handling capabilities",
    skills: [
      "SOC Operations",
      "Alert Triage",
      "Incident Response",
      "DFIR",
      "Threat Hunting",
      "IOC Analysis",
      "Vulnerability Assessment",
      "Playbook Execution",
      "SOC Tier 1 / Tier 2",
    ],
  },
  {
    icon: Monitor,
    title: "SIEM & Security Tools",
    description: "Monitoring, correlation, and investigation platforms",
    skills: [
      "Splunk",
      "Wazuh",
      "Elastic Stack (ELK)",
      "Wireshark",
      "Volatility 3",
      "Autopsy",
      "Belkasoft",
      "Linux",
      "Docker",
      "Git",
    ],
  },
  {
    icon: Wrench,
    title: "Digital Forensics",
    description: "Hands-on investigation and forensic analysis",
    skills: [
      "Memory Forensics",
      "Windows Forensics",
      "Network Traffic Analysis (PCAP)",
      "Log Analysis",
      "File-Embedded Forensics",
      "Endpoint Telemetry",
      "OSINT",
    ],
  },
  {
    icon: Server,
    title: "Frameworks & Standards",
    description: "Industry-standard security frameworks",
    skills: [
      "MITRE ATT&CK",
      "ISO/IEC 27001",
      "NIST Cybersecurity Framework",
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    description: "Development and scripting stack",
    skills: ["Python", "Bash", "C++", "JavaScript", "TypeScript"],
  },
  {
    icon: Terminal,
    title: "Core Concepts & Web Tools",
    description: "Foundational knowledge and development tools",
    skills: [
      "TCP/IP",
      "Network Protocols",
      "Data Structures",
      "OOP",
      "Secure Coding",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Vercel",
      "GitHub",
    ],
  },
];

const Skills = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills" className="py-28 relative bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mx-auto mt-6">
              Structured competencies across defensive security, digital forensics, AI solution support, and software development
            </p>
          </div>

          {/* Skills Grid */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 gap-6 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{ transitionDelay: `${i * 30}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-secondary/40 border border-border rounded-full backdrop-blur-sm hover:border-primary/30 transition-all duration-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              <span className="text-sm text-muted-foreground">
                Continuously expanding knowledge through hands-on labs, certifications, and CTF competitions
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
