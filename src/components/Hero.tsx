import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START, FEDERAL_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  const federalYears: number = useYearsOfExperience(FEDERAL_START);

  const facts: string[] = [
    `${totalYears} years experience`,
    `${federalYears} years on FEMA work`,
    'Java, Spring, TypeScript, AWS',
    'Remote, KY',
  ];

  function handleContactClick(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document
      .getElementById('contact')
      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  return (
    <section id="hero" className="px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
      <div className="mx-auto max-w-2xl motion-safe:animate-enter">
        <div className="flex items-center gap-4">
          <img
            src="/photo1.webp"
            alt="Matthew Smith"
            width={960}
            height={958}
            fetchPriority="high"
            className="size-14 rounded-full object-cover"
          />
          <div>
            <h1 className="text-lg text-text-primary">Matthew B. Smith</h1>
            <p className="text-sm text-text-muted">Senior Software Engineer</p>
          </div>
        </div>

        <p className="mt-10 text-2xl leading-snug tracking-tight text-balance text-text-primary sm:text-3xl">
          I take features from a rough requirement to production on a long-running federal platform.
        </p>
        <p className="mt-5 text-base leading-relaxed text-text-muted">
          Since 2019 I have been at 4 Arrows Consulting, working across every layer of FEMA&apos;s
          PrepToolkit, from database migrations to the UI, and working with the product manager on
          what gets built. Before that, UPS.
        </p>

        <ul className="mt-8 flex flex-wrap gap-2 font-mono text-xs text-text-muted">
          {facts.map((fact) => (
            <li key={fact} className="rounded-full border border-border-emphasis px-3 py-1">
              {fact}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href="/MatthewSmithResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-cta px-4 py-2.5 text-sm font-medium text-text-on-cta transition-colors hover:bg-cta-hover"
          >
            Download resume
          </a>
          <a
            href="#contact"
            onClick={handleContactClick}
            className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
          >
            Contact options
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
