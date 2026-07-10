"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function ConfettiExplosion() {
  useEffect(() => {
    const duration = 5000;
    const animationEnd = Date.now() + duration;

    const fire = () => {
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

    // Fire immediately
    for (let i = 0; i < 8; i++) {
      setTimeout(() => fire(), i * 15);
    }

    // Continue raining
    const interval = setInterval(() => {
      if (Date.now() > animationEnd) {
        clearInterval(interval);
        return;
      }

      fire();
    }, 70);

    return () => clearInterval(interval);
  }, []);

  return null;
}