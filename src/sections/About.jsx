import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section className="min-h-screen p-12 bg-gray-950 text-white" id="about">
      <div
        className="max-w-9xl mx-auto min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-lg p-10 shadow-2xl"
        data-aos="fade-up"
      >
        {/* Profile Image & Basic Info */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2022/01/python-developers-guide-react.png" // replace with your image
            alt="Profile"
            className="w-48 h-48 rounded-full border-4 border-red-600 shadow-xl object-cover"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-bold mb-2">Saheer Chungath</h2>
            <p className="text-red-400 text-lg mb-1">Full Stack Developer</p>
            <p className="text-gray-300 text-sm">Based in Kerala, India</p>
          </div>
        </div>

        {/* About Paragraph */}
        <div>
          <h3 className="text-3xl font-bold mb-4 border-b-4 border-red-600 inline-block pb-1">
            About Me
          </h3>
          <p className="text-lg leading-relaxed mb-4">
            I’m a passionate full-stack developer with a deep interest in building fast, scalable, and user-friendly web apps. I enjoy solving problems, learning new technologies, and contributing to impactful projects.
          </p>
          <p className="text-lg leading-relaxed mb-4">
            My journey started with curiosity in Python and evolved into full-stack development using modern frameworks like React, Django, and more.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I believe in writing clean, maintainable code and continuously growing as a developer.
          </p>
        </div>

        {/* Highlights */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h4 className="text-xl font-semibold mb-4 text-red-400">Highlights</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Completed HTML , Css , JavaScript , React , Redux , Tailwind</li>
            <li>Certified in Full Stack Development (Python + React)</li>
            <li>Experienced with REST APIs, Tailwind CSS, Firebase</li>
          </ul>
        </div>

        {/* Resume Download */}
        <div className="mt-8 text-center">
          <a
            href="NaN" // change this to your resume path
            download
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
