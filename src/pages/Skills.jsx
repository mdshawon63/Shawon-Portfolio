import { motion } from "framer-motion";
import SectionReveal from "../components/SectionReveal";

/* ================= FULL SKILLS DATA ================= */
const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    description: "Building responsive and modern user interfaces.",
    skills: [
      { name: "HTML5", level: 92 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    description: "Designing scalable server-side applications and APIs.",
    skills: [
      { name: "Python", level: 85 },
      { name: "Django", level: 82 },
      { name: "REST API", level: 85 },
      { name: "JWT Authentication", level: 80 },
    ],
  },
  {
    title: "Database",
    icon: "🗄️",
    description: "Working with relational databases and queries.",
    skills: [
      { name: "PostgreSQL", level: 80 },
      { name: "MySQL", level: 78 },
    ],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    description:
      "Integrating AI into real-world web applications and automating workflows.",
    skills: [
      { name: "AI Integration", level: 78 },
      { name: "Prompt Engineering", level: 82 },
      { name: "AI Tools (ChatGPT, Gemini)", level: 85 },
      { name: "Automation Workflows", level: 75 },
    ],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    description: "Daily tools I use to build and ship projects.",
    skills: [
      { name: "Git", level: 85 },
      { name: "GitHub", level: 85 },
      { name: "Postman", level: 80 },
      { name: "VS Code", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Page title */}
      <SectionReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-indigo-400">Skills</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
          A complete overview of the technologies, tools, and skills I use to
          build modern, secure, and AI-powered web applications.
        </p>
      </SectionReveal>

      {/* Skill categories */}
      <div className="space-y-10">
        {skillCategories.map((cat, i) => (
          <SectionReveal key={cat.title} delay={i * 0.1}>
            <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-indigo-500/70 transition-all duration-300">
              {/* Category header */}
              <div className="flex items-start gap-4 mb-6">
                <span className="text-4xl">{cat.icon}</span>
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-400">
                    {cat.title}
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skill bars */}
              <div className="grid md:grid-cols-2 gap-x-8 gap-y-5">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-white text-sm md:text-base">
                        {skill.name}
                      </span>
                      <span className="text-indigo-400 font-semibold text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="bg-gradient-to-r from-indigo-500 to-purple-500 h-2 rounded-full"
                      ></motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>

      {/* AI highlight card */}
      <SectionReveal delay={0.2}>
        <div className="mt-14 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/40 rounded-2xl p-6 md:p-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl">🤖</span>
            <h3 className="text-2xl font-semibold text-indigo-400">
              Currently Exploring AI
            </h3>
          </div>
          <p className="text-slate-300 leading-relaxed">
            I'm actively working with AI tools and AI-powered features to build
            smarter web applications — including AI chat integration, smart
            form filling, content generation, and automation of repetitive
            development workflows. My goal is to combine full stack
            development with AI to deliver more valuable products.
          </p>
        </div>
      </SectionReveal>

      {/* Bottom note */}
      <SectionReveal delay={0.3}>
        <p className="text-center text-slate-500 text-sm mt-10">
          Always learning. Always building. 🚀
        </p>
      </SectionReveal>
    </section>
  );
};

export default Skills;