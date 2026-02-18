import { useEffect, useState } from "react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

interface FloatingElementsProps {
  count?: number;
  className?: string;
}

const FloatingElements = ({ count = 20, className }: FloatingElementsProps) => {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const newElements: FloatingElement[] = [];
    for (let i = 0; i < count; i++) {
      newElements.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        duration: Math.random() * 20 + 10,
        delay: Math.random() * 5,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }
    setElements(newElements);
  }, [count]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {elements.map((el) => (
        <div
          key={el.id}
          className="absolute rounded-full bg-primary"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: `${el.size}px`,
            height: `${el.size}px`,
            opacity: el.opacity,
            animation: `float-particle ${el.duration}s ease-in-out infinite`,
            animationDelay: `${el.delay}s`,
          }}
        />
      ))}
      
      {/* Glowing orbs - Red morph */}
      <div 
        className="absolute w-64 h-64 rounded-full blur-3xl"
        style={{
          left: "10%",
          top: "20%",
          background: "hsl(0 85% 45% / 0.06)",
          animation: "orb-float 15s ease-in-out infinite",
        }}
      />
      <div 
        className="absolute w-48 h-48 rounded-full blur-3xl"
        style={{
          right: "15%",
          bottom: "30%",
          background: "hsl(348 80% 40% / 0.05)",
          animation: "orb-float 20s ease-in-out infinite reverse",
        }}
      />
      <div 
        className="absolute w-32 h-32 rounded-full bg-primary/10 blur-2xl"
        style={{
          left: "50%",
          top: "50%",
          animation: "orb-float 12s ease-in-out infinite",
          animationDelay: "2s",
        }}
      />

      <style>{`
        @keyframes float-particle {
          0%, 100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(-10px) translateX(-10px);
          }
          75% {
            transform: translateY(-30px) translateX(5px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingElements;
