import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);

  return (
    <section id="hero" className="px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1fr)_18rem] lg:gap-20 xl:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="motion-safe:animate-enter">
          <p className="font-mono text-xs text-accent">Somerset, Kentucky</p>
          <h1 className="mt-5 text-5xl leading-[1.05] tracking-tight text-text-primary sm:text-6xl lg:text-7xl">
            Senior Software Engineer.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-text-muted sm:text-lg">
            I have spent {totalYears} years building production software for FEMA, UPS, and
            private-sector clients. Currently on contract at 4 Arrows Consulting.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
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
              className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              Contact options
            </a>
          </div>
        </div>
        <img
          src="/photo1.webp"
          alt="Matthew Smith"
          width={960}
          height={958}
          fetchPriority="high"
          className="aspect-square w-56 rounded-2xl object-cover sm:w-64 lg:w-full"
        />
      </div>
    </section>
  );
}

export default Hero;
