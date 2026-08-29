import { FileText, Download, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useAnimations";

const Resume = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: contentRef, isRevealed: contentRevealed } = useScrollReveal();

  return (
    <section id="resume" className="py-24 relative bg-secondary/30 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-8" />

      {/* Ambient Document Motif */}
      <div className="absolute top-[10%] left-[-2%] sm:left-[5%] w-48 sm:w-80 h-64 sm:h-96 z-0 opacity-40 pointer-events-none">
        <motion.div 
          animate={{ y: [0, 20, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full border border-primary/30 rounded bg-background/20 relative overflow-hidden backdrop-blur-sm shadow-xl shadow-primary/10"
        >
          <div className="absolute top-6 left-6 right-6 h-2 sm:h-3 bg-primary/30 rounded" />
          <div className="absolute top-14 left-6 right-16 h-2 sm:h-3 bg-primary/20 rounded" />
          <div className="absolute top-22 left-6 right-10 h-2 sm:h-3 bg-primary/20 rounded" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border border-primary/50 rounded-full flex items-center justify-center">
            <motion.div animate={{ opacity: [1, 0, 1] }} transition={{ duration: 2, repeat: Infinity }} className="w-3 h-3 bg-primary rounded-full" />
          </div>
          <motion.div 
            animate={{ y: [-150, 400] }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-transparent via-primary/30 to-transparent"
          />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="section-title">Resume</h2>
            <p className="section-subtitle mt-4">
              Download my full professional resume for a complete academic and career history
            </p>
          </div>

          {/* Download Card (Updated to match Contact form style instead of intel-card) */}
          <div
            ref={contentRef}
            className={`p-7 rounded-xl bg-card/30 border border-primary/10 shadow-[0_0_40px_-15px_hsl(var(--primary)/0.05)] backdrop-blur-md mb-12 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-500 ${
              contentRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">Full Resume</h3>
                <p className="text-[13px] text-muted-foreground mt-0.5">
                  SOC Analyst | Cybersecurity Professional
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground gap-1.5 magnetic-btn rounded-lg text-sm px-4 h-10"
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
                className="gap-1.5 rounded-lg text-sm px-4 h-10 border-border hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
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
            className={`max-w-2xl transition-all duration-700 ${
              contentRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <div className="flex items-center gap-4 mb-8 opacity-60">
              <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest flex items-center gap-2">
                <GraduationCap className="w-3.5 h-3.5" /> Academic & Professional Timeline
              </span>
              <div className="flex-1 h-px bg-border" />
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">2024 — 2028</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">BS Cyber Security</h4>
                  <p className="text-[13px] text-muted-foreground mt-1">FAST NUCES Islamabad</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">Jul 2026 — Pres</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">Security Research Intern</h4>
                  <p className="text-[13px] text-muted-foreground mt-1">NetraLink Solutions</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="font-mono text-[12px] text-muted-foreground w-28 shrink-0 pt-0.5">Mar 2026</span>
                <div>
                  <h4 className="text-sm font-semibold text-foreground">SOC Analyst Intern</h4>
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
