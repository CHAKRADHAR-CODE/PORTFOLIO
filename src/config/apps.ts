export interface AppHighlight {
  icon: string;
  label: string;
}

export interface AppInfo {
  id: string;
  name: string;
  tagline: string;
  tag: string;
  category: string;
  developer: string;
  logo: string;
  banner: string;
  screenshots: string[];
  website: string;
  summary: string;
  keyHighlights: AppHighlight[];
  version: string;
  updated: string;
  desktopSize: string;
  mobileSize: string;
  requiredSpace: string;
  installs: string;
  accent: string;
  downloads: {
    windows: { file: string; label: string; size: string };
    android: { file: string; label: string; size: string };
  };
}

export const APPS: AppInfo[] = [
  {
    id: "bingo",
    name: "Bingo Prime",
    tagline: "Experience real-time Bingo with multiplayer rooms, smart AI, and seamless gameplay",
    tag: "GAME",
    category: "Games",
    developer: "Chakradhar Gunnam",
    logo: "/apps/bingo/logo/bingo-logo.png",
    banner: "/apps/bingo/images/banner.png",
    screenshots: [
      "/apps/bingo/images/screenshot-1.png",
      "/apps/bingo/images/screenshot-2.png",
      "/apps/bingo/images/screenshot-3.png",
      "/apps/bingo/images/screenshot-4.png",
      "/apps/bingo/images/screenshot-5.png",
      "/apps/bingo/images/screenshot-6.png",
      "/apps/bingo/images/screenshot-7.png",
    ],
    website: "https://bingo-prime.up.railway.app/",
    summary:
      "Bingo Prime Edition is a modern multiplayer Bingo game that lets players compete in real-time private rooms or challenge intelligent AI opponents. With customizable boards, live gameplay, room codes, and a clean cross-platform interface, it delivers a fast, competitive, and engaging Bingo experience.",
    keyHighlights: [
      { icon: "users", label: "Real-Time Multiplayer" },
      { icon: "bot", label: "Smart AI Battles" },
      { icon: "lock", label: "Private Rooms" },
      { icon: "zap", label: "Live Match Updates" },
      { icon: "shield", label: "Secure & Fast Gameplay" },
      { icon: "sparkles", label: "Modern Premium UI" },
      { icon: "devices", label: "Cross-Platform Compatibility" },
    ],
    version: "1.0.0",
    updated: "Jul 2026",
    desktopSize: "120 MB",
    mobileSize: "5 MB",
    requiredSpace: "1 GB",
    installs: "1K+",
    accent: "from-[#e53935] via-[#d81b60] to-[#8e24aa]",
    downloads: {
      windows: {
        file: "/downloads/bingo/BingoPrime-Setup.exe",
        label: "BingoPrime-Setup.exe",
        size: "120 MB",
      },
      android: {
        file: "/downloads/bingo/BingoPrime.apk",
        label: "BingoPrime.apk",
        size: "5 MB",
      },
    },
  },
];

export const getAppById = (id: string | undefined): AppInfo | undefined =>
  APPS.find((app) => app.id === id);
