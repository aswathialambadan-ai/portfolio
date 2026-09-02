import React, { useState } from "react";
import { motion } from "framer-motion";
import { generateResumePDF } from "../utils/resumeGenerator";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("mlm");

  // MLM Simulator Interactive State
  const [directReferrals, setDirectReferrals] = useState(6);
  const [packageTier, setPackageTier] = useState(500);

  // Cart Demo Interactive State
  const [couponCode, setCouponCode] = useState("ASWATHI10");
  const [discountApplied, setDiscountApplied] = useState(true);
  const [cartItems] = useState([
    { id: 1, name: "React Component System", price: 120 },
    { id: 2, name: "Redux State Engine", price: 80 }
  ]);

  // Backend API Filter State
  const [backendLang, setBackendLang] = useState("php");

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  // MLM Calculations
  const level1Payout = directReferrals * packageTier * 0.15;
  const level2Payout = directReferrals * 3 * packageTier * 0.08;
  const totalPayout = level1Payout + level2Payout;

  // Cart Calculations
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const discountAmount = discountApplied ? subtotal * 0.1 : 0;
  const finalTotal = subtotal - discountAmount;

  return (
    <section id="hero" className="hero-section">
      <style>{`
        .hero-section {
          padding: 80px 0 100px 0;
          position: relative;
          overflow: hidden;
          text-align: center;
        }

        /* Ambient Glows & Grid Pattern */
        .hero-ambient-center {
          position: absolute;
          top: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 750px;
          height: 650px;
          background: radial-gradient(circle, var(--accent-emerald-glow) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.55;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(var(--border-subtle) 1px, transparent 1px);
          background-size: 36px 36px;
          opacity: 0.22;
          pointer-events: none;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 1;
          max-width: 940px;
          margin: 0 auto;
        }

        /* Status Badge */
        .hero-status-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 18px;
          border-radius: 9999px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          color: var(--accent-emerald);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
        }

        .hero-title {
          font-family: var(--font-display);
          font-size: clamp(2.8rem, 5.8vw, 4.8rem);
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.08;
          margin-bottom: 20px;
          letter-spacing: -0.03em;
        }

        .hero-title-gradient {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 50%, var(--accent-indigo) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-statement-quote {
          font-size: 1.2rem;
          color: var(--text-bright);
          font-weight: 600;
          max-width: 780px;
          margin: 0 auto 16px auto;
          line-height: 1.5;
        }

        .hero-bio-paragraph {
          font-size: 1.02rem;
          color: var(--text-muted);
          line-height: 1.7;
          max-width: 760px;
          margin: 0 auto 32px auto;
        }

        /* Metric Glass Pills Bar */
        .metrics-pills-row {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 32px;
        }

        .metric-glass-pill {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 12px;
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-size: 0.85rem;
          font-weight: 700;
          box-shadow: 0 4px 14px rgba(0, 0, 0, 0.25);
          transition: all 0.25s ease;
        }

        .metric-glass-pill:hover {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          transform: translateY(-2px);
        }

        /* Action Buttons */
        .hero-actions-center {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 14px;
          flex-wrap: wrap;
          margin-bottom: 56px;
        }

        /* Full-Width Interactive Feature Showcase Container */
        .showcase-deck-container {
          max-width: 1040px;
          margin: 0 auto 40px auto;
          position: relative;
          z-index: 1;
        }

        .showcase-glass-card {
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-medium);
          border-radius: 24px;
          box-shadow: var(--shadow-lg), 0 0 40px rgba(0, 0, 0, 0.4);
          overflow: hidden;
          text-align: left;
        }

        .showcase-card-header {
          background: var(--bg-dark-card);
          padding: 16px 24px;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .showcase-title-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--text-muted);
        }

        .showcase-tab-pills {
          display: flex;
          background: var(--bg-dark-base);
          padding: 4px;
          border-radius: 10px;
          border: 1px solid var(--border-subtle);
          gap: 6px;
          overflow-x: auto;
        }

        .showcase-tab-btn {
          background: transparent;
          border: none;
          color: var(--text-muted);
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.25s ease;
          white-space: nowrap;
        }

        .showcase-tab-btn.active {
          background: var(--accent-emerald);
          color: #1c1917;
          box-shadow: 0 2px 10px rgba(217, 119, 6, 0.35);
        }

        .showcase-card-body {
          padding: 32px;
          min-height: 280px;
        }

        /* Demo Inner Layout */
        .demo-layout-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 32px;
          align-items: center;
        }

        .demo-info-side {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .demo-badge-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 10px;
          border-radius: 6px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          color: var(--accent-emerald);
          font-size: 0.78rem;
          font-family: var(--font-mono);
          font-weight: 700;
          width: fit-content;
        }

        .demo-heading {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.3;
        }

        .demo-description {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.65;
        }

        .demo-tags-strip {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-top: 6px;
        }

        .demo-tag-pill {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          color: var(--text-dim);
          background: var(--bg-dark-card);
          padding: 3px 8px;
          border-radius: 4px;
          border: 1px solid var(--border-subtle);
        }

        /* Interactive Controls Box */
        .demo-interactive-box {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 24px;
        }

        .control-group {
          margin-bottom: 16px;
        }

        .control-label-row {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 8px;
        }

        .range-input-slider {
          width: 100%;
          accent-color: var(--accent-emerald);
          cursor: pointer;
        }

        .live-payout-box {
          background: var(--bg-dark-surface);
          border: 1px dashed var(--border-emerald);
          border-radius: 12px;
          padding: 16px;
          margin-top: 18px;
        }

        .payout-line {
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          color: var(--text-muted);
          margin-bottom: 6px;
        }

        .payout-line.total {
          border-top: 1px solid var(--border-subtle);
          padding-top: 8px;
          margin-bottom: 0;
          font-size: 1rem;
          font-weight: 800;
          color: var(--accent-emerald);
        }

        /* Tech Marquee Strip */
        .tech-marquee-container {
          max-width: 940px;
          margin: 0 auto;
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 10px;
        }

        .tech-pill-large {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 10px;
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          font-size: 0.85rem;
          font-weight: 600;
          font-family: var(--font-mono);
          transition: all 0.25s ease;
        }

        .tech-pill-large:hover {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          transform: translateY(-2px);
        }

        @media (max-width: 900px) {
          .demo-layout-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <div className="hero-ambient-center"></div>
      <div className="hero-grid-pattern"></div>

      <div className="container">
        {/* Centered Pitch & Persona */}
        <div className="hero-content-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="hero-status-pill">
              <span className="status-dot"></span>
              <span>Open for Senior React & Full-Stack Roles</span>
            </div>

            <h1 className="hero-title">
              ASWATHI A. <br />
              <span className="hero-title-gradient">Senior React & Full-Stack Developer</span>
            </h1>

            <div className="hero-statement-quote">
              "She doesn't just write React code — she constructs high-performance, scale-ready frontend architectures & robust backend APIs."
            </div>

            <p className="hero-bio-paragraph">
              4+ years of commercial software engineering experience building production web platforms, dynamic MLM commission calculation engines, Redux state pipelines, and backend REST APIs with <strong>PHP (Laravel/CodeIgniter)</strong> & <strong>Python</strong>, powered by modern <strong>AI tooling (Cursor, Copilot, ChatGPT)</strong> at Bpract Software Solutions.
            </p>

            {/* Key Metric Glass Pills */}
            <div className="metrics-pills-row">
              <span className="metric-glass-pill">⚡ 4+ Years Commercial XP</span>
              <span className="metric-glass-pill">🐘 PHP & 🐍 Python Backend</span>
              <span className="metric-glass-pill">🤖 AI Tools Workflow</span>
              <span className="metric-glass-pill">🎯 100% Mobile & Cross-Browser</span>
            </div>

            {/* Action Buttons */}
            <div className="hero-actions-center">
              <button className="btn-primary" onClick={() => scrollTo("featured-work")}>
                🚀 Explore Case Studies
              </button>

              <button className="btn-secondary" onClick={generateResumePDF}>
                📄 Download Resume (PDF)
              </button>

              <button className="btn-secondary" onClick={() => scrollTo("contact")}>
                💬 Contact Me
              </button>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Interactive Showcase Deck */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="showcase-deck-container"
        >
          <div className="showcase-glass-card">
            <div className="showcase-card-header">
              <div className="showcase-title-brand">
                <span style={{ width: "9px", height: "9px", borderRadius: "50%", background: "var(--accent-emerald)" }}></span>
                <span>ASWATHI_DEV_SHOWCASE · Interactive Capabilities</span>
              </div>

              <div className="showcase-tab-pills">
                <button
                  className={`showcase-tab-btn ${activeTab === "mlm" ? "active" : ""}`}
                  onClick={() => setActiveTab("mlm")}
                >
                  ⚡ MLM Earnings Engine
                </button>
                <button
                  className={`showcase-tab-btn ${activeTab === "cart" ? "active" : ""}`}
                  onClick={() => setActiveTab("cart")}
                >
                  🛒 Redux Cart Pipeline
                </button>
                <button
                  className={`showcase-tab-btn ${activeTab === "backend" ? "active" : ""}`}
                  onClick={() => setActiveTab("backend")}
                >
                  🐘 PHP & 🐍 Python APIs
                </button>
                <button
                  className={`showcase-tab-btn ${activeTab === "ai" ? "active" : ""}`}
                  onClick={() => setActiveTab("ai")}
                >
                  🤖 AI Tools Workflow
                </button>
              </div>
            </div>

            <div className="showcase-card-body">
              {/* TAB 1: MLM Affiliate Commission Simulator */}
              {activeTab === "mlm" && (
                <div className="demo-layout-grid">
                  <div className="demo-info-side">
                    <span className="demo-badge-tag">REDUX TOOLKIT + REACT STATE</span>
                    <h3 className="demo-heading">Multi-Tier Affiliate Commission Engine</h3>
                    <p className="demo-description">
                      Engineered dynamic multi-level earnings calculations for crypto & affiliate platforms. Drag the sliders to test real-time level 1 direct payouts and level 2 overrides.
                    </p>
                    <div className="demo-tags-strip">
                      <span className="demo-tag-pill">#ReduxToolkit</span>
                      <span className="demo-tag-pill">#MultiTierMath</span>
                      <span className="demo-tag-pill">#React18</span>
                    </div>
                  </div>

                  <div className="demo-interactive-box">
                    <div className="control-group">
                      <div className="control-label-row">
                        <span>Level-1 Direct Referrals:</span>
                        <span style={{ color: "var(--accent-emerald)", fontWeight: "800" }}>{directReferrals} Directs</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="20"
                        value={directReferrals}
                        onChange={(e) => setDirectReferrals(Number(e.target.value))}
                        className="range-input-slider"
                      />
                    </div>

                    <div className="control-group">
                      <div className="control-label-row">
                        <span>Package Tier Value ($):</span>
                        <span style={{ color: "var(--accent-cyan)", fontWeight: "800" }}>${packageTier}</span>
                      </div>
                      <input
                        type="range"
                        min="100"
                        max="1000"
                        step="100"
                        value={packageTier}
                        onChange={(e) => setPackageTier(Number(e.target.value))}
                        className="range-input-slider"
                      />
                    </div>

                    <div className="live-payout-box">
                      <div className="payout-line">
                        <span>Direct Payout (15%):</span>
                        <span>${level1Payout.toLocaleString()}</span>
                      </div>
                      <div className="payout-line">
                        <span>Multi-Tier Override (8%):</span>
                        <span>${level2Payout.toLocaleString()}</span>
                      </div>
                      <div className="payout-line total">
                        <span>Estimated Total Commission:</span>
                        <span>${totalPayout.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 2: Redux Cart Engine */}
              {activeTab === "cart" && (
                <div className="demo-layout-grid">
                  <div className="demo-info-side">
                    <span className="demo-badge-tag">REDUX CART & DISCOUNT ENGINE</span>
                    <h3 className="demo-heading">E-Commerce Checkout & Promo Pipeline</h3>
                    <p className="demo-description">
                      Constructed centralized slice state for item cart management, coupon discount verification, and instant total calculations with zero re-rendering lag.
                    </p>
                    <div className="demo-tags-strip">
                      <span className="demo-tag-pill">#ReduxSlices</span>
                      <span className="demo-tag-pill">#PromoCodeEngine</span>
                      <span className="demo-tag-pill">#CheckoutUX</span>
                    </div>
                  </div>

                  <div className="demo-interactive-box">
                    <div style={{ marginBottom: "14px" }}>
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            fontSize: "0.88rem",
                            color: "var(--text-bright)",
                            padding: "8px 0",
                            borderBottom: "1px solid var(--border-subtle)"
                          }}
                        >
                          <span>{item.name}</span>
                          <span style={{ fontWeight: "700" }}>${item.price}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                        placeholder="Promo Code"
                        style={{
                          flex: 1,
                          background: "var(--bg-dark-surface)",
                          border: "1px solid var(--border-subtle)",
                          borderRadius: "8px",
                          padding: "8px 12px",
                          color: "var(--text-bright)",
                          fontSize: "0.85rem",
                          fontFamily: "var(--font-mono)"
                        }}
                      />
                      <button
                        onClick={() => setDiscountApplied(couponCode === "ASWATHI10")}
                        style={{
                          background: "var(--accent-emerald)",
                          border: "none",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          fontWeight: "700",
                          fontSize: "0.85rem",
                          color: "#1c1917",
                          cursor: "pointer"
                        }}
                      >
                        Apply Code
                      </button>
                    </div>

                    <div className="live-payout-box">
                      <div className="payout-line">
                        <span>Cart Subtotal:</span>
                        <span>${subtotal}</span>
                      </div>
                      <div className="payout-line" style={{ color: discountApplied ? "var(--accent-emerald)" : "var(--text-muted)" }}>
                        <span>Promo Discount (10%):</span>
                        <span>{discountApplied ? `-$${discountAmount}` : "$0"}</span>
                      </div>
                      <div className="payout-line total">
                        <span>Final Checkout Total:</span>
                        <span>${finalTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 3: PHP & Python Backend APIs */}
              {activeTab === "backend" && (
                <div className="demo-layout-grid">
                  <div className="demo-info-side">
                    <span className="demo-badge-tag">FULL-STACK BACKEND ARCHITECTURE</span>
                    <h3 className="demo-heading">PHP (Laravel/MySQL) & Python REST Services</h3>
                    <p className="demo-description">
                      Proficient in backend server-side development, constructing RESTful API endpoints, MySQL database schemas, user authentication (JWT/OAuth), and automated data pipelines.
                    </p>
                    <div className="demo-tags-strip">
                      <span className="demo-tag-pill">#PHP</span>
                      <span className="demo-tag-pill">#Python</span>
                      <span className="demo-tag-pill">#MySQL</span>
                      <span className="demo-tag-pill">#RESTfulAPIs</span>
                    </div>
                  </div>

                  <div className="demo-interactive-box">
                    <div style={{ display: "flex", gap: "6px", marginBottom: "16px" }}>
                      <button
                        onClick={() => setBackendLang("php")}
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-subtle)",
                          background: backendLang === "php" ? "var(--accent-emerald)" : "var(--bg-dark-surface)",
                          color: backendLang === "php" ? "#1c1917" : "var(--text-muted)",
                          fontWeight: "700",
                          fontSize: "0.8rem",
                          cursor: "pointer"
                        }}
                      >
                        🐘 PHP / MySQL API
                      </button>
                      <button
                        onClick={() => setBackendLang("python")}
                        style={{
                          flex: 1,
                          padding: "8px",
                          borderRadius: "8px",
                          border: "1px solid var(--border-subtle)",
                          background: backendLang === "python" ? "var(--accent-emerald)" : "var(--bg-dark-surface)",
                          color: backendLang === "python" ? "#1c1917" : "var(--text-muted)",
                          fontWeight: "700",
                          fontSize: "0.8rem",
                          cursor: "pointer"
                        }}
                      >
                        🐍 Python Data Service
                      </button>
                    </div>

                    {backendLang === "php" ? (
                      <div style={{ background: "var(--bg-dark-surface)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-bright)" }}>
                        <span style={{ color: "#f59e0b" }}>POST /api/v1/auth/login</span> <br />
                        <span style={{ color: "var(--text-muted)" }}>Response 200 OK (0.12s):</span> <br />
                        <pre style={{ color: "var(--accent-emerald)", marginTop: "6px" }}>
{`{
  "token": "eyJhbGciOiJIUzI1Ni...",
  "user": { "id": 402, "role": "admin" },
  "db": "MySQL PDO Connected"
}`}
                        </pre>
                      </div>
                    ) : (
                      <div style={{ background: "var(--bg-dark-surface)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-bright)" }}>
                        <span style={{ color: "#3b82f6" }}>GET /api/v1/analytics/stream</span> <br />
                        <span style={{ color: "var(--text-muted)" }}>Response 200 OK (0.08s):</span> <br />
                        <pre style={{ color: "var(--accent-cyan)", marginTop: "6px" }}>
{`{
  "status": "success",
  "engine": "Python 3.11",
  "data_points": 14200,
  "execution_ms": 14.2
}`}
                        </pre>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* TAB 4: AI Tools Workflow */}
              {activeTab === "ai" && (
                <div className="demo-layout-grid">
                  <div className="demo-info-side">
                    <span className="demo-badge-tag">AI-POWERED DEV VELOCITY</span>
                    <h3 className="demo-heading">AI Tooling (Cursor, Copilot, ChatGPT)</h3>
                    <p className="demo-description">
                      Leverages AI coding assistants (Cursor AI IDE, GitHub Copilot, ChatGPT, Gemini) to accelerate component scaffolding, refactor legacy codebases, and auto-generate comprehensive unit tests.
                    </p>
                    <div className="demo-tags-strip">
                      <span className="demo-tag-pill">#CursorAI</span>
                      <span className="demo-tag-pill">#Copilot</span>
                      <span className="demo-tag-pill">#ChatGPT</span>
                      <span className="demo-tag-pill">#3xFasterDelivery</span>
                    </div>
                  </div>

                  <div className="demo-interactive-box">
                    <div style={{ fontSize: "0.85rem", color: "var(--text-bright)", marginBottom: "12px", fontWeight: "700" }}>
                      🤖 AI Tooling Productivity Metrics:
                    </div>
                    <div style={{ background: "var(--bg-dark-surface)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--accent-emerald)" }}>
                      ✓ Cursor AI / Copilot Integration <br />
                      ✓ 3x Faster Component Boilerplate Scaffolding <br />
                      ✓ Automated Error Diagnostics & Refactoring <br />
                      <span style={{ color: "var(--text-muted)", fontSize: "0.75rem", marginTop: "8px", display: "inline-block" }}>
                        Tools: Cursor IDE · GitHub Copilot · ChatGPT · Gemini
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Tech Marquee Strip */}
        <div className="tech-marquee-container">
          <span className="tech-pill-large">⚛️ React 18</span>
          <span className="tech-pill-large">🔄 Redux Toolkit</span>
          <span className="tech-pill-large">🌐 REST APIs</span>
          <span className="tech-pill-large">🐘 PHP / MySQL</span>
          <span className="tech-pill-large">🐍 Python</span>
          <span className="tech-pill-large">🤖 AI Tools (Cursor/Copilot)</span>
          <span className="tech-pill-large">🎨 CSS3 / MUI</span>
          <span className="tech-pill-large">🚀 Next.js</span>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
