"use client";

import { motion } from "framer-motion";

const reviews = [
  {
    name: "Michael Turner",
    role: "Head of Operations • IT Staffing",
    initials: "MT",
    color: "from-blue-500 to-cyan-400",
    review:
      "Augmentik changed how our entire team works. Managing clients, vendors, and candidate pipelines used to take a full day. Now it takes an hour. The missed opportunity dashboard alone is worth every rupee.",
  },
  {
    name: "Jennifer Mitchell",
    role: "Recruitment Lead • Tech Staffing",
    initials: "JM",
    color: "from-violet-500 to-fuchsia-500",
    review:
      "The AI JD Search tool saves every recruiter on my team 2–3 hours a day. We went from struggling to hit deadlines to consistently beating them. Shortlist quality went up noticeably as well.",
  },
  {
    name: "Robert Hayes",
    role: "CEO • Staffing Company",
    initials: "RH",
    color: "from-green-500 to-emerald-400",
    review:
      "Seeing revenue, profit, and missed opportunities on one dashboard changed how I make decisions. I finally know exactly where my business stands and where we're leaving money on the table.",
  },
];

export default function Customer() {
  return (
    <section className="relative py-28 bg-[#140B26] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-violet-700/20 blur-[180px]" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-purple-700/20 blur-[180px]" />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center mb-16"
        >

          <div className="inline-block px-5 py-2 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 text-sm mb-6">
            Customer Reviews
          </div>

          <h2 className="text-5xl font-bold text-white">
            What Our Clients Say
          </h2>

          <div className="w-32 h-[3px] bg-gradient-to-r from-violet-500 to-fuchsia-500 mx-auto rounded-full mt-6 mb-6" />

          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Trusted by staffing leaders to streamline recruitment,
            improve productivity and make smarter business decisions.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">

          {reviews.map((review, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * .2 }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="rounded-3xl bg-[#1B1233]/80 border border-violet-500/20 backdrop-blur-xl p-8 shadow-xl"
            >

              <div className="flex text-yellow-400 text-xl mb-6">
                ★★★★★
              </div>

              <p className="text-gray-300 leading-8 text-lg mb-8">
                {review.review}
              </p>

              <div className="flex items-center gap-4">

                <div
                  className={`w-14 h-14 rounded-full bg-gradient-to-r ${review.color} flex items-center justify-center text-white font-bold`}
                >
                  {review.initials}
                </div>

                <div>
                  <h3 className="text-white font-semibold text-xl">
                    {review.name}
                  </h3>

                  <p className="text-violet-300">
                    {review.role}
                  </p>
                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}