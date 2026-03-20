"use client";
import { motion } from "framer-motion";
import heroData from "../../content/posts/hero/index.json";

export default function Hero() {
  return (
    <section className="min-h-screen bg-[#0f172a] flex flex-col items-center justify-center text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-sky-400 text-sm uppercase tracking-widest mb-4"
      >
        {heroData.subheading}
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        Welcome to <span className="text-sky-400">Altalya</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-slate-400 text-lg md:text-xl max-w-2xl mb-10"
      >
        {heroData.description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-4"
      >
        <a href="#courses" className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full font-medium transition">
          Explore Courses
        </a>
        <a href="#contact" className="border border-sky-400 text-sky-400 hover:bg-sky-400 hover:text-black px-8 py-3 rounded-full font-medium transition">
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}