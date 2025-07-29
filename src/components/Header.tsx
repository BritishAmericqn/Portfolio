'use client';

import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Name */}
          <button 
            onClick={scrollToTop}
            className="text-xl font-semibold text-foreground hover:text-accent blue-text-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-md p-1 tracking-tight"
            aria-label="Go to top of page"
          >
            BR
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted hover:text-accent blue-text-hover transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-muted hover:text-accent blue-text-hover transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
            >
              Projects
            </button>
            <a
              href="https://linkedin.com/in/benjamin-royston" // TODO: Update with actual LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-accent blue-text-hover transition-colors duration-200 font-medium focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2 py-1"
              aria-label="Visit LinkedIn profile"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-muted hover:text-accent blue-text-hover transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent rounded-md"
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-background/98 backdrop-blur-xl border-b border-border shadow-lg">
            <div className="px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-muted hover:text-accent blue-text-hover transition-colors duration-200 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="block w-full text-left text-muted hover:text-accent blue-text-hover transition-colors duration-200 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2"
              >
                Projects
              </button>
              <a
                href="https://linkedin.com/in/benjamin-royston" // TODO: Update with actual LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted hover:text-accent blue-text-hover transition-colors duration-200 font-medium py-2 focus:outline-none focus:ring-2 focus:ring-accent rounded-md px-2"
                aria-label="Visit LinkedIn profile"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
} 