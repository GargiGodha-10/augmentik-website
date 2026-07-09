"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
  {
    icon: "👥",
    title: "Client Management",
    desc: "All 267 clients in one place — pipeline stages, NDA and MSA dates, key contacts, documents, and full history.",
    tag: "267 clients tracked",
  },
  {
    icon: "🏢",
    title: "Vendor Management",
    desc: "327 vendor relationships with tier ratings, onboarding status, NDA tracking and complete audit logs.",
    tag: "327 vendors managed",
  },
  {
    icon: "📄",
    title: "Job Requirements",
    desc: "Create, assign and track every requirement with budget, contract type and recruiter owner.",
    tag: "556 requirements tracked",
  },
  {
    icon: "🤖",
    title: "AI JD Search Tool",
    desc: "Paste a job description and instantly generate accurate search strings.",
    tag: "20 mins → 20 sec",
  },
  {
    icon: "🎯",
    title: "AI Candidate Matching",
    desc: "Instantly rank the best candidates using AI-powered profile matching.",
    tag: "8432 Profiles",
  },
  {
    icon: "⚙️",
    title: "Recruitment Workflow",
    desc: "Track every candidate from screening to onboarding in one place.",
    tag: "End-to-End Workflow",
  },
];

export default function KnowMore() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#140B26] text-white">

      {/* Background Glow */}
      <div className="absolute top-[-220px] left-[-180px] h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute bottom-[-180px] right-[-180px] h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

      {/* Floating Bubbles */}
      <div className="absolute top-24 left-24 h-4 w-4 rounded-full bg-violet-300/40 animate-pulse" />
      <div className="absolute top-52 right-40 h-5 w-5 rounded-full bg-purple-300/30 animate-pulse" />
      <div className="absolute bottom-32 left-60 h-3 w-3 rounded-full bg-fuchsia-300/40 animate-pulse" />
      <div className="absolute bottom-24 right-24 h-6 w-6 rounded-full bg-violet-300/30 animate-pulse" />

      {/* Navbar */}
      <header className="fixed top-0 left-0 z-50 h-20 w-full border-b border-violet-500/20 bg-[#1A1035]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-full max-w-7xl items-center px-10">
          <Image
            src="/final logo.png"
            alt="Logo"
            width={70}
            height={70}
          />

          <h1 className="bg-gradient-to-r from-white via-violet-300 to-fuchsia-300 bg-clip-text text-3xl font-bold text-transparent">
            Augmentik
          </h1>
        </div>
      </header>

      {/* Content */}
      <div className="pt-32">

        <div className="mb-10 text-center">

          <h1 className="text-5xl font-extrabold md:text-6xl">
            <span className="bg-gradient-to-r from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
              Explore Our Platform
            </span>
          </h1>

          <div className="mx-auto mt-5 h-[2px] w-36 rounded-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-300">
            Experience the next generation of
            <span className="font-semibold text-violet-300">
              {" "}AI-powered recruitment
            </span>,
            where intelligent automation streamlines
            <span className="font-medium text-white">
              {" "}hiring, vendor management, candidate tracking,
            </span>
            {" "}and business operations through one unified platform.
          </p>

        </div>

        <motion.div
          className="flex gap-8 px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...cards, ...cards].map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex h-[360px] min-w-[300px] flex-col rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl shadow-[0_0_30px_rgba(139,92,246,.15)]"
            >
              <div className="text-5xl">{card.icon}</div>

              <h2 className="mt-6 text-2xl font-bold">
                {card.title}
              </h2>

              <p className="mt-5 flex-1 leading-8 text-gray-300">
                {card.desc}
              </p>

              <span className="mt-5 w-fit rounded-full bg-violet-600/20 px-5 py-2 text-violet-200">
                {card.tag}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>

    </main>
  );
}