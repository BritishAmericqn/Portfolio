'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Profile Photo */}
        <div className="order-2 lg:order-1">
          <div className="relative">
            <div className="relative aspect-square bg-card border border-border overflow-hidden rounded-2xl shadow-lg">
              {/* TODO: Replace with actual professional photo */}
              {isClient && (
                <Image
                  src="/assets/profile-photo.jpg"
                  alt="Christian - Computer Science Student & AI Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                  onError={(e) => {
                    e.currentTarget.src = '/assets/placeholder-profile.svg';
                    e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                  }}
                  suppressHydrationWarning
                />
              )}
              {/* Fallback placeholder */}
              <div className="fallback w-full h-full flex items-center justify-center text-text-light absolute inset-0">
                <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 3 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Subtle accent border effect */}
            <div className="absolute -inset-4 border border-accent/10 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Content */}
        <div className="order-1 lg:order-2 space-y-6">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 leading-tight tracking-tight">
              Built for{' '}
              <span className="text-accent blue-text-hover">Production</span>
            </h2>
            <p className="text-xl text-muted leading-relaxed font-normal">
              Computer Science major at Rice University with a focus on AI. Building tools 
              that meet production-grade standards, not just demo pieces.
            </p>
          </div>

          <div className="space-y-4 text-lg text-foreground leading-relaxed font-normal">
            <p>
              As a rising sophomore, I&apos;m already engineering projects designed for real utility—tools 
              I&apos;d genuinely use and that solve meaningful problems for solo workflows or enterprise teams.
            </p>
            
            <p>
              I work aggressively within scope, shipping what matters while leaving unessential 
              features on the drawing board. Every project is built with maintainability, robustness, 
              and long-term usability in mind.
            </p>
            
            <p>
              I deeply integrate AI tools like Cursor and GPT into my development pipeline 
              to accelerate engineering velocity—but never at the expense of thoughtful design 
              and architectural decisions.
            </p>
          </div>

          {/* Skills/Expertise */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-foreground">
              Technical Specialties
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium text-text-light uppercase tracking-wider mb-2">
                  AI-First Development
                </h4>
                <ul className="space-y-1 text-sm text-muted">
                  <li>• AI-Accelerated Engineering</li>
                  <li>• Workflow Optimization Tools</li>
                  <li>• LLM Integration & Automation</li>
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-medium text-text-light uppercase tracking-wider mb-2">
                  Full-Stack Engineering
                </h4>
                <ul className="space-y-1 text-sm text-muted">
                  <li>• React, Next.js, TypeScript</li>
                  <li>• Desktop Applications (Electron)</li>
                  <li>• GitHub/Cursor-AI/Vercel Workflows</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Contact CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <a
              href="https://www.linkedin.com/in/benjamin-royston-b9375b312/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary blue-hover-glow px-6 py-3 font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
              aria-label="Connect on LinkedIn"
            >
              Let&apos;s Connect
            </a>
            <a
              href="mailto:christian@rice.edu" // TODO: Update with actual email
              className="btn bg-card border border-neutral text-muted hover:border-accent hover:text-accent blue-text-hover px-6 py-3 font-medium rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
              aria-label="Send email"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
} 