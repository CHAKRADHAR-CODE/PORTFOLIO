import { Github, Linkedin, Mail, ArrowDown, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { useEffect, useState, useRef } from "react";
import MagneticButton from "./MagneticButton";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);
  
  const { displayText } = useTypingEffect({
    texts: [
      "Software Engineer",
      "AI/ML Developer",
      "Problem Solver",
      "Full Stack Developer",
      "Tech Innovator",
    ],
    typingSpeed: 70,
    deletingSpeed: 35,
    delayBetweenTexts: 2500,
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Interactive Gradient that follows mouse */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-orb-float" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(280,100%,70%,0.08)] blur-[120px] animate-orb-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[hsl(200,100%,60%,0.05)] blur-[180px] animate-pulse-soft" />
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(hsl(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(90deg,hsl(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px)`,
        }}
      />

      {/* Floating Particles with enhanced animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: i % 3 === 0 
                ? 'hsl(var(--primary) / 0.6)' 
                : i % 3 === 1 
                  ? 'hsl(280 100% 65% / 0.5)' 
                  : 'hsl(var(--foreground) / 0.3)',
              animationDuration: `${8 + Math.random() * 12}s`,
              animationDelay: `${Math.random() * 5}s`,
              boxShadow: i % 3 === 0 ? '0 0 10px hsl(var(--primary) / 0.5)' : 'none',
            }}
          />
        ))}
      </div>

      {/* Shooting Stars Effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className="absolute w-[2px] h-[100px] bg-gradient-to-b from-primary via-primary/50 to-transparent"
            style={{
              left: `${20 + i * 30}%`,
              top: '-100px',
              animation: `shooting-star ${3 + i}s ease-in-out infinite`,
              animationDelay: `${i * 2}s`,
              transform: 'rotate(45deg)',
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status Badge */}
        <div 
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card-strong mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-muted-foreground">
            Open to Opportunities
          </span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>

        {/* Main Heading with staggered reveal */}
        <div className="space-y-4 mb-8">
          <p 
            className={`text-lg md:text-xl text-muted-foreground font-medium transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            Hello, I'm
          </p>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <span className="text-foreground inline-block hover:text-primary transition-colors duration-300">
              CHAKRADHAR CHOWDARY
            </span>
            <br />
            <span className="gradient-text inline-block">
              GUNNAM
            </span>
          </h1>
          
          <div 
            className={`h-16 md:h-20 flex items-center justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-2xl sm:text-3xl md:text-4xl font-semibold gradient-text">
              {displayText}
              <span className="inline-block w-[3px] h-8 md:h-10 bg-primary ml-1 animate-[typewriter-blink_1s_infinite]" />
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          B.Tech in AI & Machine Learning at{" "}
          <span className="text-foreground font-medium">Aditya University</span>
          {" "}with a{" "}
          <span className="text-primary font-semibold">8.7 GPA</span>.
          Passionate about building innovative solutions.
        </p>

        {/* CTA Buttons with magnetic effect */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <MagneticButton strength={0.2}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden px-8 py-6 text-base font-semibold glow-primary-subtle hover:glow-primary transition-all duration-500"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              View My Projects
            </Button>
          </MagneticButton>
          
          <MagneticButton strength={0.2}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-6 text-base font-semibold border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </Button>
          </MagneticButton>
        </div>

        {/* Social Links with stagger animation */}
        <div 
          className={`flex items-center justify-center gap-3 transition-all duration-1000 delay-[600ms] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {[
            { href: "mailto:chakradhar.gunnam@gmail.com", icon: Mail, label: "Email" },
            { href: "https://www.linkedin.com/in/chakradhar-chowdary-gunnam-910070333", icon: Linkedin, label: "LinkedIn" },
            { href: "https://github.com/CHAKRADHAR-CODE", icon: Github, label: "GitHub" },
          ].map((social, index) => (
            <MagneticButton key={social.label} strength={0.3}>
              <a
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group p-4 rounded-xl glass-card hover:glass-card-strong hover:glow-primary-subtle transition-all duration-300"
                aria-label={social.label}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all duration-300" />
              </a>
            </MagneticButton>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 group cursor-pointer transition-all duration-1000 delay-[800ms] ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground group-hover:text-primary transition-colors">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <div className="relative">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <ArrowDown className="w-5 h-5 absolute top-0 left-0 animate-ping opacity-30" />
          </div>
        </div>
      </button>

      {/* CSS for shooting stars */}
      <style>{`
        @keyframes shooting-star {
          0% {
            transform: translateY(-100px) translateX(0) rotate(45deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          30% {
            opacity: 1;
          }
          100% {
            transform: translateY(calc(100vh + 100px)) translateX(200px) rotate(45deg);
            opacity: 0;
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.6;
          }
          25% {
            transform: translateY(-30px) translateX(15px) scale(1.1);
            opacity: 1;
          }
          50% {
            transform: translateY(-15px) translateX(-15px) scale(0.9);
            opacity: 0.8;
          }
          75% {
            transform: translateY(-45px) translateX(10px) scale(1.05);
            opacity: 1;
          }
        }
        
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
