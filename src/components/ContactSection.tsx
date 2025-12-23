import { Mail, Phone, Github, Linkedin, Send, MapPin, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "./AnimatedSection";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });

      if (error) throw error;

      toast.success("Message sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error: any) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. Let's connect!
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <AnimatedSection animation="fade-right" delay={100}>
            <div className="space-y-8">
              <h3 className="text-2xl font-bold">Let's talk about everything!</h3>
              <p className="text-muted-foreground">
                Whether you have a project idea, want to collaborate, or just want to say hi, 
                feel free to reach out. I'll get back to you as soon as possible.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:chakradhar.gunnam@gmail.com"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:glow-primary transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors group-hover:scale-110">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">chakradhar.gunnam@gmail.com</p>
                  </div>
                </a>

                <a
                  href="tel:+918341792799"
                  className="flex items-center gap-4 p-4 glass-card rounded-xl hover:glow-primary transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors group-hover:scale-110">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+91 8341792799</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 glass-card rounded-xl">
                  <div className="p-3 rounded-lg bg-primary/20">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">India</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/chakradhar-chowdary-gunnam-910070333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card rounded-xl hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Linkedin className="w-6 h-6 text-primary" />
                </a>
                <a
                  href="https://github.com/CHAKRADHAR-CODE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 glass-card rounded-xl hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                >
                  <Github className="w-6 h-6 text-primary" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection animation="fade-left" delay={200}>
            <form
              onSubmit={handleSubmit}
              className="glass-card rounded-2xl p-8 space-y-6"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50 transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50 transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 resize-none transition-all duration-300 focus:scale-[1.02]"
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full gap-2 glow-primary group"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                )}
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
