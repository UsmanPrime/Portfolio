import { FileText, Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { netraLinkPeriod } from "@/data/profile";

const Resume = () => {

  return (
    <section id="resume" className="section-dense relative bg-secondary/30 overflow-hidden">
      <div className="layout-container relative z-10">
        <div className="content-reading">
          {/* Header */}
          <div
            className="section-heading"
          >
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle mt-4">
              Download my full professional resume for a complete academic and career history
            </p>
          </div>

          {/* Resume download */}
          <div
            className="resume-download panel-interactive flex flex-col sm:flex-row items-center justify-between"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-secondary/10 rounded-md">
                <FileText className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Full Resume</h3>
                <p className="text-[13px] text-muted-foreground mt-0.5">
                  Security Engineering | SOC/DFIR | Detection Engineering
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 magnetic-btn rounded-sm text-sm px-4 h-10"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" download>
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </Button>
              <Button
                size="sm"
                variant="outline"
                className="gap-1.5 rounded-sm text-sm px-4 h-10 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                asChild
              >
                <a href="/Usman_Ibrahim.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-4 h-4" />
                  View Online
                </a>
              </Button>
            </div>
          </div>

          {/* Minimalist Academic & Key Timeline Summary */}
          <div 
          >
            <div className="flex items-center gap-4 mb-8 text-muted-foreground">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" /> Academic & Professional Timeline
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            <div className="resume-timeline space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">Aug 2024 — Jun 2028</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">BS Cyber Security</h4>
                  <p className="text-[13px] text-muted-foreground mt-1">FAST NUCES Islamabad</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">{netraLinkPeriod}</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Security Engineering Intern</h4>
                  <p className="text-[13px] text-muted-foreground mt-1">NetraLink Solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">Jul — Aug 2026</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">SOC Team Intern</h4>
                  <p className="text-[13px] text-muted-foreground mt-1">ITSOLERA · Remote</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">Mar 2026</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">SOC Analyst</h4>
                  <p className="text-[13px] text-muted-foreground mt-1">Tech Hierarchy</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Resume;
