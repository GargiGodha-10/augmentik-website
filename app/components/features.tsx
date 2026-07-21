"use client";

import { motion, useAnimationFrame } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  ScanSearch,
  Briefcase,
  BookOpen,
  Users,
  Handshake,
  Wallet,
  Workflow,
} from "lucide-react";

const cards = [
  {
    icon: "/assistant.png",
    image: true,
    title: "AI Find Resources",
    description:
      "Find the right candidates instantly using AI-powered matching.",
  },
  {
    icon: ScanSearch,
    image: false,
    title: "Resume Screener",
    description:
      "Automatically shortlist resumes using advanced screening.",
  },
  {
    icon: Briefcase,
    image: false,
    title: "Job Description AI",
    description:
      "Extract key hiring requirements from every job description.",
  },
  {
    icon: BookOpen,
    image: false,
    title: "Knowledge Assistant",
    description:
      "Access your company's knowledge base with an AI assistant.",
  },
  {
    icon: Users,
    image: false,
    title: "Client Management",
    description:
      "Manage clients, communication and projects from one place.",
  },
  {
    icon: Handshake,
    image: false,
    title: "Vendor Management",
    description:
      "Track vendors, contracts and performance efficiently.",
  },
  {
    icon: Wallet,
    image: false,
    title: "Invoicing & Finance",
    description:
      "Generate invoices and monitor payments with ease.",
  },
  {
    icon: Workflow,
    image: false,
    title: "Recruitment Workflow",
    description:
      "Automate every recruitment stage from sourcing to hiring.",
  },
];

// Triple the set so we can wrap seamlessly in BOTH directions.
const loopCards = [...cards, ...cards, ...cards];

export default function Features() {
  const [paused, setPaused] = useState(false);

  const trackRef = useRef<HTMLDivElement>(null);

  // Tracks whether the user is currently interacting (scrolling/dragging) manually
  const isUserScrolling = useRef(false);
  const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Manual mouse-drag state
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartScrollLeft = useRef(0);

  // Set initial scroll position to the start of the middle copy once mounted
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const oneSetWidth = track.scrollWidth / 3;
    track.scrollLeft = oneSetWidth;
  }, []);

  // IMPORTANT: this jump must be INSTANT (no smooth scrolling on the track),
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

    track.scrollLeft += 0.7;
    wrapIfNeeded();
  });

  const handleUserScrollStart = () => {
    isUserScrolling.current = true;
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
  };

  const handleUserScrollEnd = () => {
    if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
    // Resume auto-scroll shortly after the user stops, continuing from
    // whatever the current scrollLeft is — no reset to the start.
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
      id="features"
      className="relative overflow-hidden pt-20 sm:pt-24 md:pt-30 pb-14 sm:pb-16 md:pb-20 bg-[#140B26] text-white"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="absolute bottom-0 right-0 h-[280px] w-[280px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

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

        <div className="text-center mb-8 sm:mb-10 max-w-7xl mx-auto px-6 sm:px-8">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-none">
            <span className="bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
              Features
            </span>
          </h2>

          <div className="flex justify-center mt-3 mb-4">
            <div className="h-1 w-20 sm:w-28 rounded-full bg-gradient-to-r from-violet-500 via-fuchsia-500 to-purple-500 shadow-[0_0_20px_rgba(168,85,247,.8)]" />
          </div>

          <p className="mx-auto mt-1 max-w-3xl text-sm sm:text-base md:text-lg leading-7 sm:leading-8 md:leading-9 text-gray-300">
            Streamline recruitment,
            <span className="font-medium text-violet-300"> organize knowledge </span>
            and
            <span className="font-medium text-violet-300"> automate workflows </span>
            with Artificial Intelligence.
          </p>
        </div>

        {/* Moving Cards — full width, edge-to-edge, native scroll + drag */}
        <div
          className="relative w-full pt-6 sm:pt-8 pb-4 sm:pb-6"
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
            {loopCards.map((card, index) => (
              <div
                key={index}
                className="
                  group
                  min-w-[240px]
                  max-w-[240px]
                  sm:min-w-[290px]
                  sm:max-w-[290px]
                  md:min-w-[340px]
                  md:max-w-[340px]
                  flex-shrink-0
                  rounded-3xl
                  border border-violet-500/20
                  bg-gradient-to-br
                  from-[#24163F]
                  to-[#2F1A4D]
                  p-5
                  sm:p-6
                  md:p-8
                  backdrop-blur-xl
                  shadow-lg
                "
              >
                <motion.div
                  className="mb-4 sm:mb-5 flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-purple-500/10 shadow-[0_0_20px_rgba(168,85,247,.25)]"
                  whileHover={{
                    rotate: [0, -10, 8, -4, 0],
                    transition: { duration: 0.5, ease: "easeInOut" },
                  }}
                >
                  {card.image ? (
                    <Image
                      src={card.icon as string}
                      alt={card.title}
                      width={40}
                      height={40}
                      className="w-8 h-8 sm:w-10 sm:h-10 md:w-[52px] md:h-[52px]"
                    />
                  ) : (
                    <card.icon
                      className="text-violet-300 w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px]"
                      strokeWidth={1.8}
                    />
                  )}
                </motion.div>

                <h3 className="text-[20px] sm:text-[24px] md:text-[30px] font-extrabold leading-tight bg-gradient-to-r from-white via-violet-200 to-purple-400 bg-clip-text text-transparent">
                  {card.title}
                </h3>

                <div className="mt-3 sm:mt-4 h-[2px] w-12 sm:w-16 rounded-full bg-gradient-to-r from-violet-500 to-purple-400" />

                <p className="mt-3 sm:mt-4 text-[13.5px] sm:text-[15px] md:text-[17px] leading-6 sm:leading-7 md:leading-8 text-gray-300">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}