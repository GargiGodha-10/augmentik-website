"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
<footer
  id="footer"
  className="relative overflow-visible bg-[#140529] text-white"
>
      {/* Aurora glow divider: a soft blurred color wash bridging the two
          sections, with a crisp glowing seam-line and a few drifting
          light particles for a premium, non-literal transition. */}
      <div className="absolute -top-[10px] left-0 w-full h-[30px] overflow-hidden pointer-events-none">
        {/* soft aurora wash */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[80px] bg-gradient-to-r from-transparent via-violet-600/30 to-transparent blur-[40px]" />
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[46px] bg-gradient-to-r from-transparent via-fuchsia-500/20 to-transparent blur-[50px]" />

        {/* crisp glowing seam line */}
        <div
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[1px] bg-gradient-to-r from-transparent via-violet-300 to-transparent"
          style={{ filter: "drop-shadow(0 0 8px rgba(217,70,239,0.8)) drop-shadow(0 0 16px rgba(139,92,246,0.55))" }}
        />

        {/* drifting light particles along the seam */}
        {[
          { left: "12%", size: 5, duration: 4.5, delay: 0 },
          { left: "28%", size: 3, duration: 3.5, delay: 0.6 },
          { left: "47%", size: 4, duration: 5, delay: 0.2 },
          { left: "63%", size: 3, duration: 4, delay: 1 },
          { left: "80%", size: 5, duration: 4.8, delay: 0.4 },
          { left: "92%", size: 3, duration: 3.8, delay: 0.8 },
        ].map((p, i) => (
          <motion.span
            key={i}
            animate={{ y: [-6, 6, -6], opacity: [0.4, 1, 0.4] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              top: "50%",
              marginTop: -p.size / 2,
            }}
            className="absolute rounded-full bg-fuchsia-300 shadow-[0_0_10px_3px_rgba(217,70,239,0.7)]"
          />
        ))}
      </div>


      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-violet-600/20 blur-[140px]" />
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h2  className="text-2xl font-black tracking-[1.5px] bg-gradient-to-r from-white via-violet-300 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_12px_rgba(168,85,247,0.35)]">
  Augmentik
            </h2>
            <p className="mt-5 text-gray-400 leading-8">
            Built by AppCrave Technovations, Augmentik is a unified staffing operations platform crafted in India for staffing businesses ready to grow at scale.
            </p>
          </div>
          {/* Quick Links */}
          <div className="md:pl-8">
            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link href="/#hero">Home</Link></li>
              <li><Link href="/explore-platform">Platform</Link></li>
              <li>
  <Link href="/#about">About Us</Link>
</li>
              <li><Link href="/book-demo">Book Demo</Link></li>
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-violet-400" />
                <span>hello@augmentik.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-violet-400" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-violet-400" />
                <span>India</span>
              </div>
            </div>
          </div>
          {/* Connect */}
          <div>
            <h3 className="text-xl font-semibold mb-5">
              Connect With Us
            </h3>
           <div className="flex flex-col gap-2 text-gray-400">
  <a href="#">LinkedIn</a>
  <a href="#">Instagram</a>
  <a href="#">GitHub</a>
            </div>
          </div>
        </div>
        <div className="my-12 border-t border-white/1" />
        <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-gray-400">
          <p>© 2026 Augmentik. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/">Privacy Policy</Link>
            <Link href="/">Terms</Link>
            <Link href="/">Support</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}