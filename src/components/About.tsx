import { ShieldCheck, Search, Activity, Lock, Code } from "lucide-react";
import usmanPhoto from "@/assets/usman.jpg";
import { useScrollReveal, useCountUp } from "@/hooks/useAnimations";

const About = () => {
  const { ref: sectionRef, isRevealed: sectionRevealed } = useScrollReveal();
  const { ref: statsRef, isRevealed: statsRevealed } = useScrollReveal();
  const { count: alertCount, ref: alertRef } = useCountUp(30, 2000);
  const { count: attackScenarios, ref: attackRef } = useCountUp(5, 1500);
  const { count: projectCount, ref: projectRef } = useCountUp(7, 1800);

  const focusAreas = [
    {
      icon: ShieldCheck,
      title: "SOC Operations",
      description:
        "Triaged 30+ daily alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to classify IOCs and escalate incidents.",
    },
    {
      icon: Search,
      title: "Digital Forensics",
      description:
        "Analyzed memory, endpoint telemetry, and network artifacts using Volatility 3, Autopsy, and Belkasoft to identify compromise indicators.",
    },
    {
      icon: Code,
      title: "Full-Stack Development",
      description:
        "Building production MERN applications with secure authentication (JWT, TOTP, reCAPTCHA), RBAC, and hardened APIs with Helmet.js and CSRF protection.",
    },
    {
      icon: Activity,
      title: "Systems Programming",
      description:
        "Engineering low-level systems in x86 Assembly and C++ with custom data structures, Win32 API integration, and SFML-based game physics.",
    },
    {
      icon: Lock,
      title: "AI Solution Support",
      description:
        "Supporting AI opportunity discovery and proposal preparation across RAG, LLMs, Deep Learning, Generative AI, Voice AI, and Agentic AI.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div
            ref={sectionRef}
            className={`mb-12 transition-all duration-500 ${
              sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="section-title">About</h2>
            <p className="section-subtitle mt-4">
              Cybersecurity professional with hands-on experience in SOC operations, full-stack web development,
              and systems programming
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left Column — Photo + Stats */}
            <div className="lg:col-span-2 space-y-6">
              {/* Photo */}
              <div className="intel-card flex items-center gap-4 p-4">
                <div className="w-20 h-20 rounded-md overflow-hidden border border-border shrink-0">
                  <img
                    src={usmanPhoto}
                    alt="Usman Ibrahim"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">Usman Ibrahim</h3>
                  <p className="text-xs text-muted-foreground">BS Cyber Security</p>
                  <p className="text-xs text-muted-foreground">FAST NUCES '28</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    <span className="text-[11px] font-mono text-accent">Available</span>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div
                ref={statsRef}
                className={`grid grid-cols-3 gap-3 transition-all duration-500 ${
                  statsRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                <div className="intel-card text-center py-4" ref={alertRef}>
                  <div className="stat-number text-2xl">{alertCount}+</div>
                  <div className="data-label mt-1">Alerts/Day</div>
                </div>
                <div className="intel-card text-center py-4" ref={projectRef}>
                  <div className="stat-number text-2xl">{projectCount}</div>
                  <div className="data-label mt-1">Projects</div>
                </div>
                <div className="intel-card text-center py-4" ref={attackRef}>
                  <div className="stat-number text-2xl">{attackScenarios}+</div>
                  <div className="data-label mt-1">Lab Scenarios</div>
                </div>
              </div>

              {/* Bio */}
              <div className="intel-card">
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                  Pursuing a BS in Cyber Security at FAST NUCES Islamabad (2024–2028) with hands-on experience in SOC operations, full-stack web development, and systems programming.
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                  As a Business Development Intern at Intellema, I collaborate with a cross-functional team of 8+ professionals to identify opportunities for advanced AI solutions including RAG, LLM, Deep Learning, Generative AI, and Voice AI.
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">
                  As a SOC Analyst Intern at Tech Hierarchy, I triaged and investigated 30+ daily alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to reduce false-positive rates by 20% and escalate confirmed incidents per SOC runbooks.
                </p>
                <p className="text-[13px] text-muted-foreground leading-relaxed">
                  Strong foundation in OOP, data structures, network architecture, and MITRE ATT&CK-mapped threat analysis. Seeking an internship to apply cross-domain technical expertise in a professional engineering environment.
                </p>
              </div>
            </div>

            {/* Right Column — Focus Areas */}
            <div className="lg:col-span-3 space-y-3">
              <div className="data-label mb-3">Core Competencies</div>
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`intel-card group transition-all duration-400 ${
                    sectionRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                  style={{ transitionDelay: `${index * 60 + 150}ms` }}
                >
                  <div className="flex items-start gap-3">
                    <area.icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <div>
                      <h4 className="text-sm font-semibold mb-1 group-hover:text-primary transition-colors duration-150">
                        {area.title}
                      </h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {area.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
