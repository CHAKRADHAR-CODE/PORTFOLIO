import { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const skills = [
  // Languages
  { name: "C++", category: "Languages", icon: "⚡" },
  { name: "Python", category: "Languages", icon: "🐍" },
  { name: "C", category: "Languages", icon: "🔧" },
  { name: "SQL", category: "Languages", icon: "🗃️" },
  // Web
  { name: "HTML", category: "Web", icon: "🌐" },
  { name: "CSS", category: "Web", icon: "🎨" },
  // ML / Database
  { name: "Supervised Learning", category: "ML / Database", icon: "🧠" },
  { name: "MySQL", category: "ML / Database", icon: "🐬" },
  { name: "Query Optimization", category: "ML / Database", icon: "⚡" },
  // Tools
  { name: "Git", category: "Tools", icon: "📂" },
  { name: "VS Code", category: "Tools", icon: "💻" },
  { name: "Linux", category: "Tools", icon: "🐧" },
  { name: "Power BI", category: "Tools", icon: "📊" },
  { name: "Excel", category: "Tools", icon: "📗" },
];

const categories = ["Languages", "Web", "ML / Database", "Tools"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Languages");

  const filteredSkills = skills.filter((skill) => skill.category === activeCategory);

  return (
    <section
      id="skills"
      className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -left-32 w-96 h-96 bg-[hsl(280,100%,65%,0.05)] rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4">
            💻 Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                    : "glass-card border-border/50 text-muted-foreground hover:text-foreground hover:border-primary/50 hover:bg-primary/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills Grid - Square Boxes */}
        <AnimatedSection animation="scale" delay={200}>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredSkills.map((skill, index) => (
              <div
                key={skill.name}
                className="group aspect-square glass-card rounded-xl flex flex-col items-center justify-center gap-3 hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/20 cursor-default border border-border/50"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <span className="text-4xl group-hover:scale-125 transition-transform duration-300">
                  {skill.icon}
                </span>
                <span className="font-medium text-foreground group-hover:text-primary transition-colors text-center px-2">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Summary Stats */}
        <AnimatedSection animation="scale" delay={400}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
            {[
              { label: "Languages", value: "4+", icon: "🔤" },
              { label: "Tools", value: "5+", icon: "🏗️" },
              { label: "Projects", value: "10+", icon: "📁" },
              { label: "Certifications", value: "4+", icon: "🏆" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-6 text-center hover:scale-105 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30"
              >
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {stat.icon}
                </div>
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
