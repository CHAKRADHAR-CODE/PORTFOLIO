import { Download, FileText, Eye, CheckCircle, ArrowRight, Sparkles, FileBadge, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import MagneticButton from "./MagneticButton";
import ResumePreviewModal from "./ResumePreviewModal";
import { useState } from "react";

const ResumeSection = () => {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/CHAKRADHAR_RESUME.pdf";
      link.download = "Chakradhar_Chowdary_Resume.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      setTimeout(() => setIsDownloading(false), 1000);
    }, 400);
  };

  const highlights = [
    "8.7 GPA at Aditya University",
    "1000+ Problems Solved",
    "Multiple Certifications",
    "AI/ML Specialization",
  ];

  return (
    <>
      <section id="resume" className="py-24 px-4 relative overflow-hidden">
        {/* Premium background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.04] to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[520px] rounded-full bg-primary/[0.05] blur-[160px]" />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="max-w-5xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="relative group">
              {/* Animated gradient border glow */}
              <div className="absolute -inset-[1px] rounded-[2rem] bg-gradient-to-r from-primary via-[hsl(348,85%,52%)] to-[hsl(280,100%,65%)] opacity-0 group-hover:opacity-70 transition-all duration-700 blur-md" />

              <div className="relative glass-card-strong rounded-[2rem] overflow-hidden">
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-primary via-[hsl(348,85%,52%)] to-transparent" />

                <div className="grid md:grid-cols-[300px_1fr] gap-10 p-8 md:p-12 items-center">
                  {/* PDF file mockup */}
                  <div className="hidden md:flex flex-col items-center gap-5">
                    <div className="relative group/file">
                      {/* Glow */}
                      <div className="absolute -inset-3 rounded-[1.5rem] bg-gradient-to-br from-primary/20 to-[hsl(280,100%,65%,0.15)] blur-xl opacity-0 group-hover/file:opacity-100 transition-opacity duration-500" />
                      {/* Document */}
                      <div className="relative w-44 h-56 rounded-2xl bg-gradient-to-b from-[hsl(0_0%_12%)] to-[hsl(0_0%_7%)] border border-border/60 shadow-2xl p-5 flex flex-col gap-2.5">
                        <div className="flex items-center justify-between mb-1">
                          <FileText className="w-5 h-5 text-primary" />
                          <span className="text-[9px] font-bold tracking-widest text-muted-foreground">CV</span>
                        </div>
                        <div className="h-2 w-24 rounded-full bg-primary/80" />
                        <div className="h-1.5 w-full rounded-full bg-muted-foreground/15" />
                        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/15" />
                        <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/15" />
                        <div className="h-2 w-20 rounded-full bg-primary/50 mt-1" />
                        <div className="h-1.5 w-full rounded-full bg-muted-foreground/15" />
                        <div className="h-1.5 w-4/5 rounded-full bg-muted-foreground/15" />
                        <div className="h-1.5 w-2/3 rounded-full bg-muted-foreground/15" />
                        <div className="h-2 w-24 rounded-full bg-primary/50 mt-1" />
                        <div className="h-1.5 w-full rounded-full bg-muted-foreground/15" />
                        <div className="h-1.5 w-3/5 rounded-full bg-muted-foreground/15" />
                        <div className="flex-1" />
                        <div className="h-2 w-full rounded-full bg-gradient-to-r from-primary/80 to-[hsl(348,85%,52%)]" />
                      </div>
                      {/* PDF badge */}
                      <span className="absolute -top-3 -right-3 px-3 py-1 rounded-lg bg-gradient-to-r from-primary to-[hsl(348,85%,52%)] text-white text-[11px] font-black tracking-widest shadow-lg shadow-primary/30">
                        PDF
                      </span>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-bold tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        Chakradhar_Resume.pdf
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5 flex items-center justify-center gap-1.5">
                        <FileBadge className="w-3.5 h-3.5" />
                        133 KB • PDF Document
                      </p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center md:text-left section-header left">
                    <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full glass-card text-xs font-bold text-primary mb-5 tracking-[0.3em] uppercase border border-primary/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      Open To Work
                    </span>

                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
                      View My <span className="gradient-text">Resume</span>
                    </h2>

                    <p className="text-muted-foreground mb-8 max-w-2xl mx-auto md:mx-0 text-base md:text-lg">
                      Get a comprehensive overview of my skills, education, projects, and achievements.
                      See how I can contribute to your team.
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-10">
                      {highlights.map((highlight, index) => (
                        <div
                          key={highlight}
                          className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-300"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <CheckCircle className="w-4 h-4 text-primary" />
                          <span className="text-sm font-medium">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                      <MagneticButton strength={0.2}>
                        <Button
                          size="lg"
                          onClick={() => setIsPreviewOpen(true)}
                          className="group/btn relative overflow-hidden px-8 py-6 glow-primary"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/10 to-primary/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                          <Eye className="w-5 h-5 mr-2" />
                          Preview Resume
                          <ArrowRight className="w-4 h-4 ml-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
                        </Button>
                      </MagneticButton>

                      <MagneticButton strength={0.2}>
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={handleDownload}
                          disabled={isDownloading}
                          className="px-8 py-6 border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
                        >
                          {isDownloading ? (
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          ) : (
                            <Download className={`w-5 h-5 mr-2 ${isDownloading ? "animate-bounce" : ""}`} />
                          )}
                          {isDownloading ? "Downloading..." : "Download PDF"}
                        </Button>
                      </MagneticButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <ResumePreviewModal
        isOpen={isPreviewOpen}
        onClose={() => setIsPreviewOpen(false)}
      />
    </>
  );
};

export default ResumeSection;
