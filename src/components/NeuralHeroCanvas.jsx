import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export function NeuralHeroCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes configuration
    const nodeCount = Math.min(Math.floor((width * height) / 14000), 55);
    const nodes = [];
    const mouse = { x: -1000, y: -1000, radius: 140 };

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2 + 1.5,
        baseAlpha: Math.random() * 0.5 + 0.3,
        color: Math.random() > 0.3 ? "#ff6b35" : "#00f2fe",
      });
    }

    // Pulses moving along synapses
    const pulses = [];
    const createPulse = (from, to, color) => {
      if (pulses.length > 12) return;
      pulses.push({
        from,
        to,
        progress: 0,
        speed: 0.015 + Math.random() * 0.02,
        color,
      });
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Animation Loop with GSAP Ticker
    const tick = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        n.x += n.vx;
        n.y += n.vy;

        // Bounce on boundaries
        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        // Mouse interaction
        const dxMouse = mouse.x - n.x;
        const dyMouse = mouse.y - n.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < mouse.radius) {
          const force = (mouse.radius - distMouse) / mouse.radius;
          n.x -= (dxMouse / distMouse) * force * 1.5;
          n.y -= (dyMouse / distMouse) * force * 1.5;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.globalAlpha = n.baseAlpha;
        ctx.shadowBlur = 10;
        ctx.shadowColor = n.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw synaptic connections
      const maxDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = a.color;
            ctx.globalAlpha = alpha;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Chance to spawn an energetic pulse
            if (Math.random() < 0.001) {
              createPulse(a, b, a.color);
            }
          }
        }

        // Connect to mouse cursor
        const dxM = mouse.x - nodes[i].x;
        const dyM = mouse.y - nodes[i].y;
        const distM = Math.sqrt(dxM * dxM + dyM * dyM);
        if (distM < mouse.radius) {
          const alphaM = (1 - distM / mouse.radius) * 0.45;
          ctx.beginPath();
          ctx.moveTo(nodes[i].x, nodes[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = "#ff6b35";
          ctx.globalAlpha = alphaM;
          ctx.lineWidth = 1.2;
          ctx.stroke();
        }
      }

      // Update and draw pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        p.progress += p.speed;

        if (p.progress >= 1) {
          pulses.splice(i, 1);
          continue;
        }

        const px = p.from.x + (p.to.x - p.from.x) * p.progress;
        const py = p.from.y + (p.to.y - p.from.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = 0.8;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      ctx.globalAlpha = 1;
    };

    gsap.ticker.add(tick);

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
