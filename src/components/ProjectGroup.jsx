import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FiExternalLink } from "react-icons/fi";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "aos/dist/aos.css";

import BellyBound from "../assets/projects/belly-bound-project.png";
import SpotifyClone from "../assets/projects/spotify-clone-website.png";
import NetflixClone from "../assets/projects/netflix-clone-project.png";
import LeadsTracker from "../assets/projects/leads-tracker-website.png";
import Calculator from "../assets/projects/calculator.png";
import ToDoList from "../assets/projects/todo-list-website.png";

const projects = [
  {
    title: "BellyBound",
    image: BellyBound,
    link: "https://food-delievery-frontend-phs3.onrender.com",
  },
  {
    title: "Spotify Clone",
    image: SpotifyClone,
    link: "https://spotify-clone-vert-tau.vercel.app",
  },
  {
    title: "Netflix Clone",
    image: NetflixClone,
    link: "https://netflix-clone-chi-jade.vercel.app",
  },
  {
    title: "Google extension: Leads Tracker",
    image: LeadsTracker,
    link: "https://m-siddhi.github.io/google-extension",
  },
  {
    title: "Calculator with Theme Toggle",
    image: Calculator,
    link: "https://m-siddhi.github.io/calculator-theme-toggle",
  },
  {
    title: "ToDo List",
    image: ToDoList,
    link: "https://m-siddhi.github.io/todo-app",
  },
];

const ProjectSlider = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-[#14001B] flex flex-col items-center justify-center px-4 py-12 text-white">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-7xl custom-swiper"
      >
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div
              className="bg-[#1E0026] border border-[#9f3ca4] rounded-2xl overflow-hidden hover:shadow-[0_0_20px_#9f3ca4] hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
              style={{
                boxShadow:
                  "4px 4px 15px rgba(159, 60, 164, 0.2), -4px -4px 15px rgba(159, 60, 164, 0.2)",
              }}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-fill"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-[#D8B4FE]">
                  {project.title}
                </h3>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[rgb(140_27_145_/_var(--tw-text-opacity))] bg-white px-4 py-2 rounded-full inline-flex items-center gap-2 mt-2 font-semibold shadow-md hover:bg-[#D8B4FE] transition-colors duration-300"
                >
                  Visit Project <FiExternalLink />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        .custom-swiper .swiper-button-next,
        .custom-swiper .swiper-button-prev {
          color: #9f3ca4;
        }
        .swiper-pagination-bullet {
          background-color: #9f3ca4;
        }
      `}</style>
    </div>
  );
};

export default ProjectSlider;
