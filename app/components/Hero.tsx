"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-20 flex flex-col">
      {/* ================= BACKGROUND (video) ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover object-[center_35%] brightness-[0.60]"
        >
          <source src="/new video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay so text stays readable */}
        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
      </div>

      {/* ================= FOREGROUND ================= */}
      <div
        id="hero-content"
        className="relative z-10 w-full px-8 md:px-16 -mt-6 flex flex-col lg:flex-row items-center justify-start gap-20 flex-1"
      >
        {/* Left Side */}
        <div className="max-w-2xl animate-fade text-left">
          <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-2 pl-1">
            AI WORKFORCE PLATFORM
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Empowering
            <br />
            Businesses with
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
              Smarter Execution
            </span>
          </h1>

          <p className="text-gray-300 text-xl mt-7 leading-9">
            Augmentik helps organizations streamline hiring, discover the right
            talent, and simplify workforce management through intelligent
            automation—all from one unified platform.
          </p>

          <div className="flex gap-6 mt-12">
            <Link
              href="/book-demo"
              className="border border-gray-500 hover:bg-white hover:text-black transition duration-300 px-9 py-4 rounded-xl font-semibold"
            >
              Book a Demo
            </Link>

            <Link
              href="/explore-platform"
              className="border border-gray-500 hover:bg-white hover:text-black transition duration-300 px-9 py-4 rounded-xl font-semibold"
            >
              Explore Platform
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}