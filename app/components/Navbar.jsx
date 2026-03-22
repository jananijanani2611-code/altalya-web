"use client";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-white bg-opacity-90 backdrop-blur-sm z-50 px-6 py-4 border-b border-slate-100">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-slate-900 text-xl font-bold">
          Alt<span className="text-blue-600">alya</span>
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="#about" className="text-slate-500 hover:text-slate-900 transition">About</a>
          <a href="#courses" className="text-slate-500 hover:text-slate-900 transition">Courses</a>
          <a href="#training" className="text-slate-500 hover:text-slate-900 transition">Training</a>
          <a href="#testimonials" className="text-slate-500 hover:text-slate-900 transition">Testimonials</a>
          <a href="#contact" className="text-slate-500 hover:text-slate-900 transition">Contact</a>
        </div>

        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-900">
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4">
          <a href="#about" className="text-slate-500 hover:text-slate-900 transition">About</a>
          <a href="#courses" className="text-slate-500 hover:text-slate-900 transition">Courses</a>
          <a href="#training" className="text-slate-500 hover:text-slate-900 transition">Training</a>
          <a href="#testimonials" className="text-slate-500 hover:text-slate-900 transition">Testimonials</a>
          <a href="#contact" className="text-slate-500 hover:text-slate-900 transition">Contact</a>
        </div>
      )}
    </nav>
  );
}