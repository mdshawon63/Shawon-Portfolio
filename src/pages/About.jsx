import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaCode,
  FaGraduationCap,
} from "react-icons/fa";
import SectionReveal from "../components/SectionReveal";

const About = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <SectionReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-indigo-400">Me</span>
        </h2>
      </SectionReveal>

      {/* Bio card */}
      <SectionReveal delay={0.1}>
        <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 mb-8">
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
            based in Bangladesh. I love building modern, scalable, and secure
            web applications that solve real-world problems.
          </p>

          <p className="text-slate-300 leading-relaxed mb-4">
            My stack includes{" "}
            <strong className="text-white">
              React.js, Python, Django, Tailwind CSS, and Bootstrap
            </strong>
            . I design and consume REST APIs, implement JWT-based
            authentication, and work confidently with{" "}
            <strong className="text-white">
              PostgreSQL, MySQL, and MongoDB
            </strong>
            .
          </p>

          <p className="text-slate-300 leading-relaxed">
            I'm always learning, improving, and building real projects to
            sharpen my skills. My goal is to deliver clean, maintainable code
            with a smooth user experience every time.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 text-slate-300">
              <FaCode className="text-indigo-400" />
              <span>Clean Code</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <FaGraduationCap className="text-indigo-400" />
              <span>Fast Learner</span>
            </div>
          </div>
        </div>
      </SectionReveal>

      {/* Personal info card */}
      <SectionReveal delay={0.15}>
        <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 space-y-5">
          <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
            Personal Info
          </h3>

          <div className="grid md:grid-cols-2 gap-5">
            <div className="flex items-start gap-3">
              <FaUser className="text-indigo-400 mt-1" />
              <div>
                <p className="text-slate-400 text-sm">Name</p>
                <p className="text-white font-medium">Md Shawon Sikdar</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaEnvelope className="text-indigo-400 mt-1" />
              <div>
                <p className="text-slate-400 text-sm">Email</p>
                <a
                  href="mailto:shawonsikdar632@gmail.com"
                  className="text-white font-medium hover:text-indigo-400 transition break-all"
                >
                  shawonsikdar632@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaPhone className="text-indigo-400 mt-1" />
              <div>
                <p className="text-slate-400 text-sm">Phone</p>
                <a
                  href="tel:01960122965"
                  className="text-white font-medium hover:text-indigo-400 transition"
                >
                  01960122965
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-indigo-400 mt-1" />
              <div>
                <p className="text-slate-400 text-sm">Location</p>
                <p className="text-white font-medium">Bangladesh</p>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Role</p>
            <p className="text-white font-medium">
              Full Stack Web Developer
            </p>
          </div>
        </div>
      </SectionReveal>
    </section>
  );
};

export default About;