import { BookOpen, Monitor, Target, Award, Briefcase, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    period: "May 2026 - Present",
    highlights: [
      "Collaborate with a multidisciplinary team to identify and pursue business opportunities for advanced AI solutions including Retrieval-Augmented Generation (RAG), Large Language Models (LLM), Deep Learning (DL), Generative AI, and Voice AI.",
      "Support client engagement and solution design for diverse AI capabilities spanning computer vision, Agentic AI, ML Ops, and DevOps; analyze client requirements and recommend optimal delivery models tailored to business objectives.",
      "Contribute to business development initiatives and proposal preparation for AI-driven projects, demonstrating understanding of enterprise AI systems, integration approaches, and implementation best practices across industries.",
    ],
  },
  {
    icon: Target,
    type: "Internship",
    title: "SOC Analyst Intern",
    organization: "Tech Hierarchy",
    period: "1st Mar 2026 - 31st Mar 2026",
    highlights: [
      "Triaged and investigated 30+ daily security alerts in Wazuh and Splunk, correlating events against MITRE ATT&CK TTPs to classify IOCs, reduce false positives, and escalate confirmed incidents per established SOC runbooks and playbooks.",
      "Performed in-depth analysis of endpoint telemetry, machine behavior, and network logs to detect indicators of compromise (IOCs), support remediation actions, and document findings in incident reports.",
      "Deployed a personal SOC lab using Wazuh and ELK Stack to simulate 5+ attack scenarios including lateral movement, privilege escalation, and credential dumping; validated detection rules and refined alert thresholds to improve detection accuracy.",
    ],
    certificateUrl: "/Tech%20Hierarchy%20Internship%20Certificate.pdf",
    certificateLabel: "Certificate of Completion",
  },
  {
    icon: Monitor,
    type: "Challenge Author",
    title: "NASCON 2026 Forensics Arena",
    organization: "FAST NUCES",
    location: "Islamabad",
    period: "Feb 2026 - Apr 2026",
    highlights: [
      "Designed a hard memory forensics challenge simulating fileless credential dumping.",
      "Mapped behaviors to MITRE ATT&CK T1003.001.",
      "Required Volatility 3 analysis to detect injection and recover credentials.",
    ],
  },
  {
    icon: Award,
    type: "Organizer & Author",
    title: "RDX National CTF",
    organization: "RDX",
    period: "2025",
    highlights: [
      "Designed and deployed national-level log and network forensics challenges.",
      "Created suspicious-artifact and embedded-file investigation scenarios.",
      "Calibrated challenge difficulty across beginner and advanced tracks to ensure competitive balance for national-level participants.",
    ],
  },
  {
    icon: BookOpen,
    type: "Competition",
    title: "CTF Achievements",
    organization: "National Events",
    period: "2025",
    highlights: [
      "3rd Place - SudoFuzzers CTF (Forensics & OSINT).",
      "7th Place - CyberFest 2025.",
      "Star of CyberFest '25 Awardee - individual recognition award at CyberFest 2025.",
      "Demonstrated fast incident analysis and strong team coordination under time pressure.",
    ],
    certificateUrl: "/SudoFuzzers%20CTF%20certificate.pdf",
    certificateLabel: "SudoFuzzers Certificate",
  },
  {
    icon: Monitor,
    type: "Technical Team Member & Head of Finance",
    title: "Cyber Space Legion (CSL)",
    organization: "Cyber Space Legion",
    period: "Sep 2024 - Present",
    highlights: [
      "Contributing to blue-team workshops, CTF events, and technical initiatives focused on threat detection, incident response, and forensic analysis.",
      "Leading the finance team in budgeting and resource allocation for cybersecurity events, workshops, and society initiatives.",
    ],
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
              Professional roles across cybersecurity, AI solution support, challenge authoring, and competition achievements
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
                          <span className="text-xs text-muted-foreground">{exp.organization}</span>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="space-y-3">
                        <div className="text-xs text-muted-foreground">
                          {exp.location ? `${exp.location} | ${exp.period}` : exp.period}
                        </div>
                        <ul className="space-y-2">
                          {exp.highlights.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                              <span className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>

                        {exp.certificateUrl && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="mt-2"
                            asChild
                          >
                            <a href={exp.certificateUrl} target="_blank" rel="noopener noreferrer">
                              <span>{exp.certificateLabel ?? "View Certificate"}</span>
                              <ExternalLink className="w-4 h-4" />
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
        </div>
      </div>
    </section>
  );
};

export default Experience;
