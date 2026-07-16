"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Hero from "./Hero";
import AISolutions from "./features";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScene() {
  const container = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Hero pin
      ScrollTrigger.create({
        trigger: "#hero-section",
        start: "top top",
        end: "+=220%",
        pin: true,
        scrub: true,
        anticipatePin: 1,
      });

      // ONLY animate the background
      gsap.to("#hero-bg", {
        scale: 0.72,
        transformOrigin: "center center",
        ease: "none",
        scrollTrigger: {
          trigger: "#hero-section",
          start: "top top",
          end: "+=220%",
          scrub: true,
        },
      });

      // Features section comes upward
      gsap.fromTo(
        "#ai-section",
        {
          y: 180,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: "#hero-section",
            start: "top top",
            end: "+=220%",
            scrub: true,
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={container}>
      <section
        id="hero-section"
        className="relative z-10 overflow-hidden"
      >
        <Hero />
      </section>

      <section
        id="ai-section"
        className="relative z-20"
      >
        <AISolutions />
      </section>
    </div>
  );
}