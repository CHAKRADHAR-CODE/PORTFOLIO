import { Download, FileText, Eye, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
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
    }, 500);
  };

  const handlePreview = () => {
    setIsPreviewOpen(true);
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
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-20 h-20 border border-primary/20 rounded-lg rotate-12 animate-float" style={{ animationDelay: '0s' }} />
          <div className="absolute bottom-20 right-10 w-16 h-16 border border-primary/20 rounded-full animate-float" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 right-1/4 w-12 h-12 border border-[hsl(280,100%,65%,0.2)] rounded-lg rotate-45 animate-float" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-4xl mx-auto relative z-10">
          <AnimatedSection animation="fade-up">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-[hsl(280,100%,65%)] to-primary rounded-[2rem] opacity-20 group-hover:opacity-40 blur-2xl transition-all duration-700" />
              
              <div className="relative glass-card rounded-3xl p-8 md:p-12 text-center border border-border/50 group-hover:border-primary/30 transition-all duration-500">
                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/20 to-[hsl(280,100%,65%,0.2)] mb-8 group-hover:scale-110 transition-transform duration-500">
                  <FileText className="w-12 h-12 text-primary" />
                  <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-amber-400 animate-pulse" />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary to-[hsl(280,100%,65%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                </div>

                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
                  View My <span className="gradient-text">Resume</span>
                </h2>

                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
                  Get a comprehensive overview of my skills, education, projects, and achievements. 
                  See how I can contribute to your team.
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
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
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <MagneticButton strength={0.2}>
                    <Button
                      size="lg"
                      onClick={handlePreview}
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
                      <Download className={`w-5 h-5 mr-2 ${isDownloading ? "animate-bounce" : ""}`} />
                      {isDownloading ? "Downloading..." : "Download PDF"}
                    </Button>
                  </MagneticButton>
                </div>

                <p className="text-sm text-muted-foreground mt-6">
                  PDF format • Updated January 2025
                </p>
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
