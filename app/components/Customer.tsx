"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

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

function useViewportSize() {
  const [size, setSize] = useState({ width: 1280, height: 800 });

  useEffect(() => {
    const update = () =>
      setSize({ width: window.innerWidth, height: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

/* ------------------------------------------------------------------ */
/*  Card width, height, spread distance, and font scale are computed    */
/*  TOGETHER from the same viewport width AND height so that:           */
/*   1) three cards + gaps always fit the screen width (no overlap)     */
/*   2) the card's height never exceeds the visible sticky area         */
/*      (no more cut-off cards on short mobile viewports)                */
/*   3) text/icons scale down with the card instead of overflowing it   */
/* ------------------------------------------------------------------ */
function getResponsiveCardMetrics(width, height, navHeight) {
  const sidePadding = width < 400 ? 10 : width < 640 ? 16 : width < 1024 ? 24 : 32;
  const gap = width < 400 ? 8 : width < 640 ? 12 : width < 1024 ? 20 : 28;

  // Width constraint: 3 cards + 2 gaps must fit inside the padded viewport.
  const usableWidth = width - sidePadding * 2;
  const widthBasedCardWidth = (usableWidth - gap * 2) / 3;

  const aspect = 460 / 340; // original card height/width ratio

  // Height constraint: card must fit inside the sticky viewing area, minus
  // a little breathing room above/below so it isn't flush with the edges.
  const availableHeight = height - navHeight - 48;
  const heightBasedCardWidth = availableHeight / aspect;

  const rawCardWidth = Math.min(widthBasedCardWidth, heightBasedCardWidth);
  const cardWidth = Math.min(340, Math.max(118, rawCardWidth));
  const cardHeight = cardWidth * aspect;

  const spreadDistance = cardWidth + gap; // guarantees no overlap, ever
  const compactDistance = cardWidth * 0.11;
  const fontScale = Math.max(0.55, cardWidth / 340); // don't let text vanish

  return { cardWidth, cardHeight, spreadDistance, compactDistance, fontScale };
}

function ReviewFlipCard({
  review,
  index,
  scrollYProgress,
  cardWidth,
  cardHeight,
  spreadDistance,
  compactDistance,
  fontScale,
}) {
  const offset = index - 1; // -1, 0, 1

  const compactX = offset * compactDistance;
  const spreadX = offset * spreadDistance;
  const compactRotate = offset * 12;
  const spreadRotate = offset * 5;

  const x = useTransform(scrollYProgress, [0, 0.25], [compactX, spreadX]);
  const rotate = useTransform(scrollYProgress, [0, 0.25], [compactRotate, spreadRotate]);
  const zoomScale = useTransform(scrollYProgress, [0, 0.25], [0.8, 1]);

  const flipStart = 0.3 + index * 0.12;
  const flipEnd = flipStart + 0.25;
  const rotateY = useTransform(scrollYProgress, [flipStart, flipEnd], [0, 180]);

  const px = (base, min) => `${Math.max(min, base * fontScale)}px`;

  return (
    <motion.div
      style={{
        x,
        rotate,
        scale: zoomScale,
        zIndex: 10 - index,
        width: cardWidth,
        height: cardHeight,
      }}
      className="absolute"
    >
      <motion.div
        style={{ rotateY, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* CLOSED face */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className="absolute inset-0 rounded-3xl border border-violet-400/40 bg-[#1B1233] shadow-[0_20px_60px_rgba(0,0,0,.5),0_0_45px_rgba(168,85,247,.25)] flex flex-col items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-3 rounded-2xl border border-violet-300/20" />

          <span className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-violet-300/50 rounded-tl" />
          <span className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-violet-300/50 rounded-tr" />
          <span className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-violet-300/50 rounded-bl" />
          <span className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-violet-300/50 rounded-br" />

          <div
            className="absolute rounded-full bg-violet-600/30 blur-[60px]"
            style={{ width: px(190, 70), height: px(190, 70) }}
          />

          <div
            className="relative flex items-center justify-center"
            style={{ width: px(190, 70), height: px(190, 70) }}
          >
            <Image
              src="/main_auggie_logo-removebg-preview.png"
              alt="Augmentik Logo"
              width={200}
              height={200}
              className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(168,85,247,.5)]"
            />
          </div>

          <div className="relative mt-3 flex gap-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i} className="w-1.5 h-1.5 rounded-full bg-violet-400/60" />
            ))}
          </div>
        </div>

        {/* OPEN face — overflow-hidden keeps stars/text clipped to the rounded border */}
        <div
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            padding: px(28, 10),
          }}
          className="absolute inset-0 rounded-3xl bg-[#1B1233]/80 border border-violet-500/20 backdrop-blur-xl shadow-xl flex flex-col overflow-hidden"
        >
          <div
            className="flex text-yellow-400 shrink-0"
            style={{ fontSize: px(20, 9), marginBottom: px(20, 6) }}
          >
            ★★★★★
          </div>

          <p
            className="text-gray-300 overflow-y-auto"
            style={{
              fontSize: px(17, 9),
              lineHeight: 1.55,
              marginBottom: px(26, 8),
            }}
          >
            {review.review}
          </p>

          <div className="flex items-center gap-3 mt-auto shrink-0">
            <div
              className={`rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold shrink-0`}
              style={{ width: px(52, 26), height: px(52, 26), fontSize: px(15, 8) }}
            >
              {review.initials}
            </div>

            <div className="min-w-0">
              <h3
                className="text-white font-semibold truncate"
                style={{ fontSize: px(19, 10) }}
              >
                {review.name}
              </h3>
              <p className="text-violet-300 truncate" style={{ fontSize: px(15, 8) }}>
                {review.role}
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Customer() {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 420,
    damping: 38,
    mass: 0.25,
  });

  const { width, height } = useViewportSize();
  const navHeight = width < 768 ? 72 : 96;

  const { cardWidth, cardHeight, spreadDistance, compactDistance, fontScale } =
    getResponsiveCardMetrics(width, height, navHeight);

  return (
    <section className="relative bg-[#140B26] overflow-x-clip">
      <div className="absolute top-0 left-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] rounded-full bg-purple-700/20 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10 pt-16 sm:pt-20 md:pt-28 pb-8 sm:pb-10 md:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <div className="inline-block px-4 sm:px-5 py-1.5 sm:py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-xs sm:text-sm mb-5 sm:mb-6">
            Customer Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-none">
            <span className="bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <div className="w-20 sm:w-28 md:w-32 h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-5 sm:mt-6 mb-5 sm:mb-6" />

          <p className="text-gray-300 max-w-3xl mx-auto text-sm sm:text-base md:text-lg">
            Trusted by staffing leaders to streamline recruitment,
            improve productivity and make smarter business decisions.
          </p>
        </motion.div>
      </div>

      <div ref={targetRef} className="relative h-[150vh]">
        <div
          className="sticky w-full flex items-center justify-center overflow-hidden"
          style={{
            top: `${navHeight}px`,
            height: `calc(100vh - ${navHeight}px)`,
            perspective: "1800px",
          }}
        >
          {reviews.map((review, i) => (
            <ReviewFlipCard
              key={review.name}
              review={review}
              index={i}
              scrollYProgress={smoothProgress}
              cardWidth={cardWidth}
              cardHeight={cardHeight}
              spreadDistance={spreadDistance}
              compactDistance={compactDistance}
              fontScale={fontScale}
            />
          ))}
        </div>
      </div>
    </section>
  );
}