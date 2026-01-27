import { useScrollProgress } from "@/hooks/useParallax";
import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const progress = useScrollProgress();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(progress > 2);
  }, [progress]);

  return (
    <>
      {/* Main progress bar */}
      <div 
        className={`fixed top-0 left-0 right-0 z-50 h-1 transition-opacity duration-300 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <div className="absolute inset-0 bg-background/50 backdrop-blur-sm" />
        <div
          className="relative h-full bg-gradient-to-r from-primary via-[hsl(280,100%,65%)] to-primary transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        >
          {/* Leading glow dot */}
          <div 
            className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/50"
            style={{
              boxShadow: '0 0 20px hsl(var(--primary))',
            }}
          />
        </div>
        {/* Glow effect */}
        <div
          className="absolute top-0 h-2 bg-gradient-to-r from-primary via-[hsl(280,100%,65%)] to-primary blur-md opacity-60"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Scroll percentage indicator - moved up to avoid overlap */}
      <div 
        className={`fixed bottom-28 right-6 z-50 transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        <div className="relative group">
          <div className="absolute -inset-2 bg-primary/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="relative w-14 h-14 rounded-full glass-card flex items-center justify-center border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="28"
                cy="28"
                r="24"
                stroke="url(#progressGradient)"
                strokeWidth="3"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={`${progress * 1.51} 151`}
                className="transition-all duration-300"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" />
                  <stop offset="50%" stopColor="hsl(280 100% 65%)" />
                  <stop offset="100%" stopColor="hsl(var(--primary))" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-xs font-bold text-foreground">{Math.round(progress)}%</span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-8 left-8 z-50 p-3 glass-card rounded-full border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-500 group ${
          progress > 20 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg 
          className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
};

export default ScrollProgress;
