import { ReactNode, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface StaggerItemProps {
  children: ReactNode;
  className?: string;
  index?: number;
  baseDelay?: number;
  animation?: "fade-up" | "fade-left" | "fade-right" | "scale" | "flip" | "slide";
}

const StaggerItem = ({
  children,
  className,
  index = 0,
  baseDelay = 50,
  animation = "fade-up",
}: StaggerItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Add delay based on index for stagger effect
          setTimeout(() => {
            setIsVisible(true);
          }, index * baseDelay);
          observer.unobserve(element);
        }
      },
      { threshold: 0.1, rootMargin: "0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [index, baseDelay]);

  const getAnimationClasses = () => {
    const base = "transition-all duration-700 ease-out";
    
    switch (animation) {
      case "fade-up":
        return cn(base, isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8");
      case "fade-left":
        return cn(base, isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8");
      case "fade-right":
        return cn(base, isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8");
      case "scale":
        return cn(base, isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75");
      case "flip":
        return cn(base, isVisible ? "opacity-100 rotateX-0" : "opacity-0 rotateX-90");
      case "slide":
        return cn(base, isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-full");
      default:
        return cn(base, isVisible ? "opacity-100" : "opacity-0");
    }
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClasses(), className)}
      style={{
        transitionDelay: `${index * baseDelay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default StaggerItem;
