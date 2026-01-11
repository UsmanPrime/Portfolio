import { ShieldCheck, Search, Activity, Lock } from "lucide-react";
import usmanPhoto from "@/assets/usman.jpg";

const About = () => {
  const focusAreas = [
    {
      icon: ShieldCheck,
      title: "Threat Defense",
      description: "Focused on protecting systems from malicious actors through proactive security measures.",
    },
    {
      icon: Search,
      title: "Investigation",
      description: "Analyzing security events and logs to identify potential threats and vulnerabilities.",
    },
    {
      icon: Activity,
      title: "Monitoring",
      description: "Continuous surveillance of systems and networks to detect anomalous behavior.",
    },
    {
      icon: Lock,
      title: "Incident Response",
      description: "Developing skills to effectively respond to and contain security incidents.",
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
              A dedicated cybersecurity student with a passion for defensive security operations
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <div className="cyber-card">
                <h3 className="text-xl font-semibold mb-4 text-primary">Who I Am</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm Usman Ibrahim, a BS Cyber Security student at FAST NUCES Islamabad with a 
                  strong focus on practical security, system analysis, and offensive-defensive 
                  problem solving.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I train with a professional security stack including Wireshark, Splunk, Windows 
                  Event Logs, Sysmon, and the Hack The Box CDSA learning path, where I practice 
                  threat detection, log analysis, incident investigation, and attacker tracking 
                  in realistic enterprise-style environments.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I actively participate in Capture-The-Flag (CTF) competitions, with particular 
                  strength in Digital Forensics and OSINT. I also solve cryptography challenges 
                  involving encoding, ciphers, and basic cryptanalytic techniques—building my 
                  ability to reason through incomplete data and identify patterns in adversarial problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm focused on understanding how systems fail, how attacks operate internally, 
                  and how to design defenses that hold up against real adversaries. My learning 
                  is driven by hands-on labs, adversary emulation, and continuous security research.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="cyber-card text-center py-4">
                  <div className="text-2xl font-bold text-primary">SOC</div>
                  <div className="text-sm text-muted-foreground">Focus Area</div>
                </div>
                <div className="cyber-card text-center py-4">
                  <div className="text-2xl font-bold text-accent">Blue</div>
                  <div className="text-sm text-muted-foreground">Team</div>
                </div>
                <div className="cyber-card text-center py-4">
                  <div className="text-2xl font-bold text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Learning</div>
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
