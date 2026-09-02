import React, { useState } from "react";
import { personalInfo } from "../data/portfolioData";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

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
      }, 800);
    }
  };

  return (
    <section id="contact" className="contact-editorial" style={{ padding: "100px 0" }}>
      <style>{`
        .contact-editorial-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: flex-start;
        }

        .contact-large-heading {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 4vw, 3.2rem);
          font-weight: 700;
          color: var(--text-main);
          line-height: 1.15;
          margin-bottom: 16px;
        }

        .contact-sub-paragraph {
          font-size: 1.05rem;
          color: var(--text-sub);
          line-height: 1.75;
          margin-bottom: 36px;
        }

        .contact-direct-links {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .contact-link-block {
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-line);
        }

        .contact-link-label {
          font-family: var(--font-mono);
          font-size: 0.78rem;
          color: var(--accent-terracotta);
          font-weight: 700;
          letter-spacing: 0.05em;
          margin-bottom: 4px;
        }

        .contact-link-value {
          font-size: 1.05rem;
          font-weight: 600;
          color: var(--text-main);
          text-decoration: none;
        }

        .contact-link-value:hover {
          color: var(--accent-terracotta);
        }

        .form-editorial-box {
          background: var(--bg-card);
          border: 1px solid var(--border-line);
          border-radius: 6px;
          padding: 36px;
        }

        .form-field-group {
          margin-bottom: 20px;
        }

        .form-field-label {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 8px;
        }

        .form-input-field, .form-textarea-field {
          width: 100%;
          background: var(--bg-primary);
          border: 1px solid var(--border-line);
          border-radius: 4px;
          padding: 12px 14px;
          color: var(--text-main);
          font-family: var(--font-sans);
          font-size: 0.95rem;
          outline: none;
          transition: border-color 0.2s ease;
        }

        .form-input-field:focus, .form-textarea-field:focus {
          border-color: var(--accent-terracotta);
        }

        .field-err-msg {
          color: #b91c1c;
          font-size: 0.8rem;
          margin-top: 4px;
        }

        @media (max-width: 900px) {
          .contact-editorial-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <div className="container">
        <div className="section-num">08 / Contact</div>

        <div className="contact-editorial-grid">
          {/* Left Column info */}
          <div>
            <h2 className="contact-large-heading">
              Have something interesting in mind?
            </h2>
            <p className="contact-sub-paragraph">
              Whether it's a new product, a frontend challenge, or simply a conversation about development — I'd love to hear from you.
            </p>

            <div className="contact-direct-links">
              <div className="contact-link-block">
                <div className="contact-link-label">EMAIL</div>
                <a href={`mailto:${personalInfo.email}`} className="contact-link-value">
                  {personalInfo.email}
                </a>
              </div>

              <div className="contact-link-block">
                <div className="contact-link-label">PHONE</div>
                <a href={`tel:${personalInfo.phone}`} className="contact-link-value">
                  +91 {personalInfo.phone}
                </a>
              </div>

              <div className="contact-link-block">
                <div className="contact-link-label">LINKEDIN</div>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link-value">
                  {personalInfo.linkedinDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Right Column simple form */}
          <div className="form-editorial-box">
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", fontWeight: "700", marginBottom: "20px", color: "var(--text-main)" }}>
              Send a direct message
            </h3>

            {submittedSuccess && (
              <div style={{ background: "var(--accent-terracotta-light)", border: "1px solid var(--accent-terracotta)", color: "var(--accent-terracotta)", padding: "14px", borderRadius: "4px", fontSize: "0.9rem", marginBottom: "20px" }}>
                Thank you! Your message has been sent. Aswathi will respond to your email.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-field-group">
                <label className="form-field-label">Your Name *</label>
                <input
                  type="text"
                  className="form-input-field"
                  placeholder="Jane Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                {errors.name && <div className="field-err-msg">{errors.name}</div>}
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Email Address *</label>
                <input
                  type="email"
                  className="form-input-field"
                  placeholder="jane@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
                {errors.email && <div className="field-err-msg">{errors.email}</div>}
              </div>

              <div className="form-field-group">
                <label className="form-field-label">Message *</label>
                <textarea
                  rows="4"
                  className="form-textarea-field"
                  placeholder="Tell me about your project or request..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
                {errors.message && <div className="field-err-msg">{errors.message}</div>}
              </div>

              <button type="submit" className="btn-primary" style={{ width: "100%" }} disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
