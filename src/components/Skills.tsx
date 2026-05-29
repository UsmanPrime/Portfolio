import { Shield, Monitor, Wrench, Server, Code, Terminal, Cpu, Network } from "lucide-react";
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
    <section id="skills" className="py-28 relative bg-secondary/20">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-bg opacity-10" />
      <div className="blob blob-primary w-[500px] h-[500px] top-20 -left-40" />
      <div className="blob blob-accent w-[400px] h-[400px] bottom-20 -right-40" style={{ animationDelay: '4s' }} />

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
              Cross-domain expertise spanning cybersecurity, full-stack development, systems programming, and network architecture
            </p>
          </div>

          {/* Skills Grid */}
          <div
            ref={gridRef}
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-5 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                      {category.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-tag text-xs"
                      style={{ transitionDelay: `${i * 25}ms` }}
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
            <div className="glass-pill">
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
