"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  BookOpen,
  MessageCircle,
  Zap,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Card data (same text/icons as before)                             */
/* ------------------------------------------------------------------ */
const cardsData = [
  {
    icon: BookOpen,
    title: "AI Walkthroughs",
    desc: "Step-by-step AI guidance that helps users explore every feature with ease.",
  },
  {
    icon: MessageCircle,
    title: "Smart Conversations",
    desc: "Interact naturally with Auggie and receive personalized, context-aware responses.",
  },
  {
    icon: Zap,
    title: "Instant Guidance",
    desc: "Receive instant recommendations, suggestions and answers whenever you need them.",
  },
];

// Height (in px) of your site's fixed/sticky navbar. Adjust this if your
// navbar is taller/shorter, so the pinned cards sit fully below it instead
// of being clipped behind it.
const NAV_HEIGHT = 96;

/* ------------------------------------------------------------------ */
/*  Single flip card                                                   */
/*  index 0/1/2 -> left/center/right                                   */
/* ------------------------------------------------------------------ */
function FlipCard({ icon: Icon, title, desc, index, scrollYProgress }) {
  const offset = index - 1; // -1, 0, 1

  // Stage 1: stacked & compact -> spread apart (0 -> 0.25 of scroll)
  const compactX = offset * 34;
  const spreadX = offset * 340;
  const compactRotate = offset * 12;
  const spreadRotate = offset * 5;

  const x = useTransform(scrollYProgress, [0, 0.25], [compactX, spreadX]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [compactRotate, spreadRotate]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);

  // Stage 2: each card flips open, staggered one after another.
  // All flips finish by ~0.78 of scroll, leaving a "hold" buffer (0.78 -> 1)
  // where the cards sit fully open and visible *before* the section unpins
  // and the page is allowed to continue scrolling down.
  const flipStart = 0.3 + index * 0.12;
  const flipEnd = flipStart + 0.25;
  const rotateY = useTransform(scrollYProgress, [flipStart, flipEnd], [0, 180]);

  return (
    <motion.div
      style={{ x, rotate, scale, zIndex: 10 - index }}
      className="absolute w-[280px] h-[360px] sm:w-[320px] sm:h-[400px]"
    >
      <motion.div
        style={{ rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* CLOSED face (card back) */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 rounded-3xl border border-violet-500/30 bg-gradient-to-br from-violet-600 via-fuchsia-600 to-purple-700 shadow-[0_20px_60px_rgba(168,85,247,.35)] flex items-center justify-center"
        >
          <Icon size={72} className="text-white/90" />
        </div>

        {/* OPEN face (revealed content) */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl p-7 flex flex-col justify-center hover:border-violet-400 hover:bg-white/10 hover:shadow-[0_0_35px_rgba(168,85,247,.35)] transition-all duration-300"
        >
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-500 flex items-center justify-center mb-5">
            <Icon size={30} />
          </div>

          <h3 className="text-[24px] font-bold text-violet-50">{title}</h3>

          <div className="mt-4 h-[2px] w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />

          <p className="mt-5 text-[18px] leading-8 text-gray-300">{desc}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Pinned scroll section that drives the card animation.              */
/*  IMPORTANT: this must NOT be nested inside any ancestor that has     */
/*  overflow-hidden/auto/scroll — that turns the ancestor into the      */
/*  sticky element's scroll container instead of the real page, and     */
/*  since that ancestor never scrolls internally, "sticky" silently     */
/*  stops working (the block just scrolls by at normal speed). Keep     */
/*  this as its own top-level <section>, a sibling of the hero section. */
/* ------------------------------------------------------------------ */
function ScrollCardsSection() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      id="assistant-cards"
      ref={targetRef}
      className="relative h-[350vh] bg-[#160B2C]"
    >
      <div
        className="sticky w-full flex items-center justify-center overflow-hidden"
        style={{
          top: `${NAV_HEIGHT}px`,
          height: `calc(100vh - ${NAV_HEIGHT}px)`,
          perspective: "1800px",
        }}
      >
        {cardsData.map((c, i) => (
          <FlipCard
            key={c.title}
            icon={c.icon}
            title={c.title}
            desc={c.desc}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section                                                       */
/* ------------------------------------------------------------------ */
export default function AIAssistant() {
  return (
    <>
      <section
        id="assistant"
        className="relative overflow-hidden bg-[#160B2C] pt-6 pb-24 text-white"
      >
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

        {/* Glow */}
        <div className="absolute -left-40 top-10 w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[170px]" />
        <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[180px]" />

        {/* Floating Particles */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 left-20 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_25px_#a855f7]"
        />
        <motion.div
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute top-40 left-[30%] w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_30px_#d946ef]"
        />
        <motion.div
          animate={{ y: [0, -25, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-72 right-[18%] w-3 h-3 rounded-full bg-violet-300 shadow-[0_0_25px_#8b5cf6]"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute bottom-28 left-[15%] w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_35px_#9333ea]"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-8">
          {/* Top Layout */}
          <div className="grid lg:grid-cols-2 gap-16 items-center -mt-14">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <p className="uppercase tracking-[7px] text-violet-400 font-semibold">
                AI ASSISTANT
              </p>

              <h2 className="mt-2 text-6xl font-black leading-tight bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                Meet Auggie
              </h2>

              <p className="mt-4 text-[20px] leading-9 font-light text-gray-300 max-w-xl">
                Experience intelligent conversations,
                <span className="text-violet-300 font-medium">
                  {" "}personalized assistance
                </span>
                , instant guidance and
                <span className="text-violet-300 font-medium">
                  {" "}AI-powered walkthroughs
                </span>
                {" "}designed to make every interaction smoother, smarter and more engaging.
              </p>
            </motion.div>

            {/* RIGHT */}
            <div className="flex flex-col items-start pl-1">
              {/* Glow */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                  opacity: [0.35, 0.6, 0.35],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-[700px] h-[700px] rounded-full bg-violet-500/25 blur-[180px]"
              />

              {/* Auggie */}
              <motion.video
                initial={{
                  opacity: 0,
                  scale: .35,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                autoPlay
                muted
                loop
                playsInline
                className="
                  relative
                  z-20
                  w-[560px]
                  object-contain
                  rounded-full
                  pointer-events-none
                  select-none
                  drop-shadow-[0_0_70px_rgba(168,85,247,.8)]
                  mt-50
                "
              >
                <source src="/auggie hi .mp4" type="video/mp4" />
              </motion.video>

              <Link href="/talk-to-auggie" className="self-start -ml-160 -mt-2">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  whileTap={{
                    scale: 0.98,
                  }}
                  className="
                    relative
                    -top-8
                    w-[330px]
                    rounded-3xl
                    border
                    border-violet-500/30
                    bg-[#24153d]/90
                    backdrop-blur-xl
                    px-6
                    py-3
                    shadow-[0_15px_45px_rgba(0,0,0,.35)]
                    hover:border-violet-400
                    hover:shadow-[0_0_45px_rgba(168,85,247,.45)]
                    transition-all
                    duration-300
                  "
                >
                  <h3 className="text-2xl font-extrabold bg-gradient-to-r from-white via-violet-100 to-purple-400 bg-clip-text text-transparent">
                    Talk to Auggie
                  </h3>

                  <p className="mt-2 text-base font-semibold tracking-[2px] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
                    Click to Start Chatting
                  </p>
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll-driven flip cards (stacked -> spread -> open). Kept as its
          own section so no overflow-hidden ancestor breaks the sticky pin. */}
      <ScrollCardsSection />
    </>
  );
}
