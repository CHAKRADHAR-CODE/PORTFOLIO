import { ReactNode, useRef, useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "fade" | "rotate" | "blur";
  delay?: number;
  duration?: number;
  parallax?: boolean;
  parallaxSpeed?: number;
}

const AnimatedSection = ({ 
  children, 
  className, 
  animation = "fade-up",
  delay = 0,
  duration = 700,
  parallax = false,
  parallaxSpeed = 0.1,
}: AnimatedSectionProps) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    if (!parallax || !containerRef.current) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      setParallaxOffset(scrollProgress * 100 * parallaxSpeed);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [parallax, parallaxSpeed]);

  const animationClasses = {
    "fade-up": "translate-y-12 opacity-0",
    "fade-left": "-translate-x-12 opacity-0",
    "fade-right": "translate-x-12 opacity-0",
    "scale": "scale-90 opacity-0",
    "fade": "opacity-0",
    "rotate": "rotate-6 opacity-0 scale-95",
    "blur": "opacity-0 blur-sm",
  };

  return (
    <div
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLDivElement | null>).current = el;
        (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
      }}
      className={cn(
        "transition-all ease-out will-change-transform",
        isVisible ? "translate-y-0 translate-x-0 scale-100 opacity-100 rotate-0 blur-0" : animationClasses[animation],
        className
      )}
      style={{ 
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transform: parallax && isVisible ? `translateY(${parallaxOffset}px)` : undefined,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
