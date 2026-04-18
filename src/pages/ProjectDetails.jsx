import { useParams, Link, useNavigate } from "react-router";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaBug,
  FaRocket,
  FaExternalLinkAlt,
  FaGithub,
  FaArrowLeft,
} from "react-icons/fa";
import projects from "../components/data/projects";

const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) return <p className="text-white text-center mt-20">Project not found</p>;

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 md:px-10 max-w-5xl mx-auto relative z-10">
      
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)} 
        className="mb-8 flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition cursor-pointer"
      >
        <FaArrowLeft /> Back to Projects
      </button>

      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#0a0a0a]/40 backdrop-blur-md border border-zinc-800/50 p-6 sm:p-10 rounded-2xl shadow-lg relative z-10"
      >
        {/* Project Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 flex items-center gap-3">
          <FaLaptopCode className="text-cyan-400" /> {project.name}
        </h1>

        {/* Image */}
        <div className="w-full max-h-[500px] overflow-hidden rounded-xl mb-8 border border-zinc-800/50 relative">
          <img
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] to-transparent opacity-60" />
        </div>

        {/* Description */}
        <p className="text-gray-300 mb-10 text-lg leading-relaxed">{project.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
          {/* Tech Stack */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
              <FaTools className="text-cyan-400" /> Tech Stack
            </h2>
            <div className="flex flex-wrap gap-2">
              {(project.techStack || []).map((tech, idx) => (
                <span
                  key={idx}
                  className="bg-zinc-900/80 text-cyan-300 border border-zinc-700 px-4 py-1.5 text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h2 className="text-xl font-semibold text-white mb-4 flex items-center gap-2 uppercase tracking-widest text-sm">
              <FaExternalLinkAlt className="text-orange-400" /> Project Links
            </h2>
            <div className="flex gap-4 flex-wrap">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-cyan-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)]"
              >
                <FaExternalLinkAlt /> Live Site
              </a>
              <a
                href={project.githubClient}
                target="_blank"
                rel="noreferrer"
                className="bg-orange-500/20 border border-orange-500/50 text-orange-300 px-6 py-2.5 rounded-full font-medium flex items-center gap-2 hover:bg-orange-500 hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,94,0,0.2)] hover:shadow-[0_0_20px_rgba(255,94,0,0.6)]"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>

        {/* Challenges */}
        <div className="mb-8 p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/30">
          <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <FaBug className="text-red-400" /> Challenges Faced
          </h2>
          <p className="text-gray-300 leading-relaxed">{project.challenges}</p>
        </div>

        {/* Future Plans */}
        <div className="p-6 bg-zinc-900/40 rounded-xl border border-zinc-800/30">
          <h2 className="text-xl font-semibold text-white mb-3 flex items-center gap-2">
            <FaRocket className="text-purple-400" /> Future Plans
          </h2>
          <p className="text-gray-300 leading-relaxed">{project.futurePlans}</p>
        </div>

      </motion.section>
    </div>
  );
};

export default ProjectDetails;
