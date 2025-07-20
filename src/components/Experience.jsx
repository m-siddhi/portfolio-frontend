import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Experience() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const experiences = [
    {
      year: "2025 - Present",
      title: "Frontend Developer",
      company: "Prasuk Jain Hospitality",
      description:
        "Developed responsive UI/UX-driven websites using HTML, CSS, JavaScript, React, Tailwind CSS, PHP, and WordPress (XAMPP) for hospitality and entertainment brands at Prasuk Jain Hospitality.",
    },
    {
      year: "2019-2020",
      title: "Web Developer Intern",
      company: "Zuna Web Tech",
      description:
        "Interned at ZunaWeb Tech, gaining hands-on experience in how websites work and creating responsive sites using Angular.",
    },
    {
      year: "2022 - 2023",
      title: "Graphic Designer",
      company: "Areena Animation",
      description:
        "Learned graphic design fundamentals, designed with including tools like Photoshop and Illustrator.",
    },
  ];

  return (
    <section className="bg-[#14001B] py-16 px-4 md:px-10" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2
          className="text-4xl font-bold text-center text-white mb-12"
          data-aos="zoom-in"
        >
          Experience
        </h2>

        <div className="relative border-l-4 border-white pl-6 space-y-10">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative"
              data-aos="fade-up"
              data-aos-delay={index * 200} // Staggering animation
            >
              <p className="text-sm text-[#D8B4FE]">{exp.year}</p>
              <h3 className="text-xl font-semibold text-white mt-1">
                {exp.title} -{" "}
                <span className="text-[#D8B4FE]">{exp.company}</span>
              </h3>
              <p className="text-[#D8B4FE] mt-2">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
