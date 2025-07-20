import { useState } from "react";
import { Download, X, Menu } from "lucide-react";
import cv from "../assets/resume/SIDDHI MANJREKAR CV.pdf";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-4 left-1/2 transform -translate-x-1/2 z-50 w-[95%] max-w-[1000px] px-6 py-4 bg-gradient-to-r from-[#37123e]/90 to-[#5F1A63]/90 backdrop-blur-md shadow-2xl rounded-full border border-white/20">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          {/* <img src={heroImage} alt="logo" className="h-8 rounded-full" /> */}
          <a href="/">
            <span className="font-bold text-white text-xl">Siddhi.</span>
          </a>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-white font-medium">
          <a href="#about" className="hover:text-[#9f3ca5] transition">
            About Me
          </a>
          <a href="#skills" className="hover:text-[#9f3ca5] transition">
            Skills
          </a>
          <a href="#projects" className="hover:text-[#9f3ca5] transition">
            Project
          </a>
          <a href="#contact" className="hover:text-[#9f3ca5] transition">
            Contact Me
          </a>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href={cv}
            download
            className="bg-gradient-to-r from-[#f3e8f7] to-[#9f3ca5] text-[#37123e] w-40 text-center py-2 rounded-full flex items-center justify-center gap-2 font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Resume <Download size={16} />
          </a>
        </div>

        {/* Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 w-full z-40 md:hidden mt-4 px-6">
          <nav className="flex flex-col gap-4 text-white font-medium bg-gradient-to-br from-[#37123e]/95 to-[#5F1A63]/95 backdrop-blur-md p-4 rounded-2xl shadow-lg">
            <a
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#9f3ca5] transition"
            >
              About Me
            </a>
            <a
              href="#skills"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#9f3ca5] transition"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#9f3ca5] transition"
            >
              Project
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#9f3ca5] transition"
            >
              Contact Me
            </a>
            <a
              href={cv}
              download
              className="mt-2 bg-white text-[#9f3ca5] w-full text-center py-2 rounded-md flex items-center justify-center gap-2 font-semibold shadow hover:bg-gray-100 transition"
            >
              Resume <Download size={16} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
