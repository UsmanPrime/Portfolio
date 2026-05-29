import { ExternalLink, Globe, Code, Gamepad2, ShoppingCart, Building2, Briefcase, Network, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

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
      "Interactive particle backgrounds, scroll-reveal animations, glassmorphism UI",
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

const Projects = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="py-28 relative">
      {/* Background blobs */}
      <div className="blob blob-primary w-[600px] h-[600px] top-0 right-0" />
      <div className="blob blob-accent w-[400px] h-[400px] bottom-40 -left-40" style={{ animationDelay: '6s' }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto mt-6">
              Full-stack web apps, cybersecurity tools, enterprise network design, systems programming, and game development
            </p>
          </div>

          {/* Projects Grid */}
          <div
            ref={gridRef}
            className={`grid lg:grid-cols-2 gap-5 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="cyber-card group tilt-card"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground/60">
                          • {project.year}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-4 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-2 text-xs text-muted-foreground/80"
                    >
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-primary/60 shrink-0" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Tools & Links */}
                <div className="flex items-center justify-between gap-3 pt-3 border-t border-border/50">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-secondary/80 text-xs rounded-md text-muted-foreground border border-border/50 transition-all duration-300 hover:border-primary/30 hover:text-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-1 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span>Live</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-1 transition-all duration-300 hover:scale-105"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <span>GitHub</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
