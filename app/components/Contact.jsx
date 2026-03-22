"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! We will get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="bg-slate-50 py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-4 rounded-full"></div>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Have a question or want to enroll? We would love to hear from you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">🏢</div>
              <div>
                <p className="text-blue-600 text-sm uppercase tracking-widest mb-1 font-medium">Company</p>
                <p className="text-slate-900 font-bold">Altalya Solutions Pvt Ltd</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">📞</div>
              <div>
                <p className="text-blue-600 text-sm uppercase tracking-widest mb-1 font-medium">Phone</p>
                <a href="tel:+917560056003" className="text-slate-900 font-bold hover:text-blue-600 transition">
                  +91 7560056003
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">📍</div>
              <div>
                <p className="text-blue-600 text-sm uppercase tracking-widest mb-1 font-medium">Location</p>
                <p className="text-slate-900 font-bold">Coimbatore, Tamil Nadu</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 flex items-center gap-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-2xl">✉️</div>
              <div>
                <p className="text-blue-600 text-sm uppercase tracking-widest mb-1 font-medium">Email</p>
                <p className="text-slate-900 font-bold">info@altalya.in</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-10 border border-slate-200 flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-sm font-medium">Your Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="bg-slate-50 text-slate-900 rounded-xl px-4 py-3 outline-none border border-slate-200 focus:border-blue-500 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-sm font-medium">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="bg-slate-50 text-slate-900 rounded-xl px-4 py-3 outline-none border border-slate-200 focus:border-blue-500 transition"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-slate-600 text-sm font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here"
                rows={5}
                className="bg-slate-50 text-slate-900 rounded-xl px-4 py-3 outline-none border border-slate-200 focus:border-blue-500 transition resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-medium transition"
            >
              Send Message
            </button>
          </motion.form>

        </div>
      </div>
    </section>
  );
}