"use client";

import React from "react";
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

interface WorkflowCardProps {
  step: Step;
  index: number;
}

function WorkflowCard({ step, index }: WorkflowCardProps) {
  const Icon = step.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.05 }}
      className="relative rounded-2xl w-full shrink-0 border border-white/10 px-3.5 sm:px-4 py-4 sm:py-5 overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, rgba(88,28,135,0.55), rgba(30,16,51,0.95))",
      }}
    >
      <div className="relative flex items-start justify-between mb-2.5 sm:mb-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg flex items-center justify-center bg-violet-500/15 border border-violet-400/30">
          <Icon size={16} className="text-violet-300 sm:hidden" />
          <Icon size={18} className="text-violet-300 hidden sm:block" />
        </div>
        <div className="text-[10px] sm:text-[11px] font-bold w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center border bg-gradient-to-br from-violet-500 to-purple-600 border-white/30 text-white">
          {index + 1}
        </div>
      </div>

      <h3 className="relative text-white font-semibold text-[13px] sm:text-[14px] leading-snug mb-1">
        {step.title}
      </h3>
      <p className="relative text-[11px] sm:text-[11.5px] leading-5 text-gray-300">
        {step.desc}
      </p>
    </motion.div>
  );
}

export default function WorkflowJourney() {
  return (
    <section className="relative bg-[#0f0721] overflow-hidden py-12 sm:py-16">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-[300px] w-[300px] sm:h-[500px] sm:w-[500px] rounded-full bg-purple-600/20 blur-[180px]" />

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
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center mb-8 sm:mb-12">
          <p
            className="uppercase text-violet-400 font-semibold mb-3"
            style={{ letterSpacing: "clamp(1px, 0.6vw, 6px)", fontSize: "clamp(11px, 2vw, 14px)" }}
          >
            Our Workflow
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white">
            The{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              Augmentik
            </span>{" "}
            Way
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto">
            From understanding your needs to delivering the perfect workforce —
            ten steps, fully automated.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 relative z-10">
            {STEPS.map((step, i) => (
              <WorkflowCard key={step.title} step={step} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}