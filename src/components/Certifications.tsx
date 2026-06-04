import { Award, Clock, CheckCircle } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

interface Certification {
  name: string;
  issuer: string;
  status: "completed" | "in-progress" | "planned";
  date?: string;
}

const certifications: Certification[] = [
  {
    name: "Certified Defensive Security Analyst (CDSA)",
    issuer: "Hack The Box",
    status: "in-progress",
  },
  {
    name: "Security Operations Center (SOC)",
    issuer: "Cisco",
    status: "completed",
    date: "2025",
  },
  {
    name: "Network Security",
    issuer: "Cisco",
    status: "completed",
    date: "2025",
  },
  {
    name: "ISO/IEC 27001:2022 Information Security Associate",
    issuer: "SkillFront",
    status: "completed",
    date: "2025",
  },
  {
    name: "Computer Networks and Network Security",
    issuer: "IBM",
    status: "completed",
    date: "2025",
  },
  {
    name: "Advanced Digital Forensics Techniques",
    issuer: "Training Course",
    status: "completed",
    date: "2025",
  },
  {
    name: "Windows Forensics with Belkasoft",
    issuer: "Belkasoft (6 CPE Credits)",
    status: "completed",
    date: "2025",
  },
];

const Certifications = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: gridRef, isRevealed: gridRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mt-4">
              Industry certifications and continuous learning path across defensive security and forensics
            </p>
          </div>

          {/* Grid */}
          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-3 stagger-children ${gridRevealed ? "revealed" : ""}`}
          >
            {certifications.map((cert) => {
              const isInProgress = cert.status === "in-progress";
              return (
                <div
                  key={cert.name}
                  className={`intel-card group ${isInProgress ? 'animate-border-glow' : ''}`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <Award className="w-4 h-4 text-primary" />
                    <div className={`flex items-center gap-1 text-[10px] font-mono ${
                      isInProgress ? 'text-primary' : 'text-accent'
                    }`}>
                      {isInProgress ? (
                        <><Clock className="w-2.5 h-2.5" /> IN PROGRESS</>
                      ) : (
                        <><CheckCircle className="w-2.5 h-2.5" /> COMPLETED</>
                      )}
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold mb-1 leading-tight group-hover:text-primary transition-colors duration-200">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-[11px] font-mono text-muted-foreground/50 mt-1.5">{cert.date}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Note */}
          <div className="mt-10 intel-card">
            <div className="flex items-center gap-2 text-sm">
              <Award className="w-4 h-4 text-primary" />
              <span className="font-semibold text-foreground">Continuous Learning</span>
            </div>
            <p className="text-xs text-muted-foreground mt-2 leading-relaxed max-w-lg">
              Committed to ongoing professional development through industry
              certifications, hands-on labs, CTF competitions, and staying
              current with evolving security threats and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
