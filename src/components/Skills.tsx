import SkillGraph from "./SkillGraph";

const skillGroups = [
  {
    title: "Security Operations",
    domain: "security" as const,
    skills: [
      { name: "SOC Operations" },
      { name: "Alert Triage" },
      { name: "Incident Response" },
      { name: "DFIR" },
      { name: "Threat Hunting" },
      { name: "IOC Analysis" },
      { name: "Splunk" },
      { name: "Wazuh" },
      { name: "Elastic Stack (ELK)" },
      { name: "Wireshark" },
      { name: "Volatility 3" },
      { name: "MITRE ATT&CK" },
      { name: "n8n (SOAR)" },
      { name: "CDB Threat-Intel Lists" },
    ],
  },
  {
    title: "Application Security",
    domain: "security" as const,
    skills: [
      { name: "RBAC" },
      { name: "Row Level Security (RLS)" },
      { name: "Input Validation (Zod)" },
      { name: "SQLi/XSS Prevention" },
      { name: "JWT Session Hardening" },
      { name: "CSP / HSTS" },
      { name: "Rate Limiting" },
      { name: "IAM / Secrets Management" },
      { name: "gosec (SAST)" },
    ],
  },
  {
    title: "Full-Stack Development",
    domain: "dev" as const,
    skills: [
      { name: "React 18" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "REST APIs" },
      { name: "Tailwind CSS" },
      { name: "Helmet.js" },
      { name: "JWT Authentication" },
      { name: "Next.js" },
      { name: "Vercel" },
    ],
  },
  {
    title: "Systems & Languages",
    domain: "dev" as const,
    skills: [
      { name: "Python" },
      { name: "Go (Golang)" },
      { name: "C++" },
      { name: "x86 Assembly (MASM32)" },
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "Bash" },
      { name: "PowerShell" },
    ],
  },
  {
    title: "Network & Infrastructure",
    domain: "security" as const,
    skills: [
      { name: "TCP/IP" },
      { name: "DNSSEC / RPZ" },
      { name: "OSPF" },
      { name: "EIGRP" },
      { name: "RIPv2" },
      { name: "NAT" },
      { name: "Extended ACLs" },
      { name: "Cisco Packet Tracer" },
      { name: "Docker" },
      { name: "Linux" },
    ],
  },
  {
    title: "Software Engineering",
    domain: "dev" as const,
    skills: [
      { name: "OOP" },
      { name: "Data Structures & Algorithms" },
      { name: "SOLID Principles" },
      { name: "Design Patterns" },
      { name: "Git" },
      { name: "GitHub Actions" },
      { name: "CMake" },
      { name: "Agile" },
    ],
  },
];

// Evidence is drawn from the existing Experience and Projects content, not proficiency scores.
const primaryExpertise = [
  { name: "Splunk", evidence: "Triaged 30+ daily security alerts using Splunk and Wazuh at Tech Hierarchy." },
  { name: "Wazuh", evidence: "Used alongside Splunk to classify indicators and escalate confirmed incidents under Tech Hierarchy's SOC runbooks." },
  { name: "MITRE ATT&CK", evidence: "Correlated IOCs against ATT&CK TTPs during daily alert triage at Tech Hierarchy." },
  { name: "React", evidence: "Architected and launched this responsive portfolio with React, TypeScript, Tailwind CSS, and Vite." },
  { name: "RBAC", evidence: "Engineered access controls across the PIMS client UI, edge middleware, and server APIs to prevent privilege escalation." },
  { name: "Volatility 3", evidence: "Authored a hard-category memory forensics challenge requiring Volatility 3 analysis of MITRE T1003.001." },
];

const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading" className="section-dense">
    <div className="layout-container">
      <div className="content-standard">
        <header className="skills-introduction">
          <h2 id="skills-heading" className="section-title">Technical Skills</h2>
          <p className="section-subtitle">
            Cross-domain expertise spanning defensive security, full-stack development, systems programming, and network architecture
          </p>
        </header>

        <div className="skills-exploration">
        <div className="skills-inventory">
          {skillGroups.map((group) => (
            <section key={group.title} className="skills-category" data-domain={group.domain} aria-labelledby={`skills-${group.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
              <header>
                <h3 id={`skills-${group.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}>{group.title}</h3>
                <p>{group.domain === "security" ? "Security / Defensive" : "Development / Systems"}</p>
              </header>
              <ul className="skills-tags" aria-label={`${group.title} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill.name}><span className="skills-tag">{skill.name}</span></li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <SkillGraph groups={skillGroups} />
        </div>
        <section className="skills-evidence" aria-labelledby="skills-evidence-heading">
          <h3 id="skills-evidence-heading">Primary Expertise</h3>
          <dl>
            {primaryExpertise.map((skill) => (
              <div key={skill.name}>
                <dt>{skill.name}</dt>
                <dd>{skill.evidence}</dd>
              </div>
            ))}
          </dl>
          <nav className="evidence-sources" aria-label="Skills evidence sources">
            <a className="editorial-link" href="#experience">SOC &amp; forensics experience</a>
            <a className="editorial-link" href="#projects">Applied development</a>
            <a className="editorial-link" href="#certifications">Credentials</a>
          </nav>
        </section>
        <p className="skills-note">
          Continuously expanding through hands-on labs, certifications, and CTF competitions
        </p>
      </div>
    </div>
  </section>
);

export default Skills;
