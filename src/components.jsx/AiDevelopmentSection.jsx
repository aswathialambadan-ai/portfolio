import React from "react";

const AiDevelopmentSection = () => {
  const aiTools = [
    { name: "ChatGPT", role: "Code exploration & initial drafts" },
    { name: "Claude", role: "Refactoring & logic validation" },
    { name: "OpenAI Codex", role: "Snippet autocompletion" },
    { name: "Google Antigravity", role: "Agentic IDE pair programmer" }
  ];

  return (
    <section id="ai-development" className="ai-editorial" style={{ padding: "80px 0", background: "var(--bg-secondary)" }}>
      <style>{`
        .ai-editorial-box {
          background: var(--bg-card);
          border: 1px solid var(--border-line);
          border-radius: 6px;
          padding: 40px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }

        .ai-title {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 12px;
        }

        .ai-quote-text {
          font-size: 1.02rem;
          color: var(--text-sub);
          line-height: 1.8;
        }

        .ai-tools-editorial-list {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .ai-tool-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 16px;
          background: var(--bg-primary);
          border: 1px solid var(--border-line);
          border-radius: 4px;
        }

        .ai-tool-name {
          font-weight: 700;
          color: var(--text-main);
          font-size: 0.95rem;
        }

        .ai-tool-role {
          font-size: 0.85rem;
          color: var(--text-sub);
        }

        @media (max-width: 850px) {
          .ai-editorial-box { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="ai-editorial-box">
          <div>
            <h3 className="ai-title">Tools that help me build</h3>
            <p className="ai-quote-text">
              "I use AI-assisted development tools for code exploration, debugging, generation, and prompt-based workflows — while keeping the final implementation and architectural decisions strictly in my hands."
            </p>
          </div>

          <div className="ai-tools-editorial-list">
            {aiTools.map((tool) => (
              <div key={tool.name} className="ai-tool-row">
                <span className="ai-tool-name">✦ {tool.name}</span>
                <span className="ai-tool-role">{tool.role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AiDevelopmentSection;
