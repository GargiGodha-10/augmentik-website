"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TalkToAuggiePage() {

  const [showChat, setShowChat] = useState(false);
  const [showImage, setShowImage] = useState(false);

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {

  // After 7 sec
  const timer1 = setTimeout(() => {
    setShowChat(true);
  }, 10000);

  // After 10 sec
  const timer2 = setTimeout(() => {

    if (videoRef.current) {
      videoRef.current.pause();
    }

    setShowImage(true);

  }, 10000);

  return () => {
    clearTimeout(timer1);
    clearTimeout(timer2);
  };

}, []);

  return (

    <div className="relative h-screen w-screen overflow-hidden bg-[#160B2C]">

      {/* Background */}

      <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

      {/* Background Glow */}

      <div className="absolute -left-44 top-10 w-[520px] h-[520px] rounded-full bg-violet-700/20 blur-[180px]" />

      <div className="absolute right-0 bottom-0 w-[600px] h-[600px] rounded-full bg-fuchsia-700/20 blur-[190px]" />

      {/* Floating Bubbles */}

      <motion.div
        animate={{
          y: [0, -18, 0],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-24 top-24 w-4 h-4 rounded-full bg-violet-400 shadow-[0_0_30px_#8b5cf6]"
      />

      <motion.div
        animate={{
          y: [0, 22, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute right-36 top-52 w-5 h-5 rounded-full bg-fuchsia-400 shadow-[0_0_35px_#d946ef]"
      />

      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
        }}
        className="absolute left-[45%] bottom-20 w-3 h-3 rounded-full bg-violet-300 shadow-[0_0_25px_#a855f7]"
      />
      {/* VIDEO */}

<AnimatePresence>

{!showImage && (

<motion.div

animate={

showChat

?

{

width:"40%",

height:"100%",

left:"8%",

scale:.92,

opacity:1,

}

:

{

width:"100%",

height:"100%",

left:"0%",

scale:1,

opacity:1,

}

}

transition={

{

duration:3,

ease:"easeInOut",

}

}

exit={{

opacity:0,

transition:{duration:.8}

}}

className="absolute inset-0 flex items-center z-20"

>

<video

ref={videoRef}

autoPlay

playsInline

className="w-full h-full object-contain"

>

<source src="/auggie-intro.mp4" type="video/mp4"/>

</video>

</motion.div>

)}

</AnimatePresence>


      {/* REMOVE BG AUGGIE */}

 <AnimatePresence>

{showImage && (

<motion.div


initial={{

opacity:0,

scale:.8,

}}

animate={{

opacity:1,

scale:1,

x:"-18%",

y:[0,-18,0],

}}

transition={{

opacity:{

duration:.8,

},

scale:{

duration:.8,

},

y:{

duration:3,

repeat:Infinity,

ease:"easeInOut",

}

}}

className="absolute inset-0 flex items-center justify-center z-20"

>

<div className="absolute w-[500px] h-[500px] rounded-full bg-violet-500/25 blur-[120px]" />

<Image

src="/removebg auggie.png"

alt="Auggie"

width={1000}

height={1000}

priority

className="relative object-contain"

/>

</motion.div>

)}

</AnimatePresence>
{/* Augmentik Logo */}
{showImage && (
  <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 0.8,
      delay: 0.2,
    }}
    className="absolute top-8 left-10 z-40 flex items-center gap-0"
  >
    <Image
      src="/final logo.png"
      alt="Augmentik"
      width={70}
      height={10}
      priority
    />

  <h1 className="text-2xl font-black tracking-[1.5px] bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
      Augmentik
    </h1>
  </motion.div>
)}
    {/* CHAT BOX */}
{/* CHATBOX */}
{/* CHATBOX */}
<motion.div
  initial={{ opacity: 0, x: 120 }}
  animate={
    showChat
      ? {
          opacity: 1,
          x: 0,
        }
      : {
          opacity: 0,
          x: 120,
        }
  }
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
  className="absolute right-16 top-1/2 -translate-y-1/2 z-40"
>
  <div className="w-[440px] h-[520px] rounded-[28px] overflow-hidden border border-violet-500/20 bg-[#15111F]/95 backdrop-blur-2xl shadow-[0_0_60px_rgba(139,92,246,.25)]">

    {/* Header */}
    <div className="px-6 py-5 border-b border-white/10 flex items-center gap-4">

      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
        A
      </div>

      <div>
        <h2 className="text-white font-semibold text-xl">
          Auggie
        </h2>

        <div className="flex items-center gap-2 mt-1">
          <div className="w-2 h-2 rounded-full bg-green-400" />

          <p className="text-xs text-gray-400">
            Online • AI Assistant
          </p>
        </div>
      </div>

    </div>

    {/* Greeting */}
    <div className="px-6 py-5">

      <div className="rounded-2xl bg-[#21172F] border border-violet-500/10 p-4">

        <p className="text-white font-medium">
          Hello, what can I do for you today?
        </p>

      </div>

    </div>

    {/* Questions */}
    <div className="px-6 space-y-3">

      <button className="w-full rounded-xl bg-[#241B35] hover:bg-[#2c2142] transition-all p-4 text-left border border-violet-500/10">

        <div className="text-white font-medium">
          📄 Resume Analysis
        </div>

      </button>

      <button className="w-full rounded-xl bg-[#241B35] hover:bg-[#2c2142] transition-all p-4 text-left border border-violet-500/10">

        <div className="text-white font-medium">
          💼 Find Resources
        </div>

      </button>

      <button className="w-full rounded-xl bg-[#241B35] hover:bg-[#2c2142] transition-all p-4 text-left border border-violet-500/10">

        <div className="text-white font-medium">
          🎯 Interview Preparation
        </div>

      </button>

      <button className="w-full rounded-xl bg-[#241B35] hover:bg-[#2c2142] transition-all p-4 text-left border border-violet-500/10">

        <div className="text-white font-medium">
          🤖 Knowledge Assistant
        </div>

      </button>

    </div>

   

  </div>
</motion.div>
   </div>
  );
}