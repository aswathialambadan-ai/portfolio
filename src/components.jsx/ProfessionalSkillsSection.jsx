import React from "react";
import { professionalSkills } from "../data/portfolioData";

const ProfessionalSkillsSection = () => {
  return (
    <section className="traits-editorial" style={{ padding: "80px 0", background: "var(--bg-secondary)" }}>
      <style>{`
        .traits-editorial-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .trait-item-box {
          background: var(--bg-card);
          border: 1px solid var(--border-line);
          border-radius: 4px;
          padding: 24px;
        }

        .trait-name-heading {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .trait-desc-text {
          font-size: 0.88rem;
          color: var(--text-sub);
          line-height: 1.55;
        }

        @media (max-width: 900px) {
          .traits-editorial-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 600px) {
          .traits-editorial-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-num">07 / Attributes</div>
        <h2 className="section-heading">
          Engineering <span style={{ fontStyle: "italic", fontWeight: "400", color: "var(--accent-terracotta)" }}>Mindset</span>
        </h2>

        <div className="traits-editorial-grid">
          {professionalSkills.map((trait) => (
            <div key={trait.name} className="trait-item-box">
              <h3 className="trait-name-heading">{trait.name}</h3>
              <p className="trait-desc-text">{trait.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;
