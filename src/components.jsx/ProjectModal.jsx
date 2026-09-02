import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // E-Commerce Mock Simulator State
  const [cart, setCart] = useState([
    { id: 1, name: "Enterprise React UI Kit", price: 149, qty: 1 }
  ]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [coupon, setCoupon] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState("catalog"); // catalog, cart, checkout, success

  // MLM Simulator State
  const [referralCount, setReferralCount] = useState(5);
  const [tierPackage, setTierPackage] = useState(250);
  const [metaMaskConnected, setMetaMaskConnected] = useState(false);

  // CRM Simulator State
  const [roleView, setRoleView] = useState("Admin");
  const [searchCustomer, setSearchCustomer] = useState("");

  if (!project) return null;

  const mockProducts = [
    { id: 1, name: "Enterprise React UI Kit", category: "Templates", price: 149, icon: "📦" },
    { id: 2, name: "Redux State Dashboard", category: "Dashboards", price: 199, icon: "📊" },
    { id: 3, name: "REST API Connector Module", category: "Plugins", price: 89, icon: "🔌" },
    { id: 4, name: "MetaMask Wallet Integration", category: "Web3", price: 129, icon: "🦊" }
  ];

  const filteredProducts = selectedCategory === "All"
    ? mockProducts
    : mockProducts.filter((p) => p.category === selectedCategory);

  const cartSubtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const discountAmount = discountApplied ? cartSubtotal * 0.1 : 0;
  const cartTotal = cartSubtotal - discountAmount;

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  // MLM Calculations
  const level1Earnings = referralCount * tierPackage * 0.15;
  const level2Earnings = referralCount * 3 * tierPackage * 0.08;
  const level3Earnings = referralCount * 6 * tierPackage * 0.04;
  const totalMLMEarnings = level1Earnings + level2Earnings + level3Earnings;

  // CRM Mock Data
  const crmCustomers = [
    { id: "CUST-101", name: "Global Systems Ltd", status: "Active Lead", dealValue: "$12,400", roleAccess: "Admin" },
    { id: "CUST-102", name: "Apex FinTech Corp", status: "Closed Won", dealValue: "$45,000", roleAccess: "Admin" },
    { id: "CUST-103", name: "Innovate AI Labs", status: "Ticket Pending", dealValue: "$8,900", roleAccess: "Sub-admin" },
    { id: "CUST-104", name: "Nexus Software Solutions", status: "Active Lead", dealValue: "$18,500", roleAccess: "User" }
  ].filter((c) =>
    roleView === "User" ? c.roleAccess === "User" : true
  ).filter((c) =>
    searchCustomer ? c.name.toLowerCase().includes(searchCustomer.toLowerCase()) : true
  );

  return (
    <AnimatePresence>
      <div className="modal-backdrop" onClick={onClose}>
        <style>{`
          .modal-backdrop {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(37, 37, 37, 0.6);
            backdrop-filter: blur(8px);
            z-index: 10000;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 24px;
            overflow-y: auto;
          }

          .modal-content {
            background: var(--bg-card);
            border: 1px solid var(--border-line);
            border-radius: 8px;
            width: 100%;
            max-width: 920px;
            max-height: 90vh;
            overflow-y: auto;
            box-shadow: var(--shadow-card);
            color: var(--text-main);
            position: relative;
          }

          .modal-header {
            padding: 28px 32px;
            border-bottom: 1px solid var(--border-line);
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
          }

          .modal-title {
            font-family: var(--font-serif);
            font-size: 2rem;
            font-weight: 700;
            color: var(--text-main);
            margin-bottom: 6px;
          }

          .modal-category {
            color: var(--accent-terracotta);
            font-weight: 700;
            font-size: 0.85rem;
            font-family: var(--font-mono);
          }

          .modal-close-btn {
            background: var(--bg-primary);
            border: 1px solid var(--border-line);
            color: var(--text-main);
            width: 36px;
            height: 36px;
            border-radius: 4px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 1.1rem;
            transition: all 0.2s ease;
          }

          .modal-close-btn:hover {
            background: var(--accent-terracotta-light);
            color: var(--accent-terracotta);
          }

          .modal-body {
            padding: 32px;
          }

          .modal-nav-tabs {
            display: flex;
            gap: 16px;
            border-bottom: 1px solid var(--border-line);
            margin-bottom: 24px;
          }

          .tab-btn {
            background: none;
            border: none;
            padding: 10px 16px;
            color: var(--text-sub);
            font-family: var(--font-sans);
            font-weight: 600;
            font-size: 0.95rem;
            cursor: pointer;
            border-bottom: 2px solid transparent;
            transition: all 0.2s ease;
          }

          .tab-btn.active {
            color: var(--accent-terracotta);
            border-bottom-color: var(--accent-terracotta);
          }

          /* Tech tags */
          .tech-tag-grid {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            margin-bottom: 24px;
          }

          .tech-tag-pill {
            background: var(--bg-primary);
            border: 1px solid var(--border-line);
            color: var(--text-main);
            padding: 4px 12px;
            border-radius: 4px;
            font-size: 0.82rem;
            font-weight: 600;
            font-family: var(--font-mono);
          }

          /* Features Grid */
          .features-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 32px;
          }

          .feature-item {
            background: var(--bg-dark-card);
            border: 1px solid var(--border-subtle);
            border-radius: 12px;
            padding: 14px 18px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
            font-size: 0.9rem;
            color: var(--text-primary);
          }

          .feature-icon {
            color: var(--accent-cyan);
            font-weight: bold;
          }

          /* Visual Cards */
          .visual-cards-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin-bottom: 32px;
          }

          .visual-card-item {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid var(--border-subtle);
            border-radius: 14px;
            padding: 20px;
          }

          .visual-card-title {
            font-weight: 700;
            font-size: 1rem;
            color: var(--text-bright);
            margin-bottom: 6px;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .visual-card-desc {
            font-size: 0.85rem;
            color: var(--text-muted);
            line-height: 1.5;
          }

          /* Mock Simulator Box */
          .simulator-container {
            background: var(--bg-dark-base);
            border: 1px solid var(--border-medium);
            border-radius: 16px;
            padding: 24px;
            margin-top: 16px;
          }

          .sim-header {
            font-size: 1rem;
            font-weight: 700;
            color: var(--accent-cyan);
            margin-bottom: 16px;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          @media (max-width: 768px) {
            .features-grid, .visual-cards-grid { grid-template-columns: 1fr; }
            .modal-content { max-height: 95vh; }
            .modal-body { padding: 20px; }
          }
        `}</style>

        <motion.div
          className="modal-content"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="modal-header">
            <div>
              <div className="modal-category">📂 Case Study & Interactive Demo</div>
              <h2 className="modal-title">{project.title}</h2>
              <div style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>{project.category}</div>
            </div>

            <button className="modal-close-btn" onClick={onClose}>
              ✕
            </button>
          </div>

          {/* Body */}
          <div className="modal-body">
            {/* Tabs */}
            <div className="modal-nav-tabs">
              <button
                className={`tab-btn ${activeTab === "overview" ? "active" : ""}`}
                onClick={() => setActiveTab("overview")}
              >
                📋 Case Study Details
              </button>
              <button
                className={`tab-btn ${activeTab === "simulator" ? "active" : ""}`}
                onClick={() => setActiveTab("simulator")}
              >
                🎮 Interactive Product Demo
              </button>
            </div>

            {/* Tab 1: Overview */}
            {activeTab === "overview" && (
              <div>
                <p style={{ fontSize: "1.05rem", color: "var(--text-primary)", lineHeight: "1.7", marginBottom: "24px" }}>
                  {project.shortDescription}
                </p>

                {project.liveUrl && (
                  <div style={{ marginBottom: "24px" }}>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ textDecoration: "none" }}
                    >
                      🌐 Visit Live Web Application (Vercel) →
                    </a>
                  </div>
                )}

                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "12px", color: "var(--text-bright)" }}>
                  ⚡ Core Technologies & Libraries:
                </h3>
                <div className="tech-tag-grid">
                  {project.technologies.map((t) => (
                    <span key={t} className="tech-tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Visual Cards */}
                {project.caseStudyCards && (
                  <>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "16px", color: "var(--text-bright)" }}>
                      🏛️ Product Architecture Components:
                    </h3>
                    <div className="visual-cards-grid">
                      {project.caseStudyCards.map((card, idx) => (
                        <div key={idx} className="visual-card-item">
                          <div className="visual-card-title">
                            <span>{card.icon}</span> {card.title}
                          </div>
                          <div className="visual-card-desc">{card.desc}</div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {/* Features list */}
                <h3 style={{ fontSize: "1.05rem", fontWeight: "700", marginBottom: "16px", color: "var(--text-bright)" }}>
                  ✅ Key Capabilities & Features:
                </h3>
                <div className="features-grid">
                  {project.features.map((feat, idx) => (
                    <div key={idx} className="feature-item">
                      <span className="feature-icon">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 2: Interactive Simulator */}
            {activeTab === "simulator" && (
              <div>
                {/* E-Commerce Mock */}
                {project.mockType === "ecommerce" && (
                  <div className="simulator-container">
                    <div className="sim-header">
                      <span>🛍️ E-Commerce Flow: Product Catalog → Cart → Payment</span>
                      <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                        Cart Items: {cart.reduce((s, i) => s + i.qty, 0)}
                      </span>
                    </div>

                    {/* Steps switch */}
                    <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                      <button
                        className={`btn-secondary ${checkoutStep === "catalog" ? "active" : ""}`}
                        style={{ padding: "6px 14px", fontSize: "0.85rem" }}
                        onClick={() => setCheckoutStep("catalog")}
                      >
                        1. Catalog
                      </button>
                      <button
                        className={`btn-secondary ${checkoutStep === "cart" ? "active" : ""}`}
                        style={{ padding: "6px 14px", fontSize: "0.85rem" }}
                        onClick={() => setCheckoutStep("cart")}
                      >
                        2. Shopping Cart (${cartTotal})
                      </button>
                      <button
                        className={`btn-secondary ${checkoutStep === "checkout" ? "active" : ""}`}
                        style={{ padding: "6px 14px", fontSize: "0.85rem" }}
                        onClick={() => setCheckoutStep("checkout")}
                      >
                        3. Checkout
                      </button>
                    </div>

                    {/* Step 1: Catalog */}
                    {checkoutStep === "catalog" && (
                      <div>
                        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
                          {["All", "Templates", "Dashboards", "Plugins", "Web3"].map((cat) => (
                            <button
                              key={cat}
                              onClick={() => setSelectedCategory(cat)}
                              style={{
                                background: selectedCategory === cat ? "var(--accent-cyan)" : "rgba(255,255,255,0.05)",
                                color: selectedCategory === cat ? "#000" : "var(--text-bright)",
                                border: "none",
                                borderRadius: "6px",
                                padding: "4px 12px",
                                fontSize: "0.8rem",
                                fontWeight: "600",
                                cursor: "pointer"
                              }}
                            >
                              {cat}
                            </button>
                          ))}
                        </div>

                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
                          {filteredProducts.map((p) => (
                            <div key={p.id} style={{ background: "rgba(255,255,255,0.03)", padding: "14px", borderRadius: "10px", border: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                              <div>
                                <div style={{ fontWeight: "700", fontSize: "0.95rem" }}>{p.icon} {p.name}</div>
                                <div style={{ color: "var(--accent-cyan)", fontSize: "0.85rem", fontWeight: "600" }}>${p.price}</div>
                              </div>
                              <button
                                className="btn-primary"
                                style={{ padding: "6px 12px", fontSize: "0.78rem" }}
                                onClick={() => addToCart(p)}
                              >
                                + Add to Cart
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Step 2: Cart */}
                    {checkoutStep === "cart" && (
                      <div>
                        {cart.length === 0 ? (
                          <div style={{ padding: "20px", textAlign: "center", color: "var(--text-muted)" }}>Cart is empty. Add products from catalog!</div>
                        ) : (
                          <div>
                            {cart.map((item) => (
                              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border-subtle)" }}>
                                <div>{item.name} (x{item.qty})</div>
                                <div style={{ fontWeight: "700" }}>${item.price * item.qty}</div>
                              </div>
                            ))}

                            <div style={{ marginTop: "16px", display: "flex", gap: "10px" }}>
                              <input
                                type="text"
                                placeholder="Coupon code (e.g. ASWATHI10)"
                                value={coupon}
                                onChange={(e) => setCoupon(e.target.value)}
                                style={{ background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "#fff", padding: "8px 12px", borderRadius: "8px", fontSize: "0.85rem", flex: 1 }}
                              />
                              <button
                                className="btn-secondary"
                                style={{ padding: "8px 14px", fontSize: "0.85rem" }}
                                onClick={() => {
                                  if (coupon.toUpperCase() === "ASWATHI10") {
                                    setDiscountApplied(true);
                                  } else {
                                    alert("Invalid coupon code! Try: ASWATHI10");
                                  }
                                }}
                              >
                                Apply Coupon
                              </button>
                            </div>

                            {discountApplied && (
                              <div style={{ color: "var(--accent-emerald)", fontSize: "0.85rem", marginTop: "8px" }}>
                                🎉 10% Discount Applied (-${discountAmount.toFixed(2)})
                              </div>
                            )}

                            <div style={{ marginTop: "20px", textAlign: "right" }}>
                              <div style={{ fontSize: "1.1rem", fontWeight: "800", color: "var(--text-bright)" }}>
                                Total: ${cartTotal.toFixed(2)}
                              </div>
                              <button
                                className="btn-primary"
                                style={{ marginTop: "12px" }}
                                onClick={() => setCheckoutStep("checkout")}
                              >
                                Proceed to Checkout →
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Step 3: Checkout */}
                    {checkoutStep === "checkout" && (
                      <div style={{ padding: "10px 0" }}>
                        <div style={{ fontSize: "0.95rem", fontWeight: "700", marginBottom: "12px" }}>Select Payment Gateway:</div>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px", marginBottom: "20px" }}>
                          <button className="btn-secondary" style={{ padding: "12px" }} onClick={() => setCheckoutStep("success")}>
                            💳 Stripe
                          </button>
                          <button className="btn-secondary" style={{ padding: "12px" }} onClick={() => setCheckoutStep("success")}>
                            🅿️ PayPal
                          </button>
                          <button className="btn-secondary" style={{ padding: "12px" }} onClick={() => setCheckoutStep("success")}>
                            👛 Internal Wallet
                          </button>
                        </div>
                      </div>
                    )}

                    {/* Step 4: Success */}
                    {checkoutStep === "success" && (
                      <div style={{ padding: "30px", textAlign: "center" }}>
                        <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>✅</div>
                        <div style={{ fontSize: "1.2rem", fontWeight: "800", color: "var(--accent-emerald)" }}>
                          Simulated Payment Completed!
                        </div>
                        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginTop: "8px" }}>
                          Redux state updated, Stripe webhook validated, and order confirmation dispatched.
                        </p>
                        <button
                          className="btn-secondary"
                          style={{ marginTop: "16px", padding: "8px 16px", fontSize: "0.85rem" }}
                          onClick={() => {
                            setCart([]);
                            setCheckoutStep("catalog");
                          }}
                        >
                          Reset E-Commerce Demo
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* MLM Mock Simulator */}
                {project.mockType === "mlm" && (
                  <div className="simulator-container">
                    <div className="sim-header">
                      <span>🌳 Multi-Tier Affiliate Commission Simulator</span>
                      <button
                        className="btn-secondary"
                        style={{ padding: "4px 10px", fontSize: "0.8rem" }}
                        onClick={() => setMetaMaskConnected(!metaMaskConnected)}
                      >
                        {metaMaskConnected ? "🦊 MetaMask Connected" : "Connect MetaMask"}
                      </button>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                      <div>
                        <label style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
                          Direct Referrals (Level 1):
                        </label>
                        <input
                          type="range"
                          min="1"
                          max="20"
                          value={referralCount}
                          onChange={(e) => setReferralCount(Number(e.target.value))}
                          style={{ width: "100%" }}
                        />
                        <div style={{ fontWeight: "700", color: "var(--accent-cyan)", fontSize: "0.9rem" }}>
                          {referralCount} Direct Members
                        </div>
                      </div>

                      <div>
                        <label style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>
                          MLM Plan Package Value ($):
                        </label>
                        <select
                          value={tierPackage}
                          onChange={(e) => setTierPackage(Number(e.target.value))}
                          style={{ background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "#fff", padding: "8px 12px", borderRadius: "8px", width: "100%" }}
                        >
                          <option value={100}>$100 Starter Plan</option>
                          <option value={250}>$250 Pro Plan</option>
                          <option value={500}>$500 Executive Plan</option>
                        </select>
                      </div>
                    </div>

                    {/* Breakdown */}
                    <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                      <div style={{ fontWeight: "700", marginBottom: "10px" }}>Commission Breakdown:</div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", padding: "4px 0" }}>
                        <span>Tier 1 Direct (15%):</span>
                        <span style={{ fontWeight: "700", color: "var(--accent-cyan)" }}>${level1Earnings}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", padding: "4px 0" }}>
                        <span>Tier 2 Team (8%):</span>
                        <span style={{ fontWeight: "700", color: "var(--accent-violet)" }}>${level2Earnings}</span>
                      </div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.88rem", padding: "4px 0" }}>
                        <span>Tier 3 Network (4%):</span>
                        <span style={{ fontWeight: "700", color: "var(--accent-emerald)" }}>${level3Earnings}</span>
                      </div>

                      <div style={{ marginTop: "12px", paddingTop: "12px", borderTop: "1px solid var(--border-subtle)", display: "flex", justifyContent: "space-between", fontSize: "1.05rem", fontWeight: "800" }}>
                        <span>Total Projected Payout:</span>
                        <span style={{ color: "var(--accent-cyan)" }}>${totalMLMEarnings}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* CRM Mock Simulator */}
                {project.mockType === "crm" && (
                  <div className="simulator-container">
                    <div className="sim-header">
                      <span>📊 CRM Dashboard & Role Control Simulator</span>
                      <div style={{ display: "flex", gap: "6px" }}>
                        {["Admin", "Sub-admin", "User"].map((role) => (
                          <button
                            key={role}
                            onClick={() => setRoleView(role)}
                            style={{
                              background: roleView === role ? "var(--accent-violet)" : "rgba(255,255,255,0.05)",
                              color: "#fff",
                              border: "none",
                              borderRadius: "6px",
                              padding: "4px 10px",
                              fontSize: "0.78rem",
                              fontWeight: "600",
                              cursor: "pointer"
                            }}
                          >
                            Role: {role}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <input
                        type="text"
                        placeholder="Search Customer or Deal..."
                        value={searchCustomer}
                        onChange={(e) => setSearchCustomer(e.target.value)}
                        style={{ background: "var(--input-bg)", border: "1px solid var(--input-border)", color: "#fff", padding: "8px 14px", borderRadius: "8px", width: "100%", fontSize: "0.85rem" }}
                      />
                    </div>

                    {/* Table */}
                    <div style={{ overflowX: "auto" }}>
                      <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "0.85rem", textAlign: "left" }}>
                        <thead>
                          <tr style={{ borderBottom: "1px solid var(--border-subtle)", color: "var(--text-muted)" }}>
                            <th style={{ padding: "8px" }}>ID</th>
                            <th style={{ padding: "8px" }}>Customer Name</th>
                            <th style={{ padding: "8px" }}>Deal Status</th>
                            <th style={{ padding: "8px" }}>Deal Value</th>
                            <th style={{ padding: "8px" }}>Access Tier</th>
                          </tr>
                        </thead>
                        <tbody>
                          {crmCustomers.map((cust) => (
                            <tr key={cust.id} style={{ borderBottom: "1px solid rgba(255,255,255,0.03)" }}>
                              <td style={{ padding: "8px", fontFamily: "var(--font-mono)", color: "var(--text-dim)" }}>{cust.id}</td>
                              <td style={{ padding: "8px", fontWeight: "600" }}>{cust.name}</td>
                              <td style={{ padding: "8px" }}>
                                <span style={{ padding: "2px 8px", borderRadius: "6px", fontSize: "0.75rem", background: cust.status === "Closed Won" ? "rgba(16,185,129,0.15)" : "rgba(6,182,212,0.15)", color: cust.status === "Closed Won" ? "#10b981" : "#06b6d4" }}>
                                  {cust.status}
                                </span>
                              </td>
                              <td style={{ padding: "8px", fontWeight: "700" }}>{cust.dealValue}</td>
                              <td style={{ padding: "8px", color: "var(--accent-violet)" }}>{cust.roleAccess}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                )}

                {/* HomeManager Mock Simulator */}
                {project.mockType === "homemanager" && (
                  <div className="simulator-container">
                    <div className="sim-header">
                      <span>🏡 HomeManager Interactive Assistant & Expense Vault</span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: "var(--accent-cyan)", fontSize: "0.85rem", textDecoration: "none", fontWeight: "700" }}
                        >
                          Launch Live App ↗
                        </a>
                      )}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "20px" }}>
                      <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                        <div style={{ fontWeight: "700", color: "var(--text-bright)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                          <span>🤖</span> Home AI Assistant
                        </div>
                        <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "12px" }}>
                          Ask AI about appliance maintenance, energy saving, or home budget tips:
                        </div>
                        <div style={{ background: "rgba(6,182,212,0.1)", border: "1px solid var(--border-cyan)", padding: "10px", borderRadius: "8px", fontSize: "0.82rem", color: "var(--accent-cyan)" }}>
                          "AI Tip: Scheduled HVAC filter replacement reduces energy bill by 8% monthly."
                        </div>
                      </div>

                      <div style={{ background: "rgba(255,255,255,0.03)", padding: "16px", borderRadius: "12px", border: "1px solid var(--border-subtle)" }}>
                        <div style={{ fontWeight: "700", color: "var(--text-bright)", marginBottom: "8px", display: "flex", alignItems: "center", gap: "6px" }}>
                          <span>💰</span> Expense & Warranty Tracker
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                          <span>Monthly Utilities:</span>
                          <span style={{ fontWeight: "700", color: "var(--accent-emerald)" }}>$340.00</span>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", marginBottom: "6px" }}>
                          <span>Refrigerator Warranty:</span>
                          <span style={{ padding: "2px 6px", borderRadius: "4px", background: "rgba(16,185,129,0.15)", color: "#10b981", fontSize: "0.75rem", fontWeight: "700" }}>Active (Expires 2028)</span>
                        </div>
                      </div>
                    </div>

                    <div style={{ textAlign: "center", marginTop: "16px" }}>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                        style={{ padding: "10px 20px", fontSize: "0.88rem" }}
                      >
                        🚀 Explore Full Live HomeManager App
                      </a>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
