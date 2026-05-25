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

  const getStatusConfig = (status: Certification["status"]) => {
    switch (status) {
      case "completed":
        return {
          icon: CheckCircle,
          label: "Completed",
          className: "text-accent bg-accent/10 border-accent/30",
        };
      case "in-progress":
        return {
          icon: Clock,
          label: "In Progress",
          className: "text-primary bg-primary/10 border-primary/30",
        };
      case "planned":
        return {
          icon: Clock,
          label: "Planned",
          className: "text-muted-foreground bg-muted/50 border-border",
        };
    }
  };

  return (
    <section id="certifications" className="py-28 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div
            ref={headerRef}
            className={`text-center mb-16 transition-all duration-700 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mx-auto mt-6">
              Industry certifications and continuous learning path across defensive security and forensics
            </p>
          </div>

          {/* Certifications Grid */}
          <div
            ref={gridRef}
            className={`grid sm:grid-cols-2 lg:grid-cols-3 gap-4 stagger-children ${
              gridRevealed ? "revealed" : ""
            }`}
          >
            {certifications.map((cert, index) => {
              const statusConfig = getStatusConfig(cert.status);
              const StatusIcon = statusConfig.icon;
              const isInProgress = cert.status === "in-progress";

              return (
                <div
                  key={cert.name}
                  className={`cyber-card group ${isInProgress ? "animate-border-glow" : ""}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-xl transition-all duration-500 group-hover:bg-primary/20 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/10">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-xs font-medium ${statusConfig.className} transition-all duration-300`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      <span>{statusConfig.label}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {cert.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-muted-foreground/70 mt-2">
                      {cert.date}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Learning Path Note */}
          <div className="mt-12 cyber-card text-center group">
            <div className="flex items-center justify-center gap-2 text-primary mb-3">
              <Award className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
              <span className="font-semibold">Continuous Learning</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto leading-relaxed">
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
