import React, { useState } from "react";
import { motion } from "framer-motion";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("aswathi.dev@example.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <div className="aswathi-page-root bg-grid-pattern">
      <PublicNavbar />

      <main className="section-container">
        <motion.div
          className="contact-cta-card"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <span className="telemetry-tag" style={{ color: "var(--accent-purple)", marginBottom: "16px" }}>
            {"// INITIATE CONNECTION"}
          </span>
          <h1 className="editorial-giant-title" style={{ fontSize: "clamp(2.2rem, 5vw, 3.8rem)", marginBottom: "16px" }}>
            LET'S BUILD SOMETHING<br />
            <span className="editorial-stroke-text">EXCEPTIONAL TOGETHER.</span>
          </h1>
          <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto 32px auto", lineHeight: 1.7 }}>
            Reach out directly for senior frontend engineering opportunities, web architecture consulting, or project collaborations.
          </p>

          <div style={{ display: "flex", justifyContent: "center", gap: "16px", flexWrap: "wrap", margin: "32px 0" }}>
            <button onClick={copyEmailToClipboard} className="btn-editorial-outline">
              <span>✉ aswathi.dev@example.com</span>
              <span style={{ fontSize: "0.75rem", color: "var(--accent-purple)", fontWeight: 700 }}>
                {copiedEmail ? "(Copied to Clipboard!)" : "(Copy Email)"}
              </span>
            </button>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn-editorial-outline">
              <span>🐙 GitHub Profile</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="btn-editorial-outline">
              <span>💼 LinkedIn Profile</span>
            </a>
          </div>

          <form className="quick-form" onSubmit={handleContactSubmit}>
            <input
              type="text"
              required
              placeholder="Your Name / Organization"
              className="form-input"
            />
            <input
              type="email"
              required
              placeholder="Your Email Address"
              className="form-input"
            />
            <textarea
              required
              rows="4"
              placeholder="Your Message, Inquiry, or Role Details..."
              className="form-input"
              style={{ resize: "none" }}
            ></textarea>
            <button type="submit" className="btn-editorial-primary" style={{ justifyContent: "center" }}>
              {formSubmitted ? "TRANSMISSION SENT SUCCESSFULLY ✨" : "SEND DIRECT MESSAGE →"}
            </button>
          </form>
        </motion.div>
      </main>

      <PublicFooter />
    </div>
  );
};

export default Contact;
