import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useAnimations";

const skillGroups = [
  {
    comment: "// Security Operations",
    domain: "security" as const,
    skills: [
      { name: "SOC Operations", level: 4 },
      { name: "Alert Triage", level: 5 },
      { name: "Incident Response", level: 4 },
      { name: "DFIR", level: 3 },
      { name: "Threat Hunting", level: 3 },
      { name: "IOC Analysis", level: 4 },
      { name: "Splunk", level: 5 },
      { name: "Wazuh", level: 5 },
      { name: "Elastic Stack (ELK)", level: 4 },
      { name: "Wireshark", level: 4 },
      { name: "Volatility 3", level: 4 },
      { name: "MITRE ATT&CK", level: 5 },
    ],
  },
  {
    comment: "// Application Security",
    domain: "security" as const,
    skills: [
      { name: "RBAC", level: 5 },
      { name: "Row Level Security (RLS)", level: 4 },
      { name: "Input Validation (Zod)", level: 5 },
      { name: "SQLi/XSS Prevention", level: 4 },
      { name: "JWT Session Hardening", level: 4 },
      { name: "CSP / HSTS", level: 3 },
      { name: "Rate Limiting", level: 4 },
    ],
  },
  {
    comment: "// Full-Stack Development",
    domain: "dev" as const,
    skills: [
      { name: "React 18", level: 5 },
      { name: "Node.js", level: 4 },
      { name: "Express.js", level: 4 },
      { name: "MongoDB", level: 4 },
      { name: "REST APIs", level: 4 },
      { name: "Tailwind CSS", level: 5 },
      { name: "Helmet.js", level: 3 },
      { name: "JWT Authentication", level: 4 },
      { name: "Next.js", level: 4 },
      { name: "Vercel", level: 4 },
    ],
  },
  {
    comment: "// Systems & Languages",
    domain: "dev" as const,
    skills: [
      { name: "Python", level: 4 },
      { name: "Golang", level: 3 },
      { name: "C++", level: 4 },
      { name: "x86 Assembly (MASM32)", level: 3 },
      { name: "JavaScript", level: 5 },
      { name: "TypeScript", level: 4 },
      { name: "Bash", level: 3 },
    ],
  },
  {
    comment: "// Network & Infrastructure",
    domain: "security" as const,
    skills: [
      { name: "TCP/IP", level: 4 },
      { name: "OSPF", level: 3 },
      { name: "EIGRP", level: 3 },
      { name: "RIPv2", level: 2 },
      { name: "NAT", level: 4 },
      { name: "Extended ACLs", level: 3 },
      { name: "Cisco Packet Tracer", level: 4 },
      { name: "Docker", level: 3 },
      { name: "Linux", level: 4 },
    ],
  },
  {
    comment: "// Software Engineering",
    domain: "dev" as const,
    skills: [
      { name: "OOP", level: 4 },
      { name: "Data Structures & Algorithms", level: 4 },
      { name: "SOLID Principles", level: 3 },
      { name: "Design Patterns", level: 3 },
      { name: "Git", level: 4 },
      { name: "CMake", level: 2 },
      { name: "Agile", level: 4 },
    ],
  },
];

const topSkills = [
  { name: "Splunk", level: 5, domain: "security" },
  { name: "Wazuh", level: 5, domain: "security" },
  { name: "MITRE ATT&CK", level: 5, domain: "security" },
  { name: "React", level: 5, domain: "dev" },
  { name: "RBAC", level: 5, domain: "security" },
  { name: "Volatility 3", level: 4, domain: "security" },
];

const SkillIndicator = ({ level, max = 5 }: { level: number; max?: number }) => (
  <div className="flex gap-[2px] ml-1.5 opacity-70 mt-[1px]">
    {Array.from({ length: max }).map((_, i) => (
      <div 
        key={i} 
        className={`w-[3px] h-1.5 rounded-sm ${i < level ? "bg-current" : "bg-current opacity-20"}`}
      />
    ))}
  </div>
);

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
          {/* Top / Featured Skills Anchor Row */}
          <div 
            className={`mb-12 transition-all duration-500 ${gridRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-primary font-mono text-sm">▎</span>
              <h3 className="text-sm font-semibold text-foreground tracking-wide">Primary Expertise</h3>
            </div>
            <div className="flex flex-wrap gap-2.5">
              {topSkills.map((skill, i) => (
                <div 
                  key={skill.name}
                  className="flex items-center px-3 py-1.5 rounded-md border border-primary/20 bg-primary/10 text-primary text-sm font-medium shadow-[0_0_15px_hsl(var(--primary)/0.15)]"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  {skill.name}
                  <SkillIndicator level={skill.level} />
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-x-20 gap-y-10 border-t border-border/40 pt-10">
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
                      key={skill.name}
                      className={group.domain === "security" ? "skill-tag-security flex items-center" : "skill-tag flex items-center"}
                      style={{ transitionDelay: `${gi * 50 + si * 15}ms` }}
                    >
                      {skill.name}
                      <SkillIndicator level={skill.level} />
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
