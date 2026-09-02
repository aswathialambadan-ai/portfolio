import React from "react";
import { motion } from "framer-motion";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Core Frontend",
      icon: "⚛️",
      skills: ["React.js (4+ Yrs)", "JavaScript ES6+", "HTML5", "CSS3", "Responsive Architecture"]
    },
    {
      title: "State Management",
      icon: "🔮",
      skills: ["Redux", "Redux Toolkit", "Context API", "React Hooks", "Local/Session Storage"]
    },
    {
      title: "APIs & Integration",
      icon: "🔌",
      skills: ["RESTful APIs", "Laravel Backend API", "Axios", "Postman", "JWT Auth", "MetaMask Web3"]
    },
    {
      title: "UI & Styling",
      icon: "🎨",
      skills: ["Material UI (MUI)", "Modern CSS", "Framer Motion", "Flexbox & Grid", "Component Systems"]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      skills: ["Git", "GitHub", "npm / yarn", "VS Code", "Vercel Deployment"]
    },
    {
      title: "AI-Assisted Dev",
      icon: "🤖",
      skills: ["ChatGPT", "Claude", "OpenAI Codex", "Google Antigravity", "Rapid Prototyping"]
    }
  ];

  return (
    <section id="skills" className="skills-section" style={{ padding: "90px 0", background: "rgba(0,0,0,0.15)" }}>
      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .skill-category-card {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 18px;
          padding: 28px;
          transition: all 0.3s ease;
        }

        .skill-category-card:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-4px);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 20px;
          padding-bottom: 14px;
          border-bottom: 1px solid var(--border-subtle);
        }

        .skill-icon {
          font-size: 1.4rem;
        }

        .skill-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: var(--text-bright);
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.92rem;
          color: var(--text-muted);
        }

        .skill-bullet {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent-emerald);
        }

        @media (max-width: 1024px) {
          .skills-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 650px) {
          .skills-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-tag">🛠️ Technical Stack</div>
        <h2 className="section-heading">
          Technical <span className="gradient-text">Skills Directory</span>
        </h2>
        <p className="section-subtext">
          Comprehensive toolkit and technology stack used in production React application development.
        </p>

        <div className="skills-grid">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="skill-category-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
            >
              <div className="skill-header">
                <span className="skill-icon">{cat.icon}</span>
                <h3 className="skill-title">{cat.title}</h3>
              </div>

              <div className="skill-list">
                {cat.skills.map((skill) => (
                  <div key={skill} className="skill-item">
                    <span className="skill-bullet"></span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
