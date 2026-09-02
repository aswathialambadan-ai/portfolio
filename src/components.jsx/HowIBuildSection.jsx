import React from "react";

const HowIBuildSection = () => {
  const steps = [
    {
      num: "01",
      icon: "🔍",
      title: "Understand",
      desc: "Analyze project requirements, target user workflows, and technical constraints to establish a clear architectural roadmap."
    },
    {
      num: "02",
      icon: "🎨",
      title: "Design",
      desc: "Construct responsive layout structures, component hierarchies, and intuitive UI interactions focused on user experience."
    },
    {
      num: "03",
      icon: "💻",
      title: "Develop",
      desc: "Build clean, reusable React components, custom hooks, Redux state slices, and robust client-side application logic."
    },
    {
      num: "04",
      icon: "🔌",
      title: "Integrate",
      desc: "Connect REST APIs, authentication pipelines, and backend PHP/Python services with resilient state synchronization."
    },
    {
      num: "05",
      icon: "🧪",
      title: "Test",
      desc: "Validate API payloads, edge cases, and UI behavior using Postman, browser dev tools, and systematic debugging."
    },
    {
      num: "06",
      icon: "🚀",
      title: "Optimize",
      desc: "Refine performance metrics, minimize re-renders, optimize CSS styling, and verify seamless cross-browser responsiveness."
    }
  ];

  return (
    <section id="how-i-build" className="approach-section">
      <style>{`
        .approach-section {
          padding: 100px 0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Backdrop */
        .approach-ambient-glow {
          position: absolute;
          top: -100px;
          left: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, var(--accent-emerald-glow) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        .approach-content {
          position: relative;
          z-index: 1;
        }

        .approach-heading-main {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.15;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .approach-gradient-text {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 60%, var(--accent-indigo) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .approach-subtext {
          font-size: 1.08rem;
          color: var(--text-muted);
          max-width: 680px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        /* 3x2 Glass Grid */
        .process-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .process-glass-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }

        .process-glass-card:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 20px var(--accent-emerald-glow);
        }

        .card-top-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .step-icon-badge {
          font-size: 1.4rem;
          padding: 8px;
          border-radius: 10px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          line-height: 1;
        }

        .step-number-tag {
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 800;
          color: var(--accent-emerald);
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-subtle);
          padding: 3px 10px;
          border-radius: 6px;
        }

        .step-card-title {
          font-family: var(--font-display);
          font-size: 1.18rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 8px;
        }

        .step-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .process-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .process-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="approach-ambient-glow"></div>

      <div className="container approach-content">
        <div className="section-tag">✨ ENGINEERING METHODOLOGY</div>

        <h2 className="approach-heading-main">
          "I usually start with the problem, <br />
          <span className="approach-gradient-text">not the component."</span>
        </h2>

        <p className="approach-subtext">
          Building thoughtful, high-performance web software means grounding design decisions in real user workflows and resilient API constraints.
        </p>

        <div className="process-cards-grid">
          {steps.map((s) => (
            <div key={s.num} className="process-glass-card">
              <div className="card-top-row">
                <span className="step-icon-badge">{s.icon}</span>
                <span className="step-number-tag">{s.num}</span>
              </div>

              <h3 className="step-card-title">{s.title}</h3>
              <p className="step-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowIBuildSection;
