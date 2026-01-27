import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { FestivalConfig } from "@/config/adaptiveTheme";

interface FestivalGreetingProps {
  festivalConfig: FestivalConfig | null;
}

const FestivalGreeting = ({ festivalConfig }: FestivalGreetingProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (!festivalConfig) return;

    // Check if already dismissed in this session
    const dismissedKey = `festival_dismissed_${festivalConfig.name}`;
    const wasDismissed = sessionStorage.getItem(dismissedKey);
    
    if (wasDismissed) {
      setIsDismissed(true);
      return;
    }

    // Show greeting after a short delay
    const showTimer = setTimeout(() => {
      setIsVisible(true);
    }, 1500);

    // Auto-hide after 8 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 9500);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, [festivalConfig]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    if (festivalConfig) {
      sessionStorage.setItem(`festival_dismissed_${festivalConfig.name}`, "true");
    }
  };

  if (!festivalConfig || isDismissed) return null;

  return (
    <div
      className={`
        fixed top-20 left-1/2 -translate-x-1/2 z-50
        transition-all duration-700 ease-out
        ${isVisible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }
      `}
    >
      <div 
        className="
          relative overflow-hidden
          px-6 py-4 sm:px-8 sm:py-5
          rounded-2xl
          backdrop-blur-xl
          border border-border/30
          shadow-2xl
        "
        style={{
          background: `linear-gradient(135deg, hsl(${festivalConfig.theme.accentHsl} / 0.15), hsl(var(--card) / 0.8))`,
          boxShadow: `0 0 40px hsl(${festivalConfig.theme.accentHsl} / 0.2), 0 20px 40px hsl(0 0% 0% / 0.3)`,
        }}
      >
        {/* Animated glow border */}
        <div 
          className="absolute inset-0 rounded-2xl opacity-50"
          style={{
            background: `linear-gradient(90deg, transparent, hsl(${festivalConfig.theme.accentHsl} / 0.3), transparent)`,
            animation: isVisible ? "shimmer-horizontal 3s ease-in-out infinite" : "none",
          }}
        />
        
        {/* Content */}
        <div className="relative flex items-center gap-4">
          {/* Animated emoji */}
          <span 
            className="text-3xl sm:text-4xl animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            {festivalConfig.emoji}
          </span>
          
          {/* Greeting text */}
          <div className="flex flex-col">
            <span 
              className="text-lg sm:text-xl font-semibold tracking-wide"
              style={{ color: `hsl(${festivalConfig.theme.accentHsl})` }}
            >
              {festivalConfig.greeting}
            </span>
            <span className="text-xs sm:text-sm text-muted-foreground">
              Wishing you joy and success!
            </span>
          </div>
          
          {/* Dismiss button */}
          <button
            onClick={handleDismiss}
            className="
              ml-4 p-1.5 rounded-full
              text-muted-foreground hover:text-foreground
              hover:bg-foreground/10
              transition-colors duration-200
            "
            aria-label="Dismiss greeting"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Decorative particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full animate-float"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                background: `hsl(${festivalConfig.theme.accentHsl} / 0.6)`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + i * 0.5}s`,
              }}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes shimmer-horizontal {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default FestivalGreeting;
