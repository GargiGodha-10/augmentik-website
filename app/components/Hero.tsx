"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#140B26] text-white pt-32">

      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#140B26] via-[#261042] to-[#140B26] animate-gradient"></div>

      {/* Purple Glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[180px] animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[180px] animate-pulse"></div>

      {/* Floating Particles */}
      <div className="particle left-[10%] top-[20%]"></div>
      <div className="particle left-[80%] top-[25%]"></div>
      <div className="particle left-[20%] top-[70%]"></div>
      <div className="particle left-[75%] top-[75%]"></div>
      <div className="particle left-[45%] top-[40%]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 flex flex-col lg:flex-row items-center justify-between gap-20">

        {/* Left Side */}
        <div className="max-w-2xl animate-fade">

          <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-5">
            AI WORKFORCE PLATFORM
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            The AI Workforce
            <br />
            for Modern
            <br />
            Businesses
          </h1>

          <p className="text-gray-300 text-xl mt-7 leading-9">
            AI-powered hiring, talent sourcing and business automation in one
            intelligent platform.
          </p>

          <div className="flex gap-6 mt-12">

            <button className="bg-violet-600 hover:bg-violet-700 hover:scale-105 transition duration-300 px-9 py-4 rounded-xl font-semibold shadow-[0_0_40px_rgba(139,92,246,.5)]">
              Book a Demo
            </button>

<Link
  href="/explore-platform"
  onClick={() => console.log("clicked")}
  className="border border-gray-500 hover:bg-white hover:text-black transition duration-300 px-9 py-4 rounded-xl font-semibold"
>
  Explore Platform
</Link>

          </div>

        </div>

       {/* Right Side */}
{/* Right Side */}
<div className="relative flex items-center justify-center w-[500px] h-[600px]">

  {/* Glow */}
  <div className="absolute w-[350px] h-[350px] bg-violet-600/30 rounded-full blur-[100px]"></div>

  <motion.div
    animate={{ y: [0, -12, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="relative w-[450px] h-[550px]"
  >
    {/* Body */}
    <img
      src="/auggiefinal _body.png"
      alt="Auggie"
      className="absolute inset-0 object-contain w-full h-full"
    />

    {/* Hand */}
    <img
      src="/auggiefinal_hand.png"
      alt="Hand"
      className="absolute hand-wave"
      style={{
        top: "160px",
        right: "45px",
        width: "145px",
      }}
    />
  </motion.div>

</div>
      </div>   {/* closes relative z-10 div */}

    </section>
  );
}