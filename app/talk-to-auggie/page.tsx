"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

export default function TalkToAuggiePage() {

  const videoRef = useRef<HTMLVideoElement>(null);

  const [showChat, setShowChat] = useState(false);
  const [showImage, setShowImage] = useState(false);

  // FAQ Accordion
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Is Augmentik only for IT staffing companies?",
      answer:
        "No. Augmentik is built for staffing and recruitment firms across multiple industries, helping teams manage hiring, candidates, clients and recruitment operations from one platform.",
    },

    {
      question: "How does the AI Job Description Search work?",
      answer:
        "Paste your job description and Augmentik intelligently understands the required skills, technologies and experience to simplify recruiter searches.",
    },

    {
      question: "Can multiple recruiters work together?",
      answer:
        "Yes. Teams can collaborate simultaneously, share candidate pipelines, manage recruiters and monitor hiring progress in real time.",
    },

    {
      question: "Can I import my existing candidates and clients?",
      answer:
        "Yes. Existing recruitment data can be securely imported into Augmentik without interrupting your workflow.",
    },

    {
      question: "How do I get started with Augmentik?",
      answer:
        "Simply request a demo and our team will help you explore the platform and set up everything according to your recruitment process.",
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

      setShowImage(true);

    }, 10000);

    return () => {

      clearTimeout(timer1);
      clearTimeout(timer2);

    };

  }, []);

  return (

    <div className="relative h-screen w-screen overflow-hidden bg-[#160B2C]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

      {/* Background Glow */}

      <div className="absolute -left-44 top-10 w-[520px] h-[520px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-fuchsia-700/20 blur-[190px]" />
            {/* Floating Bubbles */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-24 top-24 w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_30px_#8b5cf6]"
      />

      <motion.div
        animate={{
          y: [0, 22, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-36 top-52 w-5 h-5 rounded-full bg-fuchsia-400 shadow-[0_0_35px_#d946ef]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[45%] bottom-20 w-3 h-3 rounded-full bg-violet-300 shadow-[0_0_25px_#a855f7]"
      />

      {/* ================= VIDEO ================= */}

      <AnimatePresence>

        {!showImage && (

          <motion.div

            animate={
              showChat
                ? {
                    width: "40%",
                    height: "100%",
                    left: "8%",
                    scale: 0.92,
                    opacity: 1,
                  }
                : {
                    width: "100%",
                    height: "100%",
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
                duration: 0.8,
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
            {/* ================= AUGGIE IMAGE ================= */}

      <AnimatePresence>

        {showImage && (

          <motion.div

            initial={{
              opacity: 0,
              scale: 0.8,
            }}

            animate={{
              opacity: 1,
              scale: 1,
              x: "-20%",
              y: [0, -18, 0],
            }}

            transition={{
              opacity: {
                duration: 0.8,
              },
              scale: {
                duration: 0.8,
              },
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
            }}

            className="absolute inset-0 flex items-center justify-center z-20"

          >

            {/* Purple Glow */}

            <div className="absolute w-[520px] h-[520px] rounded-full bg-violet-500/25 blur-[130px]" />

            <Image
              src="/auggie animated.png"
              alt="Auggie"
              width={820}
              height={820}
              priority
              className="relative object-contain"
            />

          </motion.div>

        )}

      </AnimatePresence>

      {/* ================= LOGO ================= */}

      {showImage && (

        <motion.div

          initial={{ opacity: 0, y: -20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{

            duration: 0.8,

            delay: 0.2,

          }}

          className="absolute top-8 left-10 z-40"

        >

          <div className="flex items-center gap-1">

            <Image
              src="/final logo.png"
              alt="Augmentik"
              width={68}
              height={68}
              priority
            />

            <h1 className="text-2xl font-black tracking-wide bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">

              Augmentik

            </h1>

          </div>

          {/* Horizontal Line */}

          <div className="mt-5 h-[1px] w-[480px] bg-gradient-to-r from-violet-400/80 via-white/60 to-transparent" />

        </motion.div>

      )}
            {/* ================= FAQ CARD ================= */}

      {showImage && (

        <motion.div

          initial={{
            opacity: 0,
            x: 120,
          }}

          animate={{
            opacity: 1,
            x: 0,
          }}

          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}

          className="absolute right-12 top-1/2 -translate-y-1/2 z-40"

        >

          <div className="w-[560px] rounded-[34px] overflow-hidden border border-violet-500/20 bg-[#15111F]/95 backdrop-blur-2xl shadow-[0_0_70px_rgba(139,92,246,.22)]">

            {/* Header */}

            <div className="px-8 pt-8 pb-6">

              <h2 className="text-4xl font-extrabold bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-transparent">

                Frequently Asked Questions

              </h2>

              <p className="mt-3 text-gray-400 leading-7">

                Everything you need to know before getting started with Augmentik.

              </p>

            </div>

            {/* Divider */}

            <div className="h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

            <div className="px-6 py-5 space-y-4">
                            {faqs.map((faq, index) => (

                <motion.div

                  key={index}

                  layout

                  transition={{
                    duration: 0.35,
                  }}

                  className="rounded-2xl border border-violet-500/15 bg-white/[0.03] overflow-hidden"

                >

                  <button

                    onClick={() =>
                      setOpenFAQ(openFAQ === index ? null : index)
                    }

                    className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-white/[0.04] transition-all"

                  >

                    <span className="text-lg font-semibold text-white pr-6 leading-8">

                      {faq.question}

                    </span>

                    <motion.div

                      animate={{
                        rotate: openFAQ === index ? 180 : 0,
                      }}

                      transition={{
                        duration: 0.3,
                      }}

                    >

                      <ChevronDown
                        size={22}
                        className="text-violet-300"
                      />

                    </motion.div>

                  </button>

         <AnimatePresence>
  {openFAQ === index && (
    <motion.div
      initial={{
        opacity: 0,
        height: 0,
      }}
      animate={{
        opacity: 1,
        height: "auto",
      }}
      exit={{
        opacity: 0,
        height: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="overflow-hidden"
    >
      <div className="px-6 pb-6">
        <div className="h-px bg-white/10 mb-5" />

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

        </motion.div>

      )}

      {/* ================= EXTRA DECORATIVE GLOWS ================= */}

      <motion.div

        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.3, 0.18],
        }}

        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute -left-40 bottom-[-120px] w-[420px] h-[420px] rounded-full bg-violet-500 blur-[160px]"

      />

      <motion.div

        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.28, 0.15],
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}

        className="absolute right-[-120px] top-[120px] w-[360px] h-[360px] rounded-full bg-fuchsia-500 blur-[150px]"

      />
            {/* ================= SMALL FLOATING PARTICLES ================= */}

      <motion.div
        animate={{
          y: [0, -16, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute top-[18%] left-[62%] w-2 h-2 rounded-full bg-violet-300 shadow-[0_0_18px_#a855f7]"
      />

      <motion.div
        animate={{
          y: [0, 18, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute bottom-[22%] right-[10%] w-3 h-3 rounded-full bg-fuchsia-400 shadow-[0_0_22px_#d946ef]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute top-[72%] left-[54%] w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_20px_#8b5cf6]"
      />

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute top-[30%] left-[30%] w-24 h-24 rounded-full bg-violet-500/10 blur-3xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute bottom-[15%] right-[24%] w-28 h-28 rounded-full bg-fuchsia-500/10 blur-3xl"
      />
            {/* ================= PAGE OVERLAY ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: showImage ? 1 : 0,
        }}
        transition={{
          duration: 1,
          delay: 0.3,
        }}
        className="pointer-events-none absolute inset-0 z-10"
      >

        <div className="absolute inset-0 bg-gradient-to-t from-[#160B2C]/25 via-transparent to-transparent" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,.18))]" />

      </motion.div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#160B2C] to-transparent" />

      {/* Top Fade */}

      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#160B2C]/50 to-transparent" />

      {/* Left Glow */}

      <div className="absolute left-[-120px] top-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-violet-500/10 blur-[120px]" />

      {/* Right Glow */}

      <div className="absolute right-[-120px] top-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-fuchsia-500/10 blur-[120px]" />
          </div>

  );

}