import { useState, useEffect, useMemo, useCallback } from "react";
import { 
  Season, 
  Festival, 
  DeviceType, 
  ThemeColors,
  seasonThemes, 
  festivalConfigs,
  breakpoints,
  animationDensity,
  FestivalConfig 
} from "@/config/adaptiveTheme";

interface AdaptiveThemeState {
  season: Season;
  festival: Festival;
  festivalConfig: FestivalConfig | null;
  deviceType: DeviceType;
  theme: ThemeColors;
  particleCount: number;
  orbCount: number;
  decorationCount: number;
  prefersReducedMotion: boolean;
  isLowEndDevice: boolean;
}

export const useAdaptiveTheme = (): AdaptiveThemeState => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // Detect current season based on month
  const season = useMemo((): Season => {
    const month = new Date().getMonth() + 1; // 1-12
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";
    return "winter";
  }, []);

  // Detect current festival based on date
  const { festival, festivalConfig } = useMemo((): { festival: Festival; festivalConfig: FestivalConfig | null } => {
    const now = new Date();
    const currentMonth = now.getMonth() + 1;
    const currentDay = now.getDate();

    for (const config of festivalConfigs) {
      for (const range of config.dateRange) {
        if (range.month === currentMonth && currentDay >= range.startDay && currentDay <= range.endDay) {
          return { festival: config.name, festivalConfig: config };
        }
      }
    }
    return { festival: null, festivalConfig: null };
  }, []);

  // Get active theme (festival overrides season)
  const theme = useMemo((): ThemeColors => {
    if (festivalConfig) {
      return festivalConfig.theme;
    }
    return seasonThemes[season];
  }, [season, festivalConfig]);

  // Detect device type
  const updateDeviceType = useCallback(() => {
    const width = window.innerWidth;
    if (width < breakpoints.mobile) {
      setDeviceType("mobile");
    } else if (width < breakpoints.tablet) {
      setDeviceType("tablet");
    } else {
      setDeviceType("desktop");
    }
  }, []);

  // Detect reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Detect low-end device
  useEffect(() => {
    const checkPerformance = () => {
      // Check hardware concurrency (CPU cores)
      const cores = navigator.hardwareConcurrency || 4;
      // Check device memory (if available)
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
      // Consider low-end if fewer than 4 cores or less than 4GB RAM
      setIsLowEndDevice(cores < 4 || memory < 4);
    };
    checkPerformance();
  }, []);

  // Handle resize
  useEffect(() => {
    updateDeviceType();
    window.addEventListener("resize", updateDeviceType);
    return () => window.removeEventListener("resize", updateDeviceType);
  }, [updateDeviceType]);

  // Calculate animation counts based on device and performance
  const { particleCount, orbCount, decorationCount } = useMemo(() => {
    const base = animationDensity[deviceType];
    
    if (prefersReducedMotion) {
      return { particleCount: 0, orbCount: 0, decorationCount: 0 };
    }
    
    if (isLowEndDevice) {
      return {
        particleCount: Math.floor(base.particles * 0.5),
        orbCount: Math.max(1, Math.floor(base.orbs * 0.5)),
        decorationCount: Math.floor(base.decorations * 0.5),
      };
    }
    
    return {
      particleCount: base.particles,
      orbCount: base.orbs,
      decorationCount: base.decorations,
    };
  }, [deviceType, prefersReducedMotion, isLowEndDevice]);

  return {
    season,
    festival,
    festivalConfig,
    deviceType,
    theme,
    particleCount,
    orbCount,
    decorationCount,
    prefersReducedMotion,
    isLowEndDevice,
  };
};

export default useAdaptiveTheme;
