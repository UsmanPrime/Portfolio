import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Shield, Phone, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useScrollReveal } from "@/hooks/useAnimations";

interface ContactErrorDetail {
  field: string;
  message: string;
}

interface ContactApiErrorResponse {
  error?: string;
  details?: ContactErrorDetail[];
}

const Contact = () => {
  const { toast } = useToast();
  const { ref: headerRef, isRevealed: headerRevealed } = useScrollReveal();
  const { ref: formRef, isRevealed: formRevealed } = useScrollReveal();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = (await response.json()) as ContactApiErrorResponse;

      if (response.ok) {
        toast({
          title: "Message Sent",
          description: "Thank you for reaching out. I'll respond as soon as possible.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const validationMessage =
          Array.isArray(data.details) && data.details.length > 0
            ? data.details[0].message
            : undefined;
        toast({
          title: "Error",
          description: validationMessage || data.error || "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
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
    <section id="contact" className="py-24 relative overflow-hidden">
      
      {/* Ambient Signal / Ping Motif */}
      <div className="absolute top-[20%] right-[15%] w-32 h-32 hidden lg:flex items-center justify-center z-0 opacity-10">
        <motion.div 
          animate={{ scale: [1, 3], opacity: [0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut" }}
          className="absolute w-8 h-8 rounded-full border border-primary"
        />
        <motion.div 
          animate={{ scale: [1, 3], opacity: [0.5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeOut", delay: 1 }}
          className="absolute w-8 h-8 rounded-full border border-primary"
        />
        <div className="w-2 h-2 rounded-full bg-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div
            ref={headerRef}
            className={`mb-14 transition-all duration-600 ${
              headerRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h2 className="section-title">Contact</h2>
            <p className="section-subtitle mt-4">
              Open to discussing cybersecurity, SOC operations, AI solutions, or collaboration opportunities
            </p>
          </div>

          <div
            ref={formRef}
            className={`grid lg:grid-cols-2 gap-8 transition-all duration-600 ${
              formRevealed ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {/* Form */}
            <div className="intel-card">
              <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-border/60">
                <div className="p-1.5 bg-primary/10 rounded-lg">
                  <Send className="w-4 h-4 text-primary" />
                </div>
                <h3 className="text-sm font-semibold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="data-label block mb-1.5">Name</label>
                    <Input
                      id="name" name="name" type="text" required minLength={2} maxLength={100}
                      value={formData.name} onChange={handleInputChange} placeholder="Your name"
                      className="bg-secondary/30 border-border focus:border-primary rounded-lg text-sm transition-all duration-200 h-9 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="data-label block mb-1.5">Email</label>
                    <Input
                      id="email" name="email" type="email" required
                      value={formData.email} onChange={handleInputChange} placeholder="your@email.com"
                      className="bg-secondary/30 border-border focus:border-primary rounded-lg text-sm transition-all duration-200 h-9 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="data-label block mb-1.5">Subject</label>
                  <Input
                    id="subject" name="subject" type="text" required minLength={3} maxLength={200}
                    value={formData.subject} onChange={handleInputChange} placeholder="What's this about?"
                    className="bg-secondary/30 border-border focus:border-primary rounded-lg text-sm transition-all duration-200 h-9 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="data-label block mb-1.5">Message</label>
                  <Textarea
                    id="message" name="message" required rows={4} minLength={10} maxLength={5000}
                    value={formData.message} onChange={handleInputChange} placeholder="Your message..."
                    className="bg-secondary/30 border-border focus:border-primary resize-none rounded-lg text-sm transition-all duration-200 focus:shadow-[0_0_0_2px_hsl(var(--primary)/0.1)]"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 magnetic-btn rounded-lg text-sm h-10"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <><span className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" /> Sending...</>
                  ) : (
                    <><Send className="w-3.5 h-3.5" /> Send Message</>
                  )}
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-4">
              <div className="intel-card">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-border/60">
                  <div className="p-1.5 bg-primary/10 rounded-lg">
                    <Shield className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="text-sm font-semibold">Connect</h3>
                </div>

                <p className="text-xs text-muted-foreground mb-4 leading-relaxed">
                  Seeking internship opportunities in cybersecurity and software engineering.
                  Open to SOC Analyst roles, DFIR positions, AI opportunities, and collaboration.
                  I aim to respond within 24-48 hours.
                </p>

                <div className="space-y-1">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-primary/20 hover:bg-primary/5 transition-all duration-250 group"
                    >
                      <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                        <link.icon className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
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

              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="terminal-dot bg-green-500/60" />
                  <span className="text-[11px] text-muted-foreground ml-2 font-mono">
                    contact.log
                  </span>
                </div>
                <div className="p-3 font-mono text-[11px] space-y-0.5">
                  <div className="flex gap-2 text-muted-foreground">
                    <span className="text-accent select-none">[SECURE]</span>
                    <span>All communications are confidential</span>
                  </div>
                  <div className="flex gap-2 text-muted-foreground">
                    <span className="text-primary select-none">[ETA]</span>
                    <span>Response within 24-48 hours</span>
                  </div>
                  <div className="flex gap-2 text-muted-foreground">
                    <span className="text-accent select-none">[STATUS]</span>
                    <span>Open to internship opportunities</span>
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
