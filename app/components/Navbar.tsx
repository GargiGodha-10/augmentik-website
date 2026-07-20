"use client";

import PageTransition from "./PageTransition";
import Image from "next/image";
import { useEffect, useState } from "react";

const SECTION_IDS = ["features", "resources", "assistant", "pricing", "about"];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [transitionOpen, setTransitionOpen] = useState(false);

  const navigateTo = (id: string) => {
    if (transitionOpen) return;

    setTransitionOpen(true);

    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });

      setActiveSection(id);
    }, 100);

    setTimeout(() => {
      setTransitionOpen(false);
    }, 1900);
  };

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        let bestId = "";
        let bestRatio = 0;

        visibilityMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        setActiveSection(bestRatio > 0 ? bestId : "");
      },
      {
        rootMargin: "-100px 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-[#0d0620]/95 via-[#150a2e]/90 to-[#1a0e38]/85 backdrop-blur-xl border-b border-fuchsia-500/10 shadow-[0_4px_30px_rgba(88,28,135,0.35)]">
        <div className="max-w-7xl mx-auto px-10 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center -ml-6 md:-ml-8">
           <Image
  src="/original logo.png"
  alt="Augmentik"
  width={260}
  height={80}
  className="w-60 h-auto object-contain -my-3"
  priority
/>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={() => navigateTo("features")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeSection === "" || activeSection === "features"
                  ? "bg-[#1c1330] text-white border border-violet-500 shadow-[0_0_14px_rgba(139,92,246,.35)] scale-105"
                  : "bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105"
              }`}
            >
              Features
            </button>

            <button
              type="button"
              onClick={() => navigateTo("resources")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeSection === "" || activeSection === "resources"
                  ? "bg-[#1c1330] text-white border border-violet-500 shadow-[0_0_14px_rgba(139,92,246,.35)] scale-105"
                  : "bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105"
              }`}
            >
              Resources
            </button>

            <button
              type="button"
              onClick={() => navigateTo("assistant")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeSection === "" || activeSection === "assistant"
                  ? "bg-[#1c1330] text-white border border-violet-500 shadow-[0_0_14px_rgba(139,92,246,.35)] scale-105"
                  : "bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105"
              }`}
            >
              AI Assistant
            </button>

            <button
              type="button"
              onClick={() => navigateTo("pricing")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeSection === "" || activeSection === "pricing"
                  ? "bg-[#1c1330] text-white border border-violet-500 shadow-[0_0_14px_rgba(139,92,246,.35)] scale-105"
                  : "bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105"
              }`}
            >
              Pricing
            </button>

            <button
              type="button"
              onClick={() => navigateTo("about")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeSection === "" || activeSection === "about"
                  ? "bg-[#1c1330] text-white border border-violet-500 shadow-[0_0_14px_rgba(139,92,246,.35)] scale-105"
                  : "bg-transparent border border-white/10 text-gray-400 hover:text-white hover:border-white/20 hover:scale-105"
              }`}
            >
              About
            </button>
          </div>
        </div>
      </nav>
      <PageTransition open={transitionOpen} />
    </>
  );
}