"use client";
import { motion } from "framer-motion";

const reasons = [
  { title: "Industry Experts", desc: "Learn from professionals with real world experience in AI, ML and Robotics.", icon: "👨‍💻" },
  { title: "Hands-on Learning", desc: "Every course includes practical projects and real hardware experience.", icon: "🛠️" },
  { title: "Placement Support", desc: "We help you land your dream job with dedicated placement assistance.", icon: "🎯" },
  { title: "College Partnerships", desc: "Tied up with top colleges for internships and academic credits.", icon: "🏫" },
  { title: "Certification", desc: "Get industry recognized certificates upon course completion.", icon: "📜" },
  { title: "Affordable Pricing", desc: "World class education at prices that work for every student.", icon: "💰" },
];

export default function WhyUs() {
  return (
    <section id="whyus" className="bg-[#0f172a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Why Choose <span className="text-sky-400">Us</span>
        </motion.h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          We are not just a training center — we are your career partner.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] rounded-2xl p-8 border border-[#334155] hover:border-sky-500 transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}