import React from "react";
import { educationData } from "../data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="education-editorial" style={{ padding: "80px 0" }}>
      <style>{`
        .edu-editorial-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .edu-item-box {
          background: var(--bg-card);
          border: 1px solid var(--border-line);
          border-radius: 4px;
          padding: 32px;
        }

        .edu-period-text {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          color: var(--accent-terracotta);
          font-weight: 700;
          margin-bottom: 8px;
        }

        .edu-degree-title {
          font-family: var(--font-serif);
          font-size: 1.4rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .edu-inst-text {
          font-size: 0.95rem;
          color: var(--text-sub);
        }

        @media (max-width: 768px) {
          .edu-editorial-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-num">06 / Education</div>
        <h2 className="section-heading">
          Academic <span style={{ fontStyle: "italic", fontWeight: "400", color: "var(--accent-terracotta)" }}>Background</span>
        </h2>

        <div className="edu-editorial-grid">
          {educationData.map((edu) => (
            <div key={edu.degree} className="edu-item-box">
              <div className="edu-period-text">{edu.period}</div>
              <h3 className="edu-degree-title">{edu.degree}</h3>
              <div className="edu-inst-text">{edu.institution} | {edu.location}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
