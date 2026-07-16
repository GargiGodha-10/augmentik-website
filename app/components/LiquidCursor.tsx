"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function LiquidCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  const y = useSpring(mouseY, {
    stiffness: 120,
    damping: 18,
    mass: 0.6,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="fixed left-0 top-0 z-[9999] pointer-events-none"
    >
      <div className="relative -translate-x-1/2 -translate-y-1/2">
        {/* Outer glow */}
        <div className="absolute h-28 w-28 rounded-full bg-purple-500/20 blur-3xl" />

        {/* Middle glow */}
        <div className="absolute left-4 top-4 h-20 w-20 rounded-full bg-fuchsia-400/30 blur-2xl" />

        {/* Liquid blob */}
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            borderRadius: [
              "42% 58% 63% 37% / 45% 36% 64% 55%",
              "58% 42% 34% 66% / 52% 60% 40% 48%",
              "42% 58% 63% 37% / 45% 36% 64% 55%",
            ],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            relative
            h-12
            w-12
            rounded-full
            bg-gradient-to-br
            from-fuchsia-400
            via-violet-500
            to-cyan-400
            shadow-[0_0_40px_rgba(168,85,247,.65)]
          "
        />
      </div>
    </motion.div>
  );
}