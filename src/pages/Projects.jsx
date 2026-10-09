import SectionReveal from "../components/SectionReveal";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Page title */}
      <SectionReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-indigo-400">Projects</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
          A collection of real-world projects I've built using React.js,
          Python, Django, Tailwind CSS, REST APIs, and modern web tools.
        </p>
      </SectionReveal>

      {/* Projects grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>

      {/* Coming soon */}
      <SectionReveal delay={0.2}>
        <div className="mt-16 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/40 rounded-2xl p-8 text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-5xl mb-4"
          >
            🚀
          </motion.div>
          <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
            More Projects Coming Soon
          </h3>
          <p className="text-slate-300 max-w-2xl mx-auto leading-relaxed">
            I'm continuously building new projects to sharpen my skills. New
            full stack and AI-powered applications will be added here soon.
            Stay tuned!
          </p>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Projects;