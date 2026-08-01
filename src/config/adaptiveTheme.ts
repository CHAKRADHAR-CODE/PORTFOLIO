// Adaptive Theme Configuration - Seasons & Device Responsiveness
// Luxury Black & Gold Morph Design System

export type Season = "spring" | "summer" | "autumn" | "winter";

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface ThemeColors {
  gradient: string;
  orbColors: string[];
  particleColor: string;
  glowColor: string;
  accentHsl: string;
}

// Season themes - Black & Gold luxury with seasonal tint variations
export const seasonThemes: Record<Season, ThemeColors> = {
  spring: {
    gradient: "from-[#0b0a06] via-[#151207] to-[#0d0c07]",
    orbColors: ["hsl(45,100%,58%,0.12)", "hsl(43,95%,50%,0.09)", "hsl(38,95%,48%,0.06)"],
    particleColor: "hsl(45,100%,68%,0.7)",
    glowColor: "hsl(45,100%,55%,0.15)",
    accentHsl: "43 95% 58%",
  },
  summer: {
    gradient: "from-[#0c0b06] via-[#161309] to-[#0e0d08]",
    orbColors: ["hsl(43,95%,56%,0.13)", "hsl(38,95%,52%,0.1)", "hsl(45,100%,60%,0.07)"],
    particleColor: "hsl(43,95%,62%,0.75)",
    glowColor: "hsl(43,95%,55%,0.16)",
    accentHsl: "43 95% 58%",
  },
  autumn: {
    gradient: "from-[#0d0a06] via-[#171107] to-[#0f0c07]",
    orbColors: ["hsl(38,95%,54%,0.13)", "hsl(35,90%,50%,0.1)", "hsl(30,80%,45%,0.07)"],
    particleColor: "hsl(40,95%,62%,0.75)",
    glowColor: "hsl(38,95%,52%,0.16)",
    accentHsl: "40 90% 55%",
  },
  winter: {
    gradient: "from-[#0a0a0c] via-[#141318] to-[#0b0b0e]",
    orbColors: ["hsl(45,85%,60%,0.1)", "hsl(43,70%,55%,0.08)", "hsl(200,40%,60%,0.06)"],
    particleColor: "hsl(45,100%,72%,0.7)",
    glowColor: "hsl(45,85%,60%,0.13)",
    accentHsl: "45 90% 62%",
  },
};

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
