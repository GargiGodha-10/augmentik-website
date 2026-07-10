"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown, MessageSquare } from "lucide-react";

export default function TalkToAuggiePage() {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [showChat, setShowChat] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  const [openFAQ, setOpenFAQ] = useState(0);

  const faqs = [
    {
      question: "Is Augmentik only for IT staffing companies?",
      answer:
        "No. Augmentik is designed for staffing and recruitment firms across multiple industries. It helps recruiters manage candidates, clients, job requirements and hiring workflows from one intelligent platform.",
    },

    {
      question: "How does the AI Job Description Search work?",
      answer:
        "Simply paste your Job Description. Augmentik understands skills, experience, technologies and hiring intent using AI, helping recruiters instantly find the right candidates.",
    },

    {
      question: "Can our recruitment team use Augmentik together?",
      answer:
        "Yes. Multiple recruiters can collaborate simultaneously, manage shared pipelines, assign work, and track hiring progress in real time.",
    },

    {
      question: "Can we import our existing client and candidate database?",
      answer:
        "Absolutely. Existing candidate and client data can be securely imported into Augmentik without disrupting your current workflow.",
    },

    {
      question: "How do I get started with Augmentik?",
      answer:
        "Simply schedule a demo with our team. We'll help you understand the platform, configure your workspace and get your recruitment process running smoothly.",
    },
  ];

  useEffect(() => {

    const timer1 = setTimeout(() => {

      setShowChat(true);

    }, 10000);

    const timer2 = setTimeout(() => {

      if (videoRef.current) {

        videoRef.current.pause();

      }

      setShowDashboard(true);

    }, 10000);

    return () => {

      clearTimeout(timer1);
      clearTimeout(timer2);

    };

  }, []);

  return (

    <div className="relative h-screen w-screen overflow-hidden bg-[#12091F]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#12091F] via-[#1B1036] to-[#12091F]" />

      {/* Background Glow */}

      <div className="absolute -left-60 top-10 w-[700px] h-[700px] rounded-full bg-violet-700/20 blur-[220px]" />

      <div className="absolute right-[-120px] bottom-[-120px] w-[650px] h-[650px] rounded-full bg-fuchsia-600/15 blur-[210px]" />

      {/* Floating particles */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [.4, 1, .4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute left-24 top-28 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_25px_#8b5cf6]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [.4, 1, .4],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute right-36 top-44 w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_30px_#d946ef]"
      />

      {/* ================= VIDEO ================= */}

      <AnimatePresence>

        {!showDashboard && (

          <motion.div

            animate={

              showChat
                ? {
                    width: "40%",
                    left: "8%",
                    scale: .92,
                    opacity: 1,
                  }

                : {
                    width: "100%",
                    left: "0%",
                    scale: 1,
                    opacity: 1,
                  }

            }

            transition={{

              duration: 3,
              ease: "easeInOut",

            }}

            exit={{

              opacity: 0,

              transition: {

                duration: .8,

              },

            }}

            className="absolute inset-0 flex items-center z-20"

          >

            <video
              ref={videoRef}
              autoPlay
              playsInline
              className="w-full h-full object-contain"
            >
              <source src="/auggie-intro.mp4" type="video/mp4" />
            </video>

          </motion.div>

        )}

      </AnimatePresence>
            {/* ================= NEW DASHBOARD ================= */}

      <AnimatePresence>

        {showDashboard && (

          <motion.div

            initial={{
              opacity: 0,
              scale: .96,
            }}

            animate={{
              opacity: 1,
              scale: 1,
            }}

            transition={{
              duration: .8,
            }}

            className="absolute inset-0 z-30 flex items-center justify-center px-12"

          >

            <div className="relative w-[1320px] h-[600px] rounded-[34px] overflow-hidden border border-violet-500/20 bg-[#0F0C1B]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(124,58,237,.20)]">

              {/* top glow */}

              <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-violet-500/10 to-transparent" />

              {/* Brand */}

              <div className="flex items-center justify-between px-8 py-6">

                <div className="flex items-center gap-4">

                  <Image
                    src="/final logo.png"
                    alt="Augmentik"
                    width={70}
                    height={70}
                    priority
                  />

                  <div>

                    <h1 className="text-3xl font-black tracking-wide bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">

                      Augmentik

                    </h1>

                    <p className="text-sm text-gray-400">

                      AI Workforce Platform

                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-3">

                  <div className="w-3 h-3 rounded-full bg-violet-500" />

                  <div className="w-3 h-3 rounded-full bg-fuchsia-500" />

                  <div className="w-3 h-3 rounded-full bg-cyan-400" />

                </div>

              </div>

              {/* horizontal line */}

              <div className="mx-8 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

              {/* Main Layout */}

              <div className="grid grid-cols-[330px_1fr] h-[660px]">

                {/* ================= LEFT CHAT PANEL ================= */}

                <div className="border-r border-violet-500/15 p-7">

                  <div className="rounded-3xl bg-[#181326] border border-violet-500/20 p-6">

                    <div className="flex items-center gap-4">

                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center shadow-lg">

                        <MessageSquare
                          className="text-white"
                          size={28}
                        />

                      </div>

                      <div>

                        <h2 className="text-2xl font-bold text-white">

                          Chat

                        </h2>

                        <p className="text-sm text-violet-300">

                          Frequently Asked Questions

                        </p>

                      </div>

                    </div>

                    <div className="mt-8 rounded-2xl bg-[#21172F] border border-violet-500/10 p-5">

                      <p className="text-gray-300 leading-8">

                        Welcome 👋

                        <br /><br />

                        Here are the most common questions about
                        Augmentik.

                        <br /><br />

                        Select any question on the right and the
                        answer will appear instantly.

                      </p>

                    </div>

                  </div>

                </div>

                {/* RIGHT PANEL STARTS IN PART 3 */}
                                {/* ================= RIGHT FAQ PANEL ================= */}

                <div className="p-8">

                  <div className="h-full rounded-[28px] bg-[#131021]/95 border border-violet-500/15 overflow-hidden">

                    {/* Header */}

                    <div className="px-8 pt-8 pb-6">

                      <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">

                        Chat with Auggie

                      </h2>

                      <p className="mt-3 text-gray-400 leading-7 text-lg">

                        Browse the most frequently asked questions about
                        Augmentik. Click any question to instantly view
                        its answer.

                      </p>

                    </div>

                    <div className="mx-8 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

                    {/* FAQ LIST */}

                    <div className="px-8 py-8 space-y-5 overflow-y-auto h-[520px]">

                      {faqs.map((faq, index) => (

                        <motion.div

                          key={index}

                          layout

                          transition={{
                            duration: .35,
                          }}

                          className="rounded-2xl border border-violet-500/15 bg-white/[0.03] overflow-hidden hover:border-violet-400/40 transition-all"

                        >

                          <button

                            onClick={() =>
                              setOpenFAQ(
                                openFAQ === index
                                  ? -1
                                  : index
                              )
                            }

                            className="w-full flex items-center justify-between px-7 py-6 text-left"

                          >

                            <span className="text-white text-lg font-semibold pr-6 leading-8">

                              {faq.question}

                            </span>

                            <motion.div

                              animate={{
                                rotate:
                                  openFAQ === index
                                    ? 180
                                    : 0,
                              }}

                              transition={{
                                duration: .25,
                              }}

                            >

                              <ChevronDown
                                size={24}
                                className="text-violet-300"
                              />

                            </motion.div>

                          </button>
                                                    <AnimatePresence>

                            {openFAQ === index && (

                              <motion.div

                                initial={{
                                  height: 0,
                                  opacity: 0,
                                }}

                                animate={{
                                  height: "auto",
                                  opacity: 1,
                                }}

                                exit={{
                                  height: 0,
                                  opacity: 0,
                                }}

                                transition={{
                                  duration: 0.35,
                                  ease: "easeInOut",
                                }}

                                className="overflow-hidden"

                              >

                                <div className="px-7 pb-7">

                                  <div className="mb-5 h-px bg-gradient-to-r from-violet-500/20 via-violet-400/40 to-transparent" />

                                  <p className="text-[16px] leading-8 text-gray-300">

                                    {faq.answer}

                                  </p>

                                </div>

                              </motion.div>

                            )}

                          </AnimatePresence>

                        </motion.div>

                      ))}

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        )}

      </AnimatePresence>
            {/* ================= FLOATING PARTICLES ================= */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute top-[16%] left-[12%] w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_22px_#8b5cf6]"
      />

      <motion.div
        animate={{
          y: [0, 20, 0],
          opacity: [0.25, 1, 0.25],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[30%] right-[18%] w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_28px_#d946ef]"
      />

      <motion.div
        animate={{
          y: [0, -14, 0],
          opacity: [0.25, 0.8, 0.25],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute bottom-[18%] left-[42%] w-2.5 h-2.5 rounded-full bg-violet-300 shadow-[0_0_18px_#a855f7]"
      />

      {/* ================= BACKGROUND GLOWS ================= */}

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-32 bottom-[-120px] w-[420px] h-[420px] rounded-full bg-violet-500 blur-[180px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.12, 0.25, 0.12],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-[-120px] top-[100px] w-[380px] h-[380px] rounded-full bg-fuchsia-500 blur-[170px]"
      />

      {/* ================= PAGE OVERLAY ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: showDashboard ? 1 : 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#12091F]/30 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,rgba(0,0,0,.18))]" />
      </motion.div>
            {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-28 bg-gradient-to-t from-[#12091F] to-transparent" />

      {/* Top Fade */}

      <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#12091F]/60 to-transparent" />

      {/* Left Soft Glow */}

      <div className="absolute left-[-140px] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* Right Soft Glow */}

      <div className="absolute right-[-140px] top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full bg-fuchsia-500/10 blur-[140px]" />

    </div>

  );

}
