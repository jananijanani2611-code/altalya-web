"use client";
import { motion } from "framer-motion";

const courses = [
  {
    title: "Artificial Intelligence",
    desc: "Learn cutting-edge AI technologies and build intelligent systems.",
    tag: "AI & ML",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&h=200&fit=crop",
  },
  {
    title: "Robotics",
    desc: "Hands-on robotics engineering with real hardware and industry tools.",
    tag: "Robotics",
    img: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=200&fit=crop",
  },
  {
    title: "Internet of Things",
    desc: "IoT solutions and applications connecting the physical and digital world.",
    tag: "IoT",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop",
  },
  {
    title: "Machine Learning",
    desc: "Learn ML algorithms, model training and real world applications.",
    tag: "AI & ML",
    img: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400&h=200&fit=crop",
  },
  {
    title: "Data Science",
    desc: "Data analysis, visualization and insights using Python.",
    tag: "Data",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop",
  },
  {
    title: "Computer Vision",
    desc: "Image recognition, object detection and visual AI systems.",
    tag: "AI & ML",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop",
  },
];

export default function Courses() {
  return (
    <section id="courses" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Our <span className="text-blue-600">Courses</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Explore Our Expertise — industry-ready programs built for students and professionals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition group"
            >
              <div className="overflow-hidden h-48">
                <img
                  src={course.img}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-xs uppercase tracking-widest font-medium">{course.tag}</span>
                <h3 className="text-slate-900 text-xl font-bold mt-2 mb-3">{course.title}</h3>
                <p className="text-slate-500 text-sm mb-4">{course.desc}</p>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full text-sm font-medium transition">
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}