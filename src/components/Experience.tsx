import { Award, ExternalLink, Trophy, BookOpen, Monitor, Target, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { netraLinkPeriod } from "@/data/profile";

interface ExperienceItem {
  icon: typeof BookOpen;
  type: string;
  title: string;
  organization: string;
  period: string;
  isActive?: boolean;
  relevance?: number;
  highlights: string[];
  certificateUrl?: string;
  certificateLabel?: string;
}

const experiences: ExperienceItem[] = [
  {
    icon: Monitor,
    type: "Internship",
    title: "Security Engineering Intern",
    relevance: 4,
    organization: "NetraLink Solutions",
    period: netraLinkPeriod,
    certificateUrl: "/Netralink%20Internship%20Completion.pdf",
    certificateLabel: "Completion letter",
    highlights: [
      "Owned Analytics, Audit, and Reporting for DeWall, a self-hosted DNS Firewall platform (Go microservices, PostgreSQL, ClickHouse, React/TypeScript), combining security research with hands-on testing and development.",
      "Conducted comprehensive security and functional testing on the analytics pipeline, finding and fixing production-blocking issues including silent data loss in event handling and a hidden mock-data flag that was masking a real CORS misconfiguration.",
      "Identified and flagged an authentication gap in the API gateway allowing header-based user impersonation.",
      "Produced technical documentation including API documentation and internal security testing reports.",
    ],
  },
  {
    icon: Target,
    type: "Internship · Remote",
    title: "SOC Team Intern",
    organization: "ITSOLERA",
    certificateUrl: "/Itsolera%20Internship%20Completion.pdf",
    certificateLabel: "Completion letter",
    period: "Jul — Aug 2026",
    relevance: 3,
    highlights: [
      "Deployed Wazuh/ELK SIEM across Windows and Linux endpoints.",
      "Ingested Sysmon, Windows Defender, and file integrity monitoring (FIM) telemetry.",
      "Developed custom XML and YARA detection rules.",
      "Built a Python IOC-enrichment tool using VirusTotal and AbuseIPDB APIs, with CDB threat-intelligence lists.",
      "Automated Wazuh alerts through n8n workflows.",
      "Deployed pfSense with network segmentation.",
      "Investigated a live Lumma Stealer PCAP.",
      "Developed a NIST-aligned five-phase incident response plan.",
    ],
  },
  {
    icon: Target,
    type: "Internship",
    title: "SOC Analyst",
    relevance: 2,
    organization: "Tech Hierarchy",
    period: "Mar 2026",
    highlights: [
      "Triaged 30+ daily security alerts in Wazuh and Splunk, correlating IOCs against MITRE ATT&CK TTPs to classify indicators of compromise and escalate confirmed incidents per established SOC runbooks.",
      "Built a personal SOC lab with Wazuh and ELK, simulating lateral movement, privilege escalation, and credential dumping.",
    ],
    certificateUrl: "/Tech%20Hierarchy%20Internship%20Certificate.pdf",
    certificateLabel: "Certificate of Completion",
  },
  {
    icon: Monitor,
    type: "Challenge Author",
    relevance: 1,
    title: "NASCON 2026 Forensics Arena & RDX National CTF",
    organization: "FAST NUCES Islamabad",
    period: "Jun 2025 — Aug 2026",
    highlights: [
      "Authored Silent Harvest, a hard-category memory forensics challenge (MITRE T1003.001) requiring Volatility 3 analysis and NTLM hash extraction, and 6 additional challenges for RDX National CTF (100+ participants combined).",
    ],
  },
  {
    icon: BookOpen,
    type: "Head of Operations",
    title: "Cyber Space Legion (CSL)",
    organization: "FAST NUCES",
    period: "Sep 2024 — Present",
    isActive: true,
    highlights: [
      "Head of Operations (Sep 2026 – Present).",
      "Technical Team Member: Help run cybersecurity workshops and CTFs that focus on threat detection, incident response, and forensics.",
      "Head of Finance (Sep 2025 – Aug 2026): Manage the finance team, handle budgeting, and plan finances for our society's operations and major events.",
    ],
  },
  {
    icon: Briefcase,
    type: "Business Development",
    title: "Business Development Intern",
    organization: "Intellema",
    certificateUrl: "/Intellema%20Internship%20Completion.pdf",
    certificateLabel: "Completion letter",
    period: "May 2026 — Aug 2026",
    highlights: [
      "Managed the full B2B sales cycle for enterprise AI solutions (RAG, LLM, Voice AI, computer vision) at an AI consultancy, from client research to technical proposal writing and system architecture diagram design.",
      "Managed the company's Upwork profile, which holds Top Rated Plus status with 100% Job Success.",
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

  return (
    <section id="experience" className="section-standard relative bg-secondary/30 overflow-hidden">

      <div className="layout-container relative">
        <div className="content-standard">
          {/* Header */}
          <div
            className="section-heading"
          >
            <h2 className="section-title">Experience & Achievements</h2>
            <p className="section-subtitle mt-4">
              Professional roles across cybersecurity SOC operations, AI solution support, challenge authoring, and competition achievements
            </p>
          </div>

          {/* Timeline rail */}
          <div className="timeline-rail">
            {[...experiences].sort((a, b) => (b.relevance ?? 0) - (a.relevance ?? 0)).map((exp) => {
              const isCSL = exp.title === "Cyber Space Legion (CSL)";
              return (
                <div
                  key={exp.title}
                  className="timeline-entry"
                >
                  {/* Node — glowing dot instead of ASCII character */}
                  <span className={`timeline-node ${exp.isActive ? "timeline-node-active" : ""}`} aria-hidden="true">
                    <span className="timeline-node-dot" />
                  </span>

                  {/* Timestamp */}
                  <div className="timeline-timestamp">[{exp.period}]</div>

                  {/* Header row */}
                  <div className="experience-entry-header flex items-start justify-between gap-3 mb-2">
                    <div>
                      <span className="data-label block">{exp.type}</span>
                      <h3 className={`font-semibold leading-snug ${exp.relevance ? "text-lg text-primary" : "text-sm text-foreground"}`}>{exp.title}</h3>
                      <span className="text-[12px] text-muted-foreground">{exp.organization}</span>
                    </div>
                    {exp.certificateUrl && (
                      <Button
                        variant="ghost" size="sm"
                        className="h-7 px-2 text-primary hover:text-primary hover:bg-primary/10 gap-1 text-xs shrink-0"
                        asChild
                      >
                        <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer" aria-label={`${exp.certificateLabel ?? "Certificate"}: ${exp.organization}`}>
                          {exp.certificateLabel ?? "Certificate"} <ExternalLink className="w-3 h-3" />
                        </a>
                      </Button>
                    )}
                  </div>

                  {/* Highlights */}
                  <div className="experience-highlights space-y-1.5">
                    {exp.highlights.map((item) => {
                      const isFinanceBullet = isCSL && item.includes("Head of Finance");
                      return (
                        <div
                          key={item}
                          className={`flex items-start gap-2 text-[13px] ${isFinanceBullet ? "text-foreground" : "text-muted-foreground"}`}
                        >
                          <span className="font-mono text-foreground/40 select-none mt-px text-xs shrink-0">▸</span>
                          <span className="leading-relaxed">
                            {isFinanceBullet ? (
                              <>
                                <span className="font-semibold text-foreground">Head of Finance (Sep 2025 – Aug 2026):</span>
                                {" "}Directed a cross-functional finance team for flagship events including NASCON and internal competitions. Managed end-to-end sponsorship acquisition and partner relations, securing funding for society operations. Oversaw team duty allocation, budgeting workflows, and financial reporting to society leadership.
                              </>
                            ) : item}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Competition Achievements */}
          <div
            className="experience-achievements"
          >
            <h3 className="text-lg font-semibold mb-6 text-foreground">
              <span className="text-foreground font-mono text-sm mr-2">▎</span>
              Competition Achievements
            </h3>
            <div className="grid md:grid-cols-3 gap-3">
              {achievements.map((a) => (
                <div
                  key={a.title}
                  className="panel-static p-5"
                  style={{ borderTop: '2px solid hsl(35 78% 68% / 0.7)' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <a.icon className="w-6 h-6 text-warning" />
                    <h4 className="text-sm font-semibold transition-colors duration-150">
                      {a.title}
                    </h4>
                  </div>
                  <p className="text-[11px] font-mono text-foreground/70 mb-2">{a.detail}</p>
                  <p className="text-xs text-muted-foreground leading-relaxed">{a.description}</p>
                  {a.certificateUrl && (
                    <Button
                      variant="ghost" size="sm"
                      className="mt-2 h-6 px-1.5 text-primary hover:bg-primary/10 gap-1 text-[11px]"
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
