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
      },
      {
        name: "Certified Defensive Security Analyst (CDSA)",
        issuer: "Hack The Box",
        status: "in-progress",
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

                  return (
                    <div key={cert.name} className="cert-row">
                      {/* Status pill */}
                      <div className="shrink-0 mt-0.5">
                        {isInProgress ? (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded border border-amber-500/30 bg-amber-500/10 text-amber-400 whitespace-nowrap">
                            <Clock className="w-2.5 h-2.5" />
                            PENDING
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 rounded border border-emerald-500/30 bg-emerald-500/10 whitespace-nowrap" style={{ color: "hsl(152 68% 46%)" }}>
                            <CheckCircle className="w-2.5 h-2.5" />
                            VERIFIED
                          </span>
                        )}
                      </div>

                      {/* Name + issuer */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[13px] font-medium text-foreground leading-snug">{cert.name}</p>
                        <p className="text-[11px] text-muted-foreground/60 sm:hidden">{cert.issuer}{cert.date && ` · ${fmtDate(cert.date)}`}</p>
                      </div>

                      {/* Issuer */}
                      <span className="hidden sm:block text-[11px] font-mono text-muted-foreground/60 text-right shrink-0 whitespace-nowrap">{cert.issuer}</span>

                      {/* Date */}
                      <span className="hidden sm:block text-[11px] font-mono text-muted-foreground/50 text-right shrink-0 whitespace-nowrap w-20">
                        {isInProgress ? (
                          <span className="text-amber-400/60">in progress</span>
                        ) : cert.date ? fmtDate(cert.date) : "—"}
                      </span>

                      {/* Link */}
                      <div className="shrink-0">
                        {linkUrl ? (
                          <a
                            href={linkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-[11px] font-mono text-primary/60 hover:text-primary transition-colors duration-200"
                          >
                            {isPdf ? <FileText className="w-3 h-3" /> : <ExternalLink className="w-3 h-3" />}
                          </a>
                        ) : (
                          <span className="w-4 inline-block" />
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
