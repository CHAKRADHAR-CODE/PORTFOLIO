import { useEffect, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const duration = 2000;
    const interval = 20;
    const steps = duration / interval;
    const increment = 100 / steps;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(onComplete, 600);
          }, 200);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-all duration-600 ${
        isExiting ? "opacity-0 scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/10 blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[hsl(280,100%,70%,0.08)] blur-[120px] animate-pulse" style={{ animationDelay: "-2s" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Animated Logo */}
        <div className="relative">
          {/* Outer ring */}
          <div className="absolute -inset-6 rounded-full border-2 border-primary/20 animate-[spin_8s_linear_infinite]" />
          <div className="absolute -inset-4 rounded-full border border-primary/30 animate-[spin_6s_linear_infinite_reverse]" />
          
          {/* Logo container */}
          <div className="relative w-28 h-28 rounded-full glass-card flex items-center justify-center overflow-hidden">
            {/* Progress ring */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="52"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="4"
                fill="none"
              />
              <circle
                cx="56"
                cy="56"
                r="52"
                stroke="url(#preloaderGradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${progress * 3.27} 327`}
                className="transition-all duration-200 ease-out"
              />
              <defs>
                <linearGradient id="preloaderGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(280 100% 65%)" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
            </svg>

            {/* Logo letters */}
            <div className="relative flex items-center justify-center">
              <span 
                className="text-4xl font-heading font-black gradient-text"
                style={{
                  animation: "logo-pulse 2s ease-in-out infinite",
                }}
              >
                CG
              </span>
            </div>

            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse" />
          </div>
        </div>

        {/* Name reveal */}
        <div className="text-center">
          <h1 
            className="text-2xl md:text-3xl font-heading font-bold tracking-wide"
            style={{
              animation: "text-reveal 0.8s ease-out forwards",
              opacity: 0,
              animationDelay: "0.3s",
            }}
          >
            <span className="text-foreground">CHAKRADHAR</span>
            <span className="gradient-text ml-2">GUNNAM</span>
          </h1>
          <p 
            className="text-muted-foreground text-sm mt-2"
            style={{
              animation: "text-reveal 0.8s ease-out forwards",
              opacity: 0,
              animationDelay: "0.5s",
            }}
          >
            Software Engineer • AI/ML Developer
          </p>
        </div>

        {/* Progress bar */}
        <div className="w-48 h-1 rounded-full bg-muted/30 overflow-hidden">
          <div 
            className="h-full rounded-full bg-gradient-to-r from-primary via-[hsl(280,100%,65%)] to-primary transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading text */}
        <p className="text-xs text-muted-foreground font-mono">
          Loading<span className="animate-pulse">...</span>
        </p>
      </div>

      <style>{`
        @keyframes logo-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes text-reveal {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Preloader;