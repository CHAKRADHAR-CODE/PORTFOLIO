import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResumeSection = () => {
  const handleDownload = () => {
    // Create a link to download the resume
    const link = document.createElement("a");
    link.href = "/CHAKRADHAR_RESUME.pdf";
    link.download = "Chakradhar_Chowdary_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="resume" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-6">
            <FileText className="w-10 h-10 text-primary" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download My <span className="gradient-text">Resume</span>
          </h2>

          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get a detailed overview of my skills, experience, and achievements. 
            Download my resume to learn more about my journey as an AI/ML enthusiast and software developer.
          </p>

          <Button
            size="lg"
            onClick={handleDownload}
            className="glow-primary group"
          >
            <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>

          <p className="text-sm text-muted-foreground mt-4">
            PDF format • Last updated December 2024
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;