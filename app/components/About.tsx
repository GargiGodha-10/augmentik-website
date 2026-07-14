"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const particles = Array.from({ length: 25 }, (_, i) => ({
  id: i,
  left: `${(i * 17) % 100}%`,
  top: `${(i * 37) % 100}%`,
  duration: 4 + (i % 3),
  delay: (i % 4) * 0.5,
}));
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#140B26] py-24"
    >
      {/* Background Glow */}
      <div className="absolute -left-40 -top-40 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-600/10 blur-[180px]" />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute h-2 w-2 rounded-full bg-violet-300/50"
           style={{
  left: particle.left,
  top: particle.top,
}}
            animate={{
              y: [-15, 15, -15],
              opacity: [0.2, 1, 0.2],
            }}
          transition={{
  duration: particle.duration,
  repeat: Infinity,
 delay: particle.delay,
}}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center"
        >

          <p className="text-xs font-semibold uppercase tracking-[10px] text-violet-400">
            ABOUT AUGMENTIK
          </p>

          <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-6xl">
            Why Businesses Choose
          </h2>

          <h2 className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-violet-500 bg-clip-text text-5xl font-black text-transparent md:text-6xl">
             Augmentik
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-base leading-8 text-gray-400">
            Empowering businesses with intelligent hiring, automation,
            knowledge management and AI assistance — all from one
            beautifully connected platform.
          </p>

        </motion.div>

        {/* Main Content */}

        <div className="grid lg:grid-cols-[0.9fr_1.1fr] items-center gap-10 -mt-6">
                    {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="pr-6"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[8px] text-violet-400">
              Our Vision
            </p>

            <h3 className="text-4xl font-black leading-tight text-white">
              One Intelligent Platform.
              <br />
              Infinite Possibilities.
            </h3>

            <p className="mt-8 max-w-[560px] text-base leading-9 text-gray-300">
              Augmentik combines AI-powered hiring, intelligent automation,
              knowledge management, resume analysis and smart assistants into
              one unified platform—helping organizations work faster, make
              better decisions and unlock the true potential of artificial
              intelligence.
            </p>

            {/* Highlights */}

            <div className="mt-12 space-y-6">

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30">
                  ⚡
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    AI Powered Automation
                  </h4>

                  <p className="text-gray-400">
                    Automate repetitive workflows effortlessly.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30">
                  🤖
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Smart AI Assistant
                  </h4>

                  <p className="text-gray-400">
                    Instant answers powered by enterprise AI.
                  </p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 8 }}
                className="flex items-center gap-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600/20 border border-violet-500/30">
                  📊
                </div>

                <div>
                  <h4 className="font-semibold text-white">
                    Smarter Hiring
                  </h4>

                  <p className="text-gray-400">
                    Resume screening and candidate matching in seconds.
                  </p>
                </div>
              </motion.div>

            </div>

          </motion.div>
                    {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex h-[700px] items-center justify-center"
          >
            {/* Background Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.25, 0.5, 0.25],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[650px] w-[650px] rounded-full bg-violet-600/20 blur-[170px]"
            />

            {/* Floating Globe */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <Image
                src="/final globe.png"
                alt="Augmentik Globe"
                width={560}
                height={560}
                priority
                className="drop-shadow-[0_0_70px_rgba(168,85,247,.45)] -ml-24"
              />
            </motion.div>

            {/* Statistics Cards */}

            <div className="absolute -right-12 top-1/2 z-20 flex -translate-y-1/2 flex-col gap-6">

              {/* Card 1 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
              className="w-[180px] rounded-2xl border border-violet-500/20 bg-[#24153b]/90 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,.18)]"
              >
                <h3 className="text-4xl font-black text-violet-300">
                  35%
                </h3>

                <p className="mt-2 text-base font-semibold text-white">
                  Faster Hiring
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  AI-powered recruitment
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="w-[180px] rounded-2xl border border-violet-500/20 bg-[#24153b]/90 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,.18)]"
              >
                <h3 className="text-4xl font-black text-violet-300">
                  90%
                </h3>

                <p className="mt-2 text-base font-semibold text-white">
                  Less Manual Work
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Workflow automation
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
              className="w-[180px] rounded-2xl border border-violet-500/20 bg-[#24153b]/90 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,.18)]"
              >
                <h3 className="text-4xl font-black text-violet-300">
                  24/7
                </h3>

                <p className="mt-2 text-base font-semibold text-white">
                  AI Assistant
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Always available
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                whileHover={{ scale: 1.05 }}
                className="w-[180px] rounded-2xl border border-violet-500/20 bg-[#24153b]/90 p-4 backdrop-blur-xl shadow-[0_0_25px_rgba(168,85,247,.18)]"
              >
                <h3 className="text-4xl font-black text-violet-300">
                  100%
                </h3>

                <p className="mt-2 text-base font-semibold text-white">
                  Unified Platform
                </p>

                <p className="mt-1 text-xs text-gray-400">
                  Everything together
                </p>
              </motion.div>

            </div>

          </motion.div>
                    {/* End Right Side */}

        </div>

        </div>
    </section>
  );
}