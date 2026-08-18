import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import apiClient, { getMediaUrl } from "../utils/apiClient";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  const defaultProjects = [
    {
      id: 1,
      title: "DevPulse Studio & CMS Suite",
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

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const res = await apiClient.get("/api/projects");
      if (res.data) {
        const list = res.data.data || (Array.isArray(res.data) ? res.data : []);
        if (list.length > 0) setProjects(list);
      }
    } catch (err) {
      console.error("Projects API fetch error:", err);
    }
  };

  const projectList = projects.length > 0 ? projects : defaultProjects;
  const featured = projectList.find((p) => p.featured) || projectList[0];
  const remaining = projectList.filter((p) => p.id !== featured?.id);

  return (
    <div className="aswathi-page-root bg-grid-pattern">
      <PublicNavbar />

      <main className="section-container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="telemetry-tag" style={{ color: "var(--accent-cyan)" }}>{"// PORTFOLIO SHOWCASE"}</span>
          <h1 className="editorial-giant-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginTop: "8px" }}>
            FEATURED <span className="editorial-stroke-text">WORKS</span>
          </h1>
          <p className="section-subtitle">
            Explore production web applications, component design systems, and full-stack solutions architected by Aswathi.
          </p>
        </motion.div>

        {/* Featured Project */}
        {featured && (
          <motion.div
            className="featured-project-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="featured-img-wrap">
              <img
                src={featured.image ? getMediaUrl(featured.image) : defaultProjects[0].image}
                alt={featured.title}
                className="featured-img"
              />
            </div>
            <div className="featured-content">
              <span className="telemetry-tag" style={{ color: "var(--accent-purple)", marginBottom: "12px" }}>
                ✦ FLAGSHIP FEATURED PROJECT
              </span>
              <h2 style={{ fontSize: "2.1rem", fontWeight: 800, color: "var(--text-pure-white)", fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                {featured.title}
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.7, marginBottom: "20px" }}>
                {featured.description}
              </p>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", color: "var(--accent-cyan)", fontWeight: 700, marginBottom: "24px" }}>
                ⚡ {featured.metrics || "350ms FCP • 99/100 Lighthouse • 100% Type Safe"}
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "32px" }}>
                {(featured.technologies || ["React", "TypeScript"]).map((t, i) => (
                  <span key={i} className="tech-pill">
                    {t}
                  </span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "16px" }}>
                <a href={featured.live_url || "#"} target="_blank" rel="noreferrer" className="btn-editorial-primary" style={{ padding: "12px 24px", fontSize: "0.82rem" }}>
                  <span>Live Demo</span> ↗
                </a>
                <a href={featured.github_url || "#"} target="_blank" rel="noreferrer" className="btn-editorial-outline" style={{ padding: "12px 24px", fontSize: "0.82rem" }}>
                  <span>GitHub Code</span> 🐙
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {/* Project Grid */}
        <div className="projects-grid">
          {remaining.map((proj, idx) => (
            <motion.div
              key={proj.id || idx}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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
                  {(proj.technologies || ["React"]).map((tech, i) => (
                    <span key={i} className="tech-pill" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                      {tech}
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
      </main>

      <PublicFooter />
    </div>
  );
};

export default Projects;
