import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);

  return (
    <section id="hero" className="bg-(--color-bg-primary) px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-center gap-12 md:grid-cols-[1fr_15rem] lg:gap-16">
          <div>
            <p className="mb-5 text-sm font-medium text-accent">Somerset, Kentucky</p>
            <h1 className="max-w-2xl text-4xl leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
              Senior Software Engineer.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-text-muted sm:text-lg">
              I have spent {totalYears} years building production software for FEMA, UPS, and
              private-sector clients. Currently on contract at 4 Arrows Consulting.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-5">
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

          <div className="mx-auto w-48 md:w-full">
            <img
              src="/photo1.webp"
              alt="Matthew Smith"
              width={960}
              height={958}
              fetchPriority="high"
              className="aspect-square w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
