import { ExternalLink, Globe, Code, Gamepad2, ShoppingCart, Building2, Briefcase } from "lucide-react";
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
    title: "Smart Housing Society Portal",
    category: "Full Stack Web App",
    description:
      "Engineered role-based portals for 3 user classes with JWT-based secure access control, cutting average request resolution time by 40%.",
    highlights: [
      "Admin dashboard managing 200+ resident records with real-time status updates",
      "Automated notifications and full input validation",
    ],
    tools: ["React", "Node.js", "MongoDB", "Express"],
    year: "2025",
    githubUrl: "https://github.com/UsmanPrime/Smart-Housing-Society-Website",
    liveUrl: "https://nextgen-residency.vercel.app/",
  },
  {
    icon: Briefcase,
    title: "OSIM - Organizational Simulation",
    category: "Enterprise Simulation System",
    description:
      "Architected an enterprise-style simulation with 12+ class hierarchies following SOLID principles; persisted 1,000+ records with zero data loss.",
    highlights: [
      "Modeled 5 distinct business entity types with complex inter-class relationships",
      "Accurately reflected real-world corporate structures",
    ],
    tools: ["C++", "OOP Principles", "File Handling"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/OSIM---Organizational-Simulation",
  },
  {
    icon: ShoppingCart,
    title: "SecureShop",
    category: "Secure Shopping Platform",
    description:
      "Constructed a secure shopping platform with multi-factor authentication and input-sanitization routines blocking injection-style attacks.",
    highlights: [
      "Protected 50+ simulated user transaction records",
      "Modular architecture with O(log n) search",
    ],
    tools: ["C++", "File I/O", "Input Validation", "Authentication"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/SecureShop",
  },
  {
    icon: Globe,
    title: "Cybersecurity Portfolio",
    category: "Frontend Portfolio",
    description:
      "Architected and launched a portfolio website achieving a 95+ Lighthouse score with full mobile responsiveness across all breakpoints.",
    highlights: [
      "TypeScript for type-safe coding, eliminating runtime errors",
      "Improved long-term maintainability",
    ],
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    year: "2025",
    liveUrl: "https://usmanprime-portfolio.vercel.app/",
  },
  {
    icon: Gamepad2,
    title: "Xonix Game",
    category: "Game Development",
    description:
      "Engineered a physics engine maintaining 60 FPS across 5 difficulty levels; incorporated grid-based data structures reducing memory footprint by 35%.",
    highlights: [
      "Collision detection and progressive difficulty",
      "Grid-based state tracking",
    ],
    tools: ["C++", "Data Structures", "Game Physics", "Rendering"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/Xonix-Game",
  },
];

const Projects = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="projects" className="py-28 relative">
      <div className="container mx-auto px-4">
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
              Selected software, cybersecurity, and product-focused projects from coursework and practical work
            </p>
          </div>

          {/* Projects Grid */}
          <div
            ref={gridRef}
            className={`grid lg:grid-cols-2 gap-6 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-primary font-medium uppercase tracking-wider">
                          {project.category}
                        </span>
                        <span className="text-xs text-muted-foreground/60">
                          • {project.year}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-3 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1">
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
                <div className="flex items-center justify-between gap-3 pt-4 border-t border-border/50">
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
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
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
