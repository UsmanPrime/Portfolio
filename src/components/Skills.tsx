import { Shield, Monitor, Code, Terminal, Cpu, Network } from "lucide-react";
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
    title: "Security & Forensics",
    description: "SOC operations, incident handling, and forensic analysis",
    skills: [
      "SOC Operations",
      "Alert Triage",
      "Incident Response",
      "DFIR",
      "Splunk",
      "Wazuh",
      "Elastic Stack (ELK)",
      "Wireshark",
      "Volatility 3",
      "MITRE ATT&CK",
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    description: "From high-level to low-level systems programming",
    skills: [
      "Python",
      "C++",
      "x86 Assembly (MASM32)",
      "JavaScript",
      "TypeScript",
      "Bash",
    ],
  },
  {
    icon: Monitor,
    title: "Web & Full-Stack",
    description: "Production MERN applications with secure auth",
    skills: [
      "React 18",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Tailwind CSS",
      "JWT Authentication",
      "HTML",
      "CSS",
      "Vercel",
    ],
  },
  {
    icon: Cpu,
    title: "Software Engineering",
    description: "Design principles and development methodology",
    skills: [
      "OOP",
      "Data Structures",
      "Algorithms",
      "SOLID Principles",
      "Design Patterns",
      "Modular Architecture",
      "Git",
      "Agile Methodology",
    ],
  },
  {
    icon: Network,
    title: "Networking",
    description: "Enterprise network design and routing protocols",
    skills: [
      "TCP/IP",
      "OSPF",
      "EIGRP",
      "RIPv2",
      "VLSM",
      "NAT",
      "ACLs",
      "DHCP",
      "DNS",
      "Cisco Packet Tracer",
    ],
  },
  {
    icon: Terminal,
    title: "Tools & Platforms",
    description: "Development and deployment toolchain",
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Linux",
      "SFML",
      "CMake",
      "Vercel",
      "Visual Studio",
    ],
  },
];

const Skills = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-bg opacity-8" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-12 transition-all duration-500 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mt-4">
              Cross-domain expertise spanning cybersecurity, full-stack development, systems programming, and network architecture
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {skillCategories.map((category) => (
              <div key={category.title} className="intel-card group">
                <div className="flex items-center gap-2 mb-3 pb-2.5 border-b border-border/60">
                  <category.icon className="w-3.5 h-3.5 text-primary" />
                  <div>
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors duration-150">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground/60">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Status */}
          <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <span className="font-mono">
              Continuously expanding through hands-on labs, certifications, and CTF competitions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
