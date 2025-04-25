import { motion as Motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero'); // Default to 'hero'
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about-me', label: 'About Me' },
    { id: 'skills', label: 'Skills' },
    { id: 'project', label: 'Project' },
    { id: 'coding-profile', label: 'Coding Profile' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);

      const sections = document.querySelectorAll('section');
      let currentSection = 'hero'; // Default to 'hero'

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute('id');
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? ' backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4 font-mono">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Motion.div whileHover={{ scale: 1.1 }} className="flex-shrink-0">
            <img src={assets.logo} alt="Logo" className="h-12 w-auto mt-2" />
          </Motion.div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-8">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-lg font-display transition-all duration-300 relative group ${
                    activeSection === link.id
                      ? 'bg-gradient-to-r from-teal-400 to-cyan-600 text-transparent bg-clip-text font-bold'
                      : 'bg-gradient-to-r from-gray-400 to-gray-600 text-transparent bg-clip-text'
                  }`}
                >
                  <span className="group-hover:text-gradient">{link.label}</span>
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary scale-x-100 transition-transform origin-left duration-300" />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        >
          <ul className="py-4 space-y-4">
            {navLinks.map(link => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block text-lg font-display transition-all duration-300 ${
                    activeSection === link.id ? 'text-primary font-bold' : 'text-foreground/80'
                  } hover:text-gradient`}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </Motion.div>
  );
};

export default Navbar;
