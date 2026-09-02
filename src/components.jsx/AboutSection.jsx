import React from "react";
import { motion } from "framer-motion";
import { personalInfo } from "../data/portfolioData";

const AboutSection = () => {
  return (
    <section id="about" className="about-section" style={{ padding: "90px 0", position: "relative" }}>
      <style>{`
        .about-split {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }

        .about-bio-card {
          position: relative;
        }

        .about-bio-text {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .about-highlight-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }

        .highlight-item {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 14px 18px;
          display: flex;
          align-items: center;
          gap: 10px;
          color: var(--text-bright);
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.25s ease;
        }

        .highlight-item:hover {
          border-color: var(--accent-emerald);
          background: rgba(16, 185, 129, 0.08);
          transform: translateY(-2px);
        }

        .specialty-card-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .specialty-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          padding: 24px;
          transition: all 0.3s ease;
        }

        .specialty-card:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-4px);
          box-shadow: var(--shadow-emerald);
        }

        .specialty-icon {
          width: 46px;
          height: 46px;
          border-radius: 14px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid var(--border-emerald);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 16px;
        }

        .specialty-title {
          font-size: 1.05rem;
          font-weight: 700;
          color: var(--text-bright);
          margin-bottom: 8px;
        }

        .specialty-desc {
          font-size: 0.88rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .about-split { grid-template-columns: 1fr; }
          .specialty-card-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">💡 About Aswathi</div>
        <h2 className="section-heading">
          Engineered for <span className="gradient-text">Scalable & Intuitive</span> Interfaces
        </h2>
        <p className="section-subtext">
          Bringing 4+ years of professional React JS experience into constructing production-grade web solutions.
        </p>

        <div className="about-split">
          {/* Left: Bio & Highlights */}
          <motion.div
            className="about-bio-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card" style={{ height: "100%" }}>
              <h3 style={{ fontSize: "1.35rem", fontWeight: "800", color: "var(--text-bright)", marginBottom: "16px" }}>
                Senior Frontend Specialist (4+ Years Experience)
              </h3>
              <p className="about-bio-text">
                {personalInfo.summary}
              </p>
              <p className="about-bio-text" style={{ marginBottom: 0 }}>
                Aswathi combines standard software design principles with modern state management, API testing, and performance optimization to turn product requirements into robust, high-performing web platforms.
              </p>

              <div className="about-highlight-grid">
                <div className="highlight-item">
                  <span>⚛️</span> React.js Specialist
                </div>
                <div className="highlight-item">
                  <span>📱</span> Responsive Web Apps
                </div>
                <div className="highlight-item">
                  <span>🔌</span> REST API Integration
                </div>
                <div className="highlight-item">
                  <span>🔮</span> State Management
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Specialty Cards */}
          <motion.div
            className="specialty-card-grid"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="specialty-card">
              <div className="specialty-icon">🛒</div>
              <div className="specialty-title">E-Commerce Systems</div>
              <div className="specialty-desc">Product listings, real-time carts, multi-gateway payments (Stripe, PayPal) & coupon engines.</div>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">📊</div>
              <div className="specialty-title">Dashboard Architecture</div>
              <div className="specialty-desc">High-density data tables, metric visualizers, MLM affiliate trees & real-time analytics.</div>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">🔐</div>
              <div className="specialty-title">Authentication & Web3</div>
              <div className="specialty-desc">JWT token auth, protected routes, MetaMask cryptocurrency payouts & wallet operations.</div>
            </div>

            <div className="specialty-card">
              <div className="specialty-icon">🤖</div>
              <div className="specialty-title">AI-Assisted Workflows</div>
              <div className="specialty-desc">Utilizing ChatGPT, Claude, OpenAI Codex & Google Antigravity for rapid code & debugging.</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
