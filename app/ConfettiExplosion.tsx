"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiExplosion() {
  useEffect(() => {
    let cancelled = false;

    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const fire = () => {
      if (cancelled) return;

      confetti({
        particleCount: 12,
        startVelocity: 18,
        gravity: 0.75,
        spread: 25,
        ticks: 700,
        scalar: 1,
        drift: 0,
        zIndex: 0,
        origin: {
          x: Math.random(),
          y: -0.1,
        },
        colors: [
          "#A855F7",
          "#EC4899",
          "#3B82F6",
          "#FACC15",
          "#FFFFFF",
        ],
      });
    };

    // Store timeout IDs
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    // Fire immediately
    for (let i = 0; i < 8; i++) {
      const id = setTimeout(() => {
        if (!cancelled) fire();
      }, i * 15);

      timeouts.push(id);
    }

    // Continue raining
    const interval = setInterval(() => {
      if (cancelled || Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      fire();
    }, 70);

    return () => {
      cancelled = true;

      clearInterval(interval);

      // Clear every pending timeout
      timeouts.forEach(clearTimeout);

      // Stop all confetti immediately
      confetti.reset();
    };
  }, []);

  return null;
}