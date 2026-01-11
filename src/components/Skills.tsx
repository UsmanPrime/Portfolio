import { Shield, Monitor, Wrench, Server, Code, Terminal } from "lucide-react";

interface SkillCategory {
  icon: typeof Shield;
  title: string;
  description: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    icon: Shield,
    title: "SOC & Blue Team",
    description: "Core defensive security operations",
    skills: [
      "Threat Monitoring",
      "Alert Triage",
      "Incident Response",
      "Threat Intelligence",
      "Security Event Analysis",
      "Escalation Procedures",
    ],
  },
  {
    icon: Monitor,
    title: "SIEM & Monitoring",
    description: "Log management and event correlation",
    skills: [
      "Log Analysis",
      "Correlation Rules",
      "Event Investigation",
      "Dashboard Creation",
      "Query Languages",
      "Alert Tuning",
    ],
  },
  {
    icon: Wrench,
    title: "Security Tools",
    description: "Industry-standard security platforms",
    skills: [
      "SIEM Platforms",
      "Wireshark",
      "Kali Linux",
      "Digital Forensics Tools",
      "Endpoint Detection",
      "Network Analyzers",
      "Vulnerability Scanners",
    ],
  },
  {
    icon: Server,
    title: "Technical Foundations",
    description: "Core technical competencies",
    skills: [
      "Linux Administration",
      "Network Protocols",
      "TCP/IP Stack",
      "Git Version Control",
      "Virtual Environments",
    ],
  },
  {
    icon: Code,
    title: "Programming Languages",
    description: "Development and scripting capabilities",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "HTML",
      "CSS",
      "Bash Scripting",
    ],
  },
  {
    icon: Terminal,
    title: "Development Tools",
    description: "Tools for development and analysis",
    skills: [
      "VS Code",
      "Linux CLI",
      "Git",
      "Wireshark",
      "Virtual Machines",
      "Docker",
    ],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-subtitle mx-auto">
              Structured competencies across defensive security domains
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="cyber-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{category.title}</h3>
                    <p className="text-sm text-muted-foreground">{category.description}</p>
                  </div>
                </div>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional Skills Note */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 border border-border rounded-full">
              <span className="w-2 h-2 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">
                Continuously expanding knowledge through hands-on labs and certifications
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
