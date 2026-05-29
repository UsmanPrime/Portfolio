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
    <section id="about" className="py-28 relative">
      {/* Background blobs */}
      <div className="blob blob-primary w-[500px] h-[500px] top-20 -right-60" />
      <div className="blob blob-accent w-[400px] h-[400px] bottom-40 -left-40" style={{ animationDelay: '5s' }} />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={sectionRef}
            className={`text-center mb-16 transition-all duration-700 ${
              sectionRevealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group cursor-pointer">
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10 transition-all duration-700 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <img
                    src={usmanPhoto}
                    alt="Usman Ibrahim"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                {/* Animated ring */}
                <div className="absolute inset-[-4px] rounded-full border-2 border-primary/20 animate-border-glow" />
                <div className="absolute inset-[-12px] rounded-full border border-primary/10 animate-rotate-slow" />
                {/* Status dot */}
                <div className="absolute bottom-2 right-2 w-5 h-5 bg-accent rounded-full border-3 border-background shadow-lg shadow-accent/30">
                  <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-50" />
                </div>
              </div>
            </div>

            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto mt-6">
              Cybersecurity student with hands-on experience in SOC operations, full-stack web development, 
              and systems programming — seeking an internship to apply cross-domain technical expertise
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-4 gradient-text">
                  Who I Am
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am pursuing a BS in Cyber Security at FAST NUCES Islamabad
                  (2024–2028) with hands-on experience in SOC operations, full-stack web 
                  development, and systems programming. I am proficient in triaging 30+ daily 
                  security alerts using Splunk and Wazuh, building production MERN applications 
                  with secure authentication, and engineering low-level systems in x86 Assembly and C++.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a Business Development Intern at Intellema, I collaborate with a
                  cross-functional team of 8+ professionals to identify opportunities
                  for advanced AI solutions including RAG, LLM, Deep Learning,
                  Generative AI, and Voice AI.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a SOC Analyst Intern at Tech Hierarchy, I triaged and investigated
                  30+ daily alerts in Wazuh and Splunk, correlating events against
                  MITRE ATT&CK TTPs to reduce false-positive rates by 20% and escalate
                  confirmed incidents per SOC runbooks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Strong foundation in OOP, data structures, network architecture, and 
                  MITRE ATT&CK-mapped threat analysis. Seeking an internship to apply 
                  cross-domain technical expertise in a professional engineering environment.
                </p>
              </div>

              {/* Stats */}
              <div
                ref={statsRef}
                className={`grid grid-cols-3 gap-4 transition-all duration-700 delay-200 ${
                  statsRevealed
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
              >
                <div className="cyber-card text-center py-5 group" ref={alertRef}>
                  <div className="stat-number">{alertCount}+</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Daily Alerts Triaged
                  </div>
                </div>
                <div className="cyber-card text-center py-5 group" ref={projectRef}>
                  <div className="stat-number">{projectCount}</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Projects Built
                  </div>
                </div>
                <div className="cyber-card text-center py-5 group" ref={attackRef}>
                  <div className="stat-number">{attackScenarios}+</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Attack Scenarios
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Focus Areas */}
            <div className="space-y-4">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className={`cyber-card group cursor-default transition-all duration-700 ${
                    sectionRevealed ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 200}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10 shrink-0">
                      <area.icon className="w-5 h-5 text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1.5 group-hover:text-primary transition-colors duration-300">
                        {area.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
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
