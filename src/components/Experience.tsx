import { BookOpen, Monitor, Target, Award } from "lucide-react";

interface ExperienceItem {
  icon: typeof BookOpen;
  type: string;
  title: string;
  platform?: string;
  monitored: string;
  analyzed: string;
  learned: string;
}

const experiences: ExperienceItem[] = [
  {
    icon: Target,
    type: "Practical Lab",
    title: "TryHackMe SOC Level 1 Path",
    platform: "TryHackMe",
    monitored: "Simulated enterprise network with various attack scenarios",
    analyzed: "Log files, SIEM alerts, and network traffic for threat indicators",
    learned: "SOC analyst workflow, alert triage, and incident classification",
  },
  {
    icon: Monitor,
    type: "Blue Team Lab",
    title: "Hack The Box Sherlocks",
    platform: "Hack The Box",
    monitored: "DFIR investigation scenarios with real-world attack artifacts",
    analyzed: "Memory dumps, event logs, network captures, and malware traces",
    learned: "Digital forensics methodology, evidence correlation, and incident reconstruction",
  },
  {
    icon: Award,
    type: "Seasonal Event",
    title: "Advent of the Relics - HTB Sherlocks",
    platform: "Hack The Box",
    monitored: "Holiday-themed DFIR challenges with progressive difficulty",
    analyzed: "Forensic artifacts across Windows, Linux, and cloud environments",
    learned: "Advanced timeline analysis, threat hunting, and artifact extraction techniques",
  },
  {
    icon: BookOpen,
    type: "Academic Project",
    title: "Network Security Capstone",
    monitored: "University lab network during controlled penetration test",
    analyzed: "Real-time alerts, traffic anomalies, and access patterns",
    learned: "Coordinating with red team, documenting findings, and reporting",
  },
  {
    icon: Award,
    type: "Competition",
    title: "CTF Competitions",
    monitored: "3rd place in SudoFuzzers CTF, 7th place in CyberFest '25",
    analyzed: "Forensics challenges, log puzzles, and incident scenarios under time pressure",
    learned: "Time-pressured analysis, team collaboration, and creative problem-solving",
  },
  {
    icon: Target,
    type: "CTF Organizer",
    title: "RDX CTF 2024 - Challenge Author",
    platform: "RDX CTF",
    monitored: "Designed and deployed forensics challenges for participants",
    analyzed: "Created challenges: Network Security, Log Analysis, PDF Embedded File Analysis",
    learned: "Challenge design, infrastructure deployment, and difficulty balancing",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Learning & Experience</h2>
            <p className="section-subtitle mx-auto">
              Hands-on learning through labs, simulations, and practical exercises
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 z-10" />

                  {/* Content Card */}
                  <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                    <div className="cyber-card">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-lg">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-primary font-medium uppercase tracking-wide">
                            {exp.type}
                          </span>
                          <h3 className="font-semibold">{exp.title}</h3>
                          {exp.platform && (
                            <span className="text-xs text-muted-foreground">{exp.platform}</span>
                          )}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="flex items-start gap-2">
                          <span className="text-xs text-muted-foreground font-medium min-w-[70px]">Monitored:</span>
                          <span className="text-sm text-foreground/80">{exp.monitored}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xs text-muted-foreground font-medium min-w-[70px]">Analyzed:</span>
                          <span className="text-sm text-foreground/80">{exp.analyzed}</span>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-xs text-muted-foreground font-medium min-w-[70px]">Learned:</span>
                          <span className="text-sm text-foreground/80">{exp.learned}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
