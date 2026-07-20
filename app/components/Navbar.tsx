"use client";

import PageTransition from "./PageTransition";
import Image from "next/image";
import { useEffect, useState } from "react";

const SECTION_IDS = ["features", "resources", "assistant", "pricing", "about"];

const NAV_ITEMS = [
  { id: "features", label: "Features" },
  { id: "resources", label: "Resources" },
  { id: "assistant", label: "AI Assistant" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
];

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
          <div className="flex items-center -ml-6 md:-ml-35">
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
          <div className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => {
              // Line only shows for the tab that's actually open right now —
              // no line at all until a section becomes active, and no
              // hover-triggered line on the others.
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className="relative py-2 text-[18px] font-medium tracking-wide transition-colors duration-300"
                >
                  <span
                    className={`transition-colors duration-300 ${
                      isActive
                        ? "text-white [text-shadow:0_0_18px_rgba(168,85,247,.55)]"
                        : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </span>

                  {/* underline — only rendered for the active tab */}
                  {isActive && (
                    <span className="absolute left-0 -bottom-[3px] h-[2px] w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,.65)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>
      <PageTransition open={transitionOpen} />
    </>
  );
}