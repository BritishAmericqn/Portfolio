'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border py-4 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo/Name */}
        <button 
          onClick={scrollToTop}
          className="text-xl font-semibold text-foreground hover:text-accent blue-text-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1 tracking-tight"
          aria-label="Go to top of page"
        >
          Christian
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-foreground hover:text-accent blue-text-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-foreground hover:text-accent blue-text-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
          >
            Projects
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent p-2 rounded-md"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-sm border-b border-border md:hidden">
            <div className="px-4 py-2 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent blue-text-hover hover:bg-card transition-colors duration-200 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left px-3 py-2 text-foreground hover:text-accent blue-text-hover hover:bg-card transition-colors duration-200 rounded-md"
              >
                Projects
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 