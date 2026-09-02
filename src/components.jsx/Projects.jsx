import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FeaturedWorkSection from "./FeaturedWorkSection";
import ProjectModal from "./ProjectModal";
import ScrollProgress from "./ScrollProgress";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <div style={{ paddingTop: "40px" }}>
        <FeaturedWorkSection onSelectProject={(proj) => setSelectedProject(proj)} />
      </div>
      <Footer />

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default Projects;
