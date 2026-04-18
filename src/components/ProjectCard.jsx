import { Link } from "react-router";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-[#0a0a0a]/40 backdrop-blur-md rounded-xl overflow-hidden border border-zinc-800/50 shadow-lg group relative max-w-full hover:border-cyan-500/50 glow-cyan-hover transition-all duration-300"
    >
      {/* Image Section with Hover Button */}
      <div className="relative w-full h-40 sm:h-48 md:h-56 overflow-hidden rounded-t-xl border-b border-zinc-800">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100"
        />

        {/* Overlay Dark Effect */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500" />

        {/* View Detail Button */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-2 translate-y-4 group-hover:translate-y-0">
          <Link
            to={`/projects/${project.id}`}
            className="bg-cyan-500/20 border border-cyan-500/50 backdrop-blur-md text-cyan-300 px-5 py-2 rounded-full font-medium flex items-center gap-2 hover:bg-cyan-500 hover:text-[#000] drop-shadow-[0_0_10px_rgba(0,240,255,0.3)] transition-all duration-300 text-xs sm:text-sm"
          >
            View Details <FaArrowRight />
          </Link>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="px-5 py-6">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack?.map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-semibold tracking-wider uppercase text-cyan-400/80 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full truncate"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Project Title */}
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2 truncate group-hover:text-cyan-300 transition-colors duration-300">
          {project.name}
        </h3>
        {/* Subtle separator */}
        <div className="h-0.5 w-12 bg-orange-500/50 mt-3 group-hover:w-24 transition-all duration-500"></div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
