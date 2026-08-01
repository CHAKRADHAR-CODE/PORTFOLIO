import { Link } from "react-router-dom";
import { Store, ChevronRight, Monitor, Smartphone, Globe, Gamepad2 } from "lucide-react";
import { APPS, AppInfo } from "@/config/apps";
import AnimatedSection from "./AnimatedSection";
import StaggerItem from "./StaggerItem";
import SmartImage from "./SmartImage";

const PlatformBadges = ({ app }: { app: AppInfo }) => (
  <div className="flex items-center gap-3">
    {app.downloads.windows && (
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Monitor className="w-3.5 h-3.5" />
        Windows
      </span>
    )}
    {app.downloads.android && (
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Smartphone className="w-3.5 h-3.5" />
        Android
      </span>
    )}
    {app.website && (
      <span className="flex items-center gap-1.5 text-[11px] text-muted-foreground">
        <Globe className="w-3.5 h-3.5" />
        Web
      </span>
    )}
  </div>
);

const AppsGamesSection = () => {
  return (
    <section id="apps" className="py-24 px-4 relative overflow-hidden accent-apps">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[hsl(0_0%_0%/0.3)] via-transparent to-[hsl(0_0%_0%/0.3)]" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] rounded-full blur-[160px]"
        style={{ background: "hsl(45 100% 55% / 0.07)" }} />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full blur-[140px]"
        style={{ background: "hsl(20 90% 50% / 0.06)" }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16 section-header">
          <span className="inline-block px-4 py-1.5 rounded-full glass-card text-xs font-bold text-primary mb-4 tracking-[0.3em] uppercase border border-primary/30">
            <Store className="w-3.5 h-3.5 inline mr-1.5" />
            // My Store
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My Apps & <span className="gradient-text">Games</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Download my apps and games for Windows, Android, or play online
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-8">
          {APPS.map((app, index) => (
            <StaggerItem key={app.id} index={index} baseDelay={100} animation="fade-up">
              <Link
                to={`/apps/${app.id}`}
                className="group relative block h-full focus:outline-none"
              >
                {/* Animated border glow on hover */}
                <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-primary via-[hsl(38_95%_54%)] to-primary opacity-0 group-hover:opacity-60 transition-all duration-700 blur-sm animate-gradient-shift" />

                <div className="relative glass-card-strong rounded-3xl overflow-hidden h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_0_40px_-5px_hsl(43_95%_55%/0.35)] flex flex-col">
                  {/* Banner */}
                  <div className="relative aspect-[2/1] overflow-hidden bg-[hsl(0_0%_5%)]">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_95%_55%/0.15),transparent_75%)]" />
                    <SmartImage
                      src={app.banner}
                      alt={`${app.name} banner`}
                      className="relative w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                      fallback={
                        <div className={`relative w-full h-full bg-gradient-to-r ${app.accent} flex items-center justify-center`}>
                          <div className="flex items-center gap-3 text-white/90">
                            <Gamepad2 className="w-10 h-10" />
                            <span className="text-2xl font-bold tracking-widest uppercase">{app.name}</span>
                          </div>
                        </div>
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Tag */}
                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-black/40 text-white border border-white/20 backdrop-blur-md">
                      {app.tag}
                    </span>

                    {/* Overlapping logo */}
                    <div className="absolute -bottom-0 left-6 translate-y-1/2">
                      <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden ring-4 ring-card shadow-2xl group-hover:scale-105 transition-transform duration-500">
                        <SmartImage
                          src={app.logo}
                          alt={`${app.name} logo`}
                          className="w-full h-full object-cover"
                          fallback={
                            <div className={`w-full h-full bg-gradient-to-br ${app.accent} flex items-center justify-center`}>
                              <span className="text-white text-3xl font-black">{app.name.charAt(0)}</span>
                            </div>
                          }
                        />
                      </div>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="pt-14 p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between gap-4 mb-2">
                      <div>
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors tracking-wide"
                          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                          {app.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{app.category}</p>
                      </div>
                      <div className="shrink-0">
                        <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-gradient-to-r from-[hsl(45_100%_66%)] to-[hsl(38_95%_54%)] text-primary-foreground text-xs font-bold shadow-[0_4px_16px_-4px_hsl(43_95%_50%/0.6)] tracking-wider uppercase"
                          style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                          Get it
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-1">
                      {app.tagline}
                    </p>

                    <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-border/30">
                      <PlatformBadges app={app} />
                      <span className="text-xs font-bold text-primary tracking-widest uppercase"
                        style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                        View Details →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </div>

        <AnimatedSection className="text-center mt-12" animation="fade-up" delay={400}>
          <p className="text-xs text-muted-foreground glass-card inline-block px-4 py-2 rounded-full">
            Tap any card to open the app page • Download for Windows, Android or play online
          </p>
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

export default AppsGamesSection;
