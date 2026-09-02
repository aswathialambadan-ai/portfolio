import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SkillsSection from "./SkillsSection";
import ScrollProgress from "./ScrollProgress";

const Skills = () => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <div style={{ paddingTop: "40px" }}>
        <SkillsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Skills;
