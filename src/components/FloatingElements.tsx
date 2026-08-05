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
        className="absolute w-72 h-72 rounded-full"
        style={{
          left: "10%",
          top: "20%",
          background: "radial-gradient(circle at center, hsl(45 100% 55% / 0.08) 0%, transparent 70%)",
          animation: "orb-float 15s ease-in-out infinite",
        }}
      />
      <div 
        className="absolute w-56 h-56 rounded-full"
        style={{
          right: "15%",
          bottom: "30%",
          background: "radial-gradient(circle at center, hsl(38 95% 50% / 0.07) 0%, transparent 70%)",
          animation: "orb-float 20s ease-in-out infinite reverse",
        }}
      />
      <div 
        className="absolute w-40 h-40 rounded-full"
        style={{
          left: "50%",
          top: "50%",
          background: "radial-gradient(circle at center, hsl(var(--primary) / 0.12) 0%, transparent 70%)",
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
