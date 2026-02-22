import { Helmet } from "react-helmet-async";
import { useSmoothScroll } from "@/hooks/useParallax";
import useAdaptiveTheme from "@/hooks/useAdaptiveTheme";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CodingProfilesSection from "@/components/CodingProfilesSection";
import CertificationsSection from "@/components/CertificationsSection";

import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import AdaptiveBackground from "@/components/AdaptiveBackground";
import LiveDateTime from "@/components/LiveDateTime";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  useSmoothScroll();
  const { deviceType, prefersReducedMotion, theme, particleCount, orbCount, season } = useAdaptiveTheme();

  // Reduce floating elements on mobile
  const floatingCount = deviceType === "mobile" ? 8 : deviceType === "tablet" ? 15 : 20;

  return (
    <>
      <Helmet>
        <title>Chakradhar Chowdary Gunnam | Software Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Chakradhar Chowdary Gunnam - Software Developer & AI/ML student at Aditya University. Showcasing projects, coding profiles, and technical skills in Python, C++, and Machine Learning."
        />
        <meta
          name="keywords"
          content="Chakradhar Chowdary, Software Developer, AI ML, Machine Learning, Python, Portfolio, Developer"
        />
        <meta name="author" content="Chakradhar Chowdary Gunnam" />
        <meta property="og:title" content="Chakradhar Chowdary Gunnam | Software Developer Portfolio" />
        <meta property="og:description" content="Portfolio showcasing projects, coding profiles, and technical skills in AI/ML, Python, and C++." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* Adaptive Background with Season themes */}
      <AdaptiveBackground 
        theme={theme}
        particleCount={particleCount}
        orbCount={orbCount}
        prefersReducedMotion={prefersReducedMotion}
        deviceType={deviceType}
        season={season}
      />
      
      {/* UI Components */}
      <ScrollProgress />
      <LiveDateTime />
      {!prefersReducedMotion && <FloatingElements count={floatingCount} />}

      <div className="min-h-screen relative">
        <Navbar />
        <main className="relative">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CodingProfilesSection />
          <CertificationsSection />
          
          <ResumeSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
