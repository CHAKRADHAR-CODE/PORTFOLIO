import { useState, ReactNode } from "react";
import { Gamepad2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface SmartImageProps {
  src: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}

const SmartImage = ({ src, alt, className, fallback }: SmartImageProps) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-gradient-to-br from-muted via-card to-muted",
          className
        )}
      >
        {fallback ?? (
          <div className="flex flex-col items-center gap-2 text-muted-foreground/60">
            <Gamepad2 className="w-8 h-8" />
            <span className="text-xs font-bold tracking-widest uppercase">Preview Soon</span>
          </div>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  );
};

export default SmartImage;
