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
    gradient: "from-primary to-[hsl(280,100%,70%)]",
  },
  {
    category: "ML/Database",
    icon: Database,
    items: ["Supervised Learning", "MySQL", "Query Optimization"],
    gradient: "from-[hsl(280,100%,70%)] to-[hsl(320,100%,65%)]",
  },
  {
    category: "Tools",
    icon: Wrench,
    items: ["Git", "Power BI", "VS Code", "Linux"],
    gradient: "from-[hsl(200,100%,60%)] to-[hsl(180,100%,50%)]",
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
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[hsl(280,100%,70%,0.05)] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A passionate developer with strong foundations in programming and AI/ML
          </p>
        </AnimatedSection>

        {/* Quick Stats */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {highlights.map((item, index) => (
              <div
                key={item.label}
                className="group glass-card rounded-2xl p-6 text-center hover-lift cursor-default"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-semibold text-foreground">{item.value}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Education & Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Education */}
          <AnimatedSection animation="fade-right" delay={200}>
            <div className="glass-card-strong rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-[hsl(280,100%,70%)]">
                  <GraduationCap className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Education</h3>
                  <p className="text-muted-foreground">Academic Journey</p>
                </div>
              </div>

              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div
                    key={edu.degree}
                    className={`relative p-5 rounded-2xl border transition-all duration-300 hover:border-primary/30 ${
                      edu.current
                        ? "bg-primary/5 border-primary/20"
                        : "bg-muted/30 border-border/50"
                    }`}
                  >
                    {edu.current && (
                      <span className="absolute top-4 right-4 flex items-center gap-1.5 text-xs font-medium text-emerald-500">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Current
                      </span>
                    )}
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground mb-2">{edu.institution}</p>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="text-primary font-medium">{edu.grade}</span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-muted-foreground">{edu.year}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Core Skills */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="glass-card-strong rounded-3xl p-8 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-2xl bg-gradient-to-br from-[hsl(200,100%,60%)] to-[hsl(180,100%,50%)]">
                  <Award className="w-7 h-7 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Core Skills</h3>
                  <p className="text-muted-foreground">Technical Expertise</p>
                </div>
              </div>

              <div className="space-y-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="group">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-lg bg-gradient-to-br ${skill.gradient}`}>
                        <skill.icon className="w-4 h-4 text-primary-foreground" />
                      </div>
                      <h4 className="font-semibold">{skill.category}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1.5 text-sm bg-muted/50 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-xl font-bold mb-6 text-center">Experience Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { value: "5+", label: "Courses Completed", desc: "C, Python, C++, SQL, DSA" },
                { value: "10+", label: "Lab Assignments", desc: "Hands-on coding practice" },
                { value: "4+", label: "Academic Projects", desc: "Real-world applications" },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center p-4">
                  <p className="text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                  <p className="font-semibold text-foreground mb-1">{stat.label}</p>
                  <p className="text-sm text-muted-foreground">{stat.desc}</p>
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
