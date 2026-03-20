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

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#0f172a] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Student <span className="text-sky-400">Reviews</span>
        </motion.h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-16">
          Real stories from real students who transformed their careers.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#1e293b] rounded-2xl p-8 border border-[#334155]"
            >
              <p className="text-slate-400 mb-6 leading-relaxed">"{item.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold">{item.name}</h4>
                  <p className="text-slate-500 text-sm">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}