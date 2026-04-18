import { NavLink } from "react-router";
import logo from "../assets/Iam.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaHome, FaUserAlt, FaCode, FaEnvelope } from "react-icons/fa";
import { useContext } from "react";
import { NavigateContext } from "../context/NavigateProvider";

const Footer = () => {
  const { scrollToSection, homeRef, aboutRef, skillRef, contactRef } =
    useContext(NavigateContext);

  return (
    <footer className="bg-[#050505] text-gray-400 pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      {/* Background subtle glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        {/* Logo Section */}
        <div className="flex flex-col items-start gap-4">
          <div className="text-3xl flex items-center gap-3">
            <img src={logo} className="w-12 h-12 object-cover rounded-full border border-cyan-500/30" alt="Ratul Hasan" />
            <span className="text-2xl font-bold tracking-widest text-white">
              <span className="text-cyan-400">R</span>ATUL <span className="text-orange-500">H</span>ASAN
            </span>
          </div>
          <p className="text-sm text-gray-500 max-w-xs mt-2">
            Crafting seamless user experiences and robust architectures for the modern web.
          </p>
        </div>

        {/* Quick Access with Icons */}
        <div>
          <h3 className="text-sm font-bold tracking-widest text-white mb-6 uppercase">Quick Access</h3>
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li>
              <NavLink
                to="/"
                onClick={() => scrollToSection(homeRef)}
                className="hover:text-cyan-400 transition-colors flex items-center gap-3 group"
              >
                <FaHome className="text-zinc-600 group-hover:text-cyan-500 transition-colors" /> Home
              </NavLink>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="hover:text-cyan-400 transition-colors text-left flex items-center gap-3 group"
              >
                <FaUserAlt className="text-zinc-600 group-hover:text-cyan-500 transition-colors" /> About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(skillRef)}
                className="hover:text-cyan-400 transition-colors text-left flex items-center gap-3 group"
              >
                <FaCode className="text-zinc-600 group-hover:text-cyan-500 transition-colors" /> Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="hover:text-cyan-400 transition-colors text-left flex items-center gap-3 group"
              >
                <FaEnvelope className="text-zinc-600 group-hover:text-cyan-500 transition-colors" /> Contact
              </button>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-sm font-bold tracking-widest text-white mb-6 uppercase">Contact Info</h3>
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-400">
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                <FaLocationDot className="text-orange-500" />
              </div>
              Chuadanga, Khulna, BD
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-cyan-500/50 transition-colors">
                <MdEmail className="text-cyan-400" />
              </div>
              <a href="mailto:dev.ratul.coder@gmail.com" className="hover:text-cyan-300 transition-colors">
                dev.ratul.coder@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-orange-500/50 transition-colors">
                <FaPhoneAlt className="text-orange-500" />
              </div>
              <a href="tel:+8801985435655" className="hover:text-orange-400 transition-colors">
                +8801985-435655
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
        <p className="text-xs text-gray-500 font-medium tracking-wide">
          &copy; {new Date().getFullYear()} Ratul Hasan. All rights reserved.
        </p>
        <p className="text-xs text-gray-600">
          Designed with <span className="text-red-500 animate-pulse inline-block">♥</span> for the web.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
