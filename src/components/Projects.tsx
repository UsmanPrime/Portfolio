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
    title: "Smart Housing Society Website",
    category: "Full Stack Web App",
    description: "NextGen Residency - A comprehensive housing society management system built on the MERN stack. Features role-based portals for Residents, Admins, and Vendors to streamline complaints, facility booking, and community management.",
    tools: ["React", "Node.js", "MongoDB", "Express", "MERN Stack"],
    githubUrl: "https://github.com/UsmanPrime/Smart-Housing-Society-Website",
    liveUrl: "https://nextgen-residency.vercel.app/",
  },
  {
    icon: Briefcase,
    title: "OSIM - Organizational Simulation",
    category: "OOP Semester Project",
    description: "Organizational Simulation and Internal Management System developed for CS-1004 Object Oriented Programming (Spring 2025). A C++ application demonstrating advanced OOP concepts including inheritance, polymorphism, and encapsulation.",
    tools: ["C++", "OOP", "File Handling", "Data Structures"],
    githubUrl: "#",
  },
  {
    icon: ShoppingCart,
    title: "SecureShop",
    category: "Programming Fundamentals",
    description: "A Simulated Secure Shopping Platform built in C++ as a Programming Fundamentals project. Implements secure user authentication, product management, and transaction processing with data validation.",
    tools: ["C++", "File I/O", "Authentication", "Console UI"],
    githubUrl: "#",
  },
  {
    icon: Gamepad2,
    title: "Xonix Game",
    category: "Data Structures Project",
    description: "Classic Xonix arcade game recreated in C++ using data structure concepts. Features smooth gameplay mechanics, collision detection, and progressive difficulty levels.",
    tools: ["C++", "Data Structures", "Game Logic", "Graphics"],
    githubUrl: "#",
  },
  {
    icon: Code,
    title: "Sonic Website",
    category: "Frontend Project",
    description: "A themed website project featuring custom CSS animations and styling. Demonstrates proficiency in modern CSS techniques and responsive design principles.",
    tools: ["HTML", "CSS", "Responsive Design"],
    githubUrl: "https://github.com/UsmanPrime/Sonic-Website",
    liveUrl: "https://usmanprime.github.io/Sonic-Website/",
  },
  {
    icon: Globe,
    title: "My Portfolio",
    category: "React + TypeScript",
    description: "The cybersecurity-themed portfolio you're viewing right now! Built with React, TypeScript, and Tailwind CSS featuring a modern dark theme with cyber aesthetics.",
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    liveUrl: "https://usmanprime-portfolio.vercel.app/",
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
              Academic projects and personal work showcasing programming skills and problem-solving abilities
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

                {/* Tools & Link */}
                <div className="flex items-center justify-between">
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
                  {project.liveUrl && !project.githubUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-primary hover:text-primary hover:bg-primary/10 gap-1"
                    >
                      <span>Live Site</span>
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
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
