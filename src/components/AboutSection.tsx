import { GraduationCap, MapPin, Calendar, Briefcase, Target, Code2, Database, Wrench, Award } from "lucide-react";
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
    accent: "from-primary to-[hsl(0_70%_35%)]",
    accentColor: "text-primary",
  },
  {
    category: "ML/Database",
    icon: Database,
    items: ["Supervised Learning", "MySQL", "Query Optimization"],
    accent: "from-[hsl(220_80%_55%)] to-[hsl(240_70%_60%)]",
    accentColor: "text-[hsl(220_80%_65%)]",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "Power BI", "VS Code", "Linux"],
    accent: "from-[hsl(142_70%_40%)] to-[hsl(160_60%_35%)]",
    accentColor: "text-[hsl(142_70%_50%)]",
  },
];

const education = [
  {
    degree: "B.Tech in AI & ML",
    institution: "Aditya University",
    year: "2028",
    grade: "GPA: 8.7/10",
    current: true,
  },
  {
    degree: "CBSE XII",
    institution: "Subha Niketan School",
    year: "2024",
    grade: "70%",
    current: false,
  },
  {
    degree: "CBSE X",
    institution: "Boon School",
    year: "2022",
    grade: "68%",
    current: false,
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative overflow-hidden">
      {/* Background — blue accent for about */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[180px]"
        style={{ background: "hsl(220 80% 55% / 0.06)" }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[150px]"
        style={{ background: "hsl(0 85% 45% / 0.05)" }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[hsl(220_80%_55%/0.5)] to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-bold text-[hsl(220_80%_65%)] mb-4 tracking-[0.3em] uppercase border border-[hsl(220_80%_55%/0.3)]">
            // About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A passionate developer with strong foundations in programming and AI/ML
          </p>
        </AnimatedSection>

        {/* Quick Stats */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="group glass-card anime-card rounded-2xl p-6 text-center hover-lift cursor-default"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors border border-primary/10">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-xs text-muted-foreground mb-1 tracking-widest uppercase" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{item.label}</p>
                <p className="font-bold text-foreground tracking-wide">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education & Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="glass-card-strong anime-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-[hsl(0_70%_35%)]">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wider">EDUCATION</h3>
                  <p className="text-muted-foreground text-sm">Academic Journey</p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu) => (
                  <div
                    key={edu.degree}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 hover:border-primary/30 ${
                      edu.current
                        ? "bg-primary/5 border-primary/20"
                        : "bg-muted/20 border-border/40"
                    }`}
                  >
                    {edu.current && (
                      <span className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-bold text-emerald-400 tracking-wider uppercase">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        CURRENT
                      </span>
                    )}
                    <h4 className="font-bold text-foreground mb-1 tracking-wide" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-primary font-bold">{edu.grade}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Core Skills */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="glass-card-strong anime-card rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[hsl(142_70%_40%)] to-[hsl(160_60%_35%)]">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-wider">CORE SKILLS</h3>
                  <p className="text-muted-foreground text-sm">Technical Expertise</p>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.accent}`}>
                        <skill.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <h4 className={`font-bold tracking-wider text-sm ${skill.accentColor}`} style={{ fontFamily: "'Rajdhani', sans-serif" }}>{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-xs font-medium bg-muted/40 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/30"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Experience Summary */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="glass-card anime-card rounded-3xl p-8">
            <h3 className="text-sm font-bold mb-6 text-center tracking-[0.3em] uppercase text-muted-foreground" style={{ fontFamily: "'Rajdhani', sans-serif" }}>// Experience Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "5+", label: "Courses Completed", desc: "C, Python, C++, SQL, DSA" },
                { value: "10+", label: "Lab Assignments", desc: "Hands-on coding practice" },
                { value: "4+", label: "Academic Projects", desc: "Real-world applications" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-2xl border border-border/20 bg-muted/10">
                  <p className="text-4xl font-black gradient-text mb-2 font-heading">{stat.value}</p>
                  <p className="font-bold text-foreground mb-1 tracking-wider text-sm" style={{ fontFamily: "'Rajdhani', sans-serif" }}>{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default AboutSection;
