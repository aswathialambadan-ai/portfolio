import React from "react";

const ProfessionalSkillsSection = () => {
  const traits = [
    {
      icon: "🧠",
      name: "Problem Solving",
      desc: "Deconstructing complex frontend & state management issues into clean, modular, and reusable component solutions."
    },
    {
      icon: "🔬",
      name: "Analytical Thinking",
      desc: "Evaluating architectural trade-offs in state management pipelines, data structures, and client-side rendering performance."
    },
    {
      icon: "👁️",
      name: "Attention to Detail",
      desc: "Ensuring pixel-perfect UI implementation, smooth micro-animations, WCAG accessibility, and robust edge-case handling."
    },
    {
      icon: "🤝",
      name: "Team Collaboration",
      desc: "Partnering seamlessly with backend engineers (PHP/Python), UI/UX designers, and product owners in Agile environments."
    },
    {
      icon: "💬",
      name: "Effective Communication",
      desc: "Articulating complex technical concepts, API payload constraints, and engineering decisions with clarity."
    },
    {
      icon: "⚡",
      name: "Adaptability & Growth",
      desc: "Continuously mastering emerging web standards, modern React ecosystem tools, Next.js, and AI-assisted workflows."
    }
  ];

  return (
    <section id="mindset" className="mindset-section">
      <style>{`
        .mindset-section {
          padding: 80px 0 100px 0;
          position: relative;
          overflow: hidden;
        }

        .mindset-heading-main {
          font-family: var(--font-display);
          font-size: clamp(2.2rem, 4.2vw, 3.4rem);
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.15;
          margin-bottom: 36px;
          letter-spacing: -0.02em;
        }

        .mindset-gradient-text {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 60%, var(--accent-indigo) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .mindset-cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }

        .mindset-glass-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          padding: 24px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .mindset-glass-card:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-4px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35), 0 0 20px var(--accent-emerald-glow);
        }

        .trait-card-top {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .trait-icon-badge {
          font-size: 1.3rem;
          padding: 8px;
          border-radius: 10px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          line-height: 1;
        }

        .trait-card-title {
          font-family: var(--font-display);
          font-size: 1.12rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .trait-card-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        @media (max-width: 1024px) {
          .mindset-cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .mindset-cards-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">✨ PROFESSIONAL TRAITS</div>

        <h2 className="mindset-heading-main">
          Engineering <span className="mindset-gradient-text">Mindset</span>
        </h2>

        <div className="mindset-cards-grid">
          {traits.map((t) => (
            <div key={t.name} className="mindset-glass-card">
              <div className="trait-card-top">
                <span className="trait-icon-badge">{t.icon}</span>
                <h3 className="trait-card-title">{t.name}</h3>
              </div>

              <p className="trait-card-desc">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSkillsSection;
