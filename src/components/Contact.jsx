import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css";

import ScrollToTopButton from "./ScrollToTop";

export default function ContactSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        console.log("✅ Success:", result);
        setShowPopup(true);
        setFormData({ name: "", email: "", website: "", message: "" });
      } else {
        console.error("❌ Server error:", result.message);
        alert("Something went wrong. Try again.");
      }
    } catch (error) {
      console.error("❌ Network error:", error);
      alert("Could not connect to server.");
    }
  };

  return (
    <section
      id="contact"
      className="bg-[#14001B] py-20 px-4 text-white relative"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Right - Text Content */}
        <div
          className="order-1 md:order-2"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-snug">
            <span className="text-white">Let’s </span>
            <span style={{ color: "rgb(121, 30, 129)" }}>connect</span> or
            collaborate.
          </h2>
          <p className="text-gray-400 mb-4">
            Currently freelancing and open to new opportunities, collaborations,
            or part-time roles. Let's get in touch.
          </p>
          <p className="font-semibold text-gray-300 flex items-center gap-2">
            <IoIosMail className="text-xl" />
            manjrekarsiddhi72@gmail.com
          </p>
        </div>

        {/* Left - Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-4 order-2 md:order-1"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="w-full bg-transparent border border-gray-300 px-4 py-3 rounded text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-800 shadow-purple-100 shadow-sm focus:shadow-purple-800 transition"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className="w-full bg-transparent border border-gray-300 px-4 py-3 rounded text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-800 shadow-purple-100 shadow-sm focus:shadow-purple-800 transition"
          />
          <input
            type="text"
            name="website"
            value={formData.website}
            onChange={handleChange}
            placeholder="Your website (If exists)"
            className="w-full bg-transparent border border-gray-300 px-4 py-3 rounded text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-800 shadow-purple-100 shadow-sm focus:shadow-purple-800 transition"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="How can I help?*"
            rows={4}
            required
            className="w-full bg-transparent border border-gray-300 px-4 py-3 rounded text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-100 focus:border-purple-800 shadow-purple-100 shadow-sm focus:shadow-purple-800 transition"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-[#f3e8f7] to-[#9f3ca5] text-[#37123e] w-40 text-center py-2 rounded-full flex items-center justify-center gap-2 font-semibold shadow-lg hover:opacity-90 transition-all duration-300"
          >
            Get In Touch
          </button>

          {/* Social Icons */}
          <div
            className="flex gap-4 mt-8"
            data-aos="zoom-in"
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
        </form>
      </div>

      {/* Popup message */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center space-y-4">
            <h2 className="text-xl font-semibold text-black">
              Message Received!
            </h2>
            <p className="text-black">
              Thank you for reaching out. We'll get back to you soon.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
            >
              Okay
            </button>
          </div>
        </div>
      )}

      <ScrollToTopButton />
    </section>
  );
}
