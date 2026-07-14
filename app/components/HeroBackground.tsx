"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
};

export default function HeroBackground() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 120 }, () => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 5 + 3,
      delay: Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
   <div className="absolute inset-0 overflow-hidden">
      {/* Base Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#090014] via-[#16092F] to-[#090014]" />

      {/* Purple Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 80, 0],
          y: [0, -40, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-[-220px] top-[-180px] w-[850px] h-[850px] rounded-full bg-violet-600/20 blur-[180px]"
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          scale: [1.1, 0.9, 1.1],
          x: [0, -120, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-180px] bottom-[-180px] w-[750px] h-[750px] rounded-full bg-blue-600/15 blur-[180px]"
      />

      {/* Pink Glow */}
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
        }}
        className="absolute left-1/2 top-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/15 blur-[140px]"
      />

      {/* Stars */}
      {stars.map((star, index) => (
        <motion.div
          key={index}
          initial={{
            opacity: 0.2,
            scale: 0.8,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.4, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: star.size,
            height: star.size,
          }}
        />
      ))}
    </div>
  );
}