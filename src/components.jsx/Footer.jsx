import React from "react";
import { personalInfo } from "../data/portfolioData";

const Footer = () => {
  return (
    <footer className="footer-editorial" style={{ padding: "60px 0 40px 0", borderTop: "1px solid var(--border-line)", background: "var(--bg-secondary)" }}>
      <style>{`
        .footer-inner-flex {
          display: flex;
          align-items: flex-center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 20px;
        }

        .footer-name-title {
          font-family: var(--font-serif);
          font-size: 1.2rem;
          font-weight: 700;
          color: var(--text-main);
        }

        .footer-human-quote {
          font-family: var(--font-handwriting);
          font-size: 1.25rem;
          color: var(--accent-terracotta);
          margin-top: 4px;
        }

        .footer-links-row {
          display: flex;
          align-items: center;
          gap: 20px;
          font-size: 0.9rem;
        }

        .footer-link-item {
          color: var(--text-sub);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link-item:hover {
          color: var(--accent-terracotta);
        }

        @media (max-width: 600px) {
          .footer-inner-flex { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div className="container">
        <div className="footer-inner-flex">
          <div>
            <div className="footer-name-title">{personalInfo.name} — {personalInfo.role}</div>
            <div className="footer-human-quote">"Built with React, curiosity and too many browser tabs."</div>
          </div>

          <div className="footer-links-row">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              LinkedIn
            </a>
            <a href={`mailto:${personalInfo.email}`} className="footer-link-item">
              Email
            </a>
            <a href={personalInfo.githubPlaceholder} target="_blank" rel="noopener noreferrer" className="footer-link-item">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;