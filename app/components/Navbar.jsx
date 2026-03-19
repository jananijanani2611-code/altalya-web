"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

return (
    <nav className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-sm z-50 px-6 py-4">
    <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        <h1 className="text-white text-xl font-bold">
        Alt<span className="text-blue-400">alya</span>
        </h1>

        <div className="hidden md:flex gap-8">
        <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
        <a href="#courses" className="text-gray-400 hover:text-white transition">Courses</a>
        <a href="#training" className="text-gray-400 hover:text-white transition">Training</a>
        <a href="#testimonials" className="text-gray-400 hover:text-white transition">Review</a>
        <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>

        <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white"
        >
        {isOpen ? "✕" : "☰"}
        </button>
    </div>

    {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 px-6 pb-4">
        <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
        <a href="#courses" className="text-gray-400 hover:text-white transition">Courses</a>
        <a href="#training" className="text-gray-400 hover:text-white transition">Training</a>
        <a href="#testimonials" className="text-gray-400 hover:text-white transition">Reviews</a>        <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
        </div>
    )}
    </nav>
);
}