import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import apiClient, { getMediaUrl } from "../utils/apiClient";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";
import profileImage from "../images/aswathi.jpeg";

const Home = () => {
  const [about, setAbout] = useState(null);
  const [projects, setProjects] = useState([]);
  const [, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [roleIndex, setRoleIndex] = useState(0);

  const rolesList = [
    "SENIOR FRONTEND ENGINEER",
    "REACT & TYPESCRIPT ARCHITECT",
    "DESIGN SYSTEM SPECIALIST",
    "PERFORMANCE & UI ENGINEER",
  ];

  // Dynamic Text Morphing Loop
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % rolesList.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [rolesList.length]);

  const defaultAbout = {
    full_name: "ASWATHI",
    professional_title: "SENIOR FRONTEND ENGINEER (4+ YEARS EXP)",
    short_intro:
      "Senior Frontend Engineer with 4+ years of experience architecting high-performance React applications, resilient design systems, and responsive enterprise interfaces.",
    description:
      "With 4+ years of hands-on frontend engineering experience, I specialize in building modular, accessible, and fast web applications. My focus spans scalable component libraries, state management pipelines, REST API integration, and Web Vitals performance optimization.",
  };

  const defaultSkillCategories = [
    {
      title: "Frontend Architecture & Frameworks",
      icon: "⚛️",
      description: "Building scalable single-page apps, reusable design tokens, and modular UI architectures.",
      skills: [
        { name: "React 18", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript ES6+", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "HTML5 / CSS3", level: "Expert" },
      ],
    },
    {
      title: "State Management & Data Flow",
      icon: "⚡",
      description: "Managing complex asynchronous state, client caching, and API integration pipelines.",
      skills: [
        { name: "Redux Toolkit", level: "Expert" },
        { name: "React Query (TanStack)", level: "Advanced" },
        { name: "RESTful APIs", level: "Expert" },
        { name: "Context API", level: "Expert" },
        { name: "Axios / GraphQL", level: "Proficient" },
      ],
    },
    {
      title: "UI Engineering & Design Systems",
      icon: "🎨",
      description: "Crafting responsive layouts, micro-animations, and accessible WCAG-compliant primitives.",
      skills: [
        { name: "Tailwind CSS", level: "Expert" },
        { name: "Material UI (MUI)", level: "Advanced" },
        { name: "Framer Motion", level: "Advanced" },
        { name: "CSS Modules / Sass", level: "Expert" },
        { name: "Design Tokens", level: "Advanced" },
      ],
    },
    {
      title: "Build Tools & Quality Assurance",
      icon: "🛠️",
      description: "Optimizing Web Vitals metrics, automated linting, bundling, and version control workflows.",
      skills: [
        { name: "Git & GitHub Workflows", level: "Expert" },
        { name: "Vite / Webpack", level: "Advanced" },
        { name: "Lighthouse Performance", level: "Advanced" },
        { name: "Jest / Testing Library", level: "Proficient" },
        { name: "Figma to Code", level: "Expert" },
      ],
    },
    {
      title: "Backend & Database Integration",
      icon: "🔌",
      description: "Collaborating seamlessly across full-stack architectures and database schemas.",
      skills: [
        { name: "Laravel Framework", level: "Advanced" },
        { name: "MySQL Relational DB", level: "Advanced" },
        { name: "Node.js / Express", level: "Proficient" },
        { name: "REST API Design", level: "Advanced" },
      ],
    },
  ];

  const defaultProjects = [
    {
      id: 1,
      title: "DevPulse Studio & Architecture Suite",
      slug: "devpulse-studio",
      description:
        "Enterprise developer portfolio studio and analytics platform featuring live component previewing, dynamic theme customizer, real-time metrics dashboards, and API integration.",
      featured: true,
      category: "Fullstack",
      technologies: ["React 18", "TypeScript", "Tailwind CSS", "Laravel", "MySQL"],
      metrics: "350ms FCP • 99/100 Lighthouse • 100% Type Safe",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1000&auto=format&fit=crop&q=80",
      github_url: "https://github.com",
      live_url: "https://example.com",
    },
    {
      id: 2,
      title: "SaaS Enterprise Analytics Workspace",
      slug: "saas-analytics",
      description:
        "High-density cloud analytics monitoring dashboard with interactive charting widgets, drag-and-drop workspace layout, multi-tenant workspace switcher, and dark/light modes.",
      featured: false,
      category: "Frontend",
      technologies: ["React", "MUI", "TypeScript", "Chart.js", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
      github_url: "https://github.com",
      live_url: "https://example.com",
    },
    {
      id: 3,
      title: "High-Speed E-Commerce Platform",
      slug: "ecommerce-storefront",
      description:
        "Sub-second e-commerce shopping experience with real-time product search filters, cart state management, checkout integrations, and WCAG AA accessibility compliance.",
      featured: false,
      category: "Frontend",
      technologies: ["React", "Tailwind CSS", "JavaScript ES6+", "REST API"],
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&auto=format&fit=crop&q=80",
      github_url: "https://github.com",
      live_url: "https://example.com",
    },
    {
      id: 4,
      title: "Real-Time Kanban Task Collaboration",
      slug: "task-workspace",
      description:
        "Team productivity workspace with interactive drag-and-drop workflow boards, activity feeds, instant priority filters, and Laravel REST backend data sync.",
      featured: false,
      category: "Fullstack",
      technologies: ["React", "Laravel", "MySQL", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&auto=format&fit=crop&q=80",
      github_url: "https://github.com",
      live_url: "https://example.com",
    },
  ];

  const defaultExperiences = [
    {
      id: 1,
      role: "Senior Frontend Engineer",
      company: "InnovateTech Solutions",
      period: "2023 - PRESENT • 2+ YRS",
      location: "Remote",
      description:
        "Lead frontend architecture for enterprise SaaS web applications using React, TypeScript, and Tailwind CSS. Reduced initial bundle size by 38%, established core design system tokens, and spearheaded Web Vitals optimization.",
      techStack: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Vite", "Figma"],
    },
    {
      id: 2,
      role: "Frontend Engineer / Web Specialist",
      company: "Digital Dynamics Studio",
      period: "2021 - 2023 • 2 YRS",
      location: "Hybrid",
      description:
        "Architected custom React web tools and integrated RESTful APIs with Laravel/MySQL backend. Optimized page loading performance by 45% and delivered 15+ client web applications.",
      techStack: ["JavaScript ES6+", "React", "REST APIs", "Laravel", "MySQL", "MUI"],
    },
    {
      id: 3,
      role: "Junior Web Developer",
      company: "Tech Craft Solutions",
      period: "2020 - 2021 • 1 YR",
      location: "On-site",
      description:
        "Engineered responsive HTML5/CSS3 web components, refactored legacy JavaScript codebases into modern ES modules, and implemented automated cross-browser testing workflows.",
      techStack: ["JavaScript", "HTML5", "CSS3 / Sass", "Git", "Webpack"],
    },
  ];

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    try {
      const [aboutRes, projRes, skillsRes, expRes] = await Promise.allSettled([
        apiClient.get("/api/about"),
        apiClient.get("/api/projects"),
        apiClient.get("/api/skills"),
        apiClient.get("/api/experience"),
      ]);

      if (aboutRes.status === "fulfilled" && aboutRes.value.data) {
        const d = aboutRes.value.data;
        const aboutObj = d.data ? (Array.isArray(d.data) ? d.data[0] : d.data) : (Array.isArray(d) ? d[0] : d);
        if (aboutObj) setAbout(aboutObj);
      }

      if (projRes.status === "fulfilled" && projRes.value.data) {
        const d = projRes.value.data;
        const list = d.data || (Array.isArray(d) ? d : []);
        if (list.length > 0) setProjects(list);
      }

      if (skillsRes.status === "fulfilled" && skillsRes.value.data) {
        const d = skillsRes.value.data;
        const list = d.data || (Array.isArray(d) ? d : []);
        if (list.length > 0) setSkills(list);
      }

      if (expRes.status === "fulfilled" && expRes.value.data) {
        const d = expRes.value.data;
        const list = d.data || (Array.isArray(d) ? d : []);
        if (list.length > 0) setExperiences(list);
      }
    } catch (err) {
      console.error("Home data fetch error:", err);
    }
  };

  const currentAbout = about || defaultAbout;
  const currentProjects = projects.length > 0 ? projects : defaultProjects;
  const currentExperiences = experiences.length > 0 ? experiences : defaultExperiences;

  const displayName = (currentAbout.full_name || "ASWATHI").toUpperCase();
  const displayIntro = currentAbout.short_intro || defaultAbout.short_intro;

  const featuredProject = currentProjects.find((p) => p.featured) || currentProjects[0];
  const regularProjects = currentProjects.filter((p) => p.id !== featuredProject?.id);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("aswathi.dev@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="aswathi-experimental-root bg-grid-pattern">
      {/* Film Grain Texture Overlay */}
      <div className="bg-noise-overlay"></div>

      <style>{`
        .aswathi-experimental-root {
          min-height: 100vh;
          background-color: var(--bg-primary);
          color: var(--text-light);
          font-family: var(--font-main);
          position: relative;
          overflow-x: hidden;
        }

        .experimental-hero-wrapper {
          position: relative;
          min-height: 85vh;
          max-width: 1440px;
          margin: 0 auto;
          padding: 48px 40px 80px 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        @media (max-width: 768px) {
          .experimental-hero-wrapper {
            padding: 32px 20px 60px 20px;
            min-height: auto;
          }
        }

        .hero-telemetry-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 40px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .hero-main-asymmetric {
          display: grid;
          grid-template-columns: 1.25fr 0.95fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 5;
        }

        @media (max-width: 992px) {
          .hero-main-asymmetric {
            grid-template-columns: 1fr;
            gap: 40px;
          }
        }

        .hero-title-container {
          position: relative;
        }

        .hero-exp-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          border-radius: 20px;
          background: rgba(79, 70, 229, 0.1);
          border: 1px solid rgba(79, 70, 229, 0.25);
          color: var(--accent-purple);
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 20px;
        }

        .hero-role-morph {
          font-family: var(--font-mono);
          font-size: 1rem;
          font-weight: 700;
          color: var(--accent-cyan);
          letter-spacing: 0.12em;
          height: 32px;
          margin-top: 12px;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
        }

        /* Non-Circular Professional Portrait Card */
        .hero-portrait-frame {
          position: relative;
          width: 100%;
          max-width: 420px;
          margin: 0 auto;
          border-radius: 20px;
          background: var(--bg-card);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-lg);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          transition: all 0.35s ease;
        }

        .hero-portrait-frame:hover {
          border-color: var(--accent-purple);
          box-shadow: 0 25px 60px -10px rgba(79, 70, 229, 0.25);
          transform: translateY(-4px);
        }

        .portrait-img-wrapper {
          position: relative;
          width: 100%;
          height: 440px;
          border-radius: 14px;
          overflow: hidden;
          background: radial-gradient(circle at center, rgba(124, 58, 237, 0.08) 0%, rgba(15, 23, 42, 0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid var(--border-subtle);
        }

        [data-theme="light"] .portrait-img-wrapper {
          background: linear-gradient(180deg, #ffffff 0%, #f1f5f9 100%);
        }

        .portrait-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center top;
          transition: transform 0.4s ease;
          padding: 8px 4px 0 4px;
        }

        .hero-portrait-frame:hover .portrait-img {
          transform: scale(1.02);
        }

        .portrait-badge-below {
          background: var(--bg-surface-elevated);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 14px 18px;
        }

        .hero-bottom-actions {
          margin-top: 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 28px;
          border-top: 1px solid var(--border-subtle);
          flex-wrap: wrap;
          gap: 24px;
        }

        .action-button-group {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .scroll-trigger-indicator {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.82rem;
          font-weight: 600;
          color: var(--text-dim);
          letter-spacing: 0.1em;
          text-decoration: none;
          transition: color 0.25s ease;
        }

        .scroll-trigger-indicator:hover {
          color: var(--accent-purple);
        }

        /* Telemetry Stats Cards */
        .stats-telemetry-row {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 48px;
        }

        @media (max-width: 992px) {
          .stats-telemetry-row {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 520px) {
          .stats-telemetry-row {
            grid-template-columns: 1fr;
          }
        }

        .telemetry-stat-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 24px 20px;
          position: relative;
          transition: all 0.3s ease;
        }

        .telemetry-stat-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-2px);
        }

        /* SECTIONS GENERAL */
        .section-container {
          max-width: 1440px;
          margin: 0 auto;
          padding: 90px 40px;
          position: relative;
          z-index: 2;
        }

        @media (max-width: 768px) {
          .section-container {
            padding: 60px 20px;
          }
        }

        .section-header {
          margin-bottom: 56px;
        }

        /* Grouped Category Skills Grid */
        .category-skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
          gap: 28px;
        }

        @media (max-width: 520px) {
          .category-skills-grid {
            grid-template-columns: 1fr;
          }
        }

        .category-skill-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .category-skill-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-4px);
          box-shadow: var(--shadow-lg);
        }

        .skill-item-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 0;
          border-bottom: 1px dashed var(--border-subtle);
        }

        .skill-item-row:last-child {
          border-bottom: none;
        }

        .skill-level-badge {
          font-family: var(--font-mono);
          font-size: 0.75rem;
          font-weight: 700;
          padding: 2px 10px;
          border-radius: 12px;
          background: rgba(79, 70, 229, 0.08);
          color: var(--accent-purple);
          border: 1px solid rgba(79, 70, 229, 0.2);
        }

        /* Projects Layout */
        .featured-project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-glow);
          border-radius: 18px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 1.25fr 1fr;
          gap: 0;
          margin-bottom: 48px;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 992px) {
          .featured-project-card {
            grid-template-columns: 1fr;
          }
        }

        .featured-img-wrap {
          height: 100%;
          min-height: 380px;
          overflow: hidden;
        }

        .featured-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .featured-project-card:hover .featured-img {
          transform: scale(1.04);
        }

        .featured-content {
          padding: 44px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 32px;
        }

        .project-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: all 0.3s ease;
        }

        .project-card:hover {
          border-color: var(--border-glow);
          transform: translateY(-6px);
          box-shadow: var(--shadow-lg);
        }

        .project-thumb-wrap {
          height: 220px;
          overflow: hidden;
        }

        .project-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .project-thumb {
          transform: scale(1.06);
        }

        .project-card-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        /* Timeline Layout */
        .timeline-wrapper {
          position: relative;
          max-width: 920px;
          margin: 0 auto;
        }

        .timeline-line {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 20px;
          width: 2px;
          background: linear-gradient(180deg, var(--accent-purple), var(--accent-cyan), transparent);
        }

        @media (min-width: 768px) {
          .timeline-line {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .timeline-item {
          position: relative;
          margin-bottom: 48px;
        }

        .timeline-node {
          position: absolute;
          top: 24px;
          left: 12px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--accent-purple);
          border: 4px solid var(--bg-primary);
          box-shadow: 0 0 12px var(--accent-purple);
          z-index: 3;
        }

        @media (min-width: 768px) {
          .timeline-node {
            left: 50%;
            transform: translateX(-50%);
          }
        }

        .timeline-card-wrap {
          margin-left: 56px;
        }

        @media (min-width: 768px) {
          .timeline-item:nth-child(even) .timeline-card-wrap {
            margin-left: 0;
            margin-right: 50%;
            padding-right: 40px;
          }
          .timeline-item:nth-child(odd) .timeline-card-wrap {
            margin-left: 50%;
            padding-left: 40px;
          }
        }

        .timeline-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 32px;
          transition: all 0.3s ease;
        }

        .timeline-card:hover {
          border-color: var(--border-glow);
        }

        /* Contact Section */
        .contact-cta-card {
          background: var(--bg-card);
          border: 1px solid var(--border-glow);
          border-radius: 24px;
          padding: 64px 48px;
          text-align: center;
          box-shadow: var(--shadow-lg);
        }

        @media (max-width: 768px) {
          .contact-cta-card {
            padding: 40px 20px;
          }
        }

        .quick-form {
          max-width: 560px;
          margin: 40px auto 0 auto;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .form-input {
          width: 100%;
          padding: 16px 20px;
          border-radius: 10px;
          background: var(--input-bg);
          border: 1px solid var(--input-border);
          color: var(--text-pure-white);
          font-family: var(--font-main);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .form-input:focus {
          border-color: var(--accent-purple);
          box-shadow: 0 0 0 3px rgba(79, 70, 229, 0.15);
        }
      `}</style>

      <PublicNavbar />

      <main>
        {/* =========================================================================
            1. HERO SECTION (Experienced, Confident & Technical)
            ========================================================================= */}
        <section id="hero" className="experimental-hero-wrapper">
          {/* Telemetry Status Header Bar */}
          <div className="hero-telemetry-bar">
            <div className="telemetry-tag">
              <span className="telemetry-dot"></span>
              <span>SENIOR FRONTEND PORTFOLIO // 2026</span>
            </div>
            <div className="telemetry-tag" style={{ display: window.innerWidth < 640 ? "none" : "flex" }}>
              <span>LOCATION: HYBRID / REMOTE</span>
            </div>
            <div className="telemetry-tag">
              <span style={{ color: "var(--accent-cyan)" }}>[ OPEN FOR SENIOR ROLES & CONSULTING ]</span>
            </div>
          </div>

          {/* Asymmetric Hero Main Layout */}
          <div className="hero-main-asymmetric">
            <motion.div
              className="hero-title-container"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="hero-exp-badge">
                <span>✦ 4+ YEARS ENGINEERING EXPERIENCE</span>
              </div>

              {/* Main Display Typography */}
              <h1 className="editorial-giant-title">
                {displayName}
                <br />
                <span className="editorial-stroke-text">FRONTEND</span>
              </h1>

              {/* Dynamic Text Morphing Role */}
              <div className="hero-role-morph">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={roleIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    &gt; {rolesList[roleIndex]}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* High Confidence positioning paragraph */}
              <p
                style={{
                  fontSize: "1.12rem",
                  color: "var(--text-muted)",
                  lineHeight: "1.75",
                  maxWidth: "580px",
                  marginTop: "16px",
                }}
              >
                {displayIntro}
              </p>

              {/* Quick Action Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "24px" }}>
                <span className="tech-pill">React 18</span>
                <span className="tech-pill">TypeScript</span>
                <span className="tech-pill">Tailwind CSS</span>
                <span className="tech-pill">Redux Toolkit</span>
                <span className="tech-pill">REST & GraphQL</span>
              </div>
            </motion.div>

            {/* Non-Circular Professional Portrait Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-portrait-frame">
                <div className="portrait-img-wrapper">
                  <img src={profileImage} alt="Aswathi - Senior Frontend Engineer" className="portrait-img" />
                </div>
                <div className="portrait-badge-below">
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontWeight: 800, fontSize: "1.05rem", fontFamily: "var(--font-display)", color: "var(--text-pure-white)" }}>ASWATHI</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--accent-purple)", fontWeight: 700 }}>
                      4+ YRS EXP
                    </span>
                  </div>
                  <p style={{ fontSize: "0.82rem", color: "var(--text-muted)", margin: 0 }}>
                    Senior Frontend Developer • React & TypeScript Architect
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Telemetry Stats Grid Row */}
          <div className="stats-telemetry-row">
            <div className="telemetry-stat-card">
              <div style={{ fontSize: "2.4rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--accent-purple)" }}>4+</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-pure-white)" }}>Years Experience</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "4px" }}>Specialized in Frontend & React</div>
            </div>

            <div className="telemetry-stat-card">
              <div style={{ fontSize: "2.4rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--accent-cyan)" }}>30+</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-pure-white)" }}>Projects Shipped</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "4px" }}>SaaS, Dashboards & Design Systems</div>
            </div>

            <div className="telemetry-stat-card">
              <div style={{ fontSize: "2.4rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--text-pure-white)" }}>99.9%</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-pure-white)" }}>Performance Target</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "4px" }}>Optimized Web Vitals & Bundle Sizes</div>
            </div>

            <div className="telemetry-stat-card">
              <div style={{ fontSize: "2.4rem", fontWeight: 800, fontFamily: "var(--font-display)", color: "var(--accent-orange)" }}>100%</div>
              <div style={{ fontWeight: 700, fontSize: "0.95rem", color: "var(--text-pure-white)" }}>Component Reusability</div>
              <div style={{ fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "4px" }}>Type-Safe Modular Architecture</div>
            </div>
          </div>

          {/* Bottom Action Triggers */}
          <div className="hero-bottom-actions">
            <div className="action-button-group">
              <a href="#projects" className="btn-editorial-primary">
                <span>View Featured Work</span>
                <span>↓</span>
              </a>
              <a href="#contact" className="btn-editorial-outline">
                <span>Contact Aswathi</span>
                <span>✉</span>
              </a>
              <a href="/resume" className="btn-editorial-outline" style={{ padding: "14px 24px" }}>
                <span>Resume 📄</span>
              </a>
            </div>

            <a href="#about" className="scroll-trigger-indicator">
              <span>EXPLORE EXPERIENCE</span>
              <span style={{ animation: "bounce 2s infinite" }}>↓</span>
            </a>
          </div>
        </section>

        {/* =========================================================================
            2. MODERN ABOUT SECTION
            ========================================================================= */}
        <section id="about" className="section-container">
          <div className="section-header">
            <span className="telemetry-tag" style={{ color: "var(--accent-purple)" }}>{"// 02. ENGINEERING PHILOSOPHY"}</span>
            <h2 className="editorial-giant-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginTop: "8px" }}>
              4+ YEARS <span className="editorial-stroke-text">EXPERIENCE</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
            <div className="glass-card">
              <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "var(--text-pure-white)", marginBottom: "16px", fontFamily: "var(--font-display)" }}>
                Architecting Fast, Reliable & Maintainable Web Applications
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: "20px" }}>
                {currentAbout.description || defaultAbout.description}
              </p>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8 }}>
                Over the past 4+ years, I have collaborated with product designers and backend engineers to build resilient frontend architectures, standardizing UI design tokens, reducing rendering latency, and ensuring accessibility compliance.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <div className="glass-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.4rem" }}>⚡</span>
                  <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text-pure-white)" }}>Architecture & Performance Optimization</h4>
                </div>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
                  Mastery of React 18 hooks, code splitting, memoization strategies, and Web Vitals monitoring to achieve sub-second load times.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.4rem" }}>🎨</span>
                  <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text-pure-white)" }}>Design Systems & Micro-Interactions</h4>
                </div>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
                  Building reusable component libraries with Tailwind CSS, MUI, and Framer Motion for cohesive design systems.
                </p>
              </div>

              <div className="glass-card" style={{ padding: "24px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                  <span style={{ fontSize: "1.4rem" }}>🔌</span>
                  <h4 style={{ fontWeight: 800, fontSize: "1.1rem", color: "var(--text-pure-white)" }}>State Management & API Integration</h4>
                </div>
                <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", margin: 0 }}>
                  Proficient with Redux Toolkit, React Query, and RESTful service integrations for predictable data flow.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            3. PROFESSIONAL EXPERIENCE TIMELINE (4+ Years Positioning)
            ========================================================================= */}
        <section id="experience" className="section-container">
          <div className="section-header">
            <span className="telemetry-tag" style={{ color: "var(--accent-cyan)" }}>{"// 03. CAREER CHRONOLOGY"}</span>
            <h2 className="editorial-giant-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginTop: "8px" }}>
              PROFESSIONAL <span className="editorial-stroke-text">TIMELINE</span>
            </h2>
          </div>

          <div className="timeline-wrapper">
            <div className="timeline-line"></div>

            {currentExperiences.map((exp, i) => (
              <motion.div
                key={exp.id || i}
                className="timeline-item"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="timeline-node"></div>
                <div className="timeline-card-wrap">
                  <div className="timeline-card">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px", marginBottom: "8px" }}>
                      <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-pure-white)" }}>{exp.role}</h3>
                      <span className="skill-level-badge">{exp.period}</span>
                    </div>

                    <div style={{ color: "var(--accent-purple)", fontFamily: "var(--font-mono)", fontSize: "0.92rem", fontWeight: 700, marginBottom: "12px" }}>
                      {exp.company} — {exp.location || "Remote"}
                    </div>

                    <p style={{ fontSize: "0.95rem", color: "var(--text-muted)", lineHeight: "1.7", marginBottom: "20px" }}>
                      {exp.description}
                    </p>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                      {(exp.techStack || ["React", "TypeScript", "Tailwind CSS"]).map((tech, idx) => (
                        <span key={idx} className="tech-pill">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            4. TECHNICAL SKILLS GROUPED BY CATEGORY (No percentage bars!)
            ========================================================================= */}
        <section id="skills" className="section-container">
          <div className="section-header">
            <span className="telemetry-tag" style={{ color: "var(--accent-purple)" }}>{"// 04. TECHNICAL SKILLS"}</span>
            <h2 className="editorial-giant-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginTop: "8px" }}>
              ENGINEERING <span className="editorial-stroke-text">CAPABILITIES</span>
            </h2>
            <p className="section-subtitle">
              Grouped by functional specialization across frontend architecture, UI design systems, build tooling, and API integrations.
            </p>
          </div>

          <div className="category-skills-grid">
            {defaultSkillCategories.map((cat, idx) => (
              <motion.div
                key={idx}
                className="category-skill-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                  <span style={{ fontSize: "1.8rem" }}>{cat.icon}</span>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: 800, color: "var(--text-pure-white)", fontFamily: "var(--font-display)" }}>
                    {cat.title}
                  </h3>
                </div>

                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  {cat.description}
                </p>

                <div style={{ marginTop: "auto" }}>
                  {cat.skills.map((s, i) => (
                    <div key={i} className="skill-item-row">
                      <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-pure-white)" }}>{s.name}</span>
                      <span className="skill-level-badge">{s.level}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            5. HIGH QUALITY FEATURED PROJECT SHOWCASE
            ========================================================================= */}
        <section id="projects" className="section-container">
          <div className="section-header">
            <span className="telemetry-tag" style={{ color: "var(--accent-cyan)" }}>{"// 05. PORTFOLIO SHOWCASE"}</span>
            <h2 className="editorial-giant-title" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", marginTop: "8px" }}>
              FEATURED <span className="editorial-stroke-text">PROJECTS</span>
            </h2>
          </div>

          {/* Featured Hero Flagship Project */}
          {featuredProject && (
            <motion.div
              className="featured-project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="featured-img-wrap">
                <img
                  src={featuredProject.image ? getMediaUrl(featuredProject.image) : defaultProjects[0].image}
                  alt={featuredProject.title}
                  className="featured-img"
                />
              </div>

              <div className="featured-content">
                <span className="telemetry-tag" style={{ color: "var(--accent-purple)", marginBottom: "12px" }}>
                  ✦ FLAGSHIP FEATURED PROJECT
                </span>
                <h3 style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--text-pure-white)", fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                  {featuredProject.title}
                </h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
                  {featuredProject.description}
                </p>

                <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--accent-cyan)", fontWeight: 700, marginBottom: "24px" }}>
                  ⚡ {featuredProject.metrics || "350ms FCP • 99/100 Lighthouse • 100% Type Safe"}
                </div>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                  {(featuredProject.technologies || defaultProjects[0].technologies).map((t, i) => (
                    <span key={i} className="tech-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "16px" }}>
                  <a href={featuredProject.live_url || "#"} target="_blank" rel="noreferrer" className="btn-editorial-primary" style={{ padding: "12px 24px", fontSize: "0.82rem" }}>
                    <span>Live Demo</span> ↗
                  </a>
                  <a href={featuredProject.github_url || "#"} target="_blank" rel="noreferrer" className="btn-editorial-outline" style={{ padding: "12px 24px", fontSize: "0.82rem" }}>
                    <span>GitHub Code</span> 🐙
                  </a>
                </div>
              </div>
            </motion.div>
          )}

          {/* Grid of Secondary Projects */}
          <div className="projects-grid">
            {regularProjects.map((proj, idx) => (
              <motion.div
                key={proj.id || idx}
                className="project-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="project-thumb-wrap">
                  <img
                    src={proj.image ? getMediaUrl(proj.image) : defaultProjects[1].image}
                    alt={proj.title}
                    className="project-thumb"
                  />
                </div>

                <div className="project-card-body">
                  <h3 style={{ fontSize: "1.35rem", fontWeight: 800, color: "var(--text-pure-white)", marginBottom: "12px" }}>{proj.title}</h3>
                  <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", flexGrow: 1, marginBottom: "20px", lineHeight: 1.6 }}>{proj.description}</p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "24px" }}>
                    {(proj.technologies || ["React"]).map((t, i) => (
                      <span key={i} className="tech-pill" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                        {t}
                      </span>
                    ))}
                  </div>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <a href={proj.live_url || "#"} target="_blank" rel="noreferrer" className="btn-editorial-outline" style={{ padding: "8px 16px", fontSize: "0.78rem" }}>
                      Live Demo ↗
                    </a>
                    <a href={proj.github_url || "#"} target="_blank" rel="noreferrer" className="btn-editorial-outline" style={{ padding: "8px 16px", fontSize: "0.78rem" }}>
                      Code 🐙
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            6. CONTACT & ACTION SECTION
            ========================================================================= */}
        <section id="contact" className="section-container">
          <div className="contact-cta-card">
            <span className="telemetry-tag" style={{ color: "var(--accent-purple)", marginBottom: "16px" }}>
              {"// 06. INITIATE CONNECTION"}
            </span>
            <h2 className="editorial-giant-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", marginBottom: "16px" }}>
              LET'S BUILD SOMETHING<br />
              <span className="editorial-stroke-text">EXCEPTIONAL TOGETHER.</span>
            </h2>

            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 32px auto" }}>
              Interested in collaborating, discussing frontend architecture, or hiring a 4+ year experienced engineer? Get in touch directly!
            </p>

            <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", margin: "32px 0" }}>
              <button onClick={copyEmailToClipboard} className="btn-editorial-outline">
                <span>✉ aswathi.dev@example.com</span>
                <span style={{ fontSize: "0.75rem", color: "var(--accent-purple)", fontWeight: 700 }}>
                  {copiedEmail ? "(Copied to Clipboard!)" : "(Copy Email)"}
                </span>
              </button>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-editorial-outline">
                <span>🐙 GitHub Profile</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-editorial-outline">
                <span>💼 LinkedIn Profile</span>
              </a>
            </div>

            <form className="quick-form" onSubmit={handleContactSubmit}>
              <input type="text" required placeholder="Your Name / Organization" className="form-input" />
              <input type="email" required placeholder="Your Email Address" className="form-input" />
              <textarea required rows="4" placeholder="Your Project Details or Position Inquiry..." className="form-input" style={{ resize: "none" }}></textarea>
              <button type="submit" className="btn-editorial-primary" style={{ justifyContent: "center" }}>
                {formSubmitted ? "TRANSMISSION SENT SUCCESSFULLY ✨" : "SEND DIRECT MESSAGE →"}
              </button>
            </form>
          </div>
        </section>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Home;
