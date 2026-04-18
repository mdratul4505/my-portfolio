import { useContext, useState, useEffect } from "react";
import {
  FaDownload,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaLaptopCode,
  FaProjectDiagram,
  FaEnvelopeOpen,
} from "react-icons/fa";
import { Link, NavLink, useLocation } from "react-router";
import logo from "../assets/Iam.jpg";
import { NavigateContext } from "../context/NavigateProvider";

const Navbar = () => {
  const {
    scrollToSection,
    homeRef,
    aboutRef,
    skillRef,
    contactRef,
    portfolioRef,
  } = useContext(NavigateContext);

  const location = useLocation();
  const isHome = location.pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const handleScroll = (ref) => {
    scrollToSection(ref);
    setMenuOpen(false);
  };

  const navItems = (
    <>
      <NavLink
        to="/"
        onClick={() => handleScroll(homeRef)}
        className="hover:text-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
      >
        <FaHome className="text-cyan-500" /> Home
      </NavLink>
      {isHome && (
        <>
          <button
            onClick={() => handleScroll(aboutRef)}
            className="hover:text-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
          >
            <FaUserAlt className="text-cyan-500" /> About
          </button>
          <button
            onClick={() => handleScroll(skillRef)}
            className="hover:text-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
          >
            <FaLaptopCode className="text-cyan-500" /> Skills
          </button>
          <button
            onClick={() => handleScroll(portfolioRef)}
            className="hover:text-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
          >
            <FaProjectDiagram className="text-cyan-500" /> Projects
          </button>
        </>
      )}
      {isHome ? (
        <button
          onClick={() => handleScroll(contactRef)}
          className="hover:text-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
        >
          <FaEnvelopeOpen className="text-cyan-500" /> Contact
        </button>
      ) : (
        <NavLink
          to="/contact"
          className="hover:text-cyan-400 hover:scale-105 transition-all flex items-center gap-2"
        >
          <FaEnvelopeOpen className="text-cyan-500" /> Contact
        </NavLink>
      )}
    </>
  );

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-[#050505]/80 backdrop-blur-xl border-b border-white/5 py-2 shadow-lg" : "bg-transparent py-4"
      } text-white px-4 md:px-10`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" onClick={() => handleScroll(homeRef)} className="flex items-center gap-3">
          <img src={logo} className="w-10 h-10 object-cover rounded-full border border-cyan-500/50 shadow-[0_0_10px_rgba(0,240,255,0.2)]" alt="Ratul Hasan" />
          <div className="text-xl font-bold tracking-wider">
            <span className="text-cyan-400">R</span>atul <span className="text-orange-500">H</span>asan
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8 text-sm font-medium items-center bg-white/5 px-8 py-3 rounded-full border border-white/10 backdrop-blur-md">
          {navItems}
        </nav>

        {/* Download CV Button */}
        <a
          href="https://drive.google.com/file/d/1dtjJHejP2jwqcsET0t2xJ8O8TtRHo03L/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 bg-orange-500/10 border border-orange-500/50 text-orange-400 rounded-full font-medium hover:bg-orange-500 hover:text-white transition-all duration-300 drop-shadow-[0_0_10px_rgba(255,153,0,0.3)] glow-cyan-hover"
        >
          Resume <FaDownload />
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-[#0a0a0a]/95 backdrop-blur-2xl border-b border-white/10 transition-all duration-300 ease-in-out z-40 ${
          menuOpen ? "max-h-[400px] opacity-100 py-6" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <nav className="flex flex-col gap-6 items-center text-base font-medium">
          {navItems}
        </nav>
        <div className="flex justify-center mt-6">
          <a
            href="https://drive.google.com/file/d/1dtjJHejP2jwqcsET0t2xJ8O8TtRHo03L/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="flex justify-center items-center gap-2 px-8 py-3 bg-orange-500/20 border border-orange-500/50 text-orange-400 rounded-full font-medium"
          >
            Download CV <FaDownload />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;