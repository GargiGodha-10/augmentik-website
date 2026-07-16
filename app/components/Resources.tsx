"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const resources = [
  {
    icon: "👤",
    image: "/politician.png",
    title: "Candidate Onboarding",
    description:
      "Ensure a smooth transition from candidate selection to successful onboarding with end-to-end support.",
  },
  {
    icon: "📊",
    title: "Resume Score",
    description:
      "Our team carefully evaluates your resume and shares your profile score at the earliest.",
  },
  {
    icon: "✅",
    title: "Profile Verification",
    description:
      "Verify your profile, skills, and experience to build credibility and stand out to recruiters.",
  },
  {
    icon: "💼",
    title: "Job Matches",
    description:
      "Discover personalized job opportunities based on your profile, skills, experience, and career goals.",
  },
  {
    icon: "📅",
    title: "Interview Scheduling",
    description:
      "Schedule interviews effortlessly with automated reminders and recruiter coordination.",
  },
  {
    icon: "📄",
    title: "Offer Management",
    description:
      "Receive, track and manage offers securely in one centralized place.",
  },
];

export default function Resources() {
  const [paused, setPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  const x = useRef(0);

  useAnimationFrame(() => {
    if (paused || !trackRef.current) return;

    x.current -= 0.8;

    const halfWidth = trackRef.current.scrollWidth / 2;

    if (Math.abs(x.current) >= halfWidth) {
      x.current = 0;
    }

    trackRef.current.style.transform = `translateX(${x.current}px)`;
  });

  const cards = [...resources, ...resources];

  return (
  <section
    id="resources"
    className="relative overflow-hidden pt-16 pb-28 bg-[#140B26] text-white"
  >
    {/* Background Glow */}

    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-700/20 blur-[180px] rounded-full" />

    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full" />

    {/* Floating Particles */}

    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-20 left-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse" />
      <div className="absolute top-44 right-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
      <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
      <div className="absolute bottom-20 right-24 w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" />
    </div>

    <div className="relative max-w-7xl mx-auto px-8">

      {/* Heading */}

      <div className="text-center mb-12">

        <div className="mt-18">
          <h2 className="text-6xl font-extrabold bg-gradient-to-r from-white via-violet-100 to-purple-400 bg-clip-text text-transparent">
            Resources
          </h2>
        </div>

        <div className="flex justify-center mt-6">
          <div className="h-1 w-28 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 shadow-[0_0_18px_rgba(168,85,247,0.6)]" />
        </div>

        <p className="max-w-3xl mx-auto mt-8 text-[20px] leading-9 font-light text-gray-300 tracking-wide">
          Submit your resume,
          <span className="text-violet-300 font-medium">
            {" "}verify your profile,
          </span>
          {" "}and unlock
          <span className="text-violet-300 font-medium">
            {" "}opportunities
          </span>
          {" "}that match
          <span className="text-violet-300 font-medium">
            {" "}your expertise.
          </span>
        </p>

      </div>

      {/* Infinite Carousel */}

      <div
  className="py-3"
  onMouseEnter={() => setPaused(true)}
  onMouseLeave={() => setPaused(false)}
>

        <div
          ref={trackRef}
          className="flex gap-6 w-max"
        >
          {cards.map((item, index) => (
  <motion.div
    key={index}
    whileHover={{
      scale: 1.08,
      y: -15,
      zIndex: 50,
    }}
    transition={{
      type: "spring",
      stiffness: 250,
      damping: 18,
    }}
    className="relative flex-shrink-0 w-[330px] bg-[#24163F]/80 rounded-3xl p-6 border border-white/5 backdrop-blur-md hover:border-violet-500/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] transition-all duration-500 cursor-pointer"
  >
    <div className="text-4xl w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-purple-500/10 border border-violet-500/20 shadow-[0_0_20px_rgba(168,85,247,0.25)]">

      {item.image ? (
        <Image
          src={item.image}
          alt={item.title}
          width={40}
          height={40}
        />
      ) : (
        item.icon
      )}

    </div>

    <h3 className="mt-6 text-[24px] font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
      {item.title}
    </h3>

    <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />

    <p className="mt-5 text-[17px] leading-8 text-gray-300 font-light tracking-wide">
      {item.description}
    </p>
  </motion.div>
))}
    
  </div>
      </div>

</div>
    </section>
  );
}