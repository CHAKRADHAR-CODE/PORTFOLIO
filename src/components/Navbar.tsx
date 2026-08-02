import { useState, useEffect } from "react";
import { Menu, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Apps", href: "#apps" },
  { label: "Coding", href: "#coding" },
  { label: "Certifications", href: "#certifications" },
  { label: "AI Chat", href: "#chat" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(link => link.href.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 glass-card-strong border-b border-primary/15 shadow-[0_10px_40px_-10px_hsl(0_0%_0%/0.8)]"
          : "py-5"
      }`}
    >
      {/* Top hairline accent when scrolled */}
      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/70 to-transparent transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"}`} />

      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative group"
        >
          <span className="text-lg font-heading font-bold tracking-wider">
            <span className="text-primary/60">&lt;</span>
            <span className="gradient-text-static drop-shadow-[0_0_12px_hsl(45_100%_65%/0.5)]">CHAKRADHAR</span>
            <span className="text-primary/60">/&gt;</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-[hsl(38_95%_56%)] to-transparent group-hover:w-full transition-all duration-400" />
        </button>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-6 h-[2px] rounded-full bg-gradient-to-r from-primary to-[hsl(45_100%_68%)] shadow-[0_0_8px_hsl(43_95%_55%/0.8)]" />
                )}
              </button>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            onClick={() => scrollToSection("#contact")}
            className="hidden lg:flex glow-primary-subtle hover:glow-primary transition-all duration-300"
          >
            Hire Me
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 lg:hidden text-muted-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 glass-card-strong border-t border-border/30 transition-all duration-300 ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="flex flex-col p-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollToSection(link.href)}
              className="text-left py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
            >
              {link.label}
            </button>
          ))}
          <Button
            onClick={() => scrollToSection("#contact")}
            className="w-full mt-4 glow-primary-subtle"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
