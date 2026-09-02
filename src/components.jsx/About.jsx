import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AboutSection from "./AboutSection";
import ScrollProgress from "./ScrollProgress";

const About = () => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <div style={{ paddingTop: "40px" }}>
        <AboutSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
