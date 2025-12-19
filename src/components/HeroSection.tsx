import { Github, Linkedin, Mail, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />

      {/* Animated Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-float ${5 + Math.random() * 5}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider animate-fade-in">
          &lt; Hello World /&gt;
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          I'm{" "}
          <span className="gradient-text text-glow">
            Chakradhar Chowdary
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-2">
          AI & Machine Learning Student
        </p>
        <p className="text-muted-foreground/80 mb-8">
          B.Tech @ Aditya University | GPA: 8.7/10
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="mailto:chakradhar.gunnam@gmail.com"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110"
          >
            <Mail className="w-5 h-5 text-primary" />
          </a>
          <a
            href="tel:+918341792799"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110"
          >
            <Phone className="w-5 h-5 text-primary" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110"
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110"
          >
            <Github className="w-5 h-5 text-primary" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="glow-primary animate-pulse-glow"
          >
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="glass-card border-primary/30 hover:bg-primary/10 transition-all duration-300"
          >
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
