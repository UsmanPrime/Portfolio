import { FileText, Download, Shield, Monitor, Wrench, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const competencies = [
    {
      icon: GraduationCap,
      title: "Education",
      items: ["BS Cyber Security", "FAST NUCES Islamabad", "2024 - 2028"],
    },
    {
      icon: Monitor,
      title: "Experience",
      items: ["Business Development Intern", "Intellema", "May 2026 - Present"],
    },
    {
      icon: Shield,
      title: "Competitions",
      items: ["3rd Place - SudoFuzzers CTF", "7th Place - CyberFest 2025", "Forensics & OSINT Focus"],
    },
    {
      icon: Wrench,
      title: "Core Skills",
      items: ["SOC Operations & DFIR", "Splunk, Wazuh, Elastic, Wireshark", "Python, C++, JavaScript, Bash"],
    },
  ];

  return (
    <section id="resume" className="py-24 relative bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle mx-auto">
              Download my full resume or review key competencies across cybersecurity, AI support, and business development
            </p>
          </div>

          {/* Download Card */}
          <div className="cyber-card mb-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-primary/10 rounded-lg">
                <FileText className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Full Resume</h3>
                <p className="text-muted-foreground text-sm">
                  Complete professional background and qualifications
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" download>
                  <Download className="w-5 h-5" />
                  Download PDF
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                  View Online
                </a>
              </Button>
            </div>
          </div>

          {/* Competencies Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {competencies.map((comp, index) => (
              <div
                key={comp.title}
                className="cyber-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <comp.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-semibold">{comp.title}</h4>
                </div>
                <ul className="space-y-2">
                  {comp.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
