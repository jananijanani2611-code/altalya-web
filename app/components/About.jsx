"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="bg-black py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          About <span className="text-blue-400">Altalya</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          We are an AI-first innovation center driving the future of technology.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="text-blue-400 text-4xl mb-4">🤖</div>
            <h3 className="text-white text-xl font-bold mb-3">AI & ML</h3>
            <p className="text-gray-400">
              Cutting-edge artificial intelligence and machine learning programs
              designed for the next generation.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="text-blue-400 text-4xl mb-4">🔧</div>
            <h3 className="text-white text-xl font-bold mb-3">Robotics</h3>
            <p className="text-gray-400">
              Hands-on robotics training with real hardware and
              industry-standard tools and techniques.
            </p>
          </div>

          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800">
            <div className="text-blue-400 text-4xl mb-4">🌐</div>
            <h3 className="text-white text-xl font-bold mb-3">IoT</h3>
            <p className="text-gray-400">
              Internet of Things solutions connecting the physical and digital
              world through smart devices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
