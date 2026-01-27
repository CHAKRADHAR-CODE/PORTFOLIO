// Adaptive Theme Configuration - Seasons, Festivals, and Device Responsiveness

export type Season = "spring" | "summer" | "autumn" | "winter";

export type Festival = 
  | "diwali" | "christmas" | "newYear" | "eidAlFitr" | "eidAlAdha" 
  | "chineseNewYear" | "thanksgiving" | "halloween" | "easter" 
  | "holi" | "ramadan" | "navratri" | "valentinesDay" | "independenceDay" | null;

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface ThemeColors {
  gradient: string;
  orbColors: string[];
  particleColor: string;
  glowColor: string;
  accentHsl: string;
}

export interface FestivalConfig {
  name: Festival;
  displayName: string;
  greeting: string;
  emoji: string;
  dateRange: { month: number; startDay: number; endDay: number }[];
  theme: ThemeColors;
  decorations?: "lights" | "fireworks" | "stars" | "lanterns" | "hearts" | "leaves" | "snowflakes";
}

// Season themes with premium colors
export const seasonThemes: Record<Season, ThemeColors> = {
  spring: {
    gradient: "from-[#0a1a0f] via-[#1a2a1f] to-[#0f1a15]",
    orbColors: ["hsl(120,60%,40%,0.12)", "hsl(90,80%,50%,0.08)", "hsl(150,60%,45%,0.06)"],
    particleColor: "hsl(120,80%,70%,0.7)",
    glowColor: "hsl(120,70%,50%,0.15)",
    accentHsl: "120 60% 45%",
  },
  summer: {
    gradient: "from-[#1a0a1a] via-[#2d1b3a] to-[#1a1a2e]",
    orbColors: ["hsl(280,80%,50%,0.12)", "hsl(320,100%,60%,0.08)", "hsl(260,100%,70%,0.06)"],
    particleColor: "hsl(40,100%,70%,0.8)",
    glowColor: "hsl(280,100%,70%,0.15)",
    accentHsl: "280 80% 60%",
  },
  autumn: {
    gradient: "from-[#1a0f0a] via-[#2a1a10] to-[#1a1510]",
    orbColors: ["hsl(30,80%,40%,0.15)", "hsl(15,100%,50%,0.1)", "hsl(45,80%,50%,0.08)"],
    particleColor: "hsl(30,100%,60%,0.8)",
    glowColor: "hsl(25,100%,50%,0.15)",
    accentHsl: "30 80% 50%",
  },
  winter: {
    gradient: "from-[#0a0a1a] via-[#0d1b2a] to-[#1b263b]",
    orbColors: ["hsl(220,80%,50%,0.12)", "hsl(200,100%,60%,0.08)", "hsl(260,100%,70%,0.06)"],
    particleColor: "hsl(200,100%,90%,0.8)",
    glowColor: "hsl(210,100%,70%,0.15)",
    accentHsl: "220 80% 60%",
  },
};

// Festival configurations with dates and themes
export const festivalConfigs: FestivalConfig[] = [
  {
    name: "newYear",
    displayName: "New Year",
    greeting: "Happy New Year",
    emoji: "🎆",
    dateRange: [{ month: 1, startDay: 1, endDay: 3 }, { month: 12, startDay: 31, endDay: 31 }],
    theme: {
      gradient: "from-[#0a0a1a] via-[#1a1a3a] to-[#0d0d2a]",
      orbColors: ["hsl(45,100%,50%,0.15)", "hsl(280,100%,60%,0.1)", "hsl(200,100%,60%,0.08)"],
      particleColor: "hsl(45,100%,70%,0.9)",
      glowColor: "hsl(45,100%,60%,0.2)",
      accentHsl: "45 100% 55%",
    },
    decorations: "fireworks",
  },
  {
    name: "valentinesDay",
    displayName: "Valentine's Day",
    greeting: "Happy Valentine's Day",
    emoji: "💕",
    dateRange: [{ month: 2, startDay: 13, endDay: 15 }],
    theme: {
      gradient: "from-[#1a0a10] via-[#2a1020] to-[#1a0a15]",
      orbColors: ["hsl(340,80%,50%,0.15)", "hsl(350,100%,60%,0.1)", "hsl(320,80%,55%,0.08)"],
      particleColor: "hsl(340,100%,70%,0.8)",
      glowColor: "hsl(340,90%,60%,0.2)",
      accentHsl: "340 80% 60%",
    },
    decorations: "hearts",
  },
  {
    name: "holi",
    displayName: "Holi",
    greeting: "Happy Holi",
    emoji: "🎨",
    dateRange: [{ month: 3, startDay: 20, endDay: 26 }],
    theme: {
      gradient: "from-[#1a0a1a] via-[#2a1a2a] to-[#1a1a2a]",
      orbColors: ["hsl(280,100%,60%,0.15)", "hsl(45,100%,60%,0.12)", "hsl(180,100%,50%,0.1)"],
      particleColor: "hsl(300,100%,70%,0.8)",
      glowColor: "hsl(280,100%,60%,0.2)",
      accentHsl: "280 100% 65%",
    },
    decorations: "stars",
  },
  {
    name: "easter",
    displayName: "Easter",
    greeting: "Happy Easter",
    emoji: "🐣",
    dateRange: [{ month: 3, startDay: 28, endDay: 31 }, { month: 4, startDay: 1, endDay: 25 }],
    theme: {
      gradient: "from-[#0f1a0f] via-[#1a2a1a] to-[#0f1a15]",
      orbColors: ["hsl(120,70%,50%,0.12)", "hsl(50,100%,60%,0.1)", "hsl(300,80%,60%,0.08)"],
      particleColor: "hsl(60,100%,70%,0.8)",
      glowColor: "hsl(120,80%,50%,0.15)",
      accentHsl: "120 70% 55%",
    },
    decorations: "stars",
  },
  {
    name: "eidAlFitr",
    displayName: "Eid al-Fitr",
    greeting: "Eid Mubarak",
    emoji: "🌙",
    dateRange: [{ month: 3, startDay: 28, endDay: 31 }, { month: 4, startDay: 1, endDay: 15 }],
    theme: {
      gradient: "from-[#0a1a1a] via-[#1a2a2a] to-[#0a1a20]",
      orbColors: ["hsl(45,80%,50%,0.15)", "hsl(160,60%,40%,0.1)", "hsl(180,70%,45%,0.08)"],
      particleColor: "hsl(45,100%,70%,0.8)",
      glowColor: "hsl(45,90%,55%,0.2)",
      accentHsl: "45 80% 55%",
    },
    decorations: "lanterns",
  },
  {
    name: "eidAlAdha",
    displayName: "Eid al-Adha",
    greeting: "Eid Mubarak",
    emoji: "🌙",
    dateRange: [{ month: 6, startDay: 5, endDay: 20 }],
    theme: {
      gradient: "from-[#0a1a1a] via-[#1a2a2a] to-[#0a1a20]",
      orbColors: ["hsl(45,80%,50%,0.15)", "hsl(160,60%,40%,0.1)", "hsl(180,70%,45%,0.08)"],
      particleColor: "hsl(45,100%,70%,0.8)",
      glowColor: "hsl(45,90%,55%,0.2)",
      accentHsl: "45 80% 55%",
    },
    decorations: "lanterns",
  },
  {
    name: "independenceDay",
    displayName: "Independence Day",
    greeting: "Happy Independence Day",
    emoji: "🇮🇳",
    dateRange: [{ month: 8, startDay: 15, endDay: 15 }],
    theme: {
      gradient: "from-[#0a1a0a] via-[#1a2a1a] to-[#0f1510]",
      orbColors: ["hsl(30,100%,50%,0.15)", "hsl(120,60%,40%,0.1)", "hsl(0,0%,100%,0.08)"],
      particleColor: "hsl(30,100%,60%,0.8)",
      glowColor: "hsl(30,100%,50%,0.2)",
      accentHsl: "30 100% 55%",
    },
    decorations: "fireworks",
  },
  {
    name: "navratri",
    displayName: "Navratri",
    greeting: "Happy Navratri",
    emoji: "🪔",
    dateRange: [{ month: 10, startDay: 1, endDay: 15 }],
    theme: {
      gradient: "from-[#1a0a0a] via-[#2a1a1a] to-[#1a0f0f]",
      orbColors: ["hsl(0,100%,50%,0.15)", "hsl(45,100%,55%,0.1)", "hsl(30,90%,50%,0.08)"],
      particleColor: "hsl(45,100%,65%,0.8)",
      glowColor: "hsl(30,100%,55%,0.2)",
      accentHsl: "30 100% 55%",
    },
    decorations: "lights",
  },
  {
    name: "halloween",
    displayName: "Halloween",
    greeting: "Happy Halloween",
    emoji: "🎃",
    dateRange: [{ month: 10, startDay: 28, endDay: 31 }],
    theme: {
      gradient: "from-[#0a0a0a] via-[#1a0f0a] to-[#0f0a0a]",
      orbColors: ["hsl(30,100%,50%,0.15)", "hsl(280,80%,40%,0.1)", "hsl(0,0%,20%,0.1)"],
      particleColor: "hsl(30,100%,55%,0.8)",
      glowColor: "hsl(30,100%,50%,0.2)",
      accentHsl: "30 100% 50%",
    },
    decorations: "stars",
  },
  {
    name: "diwali",
    displayName: "Diwali",
    greeting: "Happy Diwali",
    emoji: "🪔",
    dateRange: [{ month: 10, startDay: 20, endDay: 31 }, { month: 11, startDay: 1, endDay: 10 }],
    theme: {
      gradient: "from-[#1a0f0a] via-[#2a1a10] to-[#1a1005]",
      orbColors: ["hsl(45,100%,55%,0.18)", "hsl(30,100%,50%,0.12)", "hsl(15,100%,45%,0.08)"],
      particleColor: "hsl(45,100%,70%,0.9)",
      glowColor: "hsl(40,100%,55%,0.25)",
      accentHsl: "45 100% 55%",
    },
    decorations: "lights",
  },
  {
    name: "thanksgiving",
    displayName: "Thanksgiving",
    greeting: "Happy Thanksgiving",
    emoji: "🦃",
    dateRange: [{ month: 11, startDay: 20, endDay: 30 }],
    theme: {
      gradient: "from-[#1a0f08] via-[#2a1a10] to-[#1a1508]",
      orbColors: ["hsl(30,80%,45%,0.15)", "hsl(15,70%,40%,0.1)", "hsl(45,80%,50%,0.08)"],
      particleColor: "hsl(30,90%,60%,0.8)",
      glowColor: "hsl(30,80%,50%,0.15)",
      accentHsl: "30 80% 50%",
    },
    decorations: "leaves",
  },
  {
    name: "christmas",
    displayName: "Christmas",
    greeting: "Merry Christmas",
    emoji: "🎄",
    dateRange: [{ month: 12, startDay: 20, endDay: 26 }],
    theme: {
      gradient: "from-[#0a1a0a] via-[#0f2a0f] to-[#0a150a]",
      orbColors: ["hsl(0,100%,50%,0.12)", "hsl(120,80%,40%,0.1)", "hsl(45,100%,50%,0.08)"],
      particleColor: "hsl(0,0%,100%,0.9)",
      glowColor: "hsl(0,100%,50%,0.15)",
      accentHsl: "0 100% 50%",
    },
    decorations: "snowflakes",
  },
  {
    name: "chineseNewYear",
    displayName: "Chinese New Year",
    greeting: "Happy Lunar New Year",
    emoji: "🧧",
    dateRange: [{ month: 1, startDay: 20, endDay: 31 }, { month: 2, startDay: 1, endDay: 15 }],
    theme: {
      gradient: "from-[#1a0505] via-[#2a1010] to-[#1a0808]",
      orbColors: ["hsl(0,100%,50%,0.18)", "hsl(45,100%,55%,0.12)", "hsl(30,100%,50%,0.08)"],
      particleColor: "hsl(45,100%,65%,0.9)",
      glowColor: "hsl(0,100%,50%,0.2)",
      accentHsl: "0 100% 55%",
    },
    decorations: "lanterns",
  },
];

// Responsive breakpoints
export const breakpoints = {
  mobile: 768,
  tablet: 1024,
  desktop: 1280,
};

// Animation density by device
export const animationDensity: Record<DeviceType, { particles: number; orbs: number; decorations: number }> = {
  mobile: { particles: 15, orbs: 2, decorations: 8 },
  tablet: { particles: 30, orbs: 3, decorations: 15 },
  desktop: { particles: 50, orbs: 3, decorations: 25 },
};
