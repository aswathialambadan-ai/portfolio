import React from "react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer-main">
      <style>{`
        .footer-main {
          background: var(--bg-dark-base);
          border-top: 1px solid var(--border-subtle);
          padding: 80px 0 36px 0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Backdrop */
        .footer-ambient-glow {
          position: absolute;
          bottom: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 700px;
          height: 450px;
          background: radial-gradient(circle, var(--accent-emerald-glow) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.45;
        }

        .footer-top-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr 0.9fr 1.1fr;
          gap: 40px;
          margin-bottom: 60px;
          position: relative;
          z-index: 1;
        }

        /* Column 1: Brand & Persona */
        .footer-brand-name {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 6px;
          letter-spacing: -0.02em;
        }

        .footer-role-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          font-weight: 700;
          margin-bottom: 14px;
        }

        .footer-pitch-text {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 16px;
          max-width: 320px;
        }

        .footer-location-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.78rem;
          color: var(--text-dim);
          font-weight: 600;
        }

        /* Footer Column Headers */
        .footer-col-title {
          font-family: var(--font-display);
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 18px;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        /* Column 2: Navigation Links */
        .footer-nav-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-nav-link {
          color: var(--text-muted);
          text-decoration: none;
          font-size: 0.88rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .footer-nav-link:hover {
          color: var(--accent-emerald);
          transform: translateX(4px);
        }

        /* Column 3: Tech Stack Badges */
        .footer-stack-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .footer-stack-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 10px;
          border-radius: 8px;
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-size: 0.78rem;
          font-weight: 600;
          font-family: var(--font-mono);
          transition: all 0.25s ease;
        }

        .footer-stack-pill:hover {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          transform: translateY(-2px);
        }

        /* Column 4: Social Action Buttons */
        .footer-social-grid {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .footer-social-btn {
          display: inline-flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 14px;
          border-radius: 10px;
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-size: 0.85rem;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .footer-social-btn:hover {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          background: rgba(217, 119, 6, 0.08);
          transform: translateY(-2px);
        }

        /* Bottom Bar */
        .footer-bottom-bar {
          border-top: 1px solid var(--border-subtle);
          padding-top: 28px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .footer-copyright {
          font-size: 0.82rem;
          color: var(--text-dim);
          font-weight: 500;
        }

        .back-to-top-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
        }

        .back-to-top-btn:hover {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          background: rgba(217, 119, 6, 0.12);
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .footer-top-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 36px;
          }
        }

        @media (max-width: 640px) {
          .footer-top-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      <div className="footer-ambient-glow"></div>

      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Brand & Persona */}
          <div>
            <div className="footer-brand-name">{personalInfo.name}</div>
            <div className="footer-role-tag">
              <span className="status-dot" style={{ width: "6px", height: "6px" }}></span>
              <span>Senior React & Full-Stack Developer</span>
            </div>

            <p className="footer-pitch-text">
              "Constructing high-performance, scale-ready frontend architectures, Redux state pipelines & resilient backend APIs."
            </p>

            <div className="footer-location-badge">
              <span>📍 Kerala, India · Open for Global Remote Roles</span>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links */}
          <div>
            <div className="footer-col-title">Navigation</div>
            <div className="footer-nav-list">
              <span onClick={() => scrollToSection("hero")} className="footer-nav-link">
                ⚡ Home / Hero
              </span>
              <span onClick={() => scrollToSection("about")} className="footer-nav-link">
                👤 About & Experience
              </span>
              <span onClick={() => scrollToSection("featured-work")} className="footer-nav-link">
                🚀 Case Studies
              </span>
              <span onClick={() => scrollToSection("skills")} className="footer-nav-link">
                🧱 Technical Skills
              </span>
              <span onClick={() => scrollToSection("contact")} className="footer-nav-link">
                💬 Get In Touch
              </span>
            </div>
          </div>

          {/* Column 3: Tech Stack Badges */}
          <div>
            <div className="footer-col-title">Engineering Stack</div>
            <div className="footer-stack-pills">
              <span className="footer-stack-pill">⚛️ React 18</span>
              <span className="footer-stack-pill">🔄 Redux Toolkit</span>
              <span className="footer-stack-pill">🌐 REST APIs</span>
              <span className="footer-stack-pill">🐘 PHP / MySQL</span>
              <span className="footer-stack-pill">🐍 Python</span>
              <span className="footer-stack-pill">🤖 AI Tools (Cursor)</span>
              <span className="footer-stack-pill">🎨 CSS3 / MUI</span>
              <span className="footer-stack-pill">🚀 Next.js</span>
            </div>
          </div>

          {/* Column 4: Connect & Social Action Cards */}
          <div>
            <div className="footer-col-title">Let's Connect</div>
            <div className="footer-social-grid">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <span>🌐 LinkedIn</span>
                <span>→</span>
              </a>

              <a
                href={`mailto:${personalInfo.email}`}
                className="footer-social-btn"
              >
                <span>✉️ Direct Email</span>
                <span>→</span>
              </a>

              <a
                href={personalInfo.githubPlaceholder}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <span>🐙 GitHub</span>
                <span>→</span>
              </a>

              <a
                href={`https://wa.me/91${personalInfo.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-btn"
              >
                <span>💬 WhatsApp</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Back-to-Top Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved. Crafted with React 18 & Framer Motion.
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn">
            <span>⬆️ Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;