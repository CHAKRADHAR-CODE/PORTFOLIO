import { useEffect, useMemo, useState } from "react";

const bootMessages = [
  { at: 0, text: "INITIALIZING CORE SYSTEMS..." },
  { at: 22, text: "LOADING ASSETS & SHADERS..." },
  { at: 45, text: "CALIBRATING AI MODULES..." },
  { at: 68, text: "COMPILING PROJECTS..." },
  { at: 88, text: "ENTERING PORTFOLIO..." },
];

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const particles = useMemo(
    () =>
      Array.from({ length: reducedMotion ? 0 : 14 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 2 + Math.random() * 4,
        delay: Math.random() * 4,
        duration: 4 + Math.random() * 5,
        hue: Math.random() > 0.4 ? "45" : "38",
      })),
    [reducedMotion]
  );

  useEffect(() => {
    const duration = reducedMotion ? 700 : 2200;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 150);
          setTimeout(onComplete, 800);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [reducedMotion, onComplete]);

  const message =
    [...bootMessages].reverse().find((m) => progress >= m.at)?.text ??
    bootMessages[0].text;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden ${
        isExiting ? "preloader-exit" : ""
      }`}
      aria-label="Loading portfolio"
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(45 100% 66% / 0.04) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 66% / 0.04) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* Center glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(45 100% 55% / 0.10), transparent 60%)",
        }}
      />

      {/* Rising particles */}
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-20px] rounded-full pointer-events-none"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            background: `hsl(${p.hue} 100% 65%)`,
            boxShadow: `0 0 ${p.size * 3}px hsl(${p.hue} 100% 60% / 0.8)`,
            animation: `float-particle ${p.duration}s linear ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* HUD corner brackets */}
      <div className="absolute top-6 left-6 w-10 h-10 border-t-2 border-l-2 border-primary/50 hud-pulse" />
      <div className="absolute top-6 right-6 w-10 h-10 border-t-2 border-r-2 border-primary/50 hud-pulse" style={{ animationDelay: "0.4s" }} />
      <div className="absolute bottom-6 left-6 w-10 h-10 border-b-2 border-l-2 border-primary/50 hud-pulse" style={{ animationDelay: "0.8s" }} />
      <div className="absolute bottom-6 right-6 w-10 h-10 border-b-2 border-r-2 border-primary/50 hud-pulse" style={{ animationDelay: "1.2s" }} />

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, hsl(0 0% 100% / 0.02) 2px 4px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-7">
        {/* Boot tag */}
        <div
          className="flex items-center gap-2 text-[11px] font-mono tracking-[0.35em] text-primary/70 boot-tag"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary energy-dot" />
          SYSTEM BOOT v2.0
        </div>

        {/* Logo */}
        <div className="relative logo-enter">
          {/* Outer rotating rings */}
          <div className="absolute -inset-7 rounded-full border border-primary/15 ring-spin-slow" />
          <div className="absolute -inset-10 rounded-full border border-primary/10 ring-spin-reverse" />
          {/* Rotating conic gold border */}
          <div className="absolute -inset-2 rounded-full border-flow" />
          {/* Soft glow */}
          <div className="absolute -inset-4 rounded-full blur-2xl logo-glow" />

          <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border border-primary/40 bg-black shadow-[0_0_50px_-10px_hsl(45_100%_55%/0.6)]">
            <img
              src="/icon.png"
              alt="Chakradhar Gunnam logo"
              draggable={false}
              className="w-full h-full object-cover logo-breathe"
            />
            {/* Sheen sweep */}
            <div className="absolute inset-0 logo-sheen pointer-events-none" />
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h1
            className="text-3xl md:text-4xl font-heading font-black tracking-widest"
            style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 30px hsl(45 100% 60% / 0.35)" }}
          >
            <span className="text-foreground">CHAKRADHAR</span>
            <span className="gradient-text ml-2">GUNNAM</span>
          </h1>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mt-2 font-mono">
            Software Engineer · AI/ML Developer
          </p>
        </div>

        {/* Percentage counter */}
        <div className="flex items-end gap-1" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          <span className="text-5xl md:text-6xl font-black gradient-text tabular-nums">
            {Math.floor(progress)}
          </span>
          <span className="text-xl font-bold text-foreground/40 mb-1">%</span>
        </div>

        {/* Energy bar */}
        <div className="w-72 md:w-80">
          <div className="relative h-3 rounded-full bg-white/5 border border-primary/20 overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 rounded-full energy-bar-fill"
              style={{
                width: `${progress}%`,
                background:
                  "linear-gradient(90deg, hsl(38 95% 50%), hsl(45 100% 66%))",
                boxShadow: "0 0 18px hsl(45 100% 60% / 0.7)",
              }}
            />
            {/* Segment ticks */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "repeating-linear-gradient(90deg, transparent 0 27px, hsl(0 0% 0% / 0.55) 27px 29px)",
              }}
            />
          </div>
          <div className="flex justify-between mt-1.5 font-mono text-[9px] text-primary/50 tracking-widest">
            <span>PWR</span>
            <span>MEM 1.36K</span>
            <span>GPU OK</span>
          </div>
        </div>

        {/* Status message */}
        <p
          className="text-[11px] font-mono tracking-[0.25em] text-primary/80 text-center min-h-[16px] status-flicker"
          style={{ fontFamily: "'JetBrains Mono', monospace" }}
        >
          {message}
        </p>
      </div>

      {/* Exit gate wipe */}
      {isExiting && (
        <>
          <div className="absolute inset-y-0 left-0 w-1/2 z-30 gate-left" />
          <div className="absolute inset-y-0 right-0 w-1/2 z-30 gate-right" />
        </>
      )}

      <style>{`
        @keyframes float-particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.9; }
          60% { opacity: 0.5; }
          100% { transform: translateY(-115vh) scale(0.35); opacity: 0; }
        }

        @keyframes ring-spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .ring-spin-slow {
          animation: ring-spin-slow 10s linear infinite;
        }

        @keyframes ring-spin-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .ring-spin-reverse {
          animation: ring-spin-reverse 7s linear infinite;
        }

        @keyframes logo-breathe {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.05); filter: brightness(1.2); }
        }
        .logo-breathe {
          animation: logo-breathe 2.4s ease-in-out infinite;
        }

        @keyframes logo-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .logo-glow {
          background: hsl(45 100% 55% / 0.35);
          animation: logo-glow 2.4s ease-in-out infinite;
        }

        @keyframes logo-sheen {
          0% { transform: translateX(-120%) skewX(-20deg); }
          100% { transform: translateX(220%) skewX(-20deg); }
        }
        .logo-sheen {
          background: linear-gradient(105deg, transparent 40%, hsl(45 100% 80% / 0.18) 50%, transparent 60%);
          animation: logo-sheen 2.8s ease-in-out infinite;
        }

        @keyframes logo-enter {
          from { opacity: 0; transform: scale(0.6); filter: blur(12px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .logo-enter {
          animation: logo-enter 0.9s cubic-bezier(0.16, 1, 0.3, 1) both;
        }

        @keyframes boot-tag {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .boot-tag {
          animation: boot-tag 1.8s ease-in-out infinite;
        }

        @keyframes status-flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.55; }
        }
        .status-flicker {
          animation: status-flicker 1.4s ease-in-out infinite;
        }

        @keyframes hud-pulse {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 1; }
        }
        .hud-pulse {
          animation: hud-pulse 2.4s ease-in-out infinite;
        }

        @keyframes energy-bar-fill {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.35); }
        }
        .energy-bar-fill {
          animation: energy-bar-fill 1.2s ease-in-out infinite;
        }

        @keyframes gate-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        .gate-left {
          background: linear-gradient(90deg, hsl(38 95% 50%), hsl(45 100% 66%), hsl(38 95% 50%));
          box-shadow: 0 0 60px hsl(45 100% 60% / 0.8);
          animation: gate-left 0.65s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes gate-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .gate-right {
          background: linear-gradient(90deg, hsl(45 100% 66%), hsl(38 95% 50%), hsl(45 100% 66%));
          box-shadow: 0 0 60px hsl(45 100% 60% / 0.8);
          animation: gate-right 0.65s cubic-bezier(0.65, 0, 0.35, 1) forwards;
        }

        @keyframes preloader-exit {
          0% { opacity: 1; }
          100% { opacity: 0.35; }
        }
        .preloader-exit {
          animation: preloader-exit 0.35s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
