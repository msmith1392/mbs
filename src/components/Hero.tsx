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
                Somerset, KY &middot; Available remotely
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

            {/* Availability badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-border-emphasis px-3 py-1.5 text-xs text-text-muted">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to new roles
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-3">
              <a
                href="#contact"
                className="inline-block rounded-none bg-accent px-8 py-3 font-semibold text-(--color-text-on-accent) transition-colors hover:bg-accent-hover"
              >
                Get in touch
              </a>
              <a
                href="mailto:matt@matthewbsmith.com"
                className="text-sm text-text-subtle transition-colors hover:text-accent"
              >
                matt@matthewbsmith.com
              </a>
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
              className="w-64 rounded-xl object-cover lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
