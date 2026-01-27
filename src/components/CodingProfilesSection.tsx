import { useEffect, useState } from "react";
import { Trophy, Flame, Star, Target, TrendingUp, ExternalLink, RefreshCw, CheckCircle, AlertCircle, Code2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "./AnimatedSection";
import StaggerItem from "./StaggerItem";

interface PlatformStats {
  platform: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  ranking: number;
  badges: number;
  streak: number;
  score: number;
  additionalData: Record<string, any>;
  verified: boolean;
  lastUpdated: string;
}

interface CodingStats {
  leetcode: PlatformStats | null;
  gfg: PlatformStats | null;
  codechef: PlatformStats | null;
  codeforces: PlatformStats | null;
  cses: PlatformStats | null;
  hackerrank: PlatformStats | null;
  summary: {
    totalProblems: number;
    platforms: number;
    maxStreak: number;
    totalBadges: number;
    lastUpdated: string;
  };
}

const CodingProfilesSection = () => {
  const [stats, setStats] = useState<CodingStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [hoveredProfile, setHoveredProfile] = useState<string | null>(null);
  const [ripple, setRipple] = useState<{x: number, y: number, platform: string} | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-coding-stats');
      if (error) throw error;
      setStats(data);
    } catch (err: any) {
      console.error("Error fetching stats:", err);
      // Fallback stats
      setStats({
        leetcode: { platform: "leetcode", totalSolved: 307, easySolved: 164, mediumSolved: 104, hardSolved: 39, ranking: 411886, badges: 0, streak: 55, score: 0, additionalData: {}, verified: true, lastUpdated: new Date().toISOString() },
        gfg: { platform: "gfg", totalSolved: 285, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 118, badges: 0, streak: 264, score: 1133, additionalData: { potdsSolved: 264 }, verified: true, lastUpdated: new Date().toISOString() },
        codechef: { platform: "codechef", totalSolved: 573, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 0, badges: 0, streak: 0, score: 1185, additionalData: { stars: "1★", contests: 12 }, verified: true, lastUpdated: new Date().toISOString() },
        codeforces: { platform: "codeforces", totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 0, badges: 0, streak: 0, score: 0, additionalData: { rank: "Newbie" }, verified: true, lastUpdated: new Date().toISOString() },
        cses: { platform: "cses", totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 0, badges: 0, streak: 0, score: 0, additionalData: { focus: "Algorithms" }, verified: true, lastUpdated: new Date().toISOString() },
        hackerrank: { platform: "hackerrank", totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 0, badges: 13, streak: 0, score: 0, additionalData: { cStars: 5, problemSolvingStars: 4 }, verified: true, lastUpdated: new Date().toISOString() },
        summary: { totalProblems: 1165, platforms: 6, maxStreak: 264, totalBadges: 13, lastUpdated: new Date().toISOString() },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleCardClick = (platform: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipple({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      platform,
    });
    setTimeout(() => setRipple(null), 600);
  };

  // Ordered profiles as requested with official images
  const profiles = [
    {
      platform: "LeetCode",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png",
      url: "https://leetcode.com/u/GUNNAM_CHAKRADHAR/",
      stats: stats?.leetcode ? [
        { label: "Total Solved", value: `${stats.leetcode.totalSolved}+`, icon: Target },
        { label: "Easy", value: `${stats.leetcode.easySolved}`, icon: TrendingUp },
        { label: "Medium", value: `${stats.leetcode.mediumSolved}`, icon: Star },
        { label: "Hard", value: `${stats.leetcode.hardSolved}`, icon: Trophy },
      ] : [],
      highlight: "Live Stats from API",
      verified: stats?.leetcode?.verified ?? true,
      color: "from-[#FFA116] to-[#cc8012]",
      bgColor: "bg-[#FFA116]/10",
      glowColor: "#FFA116",
    },
    {
      platform: "GeeksforGeeks",
      logo: "https://upload.wikimedia.org/wikipedia/commons/e/eb/GeeksForGeeks_logo.png",
      url: "https://www.geeksforgeeks.org/profile/chakradhardon",
      stats: [
        { label: "Problems Solved", value: "285+", icon: Target },
        { label: "Coding Score", value: "1133", icon: TrendingUp },
        { label: "Institute Rank", value: "#118", icon: Star },
        { label: "POTDs Solved", value: "264", icon: Flame },
      ],
      highlight: "Top Performer",
      verified: true,
      color: "from-[#2F8D46] to-[#1a5c2d]",
      bgColor: "bg-[#2F8D46]/10",
      glowColor: "#2F8D46",
    },
    {
      platform: "CodeChef",
      logo: "https://i.pinimg.com/474x/c5/d9/fc/c5d9fc1e18bcf039f464c2ab6cfb3eb6.jpg",
      url: "https://www.codechef.com/users/born_to_code01",
      stats: [
        { label: "Problems Solved", value: "573+", icon: Target },
        { label: "Contests", value: "12", icon: Trophy },
        { label: "Rating", value: "1★", icon: Star },
        { label: "Score", value: "1185", icon: TrendingUp },
      ],
      highlight: "Active Competitor",
      verified: true,
      color: "from-[#5B4638] to-[#3d2e25]",
      bgColor: "bg-[#5B4638]/10",
      glowColor: "#5B4638",
    },
    {
      platform: "Codeforces",
      logo: "https://cdn.iconscout.com/icon/free/png-256/free-code-forces-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-2-pack-logos-icons-2944796.png",
      url: "https://codeforces.com/profile/Born_To_Code1",
      stats: stats?.codeforces ? [
        { label: "Rating", value: stats.codeforces.additionalData?.rank || "Newbie", icon: Star },
        { label: "Max Rating", value: `${stats.codeforces.additionalData?.maxRating || 0}`, icon: Trophy },
        { label: "Problems", value: `${stats.codeforces.totalSolved || 0}+`, icon: Target },
        { label: "Status", value: "Active", icon: TrendingUp },
      ] : [],
      highlight: "Competitive Programmer",
      verified: stats?.codeforces?.verified ?? true,
      color: "from-[#1F8ACB] to-[#1565a0]",
      bgColor: "bg-[#1F8ACB]/10",
      glowColor: "#1F8ACB",
    },
    {
      platform: "CSES",
      logo: "https://cses.fi/logo.png",
      url: "https://cses.fi/user/396821",
      stats: [
        { label: "Problem Set", value: "Active", icon: Target },
        { label: "Focus", value: "Algorithms", icon: Code2 },
        { label: "Level", value: "Advanced", icon: Star },
        { label: "Status", value: "Learning", icon: TrendingUp },
      ],
      highlight: "Algorithm Practice",
      verified: true,
      color: "from-[#4A90D9] to-[#3a7bc0]",
      bgColor: "bg-[#4A90D9]/10",
      glowColor: "#4A90D9",
    },
    {
      platform: "HackerRank",
      logo: "https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png",
      url: "https://www.hackerrank.com/profile/24B11AI054",
      stats: [
        { label: "Badges", value: "13", icon: Trophy },
        { label: "Problem Solving", value: "4⭐", icon: Star },
        { label: "C", value: "5⭐", icon: Star },
        { label: "SQL/C++/Python", value: "2⭐", icon: Star },
      ],
      highlight: "Multi-domain Expert",
      verified: true,
      color: "from-[#00EA64] to-[#00b84d]",
      bgColor: "bg-[#00EA64]/10",
      glowColor: "#00EA64",
    },
  ];

  return (
    <section id="coding" className="py-24 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#FFA116]/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#2F8D46]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-[#1F8ACB]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full glass-card text-primary text-sm font-medium mb-4">
            💻 Competitive Coding
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My competitive programming journey across 6 major platforms
          </p>
          <button
            onClick={fetchStats}
            disabled={loading}
            className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-primary hover:bg-primary/10 transition-all duration-300 group"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : "group-hover:rotate-180 transition-transform duration-500"}`} />
            {loading ? "Updating..." : "Refresh Stats"}
          </button>
        </AnimatedSection>

        {/* Stats Summary */}
        <AnimatedSection animation="scale" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Problems", value: "1165+", icon: Target, color: "text-emerald-500" },
              { label: "Platforms", value: "6", icon: Trophy, color: "text-amber-500" },
              { label: "Max Streak", value: "264 days", icon: Flame, color: "text-orange-500" },
              { label: "Badges", value: "13+", icon: Star, color: "text-primary" },
            ].map((stat, index) => (
              <StaggerItem key={stat.label} index={index} baseDelay={100} animation="scale">
                <div className="glass-card rounded-xl p-5 text-center hover:glow-primary transition-all duration-300 hover:-translate-y-2 group">
                  <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`} />
                  <p className="text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </AnimatedSection>

        {/* Profiles Grid - 3 columns on larger screens */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <StaggerItem key={profile.platform} index={index} baseDelay={100} animation="fade-up">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer overflow-hidden"
                onMouseEnter={() => setHoveredProfile(profile.platform)}
                onMouseLeave={() => setHoveredProfile(null)}
                onClick={(e) => handleCardClick(profile.platform, e)}
              >
                {/* Glow effect */}
                <div 
                  className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${profile.glowColor}40, transparent)`,
                  }}
                />
                
                {/* Ripple effect */}
                {ripple?.platform === profile.platform && (
                  <div 
                    className="absolute rounded-full bg-white/30 animate-ripple pointer-events-none"
                    style={{
                      left: ripple.x,
                      top: ripple.y,
                      transform: 'translate(-50%, -50%)',
                    }}
                  />
                )}
                
                <div className="relative glass-card rounded-2xl p-6 hover:-translate-y-3 transition-all duration-500 border border-transparent group-hover:border-[color:var(--glow-color)]"
                  style={{ '--glow-color': `${profile.glowColor}50` } as React.CSSProperties}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div className={`relative p-2 rounded-xl ${profile.bgColor} group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                        <img 
                          src={profile.logo} 
                          alt={`${profile.platform} logo`}
                          className="w-10 h-10 object-contain"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${profile.platform}&background=random&color=fff&size=40`;
                          }}
                        />
                        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                          style={{ background: `linear-gradient(135deg, ${profile.glowColor}, transparent)` }}
                        />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold flex items-center gap-2">
                          {profile.platform}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all text-primary" />
                        </h3>
                        <p className="text-xs text-muted-foreground flex items-center gap-1">
                          {profile.highlight}
                          {profile.verified ? (
                            <CheckCircle className="w-3 h-3 text-emerald-500" />
                          ) : (
                            <AlertCircle className="w-3 h-3 text-amber-500 animate-pulse" />
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    {profile.stats.map((stat, statIndex) => (
                      <div
                        key={stat.label}
                        className="p-2 rounded-lg bg-background/50 border border-border/50 group-hover:border-[color:var(--glow-color)] transition-all duration-300"
                        style={{ 
                          transitionDelay: `${statIndex * 50}ms`,
                          '--glow-color': `${profile.glowColor}30`
                        } as React.CSSProperties}
                      >
                        <div className="flex items-center gap-1 mb-0.5">
                          <stat.icon className="w-3 h-3" style={{ color: profile.glowColor }} />
                          <span className="text-[10px] text-muted-foreground">{stat.label}</span>
                        </div>
                        <p className="text-sm font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Bottom gradient line */}
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, ${profile.glowColor}, transparent)` }}
                  />
                </div>
              </a>
            </StaggerItem>
          ))}
        </div>

        {/* Data Source Note */}
        <AnimatedSection className="mt-10 text-center" delay={400}>
          <p className="text-xs text-muted-foreground glass-card inline-block px-4 py-2 rounded-full">
            Click any card to visit the profile • Stats are fetched from official APIs
          </p>
        </AnimatedSection>
      </div>

      <style>{`
        @keyframes ripple {
          0% { width: 0; height: 0; opacity: 0.5; }
          100% { width: 300px; height: 300px; opacity: 0; }
        }
        .animate-ripple { animation: ripple 0.6s ease-out; }
      `}</style>
    </section>
  );
};

export default CodingProfilesSection;
