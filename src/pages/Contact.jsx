import { useState } from "react";
import SectionReveal from "../components/SectionReveal";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setSubmitted(false);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "01960122965",
      link: "tel:01960122965",
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "shawonsikdar632@gmail.com",
      link: "mailto:shawonsikdar632@gmail.com",
    },
    {
      icon: <FaMapMarkerAlt />,
      label: "Location",
      value: "Bangladesh",
      link: null,
    },
  ];

  const socials = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      link: "https://github.com/mdshawon63",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      link: "https://www.linkedin.com/in/mohammad-shawon-sikdar-b67098388/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      {/* Title */}
      <SectionReveal>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Contact <span className="text-indigo-400">Me</span>
        </h2>
        <p className="text-slate-400 text-center max-w-2xl mx-auto mb-14">
          Have a project in mind or just want to say hi? Feel free to reach
          out — I'll get back to you as soon as possible.
        </p>
      </SectionReveal>

      <div className="grid md:grid-cols-2 gap-10">
        {/* ============ LEFT — Contact Info ============ */}
        <div className="space-y-6">
          <SectionReveal direction="left">
            <div>
              <h3 className="text-2xl font-semibold text-indigo-400 mb-6">
                Get in Touch
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 bg-slate-800 p-5 rounded-xl border border-slate-700 hover:border-indigo-500/70 transition-all duration-300"
                  >
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 text-xl">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-sm">{info.label}</p>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-white font-medium hover:text-indigo-400 transition break-all"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-white font-medium">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Socials */}
          <SectionReveal direction="left" delay={0.15}>
            <div>
              <h3 className="text-xl font-semibold text-indigo-400 mb-4">
                Follow Me
              </h3>
              <div className="flex gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 text-xl hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Availability box */}
          <SectionReveal direction="left" delay={0.25}>
            <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/40 rounded-2xl p-5">
              <p className="text-slate-300 leading-relaxed text-sm">
                💼 <span className="text-white font-medium">Available for:</span>{" "}
                freelance projects, full-time roles, and collaborations on full
                stack & AI-powered web applications.
              </p>
            </div>
          </SectionReveal>
        </div>

        {/* ============ RIGHT — Contact Form ============ */}
        <SectionReveal direction="right">
          <form
            onSubmit={handleSubmit}
            className="bg-slate-800 p-6 md:p-8 rounded-2xl border border-slate-700 space-y-5"
          >
            <h3 className="text-2xl font-semibold text-indigo-400 mb-2">
              Send a Message
            </h3>

            <div>
              <label className="text-slate-400 text-sm mb-2 block">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 transition"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm mb-2 block">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 transition"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm mb-2 block">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Project Inquiry"
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 transition"
              />
            </div>

            <div>
              <label className="text-slate-400 text-sm mb-2 block">
                Message
              </label>
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                className="w-full bg-slate-700 text-white rounded-lg p-3 outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-500 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02]"
            >
              <FaPaperPlane />
              {submitted ? "Message Sent!" : "Send Message"}
            </button>

            {submitted && (
              <p className="text-green-400 text-sm text-center">
                ✅ Thanks! Your message has been received.
              </p>
            )}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
};

export default Contact;