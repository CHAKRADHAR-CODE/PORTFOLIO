import { Helmet } from "react-helmet-async";
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

const Index = () => {
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
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
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
