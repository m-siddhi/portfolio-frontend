import { FaGithub, FaLinkedin } from "react-icons/fa";
import heroImage from "../assets/hero-image.png";

export default function Hero() {
  return (
    <section className="w-full min-h-screen pt-32 flex items-center justify-center px-6 py-20 bg-gradient-to-r from-[#18021e] to-[#8C1B91]">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-center gap-10">
        {/* left side - text content */}
        <div className="flex-1 text-white">
          <h1
            className="text-4xl md:text-5xl font-light leading-snug"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Hello I'm <span className="font-bold">Siddhi Manjrekar.</span>
            <br />
            <span className="font-bold">
              <span
                className="text-4xl md:text-5xl font-extrabold"
                style={{
                  color: "#791e81", // frontend color
                }}
              >
                Frontend
              </span>{" "}
              Developer
            </span>
            <br />
            Based In <span className="font-bold">India.</span>
          </h1>

          <p className="mt-8" data-aos="fade-up" data-aos-delay="200">
            I specialize in building fast, responsive, and user-friendly web
            interfaces using React.js, JavaScript, and Tailwind CSS. <br />
            I’ve also worked on full-stack projects using the MERN stack
            (MongoDB, Express.js, React.js, Node.js), giving me a strong
            understanding of how frontend and backend connect. <br /> Currently,
            I’m open for freelance projects, part-time roles, and
            collaborations. Whether it’s a landing page, a business website, or
            a React-based web app — I bring clean code, great UI/UX, and
            reliable delivery.
          </p>

          {/* buttons */}
          <div
            className="flex gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <a href="#projects">
              <button className="rounded-full px-6 py-2 bg-white text-[#8C1B91] font-semibold rounded shadow-md hover:bg-gray-100 transition">
                My Projects
              </button>
            </a>
            <a href="#contact">
              <button className="rounded-full px-6 py-2 border-2 border-white text-white font-semibold hover:bg-white hover:text-[#8C1B91] transition">
                Contact Me
              </button>
            </a>
          </div>

          {/* social icons */}
          <div
            className="flex gap-4 mt-8"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <a
              href="https://github.com/m-siddhi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-10 h-10 border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#8C1B91] transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/siddhi-manjrekar-889490300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-10 h-10 border-2 border-white rounded-full p-2 hover:bg-white hover:text-[#8C1B91] transition" />
            </a>
          </div>
        </div>

        {/* right side - hero image */}
        <div
          className="flex-1 w-full flex justify-center"
          data-aos="fade-left"
          data-aos-delay="500"
        >
          <img
            src={heroImage}
            alt="hero"
            className="w-[250px] md:w-[400px] h-auto"
          />
        </div>
      </div>
    </section>
  );
}
