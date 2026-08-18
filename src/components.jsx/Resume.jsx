import React, { useState, useEffect } from "react";
import apiClient, { getMediaUrl } from "../utils/apiClient";
import PublicNavbar from "./PublicNavbar";
import PublicFooter from "./PublicFooter";

const Resume = () => {
  const [resumeData, setResumeData] = useState(null);
  const [loading, setLoading] = useState(true);

  const defaultResume = {
    title: "Senior Frontend Engineer Resume",
    file_name: "Aswathi_Senior_Frontend_Developer_Resume.pdf",
    file_size: "237 KB",
    file_path: "/images/resume.pdf",
  };

  useEffect(() => {
    fetchActiveResume();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchActiveResume = async () => {
    setLoading(true);
    try {
      const res = await apiClient.get("/api/resume");
      if (res.data && res.data.status && res.data.data) {
        setResumeData(res.data.data);
      } else if (res.data && res.data.id) {
        setResumeData(res.data);
      } else if (Array.isArray(res.data) && res.data.length > 0) {
        setResumeData(res.data[0]);
      } else {
        setResumeData(defaultResume);
      }
    } catch (err) {
      console.error("Failed to load active resume from API, using fallback:", err);
      setResumeData(defaultResume);
    } finally {
      setLoading(false);
    }
  };

  const activeResume = resumeData || defaultResume;
  const resumeUrl = activeResume.file_path.startsWith("http") || activeResume.file_path.startsWith("/")
    ? getMediaUrl(activeResume.file_path)
    : getMediaUrl(`/${activeResume.file_path}`);

  return (
    <div className="portix-resume-page bg-grid-pattern">
      <style>{`
        .portix-resume-page {
          min-height: 100vh;
          background: var(--bg-primary);
          color: var(--text-light);
          font-family: var(--font-main);
        }

        .portix-resume-container {
          max-width: 1100px;
          margin: 0 auto;
          padding: 60px 40px;
        }

        @media (max-width: 768px) {
          .portix-resume-container {
            padding: 32px 20px;
          }
        }

        .resume-header-editorial-card {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          padding: 36px 44px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 24px;
          box-shadow: var(--shadow-sm);
          margin-bottom: 36px;
        }

        @media (max-width: 768px) {
          .resume-header-editorial-card {
            padding: 24px 20px;
            flex-direction: column;
            align-items: flex-start;
          }
        }

        .resume-headline-h1 {
          font-size: 2rem;
          font-weight: 800;
          font-family: var(--font-display);
          color: var(--text-pure-white);
          margin-bottom: 6px;
        }

        .resume-metadata-strip {
          display: flex;
          align-items: center;
          gap: 14px;
          color: var(--text-muted);
          font-size: 0.9rem;
          font-weight: 600;
          font-family: var(--font-mono);
        }

        .resume-btn-actions {
          display: flex;
          gap: 14px;
          flex-wrap: wrap;
        }

        .pdf-viewer-editorial-box {
          background: var(--bg-card);
          border: 1px solid var(--border-subtle);
          border-radius: 20px;
          overflow: hidden;
          box-shadow: var(--shadow-lg);
          height: 820px;
          display: flex;
          flex-direction: column;
        }

        .pdf-top-bar {
          background: var(--bg-surface-elevated);
          padding: 16px 28px;
          border-bottom: 1px solid var(--border-subtle);
          display: flex;
          justify-content: space-between;
          font-size: 0.85rem;
          font-weight: 700;
          font-family: var(--font-mono);
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-pure-white);
        }
      `}</style>

      <PublicNavbar />

      <main className="portix-resume-container">
        {loading ? (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "var(--text-muted)" }}>
            <h2>Loading Resume...</h2>
          </div>
        ) : (
          <>
            <div className="resume-header-editorial-card">
              <div>
                <span className="telemetry-tag" style={{ color: "var(--accent-purple)", marginBottom: "8px" }}>
                  ✦ VERIFIED CV DOCUMENT
                </span>
                <h1 className="resume-headline-h1">{activeResume.title || "Curriculum Vitae"}</h1>
                <div className="resume-metadata-strip">
                  <span>📄 {activeResume.file_name || "Aswathi_Senior_Frontend_Developer_Resume.pdf"}</span>
                  <span style={{ color: "var(--accent-cyan)" }}>• 4+ Years Experience Document</span>
                </div>
              </div>

              <div className="resume-btn-actions">
                <a
                  href={resumeUrl}
                  download
                  className="btn-editorial-primary"
                  target="_blank"
                  rel="noreferrer"
                  style={{ padding: "12px 24px", fontSize: "0.85rem" }}
                >
                  <span>Download CV</span>
                  <span>📥</span>
                </a>
                <a
                  href={resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-editorial-outline"
                  style={{ padding: "12px 24px", fontSize: "0.85rem" }}
                >
                  <span>Open Tab</span>
                  <span>↗</span>
                </a>
              </div>
            </div>

            {/* EMBEDDED PDF VIEWER */}
            <div className="pdf-viewer-editorial-box">
              <div className="pdf-top-bar">
                <span>📄 Interactive PDF Viewer</span>
                <span>{activeResume.file_name}</span>
              </div>
              <object
                data={resumeUrl}
                type="application/pdf"
                style={{ width: "100%", height: "100%", border: "none" }}
              >
                <iframe
                  src={resumeUrl}
                  title={activeResume.title}
                  style={{ width: "100%", height: "100%", border: "none" }}
                >
                  <div style={{ padding: "60px 20px", textAlign: "center", color: "var(--text-pure-white)" }}>
                    <h3>Unable to embed PDF document preview directly</h3>
                    <p style={{ color: "var(--text-muted)", margin: "10px 0 20px 0" }}>
                      Click below to view or download the resume PDF file.
                    </p>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-editorial-primary"
                    >
                      ↗ Open Resume PDF
                    </a>
                  </div>
                </iframe>
              </object>
            </div>
          </>
        )}
      </main>

      <PublicFooter />
    </div>
  );
};

export default Resume;
