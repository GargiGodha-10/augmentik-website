"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  ClipboardList,
  FolderSearch,
  ScanSearch,
  Video,
  UserCheck,
  FileCheck,
  Users,
  Rocket,
  BarChart3,
  HandCoins,
} from "lucide-react";

type IconType = React.ComponentType<{ size?: number; className?: string }>;

interface Step {
  icon: IconType;
  title: string;
  desc: string;
}

const STEPS: Step[] = [
  {
    icon: ClipboardList,
    title: "Understand Your Needs",
    desc: "We learn your business, goals and role requirements.",
  },
  {
    icon: FolderSearch,
    title: "Smart Sourcing",
    desc: "AI searches across 1000+ platforms to find the best talent.",
  },
  {
    icon: ScanSearch,
    title: "AI Screening",
    desc: "Resumes are scanned and evaluated for skills and potential.",
  },
  {
    icon: Video,
    title: "AI Interviews",
    desc: "AI conducts interviews and evaluates fitment and potential.",
  },
  {
    icon: UserCheck,
    title: "Smart Selection",
    desc: "Best candidates are ranked and recommended for you.",
  },
  {
    icon: HandCoins,
    title: "Offer Management",
    desc: "Offers are generated and sent automatically to candidates.",
  },
  {
    icon: Users,
    title: "Client Approval",
    desc: "Clients review and approve the final shortlist with ease.",
  },
  {
    icon: FileCheck,
    title: "Smart Onboarding",
    desc: "New hires are onboarded seamlessly with AI assistance.",
  },
  {
    icon: Rocket,
    title: "Workforce Deployed",
    desc: "Your new hire starts delivering value from day one.",
  },
  {
    icon: BarChart3,
    title: "Optimize & Grow",
    desc: "Continuous insights and optimization for better results.",
  },
];

const STEP_MS = 900;

const topRow = STEPS.slice(0, 5);
const bottomRow = STEPS.slice(5, 10);

interface WorkflowCardProps {
  step: Step;
  index: number;
  activeStep: number;
}

function WorkflowCard({ step, index, activeStep }: WorkflowCardProps) {
  const Icon = step.icon;
  const revealed = activeStep >= index;
  const isCurrent = activeStep === index;
  const isDone = activeStep > index;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 14 }}
      animate={
        revealed
          ? { opacity: 1, scale: isCurrent ? 1.04 : 1, y: 0 }
          : { opacity: 0.35, scale: 0.94, y: 8 }
      }
      transition={{ duration: 0.35, ease: "easeOut" }}
      whileHover={{ y: -4 }}
      className={`relative rounded-2xl w-full shrink-0 border transition-colors duration-300 px-4 py-5 overflow-hidden ${
        isCurrent || isDone
          ? "border-violet-400/70 shadow-[0_8px_30px_rgba(139,92,246,.25)]"
          : "border-violet-500/25"
      }`}
      style={{
        background:
          isCurrent || isDone
            ? "linear-gradient(160deg, rgba(88,28,135,0.55), rgba(30,16,51,0.95))"
            : "linear-gradient(160deg, rgba(76,29,149,0.28), rgba(24,13,41,0.9))",
      }}
    >
      {isCurrent && (
        <motion.div
          className="pointer-events-none absolute -inset-8 rounded-full bg-violet-500/10 blur-2xl"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="relative flex items-start justify-between mb-3">
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center ${
            isCurrent || isDone
              ? "bg-gradient-to-br from-violet-500 to-purple-600"
              : "bg-gradient-to-br from-violet-600/25 to-purple-700/15"
          }`}
        >
          <Icon size={18} className={isCurrent || isDone ? "text-white" : "text-violet-300"} />
        </div>
        <div
          className={`text-[11px] font-bold w-6 h-6 rounded-full flex items-center justify-center border ${
            isDone
              ? "bg-gradient-to-br from-violet-500 to-purple-600 border-white/30 text-white"
              : isCurrent
              ? "bg-white text-[#170c2c] border-white"
              : "bg-transparent border-violet-500/30 text-violet-400"
          }`}
        >
          {isDone ? "✓" : index + 1}
        </div>
      </div>

      <h3 className="relative text-white font-semibold text-[14px] leading-snug mb-1">
        {step.title}
      </h3>
      <p className={`relative text-[11.5px] leading-5 ${isCurrent || isDone ? "text-gray-300" : "text-gray-500"}`}>
        {step.desc}
      </p>

      {isCurrent && (
        <div className="relative mt-3 h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-violet-400 to-purple-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: STEP_MS / 1000, ease: "linear" }}
          />
        </div>
      )}
    </motion.div>
  );
}

export default function WorkflowJourney() {
  const [activeStep, setActiveStep] = useState<number>(-1);
  const [started, setStarted] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let cancelled = false;

    const run = async () => {
      for (let i = 0; i <= STEPS.length - 1; i++) {
        if (cancelled) return;
        setActiveStep(i);
        await new Promise((r) => setTimeout(r, STEP_MS));
      }
      // after the last step, mark it done too and stop — no reset, no loop
      if (cancelled) return;
      setActiveStep(STEPS.length);
    };

    run();
    return () => {
      cancelled = true;
    };
  }, [started]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0f0721] overflow-hidden py-16"
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
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center mb-12">
        <p className="uppercase tracking-[6px] text-violet-400 font-semibold text-sm mb-3">
          Our Workflow
        </p>
        <h2 className="text-5xl font-extrabold text-white">
          The{" "}
          <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
            Augmentik
          </span>{" "}
          Way
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          From understanding your needs to delivering the perfect workforce —
          ten steps, fully automated.
        </p>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-5 gap-4 mb-4 relative z-10">
          {topRow.map((step, i) => (
            <WorkflowCard key={step.title} step={step} index={i} activeStep={activeStep} />
          ))}
        </div>
        <div className="grid grid-cols-5 gap-4 relative z-10">
          {bottomRow.map((step, i) => (
            <WorkflowCard
              key={step.title}
              step={step}
              index={i + 5}
              activeStep={activeStep}
            />
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}