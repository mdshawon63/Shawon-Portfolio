import SectionReveal from "../components/SectionReveal";
import { FaBook, FaGraduationCap, FaCalendarAlt, FaCode } from "react-icons/fa";

/* ================= TRAINING DATA ================= */
const trainings = [
  {
    title: "Full Stack Web Development",
    institute: "Ostad",
    duration: "2026",
    status: "Ongoing",
    icon: <FaGraduationCap />,
    color: "from-indigo-500 to-purple-500",
    details:
      "Currently learning Full Stack Web Development at Ostad. Gaining hands-on experience in Python, Django, REST API development, JWT authentication, PostgreSQL, and MySQL. Building real-world full stack applications with clean architecture.",
    skills: [
      "Python",
      "Django",
      "REST API",
      "JWT Auth",
      "PostgreSQL",
      "MySQL",
    ],
  },
  {
    title: "Front-end Developer",
    institute: "Dipti",
    duration: "2025",
    status: "Completed",
    icon: <FaCode />,
    color: "from-pink-500 to-purple-500",
    details:
      "Completed Front-end Development training at Dipti. Built a strong foundation in HTML, CSS, JavaScript, and React.js. Learned responsive design, component-based architecture, and modern UI development practices.",
    skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Responsive Design"],
  },
];

const Training = () => {
  return (
    <section className="max-w-5xl mx-auto px-4 py-16">
      {/* Title */}
      <SectionReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="text-indigo-400">Training</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
          My learning journey — training programs that shaped me as a full
          stack developer.
        </p>
      </SectionReveal>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent"></div>

        <div className="space-y-10">
          {trainings.map((t, i) => (
            <SectionReveal key={t.title} delay={i * 0.15}>
              <div className="relative md:pl-20">
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-0 w-12 h-12 rounded-full bg-slate-900 border-2 border-indigo-500 items-center justify-center text-indigo-400 text-xl">
                  {t.icon}
                </div>

                {/* Card */}
                <div className="bg-slate-800 rounded-2xl p-6 md:p-8 border border-slate-700 hover:border-indigo-500/70 transition-all duration-300">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-indigo-400">
                        {t.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1 flex items-center gap-2">
                        <FaBook className="text-indigo-400" />
                        {t.institute}
                      </p>
                    </div>

                    <div className="flex flex-col items-end gap-2">
                      <span className="inline-flex items-center gap-2 text-sm text-slate-300 bg-slate-700 px-3 py-1 rounded-full">
                        <FaCalendarAlt className="text-indigo-400" />
                        {t.duration}
                      </span>
                      <span
                        className={`text-xs font-medium px-3 py-1 rounded-full ${
                          t.status === "Ongoing"
                            ? "bg-green-500/20 text-green-400 border border-green-500/40"
                            : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/40"
                        }`}
                      >
                        {t.status}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <p className="text-slate-300 leading-relaxed mb-5">
                    {t.details}
                  </p>

                  {/* Skills gained */}
                  <div>
                    <p className="text-slate-400 text-sm mb-3 font-medium">
                      Skills Gained:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {t.skills.map((s) => (
                        <span
                          key={s}
                          className="text-sm bg-slate-700 text-slate-200 px-3 py-1.5 rounded-lg hover:bg-indigo-500 hover:text-white transition-all duration-300 cursor-default"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>

      {/* Bottom message */}
      <SectionReveal delay={0.3}>
        <div className="mt-16 text-center">
          <p className="text-slate-400 max-w-2xl mx-auto leading-relaxed">
            📚 I believe in continuous learning. My journey doesn't stop here —
            I'm always exploring new technologies, especially in{" "}
            <span className="text-indigo-400 font-medium">
              AI and full stack development
            </span>
            .
          </p>
        </div>
      </SectionReveal>
    </section>
  );
};

export default Training;