import { Award, Clock, CheckCircle, ExternalLink, FileText, Hash, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

interface Certification {
  name: string;
  issuer: string;
  status: "completed" | "in-progress" | "planned";
  date?: string;
  certificateId?: string;
  verifyUrl?: string;
  pdfPath?: string;
}

const certifications: Certification[] = [
  {
    name: "Certified Defensive Security Analyst (CDSA)",
    issuer: "Hack The Box",
    status: "in-progress",
  },
  {
    name: "Security Operations Center (SOC)",
    issuer: "Cisco Networking Academy",
    status: "completed",
    date: "2025-07-14",
    certificateId: "91E5K3WV26JN",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/91E5K3WV26JN",
  },
  {
    name: "Network Security",
    issuer: "Cisco Networking Academy",
    status: "completed",
    date: "2025-10-04",
    certificateId: "8DAHTAJ77LDD",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/8DAHTAJ77LDD",
  },
  {
    name: "ISO/IEC 27001:2022 Information Security Associate",
    issuer: "SkillFront",
    status: "completed",
    date: "2025-12-14",
    certificateId: "86998107514629",
    verifyUrl: "https://www.skillfront.com/Badges/86998107514629",
  },
  {
    name: "Computer Networks and Network Security",
    issuer: "IBM",
    status: "completed",
    date: "2025-08-14",
    certificateId: "99LSL4EZGGW8",
    verifyUrl: "https://www.coursera.org/account/accomplishments/verify/99LSL4EZGGW8",
  },
  {
    name: "Windows Forensics with Belkasoft",
    issuer: "Belkasoft",
    status: "completed",
    date: "2025-02-15",
    certificateId: "zj4polqhxb",
    pdfPath: "/Windows Forensics.pdf",
  },
  {
    name: "Advanced Digital Forensics Techniques",
    issuer: "Belkasoft",
    status: "completed",
    date: "2025-01-31",
    certificateId: "ouj5wej8a5",
    pdfPath: "/Advanced Digital Forensics Techniques.pdf",
  },
];

const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

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
              const linkUrl = cert.verifyUrl || cert.pdfPath;
              const isPdf = !!cert.pdfPath;

              return (
                <div
                  key={cert.name}
                  className={`intel-card group ${isInProgress ? 'animate-border-glow' : ''}`}
                >
                  {/* Status Badge */}
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

                  {/* Title */}
                  <h3 className="text-sm font-semibold mb-1 leading-tight group-hover:text-primary transition-colors duration-200">
                    {cert.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>

                  {/* Certificate Details */}
                  {cert.certificateId && (
                    <div className="mt-3 pt-3 border-t border-border/50 space-y-1.5">
                      {/* Certificate ID */}
                      <div className="flex items-center gap-1.5">
                        <Hash className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
                        <span className="text-[10px] font-mono text-muted-foreground/70 truncate" title={cert.certificateId}>
                          {cert.certificateId}
                        </span>
                      </div>

                      {/* Completion Date */}
                      {cert.date && (
                        <div className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3 text-muted-foreground/60 flex-shrink-0" />
                          <span className="text-[10px] font-mono text-muted-foreground/70">
                            {formatDate(cert.date)}
                          </span>
                        </div>
                      )}

                      {/* Verify / View Link */}
                      {linkUrl && (
                        <a
                          href={linkUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-1 text-[10px] font-mono text-primary/70 hover:text-primary transition-colors duration-200"
                        >
                          {isPdf ? (
                            <>
                              <FileText className="w-3 h-3" />
                              <span>View Certificate</span>
                            </>
                          ) : (
                            <>
                              <ExternalLink className="w-3 h-3" />
                              <span>Verify Credential</span>
                            </>
                          )}
                        </a>
                      )}
                    </div>
                  )}

                  {/* Fallback date for in-progress certs */}
                  {!cert.certificateId && cert.date && (
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
