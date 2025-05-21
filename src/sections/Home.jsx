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
    <section
      className="min-h-screen p-12 bg-gray-950 text-white"
      id="home"
    >
      <div 
      className="max-w-9xl mx-auto min-h-screen  flex flex-col md:flex-row items-center justify-between  bg-gradient-to-br from-black via-gray-900 to-red-900 p-10 rounded-2xl shadow-2xl"
        data-aos="zoom-in"
      >
        {/* Image Section */}
        <div className="flex justify-center md:w-1/2">
          <img
            src="https://saheer07.github.io/PORTFOLIO/my.img.JPG" // Ensure this is placed in public/
            alt="Profile"
            className=" border-4 border-red-600 shadow-xl  w-48 h-48 md:w-72 md:h-72 rounded-full object-cover shadow-2xl hover:scale-110 transition-transform duration-500 ease-in-out"
          />
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left md:w-1/2 space-y-6 max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide">
            Hi, I'm <span className="text-red-500">Saheer</span>
          </h1>
          <p className=" flex flex-col md:flex-row items-center gap-2  text-2xl font-semibold tracking-tight text-red-400">
            Python Full Stack Developer <FaPython />
          </p>
          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate Python and React developer dedicated to building scalable, user-friendly web applications that solve real-world problems.
          </p>

          {/* CTA Buttons */}
          <div className="flex justify-center md:justify-start gap-6 pt-6">
            <a
              href="#projects"
              className="bg-red-600 text-white px-7 py-3 rounded-full font-semibold hover:bg-red-700 shadow-lg hover:shadow-red-700 transition duration-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-red-600 px-7 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white shadow-md transition duration-300"
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
