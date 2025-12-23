import { Github, Linkedin, Mail, Code2, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Coding Profiles", href: "#coding" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Mail, href: "mailto:chakradhar.gunnam@gmail.com", label: "Email" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/chakradhar-chowdary-gunnam-910070333", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/CHAKRADHAR-CODE", label: "GitHub" },
  ];
  
  return (
    <footer className="py-16 px-4 relative overflow-hidden border-t border-border/30">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-card/50 to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-mono text-lg font-bold">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="gradient-text">&lt;CHAKRADHAR /&gt;</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI/ML Developer & Competitive Programmer passionate about building innovative solutions and solving complex problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-foreground">Get in Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:chakradhar.gunnam@gmail.com" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-4 h-4" />
                chakradhar.gunnam@gmail.com
              </a>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                Andhra Pradesh, India
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/30">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Chakradhar Gunnam. All rights reserved.
            </p>
            <p className="text-xs text-muted-foreground/60">
              Designed & Built with passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
