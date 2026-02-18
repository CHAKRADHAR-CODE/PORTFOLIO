// Adaptive Theme Configuration - Seasons & Device Responsiveness
// Premium Red & Black Morph Design System

export type Season = "spring" | "summer" | "autumn" | "winter";

export type DeviceType = "mobile" | "tablet" | "desktop";

export interface ThemeColors {
  gradient: string;
  orbColors: string[];
  particleColor: string;
  glowColor: string;
  accentHsl: string;
}

// Season themes - Red & Black morph with seasonal tints
export const seasonThemes: Record<Season, ThemeColors> = {
  spring: {
    gradient: "from-[#0a0404] via-[#1a0808] to-[#0f0605]",
    orbColors: ["hsl(0,80%,40%,0.14)", "hsl(340,70%,45%,0.1)", "hsl(10,60%,40%,0.07)"],
    particleColor: "hsl(350,80%,65%,0.7)",
    glowColor: "hsl(350,80%,50%,0.15)",
    accentHsl: "350 80% 55%",
  },
  summer: {
    gradient: "from-[#0f0404] via-[#1a0606] to-[#120505]",
    orbColors: ["hsl(0,90%,45%,0.15)", "hsl(15,85%,50%,0.1)", "hsl(348,80%,45%,0.08)"],
    particleColor: "hsl(15,90%,60%,0.8)",
    glowColor: "hsl(0,90%,50%,0.18)",
    accentHsl: "0 90% 55%",
  },
  autumn: {
    gradient: "from-[#0d0303] via-[#1a0808] to-[#100505]",
    orbColors: ["hsl(0,75%,35%,0.16)", "hsl(15,80%,40%,0.1)", "hsl(350,70%,35%,0.08)"],
    particleColor: "hsl(10,85%,55%,0.8)",
    glowColor: "hsl(5,85%,45%,0.15)",
    accentHsl: "5 80% 50%",
  },
  winter: {
    gradient: "from-[#060408] via-[#0d060a] to-[#0a0410]",
    orbColors: ["hsl(0,70%,35%,0.12)", "hsl(340,60%,40%,0.09)", "hsl(280,50%,35%,0.06)"],
    particleColor: "hsl(0,40%,80%,0.7)",
    glowColor: "hsl(350,70%,45%,0.12)",
    accentHsl: "350 70% 50%",
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
