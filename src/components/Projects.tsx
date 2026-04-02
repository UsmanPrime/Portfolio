import { ExternalLink, Globe, Code, Gamepad2, ShoppingCart, Building2, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  icon: typeof Code;
  title: string;
  category: string;
  description: string;
  tools: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    icon: Building2,
    title: "Smart Housing Society Portal",
    category: "Full Stack Web App",
    description: "Built role-based portals for residents, admins, and vendors with secure access controls, complaint workflows, and facility booking.",
    tools: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/UsmanPrime/Smart-Housing-Society-Website",
    liveUrl: "https://nextgen-residency.vercel.app/",
  },
  {
    icon: Briefcase,
    title: "OSIM - Organizational Simulation",
    category: "Enterprise Simulation System",
    description: "Developed an enterprise-style C++ simulation using inheritance and polymorphism with persistent organizational record handling.",
    tools: ["C++", "OOP Principles", "File Handling"],
    githubUrl: "https://github.com/UsmanPrime/OSIM---Organizational-Simulation",
  },
  {
    icon: ShoppingCart,
    title: "SecureShop",
    category: "Secure Shopping Platform",
    description: "Developed a C++ shopping platform with authentication, input validation, and modular inventory and order processing.",
    tools: ["C++", "File I/O", "Input Validation", "Authentication"],
    githubUrl: "https://github.com/UsmanPrime/SecureShop",
  },
  {
    icon: Globe,
    title: "Cybersecurity Portfolio",
    category: "Frontend Portfolio",
    description: "Designed and deployed a cybersecurity portfolio with responsive UI and type-safe React components.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://usmanprime-portfolio.vercel.app/",
  },
  {
    icon: Gamepad2,
    title: "Xonix Game",
    category: "Game Development",
    description: "Recreated the classic arcade game with collision detection, progressive difficulty, and grid-based state tracking.",
    tools: ["C++", "Data Structures", "Game Physics", "Rendering"],
    githubUrl: "https://github.com/UsmanPrime/Xonix-Game",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Projects</h2>
            <p className="section-subtitle mx-auto">
              Selected software and cybersecurity projects from coursework and practical work
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="cyber-card group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <project.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-primary font-medium uppercase tracking-wide">
                        {project.category}
                      </span>
                      <h3 className="text-lg font-semibold">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>

                {/* Tools & Links */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool) => (
                      <span
                        key={tool}
                        className="px-2 py-0.5 bg-secondary text-xs rounded text-muted-foreground"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="px-2 py-0.5 text-xs text-muted-foreground">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-1"
                        asChild
                      >
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <span>Live Site</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-primary hover:bg-primary/10 gap-1"
                        asChild
                      >
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <span>GitHub</span>
                          <ExternalLink className="w-4 h-4" />
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
