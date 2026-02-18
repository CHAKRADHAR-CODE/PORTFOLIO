import { useMemo, useEffect, useState } from "react";
import { ThemeColors, DeviceType, Season } from "@/config/adaptiveTheme";

interface AdaptiveBackgroundProps {
  theme: ThemeColors;
  particleCount: number;
  orbCount: number;
  prefersReducedMotion: boolean;
  deviceType: DeviceType;
  season: Season;
}

const AdaptiveBackground = ({ 
  theme, 
  particleCount, 
  orbCount, 
  prefersReducedMotion, 
  deviceType,
  season
}: AdaptiveBackgroundProps) => {
  const [animationsActive, setAnimationsActive] = useState(true);

  // Stop ambient animations after 10 seconds on mobile to save battery
  useEffect(() => {
    if (deviceType === "mobile" && !prefersReducedMotion) {
      const timer = setTimeout(() => {
        setAnimationsActive(false);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [deviceType, prefersReducedMotion]);

  // Memoize random positions for particles
  const particles = useMemo(() => 
    [...Array(particleCount)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      duration: 8 + Math.random() * 12,
      delay: Math.random() * 10,
      opacity: 0.4 + Math.random() * 0.4,
    })), [particleCount]);

  // Memoize orb positions
  const orbs = useMemo(() => {
    const positions = [
      { top: "10%", left: "15%", size: 600 },
      { bottom: "20%", right: "10%", size: 500 },
      { top: "50%", left: "50%", size: 800, centered: true },
    ];
    return positions.slice(0, orbCount);
  }, [orbCount]);

  // Season-specific decorations (no snowfall, clean particles only)
  const renderSeasonDecorations = () => {
    if (prefersReducedMotion || !animationsActive) return null;

    switch (season) {
      case "winter":
        // Soft frost particles — no snowfall, just subtle drifting orbs
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${10 + i * 11}%`,
                  top: `${15 + (i % 4) * 20}%`,
                  width: `${3 + Math.random() * 3}px`,
                  height: `${3 + Math.random() * 3}px`,
                  background: "hsl(200,60%,85%,0.35)",
                  animation: `orb-float-slow ${14 + i * 2}s ease-in-out infinite`,
                  animationDelay: `${i * 1.5}s`,
                }}
              />
            ))}
          </div>
        );

      case "autumn":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-leaf-fall"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `-30px`,
                  width: `${8 + Math.random() * 8}px`,
                  height: `${8 + Math.random() * 8}px`,
                  background: `hsl(${15 + i * 4},80%,${38 + (i % 15)}%)`,
                  borderRadius: "50% 0 50% 0",
                  animationDuration: `${14 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes leaf-fall {
                0% { transform: translateY(-30px) translateX(0) rotate(0deg); opacity: 0; }
                10% { opacity: 0.6; }
                100% { transform: translateY(100vh) translateX(80px) rotate(720deg); opacity: 0; }
              }
              .animate-leaf-fall { animation: leaf-fall linear infinite; }
            `}</style>
          </div>
        );

      case "spring":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-bloom-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: `-20px`,
                  width: `${5 + Math.random() * 5}px`,
                  height: `${5 + Math.random() * 5}px`,
                  background: `hsl(${330 + i * 8},65%,75%,0.6)`,
                  borderRadius: "50%",
                  animationDuration: `${16 + Math.random() * 10}s`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes bloom-float {
                0% { transform: translateY(0) translateX(0); opacity: 0; }
                10% { opacity: 0.5; }
                90% { opacity: 0.25; }
                100% { transform: translateY(-100vh) translateX(25px); opacity: 0; }
              }
              .animate-bloom-float { animation: bloom-float linear infinite; }
            `}</style>
          </div>
        );

      case "summer":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute animate-summer-shimmer"
                style={{
                  left: `${15 + Math.random() * 70}%`,
                  top: `${15 + Math.random() * 70}%`,
                  width: `${2 + Math.random() * 2}px`,
                  height: `${2 + Math.random() * 2}px`,
                  background: "hsl(45,90%,65%,0.6)",
                  borderRadius: "50%",
                  animationDuration: `${2.5 + Math.random() * 3}s`,
                  animationDelay: `${Math.random() * 2}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes summer-shimmer {
                0%, 100% { opacity: 0.2; transform: scale(1); }
                50% { opacity: 0.8; transform: scale(1.4); }
              }
              .animate-summer-shimmer { animation: summer-shimmer ease-in-out infinite; }
            `}</style>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 -z-10 transition-all duration-1000">
      {/* Deep black base gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} transition-all duration-1000`} />
      
      {/* Noise texture */}
      <div className="absolute inset-0 noise-bg opacity-20" />

      {/* CRT scan-line overlay — very subtle premium effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 0% / 0.08) 2px, hsl(0 0% 0% / 0.08) 3px)",
          backgroundSize: "100% 3px",
        }}
      />

      {/* Radial speed-lines — anime motif */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "repeating-conic-gradient(hsl(0 85% 45% / 0.015) 0deg 1deg, transparent 1deg 10deg)",
        }}
      />

      {/* Floating Orbs */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden">
          {orbs.map((orb, i) => (
            <div
              key={i}
              className={`absolute rounded-full transition-colors duration-1000 ${
                animationsActive ? (i === 2 ? "animate-pulse-slow" : i === 0 ? "animate-orb-float-slow" : "animate-orb-float-medium") : ""
              }`}
              style={{
                top: orb.top,
                left: orb.left,
                bottom: (orb as { bottom?: string }).bottom,
                right: (orb as { right?: string }).right,
                width: `${deviceType === "mobile" ? orb.size * 0.5 : deviceType === "tablet" ? orb.size * 0.75 : orb.size}px`,
                height: `${deviceType === "mobile" ? orb.size * 0.5 : deviceType === "tablet" ? orb.size * 0.75 : orb.size}px`,
                background: theme.orbColors[i] || theme.orbColors[0],
                filter: `blur(${deviceType === "mobile" ? 80 : deviceType === "tablet" ? 120 : 160}px)`,
                transform: (orb as { centered?: boolean }).centered ? "translate(-50%, -50%)" : undefined,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating particles */}
      {animationsActive && !prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full animate-particle-float"
              style={{
                left: `${p.left}%`,
                top: `-10px`,
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: theme.particleColor,
                animationDuration: `${p.duration}s`,
                animationDelay: `${p.delay}s`,
                opacity: p.opacity,
              }}
            />
          ))}
          <style>{`
            @keyframes particle-float {
              0% { transform: translateY(-10px); opacity: 0; }
              10% { opacity: 0.7; }
              90% { opacity: 0.3; }
              100% { transform: translateY(100vh); opacity: 0; }
            }
            .animate-particle-float { animation: particle-float linear infinite; }
            
            @keyframes orb-float-slow {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(20px, -30px) scale(1.05); }
            }
            .animate-orb-float-slow { animation: orb-float-slow 20s ease-in-out infinite; }
            
            @keyframes orb-float-medium {
              0%, 100% { transform: translate(0, 0) scale(1); }
              50% { transform: translate(-15px, -20px) scale(0.95); }
            }
            .animate-orb-float-medium { animation: orb-float-medium 15s ease-in-out infinite; }
            
            @keyframes pulse-slow {
              0%, 100% { opacity: 0.4; transform: translate(-50%, -50%) scale(1); }
              50% { opacity: 0.65; transform: translate(-50%, -50%) scale(1.08); }
            }
            .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
          `}</style>
        </div>
      )}

      {/* Season decorations */}
      {renderSeasonDecorations()}

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.025) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.025) 1px, transparent 1px)`,
          backgroundSize: deviceType === "mobile" ? "50px 50px" : "80px 80px",
          maskImage: "radial-gradient(ellipse at center, black 10%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 10%, transparent 75%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent" />

      {/* Left & right edge vignette */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background/60 to-transparent" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background/60 to-transparent" />
    </div>
  );
};

export default AdaptiveBackground;