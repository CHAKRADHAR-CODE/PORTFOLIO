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
      {/* Deep black base */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Anime speed lines radial pattern */}
      <div className="absolute inset-0 speed-lines opacity-60" />

      {/* Scan line effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, hsl(0 0% 0% / 0.03) 3px, hsl(0 0% 0% / 0.03) 4px)",
          backgroundSize: "100% 4px",
        }}
      />
      
      {/* Interactive red gradient orb following mouse */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[160px] transition-all duration-1000 ease-out pointer-events-none"
        style={{
          left: `${mousePosition.x}%`,
          top: `${mousePosition.y}%`,
          transform: 'translate(-50%, -50%)',
          background: "hsl(0 85% 45% / 0.08)",
        }}
      />
      
      {/* Static ambient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-[180px] animate-orb-float"
        style={{ background: "hsl(0 85% 45% / 0.07)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-[140px] animate-orb-float"
        style={{ background: "hsl(348 80% 40% / 0.06)", animationDelay: '-5s' }} />

      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(hsl(0_85%_55%/0.025)_1px,transparent_1px),linear-gradient(90deg,hsl(0_85%_55%/0.025)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
        style={{
          transform: `translate(${(mousePosition.x - 50) * 0.015}px, ${(mousePosition.y - 50) * 0.015}px)`,
        }}
      />

      {/* Red energy particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
              background: i % 4 === 0
                ? 'hsl(0 85% 58% / 0.7)'
                : i % 4 === 1
                  ? 'hsl(348 80% 55% / 0.5)'
                  : i % 4 === 2
                    ? 'hsl(15 90% 55% / 0.4)'
                    : 'hsl(0 0% 70% / 0.2)',
              animationDuration: `${10 + Math.random() * 14}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Diagonal energy slashes — anime motif */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-[0.04]"
            style={{
              left: `${5 + i * 25}%`,
              top: 0,
              bottom: 0,
              width: '1px',
              background: `linear-gradient(180deg, transparent, hsl(0 85% 58%), transparent)`,
              transform: 'skewX(-20deg)',
              animation: `energy-pulse ${4 + i}s ease-in-out infinite`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Status Badge */}
        <div 
          className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card mb-8 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
          <span className="text-sm font-medium text-muted-foreground tracking-widest uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
            Open to Opportunities
          </span>
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
        </div>

        {/* Main Heading */}
        <div className="space-y-4 mb-8">
          <p 
            className={`text-base md:text-lg text-muted-foreground font-medium tracking-[0.3em] uppercase transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontFamily: "'Rajdhani', sans-serif" }}
          >
            // Hello, I'm
          </p>
          
          <h1 
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-black tracking-tight transition-all duration-1000 delay-200 ${
              isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
            }`}
          >
            <span className="text-foreground inline-block">
              CHAKRADHAR CHOWDARY
            </span>
            <br />
            <span className="gradient-text inline-block">
              GUNNAM
            </span>
          </h1>
          
          {/* Divider bar — anime style */}
          <div className={`flex items-center justify-center gap-4 transition-all duration-700 delay-250 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
            <div className="h-1 w-1 rounded-full bg-primary" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
          </div>
          
          <div 
            className={`h-14 md:h-18 flex items-center justify-center transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-semibold gradient-text tracking-widest" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
              {displayText}
              <span className="inline-block w-[3px] h-7 md:h-9 bg-primary ml-1 animate-[typewriter-blink_1s_infinite]" />
            </span>
          </div>
        </div>

        {/* Description */}
        <p 
          className={`text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-400 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          B.Tech in AI & Machine Learning at{" "}
          <span className="text-foreground font-semibold">Aditya University</span>
          {" "}— GPA{" "}
          <span className="text-primary font-bold">8.7 / 10</span>.
          Building innovative solutions at the intersection of code and intelligence.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-1000 delay-500 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <MagneticButton strength={0.2}>
            <Button
              size="lg"
              onClick={() => scrollToSection("projects")}
              className="group relative overflow-hidden px-8 py-6 text-base font-bold glow-primary-subtle hover:glow-primary transition-all duration-500 tracking-widest"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              <Zap className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              VIEW PROJECTS
            </Button>
          </MagneticButton>
          
          <MagneticButton strength={0.2}>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
              className="px-8 py-6 text-base font-bold border-primary/30 hover:border-primary/60 hover:bg-primary/5 transition-all duration-300 tracking-widest"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              <Mail className="w-5 h-5 mr-2" />
              GET IN TOUCH
            </Button>
          </MagneticButton>
        </div>

        {/* Social Links */}
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
                <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-all duration-300" />
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
          <span className="text-xs font-bold tracking-[0.4em] uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>Scroll</span>
          <div className="relative">
            <ArrowDown className="w-5 h-5 animate-bounce" />
            <ArrowDown className="w-5 h-5 absolute top-0 left-0 animate-ping opacity-20" />
          </div>
        </div>
      </button>

      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0.5;
          }
          33% {
            transform: translateY(-25px) translateX(12px) scale(1.1);
            opacity: 0.9;
          }
          66% {
            transform: translateY(-12px) translateX(-12px) scale(0.9);
            opacity: 0.7;
          }
        }
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
        @keyframes energy-pulse {
          0%, 100% { opacity: 0.03; transform: skewX(-20deg) scaleY(1); }
          50% { opacity: 0.08; transform: skewX(-20deg) scaleY(1.02); }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
