export default function Footer() {
  return (
    <footer className="bg-[#0f172a] border-t border-[#334155] py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h2 className="text-white text-xl font-bold mb-4">
              Alt<span className="text-sky-400">alya</span>
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              An AI-first innovation center focused on AI, ML, Robotics and IoT. Building the next generation of tech professionals.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              <li><a href="#about" className="text-slate-400 hover:text-white transition text-sm">About</a></li>
              <li><a href="#courses" className="text-slate-400 hover:text-white transition text-sm">Courses</a></li>
              <li><a href="#training" className="text-slate-400 hover:text-white transition text-sm">Training</a></li>
              <li><a href="#testimonials" className="text-slate-400 hover:text-white transition text-sm">Reviews</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-white transition text-sm">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Contact</h3>
            <ul className="flex flex-col gap-2">
              <li className="text-slate-400 text-sm">Altalya Solutions Pvt Ltd</li>
              <li><a href="tel:+917560056003" className="text-slate-400 hover:text-white transition text-sm">+91 7560056003</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#334155] pt-6 text-center">
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} Altalya Solutions Pvt Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}