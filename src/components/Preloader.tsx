import { useEffect, useMemo, useState } from "react";

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const reducedMotion = useMemo(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    []
  );

  useEffect(() => {
    const duration = reducedMotion ? 600 : 1800;
    const interval = 25;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsExiting(true), 120);
          setTimeout(onComplete, 550);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [reducedMotion, onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-[#050505] overflow-hidden ${
        isExiting ? "preloader-exit" : ""
      }`}
      aria-label="Loading portfolio"
    >
      {/* Soft gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(45 100% 55% / 0.10), transparent 62%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-10">
        {/* Logo */}
        <div className="relative logo-enter">
          {/* Rotating gold ring */}
          <div className="absolute -inset-2 rounded-full border-flow" />
          {/* Soft glow */}
          <div className="absolute -inset-6 rounded-full blur-2xl logo-glow" />

          <div className="relative w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border border-primary/30 bg-black shadow-[0_0_60px_-12px_hsl(45_100%_55%/0.7)]">
            <img
              src="/icon-256x256.png"
              alt="Chakradhar Gunnam"
              draggable={false}
              className="w-full h-full object-cover logo-breathe"
            />
            {/* Sheen sweep */}
            <div className="absolute inset-0 logo-sheen pointer-events-none" />
          </div>
        </div>

        {/* Thin energy line */}
        <div className="w-56 h-1 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full energy-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Exit sweep line */}
      <div className="absolute inset-y-0 -left-1/4 w-1/2 z-30 exit-sweep pointer-events-none" />

      <style>{`
        @keyframes logo-breathe {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.03); filter: brightness(1.12); }
        }
        .logo-breathe { animation: logo-breathe 2.6s ease-in-out infinite; }

        @keyframes logo-glow {
          0%, 100% { opacity: 0.45; }
          50% { opacity: 0.9; }
        }
        .logo-glow { background: hsl(45 100% 55% / 0.30); animation: logo-glow 2.6s ease-in-out infinite; }

        @keyframes logo-sheen {
          0% { transform: translateX(-130%) skewX(-20deg); }
          60%, 100% { transform: translateX(230%) skewX(-20deg); }
        }
        .logo-sheen {
          background: linear-gradient(105deg, transparent 40%, hsl(45 100% 80% / 0.16) 50%, transparent 60%);
          animation: logo-sheen 2.4s ease-in-out infinite;
        }

        @keyframes logo-enter {
          from { opacity: 0; transform: scale(0.7); filter: blur(10px); }
          to { opacity: 1; transform: scale(1); filter: blur(0); }
        }
        .logo-enter { animation: logo-enter 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }

        @keyframes energy-bar-glow {
          0%, 100% { filter: brightness(1); }
          50% { filter: brightness(1.4); }
        }
        .energy-bar {
          background: linear-gradient(90deg, hsl(38 95% 50%), hsl(45 100% 66%));
          box-shadow: 0 0 16px hsl(45 100% 60% / 0.7);
          animation: energy-bar-glow 1.2s ease-in-out infinite;
        }

        @keyframes exit-sweep {
          from { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
          40% { opacity: 1; }
          to { transform: translateX(420%) skewX(-18deg); opacity: 0; }
        }
        .exit-sweep {
          background: linear-gradient(90deg, transparent, hsl(45 100% 66% / 0.5), transparent);
          animation: exit-sweep 0.5s ease-in-out both;
        }

        @keyframes preloader-exit {
          0% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.06); }
        }
        .preloader-exit { animation: preloader-exit 0.45s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default Preloader;
