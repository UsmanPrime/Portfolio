import { Shield, Monitor, Code, Terminal, Cpu, Network, Target } from "lucide-react";
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
      "Application Security",
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
  {
    icon: Target,
    title: "Business & Strategy",
    description: "Client acquisition, proposal writing, and market analysis",
    skills: [
      "Market Research",
      "Client Acquisition",
      "Proposal Writing",
      "AI Strategy",
      "Enterprise RAG Solutions",
      "B2B Sales",
    ],
  },
];

const Skills = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mt-4">
              Cross-domain expertise spanning cybersecurity, full-stack development, systems programming, and network architecture
            </p>
          </div>

          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {skillCategories.map((category) => (
              <div key={category.title} className="intel-card group">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/60">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <category.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors duration-200">
                      {category.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground/60">{category.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag cursor-default">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
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
