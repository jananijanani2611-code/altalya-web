"use client";
import { motion } from "framer-motion";
import heroData from "../../content/posts/hero/index.json";

export default function Hero() {
return (
    <section className="min-h-screen bg-black flex flex-col items-center justify-center text-center px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-blue-400 text-sm uppercase tracking-widest mb-4"
      >
        {heroData.subheading}
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
      >
        {heroData.heading}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-gray-400 text-lg md:text-xl max-w-2xl mb-10"
      >
        {heroData.description}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="flex gap-4"
      >
        <a href="#courses" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full font-medium transition">
          Explore Courses
        </a>
        <a href="#contact" className="border border-white text-white hover:bg-white hover:text-black px-8 py-3 rounded-full font-medium transition">
          Contact Us
        </a>
      </motion.div>
    </section>
  );
}