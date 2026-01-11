import { Award, Clock, CheckCircle } from "lucide-react";

interface Certification {
  name: string;
  issuer: string;
  status: "completed" | "in-progress" | "planned";
  date?: string;
}

const certifications: Certification[] = [
  {
    name: "Security Operations Center (SOC)",
    issuer: "Cisco / Coursera",
    status: "completed",
    date: "Jul 2025",
  },
  {
    name: "Network Security",
    issuer: "Cisco / Coursera",
    status: "completed",
    date: "Oct 2025",
  },
  {
    name: "Computer Networks and Network Security",
    issuer: "IBM / Coursera",
    status: "completed",
    date: "Aug 2025",
  },
  {
    name: "Introduction to Cybersecurity Careers",
    issuer: "IBM / Coursera",
    status: "completed",
    date: "Jul 2025",
  },
  {
    name: "ISO/IEC 27001:2022 Information Security Associate",
    issuer: "SkillFront",
    status: "completed",
    date: "Dec 2025",
  },
  {
    name: "Foundations of Business and Entrepreneurship",
    issuer: "SkillFront",
    status: "completed",
    date: "Dec 2025",
  },
  {
    name: "Advanced Digital Forensics Techniques",
    issuer: "Training Course",
    status: "completed",
    date: "Jan 2025",
  },
  {
    name: "Windows Forensics with Belkasoft",
    issuer: "Belkasoft (6 CPE Credits)",
    status: "completed",
    date: "Feb 2025",
  },
  {
    name: "Certified Defensive Security Analyst (CDSA)",
    issuer: "Hack The Box",
    status: "in-progress",
  },
];

const Certifications = () => {
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
    <section id="certifications" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Certifications</h2>
            <p className="section-subtitle mx-auto">
              Industry certifications and continuous learning path
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => {
              const statusConfig = getStatusConfig(cert.status);
              const StatusIcon = statusConfig.icon;

              return (
                <div
                  key={cert.name}
                  className="cyber-card"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="w-5 h-5 text-primary" />
                    </div>
                    <div
                      className={`flex items-center gap-1.5 px-2 py-1 rounded-full border text-xs ${statusConfig.className}`}
                    >
                      <StatusIcon className="w-3 h-3" />
                      <span>{statusConfig.label}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold mb-1">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-xs text-muted-foreground mt-2">{cert.date}</p>
                  )}
                </div>
              );
            })}
          </div>

          {/* Learning Path Note */}
          <div className="mt-12 cyber-card text-center">
            <div className="flex items-center justify-center gap-2 text-primary mb-2">
              <Award className="w-5 h-5" />
              <span className="font-medium">Continuous Learning</span>
            </div>
            <p className="text-muted-foreground text-sm max-w-lg mx-auto">
              Committed to ongoing professional development through industry certifications, 
              hands-on labs, and staying current with evolving security threats and best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
