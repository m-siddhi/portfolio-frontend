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
            I'm a Frontend Developer and Freelancer specializing in React.js,
            JavaScript, and responsive design. I create fast, accessible, and
            user-focused web applications with clean code and polished UI/UX.
          </p>

          <p
            className="mb-4 text-base leading-relaxed text-white"
            data-aos="fade-left"
            data-aos-delay="500"
          >
            Whether it's building dynamic React apps, customizing WordPress
            themes, or designing visual assets in Photoshop and Illustrator, I
            bring a full-stack mindset to frontend work. My projects span
            scalable websites, landing pages, and custom components—all built
            with performance and usability in mind.
          </p>

          <p
            className="text-base leading-relaxed text-white"
            data-aos="fade-left"
            data-aos-delay="600"
          >
            I'm currently freelancing and open to new opportunities,
            collaborations, or part-time roles. I'm also constantly leveling up
            my skills and staying in sync with the latest front-end trends and
            tools.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
