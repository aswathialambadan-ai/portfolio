import React from "react";

const AiDevelopmentSection = () => {
  const aiTools = [
    {
      icon: "🤖",
      name: "ChatGPT / GPT-4o",
      role: "Code exploration, rapid API drafting & brainstorming",
      tag: "Exploration"
    },
    {
      icon: "🧠",
      name: "Claude 3.5 Sonnet",
      role: "Refactoring, deep logic validation & edge-case analysis",
      tag: "Logic & Refactor"
    },
    {
      icon: "⚡",
      name: "OpenAI Codex / Copilot",
      role: "Inline snippet autocompletion & boilerplate generation",
      tag: "Autocompletion"
    },
    {
      icon: "🚀",
      name: "Google Antigravity",
      role: "Agentic IDE pair programming & full-stack debugging",
      tag: "Agentic IDE"
    }
  ];

  return (
    <section id="ai-development" className="ai-section">
      <style>{`
        .ai-section {
          padding: 80px 0 100px 0;
          position: relative;
          overflow: hidden;
        }

        .ai-glass-wrapper {
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-medium);
          border-radius: 24px;
          padding: 44px;
          box-shadow: var(--shadow-lg), 0 0 35px rgba(0, 0, 0, 0.4);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
          position: relative;
          z-index: 1;
          transition: border-color 0.3s ease;
        }

        .ai-glass-wrapper:hover {
          border-color: var(--border-emerald);
        }

        .ai-left-content {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .ai-title-main {
          font-family: var(--font-display);
          font-size: 2rem;
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.2;
          letter-spacing: -0.02em;
        }

        .ai-quote-paragraph {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.7;
        }

        .ai-velocity-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          border-radius: 8px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          color: var(--accent-emerald);
          font-size: 0.82rem;
          font-weight: 700;
          font-family: var(--font-mono);
          width: fit-content;
        }

        .ai-tools-grid {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ai-tool-card-item {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 14px;
          padding: 16px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          transition: all 0.25s ease;
        }

        .ai-tool-card-item:hover {
          border-color: var(--accent-emerald);
          transform: translateX(4px);
          background: rgba(217, 119, 6, 0.05);
        }

        .tool-info-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .tool-icon {
          font-size: 1.3rem;
          padding: 8px;
          border-radius: 10px;
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-subtle);
          line-height: 1;
        }

        .tool-name-heading {
          font-size: 0.95rem;
          font-weight: 800;
          color: var(--text-bright);
          margin-bottom: 2px;
        }

        .tool-role-desc {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        .tool-category-tag {
          font-size: 0.72rem;
          font-family: var(--font-mono);
          color: var(--accent-emerald);
          background: rgba(217, 119, 6, 0.12);
          padding: 3px 8px;
          border-radius: 6px;
          border: 1px solid var(--border-emerald);
          white-space: nowrap;
        }

        @media (max-width: 900px) {
          .ai-glass-wrapper {
            grid-template-columns: 1fr;
            padding: 32px;
            gap: 32px;
          }
        }
      `}</style>

      <div className="container">
        <div className="ai-glass-wrapper">
          {/* Left Column: AI Philosophy */}
          <div className="ai-left-content">
            <h3 className="ai-title-main">AI-Powered Development Velocity</h3>
            
            <p className="ai-quote-paragraph">
              "I leverage modern AI-assisted tools for code exploration, logic validation, automated component generation, and prompt-driven workflows — while keeping final implementation and architecture decisions strictly in human hands."
            </p>

            <div className="ai-velocity-badge">
              <span>⚡ 3x Faster Prototyping & High Code Quality</span>
            </div>
          </div>

          {/* Right Column: AI Tools Deck */}
          <div className="ai-tools-grid">
            {aiTools.map((tool) => (
              <div key={tool.name} className="ai-tool-card-item">
                <div className="tool-info-left">
                  <span className="tool-icon">{tool.icon}</span>
                  <div>
                    <div className="tool-name-heading">{tool.name}</div>
                    <div className="tool-role-desc">{tool.role}</div>
                  </div>
                </div>

                <span className="tool-category-tag">{tool.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDevelopmentSection;
