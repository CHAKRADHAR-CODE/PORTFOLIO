import { useState } from "react";
import { Code2, Globe, Database, Wrench, Brain, Terminal, Layers, Cpu, Cloud, Palette, Monitor, Server } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const categories = [
  { id: "languages", label: "Languages", icon: Code2 },
  { id: "web", label: "Web Dev", icon: Globe },
  { id: "ml", label: "ML & Data", icon: Brain },
  { id: "tools", label: "Tools", icon: Wrench },
];

const skillsData: Record<string, Array<{ name: string; icon: React.ComponentType<any>; level: string }>> = {
  languages: [
    { name: "Python", icon: Terminal, level: "Advanced" },
    { name: "C++", icon: Code2, level: "Advanced" },
    { name: "C", icon: Terminal, level: "Intermediate" },
    { name: "SQL", icon: Database, level: "Advanced" },
  ],
  web: [
    { name: "HTML5", icon: Globe, level: "Advanced" },
    { name: "CSS3", icon: Palette, level: "Advanced" },
    { name: "React", icon: Layers, level: "Intermediate" },
    { name: "Tailwind", icon: Palette, level: "Intermediate" },
  ],
  ml: [
    { name: "NumPy", icon: Brain, level: "Advanced" },
    { name: "Pandas", icon: Database, level: "Advanced" },
    { name: "Scikit-learn", icon: Brain, level: "Intermediate" },
    { name: "MySQL", icon: Database, level: "Advanced" },
  ],
  tools: [
    { name: "Git", icon: Code2, level: "Advanced" },
    { name: "VS Code", icon: Monitor, level: "Advanced" },
    { name: "Power BI", icon: Layers, level: "Intermediate" },
    { name: "Linux", icon: Terminal, level: "Intermediate" },
  ],
};

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("languages");

  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden accent-skills">
      {/* Background - ember/orange accent for skills */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[hsl(15_90%_55%/0.03)] to-transparent" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] rounded-full blur-[160px]"
        style={{ background: "hsl(15 90% 50% / 0.06)" }} />
      <div className="absolute top-1/2 right-0 w-[300px] h-[300px] rounded-full blur-[140px]"
        style={{ background: "hsl(0 85% 45% / 0.05)" }} />

      {/* Diagonal accent border top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(15_90%_55%/0.6)] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-bold text-[hsl(15_90%_60%)] mb-4 tracking-[0.3em] uppercase border border-[hsl(15_90%_55%/0.3)]">
            // Technical Skills
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I've worked with
          </p>
        </AnimatedSection>

        <AnimatedSection animation="fade-up" delay={100}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-bold tracking-wider transition-all duration-300 uppercase text-sm ${
                    isActive
                      ? "bg-primary text-primary-foreground glow-primary-subtle"
                      : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/40"
                  }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </AnimatedSection>

        <AnimatedSection animation="scale" delay={200}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {skillsData[activeCategory]?.map((skill, index) => (
              <div
                key={skill.name}
                className="group glass-card-strong anime-card rounded-2xl p-6 hover-lift cursor-default"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors border border-primary/10">
                    <skill.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md tracking-wider ${
                    skill.level === "Advanced" 
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                      : "bg-amber-500/10 text-amber-400 border border-amber-500/20"
                  }`}
                  style={{ fontFamily: "'Rajdhani', sans-serif" }}
                  >
                    {skill.level}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default SkillsSection;
