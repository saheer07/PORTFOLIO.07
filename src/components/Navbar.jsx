import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home');
  const [showNavbar, setShowNavbar] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef(null);
  const prevScrollY = useRef(0);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // Hide navbar on scroll down
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 10);
      setShowNavbar(prevScrollY.current > current || current < 10);
      prevScrollY.current = current;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Active link based on scroll
  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.querySelector(item.href);
        if (
          section &&
          section.offsetTop - 100 <= window.scrollY &&
          section.offsetTop + section.offsetHeight - 100 > window.scrollY
        ) {
          setActiveLink(item.href.slice(1));
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled
          ? 'bg-black/60 backdrop-blur-lg shadow-md'
          : 'bg-gray-950'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Modern Logo + Name */}
        <a
          href="#home"
          className="flex items-center gap-2 text-white font-bold text-xl"
        >
          <div className="w-10 h-10 bg-gradient-to-tr from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-extrabold text-lg shadow-inner ring-2 ring-white/10">
            S
          </div>
          <span className="text-red-500 text-2xl">Saheer</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          {navItems.map((item, i) => (
            <li key={i}>
              <a
                href={item.href}
                className={`transition-all ${
                  activeLink === item.href.slice(1)
                    ? 'text-red-500 underline underline-offset-4'
                    : 'text-white hover:text-red-400'
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden text-white">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden flex flex-col bg-black bg-opacity-90 px-6 py-4 space-y-4 text-center text-white"
          >
            {navItems.map((item, idx) => (
              <li key={idx}>
                <a
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 ${
                    activeLink === item.href.slice(1)
                      ? 'text-red-500'
                      : 'hover:text-red-400'
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
