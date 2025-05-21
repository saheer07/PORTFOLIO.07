import React from 'react';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from 'react-icons/fa';
import { SiTailwindcss, SiRedux } from 'react-icons/si'; // ✅ Correct Redux icon
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
      about: 'A utility-first CSS framework for fast and responsive design.',
    },
    {
      name: 'Git',
      icon: <FaGitAlt className="text-red-600 text-4xl" />,
      about: 'Version control system to manage and track code changes.',
    },
    {
      name: 'Redux',
      icon: <SiRedux className="text-purple-500 text-4xl" />, // ✅ Corrected
      about: 'A predictable state container for JavaScript apps.',
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-gray-950 dark:from-gray-950 dark:to-black text-black dark:text-white py-16 px-6"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl text-white font-extrabold mb-10 border-b-4 inline-block border-red-600 pb-2">
          Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-black via-gray-900 to-red-600 rounded-xl shadow-lg p-6 flex flex-col items-center space-y-2 hover:shadow-2xl transition text-white text-center"
            >
              {skill.icon}
              <p className="text-lg font-semibold">{skill.name}</p>
              <p className="text-sm text-gray-300">{skill.about}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
