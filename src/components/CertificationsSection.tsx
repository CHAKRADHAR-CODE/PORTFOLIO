import { Award, CheckCircle, ExternalLink } from "lucide-react";
import StaggerItem from "./StaggerItem";
import AnimatedSection from "./AnimatedSection";

const certifications = [
  {
    provider: "Microsoft",
    certs: [
      { name: "Power BI Data Analyst", verified: true, image: "" },
      { name: "Excel Expert", verified: true, image: "" },
    ],
    color: "from-[hsl(45,100%,66%)] to-[hsl(38,95%,54%)]",
    bgGlow: "bg-[hsl(45,100%,66%,0.2)]",
    logo: "📊",
    description: "Data Analysis & Visualization",
  },
  {
    provider: "Red Hat",
    certs: [
      { name: "RHCSA — System Administrator", verified: true, image: "" },
    ],
    color: "from-[hsl(45,100%,66%)] to-[hsl(30,80%,50%)]",
    bgGlow: "bg-[hsl(38,95%,55%,0.2)]",
    logo: "🎖️",
    description: "Linux Administration",
  },
  {
    provider: "Cambridge",
    certs: [
      { name: "English Empower B2 Level", verified: true, image: "" },
    ],
    color: "from-[hsl(43,95%,60%)] to-[hsl(35,85%,50%)]",
    bgGlow: "bg-[hsl(43,95%,60%,0.2)]",
    logo: "🎓",
    description: "Communication & English",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-24 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-[hsl(45,100%,66%,0.05)] rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16 section-header">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        className={`flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 transition-all duration-300 group/cert ${
                          c.image
                            ? "hover:border-primary/50 hover:bg-primary/5 cursor-pointer"
                            : "hover:border-primary/50 hover:bg-primary/5"
                        }`}
                        style={{ transitionDelay: `${certIndex * 50}ms` }}
                      >
                        <div className={`p-1.5 rounded-full bg-gradient-to-r ${cert.color}`}>
                          <Award className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="font-medium flex-1">{c.name}</span>
                        {c.image ? (
                          <a
                            href={c.image}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="View Certificate"
                            className="shrink-0"
                          >
                            <div className="relative w-14 h-10 rounded-md overflow-hidden border border-border/60 group/cert-img">
                              <img
                                src={c.image}
                                alt={`${c.name} certificate`}
                                loading="lazy"
                                className="w-full h-full object-cover transition-transform duration-300 group-hover/cert-img:scale-110"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/cert-img:opacity-100 transition-opacity flex items-center justify-center">
                                <ExternalLink className="w-3.5 h-3.5 text-white" />
                              </div>
                            </div>
                          </a>
                        ) : (
                          c.verified && (
                            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0" />
                          )
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
              { label: "Certifications", value: "3+" },
              { label: "Platforms", value: "3" },
              { label: "Domains", value: "3+" },
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
          <div className="mt-8 text-center">
            <a
              href="https://www.credly.com/users/chakradhar-gunnam/badges/credly"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card text-sm font-bold text-primary hover:bg-primary/10 border border-primary/30 hover:border-primary/60 transition-all duration-300 tracking-wider"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              <ExternalLink className="w-4 h-4" />
              VIEW ALL CERTIFICATIONS ON CREDLY
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CertificationsSection;
