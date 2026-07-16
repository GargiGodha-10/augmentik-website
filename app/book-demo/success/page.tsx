"use client";

import ConfettiExplosion from "../../ConfettiExplosion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Home,
} from "lucide-react";

export default function BookingConfirmed() {
  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#17072F] text-white overflow-hidden relative">
      <button
  onClick={() => router.push("/book-demo/step-2")}
  className="absolute top-8 left-8 z-50 flex items-center justify-center
  w-12 h-12 rounded-full
  bg-white/10 border border-violet-500/30 backdrop-blur-md
  hover:bg-violet-600/30 hover:scale-110
  transition-all duration-300"
>
  <ArrowLeft className="w-6 h-6 text-white" />
</button>
     <ConfettiExplosion />

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 blur-[180px]" />

     <section className="relative z-10 max-w-5xl mx-auto px-6 pt-12 pb-20 text-center">

        {/* Heading */}

        <div className="inline-flex px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
          Demo Successfully Booked
        </div>

        <h1 className="mt-6 text-6xl md:text-7xl font-extrabold leading-tight drop-shadow-[0_0_30px_rgba(192,132,252,0.4)]">
  Booking{" "}
  <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
    Confirmed!
  </span>
</h1><div className="mt-12 flex justify-center">
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -8, 0],
    }}
    transition={{
      opacity: { duration: 0.8 },
      scale: { duration: 0.8 },
      y: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    }}
    className="relative"
  >
    {/* Purple glow */}
    <div className="absolute inset-0 rounded-3xl bg-purple-500 blur-3xl opacity-50 animate-pulse"></div>

    {/* Blue glow */}
    <div className="absolute -inset-2 rounded-3xl bg-blue-500 blur-2xl opacity-20"></div>

    <Image
      src="/booking confirmed.jpeg"
      alt="Booking Confirmed"
      width={460}
      height={307}
      priority
      className="relative rounded-3xl border border-purple-400/40 shadow-2xl"
    />
  </motion.div>
</div>

        <h2 className="mt-6 text-3xl font-semibold">
          Your AI Demo is Being Prepared 🚀
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto leading-8">
          Sit back and relax. Our team is preparing a personalized
          AI experience tailored specifically for your business.You'll receive your meeting details by email shortly.
        </p>
                {/* Timeline */}





                {/* Back to Home */}

        <div className="mt-12 flex justify-center">

          <Link href="/">

            <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-5 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]">

              <Home className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />

              Back to Home

            </button>

          </Link>

        </div>
        

        {/* Divider */}

        <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Footer */}

        <div className="mt-6 text-center">

          <h3 className="text-2xl font-semibold">

            💜 Thank You for Choosing Augmentik

          </h3>

        

        </div>
        

      </section>

    </main>

  );

}