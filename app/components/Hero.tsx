"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white pt-32">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Optional Dark Overlay */}
      <div className="absolute inset-0 bg-black/10 z-[1]" />

      {/* ================= FOREGROUND ================= */}
      <div
        id="hero-content"
        className="relative z-10 max-w-7xl mx-auto px-8 pt-11 flex flex-col lg:flex-row items-center justify-between gap-20"
      >
        {/* Left Side */}
        <div className="max-w-2xl animate-fade">
          <p className="text-violet-400 uppercase tracking-[6px] font-semibold mb-5">
            AI WORKFORCE PLATFORM
          </p>

          <h1 className="text-6xl font-bold leading-tight">
            Empowering
            <br />
            Businesses with
            <br />
            Smarter Execution
          </h1>

          <p className="text-gray-300 text-xl mt-7 leading-9">
            Augmentik helps organizations streamline hiring, discover the right
            talent, and simplify workforce management through intelligent
            automation—all from one unified platform.
          </p>

          <div className="flex gap-6 mt-12">
            <Link href="/book-demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-8 py-4 font-semibold text-white shadow-[0_0_35px_rgba(168,85,247,.5)]"
              >
                Book a Demo
              </motion.button>
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