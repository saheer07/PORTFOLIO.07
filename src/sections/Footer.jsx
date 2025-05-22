import React from 'react';
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Logo + About */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-red-500 text-3xl font-extrabold tracking-wide">Saheer</h1>
          <p className="text-sm md:text-base leading-relaxed">
            Passionate developer building modern web experiences. Let's connect and collaborate.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-3">
          <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
          <ul className="flex flex-col space-y-2 text-sm md:text-base">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  className="hover:text-red-500 transition-colors duration-300"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Links */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-lg font-semibold mb-2">Follow Me</h2>
          <div className="flex space-x-6 text-red-500">
            <a
              href="https://www.facebook.com/share/19BKcvb4Uj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <Facebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/saheerrr____?igsh=MW16MTE2eHV5emtydw=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <Instagram size={28} />
            </a>
            <a
              href="https://github.com/saheer07"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <Github size={28} />
            </a>
            <a
              href="https://www.linkedin.com/in/saheer-chungath-23b44434a"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-red-400 transition-colors duration-300"
            >
              <Linkedin size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs md:text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6 select-none">
        © {new Date().getFullYear()} Saheer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
