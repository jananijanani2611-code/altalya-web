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
    <section id="whyus" className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Why Choose <span className="text-blue-600">Us</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            We are not just a training center — we are your career partner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-md hover:border-blue-200 transition"
            >
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>
              <h3 className="text-slate-900 text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}