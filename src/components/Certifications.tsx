import { CheckCircle, Clock, ExternalLink, FileText } from "lucide-react";
import { useScrollReveal } from "@/hooks/useAnimations";

interface Certification {
  name: string;
  issuer: string;
  status: "completed" | "in-progress";
  date?: string;
  certificateId?: string;
  verifyUrl?: string;
  pdfPath?: string;
  highlighted?: boolean;
  progress?: number;
}

interface CertDomain {
  domain: string;
  certs: Certification[];
}

const certDomains: CertDomain[] = [
  {
    domain: "Digital Forensics",
    certs: [
      {
        name: "Advanced Digital Forensics Techniques",
        issuer: "Belkasoft",
        status: "completed",
        date: "2025-01-31",
        certificateId: "ouj5wej8a5",
        pdfPath: "/Advanced Digital Forensics Techniques.pdf",
      },
      {
        name: "Windows Forensics",
        issuer: "Belkasoft",
        status: "completed",
        date: "2025-02-15",
        certificateId: "zj4polqhxb",
        pdfPath: "/Windows Forensics.pdf",
      },
      {
        name: "Advanced SQLite Queries",
        issuer: "Belkasoft",
        status: "completed",
        date: "2026-06-27",
        certificateId: "zpnbi76ql4",
        verifyUrl: "https://belkasoft.thinkific.com/certificates/zpnbi76ql4",
      },
    ],
  },
  {
    domain: "Security Operations",
    certs: [
      {
        name: "Security Operations Center (SOC)",
        issuer: "Cisco Networking Academy",
        status: "completed",
        date: "2025-07-14",
        certificateId: "91E5K3WV26JN",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/91E5K3WV26JN",
        highlighted: true,
      },
      {
        name: "Certified Defensive Security Analyst (CDSA)",
        issuer: "Hack The Box",
        status: "in-progress",
        progress: 30,
      },
    ],
  },
  {
    domain: "Network & Infrastructure",
    certs: [
      {
        name: "Network Security",
        issuer: "Cisco Networking Academy",
        status: "completed",
        date: "2025-10-04",
        certificateId: "8DAHTAJ77LDD",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/8DAHTAJ77LDD",
      },
      {
        name: "Computer Networks and Network Security",
        issuer: "IBM",
        status: "completed",
        date: "2025-08-14",
        certificateId: "99LSL4EZGGW8",
        verifyUrl: "https://www.coursera.org/account/accomplishments/verify/99LSL4EZGGW8",
      },
    ],
  },
  {
    domain: "Standards & Compliance",
    certs: [
      {
        name: "ISO/IEC 27001:2022 Information Security Associate",
        issuer: "SkillFront",
        status: "completed",
        date: "2025-12-14",
        certificateId: "86998107514629",
        verifyUrl: "https://www.skillfront.com/Badges/86998107514629",
        highlighted: true,
      },
    ],
  },
  {
    domain: "Professional Development",
    certs: [
      {
        name: "Foundations of Business & Entrepreneurship",
        issuer: "SkillFront",
        status: "completed",
        date: "2025-12-14",
        certificateId: "67086019155943",
        verifyUrl: "https://www.skillfront.com/Badges/67086019155943",
      },
    ],
  },
];

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-US", { year: "numeric", month: "short" });

const Certifications = () => {
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: tableRef, isRevealed: tableRevealed } = useScrollReveal({ threshold: 0.05 });

  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mt-4">
              Industry certifications and continuous learning across defensive security, forensics, and networking
            </p>
          </div>

          {/* Credential ledger */}
          <div
            ref={tableRef}
            className={`intel-card relative transition-all duration-600 ${tableRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            {/* Ambient Scanning Line */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-lg z-0">
              <div className="absolute top-0 left-0 right-0 h-[20%] bg-gradient-to-b from-transparent to-primary/10 animate-scanner-sweep border-b border-primary/20" />
            </div>

            {/* Table column headers */}
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-4 px-2 pb-3 border-b border-border/50 mb-2 relative z-10">
              <span className="data-label">Credential</span>
              <span className="data-label text-right">Issuer</span>
              <span className="data-label text-right">Date</span>
              <span className="data-label text-right">Verify</span>
            </div>

            {certDomains.map((group) => (
              <div key={group.domain}>
                <div className="cert-domain-header">{group.domain}</div>
                {group.certs.map((cert) => {
                  const linkUrl = cert.verifyUrl || cert.pdfPath;
                  const isPdf = !!cert.pdfPath;
                  const isInProgress = cert.status === "in-progress";
                  
                  let monogram = cert.issuer.substring(0, 2).toUpperCase();
                  if (cert.issuer.includes(" ")) {
                    const parts = cert.issuer.split(" ");
                    monogram = (parts[0][0] + parts[1][0]).toUpperCase();
                  }

                  return (
                    <div key={cert.name} className={`cert-row ${cert.highlighted ? 'bg-primary/5 border-l-2 border-l-primary/50' : ''}`}>
                      {/* Status pill / Progress */}
                      <div className="shrink-0 mt-0.5 w-20">
                        {isInProgress ? (
                          cert.progress ? (
                            <div className="flex flex-col gap-1.5 mt-0.5">
                              <span className="inline-flex items-center gap-1 text-[9px] font-mono text-amber-500">
                                <Clock className="w-2.5 h-2.5" />
                                {cert.progress}%
                              </span>
                              <div className="h-1 w-14 bg-amber-500/10 rounded-full overflow-hidden border border-amber-500/20">
                                <div className="h-full bg-amber-500/80 animate-pulse" style={{ width: `${cert.progress}%` }} />
                              </div>
                            </div>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 whitespace-nowrap">
                              <Clock className="w-2.5 h-2.5" />
                              PENDING
                            </span>
                          )
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 whitespace-nowrap" style={{ color: "hsl(152 68% 46%)" }}>
                            <CheckCircle className="w-2.5 h-2.5" />
                            VERIFIED
                          </span>
                        )}
                      </div>

                      {/* Issuer Monogram */}
                      <div className="hidden sm:flex w-7 h-7 rounded-md bg-secondary/80 border border-border/50 items-center justify-center shrink-0 text-[10px] font-bold text-muted-foreground/80 font-mono opacity-80 mix-blend-luminosity">
                        {monogram}
                      </div>

                      {/* Name + issuer */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className={`text-[13px] font-medium leading-snug ${cert.highlighted ? 'text-primary drop-shadow-[0_0_8px_hsl(var(--primary)/0.3)]' : 'text-foreground'}`}>
                            {cert.name}
                          </p>
                          {cert.highlighted && (
                            <span className="hidden sm:inline-flex px-1.5 py-0.5 text-[8px] uppercase tracking-wider font-bold bg-primary/10 text-primary/90 rounded border border-primary/20">
                              Relevant
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-muted-foreground/60 sm:hidden mt-1">{cert.issuer}{cert.date && ` · ${fmtDate(cert.date)}`}</p>
                      </div>

                      {/* Issuer Text (Desktop) */}
                      <span className="hidden sm:block text-[11px] font-mono text-muted-foreground/60 text-right shrink-0 whitespace-nowrap w-32 truncate">{cert.issuer}</span>

                      {/* Date */}
                      <span className="hidden sm:block text-[11px] font-mono text-muted-foreground/50 text-right shrink-0 whitespace-nowrap w-20">
                        {isInProgress ? (
                          <span className="text-amber-400/60">in progress</span>
                        ) : cert.date ? fmtDate(cert.date) : "—"}
                      </span>

                      {/* Link */}
                      <div className="shrink-0 w-6 flex justify-end">
                        {linkUrl ? (
                          <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-6 h-6 rounded-md hover:bg-secondary text-primary/60 hover:text-primary transition-colors duration-200"
                          >
                            {isPdf ? <FileText className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                          </a>
                        ) : (
                          <span className="w-6 inline-block" />
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Footer */}
          <p className="mt-6 text-xs font-mono text-muted-foreground/40 flex items-center gap-2">
            <span className="text-primary/40">❯</span>
            Continuous learning through hands-on labs, HTB, and CTF competitions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
