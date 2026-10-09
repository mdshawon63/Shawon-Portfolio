import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaArrowRight,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaUser,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profile from "../assets/profile.jpg";
import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import SectionReveal from "../components/SectionReveal";

/* ================= SKILLS DATA ================= */
const skillCategories = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Python", "Django", "REST API", "JWT Authentication"],
  },
  {
    title: "Database",
    icon: "🗄️",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    title: "AI & Automation",
    icon: "🤖",
    skills: [
      "AI Integration",
      "Prompt Engineering",
      "AI Tools",
      "Automation Workflows",
    ],
  },
  {
    title: "Tools",
    icon: "🛠️",
    skills: ["Git", "GitHub", "Postman", "VS Code"],
  },
];

/* ================= TRAINING DATA ================= */
const trainings = [
  {
    title: "Full Stack Web Development",
    institute: "Ostad",
    duration: "2026",
    details:
      "Learning Full Stack Web Development with Python, Django, REST APIs, JWT authentication, PostgreSQL, and MySQL.",
  },
  {
    title: "Front-end Developer",
    institute: "Dipti",
    duration: "2025",
    details:
      "Learning Front-end Development with HTML, CSS, JavaScript, React.js, and modern UI tools.",
  },
];

const Home = () => {
  return (
    <div>
      {/* ================= HERO ================= */}
      <section className="min-h-[85vh] flex items-center justify-center px-4 py-10">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <p className="text-indigo-400 font-medium mb-2">👋 Hello, I'm</p>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Md Shawon <span className="text-indigo-400">Sikdar</span>
            </h1>

            <h2 className="text-xl md:text-2xl font-semibold text-slate-200 mb-6 h-[2.5rem] md:h-[3rem]">
              <span className="text-slate-400">I'm a </span>
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1800,
                  "Python Developer",
                  1800,
                  "Django Developer",
                  1800,
                  "React Developer",
                  1800
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-indigo-400"
              />
            </h2>

            <p className="text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
              I specialize in building modern, scalable, and secure full stack
              web applications using React.js, Python, Django, and Tailwind
              CSS. I design and consume REST APIs, implement JWT-based
              authentication, and work with databases like PostgreSQL and
              MySQL. I'm also passionate about integrating AI into real-world
              web applications.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
              >
                View Projects <FaArrowRight className="text-sm" />
              </Link>

             
             
            </div>

            <div className="flex gap-4 justify-center md:justify-start text-xl">
              <a
                href="https://github.com/mdshawon63"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammad-shawon-sikdar-b67098388/"
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
              >
                <FaLinkedin />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-indigo-500 blur-3xl opacity-30 animate-pulse"></div>
              <img
                src={profile}
                alt="Md Shawon Sikdar"
                className="relative w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-indigo-500 shadow-2xl shadow-indigo-500/30"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About <span className="text-indigo-400">Me</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700">
            <div className="flex items-center gap-3 mb-4">
              <FaUser className="text-indigo-400 text-2xl" />
              <h3 className="text-2xl font-semibold text-indigo-400">
                Who am I?
              </h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-4">
              I am <strong className="text-white">Md Shawon Sikdar</strong>, a
              passionate{" "}
              <strong className="text-indigo-400">
                Full Stack Web Developer
              </strong>{" "}
              from Bangladesh. I build modern, scalable, and secure web
              applications.
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Skilled in React.js, Python, Django, Tailwind CSS, Bootstrap,
              REST APIs, JWT authentication, PostgreSQL, and MySQL. I'm also
              exploring AI integration to build smarter web applications.
            </p>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              <div className="flex gap-6">
                <div className="flex items-center gap-2 text-slate-300">
                  <FaCode className="text-indigo-400" />
                  <span>Clean Code</span>
                </div>
                <div className="flex items-center gap-2 text-slate-300">
                  <FaGraduationCap className="text-indigo-400" />
                  <span>Fast Learner</span>
                </div>
              </div>

              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-medium transition"
              >
                Read More <FaArrowRight className="text-sm" />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </section>

      {/* ================= SKILLS PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            My <span className="text-indigo-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Technologies and tools I use to build modern, scalable, and smart
            web applications.
          </p>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <SectionReveal key={cat.title} delay={i * 0.1}>
              <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700 hover:border-indigo-500 hover:shadow-lg hover:shadow-indigo-500/10 transition-all duration-300 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{cat.icon}</span>
                  <h3 className="text-xl font-semibold text-indigo-400">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <div className="text-center mt-10">
            <Link
              to="/skills"
              className="inline-flex items-center gap-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              See All Skills <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* ================= PROJECTS PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-indigo-400">Projects</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <div className="text-center mt-10">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              View All Projects <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* ================= TRAINING PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            My <span className="text-indigo-400">Training</span>
          </h2>
        </SectionReveal>

        <div className="space-y-6">
          {trainings.map((t, i) => (
            <SectionReveal key={t.title} delay={i * 0.1}>
              <div className="bg-slate-800 rounded-2xl p-6 border-l-4 border-indigo-500">
                <h3 className="text-lg font-semibold text-indigo-400">
                  {t.title}
                </h3>
                <p className="text-slate-400 text-sm mb-2">
                  {t.institute} • {t.duration}
                </p>
                <p className="text-slate-300">{t.details}</p>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delay={0.2}>
          <div className="text-center mt-10">
            <Link
              to="/training"
              className="inline-flex items-center gap-2 border border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
            >
              See All Training <FaArrowRight className="text-sm" />
            </Link>
          </div>
        </SectionReveal>
      </section>

      {/* ================= CONTACT PREVIEW ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <SectionReveal>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Contact <span className="text-indigo-400">Me</span>
          </h2>
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-10">
          <SectionReveal direction="left">
            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <FaPhone className="text-indigo-400 text-xl" />
                <div>
                  <p className="font-semibold text-white">Phone</p>
                  <a
                    href="tel:01960122965"
                    className="text-slate-400 hover:text-indigo-400 transition"
                  >
                    01960122965
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <FaEnvelope className="text-indigo-400 text-xl" />
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a
                    href="mailto:shawonsikdar632@gmail.com"
                    className="text-slate-400 hover:text-indigo-400 transition break-all"
                  >
                    shawonsikdar632@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-slate-800 p-4 rounded-xl border border-slate-700">
                <FaMapMarkerAlt className="text-indigo-400 text-xl" />
                <div>
                  <p className="font-semibold text-white">Location</p>
                  <p className="text-slate-400">Bangladesh</p>
                </div>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal direction="right">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-4 bg-slate-800 p-6 rounded-2xl border border-slate-700"
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
              ></textarea>
              <button className="bg-indigo-500 hover:bg-indigo-600 w-full py-3 rounded-lg font-medium text-white transition-all duration-300 hover:scale-[1.02]">
                Send Message
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>
    </div>
  );
};

export default Home;