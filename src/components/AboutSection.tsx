import { Code2, Database, Wrench, GraduationCap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const skills = [
  {
    category: "Languages",
    icon: Code2,
    items: ["Python (NumPy, Pandas)", "C++", "SQL"],
    color: "from-primary to-primary/50",
  },
  {
    category: "ML/Database",
    icon: Database,
    items: ["Supervised Learning", "MySQL", "Query Optimization"],
    color: "from-[hsl(280,100%,65%)] to-[hsl(280,100%,45%)]",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "Power BI", "VS Code", "Linux"],
    color: "from-[hsl(180,100%,50%)] to-[hsl(180,100%,35%)]",
  },
];

const experience = [
  "Completed 5 courses: C Programming, Data Structures (C), Python, MySQL, and OOPs with C++",
  "Applied programming knowledge in 10+ lab assignments involving C, Python, and SQL database queries",
  "Practiced algorithmic problem-solving and data visualization in 4 coursework projects and case studies",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[hsl(280,100%,65%,0.1)] rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate software developer with strong foundations in programming and problem-solving
          </p>
        </AnimatedSection>

        {/* Education Card */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="glass-card rounded-2xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-primary/20">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-muted-foreground">Academic Journey</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <p className="font-semibold text-primary">B.Tech in AI & ML</p>
                <p className="text-sm text-muted-foreground">Aditya University</p>
                <p className="text-sm">GPA: 8.7/10 | 2028 (Expected)</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <p className="font-semibold text-primary">CBSE XII</p>
                <p className="text-sm text-muted-foreground">Subha Niketan School</p>
                <p className="text-sm">70% | 2024</p>
              </div>
              <div className="p-4 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <p className="font-semibold text-primary">CBSE X</p>
                <p className="text-sm text-muted-foreground">Boon School</p>
                <p className="text-sm">68% | 2022</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection animation="fade-up" delay={200}>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.category} animation="scale" delay={300 + index * 100}>
              <div
                className="glass-card rounded-2xl p-6 hover:glow-primary transition-all duration-500 hover:-translate-y-2 h-full"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4`}>
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-3">{skill.category}</h4>
                <ul className="space-y-2">
                  {skill.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Experience */}
        <AnimatedSection animation="fade-up" delay={400}>
          <h3 className="text-2xl font-bold mb-8 text-center">Experience</h3>
        </AnimatedSection>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <AnimatedSection key={index} animation="fade-left" delay={500 + index * 100}>
              <div className="glass-card rounded-xl p-4 flex items-start gap-4 hover:border-primary/50 transition-all duration-300 hover:-translate-x-1">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                  {index + 1}
                </span>
                <p className="text-muted-foreground">{exp}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
