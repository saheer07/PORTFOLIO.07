import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaGithub, FaCheckSquare, FaExternalLinkAlt } from 'react-icons/fa';
import { SiReact, SiRedux, SiTailwindcss, SiFramer } from 'react-icons/si';
import todoImage from '../assets/todo.png';
import pageImage from '../assets/page.png';

function Projects() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState('');

  const projects = [
    {
      title: 'Todo App',
      image: todoImage,
      icon: <FaCheckSquare className="text-red-500 text-4xl mb-2" />,
      description:
        'A simple todo list app built with React and Redux. It allows users to add, edit, delete, and mark tasks as completed.',
      tech: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Redux', icon: <SiRedux /> },
        { name: 'CSS', icon: null },
      ],
      github: 'https://github.com/saheer07/Todo-List-',
      demo: 'https://todo-list-gamma-weld-13.vercel.app/',
      tag: 'Web App',
    },
    {
      title: 'Registration Page',
      image: pageImage,
      icon: <FaUser className="text-blue-500 text-4xl mb-2" />,
      description:
        'A responsive and animated portfolio site to showcase my skills, experience, and projects.',
      tech: [
        { name: 'React', icon: <SiReact /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
        { name: 'Framer Motion', icon: <SiFramer /> },
      ],
      github: 'https://github.com/saheer07/registration-page',
      demo: 'https://registration-page-green-seven.vercel.app/',
      tag: 'UI/UX',
    },
  ];

  // Function to open modal with image
  const openModal = (img) => {
    setModalImage(img);
    setModalOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setModalOpen(false);
    setModalImage('');
  };

  return (
    <section id="projects" className="min-h-screen p-12 bg-gray-950 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 border-b-4 inline-block border-red-600 pb-2">
          Projects
        </h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-black via-gray-900 to-red-600 rounded-xl shadow-xl border-2 border-transparent hover:border-red-500 transition duration-300 overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image clickable to open modal */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 sm:h-56 object-cover"
                onClick={() => openModal(project.image)}
              />

              <div className="p-6 text-left">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  <span className="text-sm bg-red-200 dark:bg-red-700 text-red-800 dark:text-red-200 px-2 py-1 rounded">
                    {project.tag}
                  </span>
                </div>

                <p className="mt-3 text-gray-200 text-sm">{project.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="flex items-center gap-1 text-xs bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded"
                    >
                      {tech.icon} {tech.name}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-400 hover:text-white flex items-center gap-1 transition"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-blue-400 hover:text-blue-600 flex items-center gap-1 transition"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for full size image */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={closeModal}
        >
          <img
            src={modalImage}
            alt="Full project"
            className="max-w-4xl max-h-[90vh] rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          />
          <button
            onClick={closeModal}
            className="absolute top-8 right-8 text-white text-3xl font-bold hover:text-red-500 transition"
            aria-label="Close modal"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

export default Projects;
