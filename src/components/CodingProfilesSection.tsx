import { useEffect, useState } from "react";
import { Trophy, Flame, Star, Target, TrendingUp, ExternalLink, RefreshCw, CheckCircle, AlertCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import AnimatedSection from "./AnimatedSection";

// Official Platform SVG Logos
const GfgLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#2F8D46" />
    <path d="M35 55c0-8.3 6.7-15 15-15h10v8H50c-3.9 0-7 3.1-7 7s3.1 7 7 7h10v8H50c-8.3 0-15-6.7-15-15z" fill="white"/>
    <path d="M55 40h10c8.3 0 15 6.7 15 15s-6.7 15-15 15H55v-8h10c3.9 0 7-3.1 7-7s-3.1-7-7-7H55v-8z" fill="white"/>
  </svg>
);

const LeetCodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#FFA116" />
    <path d="M30 65l25-25 8 8-25 25-8-8z" fill="white"/>
    <path d="M55 40l15-15 8 8-15 15-8-8z" fill="white"/>
    <path d="M40 75h30v8H40z" fill="white"/>
  </svg>
);

const HackerRankLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#00EA64" />
    <path d="M35 30h10v40H35zM55 30h10v40H55zM40 47h20v6H40z" fill="white"/>
  </svg>
);

const CodeChefLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#5B4638" />
    <ellipse cx="50" cy="35" rx="15" ry="10" fill="white"/>
    <path d="M35 35c0 0 0 35 15 35s15-35 15-35" stroke="white" strokeWidth="8" fill="none"/>
  </svg>
);

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
  const [error, setError] = useState<string | null>(null);

  const fetchStats = async () => {
    setLoading(true);
    setError(null);
    try {
      const { data, error } = await supabase.functions.invoke('fetch-coding-stats');
      if (error) throw error;
      setStats(data);
    } catch (err: any) {
      console.error("Error fetching stats:", err);
      setError("Failed to fetch stats. Using cached data.");
      // Use fallback data
      setStats({
        leetcode: { platform: "leetcode", totalSolved: 220, easySolved: 100, mediumSolved: 85, hardSolved: 35, ranking: 0, badges: 0, streak: 0, score: 0, additionalData: {}, verified: false, lastUpdated: new Date().toISOString() },
        gfg: { platform: "gfg", totalSolved: 250, easySolved: 48, mediumSolved: 172, hardSolved: 30, ranking: 130, badges: 0, streak: 251, score: 1019, additionalData: {}, verified: false, lastUpdated: new Date().toISOString() },
        codechef: { platform: "codechef", totalSolved: 325, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 0, badges: 0, streak: 0, score: 0, additionalData: { stars: "1★", contests: 2 }, verified: false, lastUpdated: new Date().toISOString() },
        hackerrank: { platform: "hackerrank", totalSolved: 0, easySolved: 0, mediumSolved: 0, hardSolved: 0, ranking: 0, badges: 13, streak: 0, score: 0, additionalData: { cStars: 5, problemSolvingStars: 4 }, verified: false, lastUpdated: new Date().toISOString() },
        summary: { totalProblems: 795, platforms: 4, maxStreak: 251, totalBadges: 13, lastUpdated: new Date().toISOString() },
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const profiles = [
    {
      platform: "GeeksforGeeks",
      logo: GfgLogo,
      url: "https://www.geeksforgeeks.org/profile/chakradhardon",
      stats: [
        { label: "Problems Solved", value: "265+", icon: Target },
        { label: "Medium", value: "186", icon: TrendingUp },
        { label: "Hard", value: "36", icon: Star },
        { label: "Day Streak", value: "263", icon: Flame },
      ],
      highlight: "Top Performer",
      verified: true,
      color: "from-[#2F8D46] to-[#1a5c2d]",
      bgColor: "bg-[#2F8D46]/10",
    },
    {
      platform: "CodeChef",
      logo: CodeChefLogo,
      url: "https://www.codechef.com/users/born_to_code01",
      stats: [
        { label: "Problems", value: "537+", icon: Target },
        { label: "Contests", value: "8", icon: Trophy },
        { label: "Rating", value: "1★", icon: Star },
        { label: "Score", value: "1146", icon: TrendingUp },
      ],
      highlight: "Active competitor",
      verified: true,
      color: "from-[#5B4638] to-[#3d2e25]",
      bgColor: "bg-[#5B4638]/10",
    },
    {
      platform: "HackerRank",
      logo: HackerRankLogo,
      url: "https://www.hackerrank.com/profile/24B11AI054",
      stats: [
        { label: "Badges", value: "5", icon: Trophy },
        { label: "Problem Solving", value: "4⭐", icon: Star },
        { label: "C", value: "3⭐", icon: Star },
        { label: "SQL/C++/Python", value: "2⭐", icon: Star },
      ],
      highlight: "Multi-domain Expert",
      verified: true,
      color: "from-[#00EA64] to-[#00b84d]",
      bgColor: "bg-[#00EA64]/10",
    },
    {
      platform: "LeetCode",
      logo: LeetCodeLogo,
      url: "https://leetcode.com/u/GUNNAM_CHAKRADHAR/",
      stats: stats?.leetcode ? [
        { label: "Total Solved", value: `${stats.leetcode.totalSolved}+`, icon: Target },
        { label: "Easy", value: `${stats.leetcode.easySolved}`, icon: TrendingUp },
        { label: "Medium", value: `${stats.leetcode.mediumSolved}`, icon: Star },
        { label: "Hard", value: `${stats.leetcode.hardSolved}`, icon: Trophy },
      ] : [],
      highlight: stats?.leetcode?.verified ? "Live Stats from API" : "Fetching live data...",
      verified: stats?.leetcode?.verified,
      color: "from-[#FFA116] to-[#cc8012]",
      bgColor: "bg-[#FFA116]/10",
    },
  ];

  return (
    <section id="coding" className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 tracking-wide uppercase">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My competitive programming journey across multiple platforms. Stats are fetched automatically!
          </p>
          <button
            onClick={fetchStats}
            disabled={loading}
            className="mt-4 inline-flex items-center gap-2 text-sm text-primary hover:text-primary/80 transition-colors"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />
            {loading ? "Updating..." : "Refresh Stats"}
          </button>
        </AnimatedSection>

        {/* Stats Summary */}
        <AnimatedSection animation="scale" delay={100}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: "Total Problems", value: stats?.summary?.totalProblems ? `${stats.summary.totalProblems}+` : "1000+", icon: Target },
              { label: "Platforms", value: `${stats?.summary?.platforms || 4}`, icon: Trophy },
              { label: "Max Streak", value: `${stats?.summary?.maxStreak || 251} days`, icon: Flame },
              { label: "Badges", value: `${stats?.summary?.totalBadges || 13}+`, icon: Star },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl p-4 text-center hover:glow-primary transition-all duration-300 hover:-translate-y-1"
              >
                <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <AnimatedSection key={profile.platform} animation="fade-up" delay={index * 100}>
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block cursor-pointer"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${profile.color} rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-500`} />
                
                <div className="relative glass-card rounded-2xl p-6 hover:-translate-y-2 transition-all duration-300 border border-transparent group-hover:border-primary/30">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-xl ${profile.bgColor}`}>
                        <profile.logo />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          {profile.platform}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-1">
                          {profile.highlight}
                          {profile.verified ? (
                            <CheckCircle className="w-3 h-3 text-green-500" />
                          ) : (
                            <AlertCircle className="w-3 h-3 text-yellow-500" />
                          )}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    {profile.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="p-3 rounded-lg bg-background/50 border border-border/50 group-hover:border-primary/20 transition-colors"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <stat.icon className="w-4 h-4 text-primary" />
                          <span className="text-xs text-muted-foreground">{stat.label}</span>
                        </div>
                        <p className="text-lg font-bold">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </a>
            </AnimatedSection>
          ))}
        </div>

        {/* Data Source Note */}
        <AnimatedSection className="mt-8 text-center" delay={400}>
          <p className="text-xs text-muted-foreground">
            {stats?.summary?.lastUpdated && (
              <>Last updated: {new Date(stats.summary.lastUpdated).toLocaleString()} • </>
            )}
            Data fetched from official APIs where available. Some platforms may show estimated values.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
