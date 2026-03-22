"use client";
import { motion } from "framer-motion";

const testimonials = [
  { name: "Rahul Kumar", role: "ML Engineer, Bangalore", text: "Altalya completely changed my career. The hands-on projects and mentorship helped me land my first ML job." },
  { name: "Priya Sharma", role: "IoT Developer, Chennai", text: "The IoT program was amazing. I built real projects and got my certification within 2 months." },
  { name: "Arjun Mehta", role: "Robotics Intern, Pune", text: "Best internship experience ever. The team is supportive and the projects are industry level." },
  { name: "Sneha Reddy", role: "Data Scientist, Hyderabad", text: "I joined the bootcamp with zero experience. Now I work as a data scientist. Altalya made it possible." },
  { name: "Karthik Raja", role: "AI Researcher, Coimbatore", text: "The curriculum is up to date with the latest trends. Highly recommend for anyone serious about AI." },
  { name: "Divya Nair", role: "Software Engineer, Mumbai", text: "Great trainers, great content and great placement support. Worth every rupee spent." },
];

const stars = "★★★★★";

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
          Student <span className="text-blue-600">Testimonials</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Real stories from real students who transformed their careers.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-md hover:border-blue-200 transition"
            >
              <div className="text-yellow-400 text-lg mb-4">{stars}</div>
              <p className="text-slate-600 mb-6 leading-relaxed italic">
                "{item.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold">{item.name}</h4>
                  <p className="text-slate-400 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}