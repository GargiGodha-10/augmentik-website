"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Users, Database, Target, Headset, ShieldCheck } from "lucide-react";

function SpaceBackground() {
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

    type Star = {
      x: number;
      y: number;
      radius: number;
      baseAlpha: number;
      twinkleSpeed: number;
      twinklePhase: number;
      color: string;
      driftSpeed: number;
    };

    const starColors = ["255,255,255", "220,230,255", "255,244,214", "200,215,255"];

    const layers: { stars: Star[]; speed: number }[] = [
      { stars: [], speed: 0.008 },
      { stars: [], speed: 0.02 },
      { stars: [], speed: 0.045 },
    ];

    const starCounts = [140, 90, 45];

    layers.forEach((layer, i) => {
      for (let n = 0; n < starCounts[i]; n++) {
        layer.stars.push({
          x: Math.random() * width,
          y: Math.random() * height,
          radius: i === 2 ? Math.random() * 1.4 + 0.8 : Math.random() * 1 + 0.3,
          baseAlpha: Math.random() * 0.5 + 0.4,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: starColors[Math.floor(Math.random() * starColors.length)],
          driftSpeed: layer.speed,
        });
      }
    });

    type Nebula = {
      x: number;
      y: number;
      r: number;
      color: string;
      vx: number;
      vy: number;
      pulseSpeed: number;
      pulsePhase: number;
    };

    const nebulae: Nebula[] = [
      { x: width * 0.2, y: height * 0.3, r: 320, color: "124,58,237", vx: 0.02, vy: 0.008, pulseSpeed: 0.0025, pulsePhase: 0 },
      { x: width * 0.75, y: height * 0.6, r: 380, color: "192,38,211", vx: -0.015, vy: -0.01, pulseSpeed: 0.002, pulsePhase: 2 },
      { x: width * 0.5, y: height * 0.15, r: 260, color: "79,70,229", vx: 0.01, vy: 0.015, pulseSpeed: 0.003, pulsePhase: 4 },
    ];

    type Meteor = {
      x: number;
      y: number;
      vx: number;
      vy: number;
      length: number;
      life: number;
      maxLife: number;
      active: boolean;
    };

    const meteor: Meteor = { x: 0, y: 0, vx: 0, vy: 0, length: 0, life: 0, maxLife: 0, active: false };
    let nextMeteorAt = performance.now() + Math.random() * 4000 + 2000;

    const spawnMeteor = () => {
      const startX = Math.random() * width * 0.6 + width * 0.2;
      const startY = -20;
      const angle = (Math.random() * 20 + 55) * (Math.PI / 180);
      const speed = Math.random() * 9 + 7;

      meteor.x = startX;
      meteor.y = startY;
      meteor.vx = Math.cos(angle) * speed;
      meteor.vy = Math.sin(angle) * speed;
      meteor.length = Math.random() * 80 + 60;
      meteor.life = 0;
      meteor.maxLife = 60;
      meteor.active = true;
    };

    let animationId: number;

    const render = (time: number) => {
      const bg = ctx.createLinearGradient(0, 0, 0, height);
      bg.addColorStop(0, "#0a0614");
      bg.addColorStop(0.5, "#120a24");
      bg.addColorStop(1, "#0d0620");
      ctx.fillStyle = bg;
      ctx.fillRect(0, 0, width, height);

      ctx.globalCompositeOperation = "lighter";
      nebulae.forEach((neb) => {
        neb.x += neb.vx;
        neb.y += neb.vy;
        neb.pulsePhase += neb.pulseSpeed;

        if (neb.x < -neb.r) neb.x = width + neb.r;
        if (neb.x > width + neb.r) neb.x = -neb.r;
        if (neb.y < -neb.r) neb.y = height + neb.r;
        if (neb.y > height + neb.r) neb.y = -neb.r;

        const pulse = 0.15 + Math.sin(neb.pulsePhase) * 0.05;
        const grad = ctx.createRadialGradient(neb.x, neb.y, 0, neb.x, neb.y, neb.r);
        grad.addColorStop(0, `rgba(${neb.color}, ${pulse})`);
        grad.addColorStop(1, `rgba(${neb.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(neb.x, neb.y, neb.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";

      layers.forEach((layer) => {
        layer.stars.forEach((star) => {
          star.y += star.driftSpeed;
          if (star.y > height + 2) {
            star.y = -2;
            star.x = Math.random() * width;
          }

          star.twinklePhase += star.twinkleSpeed;
          const twinkle = (Math.sin(star.twinklePhase) + 1) / 2;
          const alpha = star.baseAlpha * (0.5 + twinkle * 0.5);

          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${star.color}, ${alpha})`;
          ctx.fill();

          if (star.radius > 1.3) {
            ctx.beginPath();
            ctx.arc(star.x, star.y, star.radius * 3, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${star.color}, ${alpha * 0.08})`;
            ctx.fill();
          }
        });
      });

      if (!meteor.active && time > nextMeteorAt) {
        spawnMeteor();
      }

      if (meteor.active) {
        meteor.x += meteor.vx;
        meteor.y += meteor.vy;
        meteor.life++;

        const progress = meteor.life / meteor.maxLife;
        const fade = 1 - progress;

        const tailX = meteor.x - meteor.vx * (meteor.length / 10);
        const tailY = meteor.y - meteor.vy * (meteor.length / 10);

        const grad = ctx.createLinearGradient(meteor.x, meteor.y, tailX, tailY);
        grad.addColorStop(0, `rgba(255,255,255,${fade})`);
        grad.addColorStop(1, "rgba(255,255,255,0)");

        ctx.strokeStyle = grad;
        ctx.lineWidth = 2;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(meteor.x, meteor.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(meteor.x, meteor.y, 1.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${fade})`;
        ctx.fill();

        if (meteor.life >= meteor.maxLife || meteor.y > height + 50 || meteor.x > width + 50) {
          meteor.active = false;
          nextMeteorAt = time + Math.random() * 6000 + 3000;
        }
      }

      animationId = requestAnimationFrame(render);
    };

    animationId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
}

const stats = [
  { icon: Users, value: "10K+", label: "Happy Clients" },
  { icon: Database, value: "2M+", label: "Profiles Managed" },
  { icon: Target, value: "98%", label: "Accuracy Rate" },
  { icon: Headset, value: "24/7", label: "AI-Powered Support" },
  { icon: ShieldCheck, value: "Trusted", label: "By Leading Businesses" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-32 flex flex-col">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <SpaceBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* ================= FOREGROUND ================= */}
      <div
        id="hero-content"
        className="relative z-10 max-w-7xl mx-auto px-8 pt-11 flex flex-col lg:flex-row items-center justify-between gap-20 flex-1"
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
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Smarter Execution
            </span>
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

      {/* ================= STATS / TRUST BAR ================= */}
      <div className="relative z-10 w-full mt-16 border-t border-white/10 bg-black/30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 py-8 grid grid-cols-2 md:grid-cols-5 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center gap-2"
            >
              <stat.icon className="text-violet-400" size={24} strokeWidth={1.8} />
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400 tracking-wide">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}