import { useMemo, useEffect, useState } from "react";
import useAdaptiveTheme from "@/hooks/useAdaptiveTheme";

const AdaptiveBackground = () => {
  const { theme, particleCount, orbCount, decorationCount, festivalConfig, prefersReducedMotion, deviceType } = useAdaptiveTheme();
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

  // Festival-specific decorations
  const decorations = useMemo(() => {
    if (!festivalConfig?.decorations) return [];
    return [...Array(decorationCount)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 8 + Math.random() * 12,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
    }));
  }, [festivalConfig, decorationCount]);

  const renderDecorations = () => {
    if (!festivalConfig?.decorations || prefersReducedMotion) return null;

    switch (festivalConfig.decorations) {
      case "lights":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {decorations.map((d) => (
              <div
                key={d.id}
                className="absolute rounded-full animate-pulse-soft"
                style={{
                  left: `${d.left}%`,
                  top: `-10px`,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                  background: `radial-gradient(circle, hsl(${d.id % 3 === 0 ? '45,100%,60%' : d.id % 3 === 1 ? '30,100%,55%' : '0,100%,50%'} / 0.8), transparent)`,
                  animationDuration: `${1 + (d.id % 3) * 0.5}s`,
                  animationDelay: `${d.delay * 0.1}s`,
                  boxShadow: `0 0 ${d.size * 2}px hsl(45,100%,60% / 0.5)`,
                }}
              />
            ))}
          </div>
        );

      case "snowflakes":
        return animationsActive ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {decorations.map((d) => (
              <div
                key={d.id}
                className="absolute animate-snowfall"
                style={{
                  left: `${d.left}%`,
                  top: `-20px`,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                  background: theme.particleColor,
                  borderRadius: "50%",
                  animationDuration: `${d.duration}s`,
                  animationDelay: `${d.delay}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes snowfall {
                0% { transform: translateY(-20px) translateX(0) rotate(0deg); opacity: 0; }
                10% { opacity: 0.8; }
                90% { opacity: 0.4; }
                100% { transform: translateY(100vh) translateX(50px) rotate(360deg); opacity: 0; }
              }
              .animate-snowfall { animation: snowfall linear infinite; }
            `}</style>
          </div>
        ) : null;

      case "fireworks":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {decorations.slice(0, 8).map((d) => (
              <div
                key={d.id}
                className="absolute animate-firework"
                style={{
                  left: `${10 + d.left * 0.8}%`,
                  bottom: `${20 + (d.id % 5) * 15}%`,
                  width: `${d.size * 2}px`,
                  height: `${d.size * 2}px`,
                  background: `radial-gradient(circle, hsl(${d.id * 40},100%,60% / 0.8), transparent 70%)`,
                  animationDelay: `${d.id * 0.8}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes firework {
                0%, 100% { transform: scale(0); opacity: 0; }
                50% { transform: scale(1); opacity: 1; }
                70% { transform: scale(1.2); opacity: 0.5; }
              }
              .animate-firework { animation: firework 3s ease-out infinite; }
            `}</style>
          </div>
        );

      case "hearts":
        return animationsActive ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {decorations.map((d) => (
              <div
                key={d.id}
                className="absolute animate-float-up text-xl sm:text-2xl"
                style={{
                  left: `${d.left}%`,
                  bottom: `-30px`,
                  animationDuration: `${d.duration}s`,
                  animationDelay: `${d.delay}s`,
                  opacity: 0.6,
                }}
              >
                💕
              </div>
            ))}
            <style>{`
              @keyframes float-up {
                0% { transform: translateY(0) rotate(0deg); opacity: 0; }
                10% { opacity: 0.6; }
                90% { opacity: 0.3; }
                100% { transform: translateY(-100vh) rotate(20deg); opacity: 0; }
              }
              .animate-float-up { animation: float-up linear infinite; }
            `}</style>
          </div>
        ) : null;

      case "lanterns":
        return (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {decorations.slice(0, 10).map((d) => (
              <div
                key={d.id}
                className="absolute animate-sway"
                style={{
                  left: `${d.left}%`,
                  top: `${10 + (d.id % 4) * 20}%`,
                  animationDuration: `${4 + d.id % 3}s`,
                  animationDelay: `${d.delay * 0.2}s`,
                }}
              >
                <div 
                  className="w-4 h-6 sm:w-6 sm:h-8 rounded-full"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, hsl(0,100%,55%), hsl(0,100%,40%))`,
                    boxShadow: `0 0 20px hsl(45,100%,50% / 0.5)`,
                  }}
                />
              </div>
            ))}
            <style>{`
              @keyframes sway {
                0%, 100% { transform: rotate(-5deg) translateX(0); }
                50% { transform: rotate(5deg) translateX(10px); }
              }
              .animate-sway { animation: sway ease-in-out infinite; }
            `}</style>
          </div>
        );

      case "leaves":
        return animationsActive ? (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {decorations.map((d) => (
              <div
                key={d.id}
                className="absolute animate-leaf-fall"
                style={{
                  left: `${d.left}%`,
                  top: `-30px`,
                  width: `${d.size}px`,
                  height: `${d.size}px`,
                  background: `hsl(${25 + d.id * 5},80%,${40 + d.id % 20}%)`,
                  borderRadius: "50% 0 50% 0",
                  transform: `rotate(${d.rotation}deg)`,
                  animationDuration: `${d.duration}s`,
                  animationDelay: `${d.delay}s`,
                }}
              />
            ))}
            <style>{`
              @keyframes leaf-fall {
                0% { transform: translateY(-30px) translateX(0) rotate(0deg); opacity: 0; }
                10% { opacity: 0.7; }
                100% { transform: translateY(100vh) translateX(100px) rotate(720deg); opacity: 0; }
              }
              .animate-leaf-fall { animation: leaf-fall linear infinite; }
            `}</style>
          </div>
        ) : null;

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 -z-10 transition-all duration-1000">
      {/* Base Gradient */}
      <div className={`absolute inset-0 bg-gradient-to-b ${theme.gradient} transition-all duration-1000`} />
      
      {/* Animated Noise Texture */}
      <div className="absolute inset-0 noise-bg opacity-30" />
      
      {/* Floating Orbs - Responsive sizes */}
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
                filter: `blur(${deviceType === "mobile" ? 80 : deviceType === "tablet" ? 120 : 150}px)`,
                transform: (orb as { centered?: boolean }).centered ? "translate(-50%, -50%)" : undefined,
              }}
            />
          ))}
        </div>
      )}

      {/* Season-specific particles */}
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
              10% { opacity: 0.8; }
              90% { opacity: 0.4; }
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
              0%, 100% { opacity: 0.5; transform: translate(-50%, -50%) scale(1); }
              50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
            }
            .animate-pulse-slow { animation: pulse-slow 8s ease-in-out infinite; }
          `}</style>
        </div>
      )}

      {/* Festival-specific decorations */}
      {renderDecorations()}

      {/* Subtle Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.02) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary) / 0.02) 1px, transparent 1px)`,
          backgroundSize: deviceType === "mobile" ? "50px 50px" : "100px 100px",
          maskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 80%)",
        }}
      />

      {/* Bottom fade for content */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </div>
  );
};

export default AdaptiveBackground;
