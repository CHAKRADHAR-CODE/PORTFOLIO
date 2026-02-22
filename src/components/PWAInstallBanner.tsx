import { useState } from "react";
import { Download, X } from "lucide-react";
import { usePWAInstall } from "@/hooks/usePWAInstall";
import { Button } from "@/components/ui/button";

const PWAInstallBanner = () => {
  const { isInstallable, install } = usePWAInstall();
  const [dismissed, setDismissed] = useState(false);

  if (!isInstallable || dismissed) return null;

  const handleInstall = async () => {
    const accepted = await install();
    if (!accepted) setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[90] w-[calc(100%-2rem)] max-w-md animate-slide-up">
      <div className="glass-card-strong p-4 flex items-center gap-4">
        {/* Icon */}
        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/15 flex items-center justify-center">
          <Download className="w-5 h-5 text-primary" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">Install Portfolio App</p>
          <p className="text-xs text-muted-foreground truncate">Faster access & offline support</p>
        </div>

        {/* Actions */}
        <Button size="sm" onClick={handleInstall} className="flex-shrink-0">
          Install
        </Button>
        <button
          onClick={() => setDismissed(true)}
          className="flex-shrink-0 p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default PWAInstallBanner;
