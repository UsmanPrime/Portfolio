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
    title: "Security Operations",
    description: "Core SOC and incident handling capabilities",
    skills: [
      "SOC Operations",
      "Incident Response",
      "DFIR",
      "SIEM Workflows",
      "Log Analysis",
      "Security Event Triage",
    ],
  },
  {
    icon: Monitor,
    title: "SIEM & Analysis",
    description: "Monitoring, correlation, and investigation",
    skills: [
      "Splunk",
      "Wazuh",
      "Elastic",
      "Log Analysis",
      "Alert Correlation",
      "Telemetry Review",
      "Threat Detection",
    ],
  },
  {
    icon: Wrench,
    title: "Security Tooling",
    description: "Platforms used for operations and investigation",
    skills: [
      "Wireshark",
      "Linux",
      "Docker",
      "Git",
      "Volatility 3",
      "Windows Event Logs",
    ],
  },
  {
    icon: Server,
    title: "Core Concepts",
    description: "Foundational technical knowledge",
    skills: [
      "Network Security",
      "Digital Forensics",
      "Data Structures",
      "Object-Oriented Programming",
      "Secure System Design",
    ],
  },
  {
    icon: Code,
    title: "Languages",
    description: "Programming and scripting stack",
    skills: [
      "Python",
      "C++",
      "JavaScript",
      "Bash",
      "TypeScript",
    ],
  },
  {
    icon: Terminal,
    title: "Professional Workflow",
    description: "Hands-on engineering and analyst practices",
    skills: [
      "Attack Simulation Labs",
      "SOC Playbooks",
      "Artifact Investigation",
      "Challenge Authoring",
      "Technical Documentation",
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
