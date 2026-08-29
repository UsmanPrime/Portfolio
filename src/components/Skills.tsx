import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useAnimations";

const skillGroups = [
  {
    comment: "// Security Operations",
    domain: "security" as const,
    skills: ["SOC Operations", "Alert Triage", "Incident Response", "DFIR", "Threat Hunting", "IOC Analysis", "Splunk", "Wazuh", "Elastic Stack (ELK)", "Wireshark", "Volatility 3"],
  },
  {
    comment: "// Application Security",
    domain: "security" as const,
    skills: ["RBAC", "Row Level Security (RLS)", "Input Validation (Zod)", "SQLi/XSS Prevention", "JWT Session Hardening", "CSP / HSTS", "Rate Limiting"],
  },
  {
    comment: "// Full-Stack Development",
    domain: "dev" as const,
    skills: ["React 18", "Node.js", "Express.js", "MongoDB", "REST APIs", "Tailwind CSS", "Helmet.js", "JWT Authentication", "Next.js", "Vercel"],
  },
  {
    comment: "// Systems & Languages",
    domain: "dev" as const,
    skills: ["Python", "Golang", "C++", "x86 Assembly (MASM32)", "JavaScript", "TypeScript", "Bash"],
  },
  {
    comment: "// Network & Infrastructure",
    domain: "security" as const,
    skills: ["TCP/IP", "OSPF", "EIGRP", "RIPv2", "NAT", "Extended ACLs", "Cisco Packet Tracer", "Docker", "Linux"],
  },
  {
    comment: "// Software Engineering",
    domain: "dev" as const,
    skills: ["OOP", "Data Structures & Algorithms", "SOLID Principles", "Design Patterns", "Git", "CMake", "Agile"],
  },
];

const Skills = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="skills" className="py-24 relative bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10 animate-grid-pulse" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="grid-pulse-x" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(var(--primary))" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
            <linearGradient id="grid-pulse-y" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="hsl(var(--cyan))" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          <rect x="-30%" y="30%" width="30%" height="1" fill="url(#grid-pulse-x)" opacity="0.4">
            <animate attributeName="x" values="-30%;100%" dur="8s" repeatCount="indefinite" />
          </rect>
          <rect x="-20%" y="70%" width="20%" height="1" fill="url(#grid-pulse-x)" opacity="0.5">
            <animate attributeName="x" values="-20%;100%" dur="12s" begin="3s" repeatCount="indefinite" />
          </rect>
          <rect x="40%" y="-30%" width="1" height="30%" fill="url(#grid-pulse-y)" opacity="0.5">
            <animate attributeName="y" values="-30%;100%" dur="10s" begin="1s" repeatCount="indefinite" />
          </rect>
          <rect x="80%" y="-20%" width="1" height="20%" fill="url(#grid-pulse-y)" opacity="0.4">
            <animate attributeName="y" values="-20%;100%" dur="14s" begin="6s" repeatCount="indefinite" />
          </rect>
        </svg>
      </div>

      {/* Ambient cursor motif */}
      <motion.div
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[20%] left-[3%] w-5 h-7 bg-primary/50 hidden sm:block z-0 pointer-events-none"
      />

      <div className="relative z-10">
        {/* Header — stays in standard container */}
        <div className="container mx-auto px-4">
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mt-4">
              Cross-domain expertise spanning defensive security, full-stack development, systems programming, and network architecture
            </p>
          </div>
        </div>

        {/* Full-bleed skill groups — breaks container */}
        <div
          ref={gridRef}
          className="px-4 sm:px-10 lg:px-20 xl:px-32 max-w-screen-2xl mx-auto"
        >
          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10">
            {skillGroups.map((group, gi) => (
              <div
                key={group.comment}
                className={`transition-all duration-500 ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${gi * 70}ms` }}
              >
                <div className="skill-group-header">{group.comment}</div>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, si) => (
                    <span
                      key={skill}
                      className={group.domain === "security" ? "skill-tag-security" : "skill-tag"}
                      style={{ transitionDelay: `${gi * 50 + si * 15}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="container mx-auto px-4 mt-12 flex items-center gap-2 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <span className="font-mono">Continuously expanding through hands-on labs, certifications, and CTF competitions</span>
        </div>

        {/* Legend */}
        <div className="container mx-auto px-4 mt-4 flex items-center gap-5 text-[11px] font-mono text-muted-foreground/50">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm" style={{ background: "hsl(185 75% 52% / 0.4)" }} />
            Security / Defensive
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-sm" style={{ background: "hsl(210 100% 55% / 0.4)" }} />
            Development / Systems
          </span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
