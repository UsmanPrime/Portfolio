import { BookOpen, Monitor, Target, Award, Briefcase, ExternalLink, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

interface ExperienceItem {
  icon: typeof BookOpen;
  type: string;
  title: string;
  organization: string;
  location?: string;
  period: string;
  highlights: string[];
  certificateUrl?: string;
  certificateLabel?: string;
}

const experiences: ExperienceItem[] = [
  {
    icon: Briefcase,
    type: "Internship",
    title: "Business Development Intern",
    organization: "Intellema",
    period: "May 2026 – Present",
    highlights: [
      "Collaborated with a cross-functional team of 8+ professionals to identify opportunities for advanced AI solutions including RAG, LLM, Deep Learning, Generative AI, and Voice AI.",
      "Contributed to proposal preparation and AI-driven project initiatives, demonstrating understanding of enterprise AI integration approaches and best practices across industries.",
    ],
  },
  {
    icon: Target,
    type: "Internship",
    title: "SOC Analyst Intern",
    organization: "Tech Hierarchy",
    period: "March 2026",
    highlights: [
      "Triaged and investigated 30+ daily security alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to classify IOCs, reduce false-positive rates by 20%, and escalate confirmed incidents per established SOC runbooks.",
      "Conducted in-depth analysis of 500+ endpoint telemetry records, machine behavior patterns, and network logs per week to detect IOCs; documented findings in structured incident reports, improving documentation quality by 30%.",
      "Constructed a personal SOC lab using Wazuh and ELK Stack to simulate 5+ attack scenarios (lateral movement, privilege escalation, credential dumping), then refined detection rules, cutting MTTD by 30%.",
    ],
    certificateUrl: "/Tech%20Hierarchy%20Internship%20Certificate.pdf",
    certificateLabel: "Certificate of Completion",
  },
  {
    icon: Monitor,
    type: "Challenge Author",
    title: "NASCON 2026 Forensics Arena",
    organization: "FAST NUCES Islamabad",
    period: "Feb 2026 – Apr 2026",
    highlights: [
      "Authored a hard-category memory forensics challenge simulating a fileless credential dumping attack (MITRE T1003.001).",
      "Required participants to analyse a Windows memory image with Volatility 3 to identify process injection, extract NTLM hashes, and recover plaintext credentials — completed by fewer than 10% of competitors.",
    ],
  },
  {
    icon: Award,
    type: "Organizer & Author",
    title: "RDX National CTF",
    organization: "RDX",
    period: "Jun 2025 – Jul 2025",
    highlights: [
      "Authored and deployed 6 challenges covering log analysis, network traffic analysis, suspicious artifact investigation, and file-embedded forensics for a national-level CTF.",
      "Challenges assessed blue-team and DFIR skills for 100+ participants under time-constrained conditions.",
    ],
  },
  {
    icon: Monitor,
    type: "Technical Team & Head of Finance",
    title: "Cyber Space Legion (CSL)",
    organization: "FAST NUCES - University Cybersecurity Society",
    period: "Sep 2024 – Present",
    highlights: [
      "Technical Team Member: CTF participation, forensics challenge authoring, and blue-team skills workshops for junior members.",
      "Head of Finance (2025 – Present): Led finance team for flagship events, managed sponsor relations, and oversaw budgeting and financial reporting.",
    ],
  },
];

const achievements = [
  {
    icon: Trophy,
    title: "3rd Place — SudoFuzzers CTF",
    detail: "Forensics & OSINT | 2025",
    description: "Ranked 3rd out of 50+ teams solving digital forensics and OSINT challenges under a 4-hour time constraint, placing in the top 6%.",
    certificateUrl: "/SudoFuzzers%20CTF%20certificate.pdf",
  },
  {
    icon: Trophy,
    title: "7th Place — CyberFest 2025",
    detail: "National CTF | 2025",
    description: "Secured 7th place in a highly competitive national CTF with 100+ teams, finishing in the top 7% across forensics, OSINT, and network analysis.",
  },
  {
    icon: Award,
    title: "Star of CyberFest '25",
    detail: "Individual Recognition | 2025",
    description: "Received individual recognition award at CyberFest 2025 for outstanding performance and team coordination.",
  },
];

const Experience = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: timelineRef, isRevealed: timelineRevealed } = useScrollReveal({ threshold: 0.05 });
  const { ref: achieveRef, isRevealed: achieveRevealed } = useScrollReveal();

  return (
    <section id="experience" className="py-28 relative bg-secondary/20">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Experience & Achievements</h2>
            <p className="section-subtitle mx-auto mt-6">
              Professional roles across cybersecurity SOC operations, AI solution support, challenge authoring, and competition achievements
            </p>
          </div>

          {/* Timeline */}
          <div ref={timelineRef} className="relative">
            {/* Vertical Line with gradient */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px overflow-hidden">
              <div
                className={`w-full h-full transition-all duration-1000 ${
                  timelineRevealed ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  background: "linear-gradient(to bottom, transparent, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.3), transparent)",
                }}
              />
            </div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`relative flex flex-col md:flex-row gap-8 transition-all duration-700 ${
                    timelineRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  } ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background -translate-x-1.5 md:-translate-x-2 z-10 shadow-lg shadow-primary/30">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`ml-8 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <div className="cyber-card">
                      {/* Header */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                          <exp.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-primary font-semibold uppercase tracking-wider">
                            {exp.type}
                          </span>
                          <h3 className="font-semibold">{exp.title}</h3>
                          <span className="text-xs text-muted-foreground">
                            {exp.organization}
                          </span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-secondary/60 rounded-md text-xs text-muted-foreground border border-border/50">
                          {exp.location
                            ? `${exp.location} | ${exp.period}`
                            : exp.period}
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((item) => (
                            <li
                              key={item}
                              className="flex items-start gap-2 text-sm text-foreground/80"
                            >
                              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span className="leading-relaxed">{item}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.certificateUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2 gap-1.5 text-primary hover:text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-105"
                            asChild
                          >
                            <a
                              href={exp.certificateUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>
                                {exp.certificateLabel ?? "View Certificate"}
                              </span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div
            ref={achieveRef}
            className={`mt-20 transition-all duration-700 ${
              achieveRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-bold text-center mb-8 gradient-text">
              Competition Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              {achievements.map((a, i) => (
                <div
                  key={a.title}
                  className="cyber-card text-center group"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <a.icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300">
                    {a.title}
                  </h4>
                  <p className="text-xs text-primary/80 font-medium mb-2">
                    {a.detail}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                  {a.certificateUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-3 text-primary hover:bg-primary/10 gap-1 transition-all duration-300"
                      asChild
                    >
                      <a
                        href={a.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span>View Certificate</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </Button>
                  )}
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
