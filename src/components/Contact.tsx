import { useEffect, useRef, useState } from "react";
import { Mail, Github, Linkedin, Send, Shield, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

interface ContactErrorDetail {
  field: string;
  message: string;
}

interface ContactApiErrorResponse {
  success?: boolean;
  error?: string;
  details?: ContactErrorDetail[];
}

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const revision = useRef(0);
  const activeRequest = useRef<AbortController | null>(null);
  useEffect(() => () => {
    activeRequest.current?.abort();
    activeRequest.current = null;
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    revision.current += 1;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (activeRequest.current) return;
    const controller = new AbortController();
    activeRequest.current = controller;
    const submittedRevision = revision.current;
    const submittedData = { ...formData };
    let timedOut = false;
    const timeout = window.setTimeout(() => {
      timedOut = true;
      controller.abort();
    }, 15000);
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(submittedData),
        signal: controller.signal,
      });

      const data = (await response.json()) as ContactApiErrorResponse;
      if (activeRequest.current !== controller) return;

      if (response.ok && data?.success === true) {
        const edited = revision.current !== submittedRevision;
        toast({
          title: "Message Sent",
          description: edited
            ? "Your submitted message was sent. Your newer edits are still in the form."
            : "Thank you for reaching out. I'll respond as soon as possible.",
        });
        if (!edited) setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const validationMessage =
          Array.isArray(data?.details) && typeof data.details[0]?.message === 'string'
            ? data.details[0].message
            : undefined;
        toast({
          title: "Error",
          description: validationMessage || (typeof data?.error === 'string' ? data.error : "Delivery could not be confirmed. Your message is still in the form; please try again or use the email link."),
          variant: "destructive",
        });
      }
    } catch {
      if (activeRequest.current !== controller) return;
      toast({
        title: timedOut ? "Delivery not confirmed" : "Connection error",
        description: timedOut
          ? "The request timed out. Your message may have been received; your draft is preserved. Please use the email link if you need to follow up."
          : "Delivery could not be confirmed. Your draft is preserved; check your connection or use the email link.",
        variant: "destructive",
      });
    } finally {
      window.clearTimeout(timeout);
      if (activeRequest.current === controller) {
        activeRequest.current = null;
        setIsSubmitting(false);
      }
    }
  };

  const socialLinks = [
    { icon: Phone, label: "Phone", href: "tel:+923342226620", value: "0334 2226620" },
    { icon: Mail, label: "Email", href: "mailto:i242038@isb.nu.edu.pk", value: "i242038@isb.nu.edu.pk" },
    { icon: Github, label: "GitHub", href: "https://github.com/UsmanPrime", value: "github.com/UsmanPrime" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/usman-ibrahim-992253276", value: "linkedin.com/in/usman-ibrahim-992253276" },
    { icon: Globe, label: "Portfolio", href: "https://usmanprime-portfolio.vercel.app/", value: "usmanprime-portfolio.vercel.app" },
  ];

  return (
    <section id="contact" className="section-standard relative overflow-hidden">
      <div className="layout-container relative z-10">
        <div className="content-standard">
          <div
            className="section-heading"
          >
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle mt-4">
              Connect to discuss cybersecurity architecture, SOC operations, AI solutions, or specialized research initiatives
            </p>
          </div>

          <div
            className="contact-layout grid lg:grid-cols-2 gap-8"
          >
            {/* Form */}
            <div className="contact-form-panel panel-interactive">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/60">
                <div className="p-2 bg-primary/10 rounded-md">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="contact-primary">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} aria-busy={isSubmitting} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="data-label block mb-1.5">Name</label>
                    <Input
                      id="name" name="name" type="text" autoComplete="name" required minLength={2} maxLength={100}
                      value={formData.name} onChange={handleInputChange} placeholder="Your name"
                      className="bg-secondary/30 border-border focus:border-primary rounded-sm text-sm transition duration-200 h-9 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="data-label block mb-1.5">Email</label>
                    <Input
                      id="email" name="email" type="email" autoComplete="email" spellCheck={false} maxLength={254} required
                      value={formData.email} onChange={handleInputChange} placeholder="your@email.com"
                      className="bg-secondary/30 border-border focus:border-primary rounded-sm text-sm transition duration-200 h-9 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="data-label block mb-1.5">Subject</label>
                  <Input
                    id="subject" name="subject" type="text" required minLength={3} maxLength={200}
                    value={formData.subject} onChange={handleInputChange} placeholder="What's this about?"
                    className="bg-secondary/30 border-border focus:border-primary rounded-sm text-sm transition duration-200 h-9 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                  />
                </div>

                <div className="contact-message-field">
                  <label htmlFor="message" className="data-label block mb-1.5">Message</label>
                  <Textarea
                    id="message" name="message" required rows={4} minLength={10} maxLength={5000}
                    value={formData.message} onChange={handleInputChange} placeholder="Your message…"
                    className="bg-secondary/30 border-border focus:border-primary resize-none rounded-sm text-sm transition duration-200 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                  />
                </div>

                <Button
                  type="submit"
                  className="contact-send panel-interactive w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 rounded-sm text-sm h-10"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>{" "}<span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-sm animate-spin" /> Sending…{" "}</>
                  ) : (
                    <><Send className="w-3.5 h-3.5" /> Send Message</>
                  )}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="contact-details space-y-4">
              <div className="contact-info-panel relative panel-static overflow-hidden">
                <div className="relative z-10">
                  <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/60">
                    <div className="p-2 bg-primary/10 rounded-md">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="contact-primary">Connect</h3>
                  </div>

                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Reach out to discuss SOC operations, DFIR engagements, secure development practices, or security research collaboration.
                  I aim to respond within 24-48 hours.
                </p>

                <div className="space-y-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="panel-interactive flex items-center gap-3 p-2.5 rounded-sm border border-transparent hover:border-primary/20 hover:bg-primary/5 transition duration-250 group"
                    >
                      <div className="p-2 bg-primary/10 rounded-md group-hover:bg-primary/20 transition duration-300 flex-shrink-0">
                        <link.icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-200" />
                      </div>
                      <div>
                        <div className="text-xs font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                          {link.label}
                        </div>
                        <div className="text-[11px] font-mono text-muted-foreground/60">
                          {link.value}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

              <div className="terminal-panel panel-static">
                <div className="terminal-header">
                  <div className="terminal-dot bg-muted-foreground/60" />
                  <span className="text-[11px] text-muted-foreground ml-2 font-mono">
                    contact.log
                  </span>
                </div>
                <div className="p-3 font-mono text-[11px] space-y-0.5">
                  <div className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground select-none">[ETA]</span>
                    <span>Aim: respond within 24-48 hours</span>
                  </div>
                  <div className="flex gap-2 text-muted-foreground">
                    <span className="text-foreground select-none">[STATUS]</span>
                    <span>Security practitioner · Blue Team focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
