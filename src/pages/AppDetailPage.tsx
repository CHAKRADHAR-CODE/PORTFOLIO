import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ChevronLeft,
  Monitor,
  Smartphone,
  Globe,
  Users,
  Bot,
  Lock,
  Zap,
  ShieldCheck,
  Sparkles,
  MonitorSmartphone,
  Download,
  HardDrive,
  CheckCircle2,
  Gamepad2,
  Store,
  LucideIcon,
  Calendar,
  Tag,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { getAppById } from "@/config/apps";
import SmartImage from "@/components/SmartImage";
import ScrollProgress from "@/components/ScrollProgress";
import NotFound from "./NotFound";

const highlightIcons: Record<string, LucideIcon> = {
  users: Users,
  bot: Bot,
  lock: Lock,
  zap: Zap,
  shield: ShieldCheck,
  sparkles: Sparkles,
  devices: MonitorSmartphone,
};

const AppDetailPage = () => {
  const { appId } = useParams();
  const app = getAppById(appId);

  if (!app) {
    return <NotFound />;
  }

  const stats = [
    { icon: Tag, label: "Category", value: app.category },
    { icon: Monitor, label: "Desktop Size", value: app.desktopSize },
    { icon: Smartphone, label: "Mobile Size", value: app.mobileSize },
    { icon: HardDrive, label: "Requires", value: `${app.requiredSpace} free space` },
    { icon: Layers, label: "Version", value: app.version },
    { icon: Calendar, label: "Updated", value: app.updated },
  ];

  return (
    <>
      <Helmet>
        <title>{app.name} | Download Game</title>
        <meta name="description" content={app.tagline} />
      </Helmet>

      <div className="min-h-screen relative bg-background">
        <ScrollProgress />

        {/* Ambient background */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-80 bg-gradient-to-b from-[hsl(45_100%_55%/0.07)] via-[hsl(43_95%_50%/0.04)] to-transparent" />
          <div className="absolute top-1/3 right-0 w-[500px] h-[500px] rounded-full blur-[160px]"
            style={{ background: "hsl(45 100% 55% / 0.07)" }} />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] rounded-full blur-[140px]"
            style={{ background: "hsl(43 95% 55% / 0.05)" }} />
        </div>

        {/* Top bar */}
        <header className="sticky top-0 z-40 glass-card-strong border-b border-border/30">
          <div className="max-w-5xl mx-auto px-4 h-16 flex items-center gap-3">
            <Link
              to="/#apps"
              className="flex items-center gap-1.5 text-sm font-bold text-muted-foreground hover:text-primary transition-colors tracking-wider"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              <ChevronLeft className="w-5 h-5" />
              Apps & Games
            </Link>
            <div className="w-px h-6 bg-border/50" />
            <div className="flex items-center gap-2 min-w-0">
              <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0">
                <SmartImage
                  src={app.logo}
                  alt={`${app.name} logo`}
                  className="w-full h-full object-cover"
                  fallback={
                    <div className={`w-full h-full bg-gradient-to-br ${app.accent} flex items-center justify-center`}>
                      <span className="text-white text-sm font-black">{app.name.charAt(0)}</span>
                    </div>
                  }
                />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-sm leading-tight truncate">{app.name}</p>
                <p className="text-[11px] text-muted-foreground truncate">{app.developer}</p>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-4 relative z-10 pb-24">
          {/* Hero */}
          <section className="pt-6">
            <div className="relative rounded-3xl overflow-hidden glass-card-strong">
              {/* Banner */}
              <div className="relative aspect-[2/1] md:aspect-[41/20] overflow-hidden bg-[hsl(0_0%_5%)]">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(43_95%_55%/0.16),transparent_75%)]" />
                <SmartImage
                  src={app.banner}
                  alt={`${app.name} banner`}
                  className="relative w-full h-full object-contain"
                  fallback={
                    <div className={`relative w-full h-full bg-gradient-to-r ${app.accent} flex items-center justify-center`}>
                      <div className="flex items-center gap-3 text-white/90">
                        <Gamepad2 className="w-12 h-12" />
                        <span className="text-3xl md:text-5xl font-bold tracking-widest uppercase">{app.name}</span>
                      </div>
                    </div>
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-bold tracking-widest uppercase bg-black/40 text-white border border-white/20 backdrop-blur-md">
                  {app.tag}
                </span>
              </div>

              {/* App identity */}
              <div className="relative px-5 md:px-8 pb-6">
                <div className="flex flex-col md:flex-row md:items-end gap-5">
                  <div className="-mt-12 md:-mt-14 relative">
                    <div className="w-24 h-24 md:w-28 md:h-28 rounded-3xl overflow-hidden ring-4 ring-card shadow-2xl">
                      <SmartImage
                        src={app.logo}
                        alt={`${app.name} logo`}
                        className="w-full h-full object-cover"
                        fallback={
                          <div className={`w-full h-full bg-gradient-to-br ${app.accent} flex items-center justify-center`}>
                            <span className="text-white text-4xl font-black">{app.name.charAt(0)}</span>
                          </div>
                        }
                      />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h1 className="text-2xl md:text-4xl font-heading font-bold tracking-wide">{app.name}</h1>
                    <p className="text-sm text-muted-foreground mt-1">{app.tagline}</p>
                    <p className="text-xs text-muted-foreground mt-1.5">
                      By <span className="text-primary">{app.developer}</span>
                    </p>
                  </div>

                  {/* Download actions */}
                  <div className="flex flex-col sm:flex-row md:flex-col gap-3 md:items-end w-full md:w-auto">
                    <a
                      href={app.downloads.windows.file}
                      download
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-primary text-primary-foreground font-bold text-sm hover:bg-primary/90 transition-all hover:scale-[1.02] glow-primary"
                    >
                      <Monitor className="w-4 h-4" />
                      Download for Windows
                    </a>
                    <a
                      href={app.downloads.android.file}
                      download
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-emerald-500/15 text-emerald-400 font-bold text-sm border border-emerald-500/30 hover:bg-emerald-500/25 transition-all hover:scale-[1.02]"
                    >
                      <Smartphone className="w-4 h-4" />
                      Download APK
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Info chips */}
          <section className="mt-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="glass-card rounded-2xl p-4 text-center hover:-translate-y-1 transition-transform duration-300">
                  <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                  <p className="text-sm font-bold leading-tight">{stat.value}</p>
                  <p className="text-[11px] text-muted-foreground mt-1 tracking-wider uppercase">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Screenshots */}
          <section className="mt-14">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-heading font-bold">
                <span className="gradient-text">Screenshots</span>
              </h2>
              <div className="flex gap-1.5 items-center">
                {Array.from({ length: Math.min(app.screenshots.length, 5) }).map((_, i) => (
                  <span key={i} className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                ))}
              </div>
            </div>
            <div className="flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory screenshot-scroll">
              {app.screenshots.map((shot, index) => (
                <div
                  key={shot}
                  className="group relative w-[250px] md:w-[340px] aspect-[3/2] rounded-2xl overflow-hidden shrink-0 snap-start bg-[hsl(0_0%_5%)] ring-1 ring-white/10 hover:ring-primary/50 transition-all duration-300"
                >
                  <SmartImage
                    src={shot}
                    alt={`${app.name} screenshot ${index + 1}`}
                    className="w-full h-full object-contain"
                    fallback={
                      <div className={`w-full h-full bg-gradient-to-br ${app.accent} flex items-center justify-center`}>
                        <Gamepad2 className="w-12 h-12 text-white/80" />
                      </div>
                    }
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              ))}
            </div>
          </section>

          {/* About + Highlights */}
          <section className="mt-14">
            <h2 className="text-2xl font-heading font-bold mb-6">
              <span className="gradient-text">About this game</span>
            </h2>
            <div className="glass-card rounded-3xl p-6 md:p-8">
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {app.summary}
              </p>
            </div>

            <h2 className="text-2xl font-heading font-bold mt-12 mb-6">
              <span className="gradient-text">Key Highlights</span>
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {app.keyHighlights.map((highlight) => {
                const Icon = highlightIcons[highlight.icon] ?? CheckCircle2;
                return (
                  <div
                    key={highlight.label}
                    className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group"
                  >
                    <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-[hsl(38_95%_48%)] group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Icon className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="font-bold text-sm leading-tight">{highlight.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Downloads */}
          <section className="mt-14">
            <h2 className="text-2xl font-heading font-bold mb-6">
              <span className="gradient-text">Download & Play</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              {/* Windows */}
              <div className="glass-card-strong rounded-3xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-[hsl(38_95%_48%)] flex items-center justify-center mb-4 shadow-lg">
                  <Monitor className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg">Windows Desktop</h3>
                <p className="text-xs text-muted-foreground mt-1">{app.downloads.windows.label}</p>
                <div className="flex items-center gap-1.5 text-sm font-bold text-primary mt-3">
                  <Download className="w-4 h-4" />
                  {app.desktopSize}
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">
                  Requires {app.requiredSpace} free space
                </p>
                <a
                  href={app.downloads.windows.file}
                  download
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-gradient-to-br from-[hsl(45_100%_66%)] via-[hsl(43_95%_56%)] to-[hsl(35_90%_48%)] text-primary-foreground font-bold text-sm shadow-[0_10px_30px_-10px_hsl(43_95%_50%/0.7)] hover:brightness-110 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
              </div>

              {/* Android */}
              <div className="glass-card-strong rounded-3xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/15 flex items-center justify-center mb-4 shadow-lg border border-emerald-500/30">
                  <Smartphone className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="font-bold text-lg">Android Mobile</h3>
                <p className="text-xs text-muted-foreground mt-1">{app.downloads.android.label}</p>
                <div className="flex items-center gap-1.5 text-sm font-bold text-emerald-400 mt-3">
                  <Download className="w-4 h-4" />
                  {app.mobileSize}
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">
                  Requires {app.requiredSpace} free space
                </p>
                <a
                  href={app.downloads.android.file}
                  download
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-emerald-500/15 text-emerald-400 font-bold text-sm border border-emerald-500/30 hover:bg-emerald-500/25 transition-all hover:scale-[1.02]"
                >
                  <Download className="w-4 h-4" />
                  Download APK
                </a>
              </div>

              {/* Web */}
              <div className="glass-card-strong rounded-3xl p-6 flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
                <div className="w-16 h-16 rounded-2xl bg-sky-500/15 flex items-center justify-center mb-4 shadow-lg border border-sky-500/30">
                  <Globe className="w-8 h-8 text-sky-400" />
                </div>
                <h3 className="font-bold text-lg">Play Online</h3>
                <p className="text-xs text-muted-foreground mt-1 break-all">{app.website.replace(/^https?:\/\//, "")}</p>
                <div className="flex items-center gap-1.5 text-sm font-bold text-sky-400 mt-3">
                  <span>No install needed</span>
                </div>
                <p className="text-[11px] text-muted-foreground mt-2">Any device with a browser</p>
                <a
                  href={app.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-sky-500/15 text-sky-400 font-bold text-sm border border-sky-500/30 hover:bg-sky-500/25 transition-all hover:scale-[1.02]"
                >
                  <ArrowUpRight className="w-4 h-4" />
                  Open Website
                </a>
              </div>
            </div>
          </section>

          {/* Back */}
          <section className="mt-14 text-center">
            <Link
              to="/#apps"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass-card text-sm font-bold text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
              style={{ fontFamily: "'Rajdhani', sans-serif" }}
            >
              <Store className="w-4 h-4" />
              Back to Apps & Games
            </Link>
          </section>
        </main>
      </div>
    </>
  );
};

export default AppDetailPage;
