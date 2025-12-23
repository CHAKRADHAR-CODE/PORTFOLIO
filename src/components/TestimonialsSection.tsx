import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
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
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    role: "HOD, AI & ML Department",
    organization: "Aditya University",
    content:
      "An exceptional talent with a deep understanding of artificial intelligence. Chakradhar's projects demonstrate both theoretical knowledge and practical implementation skills. His work on the traffic monitoring system was particularly impressive.",
    avatar: "PS",
  },
  {
    id: 3,
    name: "Anil Reddy",
    role: "Senior Software Engineer",
    organization: "Tech Innovators Inc.",
    content:
      "I had the pleasure of mentoring Chakradhar during his internship. His coding skills, especially in Python and C++, are outstanding. He quickly grasped complex concepts and contributed meaningfully to our projects. A true professional in the making.",
    avatar: "AR",
  },
  {
    id: 4,
    name: "Suresh Babu",
    role: "Project Lead",
    organization: "Data Systems Corp",
    content:
      "Chakradhar's ability to solve complex algorithmic problems is remarkable. His consistent performance on coding platforms like LeetCode reflects his dedication to continuous improvement. He's always eager to learn and take on new challenges.",
    avatar: "SB",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/20 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-[hsl(280,100%,65%,0.1)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        {/* Floating quotes */}
        <Quote className="absolute top-1/4 left-10 w-12 h-12 text-primary/10 animate-float" />
        <Quote className="absolute bottom-1/4 right-10 w-8 h-8 text-primary/10 animate-float" style={{ animationDelay: "2s" }} />
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
            {/* Main testimonial */}
            <div className="glass-card rounded-2xl p-8 md:p-12 relative overflow-hidden">
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />
              
              <div className="relative z-10">
                <p className="text-lg md:text-xl text-foreground/90 leading-relaxed mb-8 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-[hsl(280,100%,65%)] flex items-center justify-center text-primary-foreground font-bold text-lg">
                    {testimonials[currentIndex].avatar}
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
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="p-3 glass-card rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setCurrentIndex(index);
                    }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="p-3 glass-card rounded-full hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 group"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default TestimonialsSection;