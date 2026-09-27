import { useState } from "react";
import ArchitectureDiagram from "@/components/ArchitectureDiagram";

interface Project {
  domain: "Secure applications" | "Networks" | "Systems";
  title: string;
  result: string;
  category: string;
  description: string;
  highlights: string[];
  tools: string[];
  year: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    domain: "Secure applications",
    title: "PIMS — POS Inventory Management System",
    result: "Layered access control. Tenant-isolated data",
    category: "Full-Stack Security Architecture",
    description: "Collaborated on a full-stack POS Inventory system as the security architect, owning the multi-layer access controls, strict data isolation, and hardened session security across the full stack.",
    highlights: [
      "Engineered a granular RBAC system enforced across client UI, edge middleware, and server APIs to prevent privilege escalation",
      "Implemented PostgreSQL Row Level Security (RLS) policies for strict tenant data isolation",
      "Eliminated SQLi and XSS vectors via Zod schema validation, parameterized queries, and global error-sanitization",
      "Hardened sessions with strict JWTs, CSP, HSTS, X-Frame-Options, and protected cron jobs against DoS/SSRF",
    ],
    tools: ["Next.js", "Supabase", "PostgreSQL", "TypeScript", "Vercel", "Zod", "RBAC", "RLS"],
    year: "2026",
    liveUrl: "https://pos-inventory-management-system-pims.vercel.app/",
    featured: true,
  },
  {
    domain: "Secure applications",
    title: "NextGen Residency — Smart Housing Society",
    result: "Three portals, one hardened backend",
    category: "Full-Stack MERN Application",
    description: "Led backend architecture and security design for a full-stack MERN application with triple-portal access (Resident, Admin, Vendor), owning JWT authentication, RBAC enforcement, rate limiting, audit logging, and the full deployment pipeline. Built alongside a frontend developer and a UI/UX & QA lead.",
    highlights: [
      "Hardened backend API with Helmet.js security headers, CSRF protection, and NoSQL injection prevention; integrated TOTP-based two-factor authentication and JWT with refresh tokens across a triple-portal RBAC architecture.",
    ],
    tools: ["React 18", "Node.js", "Express.js", "MongoDB", "JWT", "Helmet.js"],
    year: "2025",
    githubUrl: "https://github.com/UsmanPrime/Smart-Housing-Society-Website",
    liveUrl: "https://nextgen-residency.vercel.app/",
    featured: true,
  },
  {
    domain: "Systems",
    title: "Xonix Game — Professional Edition",
    result: "10+ custom data structures powering multiplayer gameplay.",
    category: "Multiplayer Arcade Game",
    description: "Engineered a multiplayer arcade game in C++11 utilizing SFML for graphics, audio, and physics, supporting single-player AI and local competitive gameplay.",
    highlights: [
      "Designed and integrated 10+ custom data structures including Hash Tables for O(1) authentication, AVL Trees for leaderboards, and Min-Heaps for rankings",
      "Single-player AI and local competitive gameplay modes",
    ],
    tools: ["C++11", "SFML", "CMake", "OOP", "Data Structures"],
    year: "2025",
    githubUrl: "https://github.com/UsmanPrime/Xonix-Game",
  },
  {
    domain: "Networks",
    title: "Enterprise Multi-Area Network Architecture",
    result: "11 LANs and 22 WAN links across 19 routers.",
    category: "Network Engineering",
    description: "Engineered a complex enterprise-grade multi-area network topology supporting 11 LANs and 22 WAN links across 19 routers and 11 switches.",
    highlights: [
      "Engineered a multi-area network topology across 19 routers and 11 switches with mutual route redistribution, Static NAT, and Extended ACLs for host and subnet-level security policies.",
    ],
    tools: ["Cisco Packet Tracer", "OSPF", "EIGRP", "RIPv2", "NAT", "ACLs"],
    year: "2026",
    githubUrl: "https://github.com/UsmanPrime/Multi-Area-Network-Design-Implementation",
  },
  {
    domain: "Systems",
    title: "Dizzy Walk — Maze Adventure Game",
    result: "A graphical maze game in 2,700+ lines of assembly.",
    category: "x86 Assembly Application",
    description: "Developed a real-time graphical maze-adventure game entirely in x86 Assembly Language (2,700+ lines of MASM32), featuring a 20×30 obstacle grid rendered through the Windows GDI.",
    highlights: [
      "Designed 8 custom data structures, 6 reusable macros, and 35+ procedures using STDCALL calling convention",
      "Proper stack frame management with Win32 API and GDI rendering",
    ],
    tools: ["x86 Assembly", "MASM32", "Win32 API", "GDI"],
    year: "2026",
    githubUrl: "https://github.com/UsmanPrime/Dizzy-Walk",
  },
  {
    domain: "Systems",
    title: "OSIM — Organizational Simulation System",
    result: "1,000+ records persisted across 12+ class hierarchies.",
    category: "Enterprise Simulation",
    description: "Architected an enterprise-style simulation with 12+ class hierarchies following SOLID principles; persisted 1,000+ records with zero data loss.",
    highlights: [
      "Modeled 5 distinct business entity types with complex inter-class relationships",
      "File-based persistence with modular architecture",
    ],
    tools: ["C++", "OOP", "SOLID", "File I/O"],
    year: "2025",
    githubUrl: "https://github.com/UsmanPrime/OSIM---Organizational-Simulation",
  },
  {
    domain: "Secure applications",
    title: "SecureShop",
    result: "Multi-factor authentication and injection-resistant input handling.",
    category: "Secure Shopping Platform",
    description: "Constructed a secure shopping platform with multi-factor authentication and input-sanitization routines blocking injection-style attacks.",
    highlights: [
      "Multi-factor authentication with input validation",
      "Modular architecture with O(log n) search",
    ],
    tools: ["C++", "File I/O", "Authentication"],
    year: "2024",
    githubUrl: "https://github.com/UsmanPrime/SecureShop",
  },
];


const domains = ["Secure applications", "Networks", "Systems"] as const;

const ProjectLinks = ({ project }: { project: Project }) => (
  <div className="project-links">
    {project.liveUrl && <a className="panel-interactive" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Live demo: ${project.title}`}>Live</a>}
    {project.githubUrl && <a className="panel-interactive" href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`Source: ${project.title}`}>Source</a>}
  </div>
);

const ProjectMeta = ({ project }: { project: Project }) => (
  <p className="project-meta">{project.category} / {project.year}</p>
);

const ProjectTools = ({ project }: { project: Project }) => (
  <p className="project-tools"><span className="sr-only">Tools: </span>{project.tools.join(", ")}</p>
);

const PimsCaseStudy = ({ project }: { project: Project }) => (
  <article className="project-case project-case-pims panel-interactive" aria-labelledby="pims-title">
    <header>
      <ProjectMeta project={project} />
      <h3 id="pims-title">{project.title}</h3>
      <p className="project-result">{project.result}</p>
    </header>
    <div className="project-case-body">
      <div className="project-story">
    <figure className="project-homepage-preview panel-static">
      <a className="project-homepage-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo: ${project.title}`}>
        <img src="/projects/pims-frontend.jpg" width={1910} height={916} loading="lazy" decoding="async" alt="PIMS administrator dashboard showing inventory navigation, revenue, sales, and stock summaries" />
      </a>
      <figcaption className="text-xs text-muted-foreground">PIMS · administrator dashboard</figcaption>
    </figure>
      <div className="case-narrative">
        <h4>The problem</h4>
        <p>A shared POS inventory platform needs to keep tenant data isolated and prevent privilege escalation across the full request path.</p>
        <h4>My contribution</h4>
        <p>{project.description}</p>
        <h4>Architecture decisions</h4>
        <ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
      </div>
      </div>
      <ArchitectureDiagram system="pims" />
    </div>
    <footer><ProjectTools project={project} /><ProjectLinks project={project} /></footer>
  </article>
);

const ResidencyCaseStudy = ({ project }: { project: Project }) => (
  <article className="project-case project-case-residency panel-interactive" aria-labelledby="residency-title">
    <header>
      <ProjectMeta project={project} />
      <h3 id="residency-title">{project.title}</h3>
      <p className="project-result">{project.result}</p>
    </header>
    <div className="project-case-body">
      <div className="project-story">
    <figure className="project-homepage-preview panel-static">
      <a className="project-homepage-link" href={project.liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo: ${project.title}`}>
        <img src="/projects/nextgen-residency-frontend.jpg" width={1240} height={696} loading="lazy" decoding="async" alt="NextGen Residency homepage introducing its smart housing society management platform" />
      </a>
      <figcaption className="text-xs text-muted-foreground">NextGen Residency · homepage</figcaption>
    </figure>
    <div className="residency-brief case-narrative">
      <div><h4>The problem</h4><p>Resident, Admin, and Vendor portals need shared services without sharing unrestricted access. Authentication, authorization, and API protection must work across all three.</p></div>
      <div><h4>My contribution</h4><p>{project.description}</p></div>
    </div>
      </div>
      <ArchitectureDiagram system="residency" />
    </div>
    <div className="residency-architecture">
    <section className="residency-ledger panel-static" aria-labelledby="residency-decisions">
      <h4 id="residency-decisions">Backend architecture decisions</h4>
      <dl>
        <div><dt>Identity &amp; sessions</dt><dd>TOTP-based two-factor authentication; JWT authentication with refresh tokens.</dd></div>
        <div><dt>Portal authorization</dt><dd>RBAC across Resident, Admin, and Vendor access.</dd></div>
        <div><dt>API hardening</dt><dd>Helmet.js security headers, CSRF protection, NoSQL injection prevention, and rate limiting.</dd></div>
        <div><dt>Operations</dt><dd>Audit logging and ownership of the deployment pipeline.</dd></div>
      </dl>
    </section>
    </div>
    <div className="case-narrative residency-outcome">
      <h4>Delivered</h4>
      {project.highlights.map(item => <p key={item}>{item}</p>)}
    </div>
    <footer><ProjectTools project={project} /><ProjectLinks project={project} /></footer>
  </article>
);

const SupportingRow = ({ project }: { project: Project }) => (
  <article className="project-row panel-interactive">
    <div className="project-row-main">
      <header><h4>{project.title}</h4><ProjectMeta project={project} /></header>
      <p className="project-row-result">{project.result}</p>
      <ProjectLinks project={project} />
    </div>
    <details className="project-row-details">
      <summary>Project details<span className="sr-only">: {project.title}</span></summary>
      <div>
        <p>{project.description}</p>
        <ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul>
        <ProjectTools project={project} />
      </div>
    </details>
  </article>
);

const Projects = () => {
  const [filter, setFilter] = useState("All work");
  const visible = projects.filter(project => filter === "All work" || project.domain === filter);
  const featured = visible.filter(project => project.featured);
  const supporting = visible.filter(project => !project.featured);

  return (
    <section id="projects" aria-labelledby="projects-heading" className="section-standard">
      <div className="layout-container">
        <div className="content-standard">
          <header className="projects-introduction">
            <h2 id="projects-heading" className="section-title">Projects</h2>
            <p className="section-subtitle">Full-stack web apps, cybersecurity tools, enterprise network design, systems programming, and game development</p>
          </header>
          <div className="project-filters" role="group" aria-label="Filter projects">
            {["All work", ...domains].map(item => (
              <button className="panel-interactive" key={item} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</button>
            ))}
            <span role="status">{visible.length} {visible.length === 1 ? "project" : "projects"}</span>
          </div>
          {featured.length > 0 && (
            <div className="project-case-studies">
              {featured.map(project => project.title.startsWith("PIMS")
                ? <PimsCaseStudy key={project.title} project={project} />
                : <ResidencyCaseStudy key={project.title} project={project} />)}
            </div>
          )}
          {supporting.length > 0 && (
            <section className="project-supporting" aria-labelledby="supporting-heading">
              <h2 id="supporting-heading">Supporting Work</h2>
              {domains.map(domain => {
                const group = supporting.filter(project => project.domain === domain);
                return group.length > 0 ? (
                  <section key={domain} className="project-domain" aria-label={domain}>
                    <h3>{domain}</h3>
                    <div className="project-supporting-grid">
                      {group.map(project => <SupportingRow key={project.title} project={project} />)}
                    </div>
                  </section>
                ) : null;
              })}
            </section>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
