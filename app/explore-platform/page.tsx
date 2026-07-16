"use client";
import React from "react";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ExplorePlatform() {
  const router = useRouter();


  const leftControls = useAnimation();
  const rightControls = useAnimation();

  const [selectedChart, setSelectedChart] = useState<string | null>(null);
  const [paused, setPaused] = useState(false);

  const leftCharts = [
    "/chart 2.png",
    "/chart 3.png",
    "/chart 4.png",
  ];

  const rightCharts = [
    "/chart 5.png",
    "/chart 6.png",
    "/chart 7.png",
  ];
  useEffect(() => {
  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = "auto";
  };
}, []);

 useEffect(() => {
  if (paused) {
    leftControls.stop();
    rightControls.stop();
    return;
  }

  leftControls.start({
    y: [0, -820],
    transition: {
      duration: 32,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  });

  rightControls.start({
    y: [-820, 0],
    transition: {
      duration: 32,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  });
}, [paused]);

  const handleChartClick = (chart: string) => {
    setPaused(true);
    setSelectedChart(chart);
  };

  const closePreview = () => {
    setPaused(false);
    setSelectedChart(null);
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#140B26] text-white">

      {/* Back Button */}

      <button
        onClick={() => router.push("/")}
        className="fixed top-4 left-8 z-[60]
        flex items-center justify-center
        w-12 h-12
        rounded-full
        bg-white/10
        border border-violet-500/30
        backdrop-blur-md
        hover:bg-violet-600/30
        hover:scale-110
        transition-all duration-300"
      >
        <ArrowLeft className="w-6 h-6 text-white" />
      </button>

      {/* Background Glow */}

      <div className="absolute top-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute bottom-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

      {/* Floating Particles */}

      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-violet-300/60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#140B26] via-[#1A1034] to-[#140B26]" />
      <div className="absolute -left-52 -top-40 w-[650px] h-[650px] rounded-full bg-violet-600/15 blur-[220px]" />
      <div className="absolute -right-52 bottom-[-200px] w-[650px] h-[650px] rounded-full bg-purple-600/15 blur-[220px]" />

      {/* Header */}

      <header className="fixed top-0 left-0 w-full h-20 z-50 bg-[#1B1233]/80 backdrop-blur-xl border-b border-violet-500/20">
<div className="w-full h-full flex items-center px-10">
<div className="flex items-center gap-0 ml-12">

            <Image
              src="/final logo.png"
              alt="logo"
              width={70}
              height={70}
            />

            <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-white via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
              Augmentik
            </h1>

          </div>

     

        </div>

      </header>
            {/* ================= EXPLORE PLATFORM ================= */}

      <section className="relative pt-28 pb-20 px-8">

        {/* Heading */}

   

        {/* Layout */}

        <div className="max-w-[1800px] mx-auto flex items-center justify-center gap-16">

          {/* ======================================================
                         LEFT : FIXED LAPTOP
          ====================================================== */}

   <motion.div
  initial={{ opacity: 0, x: -80 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="sticky top-20 self-start flex-shrink-0"
>
  <img
    src="/ld.png"
    alt="Dashboard Laptop"
    className="w-[760px] select-none"
  />
</motion.div>

          {/* ======================================================
                        RIGHT SIDE
          ====================================================== */}

          <div className="flex gap-10">

            {/* COLUMN 1 (UPWARD) */}

 <motion.div
  animate={leftControls}
  className="flex flex-col gap-8"
>

              {[
                "/chart 2.png",
                "/chart 3.png",
                "/chart 4.png",
                 "/chart 2.png",
 "/chart 3.png",
 "/chart 4.png",
            
              ].map((img, index) => (

<motion.div
  key={index}
  onMouseEnter={() => {
    setPaused(true);
    setSelectedChart(img);
  }}
  onMouseLeave={() => {
    setPaused(false);
    setSelectedChart(null);
  }}
  animate={{
    scale: selectedChart === img ? 1.08 : 1,
    x: selectedChart === img ? -15 : 0,
    boxShadow:
      selectedChart === img
        ? "0 0 40px rgba(168,85,247,0.9)"
        : "0 0 0px rgba(0,0,0,0)",
  }}
  transition={{
    duration: 0.3,
  }}
  className="cursor-pointer rounded-2xl overflow-hidden bg-[#1B1233]/70 border border-violet-500/20 shadow-xl"
>

                  <Image
                    src={img}
                    alt=""
                    width={370}
                    height={260}
                  />

                </motion.div>

              ))}

            </motion.div>

            {/* COLUMN 2 (DOWNWARD) */}

     <motion.div
  animate={rightControls}
  className="flex flex-col gap-8"
>

              {[
                "/chart 5.png",
                "/chart 6.png",
                "/chart 7.png",
                 "/chart 5.png",
 "/chart 6.png",
 "/chart 7.png",
             
              ].map((img, index) => (

<motion.div
  key={index}
  onMouseEnter={() => {
    setPaused(true);
    setSelectedChart(img);
  }}
  onMouseLeave={() => {
    setPaused(false);
    setSelectedChart(null);
  }}
  animate={{
    scale: selectedChart === img ? 1.08 : 1,
    x: selectedChart === img ? 15 : 0,
    boxShadow:
      selectedChart === img
        ? "0 0 40px rgba(168,85,247,0.9)"
        : "0 0 0px rgba(0,0,0,0)",
  }}
  transition={{
    duration: 0.3,
  }}
  className="cursor-pointer rounded-2xl overflow-hidden bg-[#1B1233]/70 border border-violet-500/20 shadow-xl"
>

                  <Image
                    src={img}
                    alt=""
                    width={370}
                    height={260}
                  />

                </motion.div>

              ))}

            </motion.div>

          </div>

        </div>

      </section>
 

    </main>
  );
}