import { Mail, Phone, Github, Linkedin, Send, MapPin, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import MailRedirectAnimation from "./MailRedirectAnimation";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "chakradhar.gunnam@gmail.com",
    href: "mailto:chakradhar.gunnam@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 8341792799",
    href: "tel:+918341792799",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Andhra Pradesh, India",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/chakradhar-chowdary-gunnam-910070333",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/CHAKRADHAR-CODE",
  },
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showMailAnimation, setShowMailAnimation] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      return;
    }

    // Show premium redirect animation
    setShowMailAnimation(true);
  };

  const handleMailAnimationComplete = () => {
    // Create mailto link with all details
    const subject = encodeURIComponent("Message from Portfolio");
    const body = encodeURIComponent(
      `${formData.message}\n\n---\nBest regards,\n${formData.name}${formData.email ? `\n${formData.email}` : ''}`
    );
    
    // Open mail client
    window.location.href = `mailto:chakradhar.gunnam@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form and animation
    setShowMailAnimation(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-t from-muted/30 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Have a project in mind or just want to chat? I'd love to hear from you.
            </p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Contact Info */}
            <AnimatedSection animation="fade-right" delay={100} className="lg:col-span-2">
              <div className="space-y-6">
                {/* Info Cards */}
                {contactInfo.map((item) => (
                  <div key={item.label}>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="group flex items-center gap-4 p-5 glass-card-strong rounded-2xl hover-lift"
                      >
                        <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground truncate">{item.value}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ) : (
                      <div className="flex items-center gap-4 p-5 glass-card rounded-2xl">
                        <div className="p-3 rounded-xl bg-primary/10">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {/* Social Links */}
                <div className="pt-4">
                  <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <MagneticButton key={social.label} strength={0.3}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group p-4 glass-card-strong rounded-xl hover-lift flex items-center gap-2"
                          aria-label={social.label}
                        >
                          <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                          <span className="text-sm font-medium text-muted-foreground group-hover:text-primary transition-colors">{social.label}</span>
                          <ExternalLink className="w-3 h-3 text-muted-foreground/50 group-hover:text-primary/50 transition-colors" />
                        </a>
                      </MagneticButton>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>

            {/* Contact Form */}
            <AnimatedSection animation="fade-left" delay={200} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="glass-card-strong rounded-3xl p-8 space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name <span className="text-primary">*</span>
                    </label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com (optional)"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-background/50 border-border/50 focus:border-primary/50 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or just say hello..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary/50 resize-none transition-colors"
                  />
                </div>

                <MagneticButton strength={0.1}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-2 glow-primary-subtle hover:glow-primary transition-all group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    Send Message
                  </Button>
                </MagneticButton>

                <p className="text-xs text-muted-foreground text-center">
                  This will open your default email client to send the message
                </p>
              </form>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <MailRedirectAnimation
        isOpen={showMailAnimation}
        onComplete={handleMailAnimationComplete}
        recipientEmail="chakradhar.gunnam@gmail.com"
      />
    </>
  );
};

export default ContactSection;
