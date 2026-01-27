import { useState, useEffect } from "react";
import { X, Download, FileText, GraduationCap, Briefcase, Code, Award, User, ChevronRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ResumePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const resumeSections = [
  {
    id: "profile",
    title: "Profile Summary",
    icon: User,
    content: "Passionate AI/ML student with a strong foundation in software development, competitive programming, and problem-solving. Skilled in Python, C++, and machine learning with a proven track record of 1000+ problems solved across platforms.",
  },
  {
    id: "education",
    title: "Education",
    icon: GraduationCap,
    items: [
      {
        title: "B.Tech in AI & Machine Learning",
        subtitle: "Aditya University",
        detail: "CGPA: 8.7/10 • 2023 - 2027",
      },
    ],
  },
  {
    id: "skills",
    title: "Technical Skills",
    icon: Code,
    tags: [
      "Python", "C++", "C", "JavaScript", "SQL",
      "Machine Learning", "TensorFlow", "NumPy", "Pandas",
      "HTML/CSS", "React", "Git", "MySQL",
    ],
  },
  {
    id: "projects",
    title: "Projects",
    icon: Briefcase,
    items: [
      {
        title: "Student Result Management System",
        subtitle: "Python, MySQL, Tkinter",
        detail: "Comprehensive system for managing student academic records and grade calculations.",
      },
      {
        title: "AI-Based Word Game",
        subtitle: "Python, AI/ML, NLP",
        detail: "Interactive word game with intelligent puzzles powered by machine learning.",
      },
    ],
  },
  {
    id: "achievements",
    title: "Achievements",
    icon: Award,
    items: [
      { title: "1000+ Problems Solved", detail: "Across LeetCode, GFG, CodeChef, HackerRank" },
      { title: "263 Day Streak", detail: "On GeeksforGeeks platform" },
      { title: "Multiple Certifications", detail: "Microsoft, Cisco certified" },
    ],
  },
];

const ResumePreviewModal = ({ isOpen, onClose }: ResumePreviewModalProps) => {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState(0);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    if (isOpen) {
      setLoading(true);
      setVisibleSections([]);
      setActiveSection(0);
      
      // Simulate loading
      const loadTimer = setTimeout(() => setLoading(false), 1500);
      
      return () => clearTimeout(loadTimer);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!loading && isOpen) {
      // Stagger section reveals
      resumeSections.forEach((_, index) => {
        setTimeout(() => {
          setVisibleSections((prev) => [...prev, index]);
        }, index * 200);
      });
    }
  }, [loading, isOpen]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CHAKRADHAR_RESUME.pdf";
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
        className="absolute inset-0 bg-background/80 backdrop-blur-xl animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden rounded-3xl glass-card-strong border border-border/50 shadow-2xl animate-scale-in">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b border-border/30 bg-background/80 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-primary/10">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-xl font-heading font-bold">Resume Preview</h2>
              <p className="text-sm text-muted-foreground">Chakradhar Chowdary Gunnam</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <Button onClick={handleDownload} className="gap-2 glow-primary-subtle">
              <Download className="w-4 h-4" />
              Download PDF
            </Button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-muted transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-100px)]">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="relative">
                <Loader2 className="w-12 h-12 text-primary animate-spin" />
                <div className="absolute inset-0 w-12 h-12 rounded-full border-2 border-primary/20 animate-ping" />
              </div>
              <p className="text-muted-foreground animate-pulse">Loading Resume...</p>
            </div>
          ) : (
            <div className="space-y-6">
              {resumeSections.map((section, index) => (
                <div
                  key={section.id}
                  className={`group transition-all duration-700 ${
                    visibleSections.includes(index)
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-8"
                  }`}
                >
                  <div 
                    className="glass-card rounded-2xl p-6 hover:border-primary/30 border border-transparent transition-all duration-300 cursor-pointer"
                    onClick={() => setActiveSection(index)}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <section.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="text-lg font-bold">{section.title}</h3>
                      <ChevronRight className={`w-4 h-4 ml-auto text-muted-foreground transition-transform duration-300 ${activeSection === index ? "rotate-90" : ""}`} />
                    </div>

                    {section.content && (
                      <p className="text-muted-foreground leading-relaxed">
                        {section.content}
                      </p>
                    )}

                    {section.tags && (
                      <div className="flex flex-wrap gap-2">
                        {section.tags.map((tag, tagIndex) => (
                          <span
                            key={tag}
                            className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary/80 animate-fade-in"
                            style={{ animationDelay: `${tagIndex * 50}ms` }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {section.items && (
                      <div className="space-y-4">
                        {section.items.map((item, itemIndex) => (
                          <div
                            key={itemIndex}
                            className="pl-4 border-l-2 border-primary/30 hover:border-primary transition-colors"
                          >
                            <h4 className="font-semibold">{item.title}</h4>
                            {item.subtitle && (
                              <p className="text-sm text-primary">{item.subtitle}</p>
                            )}
                            <p className="text-sm text-muted-foreground">{item.detail}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          0% { transform: scale(0.9); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-scale-in { animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  );
};

export default ResumePreviewModal;
