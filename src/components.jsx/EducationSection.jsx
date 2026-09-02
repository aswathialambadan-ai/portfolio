import React from "react";
import { educationData } from "../data/portfolioData";

const EducationSection = () => {
  return (
    <section id="education" className="education-section">
      <style>{`
        .education-section {
          padding: 90px 0;
          position: relative;
          overflow: hidden;
        }

        .education-heading-main {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.15;
          margin-bottom: 36px;
          letter-spacing: -0.02em;
        }

        .education-gradient-text {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 60%, var(--accent-indigo) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .education-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .education-glass-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 32px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .education-glass-card:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 20px var(--accent-emerald-glow);
        }

        .card-top-badges {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 20px;
          flex-wrap: wrap;
          gap: 10px;
        }

        .edu-icon-wrapper {
          font-size: 1.5rem;
          padding: 10px;
          border-radius: 12px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          line-height: 1;
        }

        .edu-period-badge {
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 800;
          color: var(--accent-emerald);
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-subtle);
          padding: 4px 12px;
          border-radius: 9999px;
        }

        .edu-degree-heading {
          font-family: var(--font-display);
          font-size: 1.45rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 8px;
        }

        .edu-institution-text {
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.5;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        @media (max-width: 768px) {
          .education-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">✨ ACADEMIC EXCELLENCE</div>

        <h2 className="education-heading-main">
          Academic <span className="education-gradient-text">Background</span>
        </h2>

        <div className="education-cards-grid">
          {educationData.map((edu, idx) => (
            <div key={edu.degree} className="education-glass-card">
              <div className="card-top-badges">
                <span className="edu-icon-wrapper">{idx === 0 ? "🎓" : "📜"}</span>
                <span className="edu-period-badge">{edu.period}</span>
              </div>

              <h3 className="edu-degree-heading">{edu.degree}</h3>
              
              <div className="edu-institution-text">
                <span>🏢 {edu.institution}</span>
                <span style={{ color: "var(--border-medium)" }}>|</span>
                <span>📍 {edu.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
