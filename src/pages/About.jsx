import { useContext } from "react";
import { FaCoffee, FaMusic, FaPlaneDeparture } from "react-icons/fa";
import { Volleyball } from 'lucide-react';
import { motion } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";
import aboutImg from "../assets/Iam.jpg";

const About = () => {
  const { aboutRef } = useContext(NavigateContext);

  const interests = [
    { icon: <Volleyball />, label: "Football" },
    { icon: <FaCoffee />, label: "Coffee" },
    { icon: <FaPlaneDeparture />, label: "Travel" },
    { icon: <FaMusic />, label: "Music" },
  ];

  return (
    <section
      ref={aboutRef}
      className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20"
    >
      {/* Section Header */}
      <div className="mb-16 text-center md:text-left">
        <p className="text-gray-400 tracking-[0.2em] text-xs font-semibold mb-2 uppercase">
          Who I Am
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          About Me
        </h2>
      </div>

      {/* Main Content inside a dark card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col lg:flex-row items-center gap-10 lg:gap-16 hover:border-cyan-500/30 transition-all duration-500"
      >
        {/* Image Section */}
        <div className="relative group shrink-0">
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 rounded-2xl overflow-hidden border border-zinc-700/50 shadow-2xl"
          >
            <img
              className="w-56 h-auto md:w-72 lg:w-80 rounded-2xl object-cover object-top opacity-80 group-hover:opacity-100 transition duration-500"
              src={aboutImg}
              alt="Ratul Hasan"
            />
          </motion.div>
          {/* Subtle Glow Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-600/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-full" />
        </div>

        {/* Text Section */}
        <div className="text-white w-full space-y-6">
          <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            MERN Stack Developer
          </h3>

          <p className="text-gray-400 text-sm md:text-base leading-relaxed">
            Hello! I'm <span className="text-cyan-400 font-medium">Ratul Hasan</span>, a dedicated and results-driven Developer with a passion for building robust modern web applications. I specialize in turning complex problems into elegant, scalable solutions using <span className="text-orange-400 font-medium">React, Node, MongoDB, Express</span>, and <span className="text-cyan-400 font-medium">Tailwind CSS</span>.
            <br /><br />
            I focus on performance, clean maintainable code, and real-world architectures. Constantly pushing boundaries and staying updated with cutting-edge technologies.
          </p>

          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm pt-4 border-t border-zinc-800">
            <div className="flex flex-col"><span className="text-gray-500 text-xs tracking-wider uppercase mb-1">Name</span><span className="text-gray-200">Ratul Hasan</span></div>
            <div className="flex flex-col"><span className="text-gray-500 text-xs tracking-wider uppercase mb-1">Location</span><span className="text-gray-200">Chuadanga, Bangladesh</span></div>
            <div className="flex flex-col"><span className="text-gray-500 text-xs tracking-wider uppercase mb-1">Phone</span><span className="text-gray-200">+8801985435655</span></div>
            <div className="flex flex-col"><span className="text-gray-500 text-xs tracking-wider uppercase mb-1">Email</span><span className="text-cyan-400 hover:text-cyan-300 transition-colors">dev.ratul.coder@gmail.com</span></div>
          </div>
        </div>
      </motion.div>

      {/* Interests Inline */}
      <div className="mt-12 w-full flex flex-wrap gap-4 lg:gap-6 justify-center">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 bg-[#111] border border-zinc-800 px-6 py-4 rounded-full text-gray-400 hover:text-cyan-400 hover:border-cyan-500/50 glow-cyan-hover transition-all duration-300"
          >
            <span className="text-xl">{interest.icon}</span>
            <span className="text-sm font-semibold tracking-wide uppercase">{interest.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;
