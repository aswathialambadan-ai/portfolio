import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactSection from "./ContactSection";
import ScrollProgress from "./ScrollProgress";

const Contact = () => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />
      <div style={{ paddingTop: "40px" }}>
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
