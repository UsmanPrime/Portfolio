import { CheckCircle, Clock, ExternalLink, FileText } from "lucide-react";
import { useCredentialCount } from "@/hooks/useCredentialCount";

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
        pdfPath: "/Advanced%20Digital%20Forensics%20Techniques.pdf",
      },
      {
        name: "Windows Forensics",
        issuer: "Belkasoft",
        status: "completed",
        date: "2025-02-15",
        certificateId: "zj4polqhxb",
        pdfPath: "/Windows%20Forensics.pdf",
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

const evidencedCredentials = certDomains.flatMap(group => group.certs)
  .filter(cert => cert.status === "completed" && (cert.verifyUrl || cert.pdfPath)).length;

const Certifications = () => {
  const { ref: countRef, count } = useCredentialCount(evidencedCredentials);

  return (
    <section id="certifications" className="section-dense relative overflow-hidden">
      <div className="layout-container relative z-10">
        <div className="content-reading">
          {/* Header */}
          <div
            className="section-heading"
          >
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mt-4">
              Industry certifications and continuous learning across defensive security, forensics, and networking
            </p>
          </div>

          <p ref={countRef} className="credential-proof"><strong className="primary-fact" aria-hidden="true">{count}</strong><span className="sr-only">{evidencedCredentials}</span> completed credentials with linked evidence.</p>
          {/* Credential ledger */}
          <div
            className="credential-ledger panel-static relative"
          >
            {/* Table column headers */}
            <div className="cert-column-header hidden sm:grid px-2 pb-3 border-b border-border/50 mb-2 relative z-10">
              <span className="data-label">Credential</span>
              <span className="data-label text-right">Issuer</span>
              <span className="data-label text-right">Date</span>
              <span className="data-label text-right">Verify</span>
            </div>

            {certDomains.map((group) => (
              <div key={group.domain} className="cert-group panel-static" role="group" aria-label={group.domain}>
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
                    <div key={cert.name} className="cert-row">
                      {/* Only externally verifiable credentials receive a linked Verified status. */}
                      <div className="shrink-0 mt-0.5 w-24">
                        {isInProgress ? (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-warning">
                            <Clock className="w-2.5 h-2.5" /> In Progress
                          </span>
                        ) : cert.verifyUrl ? (
                          <a href={cert.verifyUrl} target="_blank" rel="noopener noreferrer"
                            aria-label={`Verify ${cert.name}`}
                            className="panel-interactive inline-flex items-center gap-1 text-[9px] font-mono px-1.5 py-0.5 border border-success/30 bg-success/10 text-success">
                            <CheckCircle className="w-2.5 h-2.5" /> VERIFIED
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-[9px] font-mono text-success">
                            <CheckCircle className="w-2.5 h-2.5" /> Completed
                          </span>
                        )}
                      </div>

                      {/* Issuer Monogram */}
                      <div className="hidden sm:flex w-7 h-7 rounded-md bg-secondary/80 border border-border/50 items-center justify-center shrink-0 text-[10px] font-bold text-muted-foreground font-mono">
                        {monogram}
                      </div>

                      {/* Name + issuer */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p className="text-[13px] font-medium leading-snug text-foreground">
                            {cert.name}
                          </p>
                        </div>
                        <p className="text-[11px] text-muted-foreground sm:hidden mt-1">{cert.issuer}{cert.date && ` · ${fmtDate(cert.date)}`}</p>
                      </div>

                      {/* Issuer Text (Desktop) */}
                      <span className="hidden sm:block text-[11px] font-mono text-muted-foreground text-right shrink-0 whitespace-nowrap w-32 truncate">{cert.issuer}</span>

                      {/* Date */}
                      <span className="hidden sm:block text-[11px] font-mono text-muted-foreground text-right shrink-0 whitespace-nowrap w-20">
                        {isInProgress ? (
                          <span className="text-warning">in progress</span>
                        ) : cert.date ? fmtDate(cert.date) : "—"}
                      </span>

                      {/* Link */}
                      <div className="shrink-0 w-6 flex justify-end">
                        {linkUrl ? (
                          <a
                            href={linkUrl}
                            aria-label={`${isPdf ? "Open certificate" : "Verify"}: ${cert.name}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="panel-interactive inline-flex items-center justify-center w-6 h-6 rounded-sm hover:bg-secondary text-primary/60 hover:text-primary transition-colors duration-200"
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
          <p className="mt-6 text-xs font-mono text-muted-foreground flex items-center gap-2">
            <span className="text-muted-foreground">❯</span>
            Continuous learning through hands-on labs, HTB, and CTF competitions
          </p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
