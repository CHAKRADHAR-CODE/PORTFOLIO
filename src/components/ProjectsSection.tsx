import { ExternalLink, Github, ArrowUpRight, Star, Code, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedSection from "./AnimatedSection";
import StaggerItem from "./StaggerItem";

const projects = [
  {
    title: "Library Seat Reservation System",
    description: "A web-based system managing 100+ seat bookings with real-time availability tracking. Developed an interactive UI using 3 front-end technologies and integrated MongoDB to manage multiple collections.",
    tech: ["HTML", "TypeScript", "JavaScript", "MongoDB"],
    github: "https://github.com/CHAKRADHAR-CODE/Library-Seat-Reservation-System",
    live: "https://smart-library1.netlify.app/",
    featured: true,
    highlights: ["Real-time Tracking", "Team Project", "Database Integration"],
    date: "Dec 2025",
  },
  {
    title: "AI-Based Word Game",
    description: "A Python-based word game integrated with MySQL, managing a database of 200+ words. Implemented core game logic with 5 chances per round and win/lose tracking with optimized queries.",
    tech: ["Python", "MySQL", "AI/ML", "Game Logic"],
    github: "https://github.com/CHAKRADHAR-CODE/AI-Word-Guess-Game",
    live: null,
    featured: true,
    highlights: ["AI-Powered", "Database Optimization", "Game Development"],
    date: "Mar 2025",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/20 via-transparent to-muted/20" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-[hsl(280,100%,60%,0.05)] rounded-full blur-[120px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-sm font-medium text-primary mb-4">
            <Code className="w-4 h-4 inline mr-2" />
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A selection of impactful projects that showcase my technical skills and problem-solving abilities
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <StaggerItem key={project.title} index={index} baseDelay={100} animation="fade-up">
              <div className="group relative h-full">
                {/* Animated border gradient */}
                <div className="absolute -inset-[2px] rounded-3xl bg-gradient-to-r from-primary via-[hsl(280,100%,70%)] to-primary opacity-0 group-hover:opacity-100 blur-sm transition-all duration-700 animate-gradient-shift" />
                
                <div className="relative glass-card-strong rounded-3xl p-8 h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 overflow-hidden">
                  {/* Background glow */}
                  <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/10 to-orange-500/10 text-amber-400 border border-amber-500/20 mb-3">
                          <Star className="w-3 h-3 fill-amber-400" />
                          Featured Project
                        </span>
                      )}
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1">{project.date}</p>
                    </div>
                    <div className="flex gap-2">
                      {project.live && (
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 group-hover:scale-110"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-3 rounded-xl bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group-hover:scale-110"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="px-3 py-1 text-xs font-medium bg-primary/5 border border-primary/10 rounded-full text-primary/70">
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6 pt-4 border-t border-border/30">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-4 py-1.5 text-xs font-semibold bg-muted/50 rounded-full text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                      <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-emerald-400 transition-colors group/link"
                      >
                        <Globe className="w-4 h-4" />
                        Live Demo
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" animation="fade-up" delay={400}>
          <a href="https://github.com/CHAKRADHAR-CODE" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="group border-border/50 hover:border-primary/50 hover:bg-primary/5">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
              <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </a>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
