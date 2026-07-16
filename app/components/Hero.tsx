"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

function CursorDoodle() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const resize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
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
      const rect = canvas.getBoundingClientRect();
      mouseX = clientX - rect.left;
      mouseY = clientY - rect.top;

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
      className="pointer-events-none absolute inset-0 z-[2] w-full h-full"
    />
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-32">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* ================= CURSOR DOODLE TRAIL ================= */}
      <CursorDoodle />

      {/* ================= FOREGROUND ================= */}
      <div
        id="hero-content"
        className="relative z-10 max-w-7xl mx-auto px-8 pt-11 flex flex-col lg:flex-row items-center justify-between gap-20"
      >
        {/* Left Side */}
        <div className="max-w-2xl animate-fade">
          <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-5">
            AI WORKFORCE PLATFORM
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Empowering
            <br />
            Businesses with
            <br />
            Smarter Execution
          </h1>

          <p className="text-gray-300 text-xl mt-7 leading-9">
            Augmentik helps organizations streamline hiring, discover the right
            talent, and simplify workforce management through intelligent
            automation—all from one unified platform.
          </p>

          <div className="flex gap-6 mt-12">
            <Link href="/book-demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,.5)]"
              >
                Book a Demo
              </motion.button>
            </Link>

            <Link
              href="/explore-platform"
              className="border border-gray-500 hover:bg-white hover:text-black transition duration-300 px-9 py-4 rounded-xl font-semibold"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}