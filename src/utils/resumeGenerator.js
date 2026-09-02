import jsPDF from "jspdf";
import { personalInfo, experienceData, projectsData, educationData, skillsCategories, professionalSkills } from "../data/portfolioData";

export const generateResumePDF = () => {
  const doc = new jsPDF({
    unit: "mm",
    format: "a4"
  });

  const primaryColor = [15, 23, 42]; // Dark slate #0f172a
  const accentColor = [124, 58, 237]; // Electric purple #7c3aed
  const textColor = [51, 65, 85]; // Slate 700 #334155
  const lightBg = [248, 250, 252]; // Slate 50

  let y = 18;

  // Header Banner Background
  doc.setFillColor(...lightBg);
  doc.rect(0, 0, 210, 42, "F");

  // Name
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(...primaryColor);
  doc.text(personalInfo.name, 15, y);

  // Role
  doc.setFontSize(12);
  doc.setTextColor(...accentColor);
  doc.text(`${personalInfo.role}  •  ${personalInfo.experienceYears} Experience`, 15, y + 7);

  // Contact Info right aligned / inline
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...textColor);
  const contactLine = `Email: ${personalInfo.email}  |  Phone: +91 ${personalInfo.phone}  |  Location: ${personalInfo.location}`;
  doc.text(contactLine, 15, y + 14);
  doc.text(`LinkedIn: ${personalInfo.linkedinDisplay}`, 15, y + 19);

  y = 48;

  // Section Divider Line
  const addSectionHeader = (title) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(12);
    doc.setTextColor(...accentColor);
    doc.text(title.toUpperCase(), 15, y);
    y += 2;
    doc.setDrawColor(...accentColor);
    doc.setLineWidth(0.5);
    doc.line(15, y, 195, y);
    y += 6;
  };

  // Professional Summary
  addSectionHeader("Professional Summary");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9.5);
  doc.setTextColor(...textColor);
  const splitSummary = doc.splitTextToSize(personalInfo.summary, 180);
  doc.text(splitSummary, 15, y);
  y += splitSummary.length * 5 + 4;

  // Professional Experience
  addSectionHeader("Professional Experience");
  experienceData.forEach((exp) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.setTextColor(...primaryColor);
    doc.text(`${exp.role} — ${exp.company}`, 15, y);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(100, 116, 139);
    doc.text(`${exp.period} | ${exp.location}`, 195, y, { align: "right" });
    y += 6;

    exp.highlights.forEach((h) => {
      doc.setTextColor(...textColor);
      const splitH = doc.splitTextToSize(`•  ${h}`, 175);
      doc.text(splitH, 18, y);
      y += splitH.length * 4.5;
    });
    y += 3;
  });

  // Projects
  addSectionHeader("Key Projects (Bpract Software Solutions LLP)");
  projectsData.forEach((proj) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(...primaryColor);
    doc.text(proj.title, 15, y);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(...accentColor);
    doc.text(`Tech: ${proj.technologies.join(", ")}`, 195, y, { align: "right" });
    y += 5;

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(...textColor);
    const splitDesc = doc.splitTextToSize(proj.shortDescription, 180);
    doc.text(splitDesc, 15, y);
    y += splitDesc.length * 4 + 2;
  });

  // Check page height limit before skills
  if (y > 230) {
    doc.addPage();
    y = 20;
  }

  // Technical Skills
  addSectionHeader("Technical Skills & Expertise");
  doc.setFontSize(8.5);
  skillsCategories.forEach((cat) => {
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...primaryColor);
    doc.text(`${cat.title}:`, 15, y);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(...textColor);
    const skillListStr = cat.skills.join(", ");
    const splitSkills = doc.splitTextToSize(skillListStr, 140);
    doc.text(splitSkills, 55, y);
    y += Math.max(splitSkills.length * 4.5, 5);
  });

  y += 3;
  if (y > 250) {
    doc.addPage();
    y = 20;
  }

  // Education
  addSectionHeader("Education");
  educationData.forEach((edu) => {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...primaryColor);
    doc.text(`${edu.degree} — ${edu.institution}`, 15, y);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(100, 116, 139);
    doc.text(`${edu.period} | ${edu.location}`, 195, y, { align: "right" });
    y += 5;
  });

  y += 2;
  // Professional Traits
  addSectionHeader("Professional Attributes");
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(...textColor);
  const traitsStr = professionalSkills.map(s => s.name).join("  •  ");
  doc.text(traitsStr, 15, y);

  // Save PDF
  doc.save("Aswathi_A_React_JS_Developer_Resume.pdf");
};
