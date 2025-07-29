'use client';

import ProjectCard from './ProjectCard';
import projectsData from '@/data/projects.json';

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-32 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight tracking-tight">
            Projects with{' '}
            <span className="text-accent blue-text-hover">Purpose</span>
          </h2>
          <p className="text-xl text-muted max-w-3xl mx-auto leading-relaxed font-normal">
            Tools I build for real problems I face. Each project ships with production-grade quality,
            serves actual users, and solves meaningful challenges.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              className="animate-fade-in-up"
              style={{
                animationDelay: `${index * 0.1}s`,
                animationFillMode: 'both'
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-muted mb-6 font-normal">
            Want to see the code behind these projects?
          </p>
          <a
            href="https://github.com/benjaminroyston" // TODO: Update with actual GitHub
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary blue-hover-glow px-8 py-4 text-lg font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
            aria-label="Visit GitHub profile to see all projects"
          >
            View GitHub Profile
          </a>
        </div>
      </div>

      {/* Add fade-in animation styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-fade-in-up {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
} 