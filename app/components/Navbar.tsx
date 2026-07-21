"use client";

import PageTransition from "./PageTransition";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

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
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigateTo = (id: string) => {
    if (transitionOpen) return;

    setMobileOpen(false);
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

  const goHome = () => {
    if (transitionOpen) return;

    setMobileOpen(false);
    setTransitionOpen(true);

    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "instant" });
      setActiveSection("");
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-3 flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={goHome}
            className="flex items-center -ml-2 sm:-ml-4 md:-ml-6 lg:-ml-[8.75rem] cursor-pointer"
            aria-label="Go to homepage"
          >
            <Image
              src="/original logo.png"
              alt="Augmentik"
              width={260}
              height={80}
              className="w-40 sm:w-48 md:w-60 h-auto object-contain -my-3"
              priority
            />
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 lg:gap-10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className="relative py-2 text-[16px] lg:text-[18px] font-medium tracking-wide transition-colors duration-300"
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

                  {isActive && (
                    <span className="absolute left-0 -bottom-[3px] h-[2px] w-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 shadow-[0_0_10px_rgba(217,70,239,.65)]" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 text-gray-200 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        <div
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out ${
            mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col px-6 pb-5 pt-1 gap-1 border-t border-fuchsia-500/10">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => navigateTo(item.id)}
                  className={`text-left py-3 text-[16px] font-medium tracking-wide border-b border-white/5 last:border-none transition-colors duration-300 ${
                    isActive
                      ? "text-white [text-shadow:0_0_18px_rgba(168,85,247,.55)]"
                      : "text-gray-300"
                  }`}
                >
                  {item.label}
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