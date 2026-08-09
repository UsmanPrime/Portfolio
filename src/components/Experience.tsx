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
    icon: Monitor,
    type: "Internship",
    title: "Security Research Intern",
    organization: "NetraLink Solutions",
    period: "Jul 2026 - Present",
    highlights: [
      "Help develop DeWall, a self-hosted enterprise DNS Firewall and Management Platform, focusing mostly on security engineering and testing.",
      "Build backend pipelines to pull in external threat intelligence feeds and create secure data models for network security.",
      "Write fast, stateless microservices in Golang to evaluate DNS queries in real-time, and build out the frontend domain structures using React and TypeScript.",
      "Built an API interception layer to simulate our live backend, which lets us generate realistic data for offline product demos safely.",
    ],
  },
  {
    icon: Target,
    type: "Internship",
    title: "SOC Analyst",
    organization: "Tech Hierarchy",
    period: "Mar 2026 - Mar 2026",
    highlights: [
      "Investigated over 30 daily security alerts using Wazuh and Splunk. I mapped events to MITRE ATT&CK TTPs to classify indicators of compromise and cut down on false positives.",
      "Looked through endpoint telemetry, machine behavior, and network logs to spot signs of compromise and wrote up formal incident reports.",
      "Set up my own SOC lab with Wazuh and the ELK Stack to simulate attacks like lateral movement and credential dumping, which helped me test and validate detection rules.",
    ],
    certificateUrl: "/Tech%20Hierarchy%20Internship%20Certificate.pdf",
    certificateLabel: "Certificate of Completion",
  },
  {
    icon: Monitor,
    type: "Challenge Author",
    title: "NASCON 2026 Forensics Arena",
    organization: "FAST NUCES Islamabad",
    period: "Feb 2026 - Aug 2026",
    highlights: [
      "Designed a hard-level memory forensics challenge that simulated a fileless credential dumping attack based on MITRE T1003.001.",
      "Wrote a PowerShell script to simulate real attacker behaviors, including enabling WDigest, faking C2 beacons, and embedding Mimikatz artifacts.",
      "Participants had to use Volatility 3 to analyze Windows memory images, find the process injection, and extract NTLM hashes.",
    ],
  },
  {
    icon: Award,
    type: "Organizer & Author",
    title: "RDX National CTF",
    organization: "RDX",
    period: "Jun 2025 - Jul 2025",
    highlights: [
      "Created 6 challenges focusing on log analysis, network traffic, suspicious artifacts, and file-embedded forensics for a national CTF.",
      "Tested the blue-team and DFIR skills of over 100 participants in a time-constrained environment.",
    ],
  },
  {
    icon: BookOpen,
    type: "Technical Team & Head of Finance",
    title: "Cyber Space Legion (CSL)",
    organization: "FAST NUCES",
    period: "Sep 2024 - Present",
    highlights: [
      "Technical Team Member: Help run cybersecurity workshops and CTFs that focus on threat detection, incident response, and forensics.",
      "Head of Finance (2025 - Present): Manage the finance team, handle budgeting, and plan finances for our society's operations and major events.",
    ],
  },
  {
    icon: Briefcase,
    type: "Internship (Additional)",
    title: "Business Development Intern",
    organization: "Intellema",
    period: "May 2026 - Present",
    highlights: [
      "Manage the business development cycle for enterprise AI solutions, from researching clients to writing technical proposals that win contracts.",
      "Set up strategies to find new clients in healthcare, fintech, and AI using CRM tools and data enrichment.",
      "Create system architecture diagrams for complex pipelines like multi-agent workflows and computer vision systems to help clients understand our solutions.",
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
    <section id="experience" className="py-24 relative bg-secondary/30">
      <div className="absolute inset-0 grid-bg opacity-8" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`mb-12 transition-all duration-500 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="section-title">Experience & Achievements</h2>
            <p className="section-subtitle mt-4">
              Professional roles across cybersecurity SOC operations, AI solution support, challenge authoring, and competition achievements
            </p>
          </div>

          {/* Timeline — structured list, not alternating */}
          <div
            ref={timelineRef}
            className="space-y-3"
          >
            {experiences.map((exp, index) => {
              const isCSL = exp.title === "Cyber Space Legion (CSL)";
              return (
                <div
                  key={exp.title}
                  className={`intel-card transition-all duration-500 ${
                    timelineRevealed
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-6"
                  }`}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  {/* Header — structured like a report entry */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-border/60">
                    <div className="flex items-center gap-2.5">
                      <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <exp.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <span className="data-label">{exp.type}</span>
                        <h3 className="text-sm font-semibold text-foreground">{exp.title}</h3>
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="font-mono text-[11px] text-muted-foreground tabular-nums">
                        {exp.period}
                      </div>
                      <div className="text-[11px] text-muted-foreground/60">
                        {exp.organization}
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="space-y-1.5">
                    {exp.highlights.map((item, i) => {
                      // Special formatting for CSL Head of Finance bullet
                      const isFinanceBullet = isCSL && item.includes("Head of Finance");

                      return (
                        <div
                          key={item}
                          className={`flex items-start gap-2 text-[13px] ${
                            isFinanceBullet ? 'text-foreground' : 'text-muted-foreground'
                          }`}
                        >
                          <span className="font-mono text-primary/60 select-none mt-px">▸</span>
                          <span className="leading-relaxed">
                            {isFinanceBullet ? (
                              <>
                                <span className="font-semibold text-primary">Head of Finance (2025 – Present):</span>
                                {" "}Directed a cross-functional finance team for flagship events including NASCON and internal competitions.
                                Managed end-to-end sponsorship acquisition and partner relations, securing funding for society operations.
                                Oversaw team duty allocation, budgeting workflows, and financial reporting to society leadership.
                              </>
                            ) : (
                              item
                            )}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {exp.certificateUrl && (
                    <div className="mt-3 pt-3 border-t border-border/40">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-7 px-2 text-primary hover:text-primary hover:bg-primary/10 gap-1 text-xs transition-all duration-200 hover:scale-105"
                        asChild
                      >
                        <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                          {exp.certificateLabel ?? "View Certificate"}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Achievements */}
          <div
            ref={achieveRef}
            className={`mt-16 transition-all duration-500 ${
              achieveRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              <span className="text-primary font-mono text-sm mr-2">▎</span>
              Competition Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-3">
              {achievements.map((a, i) => (
                <div
                  key={a.title}
                  className="intel-card group"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <a.icon className="w-4 h-4 text-primary" />
                    <h4 className="text-sm font-semibold group-hover:text-primary transition-colors duration-150">
                      {a.title}
                    </h4>
                  </div>
                  <p className="text-[11px] font-mono text-primary/70 mb-2">
                    {a.detail}
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {a.description}
                  </p>
                  {a.certificateUrl && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="mt-2 h-6 px-1.5 text-primary hover:bg-primary/10 gap-1 text-[11px] transition-all duration-200 hover:scale-105"
                      asChild
                    >
                      <a href={a.certificateUrl} target="_blank" rel="noopener noreferrer">
                        Certificate <ExternalLink className="w-2.5 h-2.5" />
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
