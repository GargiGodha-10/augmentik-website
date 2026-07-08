"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const leftFeatures = [
  "Personalized Career Guidance",
  "Resume Intelligence",
  "Interview Preparation",
  "Skill Assessment",
  "Job Matching",
];

const rightFeatures = [
  "AI-powered Hiring",
  "Smart Knowledge Base",
  "AI Assistant",
  "Workforce Automation",
  "Analytics & Insights",
];

function FeatureCard({
  title,
  align,
}: {
  title: string;
  align: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.05,
        x: align === "left" ? 8 : -8,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
      }}
      className={`
        group
        relative
        w-[320px]
        h-[90px]
        rounded-[26px]
        bg-[#24153d]/95
        border
        border-violet-500/25
        backdrop-blur-xl
        overflow-hidden
        shadow-[0_12px_40px_rgba(0,0,0,.35)]
        flex
        items-center
        px-8
      `}
    >
      {/* Hover Glow */}

      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-500
        bg-gradient-to-r
        from-violet-500/15
        via-fuchsia-500/15
        to-violet-500/15
        blur-xl
        "
      />

      {/* Side Accent */}

      <div
        className={`
          absolute
          top-0
          ${align === "left" ? "left-0" : "right-0"}
          h-full
          w-[6px]
          rounded-full
          bg-gradient-to-b
          from-violet-400
          via-fuchsia-400
          to-violet-500
        `}
      />

      {/* Connection Dot */}

      <div
        className={`
          absolute
          top-1/2
          -translate-y-1/2
          ${align === "left" ? "-right-[10px]" : "-left-[10px]"}
          w-5
          h-5
          rounded-full
          bg-white
          shadow-[0_0_18px_#d8b4fe]
          border-4
          border-violet-400
        `}
      />

      <h3 className="relative z-10 text-[25px] font-bold leading-snug text-white">
        {title}
      </h3>
    </motion.div>
  );
}

export default function About() {
    return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#160B2C] py-28 text-white"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

      {/* Background Glow */}

      <div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute right-0 bottom-0 h-[520px] w-[520px] rounded-full bg-fuchsia-700/20 blur-[180px]" />

      <div className="relative z-10 max-w-[1600px] mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="text-6xl font-black bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
            About Augmentik
          </h2>

          <p className="max-w-3xl mx-auto mt-8 text-[20px] leading-9 font-light text-gray-300 tracking-wide">
            Learn how
            <span className="text-violet-300 font-medium"> Augmentik</span>
            leverages
            <span className="text-violet-300 font-medium">
              {" "}Artificial Intelligence
            </span>
            {" "}to transform hiring,
            <span className="text-violet-300 font-medium">
              {" "}career growth
            </span>
            , and
            <span className="text-violet-300 font-medium">
              {" "}workforce productivity.
            </span>
          </p>

        </motion.div>

        {/* FLOWCHART */}

       <div className="relative flex items-center justify-center min-h-[600px] -translate-y-16">

          {/* LEFT CARDS */}

          <div className="absolute left-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-7 z-20">

            {leftFeatures.map((item) => (
              <FeatureCard
                key={item}
                title={item}
                align="left"
              />
            ))}

          </div>

          {/* RIGHT CARDS */}

          <div className="absolute right-[10%] top-1/2 -translate-y-1/2 flex flex-col gap-7 z-20">

            {rightFeatures.map((item) => (
              <FeatureCard
                key={item}
                title={item}
                align="right"
              />
            ))}

          </div>

 

          {/* CENTER CIRCLE */}

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative z-30 flex items-center justify-center"
          >

            {/* OUTER GLOW */}

            <div className="absolute w-[560px] h-[560px] rounded-full bg-violet-600/20 blur-[120px]" />

            {/* OUTER RING */}

            <div className="absolute w-[450px] h-[450px] rounded-full border-[10px] border-violet-400/20" />

            {/* MAIN CIRCLE */}

            <div className="relative w-[380px] h-[380px] rounded-full bg-[#241142] border-[8px] border-violet-400 shadow-[0_0_70px_rgba(168,85,247,.35)] flex items-center justify-center">

              {/* INNER RING */}

              <div className="absolute w-[300px] h-[300px] rounded-full border border-violet-400/20" />

              {/* AUGGIE */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="relative z-20"
              >
                <Image
                  src="/removebg auggie.png"
                  alt="Auggie"
                  width={600}
                  height={600}
                  className="rounded-3xl object-contain"
                />
              </motion.div>

            </div>

          </motion.div>
         

        </div>

        {/* Floating Orbs */}

        <motion.div
          animate={{
            y: [0, -18, 0],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
          }}
          className="absolute left-16 top-44 h-4 w-4 rounded-full bg-violet-400 shadow-[0_0_25px_#8b5cf6]"
        />

        <motion.div
          animate={{
            y: [0, 20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
          className="absolute right-20 top-60 h-5 w-5 rounded-full bg-fuchsia-400 shadow-[0_0_30px_#d946ef]"
        />

        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="absolute left-1/2 bottom-12 h-3 w-3 -translate-x-1/2 rounded-full bg-violet-300 shadow-[0_0_20px_#a855f7]"
        />

        {/* Bottom Glow */}

        <div className="absolute left-1/2 bottom-0 h-[260px] w-[700px] -translate-x-1/2 rounded-full bg-violet-700/10 blur-[120px]" />

      </div>
    </section>
  );
}