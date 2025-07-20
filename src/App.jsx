import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/About";
import ExperienceSection from "./components/Experience";
import Skills from "./components/Skills";
import ProjectSection from "./components/Projects";
import ProjectGroup from "./components/ProjectGroup";
import ContactSection from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <CustomCursor />
      <Navbar />
      <Hero />
      <AboutMe />
      <ExperienceSection />
      <Skills />
      <ProjectSection />
      <ProjectGroup />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
