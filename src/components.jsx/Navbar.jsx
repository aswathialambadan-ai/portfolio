import React, { useState, useEffect } from "react";
import { useTheme } from "../utils/ThemeContext";
import { generateResumePDF } from "../utils/resumeGenerator";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { id: "about", label: "About" },
    { id: "featured-work", label: "Work" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((link) => document.getElementById(link.id)).filter(Boolean);
      const scrollPos = window.scrollY + 160;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec.offsetTop <= scrollPos) {
          setActiveSection(sec.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`recruiter-nav ${scrolled ? "scrolled" : ""}`}>
      <style>{`
        .recruiter-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 18px 0;
          transition: padding 0.3s ease;
        }

        .recruiter-nav.scrolled {
          padding: 12px 0;
          box-shadow: var(--shadow-sm);
        }

        .nav-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .nav-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          cursor: pointer;
        }

        .nav-logo-text {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.25rem;
          color: var(--text-bright);
          letter-spacing: -0.01em;
        }

        .nav-links-list {
          display: flex;
          align-items: center;
          gap: 24px;
          list-style: none;
        }

        .nav-link-btn {
          background: none;
          border: none;
          color: var(--text-muted);
          font-family: var(--font-main);
          font-size: 0.92rem;
          font-weight: 600;
          cursor: pointer;
          padding: 4px 0;
          position: relative;
          transition: color 0.2s ease;
        }

        .nav-link-btn:hover, .nav-link-btn.active {
          color: var(--accent-emerald);
        }

        .nav-link-btn.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent-emerald);
          border-radius: 1px;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .theme-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 0.85rem;
          cursor: pointer;
        }

        .mobile-hamburger {
          display: none;
          background: none;
          border: none;
          color: var(--text-bright);
          font-size: 1.4rem;
          cursor: pointer;
        }

        .mobile-drawer-menu {
          position: fixed;
          top: 60px;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--bg-dark-base);
          padding: 32px 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          border-top: 1px solid var(--border-subtle);
          z-index: 999;
        }

        @media (max-width: 900px) {
          .nav-links-list { display: none; }
          .mobile-hamburger { display: block; }
        }
      `}</style>

      <div className="container">
        <div className="nav-inner">
          <div className="nav-brand" onClick={() => scrollTo("hero")}>
            <span className="nav-logo-text">ASWATHI A.</span>
            <div className="status-pill" style={{ fontSize: "0.78rem", padding: "3px 10px" }}>
              <span className="status-dot"></span> Available
            </div>
          </div>

          <ul className="nav-links-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <button
                  className={`nav-link-btn ${activeSection === link.id ? "active" : ""}`}
                  onClick={() => scrollTo(link.id)}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="theme-btn" onClick={toggleTheme} title="Toggle theme">
              {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
            </button>

            <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.85rem" }} onClick={generateResumePDF}>
              📄 Resume PDF
            </button>

            <button
              className="mobile-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="mobile-drawer-menu">
          {navLinks.map((link) => (
            <button
              key={link.id}
              className={`nav-link-btn ${activeSection === link.id ? "active" : ""}`}
              style={{ fontSize: "1.2rem", textAlign: "left" }}
              onClick={() => scrollTo(link.id)}
            >
              {link.label}
            </button>
          ))}
          <div style={{ marginTop: "20px" }}>
            <button className="btn-primary" style={{ width: "100%" }} onClick={generateResumePDF}>
              📄 Download Resume PDF
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
