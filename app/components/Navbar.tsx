"use client";

import PageTransition from "./PageTransition";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
    const [activeSection, setActiveSection] = useState("");
    const [transitionOpen,setTransitionOpen]=useState(false);
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
  const sections = document.querySelectorAll("section[id]");

  const handleScroll = () => {
    let current = "";

    sections.forEach((section) => {
      const top = section.getBoundingClientRect().top;

      if (top <= 150) {
        current = section.id;
      }
    });

    if (current) {
      setActiveSection(current);
    }
  };

  handleScroll();

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
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
?"bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
:"bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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
?"bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
:"bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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
?"bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
:"bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
}`}
>
AI Assistant
</button>
<button
type="button"
onClick={() => navigateTo("about")}
className={`px-5 py-2 rounded-full font-medium transition-all duration-300
${
activeSection === "" || activeSection === "about"
?"bg-gradient-to-r from-violet-600 to-fuchsia-500 text-white shadow-[0_0_25px_rgba(168,85,247,.7)] scale-105"
:"bg-gradient-to-r from-violet-700/40 to-purple-500/40 text-gray-300 hover:text-white hover:scale-105"
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