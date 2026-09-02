import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "40px 20px"
      }}
    >
      <div style={{ fontSize: "5rem", fontWeight: "800", color: "var(--accent-cyan)", fontFamily: "var(--font-mono)" }}>
        404
      </div>
      <h1 style={{ fontSize: "2rem", color: "var(--text-bright)", marginBottom: "16px" }}>
        Page Not Found
      </h1>
      <p style={{ color: "var(--text-muted)", maxWidth: "480px", marginBottom: "32px" }}>
        The route you requested could not be located. Return to Aswathi A's React JS Developer portfolio home page.
      </p>
      <Link to="/" className="btn-primary">
        🏠 Back to Home Page
      </Link>
    </div>
  );
};

export default NotFound;
