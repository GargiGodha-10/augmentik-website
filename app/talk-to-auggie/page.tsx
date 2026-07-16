"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";


export default function TalkToAuggiePage() {
  const router = useRouter();
const chatContainerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
const messagesEndRef = useRef<HTMLDivElement>(null);
const [showChat, setShowChat] = useState(false);
const [showDashboard, setShowDashboard] = useState(false);
const [showSkip, setShowSkip] = useState(false);
const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<
  { sender: "bot" | "user"; text: string }[]
>([
  {
    sender: "bot",
    text: "Hi, I'm Auggie 👋\nHow can I help you today?",
  },
]);

  const faqs = [
    {
      question: "Is Augmentik only for IT staffing companies?",
      answer:
        "Augmentik works best for IT staffing companies — especially those placing SAP, ServiceNow, Cloud, and Cybersecurity consultants. That said, it works for any staffing company that manages clients, vendors, candidates, and placements in a structured way.",
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
const handleQuestionClick = (faq: typeof faqs[number]) => {
  // Show user's question immediately
  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      text: faq.question,
    },
  ]);

  // Show typing indicator
  setIsTyping(true);

  // Wait 1 second before showing answer
  setTimeout(() => {
    setIsTyping(false);

    setMessages((prev) => [
      ...prev,
      {
        sender: "bot",
        text: faq.answer,
      },
    ]);
  }, 1000);
};

useEffect(() => {

  // Show Skip button after 5 seconds
  const skipTimer = setTimeout(() => {
    setShowSkip(true);
  }, 5000);

  // Open dashboard after 10 seconds
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
    clearTimeout(skipTimer);
    clearTimeout(timer1);
    clearTimeout(timer2);
  };

}, []);
useEffect(() => {
  messagesEndRef.current?.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}, [messages]);

  return (

    <div className="relative h-screen w-screen overflow-hidden bg-[#12091F]">
          <button
      onClick={() => router.push("/#assistant")}
      className="absolute top-6 left-6 z-[100]
      flex h-11 w-11 items-center justify-center
      rounded-full
      bg-white/10
      border border-violet-500/30
      backdrop-blur-md
      hover:bg-violet-600/30
      hover:scale-110
      transition-all duration-300"
    >
      <ArrowLeft className="h-5 w-5 text-white" />
    </button>

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
     {showSkip && (
  <button
    onClick={() => {
      if (videoRef.current) {
        videoRef.current.pause();
      }

      setShowChat(true);
      setShowDashboard(true);
    }}
    className="absolute top-8 right-8 z-50
      px-5 py-2.5
      rounded-full
      bg-black/40
      backdrop-blur-md
      border border-white/20
      text-white
      font-medium
      hover:bg-violet-600
      transition-all duration-300"
  >
    Skip →
  </button>
)}

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

        className="absolute inset-0 z-30 flex items-center justify-center px-12 overflow-hidden"

          >
<div
ref={chatContainerRef}
  className="relative w-[1320px] h-[760px] overflow-hidden rounded-[34px] border border-violet-500/20 bg-[#0F0C1B]/95 backdrop-blur-2xl shadow-[0_0_80px_rgba(124,58,237,.20)]"
>

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

             <div className="grid grid-cols-[280px_1fr] h-[580px] min-h-0 overflow-hidden">

                {/* ================= LEFT CHAT PANEL ================= */}

              <div className="border-r border-violet-500/15 p-7 overflow-hidden">

                 <div className="w-[210px] rounded-3xl bg-[#181326] border border-violet-500/20 p-5 mx-auto">

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

                   <div className="mt-6 rounded-2xl bg-[#21172F] border border-violet-500/10 p-4">

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

              <div className="px-6 py-8 h-full overflow-hidden">

          <div className="h-full min-h-0 rounded-[28px] bg-[#131021]/95 border border-violet-500/15 overflow-hidden flex flex-col">

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
{/* Chat + FAQ Layout */}
<div className="grid grid-cols-[1fr_320px] gap-8 px-8 pt-6 flex-1 min-h-0 overflow-hidden">

  {/* ================= LEFT : CHAT ================= */}

  <div className="flex flex-col h-full min-h-0 overflow-hidden">

    {/* Messages */}

 <div
  className="flex-1 min-h-0 overflow-y-auto overflow-x-hidden pr-4"
>
  <div className="space-y-5 pb-6">

      {messages.map((msg, index) => (

        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .35 }}
          className={`flex ${
            msg.sender === "user"
              ? "justify-end"
              : "justify-start"
          }`}
        >

          <div
            className={`max-w-[75%] rounded-2xl px-5 py-4 leading-7 whitespace-pre-line ${
              msg.sender === "user"
                ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                : "bg-[#21172F] border border-violet-500/10 text-gray-200"
            }`}
          >
            {msg.text}
          </div>

        </motion.div>

      ))}
      {isTyping && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="flex justify-start"
  >
    <div className="bg-[#21172F] border border-violet-500/10 rounded-2xl px-5 py-4">
      <div className="flex gap-2">
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-violet-300"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, delay: 0.2, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-violet-300"
        />
        <motion.span
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 0.6, delay: 0.4, repeat: Infinity }}
          className="w-2 h-2 rounded-full bg-violet-300"
        />
      </div>
    </div>
  </motion.div>
)}
</div>
      <div ref={messagesEndRef} />

    </div>

  </div>

  {/* ================= RIGHT : QUESTIONS ================= */}

 <div className="flex flex-col h-full min-h-0 rounded-2xl bg-[#181326] border border-violet-500/15 p-4">

    <h3 className="text-lg font-semibold text-white mb-4">
      Frequently Asked Questions
    </h3>

  <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-1">

      {faqs.map((faq, index) => (

        <motion.button
          key={index}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => handleQuestionClick(faq)}
          className="w-full rounded-xl border border-violet-500/15 bg-[#231B37] hover:bg-[#30224B] transition-all px-4 py-4 text-left"
        >

          <span className="text-white leading-6">
            {faq.question}
          </span>

        </motion.button>

      ))}

    </div>

  </div>

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