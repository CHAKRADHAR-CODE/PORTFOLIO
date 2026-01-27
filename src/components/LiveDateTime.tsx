import { useEffect, useState } from "react";
import { Clock, Calendar } from "lucide-react";

const LiveDateTime = () => {
  const [time, setTime] = useState(new Date());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!mounted) return null;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const seconds = time.getSeconds();
  const rotation = (seconds / 60) * 360;

  return (
    <div className="fixed bottom-6 right-6 z-40 group">
      <div className="glass-card rounded-2xl p-4 border border-border/30 backdrop-blur-xl shadow-2xl transition-all duration-500 hover:border-primary/30 hover:shadow-primary/10">
        {/* Time Display */}
        <div className="flex items-center gap-3 mb-2">
          <div className="relative">
            <Clock className="w-5 h-5 text-primary" />
            {/* Animated seconds ring */}
            <svg className="absolute -inset-1 w-7 h-7" viewBox="0 0 28 28">
              <circle
                cx="14"
                cy="14"
                r="12"
                fill="none"
                stroke="hsl(var(--primary) / 0.2)"
                strokeWidth="1"
              />
              <circle
                cx="14"
                cy="14"
                r="12"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray={`${(seconds / 60) * 75.4} 75.4`}
                transform="rotate(-90 14 14)"
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
          </div>
          <div className="font-mono text-lg font-bold tracking-wider">
            {formatTime(time).split(":").map((part, i) => (
              <span key={i} className={i === 2 ? "text-primary animate-pulse" : ""}>
                {part}{i < 2 ? ":" : ""}
              </span>
            ))}
          </div>
        </div>
        
        {/* Date Display */}
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Calendar className="w-3 h-3" />
          <span className="font-medium">{formatDate(time)}</span>
        </div>
      </div>
    </div>
  );
};

export default LiveDateTime;
