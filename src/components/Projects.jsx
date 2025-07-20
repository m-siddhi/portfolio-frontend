import React from "react";
import { FiExternalLink } from "react-icons/fi";
import ProjectOneImg from "../assets/projects/landing-page-project.png";

const projects = [
  {
    id: "01",
    title: "Luxury Brand Landing Page",
    description:
      "Responsive landing page for a fragrance brand called Velvetine! Built with HTML, Tailwind CSS, and JavaScript, this page is fully responsive, fast-loading, and crafted for a luxury brand vibe.",
    image: ProjectOneImg,
    link: "https://www.linkedin.com/posts/siddhi-manjrekar-889490300_freelancewebdeveloper-frontenddevelopment-activity-7347922445661618176-Lvj4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz1DekBtz3DvSjqL6w7qQjG_779ZcP8PAw",
  },
  // Add more project objects as needed
];

const ProjectsSection = () => {
  return (
    <section className="bg-[#14001B] text-white py-16 px-4 md:px-12">
      <h2
        id="projects"
        className="text-3xl md:text-4xl font-semibold text-center mb-16 text-white"
        data-aos="zoom-in"
      >
        Latest Projects
      </h2>

      <div className="space-y-24">
        {projects.map((project, index) => {
          const animation =
            index % 3 === 0
              ? "fade-up"
              : index % 3 === 1
              ? "fade-left"
              : "fade-right";

          return (
            <div
              key={project.id}
              className={`flex flex-col md:flex-row items-center gap-10 ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
              data-aos={animation}
              data-aos-duration="1000"
              data-aos-delay={index * 300}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full md:w-1/2 rounded-xl shadow-xl"
              />
              <div className="md:w-1/2 space-y-4 text-[#D8B4FE]">
                <h3 className="text-2xl font-bold">{project.id}</h3>
                <h4 className="text-xl font-semibold">{project.title}</h4>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-950 bg-white px-4 py-2 rounded-full inline-flex items-center gap-2 mt-2 font-semibold shadow-md hover:bg-[#D8B4FE] transition-colors duration-300"
                >
                  Visit Project <FiExternalLink />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectsSection;
