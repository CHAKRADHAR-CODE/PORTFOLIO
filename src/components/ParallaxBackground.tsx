import { useParallax } from "@/hooks/useParallax";

interface ParallaxBackgroundProps {
  children?: React.ReactNode;
}

const ParallaxBackground = ({ children }: ParallaxBackgroundProps) => {
  const slowOffset = useParallax({ speed: 0.1 });
  const mediumOffset = useParallax({ speed: 0.2 });
  const fastOffset = useParallax({ speed: 0.3 });

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Slow moving layer - large orbs */}
      <div
        className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"
        style={{ transform: `translateY(${slowOffset}px)` }}
      />
      <div
        className="absolute top-1/2 -right-48 w-[500px] h-[500px] bg-[hsl(280,100%,65%,0.05)] rounded-full blur-[100px]"
        style={{ transform: `translateY(${slowOffset * 0.8}px)` }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[hsl(200,100%,50%,0.03)] rounded-full blur-[80px]"
        style={{ transform: `translateY(${slowOffset * 1.2}px)` }}
      />

      {/* Medium speed layer - smaller orbs */}
      <div
        className="absolute top-1/3 right-1/4 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[60px]"
        style={{ transform: `translateY(${mediumOffset}px)` }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-[250px] h-[250px] bg-[hsl(280,100%,65%,0.08)] rounded-full blur-[70px]"
        style={{ transform: `translateY(${mediumOffset * 0.9}px)` }}
      />

      {/* Fast layer - small particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/20 rounded-full"
          style={{
            left: `${10 + (i * 6) % 80}%`,
            top: `${15 + (i * 7) % 70}%`,
            transform: `translateY(${fastOffset * (0.8 + (i % 3) * 0.2)}px)`,
          }}
        />
      ))}

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {children}
    </div>
  );
};

export default ParallaxBackground;
