import { useEffect, useState } from "react";
import { Mail, Send, Check, ArrowRight } from "lucide-react";

interface MailRedirectAnimationProps {
  isOpen: boolean;
  onComplete: () => void;
  recipientEmail: string;
}

const MailRedirectAnimation = ({ isOpen, onComplete, recipientEmail }: MailRedirectAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setStage(0);
      
      const timers = [
        setTimeout(() => setStage(1), 400),
        setTimeout(() => setStage(2), 1000),
        setTimeout(() => setStage(3), 1600),
        setTimeout(() => {
          onComplete();
        }, 2200),
      ];

      return () => timers.forEach(clearTimeout);
    }
  }, [isOpen, onComplete]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/90 backdrop-blur-xl" />
      
      {/* Animation Container */}
      <div className="relative flex flex-col items-center justify-center gap-8">
        {/* Mail Icon Animation */}
        <div className="relative">
          <div className={`relative transition-all duration-500 ${stage >= 1 ? "scale-110" : "scale-100"}`}>
            <div className={`absolute inset-0 rounded-full bg-primary/30 blur-xl transition-all duration-500 ${stage >= 1 ? "scale-150 opacity-100" : "scale-100 opacity-0"}`} />
            
            <div className={`relative p-6 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 transition-all duration-500 ${stage >= 2 ? "border-emerald-500/50" : ""}`}>
              {stage < 3 ? (
                <Mail className={`w-16 h-16 transition-all duration-500 ${stage >= 1 ? "text-primary animate-bounce" : "text-muted-foreground"}`} />
              ) : (
                <Check className="w-16 h-16 text-emerald-500 animate-scale-in" />
              )}
            </div>
          </div>

          {/* Flying envelope animation */}
          {stage >= 2 && stage < 3 && (
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Send className="w-8 h-8 text-primary animate-fly-away" />
            </div>
          )}
        </div>

        {/* Status Text */}
        <div className="text-center space-y-2">
          <h3 className="text-2xl font-heading font-bold">
            {stage === 0 && "Preparing your message..."}
            {stage === 1 && "Opening email client..."}
            {stage === 2 && "Redirecting to mail app..."}
            {stage === 3 && "Opening complete!"}
          </h3>
          <p className="text-muted-foreground flex items-center gap-2 justify-center">
            <span>To:</span>
            <span className="text-primary font-medium">{recipientEmail}</span>
          </p>
        </div>

        {/* Progress Dots */}
        <div className="flex items-center gap-3">
          {[0, 1, 2, 3].map((dot) => (
            <div
              key={dot}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                stage >= dot 
                  ? stage === 3 
                    ? "bg-emerald-500 scale-110" 
                    : "bg-primary scale-110" 
                  : "bg-muted"
              }`}
            />
          ))}
        </div>

        {/* Arrow indicator */}
        {stage >= 1 && stage < 3 && (
          <ArrowRight className="w-6 h-6 text-primary animate-pulse absolute right-[30%]" />
        )}
      </div>

      <style>{`
        @keyframes fly-away {
          0% { transform: translate(0, 0) rotate(0deg) scale(1); opacity: 1; }
          100% { transform: translate(100px, -100px) rotate(15deg) scale(0.5); opacity: 0; }
        }
        .animate-fly-away { animation: fly-away 0.8s ease-out forwards; }
        
        @keyframes scale-in {
          0% { transform: scale(0) rotate(-180deg); opacity: 0; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1); }
      `}</style>
    </div>
  );
};

export default MailRedirectAnimation;
