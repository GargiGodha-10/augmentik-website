"use client";

import { motion } from "framer-motion";

const cards = [
  {
    icon: "🤖",
    title: "AI Find Resources",
    description:
      "Find the right candidates instantly using AI-powered matching.",
  },
  {
    icon: "📄",
    title: "Resume Screener",
    description:
      "Automatically shortlist resumes using advanced screening.",
  },
  {
    icon: "💼",
    title: "Job Description AI",
    description:
      "Extract key hiring requirements from every job description."
  },
  {
    icon: "📚",
    title: "Knowledge Assistant",
    description:
      "Access company's knowledge base with  AI assistant.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-28 bg-[#140B26] text-white"
    >

      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-violet-700/20 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 blur-[180px] rounded-full"></div>


      {/* Floating Bubbles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <div className="absolute top-24 left-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse"></div>

        <div className="absolute top-48 right-40 w-2 h-2 bg-purple-400 rounded-full animate-bounce"></div>

        <div className="absolute top-80 left-1/3 w-4 h-4 bg-violet-500/60 rounded-full animate-pulse"></div>

        <div className="absolute bottom-44 right-24 w-3 h-3 bg-fuchsia-400 rounded-full animate-bounce"></div>

        <div className="absolute bottom-20 left-16 w-2 h-2 bg-violet-300 rounded-full animate-ping"></div>

        <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-purple-300 rounded-full animate-pulse"></div>

      </div>


      <div className="relative max-w-7xl mx-auto px-8">
{/* Heading */}

<div className="text-center mb-12">

  <h2 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">

    <span className="bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
      Features
    </span>

  </h2>

  {/* Purple Accent Line */}

  <div className="flex justify-center mt-6 mb-8">
    <div className="w-28 h-1 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.8)]"></div>
  </div>

  <p className="max-w-3xl mx-auto mt-5 text-lg md:text-xl text-gray-300 leading-9 font-light tracking-wide">
    Streamline recruitment, 
    <span className="text-violet-300 font-medium"> organize knowledge, </span>
 and 
    <span className="text-violet-300 font-medium">  automate </span>
    <span className="text-violet-300 font-medium">  workflows </span>
    with Artificial Intelligence.
  </p>

</div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">

          {cards.map((card, index) => (

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
                y: -7,
                scale: 1.03,
              }}
              className="bg-gradient-to-br from-[#24163F] to-[#2F1A4D]
              rounded-3xl
              p-8
              border border-violet-500/20
              backdrop-blur-xl
              shadow-lg
              hover:border-violet-500
              hover:shadow-[0_0_35px_rgba(168,85,247,0.35)]
              transition-all duration-500"
            >

              <div className="text-5xl mb-6">
                {card.icon}
              </div>

              <h3 className="mt-6 text-[30px] font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
                {card.title}
              </h3>

             <p className="mt-5 text-[17px] leading-8 text-gray-300 font-light tracking-wide">
                {card.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}