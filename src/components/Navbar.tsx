import React, { useState, useEffect } from 'react';
import { Brain } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a0a23]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <Brain className="h-8 w-8 text-[#00f0ff] neon-glow-blue" />
          <span className="text-2xl font-bold gradient-text">Simone AI</span>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#features" className="text-gray-300 hover:text-white hover:text-opacity-100 transition-colors">
            Caratteristiche
          </a>
          <a href="#why-choose" className="text-gray-300 hover:text-white hover:text-opacity-100 transition-colors">
            Perché Sceglierci
          </a>
          <a 
            href="#contact" 
            className="neon-button px-4 py-2 rounded-md bg-gradient-to-r from-[#00f0ff] to-[#8e00ff] text-white font-semibold"
          >
            Prenota Consulenza
          </a>
        </nav>
        <button className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar;