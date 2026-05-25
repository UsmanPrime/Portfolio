import { ShieldCheck, Search, Activity, Lock } from "lucide-react";
import usmanPhoto from "@/assets/usman.jpg";
import { useScrollReveal, useCountUp } from "@/hooks/useAnimations";

const About = () => {
  const { ref: sectionRef, isRevealed: sectionRevealed } = useScrollReveal();
  const { ref: statsRef, isRevealed: statsRevealed } = useScrollReveal();
  const { count: alertCount, ref: alertRef } = useCountUp(30, 2000);
  const { count: attackScenarios, ref: attackRef } = useCountUp(5, 1500);

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
      icon: Activity,
      title: "Threat Detection",
      description:
        "Built SOC labs simulating lateral movement, privilege escalation, and credential dumping; refined detection rules cutting MTTD by 30%.",
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
      <div className="container mx-auto px-4">
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
                <div className="w-44 h-44 rounded-full overflow-hidden border-4 border-primary/30 shadow-xl shadow-primary/10 transition-all duration-500 group-hover:border-primary/60 group-hover:shadow-2xl group-hover:shadow-primary/20">
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
              Cybersecurity student specializing in SOC operations, Digital Forensics and Incident Response (DFIR), 
              and threat detection with hands-on SIEM experience
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
                  (2024–2028), specializing in SOC operations, DFIR, and threat
                  detection. I have hands-on experience triaging 30+ daily security
                  alerts and conducting real-time monitoring using industry-standard
                  SIEM platforms including Splunk, Wazuh, and Elastic Stack.
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
                  I am proficient in log analysis, endpoint telemetry, IOC identification,
                  and MITRE ATT&CK-mapped threat hunting, seeking a SOC Analyst Internship
                  to apply blue-team expertise in a professional security operations environment.
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
                <div className="cyber-card text-center py-5 group" ref={attackRef}>
                  <div className="stat-number">{attackScenarios}+</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    Attack Scenarios Simulated
                  </div>
                </div>
                <div className="cyber-card text-center py-5 group">
                  <div className="stat-number">20%</div>
                  <div className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                    False Positive Reduction
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Focus Areas */}
            <div className="grid sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="cyber-card group cursor-default"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <area.icon className="w-6 h-6 text-primary transition-colors duration-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
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
