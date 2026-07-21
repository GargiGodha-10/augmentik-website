"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Sparkles,
  Zap,
  Bot,
  BarChart3,
  ShieldCheck,
  Globe,
  Users,
  Clock3,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

export default function Step2Page() {
  const [focus, setFocus] = useState("");
  const [platform, setPlatform] = useState("");
  const [time, setTime] = useState("");

  const focusOptions = [
    "🎯 Finding Top Talent",
    "⚙️ Managing Workforce",
    "⏱️ Reducing Manual Work",
    "⚡ Business Automation",
  ];

  const meetingPlatforms = ["Google Meet", "Zoom", "Microsoft Teams"];

  const timeOptions = [
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
  ];

  const router = useRouter();
  return (
    <main className="min-h-screen bg-[#17072F] text-white relative overflow-hidden">
      <button
        onClick={() => router.push("/book-demo")}
        className="absolute top-4 left-4 sm:top-8 sm:left-8 z-50 flex items-center justify-center
        w-10 h-10 sm:w-12 sm:h-12 rounded-full
        bg-white/10 border border-violet-500/30 backdrop-blur-md
        hover:bg-violet-600/30 hover:scale-110
        transition-all duration-300"
      >
        <ArrowLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Background Blur */}
      <div className="absolute top-24 left-10 sm:left-20 w-48 h-48 sm:w-72 sm:h-72 rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-10 sm:right-20 w-64 h-64 sm:w-96 sm:h-96 rounded-full bg-pink-600/10 blur-[180px]" />

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-16 sm:pt-10 pb-12 sm:pb-20">
        {/* Heading */}

        <div className="text-center mb-10 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 sm:px-5 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-300">
            <Sparkles className="w-4 h-4" />
            Final Step
          </div>

          <h1 className="mt-5 sm:mt-6 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Almost
            <span className="bg-gradient-to-r from-fuchsia-300 via-pink-300 to-purple-200 bg-clip-text text-transparent">
              {" "}
              There
            </span>
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-7 sm:leading-8 px-2">
            Just one final step before we prepare your personalized AI
            demonstration.
          </p>
        </div>

        {/* Main Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* LEFT COLUMN */}

          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8 transition-all duration-500 hover:border-fuchsia-500/50 hover:shadow-[0_0_50px_rgba(217,70,239,0.25)]">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-3.5 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm text-purple-300">
                <Sparkles className="w-4 h-4" />
                Trusted AI Platform
              </div>

              <h2 className="mt-5 sm:mt-7 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                Why Companies
                <br />
                Choose
                <span className="block bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">
                  Augmentik
                </span>
              </h2>

              <p className="mt-4 sm:mt-6 text-sm sm:text-base text-gray-400 leading-6 sm:leading-8">
                Businesses rely on Augmentik to streamline hiring,
                automate operations and unlock the full power of AI.
              </p>

              <div className="mt-6 sm:mt-10 space-y-4 sm:space-y-5">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Zap className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-violet-300" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-semibold">
                      5× Faster Hiring
                    </h3>

                    <p className="text-gray-400 mt-1.5 sm:mt-2 text-sm sm:text-base">
                      Accelerate recruitment using AI-powered hiring.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <Bot className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-violet-300" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-semibold">AI Workforce</h3>

                    <p className="text-gray-400 mt-1.5 sm:mt-2 text-sm sm:text-base">
                      Intelligent AI employees working 24/7.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <BarChart3 className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-violet-300" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-semibold">
                      Better Productivity
                    </h3>

                    <p className="text-gray-400 mt-1.5 sm:mt-2 text-sm sm:text-base">
                      Automate repetitive workflows instantly.
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 flex gap-3 sm:gap-4">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl bg-purple-500/20 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5.5 h-5.5 sm:w-7 sm:h-7 text-violet-300" />
                  </div>

                  <div>
                    <h3 className="text-base sm:text-xl font-semibold">
                      Enterprise Security
                    </h3>

                    <p className="text-gray-400 mt-1.5 sm:mt-2 text-sm sm:text-base">
                      Privacy-first infrastructure with enterprise-grade security.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}

          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 sm:p-6 md:p-8">
              {/* Progress */}

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-0 mb-3">
                <div>
                  <p className="text-xs sm:text-sm uppercase tracking-[0.2em] sm:tracking-[0.3em] text-purple-300">
                    Step 2 of 2
                  </p>

                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
                    Complete Your Booking
                  </h2>
                </div>

                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-base sm:text-xl font-bold text-purple-300 shrink-0 self-start sm:self-auto">
                  100%
                </div>
              </div>

              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-8 sm:mb-10">
                <div className="h-full w-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>
              </div>

              {/* Demo Focus */}

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5">
                What's Your Biggest Challenge?
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {focusOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => setFocus(item)}
                    className={`rounded-2xl border p-4 sm:p-5 text-left transition-all duration-500 ease-out hover:-translate-y-1 hover:scale-[1.03] hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)] active:scale-95 ${
                      focus === item
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-white/10 bg-white/5 hover:border-purple-400"
                    }`}
                  >
                    <div className="flex justify-between items-center gap-2">
                      <span className="font-semibold text-sm sm:text-lg">{item}</span>

                      {focus === item && (
                        <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-purple-300 shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Meeting Platform */}

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5">
                Preferred Meeting Platform
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
                {meetingPlatforms.map((item) => (
                  <button
                    key={item}
                    onClick={() => setPlatform(item)}
                    className={`rounded-2xl border py-4 sm:py-5 text-sm sm:text-base transition-all ${
                      platform === item
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-white/10 bg-white/5 hover:border-purple-400"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* Preferred Time */}

              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5">
                Preferred Time
              </h3>

              <div className="relative mb-8 sm:mb-10">
                <Clock3 className="absolute left-4 sm:left-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-purple-300" />

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 pl-11 sm:pl-14 pr-11 sm:pr-14 py-4 sm:py-5 text-sm sm:text-base text-white outline-none focus:border-purple-500"
                >
                  <option value="" className="bg-[#1A0938]">
                    Select Preferred Time
                  </option>

                  {timeOptions.map((item) => (
                    <option key={item} value={item} className="bg-[#1A0938]">
                      {item}
                    </option>
                  ))}
                </select>

                <ChevronDown className="absolute right-4 sm:right-5 top-1/2 -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 text-purple-300 pointer-events-none" />
              </div>

              {/* Confirm Button */}

              <Link href="/book-demo/success">
                <button className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-4 sm:py-5 text-base sm:text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(236,72,153,0.5)] active:scale-95">
                  Confirm Demo Booking →
                </button>
              </Link>

              <p className="text-center text-sm sm:text-base text-gray-400 mt-4 sm:mt-6 px-2">
                Your demo will be personalized based on your selections.
              </p>

              {/* Bottom Badges */}

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center">
                  <Users className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 mx-auto mb-2 sm:mb-3" />
                  <h4 className="font-semibold text-sm sm:text-base">Personalized Demo</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2">
                    Built around your requirements.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center">
                  <Clock3 className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 mx-auto mb-2 sm:mb-3" />
                  <h4 className="font-semibold text-sm sm:text-base">24 Hour Response</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2">
                    Our team will contact you soon.
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5 text-center">
                  <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8 text-purple-300 mx-auto mb-2 sm:mb-3" />
                  <h4 className="font-semibold text-sm sm:text-base">Enterprise Security</h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-1.5 sm:mt-2">
                    Your information is encrypted.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}