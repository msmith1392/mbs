import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section id="hero" className="bg-(--color-bg-primary) px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left column */}
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-text-subtle">
                Somerset, KY &middot; Open to new roles
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-8 text-5xl font-normal leading-[1.05] lg:text-7xl">
              Senior software engineer.
            </h1>

            {/* Body */}
            <p className="mb-8 max-w-xl text-base text-text-muted lg:text-lg">
              {totalYears} years building production systems for FEMA, UPS, and clients across the
              private sector. Currently consulting at 4 Arrows.
            </p>

            {/* CTA */}
            <div className="flex flex-col items-start gap-3">
              <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
                <a
                  href="/MatthewSmithResume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-subtle transition-colors hover:text-accent"
                >
                  Download resume
                </a>
                <a
                  href="mailto:matt@matthewbsmith.com"
                  className="text-sm text-text-subtle transition-colors hover:text-accent"
                >
                  matt@matthewbsmith.com
                </a>
              </div>
            </div>
          </div>

          {/* Right column — headshot */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <img
              src="/photo1.webp"
              alt="Matthew Smith"
              width={960}
              height={958}
              fetchPriority="high"
              className="w-64 rounded-sm object-cover lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
