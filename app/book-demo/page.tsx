"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BookDemoPage() {
  const router = useRouter();
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#140B26] text-white">
      <button
        onClick={() => router.push("/")}
        className="absolute top-4 left-4 sm:top-6 sm:left-8 z-50 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full
        bg-white/10 border border-violet-500/30 backdrop-blur-md
        hover:bg-violet-600/30 hover:scale-110 transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#140B26] via-[#261042] to-[#140B26]" />

      <div className="absolute -top-44 -left-44 h-[400px] w-[400px] sm:h-[550px] sm:w-[550px] md:h-[650px] md:w-[650px] rounded-full bg-violet-600/30 blur-[180px]" />

      <div className="absolute -bottom-44 -right-44 h-[350px] w-[350px] sm:h-[450px] sm:w-[450px] md:h-[550px] md:w-[550px] rounded-full bg-fuchsia-600/20 blur-[180px]" />

      {/* Floating particles */}

      <div className="particle left-[10%] top-[20%]" />
      <div className="particle left-[75%] top-[18%]" />
      <div className="particle left-[30%] top-[70%]" />
      <div className="particle left-[82%] top-[78%]" />
      <div className="particle left-[50%] top-[45%]" />

      {/* ================= Content ================= */}

      <div className="relative z-10">
        {/* Header */}
        <div className="h-20 sm:h-24 flex items-center justify-center border-b border-white/10">
          <div className="w-full px-6 sm:px-8">
            <div className="flex items-center justify-center gap-1">
              <Image
                src="/final logo.png"
                alt="Augmentik"
                width={70}
                height={70}
                className="-mr-2 sm:-mr-3 w-12 h-12 sm:w-[70px] sm:h-[70px]"
              />

              <h1 className="text-lg sm:text-xl md:text-2xl font-black tracking-[1.5px] bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,.35)]">
                Augmentik
              </h1>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-8">
          {/* ================= Heading ================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Book Your
              <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                {" "}
                Personalized Demo
              </span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 px-2">
              Tell us a little about your business and we'll prepare
              a personalized AI demo tailored specifically for your needs.
            </p>
          </motion.div>

          {/* ================= Two Columns ================= */}

          <div className="mt-10 sm:mt-14 grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-6 sm:gap-8 lg:gap-10 items-start">
            {/* ================================================= */}
            {/* LEFT CARD */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-fit rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8"
            >
              {/* Heading */}
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                  Building the Future with AI
                </h3>

                <div className="mt-3 sm:mt-4 h-1 w-16 sm:w-24 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
              </div>

              {/* Intro */}
              <div className="mt-6 sm:mt-8 rounded-2xl border border-violet-500/20 bg-violet-500/10 p-4 sm:p-6">
                <h4 className="text-lg sm:text-xl font-semibold">✨ You're Almost There</h4>

                <p className="mt-3 sm:mt-4 leading-6 sm:leading-8 text-sm sm:text-base text-gray-300">
                  Thanks for choosing Augmentik. We're excited to learn about your business
                  and prepare a demo that's completely personalized for your goals.
                </p>
              </div>

              {/* Timeline */}
              <div className="mt-8 sm:mt-10">
                <h4 className="text-xl sm:text-2xl font-bold">What Happens Next?</h4>

                <div className="mt-6 sm:mt-8 space-y-6 sm:space-y-8">
                  {[
                    {
                      title: "Review Your Requirements",
                      text: "We carefully review your business details to understand your needs.",
                    },
                    {
                      title: "Personalized Demo Preparation",
                      text: "Our experts prepare a demo tailored specifically for your business and industry.",
                    },
                    {
                      title: "Our Team Contacts You",
                      text: "We'll reach out within 24 hours to schedule your personalized session.",
                    },
                    {
                      title: "Live AI Demo Session",
                      text: "Discover how Augmentik can transform your workflows through a live personalized walkthrough.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 sm:gap-5">
                      <div className="flex flex-col items-center shrink-0">
                        <div className="h-3.5 w-3.5 sm:h-4 sm:w-4 rounded-full bg-violet-500 shadow-[0_0_15px_rgba(168,85,247,.8)]"></div>

                        {index !== 3 && (
                          <div className="mt-2 h-12 sm:h-16 w-[2px] bg-violet-500/40"></div>
                        )}
                      </div>

                      <div>
                        <h5 className="font-semibold text-sm sm:text-base">{item.title}</h5>

                        <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm leading-6 sm:leading-7 text-gray-400">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* ================================================= */}
            {/* RIGHT CARD */}
            {/* ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-7 md:p-10 h-fit"
            >
              <p className="text-xs sm:text-sm uppercase tracking-[3px] text-violet-400">
                Complete Your Booking
              </p>

              <div className="mt-5 sm:mt-6">
                <div className="flex justify-between text-xs sm:text-sm text-gray-400">
                  <span>50% Complete</span>
                  <span>Step 1 of 2</span>
                </div>

                <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"></div>
                </div>
              </div>

              <h3 className="mt-7 sm:mt-10 text-xl sm:text-2xl md:text-3xl font-bold">
                Let's get to know your business
              </h3>

              <p className="mt-2 sm:mt-3 text-sm sm:text-base text-gray-400">
                Fill in your details below and we'll prepare a personalized demo.
              </p>

              <div className="mt-7 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />

                <input
                  type="email"
                  placeholder="Work Email"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />

                <input
                  type="text"
                  placeholder="Industry"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />

                <select
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                  defaultValue=""
                >
                  <option value="" disabled className="bg-[#1b1032]">
                    Company Size
                  </option>
                  <option className="bg-[#1b1032]">1 - 10</option>
                  <option className="bg-[#1b1032]">11 - 50</option>
                  <option className="bg-[#1b1032]">51 - 200</option>
                  <option className="bg-[#1b1032]">201 - 500</option>
                  <option className="bg-[#1b1032]">500+</option>
                </select>

                <input
                  type="text"
                  placeholder="Website (Optional)"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />
              </div>

              <div className="mt-4 sm:mt-6">
                <input
                  type="tel"
                  placeholder="Phone Number (Optional)"
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />
              </div>

              <div className="mt-4 sm:mt-6">
                <textarea
                  rows={4}
                  placeholder="Tell us about your business goals or what you'd like to see in the demo..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-4 sm:px-5 py-3.5 sm:py-4 text-sm sm:text-base outline-none transition-all focus:border-violet-500 focus:ring-2 focus:ring-violet-500/30"
                />
              </div>

              <Link href="/book-demo/step-2">
                <motion.button
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 0 35px rgba(168,85,247,.45)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 sm:mt-8 flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3.5 sm:py-4 text-base sm:text-lg font-semibold"
                >
                  Next Step →
                </motion.button>
              </Link>

              <p className="mt-4 sm:mt-5 text-center text-xs sm:text-sm text-gray-400">
                🔒 Your information is secure and will never be shared.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Ambient Glow */}

      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />
    </main>
  );
}