import { Github, Linkedin, Mail, Phone, ChevronDown, Code2, Terminal, Zap, Cpu, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const { displayText } = useTypingEffect({
    texts: [
      "Full Stack Developer",
      "Software Engineer", 
      "Problem Solver",
      "AI/ML Enthusiast",
    ],
    typingSpeed: 80,
    deletingSpeed: 40,
    delayBetweenTexts: 2500,
  });

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
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background" />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      {/* Animated Code Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute text-primary/20 font-mono text-sm animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${8 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            {["</>", "{}", "[]", "//", "=>", "&&", "||", "!=", "++", "**"][Math.floor(Math.random() * 10)]}
          </div>
        ))}
      </div>

      {/* Floating Tech Icons */}
      <div className="absolute top-1/4 left-10 animate-float opacity-20">
        <Code2 className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute top-1/3 right-16 animate-float opacity-15" style={{ animationDelay: "1s" }}>
        <Cpu className="w-12 h-12 text-primary" />
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float opacity-20" style={{ animationDelay: "2s" }}>
        <Terminal className="w-16 h-16 text-primary" />
      </div>
      <div className="absolute bottom-1/3 left-16 animate-float opacity-15" style={{ animationDelay: "3s" }}>
        <Database className="w-12 h-12 text-primary" />
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-[hsl(280,100%,65%,0.15)] rounded-full blur-[80px] animate-pulse" style={{ animationDelay: "1.5s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm font-mono text-muted-foreground">Available for opportunities</span>
          <Zap className="w-4 h-4 text-yellow-500" />
        </div>

        <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider animate-fade-in stagger-1">
          &lt; Hello World /&gt;
        </p>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in stagger-2 tracking-wider uppercase">
          I'm{" "}
          <span className="gradient-text text-glow relative">
            Chakradhar
            <span className="absolute -inset-1 bg-primary/20 blur-2xl rounded-full -z-10" />
          </span>
        </h1>

        <div className="h-12 md:h-14 mb-2 animate-fade-in stagger-3">
          <p className="text-xl md:text-2xl text-foreground font-semibold flex items-center justify-center gap-2">
            <span className="text-primary">&lt;</span>
            {displayText}
            <span className="inline-block w-0.5 h-6 md:h-7 bg-primary animate-pulse" />
            <span className="text-primary">/&gt;</span>
          </p>
        </div>
        
        <p className="text-muted-foreground mb-8 animate-fade-in stagger-4 flex items-center justify-center gap-2">
          <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
          B.Tech @ Aditya University | GPA: 8.7/10
          <span className="inline-block w-8 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-8 animate-fade-in stagger-5">
          <a
            href="mailto:chakradhar.gunnam@gmail.com"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          >
            <Mail className="w-5 h-5 text-primary group-hover:animate-pulse" />
          </a>
          <a
            href="tel:+918341792799"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          >
            <Phone className="w-5 h-5 text-primary group-hover:animate-pulse" />
          </a>
          <a
            href="https://www.linkedin.com/in/chakradhar-chowdary-gunnam-910070333"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          >
            <Linkedin className="w-5 h-5 text-primary group-hover:animate-pulse" />
          </a>
          <a
            href="https://github.com/CHAKRADHAR-CODE"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass-card hover:glow-primary transition-all duration-300 hover:scale-110 hover:-translate-y-1 group"
          >
            <Github className="w-5 h-5 text-primary group-hover:animate-pulse" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in stagger-6">
          <Button
            size="lg"
            onClick={() => scrollToSection("projects")}
            className="glow-primary animate-pulse-glow group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <Code2 className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View My Work
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollToSection("contact")}
            className="glass-card border-primary/30 hover:bg-primary/10 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
            Get In Touch
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer group"
      >
        <div className="p-2 rounded-full glass-card group-hover:glow-primary transition-all flex flex-col items-center gap-1">
          <span className="text-xs text-muted-foreground font-mono">scroll</span>
          <ChevronDown className="w-5 h-5 text-primary" />
        </div>
      </button>
    </section>
  );
};

export default HeroSection;
