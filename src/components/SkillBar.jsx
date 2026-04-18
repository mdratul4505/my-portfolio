import { useContext, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaFireAlt,
  FaLock,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiDaisyui,
} from "react-icons/si";
import Marquee from "react-fast-marquee";
import { motion, useInView } from "framer-motion";
import { NavigateContext } from "../context/NavigateProvider";

// ================= SKILLS =================
const frontendSkills = [
  { name: "React.js", icon: FaReact, color: "text-cyan-400" },
  { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-300" },
  { name: "DaisyUI", icon: SiDaisyui, color: "text-purple-300" },
  { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: FaCss3Alt, color: "text-blue-400" },
];

const backendSkills = [
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
  { name: "Firebase", icon: FaFireAlt, color: "text-yellow-500" },
  { name: "JWT", icon: FaLock, color: "text-purple-400" },
];

const allSkills = [...frontendSkills, ...backendSkills];

// ================= COMPONENT =================
const SkillBar = () => {
  const context = useContext(NavigateContext);
  const skillRef = context?.skillRef || null;
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={skillRef}
      className="px-4 sm:px-6 md:px-10 py-16 max-w-7xl mx-auto"
    >
      {/* ===== HEADING ===== */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 40 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center relative z-10"
      >
        <p className="text-gray-400 text-sm mb-2 uppercase tracking-widest">
          Workflow & Technologies
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Technical Skills
        </h2>
      </motion.div>

      {/* ===== CARDS ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        {/* Frontend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-white text-center uppercase">
            Frontend
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {frontendSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-sm text-gray-300 hover:border-cyan-400 hover:text-cyan-400 transition"
                >
                  <Icon className={skill.color} />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 p-8 rounded-2xl"
        >
          <h3 className="text-xl font-semibold mb-6 text-white text-center uppercase">
            Backend & Tools
          </h3>

          <div className="flex flex-wrap justify-center gap-3">
            {backendSkills.map((skill) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-zinc-700 bg-zinc-900 text-sm text-gray-300 hover:border-orange-400 hover:text-orange-400 transition"
                >
                  <Icon className={skill.color} />
                  {skill.name}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* ===== MARQUEE (STABLE VERSION) ===== */}
      <div className="bg-zinc-900/50 border-y border-zinc-800 py-6 overflow-hidden">
        <Marquee pauseOnHover speed={30} gradient={false} autoFill>
          {allSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group w-24 h-24 sm:w-28 sm:h-28 m-4 flex flex-col items-center justify-center bg-[#111] border border-zinc-800 rounded-2xl hover:border-cyan-500 hover:scale-105 transition"
              >
                <div
                  className={`text-4xl mb-2 ${skill.color} group-hover:scale-110 transition`}
                >
                  <Icon />
                </div>
                <p className="text-gray-400 text-xs uppercase group-hover:text-white">
                  {skill.name}
                </p>
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default SkillBar;