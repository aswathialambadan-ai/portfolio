import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import apiClient from "../utils/apiClient";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const Experience = () => {
  const [experiences, setExperiences] = useState([]);

  const defaultExperiences = [
    {
      id: 1,
      role: "Senior Frontend Engineer",
      company: "InnovateTech Solutions",
      period: "2023 - PRESENT • 2+ YRS",
      location: "Remote",
      description:
        "Lead frontend architecture for enterprise SaaS web applications using React 18, TypeScript, and Tailwind CSS. Reduced initial bundle size by 38%, established core design system tokens, and spearheaded Web Vitals optimization.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vite", "Figma"],
    },
    {
      id: 2,
      role: "Frontend Engineer / Web Specialist",
      company: "Digital Dynamics Studio",
      period: "2021 - 2023 • 2 YRS",
      location: "Hybrid",
      description:
        "Architected custom React web tools and integrated RESTful APIs with Laravel/MySQL backend. Optimized page loading performance by 45% and delivered 15+ client web applications.",
      techStack: ["JavaScript ES6+", "React", "REST APIs", "Laravel", "MySQL", "MUI"],
    },
    {
      id: 3,
      role: "Junior Web Engineer",
      company: "Tech Craft Solutions",
      period: "2020 - 2021 • 1 YR",
      location: "On-site",
      description:
        "Engineered responsive HTML5/CSS3 web components, refactored legacy JavaScript codebases into modern ES modules, and implemented automated cross-browser testing workflows.",
      techStack: ["JavaScript", "HTML5", "CSS3 / Sass", "Git", "Webpack"],
    },
  ];

  useEffect(() => {
    fetchExperience();
  }, []);

  const fetchExperience = async () => {
    try {
      const res = await apiClient.get("/api/experience");
      if (res.data) {
        const list = res.data.data || (Array.isArray(res.data) ? res.data : []);
        if (list.length > 0) setExperiences(list);
      }
    } catch (err) {
      console.error("Experience fetch error:", err);
    }
  };

  const list = experiences.length > 0 ? experiences : defaultExperiences;

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
          <span className="telemetry-tag" style={{ color: "var(--accent-cyan)" }}>{"// CAREER CHRONOLOGY"}</span>
          <h1 className="editorial-giant-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginTop: "8px" }}>
            PROFESSIONAL <span className="editorial-stroke-text">EXPERIENCE</span>
          </h1>
          <p className="section-subtitle">
            4+ Years Timeline detailing senior engineering roles, SaaS applications, performance wins, and technology stack evolution.
          </p>
        </motion.div>

        <div className="timeline-wrapper">
          <div className="timeline-line"></div>

          {list.map((exp, i) => (
            <motion.div
              key={exp.id || i}
              className="timeline-item"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <div className="timeline-node"></div>
              <div className="timeline-card-wrap">
                <div className="glass-card timeline-card">
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                    <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-pure-white)" }}>{exp.role}</h3>
                    <span className="skill-level-badge">{exp.period}</span>
                  </div>
                  <div style={{ color: "var(--accent-purple)", fontFamily: "var(--font-mono)", fontSize: "0.92rem", fontWeight: 700, marginBottom: "12px" }}>
                    {exp.company} — {exp.location || "Remote"}
                  </div>
                  <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>{exp.description}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {(exp.techStack || ["React", "TypeScript", "Tailwind"]).map((t, idx) => (
                      <span key={idx} className="tech-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Experience;
