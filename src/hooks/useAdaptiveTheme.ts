import { useState, useEffect, useMemo, useCallback } from "react";
import { 
  Season, 
  DeviceType, 
  ThemeColors,
  seasonThemes, 
  breakpoints,
  animationDensity,
} from "@/config/adaptiveTheme";

interface AdaptiveThemeState {
  season: Season;
  deviceType: DeviceType;
  theme: ThemeColors;
  particleCount: number;
  orbCount: number;
  prefersReducedMotion: boolean;
  isLowEndDevice: boolean;
}

export const useAdaptiveTheme = (): AdaptiveThemeState => {
  const [deviceType, setDeviceType] = useState<DeviceType>("desktop");
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [isLowEndDevice, setIsLowEndDevice] = useState(false);

  // Detect current season based on month
  const season = useMemo((): Season => {
    const month = new Date().getMonth() + 1;
    if (month >= 3 && month <= 5) return "spring";
    if (month >= 6 && month <= 8) return "summer";
    if (month >= 9 && month <= 11) return "autumn";
    return "winter";
  }, []);

  // Get seasonal theme
  const theme = useMemo((): ThemeColors => {
    return seasonThemes[season];
  }, [season]);

  // Apply theme CSS variables to document root
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--theme-accent", theme.accentHsl);
    root.style.setProperty("--theme-glow", theme.glowColor);
    root.style.setProperty("--theme-particle", theme.particleColor);
    root.classList.add("theme-transition");
    
    console.log(`🎨 Active Season: ${season.charAt(0).toUpperCase() + season.slice(1)}`);
    
    return () => {
      root.classList.remove("theme-transition");
    };
  }, [theme, season]);

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
      const cores = navigator.hardwareConcurrency || 4;
      const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory || 4;
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
  const { particleCount, orbCount } = useMemo(() => {
    const base = animationDensity[deviceType];
    
    if (prefersReducedMotion) {
      return { particleCount: 0, orbCount: 0 };
    }
    
    if (isLowEndDevice) {
      return {
        particleCount: Math.floor(base.particles * 0.5),
        orbCount: Math.max(1, Math.floor(base.orbs * 0.5)),
      };
    }
    
    return {
      particleCount: base.particles,
      orbCount: base.orbs,
    };
  }, [deviceType, prefersReducedMotion, isLowEndDevice]);

  return {
    season,
    deviceType,
    theme,
    particleCount,
    orbCount,
    prefersReducedMotion,
    isLowEndDevice,
  };
};

export default useAdaptiveTheme;
