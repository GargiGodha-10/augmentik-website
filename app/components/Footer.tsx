import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
export default function Footer() {
  return (
<footer
  id="footer"
  className="relative overflow-visible bg-[#140529] text-white"
>
      {/* Curved wave divider replacing the old hard line, matching the
          violet/fuchsia theme. Pulled up so it visibly overlaps into the
          section above, sitting right on the seam with no gap. */}
      <div className="absolute -top-[30px] left-0 w-full overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-[90px] sm:h-[120px]"
        >
          <defs>
            <linearGradient id="footerWaveGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.55" />
              <stop offset="50%" stopColor="#d946ef" stopOpacity="0.75" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          <path
            d="M0,32 C240,90 480,0 720,40 C960,80 1200,10 1440,48 L1440,120 L0,120 Z"
            fill="#140529"
          />
          <path
            d="M0,32 C240,90 480,0 720,40 C960,80 1200,10 1440,48"
            fill="none"
            stroke="url(#footerWaveGradient)"
            strokeWidth="10"
            style={{ filter: "drop-shadow(0 0 12px rgba(168,85,247,0.55))" }}
          />
        </svg>
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