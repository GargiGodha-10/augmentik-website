"use client";
import Link from "next/link";
import { useState } from "react";
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
    "AI Workforce",
    "AI Hiring",
    "Business Automation",
    "24/7 AI Assistant",
  ];

  const meetingPlatforms = [
    "Google Meet",
    "Zoom",
    "Microsoft Teams",
  ];

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

  return (
    <main className="min-h-screen bg-[#17072F] text-white relative overflow-hidden">

      {/* Background Blur */}
      <div className="absolute top-24 left-20 w-72 h-72 rounded-full bg-purple-600/20 blur-[140px]" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-pink-600/10 blur-[180px]" />

     <section className="relative z-10 max-w-7xl mx-auto px-6 pt-10 pb-20">

        {/* Heading */}

        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300">

            <Sparkles className="w-4 h-4" />

            Final Step

          </div>

          <h1 className="mt-6 text-5xl font-bold leading-tight">

            Almost

           <span className="bg-gradient-to-r from-fuchsia-300 via-pink-300 to-purple-200 bg-clip-text text-transparent">

              {" "}
              There

            </span>

          </h1>

          <p className="mt-5 text-lg text-gray-400 max-w-2xl mx-auto leading-8">

            Just one final step before we prepare your personalized AI
            demonstration.

          </p>

        </div>

        {/* Main Grid */}

        <div className="grid lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN */}

          <div className="lg:col-span-4">
                    <div className="sticky top-28 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-500 hover:border-fuchsia-500/50 hover:shadow-[0_0_50px_rgba(217,70,239,0.25)]">

              <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">

                <Sparkles className="w-4 h-4" />

                Trusted AI Platform

              </div>

              <h2 className="mt-7 text-5xl font-bold leading-tight">

                Why Companies
                <br />

                Choose

                <span className="block bg-gradient-to-r from-pink-300 via-fuchsia-300 to-violet-200 bg-clip-text text-transparent">

                  Augmentik

                </span>

              </h2>

              <p className="mt-6 text-gray-400 leading-8">

                Businesses rely on Augmentik to streamline hiring,
                automate operations and unlock the full power of AI.

              </p>

              <div className="mt-10 space-y-5">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex gap-4">

                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <Zap className="w-7 h-7 text-violet-300" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">

                      5× Faster Hiring

                    </h3>

                    <p className="text-gray-400 mt-2">

                      Accelerate recruitment using AI-powered hiring.

                    </p>

                  </div>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex gap-4">

                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <Bot className="w-7 h-7 text-violet-300" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">

                      AI Workforce

                    </h3>

                    <p className="text-gray-400 mt-2">

                      Intelligent AI employees working 24/7.

                    </p>

                  </div>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex gap-4">

                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <BarChart3 className="w-7 h-7 text-violet-300" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">

                      Better Productivity

                    </h3>

                    <p className="text-gray-400 mt-2">

                      Automate repetitive workflows instantly.

                    </p>

                  </div>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 flex gap-4">

                  <div className="w-14 h-14 rounded-xl bg-purple-500/20 flex items-center justify-center">

                    <ShieldCheck className="w-7 h-7 text-violet-300" />

                  </div>

                  <div>

                    <h3 className="text-xl font-semibold">

                      Enterprise Security

                    </h3>

                    <p className="text-gray-400 mt-2">

                      Privacy-first infrastructure with enterprise-grade security.

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT COLUMN */}

          <div className="lg:col-span-8">
                        <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">

              {/* Progress */}

              <div className="flex items-center justify-between mb-3">

                <div>

                  <p className="text-sm uppercase tracking-[0.3em] text-purple-300">

                    Step 2 of 2

                  </p>

                  <h2 className="text-4xl font-bold mt-2">

                    Complete Your Booking

                  </h2>

                </div>

                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center text-xl font-bold text-purple-300">

                  100%

                </div>

              </div>

              <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden mb-10">

                <div className="h-full w-full bg-gradient-to-r from-violet-500 to-pink-500 rounded-full"></div>

              </div>

              {/* Demo Focus */}

              <h3 className="text-2xl font-semibold mb-5">

                Choose Demo Focus

              </h3>

              <div className="grid md:grid-cols-2 gap-4 mb-10">

                {focusOptions.map((item) => (

                  <button
                    key={item}
                    onClick={() => setFocus(item)}
                    className={`rounded-2xl border p-5 text-left transition-all duration-500 ease-out  hover:-translate-y-1 hover:-translate-y-1 hover:scale-[1.03] hover:border-fuchsia-400 hover:shadow-[0_0_30px_rgba(236,72,153,0.35)active:scale-95] ${
                      focus === item
                        ? "border-purple-500 bg-purple-500/20"
                        : "border-white/10 bg-white/5 hover:border-purple-400"
                    }`}
                  >

                    <div className="flex justify-between items-center">

                      <span className="font-semibold text-lg">

                        {item}

                      </span>

                      {focus === item && (

                        <CheckCircle2 className="w-6 h-6 text-purple-300" />

                      )}

                    </div>

                  </button>

                ))}

              </div>

              {/* Meeting Platform */}

              <h3 className="text-2xl font-semibold mb-5">

                Preferred Meeting Platform

              </h3>

              <div className="grid md:grid-cols-3 gap-4 mb-10">

                {meetingPlatforms.map((item) => (

                  <button
                    key={item}
                    onClick={() => setPlatform(item)}
                    className={`rounded-2xl border py-5 transition-all ${
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

              <h3 className="text-2xl font-semibold mb-5">

                Preferred Time

              </h3>

              <div className="relative mb-10">

                <Clock3 className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300" />

                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 pl-14 pr-14 py-5 text-white outline-none focus:border-purple-500"
                >

                  <option value="" className="bg-[#1A0938]">

                    Select Preferred Time

                  </option>

                  {timeOptions.map((item) => (

                    <option
                      key={item}
                      value={item}
                      className="bg-[#1A0938]"
                    >

                      {item}

                    </option>

                  ))}

                </select>

                <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-purple-300 pointer-events-none" />

              </div>

              {/* Confirm Button */}

            <Link href="/book-demo/success">

  <button
    className="w-full rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-5 text-xl font-bold transition-all duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-[0_0_45px_rgba(236,72,153,0.5)] active:scale-95"
  >

    Confirm Demo Booking →

  </button>

</Link>

              <p className="text-center text-gray-400 mt-6">

                Your demo will be personalized based on your selections.

              </p>

              {/* Bottom Badges */}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                  <ShieldCheck className="w-8 h-8 text-purple-300 mx-auto mb-3" />

                  <h4 className="font-semibold">

                    Enterprise Security

                  </h4>

                  <p className="text-sm text-gray-400 mt-2">

                    Your information is encrypted.

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                  <Clock3 className="w-8 h-8 text-purple-300 mx-auto mb-3" />

                  <h4 className="font-semibold">

                    24 Hour Response

                  </h4>

                  <p className="text-sm text-gray-400 mt-2">

                    Our team will contact you soon.

                  </p>

                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center">

                  <Users className="w-8 h-8 text-purple-300 mx-auto mb-3" />

                  <h4 className="font-semibold">

                    AI Consultant

                  </h4>

                  <p className="text-sm text-gray-400 mt-2">

                    Personalized guidance for your business.

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