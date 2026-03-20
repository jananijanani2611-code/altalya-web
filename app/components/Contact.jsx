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
    <section id="contact" className="bg-[#1e293b] py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-white text-center mb-4"
        >
          Get In <span className="text-sky-400">Touch</span>
        </motion.h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-10">
          Have a question or want to enroll? We would love to hear from you.
        </p>
        <div className="flex flex-col md:flex-row gap-6 mb-16 justify-center">
          <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#334155] text-center">
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-2">Company</p>
            <p className="text-white font-bold">Altalya Solutions Pvt Ltd</p>
          </div>
          <div className="bg-[#0f172a] rounded-2xl p-6 border border-[#334155] text-center">
            <p className="text-sky-400 text-sm uppercase tracking-widest mb-2">Phone</p>
            <a href="tel:+917560056003" className="text-white font-bold hover:text-sky-400 transition">+91 7560056003</a>
          </div>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="bg-[#0f172a] rounded-2xl p-10 border border-[#334155] flex flex-col gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-slate-400 text-sm">Your Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required placeholder="Enter your name"
              className="bg-[#1e293b] text-white rounded-xl px-4 py-3 outline-none border border-[#334155] focus:border-sky-500 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-400 text-sm">Email Address</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required placeholder="Enter your email"
              className="bg-[#1e293b] text-white rounded-xl px-4 py-3 outline-none border border-[#334155] focus:border-sky-500 transition" />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-slate-400 text-sm">Message</label>
            <textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Write your message here" rows={5}
              className="bg-[#1e293b] text-white rounded-xl px-4 py-3 outline-none border border-[#334155] focus:border-sky-500 transition resize-none" />
          </div>
          <button type="submit" className="bg-sky-600 hover:bg-sky-700 text-white py-3 rounded-xl font-medium transition">
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}