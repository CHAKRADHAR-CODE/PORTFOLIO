import { useEffect, useState } from "react";
import AnimatedSection from "./AnimatedSection";

const skills = [
  { name: "Python", level: 90, category: "Languages" },
  { name: "C/C++", level: 85, category: "Languages" },
  { name: "JavaScript", level: 80, category: "Languages" },
  { name: "TypeScript", level: 75, category: "Languages" },
  { name: "SQL", level: 85, category: "Languages" },
  { name: "React", level: 80, category: "Frameworks" },
  { name: "Tailwind CSS", level: 90, category: "Frameworks" },
  { name: "Node.js", level: 70, category: "Frameworks" },
  { name: "Machine Learning", level: 75, category: "AI/ML" },
  { name: "TensorFlow", level: 70, category: "AI/ML" },
  { name: "Data Analysis", level: 80, category: "AI/ML" },
  { name: "Git/GitHub", level: 85, category: "Tools" },
  { name: "MySQL", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
];

const categories = ["Languages", "Frameworks", "AI/ML", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  const filteredSkills = skills.filter(
    (skill) => skill.category === activeCategory
  );

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[hsl(280,100%,65%,0.05)] rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </AnimatedSection>

        {/* Category Tabs */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-105"
                    : "glass-card text-muted-foreground hover:text-foreground hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredSkills.map((skill, index) => (
            <AnimatedSection key={skill.name} animation="fade-left" delay={index * 100}>
              <div
                className="glass-card rounded-xl p-6 group hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-sm font-mono text-primary">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-muted/50 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-[hsl(280,100%,65%)] to-primary transition-all duration-1000 ease-out relative overflow-hidden"
                    style={{
                      width: isVisible ? `${skill.level}%` : "0%",
                      transitionDelay: `${index * 100}ms`,
                    }}
                  >
                    {/* Shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Summary Stats */}
        <AnimatedSection animation="scale" delay={300}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {[
              { label: "Languages", value: "6+" },
              { label: "Frameworks", value: "5+" },
              { label: "Projects", value: "10+" },
              { label: "Certifications", value: "4+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center hover:scale-105 transition-transform hover:glow-primary"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
