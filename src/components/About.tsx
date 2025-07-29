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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Profile Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="relative aspect-square bg-card border border-border overflow-hidden rounded-2xl shadow-lg">
                {/* TODO: Replace with actual professional photo */}
                {isClient && (
                  <Image
                    src="/assets/profile-photo.jpg"
                    alt="Benjamin Royston - Developer and AI Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    onError={(e) => {
                      // Fallback if image doesn't exist
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement?.querySelector('.fallback')?.classList.remove('hidden');
                    }}
                    suppressHydrationWarning
                  />
                )}
                {/* Fallback placeholder */}
                <div className="fallback w-full h-full flex items-center justify-center text-text-light absolute inset-0">
                  <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
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
                <span className="text-accent blue-text-hover">Real Problems</span>
              </h2>
              <p className="text-xl text-muted leading-relaxed font-normal">
                Developer and AI Engineer who believes the best tools are the ones you actually use.
              </p>
            </div>

            <div className="space-y-4 text-lg text-foreground leading-relaxed font-normal">
              <p>
                I build tools that solve my own problems first—then refine them until they&apos;re 
                production-ready for teams that value execution velocity over flashy demos.
              </p>
              
              <p>
                My background spans full-stack development, AI engineering, and DevOps. 
                I&apos;ve worked with technical founders and product teams who need systems that 
                ship on time, work reliably, and scale when needed.
              </p>
              
              <p>
                Every project in my portfolio is something I use daily. If it doesn&apos;t solve 
                a real problem or provide genuine utility, it doesn&apos;t make the cut.
              </p>
            </div>

            {/* Skills/Expertise */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">
                Technical Focus
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-text-light uppercase tracking-wider mb-2">
                    AI & Machine Learning
                  </h4>
                  <ul className="space-y-1 text-sm text-muted">
                    <li>• LLM Integration & Fine-tuning</li>
                    <li>• Vector Databases & RAG</li>
                    <li>• Automated Code Analysis</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-text-light uppercase tracking-wider mb-2">
                    Full-Stack Development
                  </h4>
                  <ul className="space-y-1 text-sm text-muted">
                    <li>• React, Next.js, TypeScript</li>
                    <li>• Node.js, Python, Go</li>
                    <li>• PostgreSQL, Redis, Docker</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://linkedin.com/in/benjamin-royston" // TODO: Update with actual LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary blue-hover-glow px-6 py-3 font-medium rounded-md shadow-lg hover:shadow-xl transition-all duration-200"
                aria-label="Connect on LinkedIn"
              >
                Let&apos;s Connect
              </a>
              
              <a
                href="mailto:ben@benjaminroyston.com" // TODO: Update with actual email
                className="btn bg-card border border-neutral text-muted hover:border-accent hover:text-accent blue-text-hover px-6 py-3 font-medium rounded-md transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Send email"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 