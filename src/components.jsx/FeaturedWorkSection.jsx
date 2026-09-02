import React from "react";
import { motion } from "framer-motion";
import { projectsData } from "../data/portfolioData";

const FeaturedWorkSection = ({ onSelectProject }) => {
  return (
    <section id="featured-work" className="work-section" style={{ padding: "90px 0" }}>
      <style>{`
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .project-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .project-card:hover {
          border-color: var(--accent-emerald);
          box-shadow: var(--shadow-emerald);
          transform: translateY(-6px);
        }

        .project-header-badge {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .project-category-tag {
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--accent-cyan);
          font-weight: 700;
          text-transform: uppercase;
        }

        .project-title {
          font-family: var(--font-display);
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .project-description {
          font-size: 0.98rem;
          color: var(--text-muted);
          line-height: 1.65;
          margin-bottom: 24px;
        }

        .project-tech-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 28px;
        }

        .project-card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          border-top: 1px solid var(--border-subtle);
        }

        .live-app-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 8px;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid var(--border-emerald);
          color: var(--accent-emerald);
          font-size: 0.82rem;
          font-weight: 700;
          text-decoration: none;
        }

        @media (max-width: 900px) {
          .projects-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">⚡ Portfolio Case Studies</div>
        <h2 className="section-heading">
          Featured <span className="gradient-text">Engineering Projects</span>
        </h2>
        <p className="section-subtext">
          Enterprise applications, e-commerce storefronts, and SaaS management tools engineered with React.js, Redux, and RESTful API integrations.
        </p>

        <div className="projects-grid">
          {projectsData.map((project, idx) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                <div className="project-header-badge">
                  <span className="project-category-tag">{project.category}</span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-app-badge"
                      onClick={(e) => e.stopPropagation()}
                    >
                      🌐 Live App ↗
                    </a>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.shortDescription}</p>

                <div className="project-tech-row">
                  {project.technologies.slice(0, 5).map((tech) => (
                    <span key={tech} className="tech-pill">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="project-card-footer">
                <button
                  className="btn-secondary"
                  style={{ width: "100%", justifyContent: "space-between" }}
                  onClick={() => onSelectProject(project)}
                >
                  <span>Explore Case Study & Demo</span>
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWorkSection;
