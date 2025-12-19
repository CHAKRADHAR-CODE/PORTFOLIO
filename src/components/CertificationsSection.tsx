import { Award } from "lucide-react";

const certifications = [
  {
    provider: "Microsoft",
    certs: ["Power BI", "Excel Expert"],
    color: "from-blue-500 to-cyan-500",
    logo: "🏢",
  },
  {
    provider: "Cisco",
    certs: ["C++", "C", "Cybersecurity"],
    color: "from-[hsl(280,100%,65%)] to-[hsl(320,100%,60%)]",
    logo: "🔐",
  },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-20 px-4 relative overflow-hidden bg-gradient-to-b from-background via-card/30 to-background">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground">
            Industry-recognized credentials validating my skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert) => (
            <div
              key={cert.provider}
              className="group relative"
            >
              <div className={`absolute -inset-1 bg-gradient-to-r ${cert.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
              
              <div className="relative glass-card rounded-2xl p-8 hover:-translate-y-2 transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-5xl">{cert.logo}</span>
                  <div>
                    <h3 className="text-2xl font-bold">{cert.provider}</h3>
                    <p className="text-sm text-muted-foreground">Certified Professional</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {cert.certs.map((c) => (
                    <div
                      key={c}
                      className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      <Award className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="font-medium">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
