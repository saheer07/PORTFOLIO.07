import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux } from 'react-icons/si';
import { motion } from 'framer-motion';

function Skills() {
  const skills = [
    {
      name: 'HTML',
      icon: <FaHtml5 className="text-orange-600 text-4xl" />,
      about: 'Basic structure of web pages using semantic HTML.',
    },
    {
      name: 'CSS',
      icon: <FaCss3Alt className="text-blue-600 text-4xl" />,
      about: 'Styling web pages with layouts, colors, and animations.',
    },
    {
      name: 'JavaScript',
      icon: <FaJs className="text-yellow-500 text-4xl" />,
      about: 'Adds interactivity and dynamic behavior to websites.',
    },
    {
      name: 'React',
      icon: <FaReact className="text-blue-400 text-4xl" />,
      about: 'A JavaScript library for building modern UIs using components.',
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
      about: 'Utility-first CSS framework for fast and responsive design.',
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="text-red-600 text-4xl" />,
      about: 'Version control system to manage and track code changes.',
    },
    {
      name: 'Redux',
      icon: <SiRedux className="text-purple-500 text-4xl" />,
      about: 'A predictable state container for JavaScript apps.',
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen py-20 px-6 bg-gray-950 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-12 border-b-4 inline-block border-red-600 pb-2"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Skills
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255,0,0,0.6)' }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gradient-to-br from-black via-gray-900 to-red-800 rounded-2xl p-6 shadow-xl hover:shadow-red-700 transition duration-300"
            >
              <div className="flex flex-col items-center text-center space-y-3">
                {skill.icon}
                <p className="text-lg font-semibold">{skill.name}</p>
                <p className="text-sm text-gray-300">{skill.about}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
