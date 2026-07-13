"use client";

import { motion } from "framer-motion";
import Image from "next/image";
const resources = [
  {
    icon: "👤",
    title: "Candidate Onboarding",
    description:
      "Ensure a smooth transition from candidate selection to successful onboarding with end-to-end support..",
  },
  {
    icon: "📊",
    title: " Resume Score",
    description:
      "Our team carefully evaluates your resume and shares your profile score at the earliest."
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
];

export default function Resources() {
  return (
    <section
      id="resources"
      className="relative overflow-hidden pt-24 pb-28 bg-[#140B26] text-white"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-700/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full"></div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>

        <div className="absolute top-44 right-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>

        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-violet-500 rounded-full animate-pulse"></div>

        <div className="absolute bottom-20 right-24 w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">

        {/* Heading */}

        <div className="text-center mb-12">
<div className="mt-10">
  <h2 className="text-6xl font-extrabold text-center bg-gradient-to-r from-white via-violet-100 to-purple-400 bg-clip-text text-transparent leading-tight">
    Resources
  </h2>
</div>
{/* Purple Line */}
<div className="flex justify-center mt-6">
  <div className="h-1 w-28 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 shadow-[0_0_18px_rgba(168,85,247,0.6)]"></div>
</div>

          <p className="max-w-3xl mx-auto mt-8 text-center text-[20px] leading-9 font-light text-gray-300 tracking-wide">
  Submit your resume, <span className="text-violet-300 font-medium"> verify your profile, </span>
  and unlock <span className="text-violet-300 font-medium"> opportunities that  </span>
  match 
  <span className="text-violet-300 font-medium">
{" "} you  
  </span>
 r expertise.
</p>
</div>
        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {resources.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.7,
                delay: index * 0.25,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="relative bg-[#24163F]/80 rounded-3xl p-5 border border-white/5 backdrop-blur-md hover:border-violet-500/40 hover:shadow-[0_20px_50px_rgba(168,85,247,0.35)] transition-all duration-500"
            >
<div className="text-4xl w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-purple-500/10 border border-violet-500/20 shadow-[0_0_20px_rgba(168,85,247,0.25)]">

  {index === 0 ? (
    <Image
      src="/politician.png"
      alt="Candidate Onboarding"
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

              <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400"></div>

              <p className="mt-5 text-[17px] leading-8 text-gray-300 font-light tracking-wide">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}