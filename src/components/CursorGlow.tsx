import { useEffect, useRef } from "react";

const CursorGlow = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.matchMedia("(pointer: fine)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 2;
    let x = targetX;
    let y = targetY;

    const onMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const loop = () => {
      x += (targetX - x) * 0.14;
      y += (targetY - y) * 0.14;
      el.style.transform = `translate(${x - 250}px, ${y - 250}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[5] w-[500px] h-[500px] rounded-full opacity-40 mix-blend-screen"
      style={{
        background: "radial-gradient(circle, hsl(45 100% 60% / 0.12), transparent 65%)",
      }}
    />
  );
};

export default CursorGlow;
