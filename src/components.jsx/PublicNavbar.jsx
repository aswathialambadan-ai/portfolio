import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import apiClient from "../utils/apiClient";
import { useTheme } from "../utils/ThemeContext";

const PublicNavbar = () => {
  const [about, setAbout] = useState(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    fetchAboutInfo();
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileNavOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileNavOpen]);

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
      console.error("Navbar about fetch error:", err);
    }
  };

  const displayName = about?.full_name || "ASWATHI";
  const brandName = displayName.split(" ")[0].toUpperCase();

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/" && !location.hash) return true;
    if (location.hash && path.includes(location.hash)) return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  const scrollToSection = (e, sectionId) => {
    setMobileNavOpen(false);
    if (location.pathname === "/") {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`aswathi-editorial-nav ${scrolled ? "scrolled" : ""}`}>
      <style>{`
        .aswathi-editorial-nav {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: var(--nav-bg);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border-bottom: 1px solid var(--border-subtle);
          padding: 20px 40px;
          transition: all 0.3s ease;
          font-family: var(--font-main);
        }

        .aswathi-editorial-nav.scrolled {
          padding: 14px 40px;
          border-bottom-color: var(--border-glow);
          box-shadow: var(--shadow-sm);
        }

        .editorial-nav-container {
          max-width: 1440px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .editorial-brand {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: var(--text-pure-white);
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.3rem;
          letter-spacing: 0.05em;
        }

        .editorial-brand-mark {
          font-family: var(--font-mono);
          color: var(--accent-violet);
          font-size: 0.9rem;
        }

        .editorial-menu {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
        }

        .editorial-link {
          text-decoration: none;
          color: var(--text-muted);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.25s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .editorial-link-num {
          color: var(--accent-violet);
          font-size: 0.72rem;
        }

        .editorial-link:hover,
        .editorial-link.active {
          color: var(--text-pure-white);
        }

        .theme-editorial-toggle {
          background: transparent;
          border: 1px solid var(--border-subtle);
          color: var(--text-light);
          width: 38px;
          height: 38px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          font-size: 1rem;
          transition: all 0.25s ease;
        }

        .theme-editorial-toggle:hover {
          border-color: var(--accent-violet);
          color: var(--accent-violet);
        }

        .mobile-hamburger-btn {
          display: none;
          background: transparent;
          border: none;
          color: var(--text-pure-white);
          font-size: 1.4rem;
          cursor: pointer;
        }

        .mobile-editorial-drawer {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100vw;
          height: 100vh;
          background: var(--bg-primary);
          z-index: 999999;
          display: flex;
          flex-direction: column;
          padding: 24px 20px 36px 20px;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-100%);
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.25s ease;
          overflow-y: auto;
        }

        .mobile-editorial-drawer.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateY(0);
        }

        @media (max-width: 980px) {
          .editorial-menu {
            display: none;
          }
          .mobile-hamburger-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 8px;
            border: 1px solid var(--border-subtle);
            background: rgba(255, 255, 255, 0.05);
          }
          .aswathi-editorial-nav {
            padding: 14px 18px;
          }
        }

        @media (max-width: 520px) {
          .nav-contact-btn {
            display: none !important;
          }
          .editorial-brand {
            font-size: 1.15rem;
            gap: 8px;
          }
        }
      `}</style>

      <div className="editorial-nav-container">
        <Link to="/" className="editorial-brand">
          <span className="editorial-brand-mark">[ 01 ]</span>
          <span>{brandName}</span>
        </Link>

        <ul className="editorial-menu">
          <li>
            <Link to="/" className={`editorial-link ${isActive("/") ? "active" : ""}`}>
              <span className="editorial-link-num">01.</span> Home
            </Link>
          </li>
          <li>
            <a
              href="/#about"
              onClick={(e) => scrollToSection(e, "about")}
              className={`editorial-link ${isActive("/about") ? "active" : ""}`}
            >
              <span className="editorial-link-num">02.</span> About
            </a>
          </li>
          <li>
            <a
              href="/#skills"
              onClick={(e) => scrollToSection(e, "skills")}
              className={`editorial-link ${isActive("/skills") ? "active" : ""}`}
            >
              <span className="editorial-link-num">03.</span> Skills
            </a>
          </li>
          <li>
            <a
              href="/#projects"
              onClick={(e) => scrollToSection(e, "projects")}
              className={`editorial-link ${isActive("/projects") ? "active" : ""}`}
            >
              <span className="editorial-link-num">04.</span> Projects
            </a>
          </li>
          <li>
            <a
              href="/#experience"
              onClick={(e) => scrollToSection(e, "experience")}
              className={`editorial-link ${isActive("/experience") ? "active" : ""}`}
            >
              <span className="editorial-link-num">05.</span> Experience
            </a>
          </li>
          <li>
            <a
              href="/#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className={`editorial-link ${isActive("/contact") ? "active" : ""}`}
            >
              <span className="editorial-link-num">06.</span> Contact
            </a>
          </li>
        </ul>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button
            className="theme-editorial-toggle"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <a href="/#contact" onClick={(e) => scrollToSection(e, "contact")} className="btn-editorial-primary nav-contact-btn" style={{ padding: "8px 18px", fontSize: "0.78rem" }}>
            Contact ✉
          </a>

          <button
            className="mobile-hamburger-btn"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
          >
            {mobileNavOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className={`mobile-editorial-drawer ${mobileNavOpen ? "open" : ""}`}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "40px" }}>
          <Link to="/" onClick={() => setMobileNavOpen(false)} className="editorial-brand">
            <span className="editorial-brand-mark">[ 01 ]</span>
            <span>{brandName}</span>
          </Link>

          <button
            onClick={() => setMobileNavOpen(false)}
            style={{ background: "none", border: "none", color: "var(--text-pure-white)", fontSize: "1.8rem", cursor: "pointer", padding: "4px 8px" }}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "24px" }}>
          <li>
            <Link to="/" onClick={() => setMobileNavOpen(false)} className="editorial-link" style={{ fontSize: "1.25rem", padding: "8px 0" }}>
              <span className="editorial-link-num">01.</span> Home
            </Link>
          </li>
          <li>
            <a href="/#about" onClick={(e) => scrollToSection(e, "about")} className="editorial-link" style={{ fontSize: "1.25rem", padding: "8px 0" }}>
              <span className="editorial-link-num">02.</span> About
            </a>
          </li>
          <li>
            <a href="/#skills" onClick={(e) => scrollToSection(e, "skills")} className="editorial-link" style={{ fontSize: "1.25rem", padding: "8px 0" }}>
              <span className="editorial-link-num">03.</span> Skills
            </a>
          </li>
          <li>
            <a href="/#projects" onClick={(e) => scrollToSection(e, "projects")} className="editorial-link" style={{ fontSize: "1.25rem", padding: "8px 0" }}>
              <span className="editorial-link-num">04.</span> Projects
            </a>
          </li>
          <li>
            <a href="/#experience" onClick={(e) => scrollToSection(e, "experience")} className="editorial-link" style={{ fontSize: "1.25rem", padding: "8px 0" }}>
              <span className="editorial-link-num">05.</span> Experience
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={(e) => scrollToSection(e, "contact")} className="editorial-link" style={{ fontSize: "1.25rem", padding: "8px 0" }}>
              <span className="editorial-link-num">06.</span> Contact
            </a>
          </li>
        </ul>

        <div style={{ marginTop: "auto", paddingTop: "32px", borderTop: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.82rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>THEME PREFERENCE</span>
          <button
            className="theme-editorial-toggle"
            onClick={toggleTheme}
            style={{ width: "auto", padding: "8px 16px", gap: "8px", borderRadius: "8px" }}
          >
            {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      </div>
    </header>
  );
};

export default PublicNavbar;
