"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  UserCheck,
  BarChart3,
  ShieldCheck,
  Briefcase,
  CalendarClock,
  FileText,
} from "lucide-react";

const resources = [
  {
    icon: UserCheck,
    image: "/politician.png",
    title: "Candidate Onboarding",
    description:
      "Ensure a smooth transition from candidate selection to successful onboarding with end-to-end support.",
  },
  {
    icon: BarChart3,
    title: "Resume Score",
    description:
      "Our team carefully evaluates your resume and shares your profile score at the earliest.",
  },
  {
    icon: ShieldCheck,
    title: "Profile Verification",
    description:
      "Verify your profile, skills, and experience to build credibility and stand out to recruiters.",
  },
  {
    icon: Briefcase,
    title: "Job Matches",
    description:
      "Discover personalized job opportunities based on your profile, skills, experience, and career goals.",
  },
  {
    icon: CalendarClock,
    title: "Interview Scheduling",
    description:
      "Schedule interviews effortlessly with automated reminders and recruiter coordination.",
  },
  {
    icon: FileText,
    title: "Offer Management",
    description:
      "Receive, track and manage offers securely in one centralized place.",
  },
];

export default function Resources() {
  const [paused, setPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  // Tracks whether the user is currently interacting (scrolling/dragging) manually
  const isUserScrolling = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Manual mouse-drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  // We render 3 copies of the cards so we can wrap seamlessly in BOTH directions.
  const cards = [...resources, ...resources, ...resources];

  // Set initial scroll position to the start of the middle copy once mounted
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    track.scrollLeft = oneSetWidth;
  }, []);

  // IMPORTANT: this jump must be INSTANT (no smooth animation),
  // otherwise it visually looks like the carousel is resetting to the start.
  const wrapIfNeeded = () => {
    const track = trackRef.current;
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;

    if (track.scrollLeft <= 0) {
      track.scrollLeft += oneSetWidth;
    } else if (track.scrollLeft >= oneSetWidth * 2) {
      track.scrollLeft -= oneSetWidth;
    }
  };

  useAnimationFrame(() => {
    const track = trackRef.current;
    if (paused || isUserScrolling.current || isDragging.current || !track) return;

    track.scrollLeft += 0.8;
    wrapIfNeeded();
  });

  const handleUserScrollStart = () => {
    isUserScrolling.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleUserScrollEnd = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    // Resume auto-scroll a little while after the user stops scrolling,
    // continuing from whatever the current scrollLeft is — no reset.
    resumeTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
    }, 800);
  };

  // --- Mouse drag-to-scroll handlers ---
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track) return;
    isDragging.current = true;
    handleUserScrollStart();
    dragStartX.current = e.clientX;
    dragStartScrollLeft.current = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (!track || !isDragging.current) return;
    const delta = e.clientX - dragStartX.current;
    track.scrollLeft = dragStartScrollLeft.current - delta;
    wrapIfNeeded();
  };

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const track = trackRef.current;
    if (track && track.hasPointerCapture(e.pointerId)) {
      track.releasePointerCapture(e.pointerId);
    }
    isDragging.current = false;
    handleUserScrollEnd();
  };

  return (
    <section
      id="resources"
      className="relative overflow-hidden pt-12 sm:pt-14 md:pt-16 pb-20 sm:pb-24 md:pb-28 bg-[#140B26] text-white"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-violet-700/20 blur-[180px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] bg-purple-600/20 blur-[180px] rounded-full" />

      {/* Floating Particles */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-3 h-3 bg-violet-400 rounded-full animate-pulse" />
        <div className="absolute top-44 right-32 w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
        <div className="absolute bottom-32 left-1/3 w-3 h-3 bg-violet-500 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-24 w-2 h-2 bg-fuchsia-400 rounded-full animate-bounce" />
      </div>

      {/* Heading (still constrained/padded) */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="mt-10 sm:mt-14 md:mt-18">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
              <span className="bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
                Resources
              </span>
            </h2>
          </div>

          <div className="flex justify-center mt-4 sm:mt-6">
            <div className="h-1 w-20 sm:w-28 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 shadow-[0_0_18px_rgba(168,85,247,0.6)]" />
          </div>

          <p className="max-w-3xl mx-auto mt-5 sm:mt-8 text-sm sm:text-base md:text-[20px] leading-7 sm:leading-8 md:leading-9 font-light text-gray-300 tracking-wide">
            Submit your resume,
            <span className="text-violet-300 font-medium">
              {" "}
              verify your profile,
            </span>{" "}
            and unlock
            <span className="text-violet-300 font-medium">
              {" "}
              opportunities
            </span>{" "}
            that match
            <span className="text-violet-300 font-medium">
              {" "}
              your expertise.
            </span>
          </p>
        </div>
      </div>

      {/* Infinite Carousel — full width, edge-to-edge */}
      <div
        className="relative w-full py-3"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          ref={trackRef}
          onWheel={() => {
            handleUserScrollStart();
            handleUserScrollEnd();
          }}
          onTouchStart={handleUserScrollStart}
          onTouchEnd={handleUserScrollEnd}
          onTouchCancel={handleUserScrollEnd}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={endDrag}
          onPointerLeave={(e) => {
            if (isDragging.current) endDrag(e);
          }}
          onScroll={() => {
            if (!isDragging.current) wrapIfNeeded();
          }}
          className="flex gap-4 sm:gap-5 md:gap-6 w-full overflow-x-auto cursor-grab active:cursor-grabbing px-4 md:px-8 select-none [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {cards.map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[230px] sm:w-[280px] md:w-[330px] bg-[#24163F]/80 rounded-3xl p-4 sm:p-5 md:p-6 backdrop-blur-md cursor-pointer"
            >
              <motion.div
                className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br from-violet-600/20 to-purple-500/10 border border-violet-500/20 shadow-[0_0_20px_rgba(168,85,247,0.25)]"
                whileHover={{
                  rotate: [0, -10, 8, -4, 0],
                  transition: { duration: 0.5, ease: "easeInOut" },
                }}
              >
                {item.image ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={40}
                    height={40}
                    className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10"
                  />
                ) : (
                  <item.icon
                    className="text-violet-300 w-5 h-5 sm:w-6 sm:h-6 md:w-[26px] md:h-[26px]"
                    strokeWidth={1.8}
                  />
                )}
              </motion.div>

              <h3 className="mt-4 sm:mt-5 md:mt-6 text-[18px] sm:text-[21px] md:text-[24px] font-extrabold leading-tight tracking-tight bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
                {item.title}
              </h3>

              <div className="mt-3 sm:mt-4 h-[2px] w-11 sm:w-14 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />

              <p className="mt-3 sm:mt-4 md:mt-5 text-[13px] sm:text-[15px] md:text-[17px] leading-6 sm:leading-7 md:leading-8 text-gray-300 font-light tracking-wide">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}