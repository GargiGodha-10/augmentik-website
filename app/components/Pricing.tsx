"use client";

import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Pricing() {
  return (
    <section
      id="pricing"
     className="relative overflow-hidden bg-gradient-to-b from-[#17072F] via-[#1A0835] to-[#17072F] py-32 text-white"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-violet-600/20 blur-[180px]" />
<div className="absolute left-20 top-40 h-56 w-56 rounded-full bg-fuchsia-500/10 blur-[120px]" />

<div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-violet-600/10 blur-[150px]" />
      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="inline-block rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm text-violet-300">
            Pricing Plans
          </p>

          <h2 className="mt-6 text-5xl font-bold">
            Choose the Perfect Plan
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-lg text-gray-400 leading-8">
            Flexible AI solutions designed to help staffing businesses
            automate recruitment, improve productivity and grow faster.
          </p>

        </div>
        {/* Pricing Cards */}

<div className="mt-20 grid gap-8 lg:grid-cols-3">

  {/* Starter */}

<motion.div
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]"
>

    <h3 className="text-3xl font-bold">
      Starter
    </h3>
    

   

    <div className="mt-8">

 <span className="text-6xl font-bold">₹
3,000</span>
 <p className="mt-3 text-gray-400">
    Per user, Per month 
   
    </p>
      
     <p className="mt-3 text-gray-400">
    
    Upto 10 Users
    </p>

    </div>

   <button className="mt-8 w-full rounded-xl border border-violet-500 py-4 font-semibold transition-all duration-300 hover:bg-violet-600 hover:scale-105">
 Get Started
</button>

    <div className="mt-10 space-y-5">

      {[
       "All platform modules",
"AI JD Search Assistant",
"AI Candidate Matching",
"Invoice management",
"Dashboard & analytics",
"Knowledge base",
"Email and chat support"
,
      ].map((item) => (

        <div key={item} className="flex items-center gap-3">

          <Check className="w-5 h-5 text-violet-400" />

          <span className="text-gray-300">
            {item}
          </span>

        </div>

      ))}

    </div>

  </motion.div>

  {/* Growth */}

  <div className="relative scale-105 rounded-3xl border-2 border-violet-500 bg-gradient-to-b from-violet-700/20 to-white/5 p-8 backdrop-blur-xl shadow-[0_0_60px_rgba(168,85,247,.35)]">

    <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-violet-600 px-5 py-2 text-sm font-semibold">
      Most Popular
    </div>

    <h3 className="text-3xl font-bold">
      Growth
    </h3>

<div className="mt-8">

      <span className="text-6xl font-bold">₹
2,500</span>

      
       <p className="mt-3 text-gray-300">
     Per user, Per month
    </p>
       <p className="mt-3 text-gray-300">
     Upto 30 users-save ₹300 per user
    </p>
    


    </div>

<Link href="/book-demo">
  <button className="mt-8 w-full rounded-xl border border-violet-500 py-4 font-semibold transition-all duration-300 hover:bg-violet-600 hover:scale-105 w-full">
    Book a Demo
  </button>
</Link>

    <div className="mt-10 space-y-5">

      {[
       "Everything in Starter",
"Priority email support",
"Advanced recruiter reports",
"Multi-user workflows",
"CSV import and export",
"Custom requirement fields",
"Guided onboarding session"

      ].map((item) => (

        <div key={item} className="flex items-center gap-3">

          <Check className="w-5 h-5 text-violet-300" />

          <span className="text-gray-200">
            {item}
          </span>

        </div>

      ))}

    </div>

  </div>

  {/* Enterprise */}

  <div className="rounded-3xl border border-violet-500/20 bg-white/5 p-8 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-500 hover:shadow-[0_0_40px_rgba(168,85,247,0.25)]">

    <h3 className="text-3xl font-bold">
      Enterprise
    </h3>
     <div className="mt-8">
      <span className="text-6xl font-bold">
        Custom
      </span>
   <p className="mt-3 text-gray-400">
      for your team size
    </p>
     <p className="mt-3 text-gray-400">
      30+ users. Multi-branch
    </p>

    

      

    </div>

    <button className="mt-8 w-full rounded-xl border border-violet-500 py-4 font-semibold transition hover:bg-violet-600
hover:scale-105
duration-300">
      Contact Us
    </button>

    <div className="mt-10 space-y-5">

      {[
        "Everything in Growth",
"Dedicated onboarding manager",
"Custom integrations",
"Priority SLA support",
"Custom reporting",
"Owner portal access",
"Multi-branch setup",

      ].map((item) => (

        <div key={item} className="flex items-center gap-3">

          <Check className="w-5 h-5 text-violet-400" />

          <span className="text-gray-300">
            {item}
          </span>

        </div>

      ))}

    </div>

  </div>

</div>

      </div>
    </section>
  );
}