import { useEffect, useMemo, useState } from "react";

type Stage = "loading" | "box-out" | "welcome" | "open";

const NORMAL = { load: 2000, boxDelay: 120, boxTime: 650, welcomeAt: 780, openAt: 2050, doneAt: 2550 };
const REDUCED = { load: 500, boxDelay: 0, boxTime: 350, welcomeAt: 380, openAt: 1250, doneAt: 1500 };

const WELCOME = "WELCOME";
const SEGMENTS = 20;

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [stage, setStage] = useState<Stage>("loading");

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  const timing = reducedMotion ? REDUCED : NORMAL;
  const done = progress >= 100;

  // Progress ticker 0 -> 100
  useEffect(() => {
    const interval = 20;
    const increment = 100 / (timing.load / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        return next >= 100 ? 100 : next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [timing.load]);

  // Stage machine: box-out -> welcome -> open
  useEffect(() => {
    if (!done) return;
    const timers = [
      setTimeout(() => setStage("box-out"), timing.boxDelay),
      setTimeout(() => setStage("welcome"), timing.welcomeAt),
      setTimeout(() => setStage("open"), timing.openAt),
      setTimeout(onComplete, timing.doneAt),
    ];
    return () => timers.forEach(clearTimeout);
  }, [done, timing, onComplete]);

  const boxGone = stage !== "loading";

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#040404] overflow-hidden transition-opacity duration-500 ${
        stage === "open" ? "opacity-0 pointer-events-none" : "opacity-100"
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
          maskImage: "radial-gradient(ellipse at center, black 30%, transparent 74%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 74%)",
        }}
      />

      {/* Central aura */}
      <div
        className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[640px] rounded-full pointer-events-none transition-opacity duration-700 ${
          stage === "welcome" ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "radial-gradient(circle, hsl(45 100% 55% / 0.14), transparent 62%)",
        }}
      />

      {/* HUD corner brackets */}
      <div className="absolute top-5 left-5 w-9 h-9 border-t-2 border-l-2 border-primary/30" />
      <div className="absolute top-5 right-5 w-9 h-9 border-t-2 border-r-2 border-primary/30" />
      <div className="absolute bottom-5 left-5 w-9 h-9 border-b-2 border-l-2 border-primary/30" />
      <div className="absolute bottom-5 right-5 w-9 h-9 border-b-2 border-r-2 border-primary/30" />

      {/* HUD labels */}
      <p className="absolute top-6 left-16 text-[9px] font-mono tracking-[0.3em] text-primary/40 hidden sm:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        CG // BOOT
      </p>
      <p className="absolute top-6 right-16 text-[9px] font-mono tracking-[0.3em] text-primary/40 hidden sm:block" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        v2.1
      </p>

      {/* THE BOX — slides right-to-left when 100% reached */}
      <div
        className={`relative transition-transform ${
          boxGone ? "-translate-x-[140vw]" : "translate-x-0"
        }`}
        style={{
          transitionDuration: `${timing.boxTime}ms`,
          transitionTimingFunction: "cubic-bezier(0.65, 0, 0.35, 1)",
        }}
      >
        {/* Glow behind box */}
        <div
          className="absolute -inset-6 rounded-2xl pointer-events-none transition-opacity duration-500"
          style={{
            background: "radial-gradient(circle at center, hsl(45 100% 55% / 0.16), transparent 70%)",
            opacity: boxGone ? 0 : 1,
          }}
        />

        {/* Corner brackets */}
        <div className="absolute -top-2 -left-2 w-6 h-6 border-t-2 border-l-2 border-primary/80 z-10" />
        <div className="absolute -top-2 -right-2 w-6 h-6 border-t-2 border-r-2 border-primary/80 z-10" />
        <div className="absolute -bottom-2 -left-2 w-6 h-6 border-b-2 border-l-2 border-primary/80 z-10" />
        <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-2 border-r-2 border-primary/80 z-10" />

        {/* Card */}
        <div className="relative w-[320px] md:w-[400px] rounded-2xl border border-primary/25 bg-[#0a0a0a]/95 overflow-hidden shadow-[0_0_90px_-18px_hsl(45_100%_55%/0.7)] box-in">
          {/* Top accent line */}
          <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-primary/70 to-transparent" />

          {/* Header */}
          <div className="flex items-center gap-3.5 px-6 pt-6 pb-5">
            <div className="relative w-12 h-12 rounded-full overflow-hidden border border-primary/40 shrink-0">
              <img
                src="/icon-256x256.png"
                alt="CG"
                draggable={false}
                className="w-full h-full object-cover"
              />
              {!reducedMotion && <div className="absolute inset-0 box-sheen" />}
            </div>
            <div className="min-w-0">
              <p className="text-sm font-black tracking-[0.08em] whitespace-nowrap" style={{ fontFamily: "'Orbitron', sans-serif" }}>
                CHAKRADHAR GUNNAM
              </p>
              <p className="text-[10px] tracking-[0.3em] text-muted-foreground font-mono mt-1">
                SOFTWARE ENGINEER · AI/ML
              </p>
            </div>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent mx-6" />

          {/* Loading body */}
          <div className="px-6 pt-5 pb-6">
            <div className="flex items-end justify-between mb-3.5">
              <span className="text-[10px] tracking-[0.35em] text-muted-foreground font-mono">LOADING</span>
              <span
                className="text-4xl font-black gradient-text tabular-nums leading-none"
                style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 30px hsl(45 100% 60% / 0.4)" }}
              >
                {Math.floor(progress)}%
              </span>
            </div>

            {/* Segmented progress bar */}
            <div className="flex gap-1">
              {Array.from({ length: SEGMENTS }, (_, i) => {
                const filled = progress >= ((i + 1) / SEGMENTS) * 100;
                return (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-sm transition-colors duration-100 ${
                      filled ? "energy-seg" : "bg-white/10"
                    }`}
                  />
                );
              })}
            </div>

            {/* Footer row */}
            <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-muted-foreground">
              <span className="tracking-[0.25em]">INITIALIZING PORTFOLIO</span>
              <span className="flex gap-1 items-center">
                <span className="w-1 h-1 rounded-full bg-primary/80 dot" style={{ animationDelay: "0ms" }} />
                <span className="w-1 h-1 rounded-full bg-primary/80 dot" style={{ animationDelay: "200ms" }} />
                <span className="w-1 h-1 rounded-full bg-primary/80 dot" style={{ animationDelay: "400ms" }} />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* WELCOME reveal (visible once the box slides away) */}
      {(stage === "welcome" || stage === "open") && (
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <h1
            className="text-5xl md:text-8xl font-black tracking-[0.16em] px-2 text-center"
            style={{ fontFamily: "'Orbitron', sans-serif", textShadow: "0 0 60px hsl(45 100% 60% / 0.5)" }}
          >
            {WELCOME.split("").map((ch, i) => (
              <span
                key={i}
                className="inline-block welcome-letter gradient-text-static"
                style={{ animationDelay: `${i * 75}ms` }}
              >
                {ch}
              </span>
            ))}
          </h1>
          <p className="welcome-tag text-muted-foreground tracking-[0.5em] text-xs md:text-sm font-mono uppercase mt-6">
            To My Portfolio
          </p>
        </div>
      )}

      {/* Scanlines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background:
            "repeating-linear-gradient(0deg, transparent 0 2px, hsl(0 0% 100% / 0.02) 2px 4px)",
        }}
      />

      <style>{`
        @keyframes box-in {
          0% { opacity: 0; transform: scale(0.78) translateY(34px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .box-in { animation: box-in ${reducedMotion ? "0.3s" : "0.6s"} cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes box-sheen {
          0% { transform: translateX(-160%) skewX(-20deg); }
          60%, 100% { transform: translateX(260%) skewX(-20deg); }
        }
        .box-sheen {
          background: linear-gradient(105deg, transparent 35%, hsl(45 100% 80% / 0.22) 50%, transparent 65%);
          animation: box-sheen 2.8s ease-in-out infinite;
        }

        .energy-seg {
          background: linear-gradient(90deg, hsl(38 95% 50%), hsl(45 100% 66%));
          box-shadow: 0 0 12px hsl(45 100% 60% / 0.8);
        }

        @keyframes dot-blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 1; }
        }
        .dot { animation: dot-blink 1.2s ease-in-out infinite; }

        @keyframes welcome-letter {
          0% { opacity: 0; transform: translateY(60px) rotateX(90deg) scale(0.6); filter: blur(10px); }
          100% { opacity: 1; transform: translateY(0) rotateX(0) scale(1); filter: blur(0); }
        }
        .welcome-letter { animation: welcome-letter 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes welcome-tag {
          from { opacity: 0; transform: translateY(16px); letter-spacing: 0.7em; }
          to { opacity: 1; transform: translateY(0); letter-spacing: 0.5em; }
        }
        .welcome-tag { animation: welcome-tag 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.6s both; }

        @media (prefers-reduced-motion: reduce) {
          .box-sheen, .dot { animation: none; }
          .welcome-letter { animation-duration: 0.3s; }
          .welcome-tag { animation-duration: 0.3s; animation-delay: 0.15s; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
