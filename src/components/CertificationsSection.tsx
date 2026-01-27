import { Award, CheckCircle, ExternalLink } from "lucide-react";
import StaggerItem from "./StaggerItem";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    provider: "Microsoft",
    certs: [
      { name: "Power BI Data Analyst", verified: true },
      { name: "Excel Expert", verified: true },
    ],
    color: "from-blue-500 to-cyan-500",
    bgGlow: "bg-blue-500/20",
    logo: "🏢",
    description: "Data Analysis & Visualization",
  },
  {
    provider: "Cisco",
    certs: [
      { name: "C++ Programming", verified: true },
      { name: "C Programming", verified: true },
      { name: "Cybersecurity Essentials", verified: true },
    ],
    color: "from-[hsl(280,100%,65%)] to-[hsl(320,100%,60%)]",
    bgGlow: "bg-[hsl(280,100%,65%,0.2)]",
    logo: "🔐",
    description: "Programming & Security",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[hsl(280,100%,65%,0.05)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4">
            🏆 Achievements
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Industry-recognized credentials validating my expertise
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <StaggerItem key={cert.provider} index={index} baseDelay={100} animation="fade-up">
              <div className="group relative h-full">
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
                
                <div className="relative glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500 h-full border border-transparent group-hover:border-primary/20">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`relative w-16 h-16 rounded-xl ${cert.bgGlow} flex items-center justify-center`}>
                      <span className="text-4xl">{cert.logo}</span>
                      <div className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-20 rounded-xl transition-opacity duration-500`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{cert.provider}</h3>
                      <p className="text-sm text-muted-foreground">{cert.description}</p>
                    </div>
                  </div>

                  {/* Certifications List */}
                  <div className="space-y-3">
                    {cert.certs.map((c, certIndex) => (
                      <div
                        key={c.name}
                        className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 group/cert cursor-pointer"
                        style={{ transitionDelay: `${certIndex * 50}ms` }}
                      >
                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${cert.color}`}>
                          <Award className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium flex-1">{c.name}</span>
                        {c.verified && (
                          <CheckCircle className="w-4 h-4 text-emerald-500" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                </div>
              </div>
            </StaggerItem>
          ))}
        </div>

        {/* Stats */}
        <AnimatedSection animation="scale" delay={400} className="mt-12">
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { label: "Certifications", value: "5+" },
              { label: "Platforms", value: "2" },
              { label: "Domains", value: "4+" },
            ].map((stat) => (
              <div 
                key={stat.label}
                className="text-center px-6"
              >
                <p className="text-3xl font-bold gradient-text">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsSection;
