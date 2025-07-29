'use client';

import { useRef, useEffect, useState } from 'react';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16">
      {/* Background Video - Only render on client */}
      <div className="absolute inset-0 z-0">
        {isClient && (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-5"
            aria-hidden="true"
            suppressHydrationWarning
          >
            <source src="/assets/hero-video.mp4" type="video/mp4" />
          </video>
        )}
        {/* Very subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
        {/* Main Headline - Inter font with distinctive styling */}
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-foreground leading-tight mb-6 tracking-tight">
          Building for{' '}
          <span className="text-accent blue-text-hover block mt-2">
            Production
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl sm:text-2xl text-muted max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
          CS student at Rice University focused on AI. Engineering tools with real utility
          <br className="hidden sm:block" />
          that meet production-grade standards, not just demo pieces.
        </p>

        {/* GitHub Link */}
        <div className="mb-16">
          <a
            href="https://github.com/BritishAmericqn"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-card border border-neutral text-muted hover:border-accent hover:text-accent px-8 py-4 text-lg font-medium rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
            aria-label="Visit GitHub profile"
          >
            View GitHub
          </a>
        </div>

        {/* CTA Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* See What I've Built */}
          <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              See What I&apos;ve Built
            </h3>
            <p className="text-lg text-muted mb-6 leading-relaxed font-normal">
              Projects engineered for real utility—tools I actually use, built with 
              production-grade standards and thoughtful architectural decisions.
            </p>
            <div className="flex justify-center">
              <button
                onClick={scrollToProjects}
                className="btn btn-primary blue-hover-glow px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="View my projects"
              >
                View My Projects
              </button>
            </div>
          </div>

          {/* Currently Available */}
          <div className="bg-card border border-border p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Open to Opportunities
            </h3>
            <p className="text-lg text-muted mb-6 leading-relaxed font-normal">
              Seeking technical founders and AI product teams who value fast iteration, 
              sharp engineering thinking, and deep user empathy.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/benjamin-royston-b9375b312/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary blue-hover-glow px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="Get in touch via LinkedIn"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator - Only show on client */}
        {isClient && (
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <button
              onClick={scrollToAbout}
              className="text-text-light hover:text-accent transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent p-2 rounded-full group"
              aria-label="Scroll to learn more"
            >
              <svg 
                className="w-6 h-6 group-hover:translate-y-1 transition-transform duration-200" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </section>
  );
} 