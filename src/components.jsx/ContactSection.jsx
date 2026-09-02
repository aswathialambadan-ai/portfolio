import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2200);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) {
      errs.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Invalid email format";
    }
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmittedSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      }, 700);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <style>{`
        .contact-section {
          padding: 100px 0 110px 0;
          position: relative;
          overflow: hidden;
        }

        /* Ambient Glow Backdrop */
        .contact-ambient-glow {
          position: absolute;
          bottom: -150px;
          right: -100px;
          width: 550px;
          height: 550px;
          background: radial-gradient(circle, var(--accent-emerald-glow) 0%, rgba(0,0,0,0) 70%);
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 52px;
          align-items: flex-start;
          position: relative;
          z-index: 1;
        }

        .contact-heading-main {
          font-family: var(--font-display);
          font-size: clamp(2.4rem, 4.5vw, 3.6rem);
          font-weight: 800;
          color: var(--text-bright);
          line-height: 1.12;
          margin-bottom: 16px;
          letter-spacing: -0.02em;
        }

        .contact-heading-gradient {
          background: linear-gradient(135deg, var(--accent-emerald) 0%, var(--accent-cyan) 60%, var(--accent-indigo) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-pitch-subtext {
          font-size: 1.05rem;
          color: var(--text-muted);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 560px;
        }

        /* Interactive Contact Cards */
        .contact-cards-container {
          display: flex;
          flex-direction: column;
          gap: 14px;
          margin-bottom: 28px;
        }

        .contact-card-item {
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 16px;
          padding: 18px 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          transition: all 0.25s ease;
        }

        .contact-card-item:hover {
          border-color: var(--accent-emerald);
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
        }

        .contact-card-left {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-card-icon {
          font-size: 1.3rem;
          padding: 10px;
          border-radius: 12px;
          background: rgba(217, 119, 6, 0.12);
          border: 1px solid var(--border-emerald);
          color: var(--accent-emerald);
          line-height: 1;
        }

        .contact-card-label {
          font-size: 0.75rem;
          font-family: var(--font-mono);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          color: var(--text-dim);
          font-weight: 700;
          margin-bottom: 2px;
        }

        .contact-card-value {
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--text-bright);
          text-decoration: none;
          word-break: break-all;
        }

        .contact-card-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .contact-action-btn {
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-subtle);
          color: var(--text-bright);
          padding: 7px 12px;
          border-radius: 8px;
          font-size: 0.78rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          white-space: nowrap;
        }

        .contact-action-btn:hover {
          border-color: var(--accent-emerald);
          color: var(--accent-emerald);
          background: rgba(217, 119, 6, 0.1);
        }

        .contact-action-btn.copied {
          background: rgba(16, 185, 129, 0.15);
          border-color: #10b981;
          color: #10b981;
        }

        /* Location Pill */
        .location-pill-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          border-radius: 9999px;
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          color: var(--text-muted);
          font-size: 0.82rem;
          font-weight: 600;
        }

        /* Glassmorphic Contact Form Card */
        .glass-form-card {
          background: var(--bg-dark-surface);
          border: 1px solid var(--border-medium);
          border-radius: 24px;
          padding: 32px;
          box-shadow: var(--shadow-lg), 0 0 35px rgba(0, 0, 0, 0.4);
          position: relative;
          transition: border-color 0.3s ease;
        }

        .glass-form-card:hover {
          border-color: var(--border-emerald);
        }

        .form-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }

        .form-card-title {
          font-family: var(--font-display);
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--text-bright);
        }

        .form-card-tag {
          font-size: 0.74rem;
          font-family: var(--font-mono);
          color: #10b981;
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid rgba(16, 185, 129, 0.3);
          padding: 4px 10px;
          border-radius: 6px;
          font-weight: 700;
        }

        .input-group-field {
          margin-bottom: 20px;
        }

        .input-field-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: var(--text-bright);
          margin-bottom: 8px;
        }

        .input-control-styled, .textarea-control-styled {
          width: 100%;
          background: var(--bg-dark-card);
          border: 1px solid var(--border-subtle);
          border-radius: 12px;
          padding: 12px 16px;
          color: var(--text-bright);
          font-family: var(--font-main);
          font-size: 0.92rem;
          outline: none;
          transition: all 0.25s ease;
        }

        .input-control-styled:focus, .textarea-control-styled:focus {
          border-color: var(--accent-emerald);
          box-shadow: 0 0 12px var(--accent-emerald-glow);
          background: var(--bg-dark-surface);
        }

        .input-control-styled::placeholder, .textarea-control-styled::placeholder {
          color: var(--text-dim);
        }

        .error-message-text {
          color: #ef4444;
          font-size: 0.78rem;
          margin-top: 6px;
          font-weight: 600;
        }

        .success-banner-box {
          background: rgba(16, 185, 129, 0.12);
          border: 1px solid #10b981;
          color: #10b981;
          padding: 14px 16px;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 700;
          margin-bottom: 24px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 44px;
          }
        }

        @media (max-width: 640px) {
          .contact-card-item {
            flex-direction: column;
            align-items: flex-start;
          }
          .contact-card-actions {
            width: 100%;
            justify-content: flex-start;
          }
          .glass-form-card {
            padding: 24px;
          }
        }
      `}</style>

      <div className="contact-ambient-glow"></div>

      <div className="container">
        <div className="section-tag">✨ GET IN TOUCH</div>

        <div className="contact-grid">
          {/* Left Column: Direct Contact Hub */}
          <div>
            <h2 className="contact-heading-main">
              Let's Build Something <br />
              <span className="contact-heading-gradient">Exceptional Together</span>
            </h2>

            <p className="contact-pitch-subtext">
              Whether you're hiring for Senior React or Full-Stack roles, have a frontend architecture project, or simply want to connect — my inbox is always open.
            </p>

            {/* Interactive Contact Cards */}
            <div className="contact-cards-container">
              {/* Card 1: Email */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <div className="contact-card-icon">✉️</div>
                  <div>
                    <div className="contact-card-label">EMAIL ADDRESS</div>
                    <a href={`mailto:${personalInfo.email}`} className="contact-card-value">
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-card-actions">
                  <button
                    onClick={copyEmailToClipboard}
                    className={`contact-action-btn ${copiedEmail ? "copied" : ""}`}
                  >
                    {copiedEmail ? "✓ Copied!" : "📋 Copy"}
                  </button>

                  <a href={`mailto:${personalInfo.email}`} className="contact-action-btn">
                    📧 Mail
                  </a>
                </div>
              </div>

              {/* Card 2: Phone & WhatsApp */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <div className="contact-card-icon">📞</div>
                  <div>
                    <div className="contact-card-label">PHONE & WHATSAPP</div>
                    <a href={`tel:${personalInfo.phone}`} className="contact-card-value">
                      +91 {personalInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-card-actions">
                  <a href={`tel:${personalInfo.phone}`} className="contact-action-btn">
                    📱 Call
                  </a>
                  <a
                    href={`https://wa.me/91${personalInfo.phone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    💬 WhatsApp
                  </a>
                </div>
              </div>

              {/* Card 3: LinkedIn */}
              <div className="contact-card-item">
                <div className="contact-card-left">
                  <div className="contact-card-icon">🌐</div>
                  <div>
                    <div className="contact-card-label">LINKEDIN PROFILE</div>
                    <a
                      href={personalInfo.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-card-value"
                    >
                      {personalInfo.linkedinDisplay}
                    </a>
                  </div>
                </div>

                <div className="contact-card-actions">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-action-btn"
                  >
                    🔗 Connect
                  </a>
                </div>
              </div>
            </div>

            {/* Location Badge */}
            <div className="location-pill-item">
              <span>📍 Based in Kerala, India</span>
              <span style={{ color: "var(--border-medium)" }}>|</span>
              <span style={{ color: "var(--accent-emerald)" }}>Open for Remote & Onsite Roles Worldwide</span>
            </div>
          </div>

          {/* Right Column: Glassmorphic Message Form */}
          <div className="glass-form-card">
            <div className="form-header-row">
              <h3 className="form-card-title">Send a Direct Message</h3>
              <span className="form-card-tag">⚡ Responds in &lt; 24h</span>
            </div>

            {submittedSuccess && (
              <div className="success-banner-box">
                <span>🎉 Thank you! Your message has been sent successfully. Aswathi will get back to you shortly.</span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="input-group-field">
                <label className="input-field-label">Your Name *</label>
                <input
                  type="text"
                  className="input-control-styled"
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <div className="error-message-text">{errors.name}</div>}
              </div>

              <div className="input-group-field">
                <label className="input-field-label">Email Address *</label>
                <input
                  type="email"
                  className="input-control-styled"
                  placeholder="sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <div className="error-message-text">{errors.email}</div>}
              </div>

              <div className="input-group-field">
                <label className="input-field-label">Message *</label>
                <textarea
                  rows="4"
                  className="textarea-control-styled"
                  placeholder="Tell me about your project, role, or inquiry..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <div className="error-message-text">{errors.message}</div>}
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%", padding: "14px", marginTop: "8px" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending Message..." : "🚀 Send Message Now"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
