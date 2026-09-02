import React, { useState, useEffect } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "3px",
        width: `${scrollProgress}%`,
        background: "linear-gradient(90deg, #06b6d4, #8b5cf6, #3b82f6)",
        zIndex: 9999,
        transition: "width 0.1s ease-out",
        boxShadow: "0 0 10px rgba(6, 182, 212, 0.8)"
      }}
    />
  );
};

export default ScrollProgress;
