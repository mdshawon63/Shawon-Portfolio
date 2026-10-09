import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/20 transition-all duration-300 group"
    >
      <h3 className="text-xl font-semibold text-indigo-400 mb-3 group-hover:text-indigo-300">
        {project.title}
      </h3>

      <p className="text-slate-400 mb-4 leading-relaxed text-sm">
        {project.desc}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs bg-slate-700 text-slate-300 px-3 py-1 rounded-full"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-4 text-sm">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-slate-300 hover:text-indigo-400 transition"
          >
            <FaGithub /> Code
          </a>
        )}
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition"
          >
            <FaExternalLinkAlt /> Live
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;