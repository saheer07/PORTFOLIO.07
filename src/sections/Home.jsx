import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPython } from "react-icons/fa";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen py-20 px-4 bg-gray-950 text-white" id="home">
      <div
        className="min-h-[90vh] max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 bg-gradient-to-br from-black via-gray-900 to-red-900 p-6 sm:p-8 lg:p-12 rounded-2xl shadow-2xl"
        data-aos="zoom-in"
      >
        {/* Image Section */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <img
            src="https://saheer07.github.io/PORTFOLIO/my.img.JPG"
            alt="Profile"
            className="w-40 h-40 sm:w-52 sm:h-52 lg:w-72 lg:h-72 rounded-full object-cover border-4 border-red-600 shadow-xl hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
            Hi, I'm <span className="text-red-500">Saheer</span>
          </h1>

          <p className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-2 text-xl sm:text-2xl font-semibold tracking-tight text-red-400">
            Python Full Stack Developer <FaPython />
          </p>

          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            Passionate Python and React developer dedicated to building scalable, user-friendly web applications that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="bg-red-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-red-700 shadow-lg hover:shadow-red-700 transition duration-300 text-center"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-red-600 px-7 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white shadow-md transition duration-300 text-center"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
