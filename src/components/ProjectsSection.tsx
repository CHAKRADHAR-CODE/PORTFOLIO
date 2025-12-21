import { ExternalLink, Github, Database, Code, Layout } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Student Result Management System",
    tech: ["C++", "MySQL", "HTML"],
    description: "A comprehensive system for managing student records with CRUD operations and automated data entry.",
    highlights: [
      "Handles 50+ student records",
      "30% reduction in data entry time",
      "2x faster result display",
    ],
    icon: Database,
    gradient: "from-primary via-[hsl(280,100%,65%)] to-[hsl(180,100%,50%)]",
    date: "May 2025",
    githubUrl: "https://github.com/CHAKRADHAR-CODE/Student-Result-Management-System",
  },
  {
    title: "AI-Based Word Game",
    tech: ["Python", "MySQL"],
    description: "An intelligent word game featuring technical terms with smart hint systems.",
    highlights: [
      "200+ technical terms database",
      "85% accuracy rate",
      "50% faster query response",
    ],
    icon: Code,
    gradient: "from-[hsl(280,100%,65%)] via-[hsl(320,100%,60%)] to-primary",
    date: "Jan 2025",
    githubUrl: "https://github.com/CHAKRADHAR-CODE/AI-Word-Guess-Game",
  },
  {
    title: "Amazon.in Clone Website",
    tech: ["HTML", "Tailwind CSS"],
    description: "A fully responsive e-commerce UI recreation with modern design patterns.",
    highlights: [
      "100% responsive design",
      "95% Amazon layout match",
      "40% dev time reduction",
    ],
    icon: Layout,
    gradient: "from-[hsl(180,100%,50%)] via-primary to-[hsl(150,100%,50%)]",
    date: "Nov 2024",
    githubUrl: "https://github.com/CHAKRADHAR-CODE/amazon-clone-html",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/50 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[hsl(280,100%,65%,0.1)] rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my projects demonstrating technical skills and problem-solving abilities
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} animation="fade-up" delay={index * 150}>
              <div className="group relative h-full">
                {/* Gradient Border Effect */}
                <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.gradient} rounded-2xl opacity-0 group-hover:opacity-100 blur transition-all duration-500`} />
                
                <div className="relative glass-card rounded-2xl p-6 h-full flex flex-col hover:-translate-y-2 transition-all duration-500">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} group-hover:scale-110 transition-transform`}>
                      <project.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <span className="text-xs font-mono text-muted-foreground">{project.date}</span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex gap-3 mt-auto">
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="flex-1 gap-2 group/btn"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform" />
                      Code
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 gap-2"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
