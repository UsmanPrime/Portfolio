import { netraLinkPeriod } from "@/data/profile";
import LiveTerminal from "./LiveTerminal";

const focusAreas = [
    {
      title: "SOC Operations",
      description: "Triaged 30+ daily alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to classify IOCs and escalate incidents.",
      metric: "30+ alerts/day",
    },
    {
      title: "Digital Forensics",
      description: "Analyzed memory, endpoint telemetry, and network artifacts using Volatility 3, Autopsy, and Belkasoft to identify compromise indicators.",
      metric: "5+ lab scenarios",
    },
    {
      title: "Full-Stack Development",
      description: "Building production MERN applications with secure authentication (JWT, TOTP, reCAPTCHA), RBAC, and hardened APIs with Helmet.js and CSRF protection.",
      metric: "Next.js / MERN",
    },
    {
      title: "Systems Programming",
      description: "Engineering low-level systems in x86 Assembly and C++ with custom data structures, Win32 API integration, and SFML-based game physics.",
      metric: "x86 MASM / C++",
    },
    {
      title: "AI Solution Support",
      description: "Supporting AI opportunity discovery and proposal preparation across RAG, LLMs, Deep Learning, Generative AI, Voice AI, and Agentic AI.",
      metric: "B2B / RAG",
    },
  ];

const About = () => (
  <section id="about" aria-labelledby="about-heading" className="section-narrative">
    <div className="layout-container">
      <div className="content-standard">
        <header className="about-introduction">
          <h2 id="about-heading" className="section-title">About</h2>
          <p className="about-summary">
            Focused on Security Engineering, SOC/DFIR, and Detection Engineering,
            supported by hands-on full-stack development and systems programming
          </p>
        </header>
        <div className="about-layout">
          <div className="about-narrative">
            <figure className="about-profile">
              <div className="about-portrait panel-static">
                <picture>
                  <source type="image/avif" srcSet="/portrait/usman-192.avif 192w, /portrait/usman-384.avif 384w" sizes="(max-width: 1066px) 128px, (max-width: 1600px) 12vw, 192px" />
                  <source type="image/webp" srcSet="/portrait/usman-192.webp 192w, /portrait/usman-384.webp 384w" sizes="(max-width: 1066px) 128px, (max-width: 1600px) 12vw, 192px" />
                  <img src="/portrait/usman-192.jpg" srcSet="/portrait/usman-192.jpg 192w, /portrait/usman-384.jpg 384w" sizes="(max-width: 1066px) 128px, (max-width: 1600px) 12vw, 192px" loading="lazy" decoding="async" width={192} height={192} alt="Usman Ibrahim" />
                </picture>
              </div>
              <figcaption>
                <p className="text-foreground font-medium">Usman Ibrahim</p>
                <p>BS Cyber Security</p>
                <p>FAST NUCES Islamabad '28</p>
                <p>Blue Team · Detection Engineering</p>
              </figcaption>
            </figure>
            <div className="about-bio">
<p>I'm currently pursuing my BS in Cyber Security at FAST NUCES Islamabad. <strong className="about-focus primary-fact">My focus is Security Engineering, SOC/DFIR, and Detection Engineering.</strong> Most recently, I've been heavily focused on hardening production platforms, like a POS Inventory System, against SQL injection, XSS, and privilege escalation using layered RBAC and strict input validation.</p>
<p>My hands-on experience includes working as a <a className="editorial-link" href="#experience">Security Engineering Intern at NetraLink Solutions</a>, where I led the analytics and security testing for an enterprise DNS firewall, actively finding and patching authentication gaps and CORS misconfigurations. As a <a className="editorial-link" href="#experience">SOC Team Intern at ITSOLERA</a>, I worked on Wazuh/ELK deployment, detection rules, IOC enrichment, and alert automation. Before that, as a <a className="editorial-link" href="#experience">SOC Analyst Intern at Tech Hierarchy</a>, I spent my days triaging security alerts in Splunk and Wazuh, mapping IOCs back to the MITRE ATT&CK framework to weed out false positives.</p>
<p>I am also deeply involved in the security community — designing hard-level memory forensics challenges for national CTFs and bringing experience driving B2B sales cycles for enterprise AI solutions at Intellema. I focus on the intersection of detection engineering and secure software development, building the tools SOC teams rely on while staying sharp on the analyst side.</p>
            </div>
            <p className="about-evidence">
              Hands-on experience across <strong>30+ alerts/day</strong>, <strong>8 projects</strong>,
              and <strong>5+ lab scenarios</strong>.
            </p>
          </div>
          <aside className="about-support" aria-label="Profile and current focus">
            <section className="about-status panel-static" aria-labelledby="about-status-heading">
              <h3 id="about-status-heading">system_status.sh</h3>
              <dl>
                <div><dt>[FOCUS]</dt><dd>Security Engineering · SOC/DFIR</dd></div>
                <div><dt>[ROLE]</dt><dd>Detection Engineering</dd></div>
                <div><dt>[RECENT]</dt><dd>NetraLink Solutions · {netraLinkPeriod}</dd></div>
                <div><dt className="text-warning">[LATEST]</dt><dd>CDSA Certification (In Progress)</dd></div>
              </dl>
            </section>
            <LiveTerminal />
            <p className="about-credentials">
              ISO/IEC 27001:2022
              <span className="text-warning">CDSA — In Progress</span>
            </p>
          </aside>
        </div>
        <section className="about-manifest" aria-labelledby="about-competencies-heading">
          <header>
            <h3 id="about-competencies-heading">Core Competencies</h3>
            <span className="font-mono text-xs text-muted-foreground">~/competencies / 5 entries</span>
          </header>
          <dl>
            {focusAreas.map((area) => (
              <div key={area.title} className="about-manifest-row">
                <dt>{area.title}</dt>
                <dd>
                  <span className="about-manifest-context">{area.metric}</span>
                  <p>{area.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </div>
  </section>
);

export default About;
