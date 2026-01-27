import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "fade" | "slide-up" | "slide-left" | "slide-right" | "zoom" | "reveal" | "stagger";
  staggerChildren?: boolean;
  staggerDelay?: number;
}

const SectionTransition = ({
  children,
  className,
  id,
  variant = "fade",
  staggerChildren = false,
  staggerDelay = 100,
}: SectionTransitionProps) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(element);

    const handleScroll = () => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getVariantStyles = () => {
    const baseTransition = "transition-all duration-1000 ease-out";
    
    switch (variant) {
      case "slide-up":
        return {
          className: cn(
            baseTransition,
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
          ),
        };
      case "slide-left":
        return {
          className: cn(
            baseTransition,
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"
          ),
        };
      case "slide-right":
        return {
          className: cn(
            baseTransition,
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"
          ),
        };
      case "zoom":
        return {
          className: cn(
            baseTransition,
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
          ),
        };
      case "reveal":
        return {
          className: cn(
            baseTransition,
            "overflow-hidden",
            isVisible ? "opacity-100" : "opacity-0"
          ),
          style: {
            clipPath: isVisible
              ? "inset(0 0 0 0)"
              : "inset(0 0 100% 0)",
            transition: "clip-path 1s ease-out, opacity 0.5s ease-out",
          },
        };
      case "stagger":
        return {
          className: cn(baseTransition, isVisible ? "opacity-100" : "opacity-0"),
        };
      default:
        return {
          className: cn(
            baseTransition,
            isVisible ? "opacity-100" : "opacity-0"
          ),
        };
    }
  };

  const variantStyles = getVariantStyles();

  return (
    <section
      ref={ref}
      id={id}
      className={cn(variantStyles.className, className)}
      style={{
        ...variantStyles.style,
        "--scroll-progress": scrollProgress,
      } as React.CSSProperties}
      data-visible={isVisible}
    >
      {staggerChildren ? (
        <div className="stagger-container" style={{ "--stagger-delay": `${staggerDelay}ms` } as React.CSSProperties}>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
};

export default SectionTransition;
