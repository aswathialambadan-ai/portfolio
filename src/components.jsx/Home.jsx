import React, { useState } from "react";
import ScrollProgress from "./ScrollProgress";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ExperienceSection from "./ExperienceSection";
import FeaturedWorkSection from "./FeaturedWorkSection";
import SkillsSection from "./SkillsSection";
import HowIBuildSection from "./HowIBuildSection";
import AiDevelopmentSection from "./AiDevelopmentSection";
import EducationSection from "./EducationSection";
import ProfessionalSkillsSection from "./ProfessionalSkillsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import ProjectModal from "./ProjectModal";

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="portfolio-app-root">
      <ScrollProgress />
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <FeaturedWorkSection onSelectProject={(proj) => setSelectedProject(proj)} />
        <SkillsSection />
        <HowIBuildSection />
        <AiDevelopmentSection />
        <EducationSection />
        <ProfessionalSkillsSection />
        <ContactSection />
      </main>

      <Footer />

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
};

export default Home;
