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
      className="relative overflow-hidden bg-[#160B2C] pt-32 pb-52 text-white"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

      {/* Glow Effects */}
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

<motion.div
 animate={{
  y:[0,-18,0]
}}

transition={{
  duration:3,
  repeat:Infinity,
  ease:"easeInOut"
}}
  
/>
<div className="relative z-10 max-w-7xl mx-auto px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[7px] text-violet-400 font-semibold">
            AI ASSISTANT
          </p>

          <h2 className="mt-5 text-6xl font-black leading-tight bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
            Meet Auggie
          </h2>
<p className="max-w-3xl mx-auto mt-8 text-center text-[20px] leading-9 font-light text-gray-300 tracking-wide">
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

        {/* Layout */}

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          {/* LEFT */}

          <div className="grid gap-7">

            {/* CARD */}

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              transition={{ duration: .3 }}
              className="group rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:rotate-6 transition">
                <BookOpen size={30} />
              </div>

          <h3 className="mt-2 text-[24px] font-bold tracking-tight text-violet-50">
  AI Walkthroughs
</h3>

<p className="mt-5 text-[20px] leading-9 font-light tracking-wide text-gray-300">
  Step-by-step AI guidance that helps users explore every feature with ease.
</p>
            </motion.div>

            {/* CARD */}

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              transition={{ duration: .3 }}
              className="group rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:rotate-6 transition">
                <MessageCircle size={30} />
              </div>
<h3 className="mt-2 text-[24px] font-bold tracking-tight text-violet-50">
  Smart Conversations
</h3>

<p className="mt-5 text-[20px] leading-9 font-light tracking-wide text-gray-300">
  Interact naturally with Auggie and receive personalized, context-aware AI responses.
</p>
            </motion.div>

            {/* CARD */}

            <motion.div
              whileHover={{
                scale: 1.04,
                y: -8,
              }}
              transition={{ duration: .3 }}
              className="group rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5 group-hover:rotate-6 transition">
                <Zap size={30} />
              </div>

           <h3 className="mt-2 text-[24px] font-bold tracking-tight text-violet-50">
  Instant Guidance
</h3>

<p className="mt-5 text-[20px] leading-9 font-light tracking-wide text-gray-300">
  Receive instant AI recommendations, suggestions and answers whenever you need them.
</p>
            </motion.div>

          </div>
{/* RIGHT */}

<div className="sticky top-32 relative flex justify-center overflow-visible ">

  {/* Big Glow */}
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
    className="absolute w-[720px] h-[720px] rounded-full bg-violet-500/25 blur-[180px]"
  />

<motion.video
  initial={{
    opacity: 0,
    scale: 0.3,
  }}
  whileInView={{
    opacity: 1,
    scale: 1,
  }}
  transition={{
    duration: 1,
  }}
  viewport={{ once: true }}
  autoPlay
  muted
  loop
  playsInline
  className="
    relative
    top-10
    left-6
    z-20
    w-[600px]
    max-w-none
    object-contain
    rounded-full
    pointer-events-none
    select-none
    drop-shadow-[0_0_70px_rgba(168,85,247,.8)]
  "
>
  <source src="/auggie hi .mp4" type="video/mp4" />
</motion.video>
{/* Talk to Auggie Button */}
<Link href="/talk-to-auggie">
<motion.button
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.3 }}
  whileHover={{
    scale: 1.05,
    y: -5,
  }}
  whileTap={{
    scale: 0.98,
  }}
  className="
    absolute
    bottom-[-300px]
    left-1/2
    -translate-x-1/2
    w-[340px]
    rounded-3xl
    border
    border-violet-500/30
    bg-[#24153d]/90
    backdrop-blur-xl
    px-8
    py-6
    shadow-[0_15px_45px_rgba(0,0,0,.35)]
    hover:border-violet-400
    hover:shadow-[0_0_45px_rgba(168,85,247,.45)]
    transition-all
    duration-300
    cursor-pointer
    z-30
  "
>
    <div className="flex items-center gap-5">

   
    {/* Text */}
   <div>
  <h3
    className="text-3xl font-extrabold text-center bg-gradient-to-r from-white via-violet-100 to-purple-400 bg-clip-text text-transparent leading-tight">
        Talk to Auggie
  </h3>

  <p
    className="
      mt-2
      text-base
      font-semibold
      tracking-[2px]
      uppercase
      bg-gradient-to-r
      from-violet-200
      to-fuchsia-300
      bg-clip-text
      text-transparent
    "
  >
    Click to Start Chatting
  </p>
</div>
  </div>


</motion.button>
</Link>

</div>

</div>


      </div>
    </section>
  );
}