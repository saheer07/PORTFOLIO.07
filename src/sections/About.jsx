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
    <section
      className="min-h-[50vh] flex items-center justify-center px-4 py-16 bg-gray-950 text-white"
      id="about"
    >
      <div
        className="w-full max-w-7xl bg-gradient-to-br from-black via-gray-900 to-red-900 rounded-2xl p-6 sm:p-10 shadow-2xl space-y-10"
        data-aos="fade-up"
      >
        {/* Profile Image & Basic Info */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <img
            src="https://blog.logrocket.com/wp-content/uploads/2022/01/python-developers-guide-react.png"
            alt="Profile"
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-red-600 shadow-xl object-cover"
          />
          <div className="text-center md:text-left space-y-2">
            <h2 className="text-3xl sm:text-4xl font-bold">Saheer Chungath</h2>
            <p className="text-red-400 text-lg">Full Stack Developer</p>
            <p className="text-gray-300 text-sm">Based in Kerala, India</p>
          </div>
        </div>

        {/* About Paragraph */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 border-b-4 border-red-600 inline-block pb-1">
            About Me
          </h3>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-300">
            I’m a passionate full-stack developer with a deep interest in building fast, scalable, and user-friendly web apps. I enjoy solving problems, learning new technologies, and contributing to impactful projects.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-4 text-gray-300">
            My journey started with curiosity in Python and evolved into full-stack development using modern frameworks like React, Django, and more.
          </p>
          <p className="text-base sm:text-lg leading-relaxed mb-6 text-gray-300">
            I believe in writing clean, maintainable code and continuously growing as a developer.
          </p>
        </div>

       

        {/* Resume Download */}
        <div className="text-center pt-6">
          <a
            href="/your-resume.pdf"
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
