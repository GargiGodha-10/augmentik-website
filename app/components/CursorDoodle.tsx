"use client";

import { useEffect, useRef } from "react";

export default function CursorDoodle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);

    type Particle = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    };

    const particles: Particle[] = [];

    let mouseX = -1000;
    let mouseY = -1000;
    let lastX = -1000;
    let lastY = -1000;

    const handlePointerMove = (clientX: number, clientY: number) => {
      mouseX = clientX;
      mouseY = clientY;

      // Only spawn particles when the cursor actually moved a bit,
      // so it doesn't flood particles when the mouse is idle.
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 2) {
        // Spawn a few particles along the movement path for a smoother trail
        const steps = Math.min(Math.floor(dist / 4), 6);
        for (let i = 0; i < steps; i++) {
          const t = i / steps;
          const px = lastX + dx * t;
          const py = lastY + dy * t;

          particles.push({
            x: px + (Math.random() - 0.5) * 6,
            y: py + (Math.random() - 0.5) * 6,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6 - 0.2,
            size: Math.random() * 2.5 + 1,
            life: 0,
            maxLife: Math.random() * 40 + 40,
          });
        }

        // Cap particle count so it doesn't grow unbounded
        if (particles.length > 300) {
          particles.splice(0, particles.length - 300);
        }

        lastX = mouseX;
        lastY = mouseY;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      handlePointerMove(e.clientX, e.clientY);
    };

    const onTouchMove = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (touch) handlePointerMove(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove);

    let animationId: number;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];

        p.life++;
        p.x += p.vx;
        p.y += p.vy;

        const progress = p.life / p.maxLife;

        if (progress >= 1) {
          particles.splice(i, 1);
          continue;
        }

        const alpha = 1 - progress;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * (1 - progress * 0.5), 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 132, 252, ${alpha * 0.6})`;
        ctx.shadowBlur = 8;
        ctx.shadowColor = "rgba(168, 85, 247, 0.8)";
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] w-full h-full"
    />
  );
}