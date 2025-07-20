import { FaGitAlt, FaBootstrap, FaPhp } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  TbBrandAdobeXd,
  TbBrandAdobePhotoshop,
  TbBrandAdobeIndesign,
  TbBrandAdobeIllustrator,
} from "react-icons/tb";
import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoNodejs,
  IoLogoReact,
  IoLogoFirebase,
  IoLogoWordpress,
} from "react-icons/io5";

export default function Skills() {
  const skills = [
    { name: "Html", icon: <IoLogoHtml5 /> },
    { name: "Css", icon: <IoLogoCss3 /> },
    { name: "JavaScript", icon: <IoLogoNodejs /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Tailwind Css", icon: <RiTailwindCssFill /> },
    { name: "React", icon: <IoLogoReact /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "PHP", icon: <FaPhp /> },
    { name: "Firebase", icon: <IoLogoFirebase /> },
    { name: "Wordpress", icon: <IoLogoWordpress /> },
    { name: "Illustrator", icon: <TbBrandAdobeIllustrator /> },
    { name: "Indesign", icon: <TbBrandAdobeIndesign /> },
    { name: "Photoshop", icon: <TbBrandAdobePhotoshop /> },
    { name: "XD", icon: <TbBrandAdobeXd /> },
  ];

  return (
    <section
      className="w-full pt-10 pb-20 px-6"
      style={{ backgroundColor: "#14001B" }}
    >
      <div className="max-w-7xl mx-auto w-full text-center">
        <h2
          id="skills"
          className="text-4xl md:text-5xl font-light leading-snug mb-12 text-white"
        >
          My <span className="font-bold">Skills</span>
        </h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6">
          {skills.map((skill, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="w-full aspect-square rounded-xl flex flex-col items-center justify-center gap-2 bg-[#1c0d25] text-white border border-[#3d2b4a] shadow-[0_8px_20px_rgba(0,0,0,0.3)] transform transition-all duration-300 hover:rotate-[1deg] hover:-translate-y-2 hover:bg-[#9f3ca4] hover:shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
              style={{
                perspective: "1000px",
                boxShadow:
                  "inset 0 0 10px rgba(255,255,255,0.1), 0 10px 20px rgba(0,0,0,0.4)",
              }}
            >
              <div className="text-3xl">{skill.icon}</div>
              <p className="text-sm font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
