import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Footer = () => {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/mdshawon63",
      label: "GitHub",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/mohammad-shawon-sikdar-b67098388/",
      label: "LinkedIn",
    },
    {
      icon: <FaEnvelope />,
      link: "mailto:shawonsikdar632@gmail.com",
      label: "Email",
    },
    {
      icon: <FaPhone />,
      link: "tel:01960122965",
      label: "Phone",
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-8 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <p className="text-slate-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-semibold">
            Md Shawon Sikdar
          </span>
          . All rights reserved.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.link}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:bg-indigo-500 hover:text-white transition-all duration-300 hover:scale-110"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;