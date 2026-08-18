import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apiClient from "../utils/apiClient";

const PublicFooter = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    fetchAboutInfo();
  }, []);

  const fetchAboutInfo = async () => {
    try {
      const res = await apiClient.get("/api/about");
      if (res.data) {
        const d = res.data;
        const aboutObj = d.data
          ? Array.isArray(d.data)
            ? d.data[0]
            : d.data
          : Array.isArray(d)
          ? d[0]
          : d;
        setAbout(aboutObj);
      }
    } catch (err) {
      console.error("Footer about fetch error:", err);
    }
  };

  const displayName = about?.full_name || "Aswathi";
  const displayTitle = about?.professional_title || "Frontend Developer";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="aswathi-site-footer">
      <style>{`
        .aswathi-site-footer {
          border-top: 1px solid var(--border-subtle);
          background: var(--bg-surface);
          backdrop-filter: blur(16px);
          padding: 60px 40px 32px 40px;
          margin-top: 80px;
          color: var(--text-muted);
          font-family: var(--font-main);
          position: relative;
          z-index: 2;
        }

        .aswathi-footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 32px;
        }

        .aswathi-footer-logo {
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--text-pure-white);
          font-family: var(--font-display);
          margin-bottom: 8px;
        }

        .aswathi-footer-tagline {
          font-size: 0.95rem;
          color: var(--text-muted);
          max-width: 440px;
          line-height: 1.6;
        }

        .back-to-top-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          color: var(--text-pure-white);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .back-to-top-btn:hover {
          border-color: var(--border-glow);
          transform: translateY(-4px);
          color: var(--accent-blue);
        }

        .aswathi-footer-bottom {
          max-width: 1280px;
          margin: 40px auto 0 auto;
          padding-top: 24px;
          border-top: 1px solid var(--border-subtle);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.85rem;
          color: var(--text-dim);
          flex-wrap: wrap;
          gap: 16px;
        }

        .admin-portal-link {
          color: var(--accent-purple);
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .admin-portal-link:hover {
          text-decoration: underline;
        }
      `}</style>

      <div className="aswathi-footer-container">
        <div>
          <div className="aswathi-footer-logo">
            {displayName} <span className="aswathi-brand-accent">.DEV</span>
          </div>
          <p className="aswathi-footer-tagline">
            {displayTitle} — Crafting modern, high-performance web experiences with React, TypeScript, and accessible UI engineering.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <a
            href="/#contact"
            className="btn-editorial-primary"
            style={{ padding: "10px 24px", fontSize: "0.85rem" }}
          >
            <span>Let's Build</span>
            <span>→</span>
          </a>

          <button
            onClick={scrollToTop}
            className="back-to-top-btn"
            title="Back to Top"
            aria-label="Back to Top"
          >
            ↑
          </button>
        </div>
      </div>

      <div className="aswathi-footer-bottom">
        <span>© {new Date().getFullYear()} {displayName}. Built with React & Modern UI Design.</span>
        <Link to="/admin/login" className="admin-portal-link">
          <span>⚙️</span>
          <span>Admin Portal</span>
        </Link>
      </div>
    </footer>
  );
};

export default PublicFooter;
