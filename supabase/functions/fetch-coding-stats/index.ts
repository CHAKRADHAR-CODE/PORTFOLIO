import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface PlatformStats {
  platform: string;
  username: string;
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  rating: number;
  ranking: number;
  badges: number;
  streak: number;
  score: number;
  additionalData: Record<string, any>;
  verified: boolean;
  lastUpdated: string;
}

// LeetCode - Official GraphQL API
async function fetchLeetCodeStats(username: string): Promise<PlatformStats | null> {
  try {
    console.log(`[LeetCode] Fetching stats for ${username}...`);
    
    const query = `
      query userProblemsSolved($username: String!) {
        matchedUser(username: $username) {
          submitStatsGlobal {
            acSubmissionNum {
              difficulty
              count
            }
          }
          profile {
            ranking
            reputation
          }
          userCalendar {
            streak
            totalActiveDays
          }
        }
      }
    `;

    const response = await fetch("https://leetcode.com/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables: { username } }),
    });

    if (!response.ok) {
      console.log(`[LeetCode] API error: ${response.status}`);
      return null;
    }

    const data = await response.json();
    console.log(`[LeetCode] Response:`, JSON.stringify(data));

    if (!data.data?.matchedUser) {
      console.log(`[LeetCode] User not found`);
      return null;
    }

    const user = data.data.matchedUser;
    const stats = user.submitStatsGlobal.acSubmissionNum;

    return {
      platform: "leetcode",
      username,
      totalSolved: stats.find((s: any) => s.difficulty === "All")?.count || 0,
      easySolved: stats.find((s: any) => s.difficulty === "Easy")?.count || 0,
      mediumSolved: stats.find((s: any) => s.difficulty === "Medium")?.count || 0,
      hardSolved: stats.find((s: any) => s.difficulty === "Hard")?.count || 0,
      rating: 0,
      ranking: user.profile?.ranking || 0,
      badges: 0,
      streak: user.userCalendar?.streak || 0,
      score: user.profile?.reputation || 0,
      additionalData: {
        totalActiveDays: user.userCalendar?.totalActiveDays || 0,
      },
      verified: true,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`[LeetCode] Error:`, error);
    return null;
  }
}

// GeeksforGeeks - User provided stats
async function fetchGFGStats(username: string): Promise<PlatformStats> {
  console.log(`[GFG] Using verified stats for ${username}...`);
  
  // User-provided verified stats
  return {
    platform: "gfg",
    username,
    totalSolved: 285,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    rating: 0,
    ranking: 118,
    badges: 0,
    streak: 264,
    score: 1133,
    additionalData: {
      potdsSolved: 264,
    },
    verified: true,
    lastUpdated: new Date().toISOString(),
  };
}

// CodeChef - User provided stats
async function fetchCodeChefStats(username: string): Promise<PlatformStats> {
  console.log(`[CodeChef] Using verified stats for ${username}...`);
  
  // User-provided verified stats
  return {
    platform: "codechef",
    username,
    totalSolved: 573,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    rating: 0,
    ranking: 0,
    badges: 0,
    streak: 0,
    score: 1185,
    additionalData: {
      stars: "1★",
      contests: 12,
    },
    verified: true,
    lastUpdated: new Date().toISOString(),
  };
}

// Codeforces - Official API
async function fetchCodeforcesStats(username: string): Promise<PlatformStats | null> {
  try {
    console.log(`[Codeforces] Fetching stats for ${username}...`);
    
    const response = await fetch(`https://codeforces.com/api/user.info?handles=${username}`);
    
    if (!response.ok) {
      console.log(`[Codeforces] API error: ${response.status}`);
      return {
        platform: "codeforces",
        username,
        totalSolved: 0,
        easySolved: 0,
        mediumSolved: 0,
        hardSolved: 0,
        rating: 0,
        ranking: 0,
        badges: 0,
        streak: 0,
        score: 0,
        additionalData: { rank: "Newbie" },
        verified: false,
        lastUpdated: new Date().toISOString(),
      };
    }

    const data = await response.json();
    console.log(`[Codeforces] Response:`, JSON.stringify(data));

    if (data.status !== "OK" || !data.result?.[0]) {
      return null;
    }

    const user = data.result[0];
    
    // Fetch submission count
    let problemsSolved = 0;
    try {
      const submissionsResp = await fetch(`https://codeforces.com/api/user.status?handle=${username}&from=1&count=10000`);
      if (submissionsResp.ok) {
        const submissionsData = await submissionsResp.json();
        if (submissionsData.status === "OK") {
          const solvedProblems = new Set();
          submissionsData.result.forEach((sub: any) => {
            if (sub.verdict === "OK" && sub.problem) {
              solvedProblems.add(`${sub.problem.contestId}-${sub.problem.index}`);
            }
          });
          problemsSolved = solvedProblems.size;
        }
      }
    } catch (e) {
      console.log(`[Codeforces] Could not fetch submissions`);
    }

    return {
      platform: "codeforces",
      username,
      totalSolved: problemsSolved,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      rating: user.rating || 0,
      ranking: user.rank ? 0 : 0,
      badges: 0,
      streak: 0,
      score: user.maxRating || 0,
      additionalData: {
        rank: user.rank || "Newbie",
        maxRank: user.maxRank || "Newbie",
        maxRating: user.maxRating || 0,
        contribution: user.contribution || 0,
      },
      verified: true,
      lastUpdated: new Date().toISOString(),
    };
  } catch (error) {
    console.error(`[Codeforces] Error:`, error);
    return {
      platform: "codeforces",
      username,
      totalSolved: 0,
      easySolved: 0,
      mediumSolved: 0,
      hardSolved: 0,
      rating: 0,
      ranking: 0,
      badges: 0,
      streak: 0,
      score: 0,
      additionalData: { rank: "Newbie" },
      verified: false,
      lastUpdated: new Date().toISOString(),
    };
  }
}

// CSES - Baseline (no public API)
async function fetchCSESStats(userId: string): Promise<PlatformStats> {
  console.log(`[CSES] Using baseline stats for user ${userId}...`);
  
  return {
    platform: "cses",
    username: userId,
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    rating: 0,
    ranking: 0,
    badges: 0,
    streak: 0,
    score: 0,
    additionalData: {
      focus: "Algorithms",
      status: "Active",
    },
    verified: true,
    lastUpdated: new Date().toISOString(),
  };
}

// HackerRank - Baseline with manual verification
async function fetchHackerRankStats(username: string): Promise<PlatformStats> {
  console.log(`[HackerRank] Using verified stats for ${username}...`);
  
  return {
    platform: "hackerrank",
    username,
    totalSolved: 0,
    easySolved: 0,
    mediumSolved: 0,
    hardSolved: 0,
    rating: 0,
    ranking: 0,
    badges: 13,
    streak: 0,
    score: 0,
    additionalData: {
      cStars: 5,
      problemSolvingStars: 4,
      sqlCppStars: 2,
      pythonStrong: true,
    },
    verified: true,
    lastUpdated: new Date().toISOString(),
  };
}

// Save stats to database
async function saveStats(supabase: any, stats: PlatformStats) {
  try {
    const { error } = await supabase.from("coding_stats").insert({
      platform: stats.platform,
      username: stats.username,
      total_solved: stats.totalSolved,
      easy_solved: stats.easySolved,
      medium_solved: stats.mediumSolved,
      hard_solved: stats.hardSolved,
      rating: stats.rating,
      ranking: stats.ranking,
      badges: stats.badges,
      streak: stats.streak,
      score: stats.score,
      additional_data: stats.additionalData,
      fetched_at: stats.lastUpdated,
    });

    if (error) {
      console.error(`[DB] Error saving ${stats.platform} stats:`, error);
    } else {
      console.log(`[DB] Saved ${stats.platform} stats successfully`);
    }
  } catch (error) {
    console.error(`[DB] Error:`, error);
  }
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("[Main] Starting coding stats fetch...");

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch from all platforms in parallel
    const [leetcode, gfg, codechef, codeforces, cses, hackerrank] = await Promise.all([
      fetchLeetCodeStats("GUNNAM_CHAKRADHAR"),
      fetchGFGStats("chakradhardon"),
      fetchCodeChefStats("born_to_code01"),
      fetchCodeforcesStats("Born_To_Code1"),
      fetchCSESStats("396821"),
      fetchHackerRankStats("24B11AI054"),
    ]);

    // Save new stats to database
    const savePromises = [];
    if (leetcode) savePromises.push(saveStats(supabase, leetcode));
    if (gfg) savePromises.push(saveStats(supabase, gfg));
    if (codechef) savePromises.push(saveStats(supabase, codechef));
    if (codeforces) savePromises.push(saveStats(supabase, codeforces));
    if (cses) savePromises.push(saveStats(supabase, cses));
    if (hackerrank) savePromises.push(saveStats(supabase, hackerrank));
    
    await Promise.all(savePromises);

    // Calculate totals
    const totalProblems = 
      (leetcode?.totalSolved || 0) + 
      (gfg?.totalSolved || 0) + 
      (codechef?.totalSolved || 0) +
      (codeforces?.totalSolved || 0);

    const response = {
      leetcode,
      gfg,
      codechef,
      codeforces,
      cses,
      hackerrank,
      summary: {
        totalProblems,
        platforms: 6,
        maxStreak: Math.max(leetcode?.streak || 0, gfg?.streak || 0),
        totalBadges: hackerrank?.badges || 0,
        lastUpdated: new Date().toISOString(),
      },
    };

    console.log("[Main] Final response:", JSON.stringify(response));

    return new Response(JSON.stringify(response), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: any) {
    console.error("[Main] Error:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { "Content-Type": "application/json", ...corsHeaders } }
    );
  }
};

serve(handler);
