"use client";

import Link from "next/link";
import Image from "next/image";
import {
  CheckCircle2,
  Home,
} from "lucide-react";

export default function BookingConfirmed() {
  return (
    <main className="min-h-screen bg-[#17072F] text-white overflow-hidden relative">

      {/* Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-purple-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/10 blur-[180px]" />

      <section className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">

        {/* Heading */}

        <div className="inline-flex px-5 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300">
          Demo Successfully Booked
        </div>

        <h1 className="mt-8 text-6xl font-bold leading-tight">
          Booking{" "}
          <span className="bg-gradient-to-r from-violet-300 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
            Confirmed!
          </span>
        </h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto leading-8">
          Thank you for choosing Augmentik.
          Our AI specialists have received your request and will prepare a personalized demo for you.
        </p>
                {/* Auggie */}

        <div className="mt-16 flex justify-center">

          <div className="relative">

            {/* Glow */}

            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-[80px] scale-110"></div>

            <Image
              src="/booking confirmed.jpeg"
              alt="Auggie"
              width={340}
              height={340}
              priority
              className="relative z-10 drop-shadow-[0_0_45px_rgba(168,85,247,0.45)]"
            />

          </div>

        </div>

        <h2 className="mt-8 text-3xl font-semibold">
          Your AI Demo is Being Prepared 🚀
        </h2>

        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto leading-8">
          Sit back and relax. Our team is preparing a personalized
          AI experience tailored specifically for your business.
        </p>
                {/* Timeline */}

        <div className="mt-20">

          <h3 className="text-3xl font-bold mb-12">
            What Happens Next?
          </h3>

          <div className="grid md:grid-cols-4 gap-8">

            {/* Step 1 */}

            <div className="group">

              <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/25">

                <CheckCircle2 className="w-8 h-8 text-purple-300" />

              </div>

              <h4 className="mt-6 text-xl font-semibold">
                Request Received
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                We've successfully received your booking request.
              </p>

            </div>

            {/* Step 2 */}

            <div className="group">

              <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/25">

                🤖

              </div>

              <h4 className="mt-6 text-xl font-semibold">
                AI Expert Assigned
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                Our specialists begin preparing your personalized demo.
              </p>

            </div>

            {/* Step 3 */}

            <div className="group">

              <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/25">

                ⚙️

              </div>

              <h4 className="mt-6 text-xl font-semibold">
                Demo Preparation
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                We customize the experience according to your selections.
              </p>

            </div>

            {/* Step 4 */}

            <div className="group">

              <div className="w-16 h-16 rounded-full bg-purple-500/15 border border-purple-500/30 flex items-center justify-center mx-auto transition-all duration-300 group-hover:scale-110 group-hover:bg-purple-500/25">

                📩

              </div>

              <h4 className="mt-6 text-xl font-semibold">
                Email Confirmation
              </h4>

              <p className="mt-3 text-gray-400 leading-7">
                You'll receive all meeting details within 24 hours.
              </p>

            </div>

          </div>

        </div>
                {/* Back to Home */}

        <div className="mt-20 flex justify-center">

          <Link href="/">

            <button className="group inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 px-10 py-5 text-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]">

              <Home className="w-6 h-6 transition-transform duration-300 group-hover:-translate-x-1" />

              Back to Home

            </button>

          </Link>

        </div>

        {/* Divider */}

        <div className="mt-16 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

        {/* Footer */}

        <div className="mt-10 text-center">

          <h3 className="text-2xl font-semibold">

            💜 Thank You for Choosing Augmentik

          </h3>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto leading-8">

            We're excited to show you how AI can transform your business.
            Our team will connect with you shortly with your personalized
            demo details.

          </p>

        </div>

      </section>

    </main>

  );

}