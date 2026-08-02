import { useEffect, useMemo, useState } from "react";

const FIRST = "CHAKRADHAR";
const LAST = "GUNNAM";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const burstParticles = useMemo(() => {
    if (reducedMotion) return [];
    return Array.from({ length: 20 }, (_, i) => {
      const angle = (Math.PI * 2 * i) / 20 + Math.random() * 0.3;
      const dist = 110 + Math.random() * 90;
      return {
        id: i,
        tx: Math.cos(angle) * dist,
        ty: Math.sin(angle) * dist,
        size: 2 + Math.random() * 3,
        delay: Math.random() * 0.08,
        hue: Math.random() > 0.45 ? "45" : "38",
      };
    });
  }, [reducedMotion]);

  const ambientParticles = useMemo(() => {
    if (reducedMotion) return [];
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      size: 1.5 + Math.random() * 3,
      delay: Math.random() * 5,
      duration: 4 + Math.random() * 5,
      hue: Math.random() > 0.4 ? "45" : "38",
    }));
  }, [reducedMotion]);

  useEffect(() => {
    const duration = reducedMotion ? 900 : 2600;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 150);
          setTimeout(onComplete, 760);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [reducedMotion, onComplete]);

  const showName = progress >= 15;
  const showBar = progress >= 26;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#040404] overflow-hidden ${
        isExiting ? "preloader-out" : ""
      }`}
      aria-label="Loading portfolio"
    >
      {/* Grid backdrop */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(hsl(45 100% 66% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(45 100% 66% / 0.05) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse at center, black 25%, transparent 72%)",
        }}
      />

      {/* Central aura */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(45 100% 55% / 0.12), transparent 60%)",
        }}
      />

      {/* Ambient rising particles */}
      {ambientParticles.map((p) => (
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
      <div className="absolute top-5 left-5 w-9 h-9 border-t-2 border-l-2 border-primary/40 hud-pulse" />
      <div className="absolute top-5 right-5 w-9 h-9 border-t-2 border-r-2 border-primary/40 hud-pulse" style={{ animationDelay: "0.5s" }} />
      <div className="absolute bottom-5 left-5 w-9 h-9 border-b-2 border-l-2 border-primary/40 hud-pulse" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-5 right-5 w-9 h-9 border-b-2 border-r-2 border-primary/40 hud-pulse" style={{ animationDelay: "1.5s" }} />

      {/* HUD labels */}
      <p className="absolute top-6 left-16 text-[9px] font-mono tracking-[0.3em] text-primary/50 hidden sm:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        CG // BOOT
      </p>
      <p className="absolute top-6 right-16 text-[9px] font-mono tracking-[0.3em] text-primary/50 hidden sm:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        v2.0
      </p>

      {/* Content */}
      <div className={`relative z-10 flex flex-col items-center gap-9 ${isExiting ? "content-out" : ""}`}>
        {/* Logo */}
        <div className="relative">
          {/* Burst particles (one-time explosion) */}
          <div className="absolute top-1/2 left-1/2 pointer-events-none">
            {burstParticles.map((p) => (
              <span
                key={p.id}
                className="absolute rounded-full burst-particle"
                style={{
                  width: p.size,
                  height: p.size,
                  background: `hsl(${p.hue} 100% 65%)`,
                  boxShadow: `0 0 ${p.size * 3}px hsl(${p.hue} 100% 60% / 0.9)`,
                  "--tx": `${p.tx}px`,
                  "--ty": `${p.ty}px`,
                  animationDelay: `${p.delay}s`,
                } as React.CSSProperties}
              />
            ))}
          </div>

          {/* Shockwave ring */}
          <div className="absolute -inset-2 rounded-full border-2 border-primary/60 shockwave pointer-events-none" />
          <div className="absolute -inset-5 rounded-full border border-primary/30 shockwave-delay pointer-events-none" />

          {/* Rotating rings */}
          <div className="absolute -inset-4 rounded-full border border-primary/15 ring-spin-slow" />
          <div className="absolute -inset-7 rounded-full border border-primary/10 ring-spin-reverse" />
          <div className="absolute -inset-2 rounded-full border-flow" />

          {/* Soft glow */}
          <div className="absolute -inset-5 rounded-full blur-2xl logo-glow" />

          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border border-primary/35 bg-black shadow-[0_0_70px_-12px_hsl(45_100%_55%/0.8)] logo-slam">
            <img
              src="/icon-256x256.png"
              alt="Chakradhar Gunnam"
              draggable={false}
              className="w-full h-full object-cover logo-breathe"
            />
            <div className="absolute inset-0 logo-sheen pointer-events-none" />
          </div>
        </div>

        {/* Name reveal */}
        <div className="text-center">
          <h1
            className={`text-3xl md:text-4xl font-heading font-black tracking-[0.12em] ${
              showName ? "" : "opacity-0"
            }`}
            style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 34px hsl(45 100% 60% / 0.35)" }}
          >
            {!showName ? null : (
              <>
                <span className="inline-block">
                  {FIRST.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block name-letter text-foreground"
                      style={{ animationDelay: `${i * 45}ms` }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
                <span className="inline-block">
                  {LAST.split("").map((ch, i) => (
                    <span
                      key={i}
                      className="inline-block name-letter gradient-text-static"
                      style={{ animationDelay: `${(FIRST.length + i) * 45 + 80}ms` }}
                    >
                      {ch}
                    </span>
                  ))}
                </span>
              </>
            )}
          </h1>
          <p className={`text-muted-foreground text-[11px] tracking-[0.4em] uppercase mt-3 font-mono ${showName ? "tagline-in" : "opacity-0"}`} style={{ fontFamily: "'JetBrains Mono', monospace" }}>
            Software Engineer · AI/ML Developer
          </p>
        </div>

        {/* Progress bar */}
        <div className={`flex items-center gap-3 ${showBar ? "bar-in" : "opacity-0"}`}>
          <div className="w-60 md:w-72 h-1.5 rounded-full bg-white/10 overflow-hidden">
            <div
              className="h-full rounded-full energy-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-sm font-black gradient-text tabular-nums min-w-[3.5ch] text-right" style={{ fontFamily: "'Orbitron', sans-serif" }}>
            {Math.floor(progress)}%
          </span>
        </div>
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, hsl(0 0% 100% / 0.02) 2px 4px)",
        }}
      />

      {/* Exit gate panels */}
      {isExiting && !reducedMotion && (
        <>
          <div className="absolute inset-y-0 left-0 w-1/2 z-30 gate-panel gate-left" />
          <div className="absolute inset-y-0 right-0 w-1/2 z-30 gate-panel gate-right" />
        </>
      )}

      <style>{`
        @keyframes logo-slam {
          0% { opacity: 0; transform: scale(0.35) rotate(-14deg); filter: blur(16px); }
          60% { opacity: 1; transform: scale(1.06) rotate(1.5deg); filter: blur(0); }
          100% { opacity: 1; transform: scale(1) rotate(0); filter: blur(0); }
        }
        .logo-slam { animation: logo-slam 0.75s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes shockwave {
          0% { transform: scale(0.35); opacity: 0.9; }
          100% { transform: scale(1.9); opacity: 0; }
        }
        .shockwave { animation: shockwave 1s cubic-bezier(0, 0, 0.2, 1) 0.15s both; }

        @keyframes shockwave-delay {
          0% { transform: scale(0.35); opacity: 0.7; }
          100% { transform: scale(2.3); opacity: 0; }
        }
        .shockwave-delay { animation: shockwave-delay 1.2s cubic-bezier(0, 0, 0.2, 1) 0.35s both; }

        @keyframes burst-particle {
          0% { transform: translate(0, 0) scale(1); opacity: 0; }
          8% { opacity: 1; }
          100% { transform: translate(var(--tx), var(--ty)) scale(0.25); opacity: 0; }
        }
        .burst-particle { animation: burst-particle 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both; }

        @keyframes name-letter-in {
          0% { opacity: 0; transform: translateY(26px) rotateX(90deg); filter: blur(6px); }
          100% { opacity: 1; transform: translateY(0) rotateX(0); filter: blur(0); }
        }
        .name-letter { animation: name-letter-in 0.55s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes tagline-in {
          from { opacity: 0; transform: translateY(8px); letter-spacing: 0.55em; }
          to { opacity: 1; transform: translateY(0); letter-spacing: 0.4em; }
        }
        .tagline-in { animation: tagline-in 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both; }

        @keyframes bar-in {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .bar-in { animation: bar-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes float-particle {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.9; }
          60% { opacity: 0.5; }
          100% { transform: translateY(-115vh) scale(0.35); opacity: 0; }
        }

        @keyframes ring-spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .ring-spin-slow { animation: ring-spin-slow 10s linear infinite; }

        @keyframes ring-spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .ring-spin-reverse { animation: ring-spin-reverse 7s linear infinite; }

        @keyframes logo-breathe {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.03); filter: brightness(1.14); }
        }
        .logo-breathe { animation: logo-breathe 2.6s ease-in-out infinite; }

        @keyframes logo-glow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.95; }
        }
        .logo-glow { background: hsl(45 100% 55% / 0.32); animation: logo-glow 2.6s ease-in-out infinite; }

        @keyframes logo-sheen {
          0% { transform: translateX(-130%) skewX(-20deg); }
          60%, 100% { transform: translateX(230%) skewX(-20deg); }
        }
        .logo-sheen {
          background: linear-gradient(105deg, transparent 40%, hsl(45 100% 80% / 0.16) 50%, transparent 60%);
          animation: logo-sheen 2.4s ease-in-out infinite;
        }

        @keyframes energy-bar-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.45); }
        }
        .energy-bar {
          background: linear-gradient(90deg, hsl(38 95% 50%), hsl(45 100% 66%));
          box-shadow: 0 0 16px hsl(45 100% 60% / 0.7);
          animation: energy-bar-glow 1.1s ease-in-out infinite;
        }

        @keyframes hud-pulse {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 1; }
        }
        .hud-pulse { animation: hud-pulse 2.2s ease-in-out infinite; }

        @keyframes content-out {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.08); }
        }
        .content-out { animation: content-out 0.4s ease-out both; }

        @keyframes gate-open-left {
          from { transform: translateX(0); }
          to { transform: translateX(-101%); }
        }
        .gate-left {
          background: linear-gradient(90deg, hsl(38 95% 50%), hsl(45 100% 66%), hsl(38 95% 50%));
          box-shadow: 40px 0 80px hsl(45 100% 60% / 0.55);
          animation: gate-open-left 0.65s cubic-bezier(0.65, 0, 0.35, 1) both;
        }

        @keyframes gate-open-right {
          from { transform: translateX(0); }
          to { transform: translateX(101%); }
        }
        .gate-right {
          background: linear-gradient(90deg, hsl(45 100% 66%), hsl(38 95% 50%), hsl(45 100% 66%));
          box-shadow: -40px 0 80px hsl(45 100% 60% / 0.55);
          animation: gate-open-right 0.65s cubic-bezier(0.65, 0, 0.35, 1) both;
        }
      `}</style>
    </div>
  );
};

export default Preloader;
