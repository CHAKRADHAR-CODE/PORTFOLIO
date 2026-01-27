import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const testimonials = [
  {
    id: 1,
    name: "Dr. Ramesh Kumar",
    role: "Professor, Computer Science",
    organization: "Aditya University",
    content:
      "Chakradhar is one of the most dedicated students I've mentored. His grasp of machine learning concepts and ability to implement complex algorithms sets him apart. He consistently delivers exceptional work and shows remarkable problem-solving abilities.",
    avatar: "RK",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "HOD, AI & ML Department",
    organization: "Aditya University",
    content:
      "An exceptional talent with a deep understanding of artificial intelligence. Chakradhar's projects demonstrate both theoretical knowledge and practical implementation skills. His work on the traffic monitoring system was particularly impressive.",
    avatar: "PS",
    rating: 5,
  },
  {
    id: 3,
    name: "Anil Reddy",
    role: "Senior Software Engineer",
    organization: "Tech Innovators Inc.",
    content:
      "I had the pleasure of mentoring Chakradhar during his internship. His coding skills, especially in Python and C++, are outstanding. He quickly grasped complex concepts and contributed meaningfully to our projects. A true professional in the making.",
    avatar: "AR",
    rating: 5,
  },
  {
    id: 4,
    name: "Suresh Babu",
    role: "Project Lead",
    organization: "Data Systems Corp",
    content:
      "Chakradhar's ability to solve complex algorithmic problems is remarkable. His consistent performance on coding platforms like LeetCode reflects his dedication to continuous improvement. He's always eager to learn and take on new challenges.",
    avatar: "SB",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const handleDotClick = (index: number) => {
    if (isAnimating || index === currentIndex) return;
    setIsAutoPlaying(false);
    setIsAnimating(true);
    setCurrentIndex(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <section
      id="testimonials"
      className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[hsl(280,100%,65%,0.1)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        
        {/* Floating quotes */}
        <Quote className="absolute top-1/4 left-10 w-16 h-16 text-primary/10 animate-float" />
        <Quote className="absolute bottom-1/4 right-10 w-12 h-12 text-primary/10 animate-float" style={{ animationDelay: "2s" }} />
        <Quote className="absolute top-1/2 right-1/3 w-8 h-8 text-[hsl(280,100%,65%,0.1)] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4">
            💬 Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
            What People <span className="gradient-text">Say</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feedback from professors, mentors, and colleagues who've worked with me
          </p>
        </AnimatedSection>

        {/* Testimonial Card */}
        <AnimatedSection animation="fade-up">
          <div className="relative">
            {/* Card Stack Effect */}
            <div className="absolute inset-x-4 -bottom-4 h-full glass-card rounded-2xl opacity-30" />
            <div className="absolute inset-x-2 -bottom-2 h-full glass-card rounded-2xl opacity-50" />
            
            {/* Main testimonial */}
            <div className="relative glass-card rounded-2xl p-8 md:p-12 overflow-hidden group">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-20 h-20 text-primary/10 group-hover:text-primary/20 transition-colors duration-500" />
              
              {/* Content with animation */}
              <div 
                className={`relative z-10 transition-all duration-500 ${
                  isAnimating ? 'opacity-0 translate-x-10' : 'opacity-100 translate-x-0'
                }`}
              >
                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="w-5 h-5 text-amber-400 fill-amber-400" 
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-[hsl(280,100%,65%)] flex items-center justify-center text-primary-foreground font-bold text-lg">
                      {testimonials[currentIndex].avatar}
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-background flex items-center justify-center">
                      <span className="text-[10px]">✓</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-xs text-primary">
                      {testimonials[currentIndex].organization}
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-[hsl(280,100%,65%)] to-primary" />
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={handlePrevious}
                className="p-3 glass-card rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group/btn hover:scale-110"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary transition-colors" />
              </button>
              
              {/* Dots with progress indicator */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`relative h-2 rounded-full transition-all duration-500 ${
                      index === currentIndex
                        ? "w-10 bg-primary"
                        : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    {index === currentIndex && isAutoPlaying && (
                      <div 
                        className="absolute inset-0 bg-primary-foreground/30 rounded-full origin-left"
                        style={{
                          animation: 'progress 5s linear infinite',
                        }}
                      />
                    )}
                  </button>
                ))}
              </div>
              
              <button
                onClick={() => {
                  setIsAutoPlaying(false);
                  handleNext();
                }}
                className="p-3 glass-card rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group/btn hover:scale-110"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover/btn:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
