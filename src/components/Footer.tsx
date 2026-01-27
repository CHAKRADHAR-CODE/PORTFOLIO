import { Github, Linkedin, Mail, Code2, ArrowUp, Heart } from "lucide-react";

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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 px-4 border-t border-border/30 bg-gradient-to-t from-muted/20 to-transparent">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span className="text-lg font-heading font-bold">
                <span className="text-muted-foreground">&lt;</span>
                <span className="gradient-text-static">CHAKRADHAR</span>
                <span className="text-muted-foreground">/&gt;</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              AI/ML Developer & Software Engineer passionate about building innovative solutions and solving complex problems through competitive programming.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <nav className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors w-fit group flex items-center gap-1"
                >
                  <span className="w-0 group-hover:w-2 h-0.5 bg-primary transition-all duration-300" />
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Get in Touch</h4>
            <a
              href="mailto:chakradhar.gunnam@gmail.com"
              className="text-sm text-muted-foreground hover:text-primary transition-colors block"
            >
              chakradhar.gunnam@gmail.com
            </a>
            <a
              href="tel:+918341792799"
              className="text-sm text-muted-foreground hover:text-primary transition-colors block"
            >
              +91 8341792799
            </a>
            <p className="text-sm text-muted-foreground">
              Andhra Pradesh, India
            </p>

            {/* Social */}
            <div className="flex items-center gap-2 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.label !== "Email" ? "_blank" : undefined}
                  rel={social.label !== "Email" ? "noopener noreferrer" : undefined}
                  className="p-2.5 rounded-lg glass-card hover:bg-primary/10 hover:text-primary transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Chakradhar Gunnam. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
          >
            Back to top
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
