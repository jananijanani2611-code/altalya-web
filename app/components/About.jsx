"use client";
import { motion } from "framer-motion";

const highlights = [
  { title: "Expert trainers", color: "bg-pink-500" },
  { title: "Cutting edge curriculum", color: "bg-purple-600" },
  { title: "Real-time Projects Hands-on", color: "bg-orange-400" },
  { title: "Comprehensive placement support", color: "bg-blue-600" },
];

const cards = [
  { icon: "🤖", title: "AI & ML", desc: "Cutting-edge artificial intelligence and machine learning programs designed for the next generation." },
  { icon: "🔧", title: "Robotics", desc: "Hands-on robotics training with real hardware and industry-standard tools and techniques." },
  { icon: "🌐", title: "IoT", desc: "Internet of Things solutions connecting the physical and digital world through smart devices." },
];

export default function About() {
  return (
    <section id="about" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-blue-600 text-sm uppercase tracking-widest font-medium mb-3">
            Get To Know Us
          </p>
          <h3 className="text-4xl font-bold text-slate-900 mb-6">
            Why Altalya?
          </h3>
          <p className="text-slate-500 mb-8 leading-relaxed text-lg max-w-3xl">
            Altalya is a DPIIT-recognized startup focused on upskilling
            individuals to help them achieve their dream careers in the IT
            industry. Our company's vision is to transform individuals skills,
            turning hands into minds! We strive to contribute to India's
            journey towards a trillion-dollar economy, even if it is through
            smaller, impactful steps.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {highlights.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className={`w-10 h-10 ${item.color} rounded-full flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  ✓
                </div>
                <p className="text-slate-700 font-medium">{item.title}</p>
              </div>
            ))}
          </div>

          <a href="#courses" className="bg-slate-900 hover:bg-slate-700 text-white px-10 py-4 rounded-full font-medium transition inline-block uppercase tracking-widest text-sm">
            Discover More
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-md transition"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h4 className="text-slate-900 text-xl font-bold mb-2">{item.title}</h4>
              <p className="text-slate-500">{item.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}