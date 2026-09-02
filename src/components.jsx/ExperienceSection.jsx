import React from "react";
import { motion } from "framer-motion";
import { experienceData, projectsData } from "../data/portfolioData";

const ExperienceSection = ({ onSelectProject }) => {
  return (
    <section id="experience" className="experience-section" style={{ padding: "90px 0", background: "rgba(0,0,0,0.15)" }}>
      <style>{`
        .timeline-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 40px;
          box-shadow: var(--shadow-sm);
          position: relative;
        }

        .timeline-card:hover {
          border-color: var(--border-emerald);
        }

        .company-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
          padding-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 32px;
        }

        .company-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 4px;
        }

        .company-role {
          font-size: 1.15rem;
          color: var(--accent-emerald);
          font-weight: 700;
        }

        .company-meta {
          text-align: right;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .experience-bullets {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-bottom: 36px;
        }

        .bullet-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.95rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .bullet-icon {
          color: var(--accent-emerald);
          font-size: 1.1rem;
          line-height: 1;
        }

        .exp-projects-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-bright);
          margin-bottom: 20px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .exp-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .exp-proj-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 20px;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .exp-proj-card:hover {
          border-color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.06);
          transform: translateY(-3px);
        }

        .exp-proj-name {
          font-weight: 700;
          font-size: 1.05rem;
          color: var(--text-bright);
          margin-bottom: 8px;
        }

        .exp-proj-desc {
          font-size: 0.85rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 16px;
        }

        .exp-proj-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: var(--accent-emerald);
          font-weight: 700;
        }

        @media (max-width: 900px) {
          .experience-bullets { grid-template-columns: 1fr; }
          .exp-projects-grid { grid-template-columns: 1fr; }
          .company-meta { text-align: left; }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">💼 Professional History</div>
        <h2 className="section-heading">
          Work <span className="gradient-text">Experience Timeline</span>
        </h2>
        <p className="section-subtext">
          Direct industry contributions and hands-on frontend engineering at Bpract Software Solutions LLP.
        </p>

        {experienceData.map((exp) => (
          <motion.div
            key={exp.id}
            className="timeline-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="company-header">
              <div>
                <div className="company-title">{exp.company}</div>
                <div className="company-role">⚡ {exp.role}</div>
              </div>

              <div className="company-meta">
                <div style={{ fontWeight: "700", color: "var(--text-bright)" }}>🗓️ {exp.period}</div>
                <div>📍 {exp.location}</div>
              </div>
            </div>

            <div className="experience-bullets">
              {exp.highlights.map((h, i) => (
                <div key={i} className="bullet-item">
                  <span className="bullet-icon">✦</span>
                  <span>{h}</span>
                </div>
              ))}
            </div>

            <div className="exp-projects-title">
              <span>🚀 Developed Key Projects & Case Studies:</span>
            </div>

            <div className="exp-projects-grid">
              {projectsData.map((proj) => (
                <div
                  key={proj.id}
                  className="exp-proj-card"
                  onClick={() => onSelectProject(proj)}
                >
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <div className="exp-proj-name">{proj.title}</div>
                      {proj.liveUrl && (
                        <span style={{ fontSize: "0.7rem", color: "var(--accent-emerald)", fontWeight: "700" }}>Live App ↗</span>
                      )}
                    </div>
                    <div className="exp-proj-desc">{proj.shortDescription}</div>
                  </div>

                  <div className="exp-proj-footer">
                    <span>{proj.category}</span>
                    <span>View Case Study →</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
