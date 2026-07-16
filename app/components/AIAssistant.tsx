"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Zap,
} from "lucide-react";

export default function AIAssistant() {
  return (
    <section
      id="assistant"
      className="relative overflow-hidden bg-[#160B2C] pt-6 pb-52 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

      {/* Glow */}
      <div className="absolute -left-40 top-10 w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[170px]" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[180px]" />

      {/* Floating Particles */}

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_25px_#a855f7]"
      />

      <motion.div
        animate={{ y: [0, -35, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-40 left-[30%] w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_30px_#d946ef]"
      />

      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-72 right-[18%] w-3 h-3 rounded-full bg-violet-300 shadow-[0_0_25px_#8b5cf6]"
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-28 left-[15%] w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_35px_#9333ea]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Top Layout */}

        <div className="grid lg:grid-cols-2 gap-16 items-center -mt-14">
                    {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[7px] text-violet-400 font-semibold">
              AI ASSISTANT
            </p>

            <h2 className="mt-2 text-6xl font-black leading-tight bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
              Meet Auggie
            </h2>

            <p className="mt-4 text-[20px] leading-9 font-light text-gray-300 max-w-xl">
              Experience intelligent conversations,
              <span className="text-violet-300 font-medium">
                {" "}personalized assistance
              </span>
              , instant guidance and
              <span className="text-violet-300 font-medium">
                {" "}AI-powered walkthroughs
              </span>
              {" "}designed to make every interaction smoother, smarter and more engaging.
            </p>
          </motion.div>
                    {/* RIGHT */}

         <div className="flex flex-col items-start pl-1">

            {/* Glow */}

            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                opacity: [0.35, 0.6, 0.35],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute w-[700px] h-[700px] rounded-full bg-violet-500/25 blur-[180px]"
            />

            {/* Auggie */}

            <motion.video
              initial={{
                opacity: 0,
                scale: .35,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              autoPlay
              muted
              loop
              playsInline
              className="
                relative
                z-20
                w-[560px]
                object-contain
                rounded-full
                pointer-events-none
                select-none
                drop-shadow-[0_0_70px_rgba(168,85,247,.8)]
                mt-50
              "
            >
              <source src="/auggie hi .mp4" type="video/mp4" />
            </motion.video>

           <Link
  href="/talk-to-auggie"
className="self-start -ml-160 -mt-2"
>
 <motion.button
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
  whileTap={{
    scale: 0.98,
  }}
  className="
    relative
    -top-8
    w-[330px]
    rounded-3xl
    border
    border-violet-500/30
    bg-[#24153d]/90
    backdrop-blur-xl
    px-6
    py-3
    shadow-[0_15px_45px_rgba(0,0,0,.35)]
    hover:border-violet-400
    hover:shadow-[0_0_45px_rgba(168,85,247,.45)]
    transition-all
    duration-300
  "
>
    <h3 className="text-2xl font-extrabold bg-gradient-to-r from-white via-violet-100 to-purple-400 bg-clip-text text-transparent">
      Talk to Auggie
    </h3>

    <p className="mt-2 text-base font-semibold tracking-[2px] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
      Click to Start Chatting
    </p>
  </motion.button>
</Link>

          </div>

        </div>

        {/* Bottom Cards */}

        <div className="mt-10 grid lg:grid-cols-3 gap-8">
                    {/* Card 1 */}

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:rotate-6 transition">
              <BookOpen size={30} />
            </div>

            <h3 className="text-[24px] font-bold text-violet-50">
              AI Walkthroughs
            </h3>

            <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400"></div>

            <p className="mt-5 text-[18px] leading-8 text-gray-300">
              Step-by-step AI guidance that helps users explore every feature with ease.
            </p>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:rotate-6 transition">
              <MessageCircle size={30} />
            </div>

            <h3 className="text-[24px] font-bold text-violet-50">
              Smart Conversations
            </h3>

            <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400"></div>

            <p className="mt-5 text-[18px] leading-8 text-gray-300">
              Interact naturally with Auggie and receive personalized, context-aware responses.
            </p>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            whileHover={{ y: -8, scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="group rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:rotate-6 transition">
              <Zap size={30} />
            </div>

            <h3 className="text-[24px] font-bold text-violet-50">
              Instant Guidance
            </h3>

            <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400"></div>

            <p className="mt-5 text-[18px] leading-8 text-gray-300">
              Receive instant recommendations, suggestions and answers whenever you need them.
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}