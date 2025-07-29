'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  github: string;
  live: string | null;
  gif: string;
  role: string;
  highlights: string[];
  category: string;
}

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <article 
      className="group bg-card border border-border p-8 transition-all duration-300 hover:border-neutral hover:shadow-lg hover:shadow-shadow hover:-translate-y-1 rounded-lg h-full flex flex-col"
    >
      {/* Project GIF/Image */}
      <div className="relative aspect-video mb-6 bg-neutral overflow-hidden rounded-md">
        {isClient && !imageError ? (
          <Image
            src={project.gif}
            alt={`${project.title} demonstration`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            suppressHydrationWarning
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-text-light">
            <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
            </svg>
          </div>
        )}
        
        {/* Category Badge - Only element with full saturation - Blue hover glow */}
        <div className="absolute top-3 left-3">
          <span className="bg-accent text-background text-sm font-medium px-3 py-1.5 rounded-full shadow-sm blue-hover-glow cursor-default">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content - flex-grow pushes buttons to bottom */}
      <div className="flex-grow flex flex-col space-y-5">
        {/* Title and Role */}
        <div>
          <h3 className="text-2xl font-semibold text-foreground mb-2 group-hover:text-accent blue-text-hover transition-colors duration-200">
            {project.title}
          </h3>
          <p className="text-sm text-text-light font-medium uppercase tracking-wider">
            {project.role}
          </p>
        </div>

        {/* Description */}
        <p className="text-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <span 
              key={index}
              className="bg-neutral border border-border text-text-light text-sm px-3 py-1.5 font-medium rounded-full hover:border-muted hover:text-foreground transition-colors duration-200"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Key Highlights - flex-grow to fill remaining space */}
        <div className="space-y-3 flex-grow">
          <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">
            Key Impact
          </h4>
          <ul className="space-y-2">
            {project.highlights.slice(0, 2).map((highlight, index) => (
              <li key={index} className="text-sm text-muted flex items-start">
                <span className="text-accent mr-3 mt-1.5 block w-2 h-2 bg-current rounded-full flex-shrink-0 blue-hover-glow" />
                {highlight}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Links - always at bottom */}
        <div className="flex gap-3 pt-4 mt-auto">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-neutral text-foreground hover:bg-accent hover:text-background hover:border-accent blue-hover-glow px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm hover:shadow-md"
            aria-label={`View ${project.title} on GitHub`}
          >
            Code
          </a>
          
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-card border border-neutral text-muted hover:bg-accent hover:text-background hover:border-accent blue-hover-glow px-5 py-2.5 text-sm font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent shadow-sm hover:shadow-md"
              aria-label={`View ${project.title} live demo`}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </article>
  );
} 