import { useContext, useRef } from "react";
import ProjectCard from "./ProjectCard";
import projects from "./data/projects";
import { NavigateContext } from "../context/NavigateProvider";
import { motion, useInView } from "framer-motion";

const ProjectsSection = () => {
  const { portfolioRef } = useContext(NavigateContext);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-10%" });

  return (
    <section
      ref={portfolioRef}
      className="py-16 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Section Header with animation */}
      <motion.div
        ref={headerRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{ duration: 0.8 }}
        className="mb-16 text-center md:text-left relative z-10"
      >
        <p className="text-gray-400 tracking-[0.2em] text-xs font-semibold mb-2 uppercase">
          Featured Work
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
          Projects
        </h2>
      </motion.div>

      {/* Project Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid gap-6 grid-cols-1 sm:grid-cols-1 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsSection;
