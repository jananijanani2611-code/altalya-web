"use client";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Corporate Training",
    desc: "Customized AI and ML training programs for companies and teams.",
    duration: "Flexible",
    mode: "Online / Offline",
  },
  {
    title: "Student Internship",
    desc: "Real world project experience with mentorship and certification.",
    duration: "1 - 3 Months",
    mode: "Offline",
  },
  {
    title: "Workshop",
    desc: "One day and weekend workshops on latest technology topics.",
    duration: "1 - 2 Days",
    mode: "Offline",
  },
  {
    title: "Online Bootcamp",
    desc: "Intensive online programs to fast track your tech career.",
    duration: "4 - 8 Weeks",
    mode: "Online",
  },
];

export default function Training() {
  return (
    <section id="training" className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Training <span className="text-blue-400">Programs</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Flexible training options designed for students and professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition"
            >
              <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-6">{item.desc}</p>
              <div className="flex gap-4">
                <span className="bg-blue-500 bg-opacity-20 text-blue-400 text-sm px-4 py-1 rounded-full">
                  {item.duration}
                </span>
                <span className="bg-blue-500 bg-opacity-20 text-blue-400 text-sm px-4 py-1 rounded-full">
                  {item.mode}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}