"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ExplorePlatform() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#08111F] text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-[#08111F] via-[#0D1728] to-[#08111F]" />

      <div className="absolute -left-52 -top-40 w-[650px] h-[650px] rounded-full bg-cyan-500/15 blur-[220px]" />

      <div className="absolute -right-52 bottom-[-200px] w-[650px] h-[650px] rounded-full bg-blue-600/15 blur-[220px]" />

      {/* ================= Header ================= */}

      <header className="fixed top-0 left-0 w-full h-20 z-50 bg-[#101827]/90 backdrop-blur-xl border-b border-cyan-500/10">

        <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-10">

          <div className="flex items-center gap-4">

            <Image
              src="/final logo.png"
              alt="logo"
              width={48}
              height={48}
            />

            <h1 className="text-3xl font-bold tracking-wide bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              Augmentik
            </h1>

          </div>

          <button className="px-8 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 transition shadow-[0_0_35px_rgba(6,182,212,.45)] font-semibold">
            Know More
          </button>

        </div>

      </header>

      {/* ================= Laptop ================= */}

      <section className="relative flex items-center justify-center min-h-screen pt-20">

        {/* Glow */}

        <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-500/15 blur-[180px]" />

        <motion.div

          animate={{
            x: [-80, 80, -80],
          }}

          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}

          className="relative"

        >

          {/* Laptop */}

          <div className="rounded-[26px] bg-[#101827] border border-gray-700 shadow-[0_25px_80px_rgba(0,0,0,.65)] p-4">

            {/* Browser */}

            <div className="flex items-center gap-2 mb-4">

              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />

              <div className="ml-5 flex-1 h-8 rounded-full bg-[#1E293B] flex items-center justify-center text-gray-400 text-sm">

                projectx.augmentik.com/dashboard

              </div>

            </div>

            <Image
              src="/dashboard final.png"
              alt="Dashboard"
              width={760}
              height={470}
              priority
              className="rounded-xl"
            />

          </div>

          {/* Laptop Base */}

          <div className="mx-auto w-[790px] h-5 rounded-b-full bg-gradient-to-b from-gray-300 to-gray-500 shadow-2xl" />

        </motion.div>

      </section>

    </main>
  );
}