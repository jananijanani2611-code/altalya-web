"use client";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Machine Learning",
    desc: "Learn ML algorithms, model training and real world applications.",
    tag: "AI & ML",
  },
  {
    title: "Deep Learning",
    desc: "Neural networks, CNNs, RNNs and modern deep learning techniques.",
    tag: "AI & ML",
  },
  {
    title: "Robotics",
    desc: "Build and program robots using industry standard tools.",
    tag: "Robotics",
  },
  {
    title: "IoT Development",
    desc: "Connect devices and build smart systems using IoT platforms.",
    tag: "IoT",
  },
  {
    title: "Computer Vision",
    desc: "Image recognition, object detection and visual AI systems.",
    tag: "AI & ML",
  },
  {
    title: "Data Science",
    desc: "Data analysis, visualization and insights using Python.",
    tag: "Data",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Our <span className="text-blue-400">Courses</span>
        </motion.h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Industry-ready programs built for students and professionals.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-blue-500 transition"
            >
              <span className="text-blue-400 text-xs uppercase tracking-widest font-medium">
                {course.tag}
              </span>
              <h3 className="text-white text-xl font-bold mt-2 mb-3">
                {course.title}
              </h3>
              <p className="text-gray-400">{course.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}