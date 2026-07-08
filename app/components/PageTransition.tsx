"use client";

import { AnimatePresence, motion } from "framer-motion";

interface Props {
  open: boolean;
}

export default function PageTransition({ open }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[99999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Left Door */}
          <motion.div
            className="absolute left-0 top-0 h-full w-1/2 bg-[#140B26]"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{
              delay: 1.1,
              duration: 0.75,
              ease: [0.83, 0, 0.17, 1],
            }}
          />

          {/* Right Door */}
          <motion.div
            className="absolute right-0 top-0 h-full w-1/2 bg-[#140B26]"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{
              delay: 1.1,
              duration: 0.75,
              ease: [0.83, 0, 0.17, 1],
            }}
          />

          {/* Glow */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              opacity: [0, 0.8, 0.3],
              scale: [0.3, 1.2, 1],
            }}
            transition={{
              duration: 0.55,
              ease: "easeOut",
            }}
            className="absolute left-1/2 top-1/2
              w-[220px]
              h-[220px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-violet-500/20
              blur-[90px]"
          />

          {/* AUGMENTIK */}
          <motion.h1
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 20,
            }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.7, 1, 1, 0.95],
              y: [20, 0, 0, -10],
            }}
            transition={{
              duration: 1,
              times: [0, 0.25, 0.7, 1],
              ease: "easeInOut",
            }}
            className="
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              text-lg
              md:text-2xl
              font-black
              tracking-[8px]
              bg-gradient-to-r
              from-white
              via-violet-300
              to-fuchsia-400
              bg-clip-text
              text-transparent
              drop-shadow-[0_0_25px_rgba(168,85,247,.8)]
            "
          >
            AUGMENTIK
          </motion.h1>

  
        </motion.div>
      )}
    </AnimatePresence>
  );
}