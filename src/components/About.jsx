import React from "react";
import AboutImg from "../assets/about-image.png";

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#14001B] py-16 px-4 md:px-12 text-white overflow-hidden"
    >
      <div
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {/* Left: Image */}
        <div
          className="w-full md:w-1/2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <img
            src={AboutImg}
            alt="About Illustration"
            className="rounded-lg p-2 shadow-lg object-cover w-full h-auto"
          />
        </div>

        {/* Right: Content */}
        <div className="w-full md:w-1/2">
          <h2
            className="text-3xl md:text-4xl font-semibold mb-6 text-white"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            About <span className="text-[#D1A6E9]">Me</span>
          </h2>
          <p
            className="mb-4 text-base leading-relaxed text-white"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            I'm a Frontend Developer with a strong foundation in building
            responsive, accessible, and user-focused web applications using
            React.js, JavaScript, and Tailwind CSS.
          </p>
          <p
            className="mb-4 text-base leading-relaxed text-white"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            I've also worked on full-stack projects using the MERN stack
            (MongoDB, Express.js, React.js, Node.js), giving me experience in
            building complete web apps—from backend APIs to polished frontends.
            In addition to coding, I enjoy crafting clean UI/UX, customizing
            WordPress themes, and working with tools like Photoshop and
            Illustrator for visual design.
          </p>
          <p
            className="text-base leading-relaxed text-white"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            I'm currently offering freelance services and open to exciting
            projects, part-time roles, or collaborations. I stay actively
            engaged in learning and keeping up with modern web technologies to
            deliver high-quality, scalable solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
