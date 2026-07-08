"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ExplorePlatform() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#140B26] text-white">

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
      {/* Extra Glow */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-b from-[#140B26] via-[#1A1034] to-[#140B26]" />
      <div className="absolute -left-52 -top-40 w-[650px] h-[650px] rounded-full bg-violet-600/15 blur-[220px]" />
      <div className="absolute -right-52 bottom-[-200px] w-[650px] h-[650px] rounded-full bg-purple-600/15 blur-[220px]" />

      {/* ================= Header ================= */}

      <header className="fixed top-0 left-0 w-full h-20 z-50 bg-[#1B1233]/80 backdrop-blur-xl border-b border-violet-500/20">

        <div className="max-w-7xl h-full mx-auto flex items-center justify-between px-10">

          <div className="flex items-center gap-0">

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

          <Link href="/know-more">
  <button className="px-8 py-3 rounded-full bg-violet-600 hover:bg-violet-500 transition shadow-[0_0_35px_rgba(139,92,246,.4)] font-semibold">
    Know More
  </button>
</Link>

        </div>

      </header>

      {/* ================= Laptop ================= */}

      <section className="relative flex items-center justify-center min-h-screen pt-20">

        {/* Center Glow */}

        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet-600/20 blur-[180px]" />

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

          <div className="rounded-[26px] bg-[#1B1233]/80 backdrop-blur-xl border border-violet-500/20 shadow-[0_25px_80px_rgba(93,63,211,0.35)] p-4">

            {/* Browser */}

            <div className="flex items-center gap-2 mb-4">

              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />

              <div className="ml-5 flex-1 h-8 rounded-full bg-[#24163F] flex items-center justify-center text-violet-200 text-sm">

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

    

         

        </motion.div>

      </section>

    </main>
  );
}