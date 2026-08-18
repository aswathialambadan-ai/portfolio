import React, { useEffect, useRef } from "react";

const InteractiveCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement.offsetWidth || 500);
    let height = (canvas.height = canvas.parentElement.offsetHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || 500;
      height = canvas.height = canvas.parentElement.offsetHeight || 500;
    };
    window.addEventListener("resize", handleResize);

    // Mouse physics tracking
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      active: false,
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
      mouse.active = false;
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // Generate 3D Particle Sphere Points
    const numPoints = 140;
    const radius = Math.min(width, height) * 0.35;
    const points = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = Math.acos(2 * Math.random() - 1);
      const phi = 2 * Math.PI * Math.random();
      points.push({
        x: radius * Math.sin(theta) * Math.cos(phi),
        y: radius * Math.sin(theta) * Math.sin(phi),
        z: radius * Math.cos(theta),
        originX: radius * Math.sin(theta) * Math.cos(phi),
        originY: radius * Math.sin(theta) * Math.sin(phi),
        originZ: radius * Math.cos(theta),
      });
    }

    let angleX = 0.002;
    let angleY = 0.003;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const rotY = (mouse.x - width / 2) * 0.00008 + angleY;
      const rotX = (mouse.y - height / 2) * 0.00008 + angleX;

      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      // Render connecting wireframe lines & point nodes
      ctx.strokeStyle = "rgba(139, 92, 246, 0.15)";
      ctx.lineWidth = 0.8;

      const projectedPoints = [];

      for (let i = 0; i < points.length; i++) {
        const p = points[i];

        // 3D Rotation Math
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.z * cosY + p.x * sinY;
        let y1 = p.y * cosX - z1 * sinX;
        let z2 = z1 * cosX + p.y * sinX;

        p.x = x1;
        p.y = y1;
        p.z = z2;

        // Perspective Projection
        const fov = 350;
        const scale = fov / (fov + z2);
        const projX = width / 2 + x1 * scale;
        const projY = height / 2 + y1 * scale;

        projectedPoints.push({ x: projX, y: projY, scale, z: z2 });
      }

      const isLight = document.documentElement.getAttribute("data-theme") === "light";

      // Draw connection lines between close points
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const p1 = projectedPoints[i];
          const p2 = projectedPoints[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 75) {
            const alpha = (1 - dist / 75) * (isLight ? 0.45 : 0.25) * p1.scale;
            ctx.beginPath();
            ctx.strokeStyle = isLight ? `rgba(109, 40, 217, ${alpha})` : `rgba(168, 85, 247, ${alpha})`;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw particle node dots
      for (let i = 0; i < projectedPoints.length; i++) {
        const p = projectedPoints[i];
        const pointRadius = Math.max(1, 2.5 * p.scale);
        const alpha = Math.min(1, Math.max(0.2, (p.z + radius) / (2 * radius)));

        ctx.beginPath();
        ctx.arc(p.x, p.y, pointRadius, 0, Math.PI * 2);
        ctx.fillStyle = i % 5 === 0 
          ? (isLight ? `rgba(2, 132, 199, ${alpha})` : `rgba(56, 189, 248, ${alpha})`)
          : (isLight ? `rgba(124, 58, 237, ${alpha})` : `rgba(168, 85, 247, ${alpha})`);
        ctx.fill();

        // Subtle glowing outer halo for key nodes
        if (i % 8 === 0) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, pointRadius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? `rgba(124, 58, 237, ${alpha * 0.25})` : `rgba(139, 92, 246, ${alpha * 0.15})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      if (canvas) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "auto",
      }}
    />
  );
};

export default InteractiveCanvas;
