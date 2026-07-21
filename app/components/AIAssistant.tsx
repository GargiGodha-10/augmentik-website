"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Compass,
  MessageCircle,
  Sparkles,
  Send,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Left-side feature list (same copy as before, now a stacked list     */
/*  instead of flip cards)                                              */
/* ------------------------------------------------------------------ */
const features = [
  {
    icon: Compass,
    title: "AI Walkthroughs",
    desc: "Step-by-step AI guidance that helps users explore every feature with ease.",
  },
  {
    icon: MessageCircle,
    title: "Smart Conversations",
    desc: "Interact naturally with Auggie and receive personalized, context-aware responses.",
  },
  {
    icon: Sparkles,
    title: "Instant Guidance",
    desc: "Receive instant recommendations, suggestions and answers whenever you need them.",
  },
];

/* ------------------------------------------------------------------ */
/*  Chat message type + initial greeting                                */
/* ------------------------------------------------------------------ */
type ChatMessage = {
  id: string;
  role: "assistant" | "user";
  content: string;
  time: string;
};

function timeNow() {
  return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}

const initialMessages: ChatMessage[] = [
  {
    id: "welcome",
    role: "assistant",
    content:
      "Hi! I'm Auggie, your AI recruiting assistant. Ask me anything about Augmentk.",
    time: "",
  },
];

export default function AIAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, isTyping]);

  // Set the welcome message's timestamp only after mounting on the client,
  // so the server-rendered HTML and the first client render match exactly
  // (fixes hydration mismatch — timestamps must never be computed during
  // a render that also runs on the server).
  useEffect(() => {
    setMessages((prev) =>
      prev.map((m) => (m.id === "welcome" ? { ...m, time: timeNow() } : m))
    );
  }, []);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || isTyping) return;

    const userMsg: ChatMessage = {
      id: crypto.randomUUID(),
      role: "user",
      content: text,
      time: timeNow(),
    };

    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setIsTyping(true);

    try {
      // Backend route to be implemented server-side with the Gemini API key.
      // Expected contract: POST { message: string, history: ChatMessage[] }
      // -> { reply: string }
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history: nextMessages }),
      });

      if (!res.ok) throw new Error("Chat request failed");
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content: data.reply ?? "Sorry, I didn't catch that — could you rephrase?",
          time: timeNow(),
        },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          content:
            "I'm having trouble connecting right now. Please try again in a moment.",
          time: timeNow(),
        },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <section
      id="assistant"
      className="relative overflow-x-clip bg-[#160B2C] pt-24 pb-24 text-white"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#160B2C] via-[#241142] to-[#160B2C]" />

      {/* Glow */}
      <div className="absolute -left-40 top-10 w-[450px] h-[450px] rounded-full bg-violet-600/20 blur-[170px]" />
      <div className="absolute right-0 bottom-0 w-[500px] h-[500px] rounded-full bg-fuchsia-600/20 blur-[180px]" />

      {/* Floating Particles */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-20 left-20 w-3 h-3 rounded-full bg-violet-400 shadow-[0_0_25px_#a855f7]"
      />
      <motion.div
        animate={{ y: [0, -35, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute top-40 left-[30%] w-4 h-4 rounded-full bg-fuchsia-400 shadow-[0_0_30px_#d946ef]"
      />
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-72 right-[18%] w-3 h-3 rounded-full bg-violet-300 shadow-[0_0_25px_#8b5cf6]"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-28 left-[15%] w-5 h-5 rounded-full bg-purple-400 shadow-[0_0_35px_#9333ea]"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* ============================= LEFT ============================= */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="uppercase tracking-[7px] text-violet-400 font-semibold">
              AI ASSISTANT
            </p>

            <h2 className="mt-2 text-6xl font-black leading-tight">
              <span className="text-white">Meet </span>
              <span className="bg-gradient-to-r from-violet-300 to-fuchsia-400 bg-clip-text text-transparent">
                Auggie
              </span>
            </h2>

            <p className="mt-4 text-[19px] leading-8 font-light text-gray-300 max-w-xl">
              Your intelligent assistant for smarter hiring. Get real-time
              insights, candidate matches and AI-powered recommendations in
              seconds.
            </p>

            {/* Feature list */}
            <div className="mt-8 rounded-3xl border border-violet-500/20 bg-white/5 backdrop-blur-xl divide-y divide-white/10 overflow-hidden">
              {features.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex gap-4 p-6">
                  <div className="shrink-0 w-12 h-12 rounded-2xl bg-violet-600/20 border border-violet-500/30 flex items-center justify-center">
                    <Icon size={22} className="text-violet-300" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                    <p className="mt-1 text-[15px] leading-7 text-gray-300">
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

      
          </motion.div>

          {/* ============================= RIGHT (chat) ============================= */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-3xl border border-violet-500/20 bg-[#1B1233]/80 backdrop-blur-xl shadow-[0_25px_70px_rgba(0,0,0,.45)] flex flex-col overflow-hidden h-[662px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-violet-400/40 bg-violet-600/20">
                  <Image
                    src="/final auggie.png"
                    alt="Auggie"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-white leading-tight">Auggie</h3>
                  <p className="text-sm text-gray-400 leading-tight">
                    AI Recruiting Assistant
                  </p>
                  <span className="mt-0.5 inline-flex items-center gap-1.5 text-xs text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Online
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 overflow-y-auto px-6 py-5 space-y-4 [scrollbar-width:thin]"
            >
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex ${
                      m.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {m.role === "assistant" && (
                      <div className="relative w-8 h-8 rounded-full overflow-hidden border border-violet-400/40 bg-violet-600/20 mr-3 shrink-0 self-end">
                        <Image
                          src="/final auggie.png"
                          alt="Auggie"
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 text-[15px] leading-6 ${
                        m.role === "user"
                          ? "bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white"
                          : "bg-white/5 border border-white/10 text-gray-200"
                      }`}
                    >
                      <p>{m.content}</p>
                      <p
                        className={`mt-1.5 text-[11px] ${
                          m.role === "user" ? "text-violet-100/70" : "text-gray-500"
                        }`}
                      >
                        {m.time}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="relative w-8 h-8 rounded-full overflow-hidden border border-violet-400/40 bg-violet-600/20 mr-3 shrink-0 self-end">
                      <Image
                        src="/final auggie.png"
                        alt="Auggie"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-2xl px-4 py-3 flex gap-1.5 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          animate={{ opacity: [0.3, 1, 0.3] }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                          className="w-1.5 h-1.5 rounded-full bg-violet-300"
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3 rounded-2xl bg-white/5 border border-white/10 px-4 py-2.5">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  className="flex-1 bg-transparent outline-none text-[15px] placeholder:text-gray-500"
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={sendMessage}
                  disabled={!input.trim() || isTyping}
                  className="w-9 h-9 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 flex items-center justify-center shrink-0 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="text-white" />
                </motion.button>
              </div>

              <p className="mt-3 text-center text-xs text-gray-500 flex items-center justify-center gap-1.5">
                <Sparkles size={12} className="text-violet-400" />
                Powered by Gemini AI
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}