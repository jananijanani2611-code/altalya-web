"use client";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Corporate Training",
    desc: "Customized AI and ML training programs for companies and teams.",
    duration: "Flexible",
    mode: "Online / Offline",
    icon: "🏢",
  },
  {
    title: "Student Internship",
    desc: "Real world project experience with mentorship and certification.",
    duration: "1 - 3 Months",
    mode: "Offline",
    icon: "🎓",
  },
  {
    title: "Workshop",
    desc: "One day and weekend workshops on latest technology topics.",
    duration: "1 - 2 Days",
    mode: "Offline",
    icon: "💡",
  },
  {
    title: "Online Bootcamp",
    desc: "Intensive online programs to fast track your tech career.",
    duration: "4 - 8 Weeks",
    mode: "Online",
    icon: "💻",
  },
];

export default function Training() {
  return (
    <section id="training" className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Training <span className="text-blue-600">Programs</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Flexible training options designed for students and professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {programs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 border border-slate-200 hover:shadow-md hover:border-blue-200 transition flex gap-6"
            >
              <div className="text-5xl">{item.icon}</div>
              <div>
                <h3 className="text-slate-900 text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-500 mb-4">{item.desc}</p>
                <div className="flex gap-3">
                  <span className="bg-blue-50 text-blue-600 text-sm px-4 py-1 rounded-full font-medium">{item.duration}</span>
                  <span className="bg-blue-50 text-blue-600 text-sm px-4 py-1 rounded-full font-medium">{item.mode}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}