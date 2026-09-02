import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";
import { generateResumePDF } from "../utils/resumeGenerator";
import { personalInfo, experienceData, projectsData, educationData } from "../data/portfolioData";

const Resume = () => {
  return (
    <div>
      <ScrollProgress />
      <Navbar />

      <div className="container" style={{ padding: "80px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px", flexWrap: "wrap", gap: "16px" }}>
          <div>
            <h1 style={{ fontSize: "2.2rem", fontWeight: "800", color: "var(--text-bright)" }}>
              {personalInfo.name} — Resume
            </h1>
            <div style={{ color: "var(--accent-cyan)", fontWeight: "600", fontSize: "1.1rem" }}>
              {personalInfo.role} ({personalInfo.experienceYears} Experience)
            </div>
          </div>

          <button className="btn-primary" onClick={generateResumePDF}>
            📄 Download Official Resume PDF
          </button>
        </div>

        <div className="glass-card" style={{ padding: "40px", lineHeight: "1.8" }}>
          <h2 style={{ color: "var(--accent-violet)", fontSize: "1.2rem", fontWeight: "700", marginBottom: "12px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
            PROFESSIONAL SUMMARY
          </h2>
          <p style={{ color: "var(--text-muted)", marginBottom: "32px" }}>
            {personalInfo.summary}
          </p>

          <h2 style={{ color: "var(--accent-violet)", fontSize: "1.2rem", fontWeight: "700", marginBottom: "16px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
            PROFESSIONAL EXPERIENCE
          </h2>
          {experienceData.map((exp) => (
            <div key={exp.id} style={{ marginBottom: "32px" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap" }}>
                <div style={{ fontSize: "1.1rem", fontWeight: "700", color: "var(--text-bright)" }}>
                  {exp.role} — {exp.company}
                </div>
                <div style={{ color: "var(--accent-cyan)", fontWeight: "600" }}>{exp.period} | {exp.location}</div>
              </div>
              <ul style={{ paddingLeft: "20px", marginTop: "12px", color: "var(--text-muted)" }}>
                {exp.highlights.map((h, i) => (
                  <li key={i} style={{ marginBottom: "6px" }}>{h}</li>
                ))}
              </ul>
            </div>
          ))}

          <h2 style={{ color: "var(--accent-violet)", fontSize: "1.2rem", fontWeight: "700", marginBottom: "16px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
            FEATURED PROJECTS
          </h2>
          {projectsData.map((proj) => (
            <div key={proj.id} style={{ marginBottom: "24px" }}>
              <div style={{ fontSize: "1.05rem", fontWeight: "700", color: "var(--text-bright)" }}>
                {proj.title} ({proj.category})
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)", marginBottom: "6px" }}>
                Tech Stack: {proj.technologies.join(", ")}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{proj.shortDescription}</p>
            </div>
          ))}

          <h2 style={{ color: "var(--accent-violet)", fontSize: "1.2rem", fontWeight: "700", marginBottom: "16px", borderBottom: "1px solid var(--border-subtle)", paddingBottom: "8px" }}>
            EDUCATION
          </h2>
          {educationData.map((edu) => (
            <div key={edu.degree} style={{ marginBottom: "12px" }}>
              <div style={{ fontWeight: "700", color: "var(--text-bright)" }}>{edu.degree}</div>
              <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>{edu.institution} | {edu.period}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resume;
