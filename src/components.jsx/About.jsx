import React from "react";
import { motion } from "framer-motion";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const About = () => {
  return (
    <div className="aswathi-page-root bg-grid-pattern">
      <PublicNavbar />

      <main className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="telemetry-tag" style={{ color: "var(--accent-purple)" }}>{"// ENGINEERING PROFILE"}</span>
          <h1 className="editorial-giant-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginTop: "8px" }}>
            ABOUT <span className="editorial-stroke-text">ASWATHI</span>
          </h1>
          <p className="section-subtitle">
            Senior Frontend Engineer specializing in high-performance web applications, scalable React architectures, and enterprise design systems.
          </p>
        </motion.div>

        <div className="about-split-layout">
          <motion.div
            className="glass-card about-bio-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="project-title" style={{ fontSize: "1.7rem", fontWeight: 800, marginBottom: "16px", color: "var(--text-pure-white)" }}>
              Senior Frontend Engineer (4+ Years Experience)
            </h2>
            <p className="about-bio-text" style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "16px" }}>
              With 4+ years of hands-on frontend engineering experience, I specialize in transforming complex design ideas into seamless, accessible, and ultra-responsive digital products. My core focus lies in crafting sleek user experiences using React 18, TypeScript, Material UI, and Tailwind CSS, backed by robust REST API integration.
            </p>
            <p className="about-bio-text" style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
              I take pride in writing modular, readable, and performance-optimized code. From state management with Redux Toolkit / React Query to fluid micro-animations, every line is engineered for enterprise reliability.
            </p>

            <div style={{ marginTop: "32px" }}>
              <span className="telemetry-tag" style={{ color: "var(--accent-cyan)", marginBottom: "12px" }}>
                CORE ARCHITECTURAL PILLARS
              </span>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
                <span className="tech-pill">✨ Modern UI/UX Architecture</span>
                <span className="tech-pill">⚡ Web Vitals & Performance</span>
                <span className="tech-pill">📦 Design Systems & Tokens</span>
                <span className="tech-pill">🌐 Type-Safe React & TS</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="stats-grid"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-card stat-card">
              <div style={{ fontSize: "2.8rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--accent-purple)" }}>4+</div>
              <div style={{ color: "var(--text-pure-white)", fontWeight: 700 }}>Years Experience</div>
            </div>
            <div className="glass-card stat-card">
              <div style={{ fontSize: "2.8rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--accent-cyan)" }}>30+</div>
              <div style={{ color: "var(--text-pure-white)", fontWeight: 700 }}>Projects Delivered</div>
            </div>
            <div className="glass-card stat-card">
              <div style={{ fontSize: "2.8rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--text-pure-white)" }}>99.9%</div>
              <div style={{ color: "var(--text-pure-white)", fontWeight: 700 }}>Lighthouse Target</div>
            </div>
            <div className="glass-card stat-card">
              <div style={{ fontSize: "2.8rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--accent-orange)" }}>100%</div>
              <div style={{ color: "var(--text-pure-white)", fontWeight: 700 }}>Type-Safe Code</div>
            </div>
          </motion.div>
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default About;
