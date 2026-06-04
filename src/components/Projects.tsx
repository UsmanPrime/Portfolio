import { ExternalLink, Globe, Code, Gamepad2, ShoppingCart, Building2, Briefcase, Network, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal, useScanReveal } from "@/hooks/useAnimations";

interface Project {
  icon: typeof Code;
  title: string;
  category: string;
  description: string;
  highlights: string[];
  tools: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    icon: Building2,
    title: "NextGen Residency — Smart Housing Society",
    category: "Full-Stack MERN Application",
    description:
      "Designed and developed a full-stack MERN web application with triple-portal architecture (Resident, Admin, Vendor), implementing role-based access control (RBAC) and JWT authentication with refresh tokens and token fingerprinting.",
    highlights: [
      "Hardened backend API with Helmet.js security headers, CSRF protection, rate limiting, and NoSQL injection prevention",
      "Integrated Two-Factor Authentication (TOTP) with backup codes, Google reCAPTCHA v2, and bcrypt password hashing",
      "Deployed frontend on Vercel and backend on Render with MongoDB Atlas, CI/CD auto-deploy from GitHub",
    ],
    tools: ["React 18", "Node.js", "Express.js", "MongoDB", "JWT", "Helmet.js"],
    year: "2026",
    githubUrl: "https://github.com/UsmanPrime/Smart-Housing-Society-Website",
    liveUrl: "https://nextgen-residency.vercel.app/",
  },
  {
    icon: Gamepad2,
    title: "Xonix Game — Professional Edition",
    category: "Multiplayer Arcade Game",
    description:
      "Engineered a multiplayer arcade game in C++11 utilizing SFML for graphics, audio, and physics, supporting single-player AI and local competitive gameplay.",
    highlights: [
      "Designed and integrated 10+ custom data structures including Hash Tables for O(1) authentication, AVL Trees for leaderboards, and Min-Heaps for rankings",
      "Single-player AI and local competitive gameplay modes",
    ],
    tools: ["C++11", "SFML", "CMake", "OOP", "Data Structures"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/Xonix-Game",
  },
  {
    icon: Network,
    title: "Enterprise Multi-Area Network Architecture",
    category: "Network Engineering",
    description:
      "Engineered a complex enterprise-grade multi-area network topology supporting 11 LANs and 22 WAN links across 19 routers and 11 switches.",
    highlights: [
      "Implemented OSPF, EIGRP, RIPv2 with mutual route redistribution across 3 border routers",
      "Deployed Static NAT for public IP translation and Extended ACLs for host/subnet-level security",
    ],
    tools: ["Cisco Packet Tracer", "OSPF", "EIGRP", "RIPv2", "NAT", "ACLs"],
    year: "2026",
    githubUrl: "https://github.com/UsmanPrime/Multi-Area-Network-Design-Implementation",
  },
  {
    icon: Cpu,
    title: "Dizzy Walk — Maze Adventure Game",
    category: "x86 Assembly Application",
    description:
      "Developed a real-time graphical maze-adventure game entirely in x86 Assembly Language (2,700+ lines of MASM32), featuring a 20×30 obstacle grid rendered through the Windows GDI.",
    highlights: [
      "Designed 8 custom data structures, 6 reusable macros, and 35+ procedures using STDCALL calling convention",
      "Proper stack frame management with Win32 API and GDI rendering",
    ],
    tools: ["x86 Assembly", "MASM32", "Win32 API", "GDI"],
    year: "2026",
    githubUrl: "https://github.com/UsmanPrime/Dizzy-Walk",
  },
  {
    icon: Globe,
    title: "Cybersecurity Portfolio",
    category: "Frontend Portfolio",
    description:
      "Architected and launched a portfolio website achieving a 95+ Lighthouse score with full mobile responsiveness across all breakpoints.",
    highlights: [
      "TypeScript for type-safe coding, eliminating runtime errors",
      "Interactive particle backgrounds, scroll-reveal animations, bespoke dark UI",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025",
    liveUrl: "https://usmanprime-portfolio.vercel.app/",
  },
  {
    icon: Briefcase,
    title: "OSIM — Organizational Simulation System",
    category: "Enterprise Simulation",
    description:
      "Architected an enterprise-style simulation with 12+ class hierarchies following SOLID principles; persisted 1,000+ records with zero data loss.",
    highlights: [
      "Modeled 5 distinct business entity types with complex inter-class relationships",
      "File-based persistence with modular architecture",
    ],
    tools: ["C++", "OOP", "SOLID", "File I/O"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/OSIM---Organizational-Simulation",
  },
  {
    icon: ShoppingCart,
    title: "SecureShop",
    category: "Secure Shopping Platform",
    description:
      "Constructed a secure shopping platform with multi-factor authentication and input-sanitization routines blocking injection-style attacks; protected 50+ simulated user transaction records.",
    highlights: [
      "Multi-factor authentication with input validation",
      "Modular architecture with O(log n) search",
    ],
    tools: ["C++", "File I/O", "Authentication"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/SecureShop",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const { ref, isScanning, isRevealed } = useScanReveal(500);

  return (
    <div
      ref={ref}
      className={`intel-card group ${isScanning ? 'scanning' : ''} ${isRevealed ? 'revealed' : ''} transition-all duration-500 ${isRevealed || isScanning ? 'opacity-100' : 'opacity-0 translate-y-4'}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/60">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <project.icon className="w-4 h-4 text-primary" />
          </div>
          <div>
            <span className="data-label">{project.category}</span>
            <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
              {project.title}
            </h3>
          </div>
        </div>
        <span className="font-mono text-[11px] text-muted-foreground tabular-nums bg-secondary/50 px-2 py-0.5 rounded">
          {project.year}
        </span>
      </div>

      {/* Description */}
      <p className="text-[13px] text-muted-foreground mb-3 leading-relaxed">
        {project.description}
      </p>

      {/* Highlights */}
      <div className="mb-4 space-y-1.5">
        {project.highlights.map((h) => (
          <div key={h} className="flex items-start gap-2 text-xs text-muted-foreground/80">
            <span className="font-mono text-primary/60 select-none mt-px">▸</span>
            <span className="leading-relaxed">{h}</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/60">
        <div className="flex flex-wrap gap-1">
          {project.tools.map((tool) => (
            <span
              key={tool}
              className="px-1.5 py-0.5 text-[10px] font-mono text-muted-foreground border border-border/60 rounded bg-secondary/40 hover:border-primary/30 hover:text-foreground transition-all duration-200"
            >
              {tool}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {project.liveUrl && (
            <Button variant="ghost" size="sm" className="h-7 px-2 text-primary hover:text-primary hover:bg-primary/10 gap-1 text-xs transition-all duration-200 hover:scale-105" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Live <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="ghost" size="sm" className="h-7 px-2 text-primary hover:text-primary hover:bg-primary/10 gap-1 text-xs transition-all duration-200 hover:scale-105" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                Source <ExternalLink className="w-3 h-3" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mt-4">
              Full-stack web apps, cybersecurity tools, enterprise network design, systems programming, and game development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
