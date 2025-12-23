import { Code2, Database, Wrench, GraduationCap, MapPin, Calendar, Briefcase, Target } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const highlights = [
  { icon: Target, label: "Focus", value: "AI/ML & Full Stack" },
  { icon: MapPin, label: "Location", value: "India" },
  { icon: Briefcase, label: "Status", value: "Student" },
  { icon: Calendar, label: "Graduation", value: "2028" },
];

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
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4">
            👨‍💻 About Me
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate software developer with strong foundations in programming and problem-solving
          </p>
        </AnimatedSection>

        {/* Quick Highlights */}
        <AnimatedSection animation="fade-up" delay={50}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="glass-card rounded-xl p-4 text-center hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <item.icon className="w-6 h-6 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education Card */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="glass-card rounded-2xl p-8 mb-12 relative overflow-hidden">
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full" />
            
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-primary/50 shadow-lg shadow-primary/20">
                <GraduationCap className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold">Education</h3>
                <p className="text-muted-foreground">Academic Journey</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 group">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-green-500 font-medium">Current</span>
                </div>
                <p className="font-semibold text-primary">B.Tech in AI & ML</p>
                <p className="text-sm text-muted-foreground">Aditya University</p>
                <p className="text-sm font-medium mt-2">GPA: 8.7/10 | 2028</p>
              </div>
              <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <p className="font-semibold text-primary">CBSE XII</p>
                <p className="text-sm text-muted-foreground">Subha Niketan School</p>
                <p className="text-sm font-medium mt-2">70% | 2024</p>
              </div>
              <div className="p-5 rounded-xl bg-background/50 border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1">
                <p className="font-semibold text-primary">CBSE X</p>
                <p className="text-sm text-muted-foreground">Boon School</p>
                <p className="text-sm font-medium mt-2">68% | 2022</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Skills Grid */}
        <AnimatedSection animation="fade-up" delay={200}>
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            Core Competencies
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </h3>
        </AnimatedSection>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.category} animation="scale" delay={300 + index * 100}>
              <div
                className="glass-card rounded-2xl p-6 hover:glow-primary transition-all duration-500 hover:-translate-y-2 h-full group"
              >
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                  <skill.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">{skill.category}</h4>
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
          <h3 className="text-2xl font-bold mb-8 text-center flex items-center justify-center gap-3">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-primary" />
            Experience
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-primary" />
          </h3>
        </AnimatedSection>
        <div className="space-y-4">
          {experience.map((exp, index) => (
            <AnimatedSection key={index} animation="fade-left" delay={500 + index * 100}>
              <div className="glass-card rounded-xl p-5 flex items-start gap-4 hover:border-primary/50 transition-all duration-300 hover:-translate-x-1 group">
                <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary/50 flex items-center justify-center text-primary-foreground font-bold shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                  {index + 1}
                </span>
                <p className="text-muted-foreground leading-relaxed pt-2">{exp}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
