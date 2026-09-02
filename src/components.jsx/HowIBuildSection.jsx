import React from "react";
import { howIBuildSteps } from "../data/portfolioData";

const HowIBuildSection = () => {
  return (
    <section id="how-i-build" className="how-editorial" style={{ padding: "100px 0" }}>
      <style>{`
        .approach-statement {
          font-family: var(--font-serif);
          font-size: clamp(2rem, 3.8vw, 3rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.25;
          margin-bottom: 24px;
        }

        .approach-subline {
          font-size: 1.1rem;
          color: var(--text-sub);
          max-width: 640px;
          margin-bottom: 48px;
        }

        .horizontal-line-process {
          position: relative;
          padding-top: 30px;
        }

        .horizontal-line-process::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: var(--border-line);
        }

        .process-markers-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 20px;
        }

        .marker-item {
          position: relative;
        }

        .marker-item::before {
          content: '';
          position: absolute;
          top: -34px;
          left: 0;
          width: 9px;
          height: 9px;
          border-radius: 50%;
          background: var(--accent-terracotta);
        }

        .marker-num {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-terracotta);
          font-weight: 700;
          margin-bottom: 4px;
        }

        .marker-title {
          font-family: var(--font-serif);
          font-size: 1.15rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 6px;
        }

        .marker-desc {
          font-size: 0.85rem;
          color: var(--text-sub);
          line-height: 1.5;
        }

        @media (max-width: 900px) {
          .process-markers-grid { grid-template-columns: repeat(3, 1fr); gap: 32px; }
          .horizontal-line-process::before { display: none; }
          .marker-item::before { display: none; }
        }

        @media (max-width: 600px) {
          .process-markers-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-num">05 / Approach</div>
        <h2 className="approach-statement">
          "I usually start with the problem, not the component."
        </h2>
        <p className="approach-subline">
          Building thoughtful software means grounding design decisions in real user workflows and clear API constraints.
        </p>

        <div className="horizontal-line-process">
          <div className="process-markers-grid">
            {howIBuildSteps.map((step, idx) => (
              <div key={step.step} className="marker-item">
                <div className="marker-num">{step.step}</div>
                <div className="marker-title">{step.title}</div>
                <div className="marker-desc">{step.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSection;
