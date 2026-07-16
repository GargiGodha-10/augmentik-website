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

    // Jump immediately while the screen is covered
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "instant",
        block: "start",
      });

      setActiveSection(id);
    }, 100);

    // Remove transition
    setTimeout(() => {
      setTransitionOpen(false);
    }, 1900);
  };

  useEffect(() => {
    const sections = SECTION_IDS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );

    if (sections.length === 0) return;

    // Track how visible each section currently is
    const visibilityMap = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          visibilityMap.set(entry.target.id, entry.intersectionRatio);
        });

        // Pick the section with the highest visible ratio right now
        let bestId = "";
        let bestRatio = 0;

        visibilityMap.forEach((ratio, id) => {
          if (ratio > bestRatio) {
            bestRatio = ratio;
            bestId = id;
          }
        });

        // If nothing is meaningfully in view (e.g. still on the hero
        // section above "features"), fall back to "" so ALL buttons
        // light up instead of falsely highlighting one.
        setActiveSection(bestRatio > 0 ? bestId : "");
      },
      {
        // Account for the fixed navbar height (~90px) and require the
        // section to be reasonably in view before counting it
        rootMargin: "-100px 0px -55% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#311B53]/90 backdrop-blur-md border-b border-violet-500/20">
        <div className="max-w-7xl mx-auto px-10 py-5 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <Image
              src="/final logo.png"
              alt="Augmentik"
              width={70}
              height={70}
              className="-mr-3"
            />
            <h1 className="text-2xl font-black tracking-[1.5px] bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
              Augmentik
            </h1>
          </div>

          {/* Menu */}
          <div className="hidden md:flex items-center gap-5">
            <button
              type="button"
              onClick={() => navigateTo("features")}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300
              ${
                activeSection === "" || activeSection === "features"
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
                  : "bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
                  : "bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
                  : "bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
                  : "bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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
                  ? "bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
                  : "bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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