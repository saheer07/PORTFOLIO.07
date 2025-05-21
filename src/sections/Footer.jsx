import React from 'react';
import { Facebook, Instagram, Github, Linkedin } from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-10 md:gap-y-0 space-y-10 md:space-y-0">
        
        {/* Logo + About */}
        <div>
          <h1 className="text-red-500 text-2xl font-bold mb-3">Saheer</h1>
          <p className="text-sm">
            Passionate developer building modern web experiences. Let's connect and collaborate.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#home" className="hover:text-red-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-red-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-red-500 transition">Skills</a></li>
            <li><a href="#projects" className="hover:text-red-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-red-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Follow Me</h2>
          <div className="flex space-x-5">
            <a
              href="https://www.facebook.com/share/19BKcvb4Uj/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/saheerrr____?igsh=MW16MTE2eHV5emtydw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Instagram />
            </a>
            <a
              href="https://github.com/saheer07"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Github />
            </a>
            <a
              href="https://www.linkedin.com/in/saheer-chungath-23b44434a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-xs text-gray-500 mt-10 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} Saheer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
