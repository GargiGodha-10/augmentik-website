"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const cards = [
  {
    icon: "/assistant.png",
    image: true,
    title: "AI Find Resources",
    description:
      "Find the right candidates instantly using AI-powered matching.",
  },
  {
    icon: "📄",
    image: false,
    title: "Resume Screener",
    description:
      "Automatically shortlist resumes using advanced screening.",
  },
  {
    icon: "💼",
    image: false,
    title: "Job Description AI",
    description:
      "Extract key hiring requirements from every job description.",
  },
  {
    icon: "📚",
    image: false,
    title: "Knowledge Assistant",
    description:
      "Access your company's knowledge base with an AI assistant.",
  },
  {
    icon: "👥",
    image: false,
    title: "Client Management",
    description:
      "Manage clients, communication and projects from one place.",
  },
  {
    icon: "🤝",
    image: false,
    title: "Vendor Management",
    description:
      "Track vendors, contracts and performance efficiently.",
  },
  {
    icon: "💰",
    image: false,
    title: "Invoicing & Finance",
    description:
      "Generate invoices and monitor payments with ease.",
  },
  {
    icon: "⚙️",
    image: false,
    title: "Recruitment Workflow",
    description:
      "Automate every recruitment stage from sourcing to hiring.",
  },
];

const loopCards = [...cards, ...cards];
const CARD_WIDTH = 388; // card + gap
const LOOP_WIDTH = cards.length * CARD_WIDTH;

export default function Features() {
  const [paused, setPaused] = useState(false);
  const [x, setX] = useState(0);
useAnimationFrame(() => {
  if (paused) return;

  setX((prev) => {
    let next = prev - 0.7;

    if (Math.abs(next) >= LOOP_WIDTH) {
      next = 0;
    }

    return next;
  });
});
  return (
    <section
      id="features"
   className="relative overflow-hidden pt-30 pb-20 bg-[#140B26] text-white"
    >
            {/* Background Glow */}

      <div className="absolute top-0 left-0 h-[500px] w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

      {/* Floating Bubbles */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <div className="absolute top-24 left-20 h-3 w-3 rounded-full bg-violet-400 animate-pulse" />
        <div className="absolute top-48 right-40 h-2 w-2 rounded-full bg-purple-400 animate-bounce" />
        <div className="absolute top-80 left-1/3 h-4 w-4 rounded-full bg-violet-500/60 animate-pulse" />
        <div className="absolute bottom-44 right-24 h-3 w-3 rounded-full bg-fuchsia-400 animate-bounce" />
        <div className="absolute bottom-20 left-16 h-2 w-2 rounded-full bg-violet-300 animate-ping" />
        <div className="absolute top-1/2 right-1/4 h-3 w-3 rounded-full bg-purple-300 animate-pulse" />

      </div>

      <div className="relative">

        {/* Heading */}

        <div className="text-center mb-10">

         <h2 className="text-6xl md:text-7xl font-extrabold leading-none">

            <span className="bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>

          </h2>

          <div className="flex justify-center mt-3 mb-4">

            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,.8)]" />

          </div>

        <p className="mx-auto mt-1 max-w-3xl text-lg leading-9 text-gray-300">

            Streamline recruitment,
            <span className="font-medium text-violet-300"> organize knowledge </span>
            and
            <span className="font-medium text-violet-300"> automate workflows </span>
            with Artificial Intelligence.

          </p>

        </div>

        {/* Moving Cards */}

        <div
          
    className="overflow-hidden pt-8 pb-6"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >

          <motion.div
            className="flex gap-6"
            animate={{ x }}
            transition={{ ease: "linear" }}
          >
                        {loopCards.map((card, index) => (

              <motion.div
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -12,
                  zIndex: 50,
                  transition: { duration: 0.25 },
                }}
                className="
                  min-w-[340px]
                  max-w-[340px]
                  rounded-3xl
                  border border-violet-500/20
                  bg-gradient-to-br
                  from-[#24163F]
                  to-[#2F1A4D]
                  p-8
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-300
                  hover:border-violet-500
                  hover:shadow-[0_0_40px_rgba(168,85,247,.45)]
                "
              >

                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,.25)]">

                  {card.image ? (
                    <Image
                      src={card.icon}
                      alt={card.title}
                      width={52}
                      height={52}
                    />
                  ) : (
                    <span className="text-4xl">{card.icon}</span>
                  )}

                </div>

                <h3 className="text-[30px] font-extrabold leading-tight bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">

                  {card.title}

                </h3>

                <div className="mt-4 h-[2px] w-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />

                <p className="mt-4 text-[17px] leading-8 text-gray-300">

                  {card.description}

                </p>

              </motion.div>

            ))}
                      </motion.div>

        </div>

      </div>

    </section>
  );
}