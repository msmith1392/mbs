import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);

  return (
    <section id="hero" className="bg-(--color-bg-primary) px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <img
            src="/photo1.webp"
            alt="Matthew Smith"
            width={960}
            height={958}
            fetchPriority="high"
            className="mx-auto aspect-square w-28 rounded-lg object-cover sm:w-32"
          />
          <p className="mt-6 text-sm font-medium text-accent">Somerset, Kentucky</p>
          <h1 className="mt-5 text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Senior Software Engineer.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-text-muted sm:text-lg">
            I have spent {totalYears} years building production software for FEMA, UPS, and
            private-sector clients. Currently on contract at 4 Arrows Consulting.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-5">
            <a
              href="/MatthewSmithResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-(--color-text-on-accent) transition-colors hover:bg-accent-hover"
            >
              Download resume
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              Contact options
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
