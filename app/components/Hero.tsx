"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] brightness-[0.6]"
        >
          <source src="/new video.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/30" />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 flex items-center min-h-screen">
      <div className="w-full pl-8 sm:pl-12 md:pl-16 lg:pl-20 xl:pl-20 pr-6">

          <div className="max-w-3xl pt-28 sm:pt-32 md:pt-36 lg:pt-12">

            <p
              className="uppercase font-semibold text-violet-400 mb-3 tracking-[0.35em] text-xs sm:text-sm"
            >
              AI WORKFORCE PLATFORM
            </p>

            <h1
              className="
              font-bold
              leading-[1.05]
              max-w-[650px]
              text-4xl
              sm:text-5xl
              md:text-6xl
              lg:text-7xl
            "
            >
              Empowering
              <br />
              Businesses with
              <br />
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
                Smarter Execution
              </span>
            </h1>

            <p
              className="
              mt-6
              max-w-[620px]
              text-gray-300
              text-base
              sm:text-lg
              lg:text-xl
              leading-8
            "
            >
              Augmentik helps organizations streamline hiring, discover the
              right talent, and simplify workforce management through
              intelligent automation—all from one unified platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 mt-10">

              <Link
                href="/book-demo"
                className="border border-gray-500 hover:bg-white hover:text-black transition-all duration-300 px-9 py-4 rounded-xl font-semibold text-center"
              >
                Book a Demo
              </Link>

              <Link
                href="/explore-platform"
                className="border border-gray-500 hover:bg-white hover:text-black transition-all duration-300 px-9 py-4 rounded-xl font-semibold text-center"
              >
                Explore Platform
              </Link>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}