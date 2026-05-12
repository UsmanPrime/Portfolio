import { ShieldCheck, Search, Activity, Lock } from "lucide-react";
import usmanPhoto from "@/assets/usman.jpg";

const About = () => {
  const focusAreas = [
    {
      icon: ShieldCheck,
      title: "SOC Monitoring",
      description: "Monitored and triaged alerts with SIEM tooling, MITRE ATT&CK mapping, and defined escalation paths.",
    },
    {
      icon: Search,
      title: "Forensics Investigation",
      description: "Analyzed memory, endpoint, and network artifacts to identify compromise indicators.",
    },
    {
      icon: Activity,
      title: "Detection Engineering",
      description: "Built SOC labs to simulate attacks, validate detection workflows, and tune alert thresholds.",
    },
    {
      icon: Lock,
      title: "AI Solution Support",
      description: "Supported AI solution discovery, client engagement, and proposal preparation across emerging use cases.",
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary/30 shadow-lg shadow-primary/20">
                  <img 
                    src={usmanPhoto} 
                    alt="Usman Ibrahim" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 rounded-full border-2 border-primary/50 animate-pulse"></div>
              </div>
            </div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle mx-auto">
              Cybersecurity and AI-focused student building practical experience across SOC operations, forensics, and business development
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am pursuing a BS in Cyber Security at FAST NUCES Islamabad (2024-2028), with a focus on defensive operations, threat hunting, incident investigation, secure system practices, and AI solution support.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  As a Business Development Intern at Intellema, I collaborate on AI opportunity discovery, client engagement, and solution design across RAG, LLMs, Deep Learning, Generative AI, Voice AI, computer vision, Agentic AI, ML Ops, and DevOps.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I also gained hands-on cybersecurity experience as a SOC Analyst Intern at Tech Hierarchy, where I triaged 30+ daily alerts in Wazuh and Splunk, correlated events against MITRE ATT&CK TTPs, and escalated confirmed incidents through SOC playbooks.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I built my profile through hands-on labs, competition performance, proposal work, and practical SOC execution aligned with DFIR and AI-focused career goals.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="cyber-card text-center py-4">
                  <div className="text-2xl font-bold text-primary">2024-28</div>
                  <div className="text-sm text-muted-foreground">BS Cyber Security</div>
                </div>
                <div className="cyber-card text-center py-4">
                  <div className="text-2xl font-bold text-accent">AI + SOC</div>
                  <div className="text-sm text-muted-foreground">Internship Experience</div>
                </div>
                <div className="cyber-card text-center py-4">
                  <div className="text-2xl font-bold text-foreground">Intellema</div>
                  <div className="text-sm text-muted-foreground">Business Development Intern</div>
                </div>
              </div>
            </div>

            {/* Right Column - Focus Areas */}
            <div className="grid sm:grid-cols-2 gap-4">
              {focusAreas.map((area, index) => (
                <div
                  key={area.title}
                  className="cyber-card group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <area.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">{area.title}</h4>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
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
