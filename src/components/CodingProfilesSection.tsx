import { Trophy, Flame, Star, Target, TrendingUp, ExternalLink } from "lucide-react";

// Platform logos as SVG components
const GfgLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#2F8D46" />
    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold">G</text>
  </svg>
);

const LeetCodeLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#FFA116" />
    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold">L</text>
  </svg>
);

const HackerRankLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#00EA64" />
    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold">H</text>
  </svg>
);

const CodeChefLogo = () => (
  <svg viewBox="0 0 100 100" className="w-10 h-10">
    <circle cx="50" cy="50" r="45" fill="#5B4638" />
    <text x="50" y="65" textAnchor="middle" fill="white" fontSize="40" fontWeight="bold">C</text>
  </svg>
);

const profiles = [
  {
    platform: "GeeksforGeeks",
    logo: GfgLogo,
    url: "https://www.geeksforgeeks.org/user/chakradhardon/",
    stats: [
      { label: "Problems Solved", value: "250+", icon: Target },
      { label: "Medium", value: "172", icon: TrendingUp },
      { label: "Hard", value: "30", icon: Star },
      { label: "Day Streak", value: "251", icon: Flame },
    ],
    highlight: "Rank 130 | Score 1019",
    color: "from-[#2F8D46] to-[#1a5c2d]",
    bgColor: "bg-[#2F8D46]/10",
  },
  {
    platform: "LeetCode",
    logo: LeetCodeLogo,
    url: "https://leetcode.com/u/GUNNAM_CHAKRADHAR/",
    stats: [
      { label: "Total Solved", value: "220+", icon: Target },
      { label: "Easy", value: "100", icon: TrendingUp },
      { label: "Medium", value: "85", icon: Star },
      { label: "Hard", value: "35", icon: Trophy },
    ],
    highlight: "Consistently improving DSA",
    color: "from-[#FFA116] to-[#cc8012]",
    bgColor: "bg-[#FFA116]/10",
  },
  {
    platform: "HackerRank",
    logo: HackerRankLogo,
    url: "https://www.hackerrank.com/profile/24B11AI054",
    stats: [
      { label: "Badges", value: "13", icon: Trophy },
      { label: "C Stars", value: "5⭐", icon: Star },
      { label: "Problem Solving", value: "4⭐", icon: Target },
      { label: "SQL/C++", value: "2⭐", icon: TrendingUp },
    ],
    highlight: "Strong in Python",
    color: "from-[#00EA64] to-[#00b84d]",
    bgColor: "bg-[#00EA64]/10",
  },
  {
    platform: "CodeChef",
    logo: CodeChefLogo,
    url: "https://www.codechef.com/users/born_to_code01",
    stats: [
      { label: "Problems", value: "325+", icon: Target },
      { label: "Contests", value: "2", icon: Trophy },
      { label: "Rating", value: "1⭐", icon: Star },
    ],
    highlight: "Active competitor",
    color: "from-[#5B4638] to-[#3d2e25]",
    bgColor: "bg-[#5B4638]/10",
  },
];

const CodingProfilesSection = () => {
  return (
    <section id="coding" className="py-20 px-4 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My competitive programming journey across multiple platforms. Click on any card to visit my profile!
          </p>
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Total Problems", value: "1000+", icon: Target },
            { label: "Platforms", value: "4", icon: Trophy },
            { label: "Max Streak", value: "251 days", icon: Flame },
            { label: "Badges", value: "13+", icon: Star },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass-card rounded-xl p-4 text-center hover:glow-primary transition-all duration-300"
            >
              <stat.icon className="w-6 h-6 text-primary mx-auto mb-2" />
              <p className="text-2xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {profiles.map((profile) => (
            <a
              key={profile.platform}
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
                      <p className="text-sm text-muted-foreground">{profile.highlight}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;