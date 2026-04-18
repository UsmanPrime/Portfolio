import { useState } from "react";
import { Mail, Github, Linkedin, Send, Shield, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

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
        headers: {
          'Content-Type': 'application/json',
        },
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
    {
      icon: Phone,
      label: "Phone",
      href: "tel:+923342226620",
      value: "+92 334 2226620",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:i242038@isb.nu.edu.pk",
      value: "i242038@isb.nu.edu.pk",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/UsmanPrime",
      value: "github.com/UsmanPrime",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/usman-ibrahim-992253276/",
      value: "linkedin.com/in/usman-ibrahim",
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle mx-auto">
              Interested in discussing opportunities or security topics
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="cyber-card">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Send className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold">Send a Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      minLength={2}
                      maxLength={100}
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2 text-muted-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-secondary/50 border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    minLength={3}
                    maxLength={200}
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    className="bg-secondary/50 border-border focus:border-primary"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2 text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    minLength={10}
                    maxLength={5000}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message..."
                    className="bg-secondary/50 border-border focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="cyber-card">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">Connect With Me</h3>
                </div>

                <p className="text-muted-foreground mb-6">
                  Open to cybersecurity internships, SOC and DFIR opportunities, collaboration,
                  and challenge authoring work. I aim to respond within 24-48 hours.
                </p>

                <div className="space-y-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg bg-secondary/50 border border-border hover:border-primary/50 transition-colors group"
                    >
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <link.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-medium">{link.label}</div>
                        <div className="text-sm text-muted-foreground">{link.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Security Note */}
              <div className="terminal-panel">
                <div className="terminal-header">
                  <div className="terminal-dot bg-accent/70" />
                  <span className="text-xs text-muted-foreground ml-2 font-mono">secure_contact.log</span>
                </div>
                <div className="p-4 font-mono text-sm">
                  <div className="flex gap-3 text-muted-foreground">
                    <span className="text-accent">[SECURE]</span>
                    <span>All communications are confidential</span>
                  </div>
                  <div className="flex gap-3 text-muted-foreground mt-1">
                    <span className="text-primary">[RESPONSE]</span>
                    <span>Expected within 24-48 hours</span>
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
