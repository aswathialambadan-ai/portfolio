import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import apiClient from "../utils/apiClient";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const Skills = () => {
  const [, setSkills] = useState([]);

  const defaultCategories = [
    {
      title: "Frontend Architecture & Frameworks",
      icon: "⚛️",
      description: "Building scalable single-page apps, reusable design tokens, and modular UI architectures.",
      skills: [
        { name: "React 18", level: "Expert" },
        { name: "TypeScript", level: "Advanced" },
        { name: "JavaScript ES6+", level: "Expert" },
        { name: "Next.js", level: "Advanced" },
        { name: "HTML5 / Modern CSS3", level: "Expert" },
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

  useEffect(() => {
    fetchSkills();
  }, []);

  const fetchSkills = async () => {
    try {
      const res = await apiClient.get("/api/skills");
      if (res.data) {
        const list = res.data.data || (Array.isArray(res.data) ? res.data : []);
        if (list.length > 0) setSkills(list);
      }
    } catch (err) {
      console.error("Skills API fetch error:", err);
    }
  };

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
          <span className="telemetry-tag" style={{ color: "var(--accent-purple)" }}>
            {"// TECHNICAL MATRIX"}
          </span>
          <h1 className="editorial-giant-title" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", marginTop: "8px" }}>
            TECHNICAL <span className="editorial-stroke-text">CAPABILITIES</span>
          </h1>
          <p className="section-subtitle">
            Grouped by engineering specialization across frontend architecture, UI design systems, state management, build tools, and backend integrations.
          </p>
        </motion.div>

        <div className="category-skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))", gap: "28px" }}>
          {defaultCategories.map((cat, idx) => (
            <motion.div
              key={idx}
              className="glass-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
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

              <div>
                {cat.skills.map((s, i) => (
                  <div key={i} className="skill-item-row" style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px dashed var(--border-subtle)" }}>
                    <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-pure-white)" }}>{s.name}</span>
                    <span className="skill-level-badge">{s.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Skills;
