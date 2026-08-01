import { useState, useEffect } from "react";
import { X, Download, ExternalLink, FileText, Loader2, FileWarning } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const RESUME_URL = "/CHAKRADHAR_RESUME.pdf";

const ResumePreviewModal = ({ isOpen, onClose }: ResumePreviewModalProps) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) setLoading(true);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = RESUME_URL;
    link.download = "Chakradhar_Chowdary_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/85 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-3xl glass-card-strong border border-border/50 shadow-2xl animate-scale-in flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 p-4 md:p-5 border-b border-border/30 bg-background/90 backdrop-blur-xl">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 rounded-xl bg-gradient-to-br from-primary to-[hsl(38,95%,54%)] shrink-0">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="min-w-0">
              <h2 className="text-base md:text-lg font-heading font-bold truncate">
                Chakradhar Chowdary Gunnam
              </h2>
              <p className="text-xs text-muted-foreground truncate">CHAKRADHAR_RESUME.pdf</p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5 hidden sm:inline-flex">
                <ExternalLink className="w-4 h-4" />
                Open
              </Button>
            </a>
            <Button onClick={handleDownload} size="sm" className="gap-1.5 glow-primary-subtle">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-muted transition-colors"
              aria-label="Close preview"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="relative flex-1 bg-[hsl(0_0%_5%)] min-h-0">
          {loading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-10">
              <div className="relative">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-primary/20 animate-ping" />
              </div>
              <p className="text-muted-foreground animate-pulse text-sm tracking-wider">
                Loading your resume...
              </p>
            </div>
          )}

          <iframe
            src={RESUME_URL}
            title="Resume PDF Preview"
            className="w-full h-[calc(92vh-84px)] border-0"
            onLoad={() => setLoading(false)}
          />

          {!loading && (
            <div className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2">
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background/80 backdrop-blur-md border border-border/40 text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                <FileWarning className="w-3.5 h-3.5" />
                Not rendering? Open in a new tab
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResumePreviewModal;
