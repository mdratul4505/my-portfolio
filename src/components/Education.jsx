import { useContext, useRef } from "react";
import {
  FaUniversity,
  FaMapMarkerAlt,
  FaBookOpen,
  FaCheckCircle,
  FaGraduationCap,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";

const Education = () => {
  // ✅ safe context (error hobe na jodi context na thake)
  const context = useContext(NavigateContext);
  const localRef = useRef(null);

  // 👉 jodi context thake use korbe, na thakle localRef
  const educationRef = context?.educationRef || localRef;

  return (
    <section
      ref={educationRef}
      className="py-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* ================= HEADER (FIXED) ================= */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }} // 👈 always visible
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left relative z-20"
      >
        <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">
          Learning & Growth
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-white flex items-center justify-center md:justify-start gap-4">
          <FaGraduationCap className="text-orange-500" />
          Education
        </h2>
      </motion.div>

      {/* ================= CARD ================= */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8 }}
        whileHover={{
          scale: 1.01,
          boxShadow: "0 0 40px rgba(0, 240, 255, 0.1)",
        }}
        viewport={{ once: true }}
        className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 p-8 sm:p-10 md:p-12 rounded-2xl hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden group"
      >
        {/* Glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

        {/* Title */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 mb-6 relative z-10">
          <div className="p-4 bg-zinc-900 rounded-full border border-zinc-700 text-cyan-400">
            <FaUniversity className="text-3xl sm:text-4xl" />
          </div>

          <div className="text-center sm:text-left">
            <h3 className="text-white font-bold text-2xl sm:text-3xl">
              Diploma in Computer Science & Technology
            </h3>

            <p className="text-gray-400 text-base sm:text-lg mt-2">
              Satkhira Govt Polytechnic Institute —{" "}
              <span className="text-cyan-400 font-medium">
                2024 - 2027
              </span>
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-sm md:text-base leading-relaxed text-justify mb-4 sm:pl-[5.5rem] relative z-10">
          My education focuses on developing a strong foundation in computer
          science, covering subjects like programming, data structures,
          algorithms, networking, and software development. I have gained both
          theoretical knowledge and practical experience in modern technologies.
        </p>

        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-300 text-sm md:text-base sm:pl-[5.5rem] relative z-10 mt-8 border-t border-zinc-800/50 pt-6">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-orange-500" />
            Satkhira, Khulna, Bangladesh
          </p>

          <p className="flex items-center gap-2">
            <FaBookOpen className="text-orange-500" />
            Computer Science & Tech
          </p>

          <p className="flex items-center gap-2">
            <FaCheckCircle className="text-orange-500" />
            EIIN No: 833133
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;