"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const reviews = [
  {
    name: "Michael Turner",
    role: "Head of Operations • IT Staffing",
    initials: "MT",
    color: "from-blue-500 to-cyan-400",
    review:
      "Augmentik changed how our entire team works. Managing clients, vendors, and candidate pipelines used to take a full day. Now it takes an hour. The missed opportunity dashboard alone is worth every rupee.",
  },
  {
    name: "Jennifer Mitchell",
    role: "Recruitment Lead • Tech Staffing",
    initials: "JM",
    color: "from-violet-500 to-fuchsia-500",
    review:
      "The AI JD Search tool saves every recruiter on my team 2–3 hours a day. We went from struggling to hit deadlines to consistently beating them. Shortlist quality went up noticeably as well.",
  },
  {
    name: "Robert Hayes",
    role: "CEO • Staffing Company",
    initials: "RH",
    color: "from-green-500 to-emerald-400",
    review:
      "Seeing revenue, profit, and missed opportunities on one dashboard changed how I make decisions. I finally know exactly where my business stands and where we're leaving money on the table.",
  },
];

// Height (in px) of your fixed navbar, so the pinned cards sit fully below
// it instead of being clipped behind it. Adjust to match your real navbar.
const NAV_HEIGHT = 96;

/* ------------------------------------------------------------------ */
/*  Single flip card                                                    */
/*  index 0/1/2 -> left/center/right                                    */
/* ------------------------------------------------------------------ */
function ReviewFlipCard({ review, index, scrollYProgress }) {
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
      className="absolute w-[300px] h-[440px] sm:w-[340px] sm:h-[460px]"
    >
      <motion.div
        style={{ rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* CLOSED face (card back — tech-frame / logo design) */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 rounded-3xl border border-violet-400/40 bg-[#1B1233] shadow-[0_20px_60px_rgba(0,0,0,.5),0_0_45px_rgba(168,85,247,.25)] flex flex-col items-center justify-center overflow-hidden"
        >
          {/* inner nested frame */}
          <div className="absolute inset-3 rounded-2xl border border-violet-300/20" />

          {/* corner ticks */}
          <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-violet-300/50 rounded-tl" />
          <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-violet-300/50 rounded-tr" />
          <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-violet-300/50 rounded-bl" />
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-violet-300/50 rounded-br" />

          {/* soft glow behind logo */}
          <div className="absolute w-40 h-40 rounded-full bg-violet-600/30 blur-[60px]" />

          <span className="relative text-8xl font-black bg-gradient-to-br from-white via-violet-200 to-fuchsia-400 bg-clip-text text-transparent">
            A
          </span>

          <p className="relative mt-3 text-sm font-semibold tracking-[4px] uppercase bg-gradient-to-r from-violet-200 to-fuchsia-300 bg-clip-text text-transparent">
            Augmentik
          </p>

          <div className="relative mt-4 flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span
                key={i}
                className="w-1.5 h-1.5 rounded-full bg-violet-400/60"
              />
            ))}
          </div>
        </div>

        {/* OPEN face (actual review content) */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          className="absolute inset-0 rounded-3xl bg-[#1B1233]/80 border border-violet-500/20 backdrop-blur-xl p-8 shadow-xl flex flex-col"
        >
          <div className="flex text-yellow-400 text-xl mb-6">★★★★★</div>

          <p className="text-gray-300 leading-8 text-lg mb-8 overflow-y-auto">
            {review.review}
          </p>

          <div className="flex items-center gap-4 mt-auto">
            <div
              className={`w-14 h-14 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold shrink-0`}
            >
              {review.initials}
            </div>

            <div>
              <h3 className="text-white font-semibold text-xl">{review.name}</h3>
              <p className="text-violet-300">{review.role}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main section — heading + pinned scroll cards live in ONE section,   */
/*  one shared background, no visible seam.                             */
/*                                                                       */
/*  Note: this wrapper uses `overflow-x-clip` instead of                */
/*  `overflow-hidden`. `overflow-hidden` on an ancestor silently breaks  */
/*  `position: sticky` (it becomes the sticky element's scroll           */
/*  container, and since it never scrolls internally, sticky just stops  */
/*  working). `overflow-x-clip` still clips the decorative glow blobs    */
/*  so nothing spills outside the page, but does NOT create a scroll     */
/*  container, so the pinned cards keep working correctly.               */
/* ------------------------------------------------------------------ */
export default function Customer() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  return (
    <section className="relative bg-[#140B26] overflow-x-clip">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-700/20 blur-[180px]" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-8 relative z-10 pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-5 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm mb-6">
            Customer Reviews
          </div>

          <h2 className="text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <div className="w-32 h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-6 mb-6" />

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Trusted by staffing leaders to streamline recruitment,
            improve productivity and make smarter business decisions.
          </p>
        </motion.div>
      </div>

      {/* Pinned scroll cards (stacked -> spread -> open) */}
      <div ref={targetRef} className="relative h-[350vh]">
        <div
          className="sticky w-full flex items-center justify-center overflow-hidden"
          style={{
            top: `${NAV_HEIGHT}px`,
            height: `calc(100vh - ${NAV_HEIGHT}px)`,
            perspective: "1800px",
          }}
        >
          {reviews.map((review, i) => (
            <ReviewFlipCard
              key={review.name}
              review={review}
              index={i}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
