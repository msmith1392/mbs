import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section id="hero" className="bg-[var(--color-bg-primary)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col-reverse gap-12 lg:flex-row lg:items-start lg:gap-16">
          {/* Left column */}
          <div className="flex-1">
            {/* Eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="inline-block h-px w-8 bg-[var(--color-accent)]" aria-hidden="true" />
              <span className="text-xs uppercase tracking-widest text-[var(--color-text-subtle)]">
                Somerset, KY &middot; Available remotely
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-8 text-5xl font-normal leading-[1.05] lg:text-7xl">
              Senior software engineer.
            </h1>

            {/* Body */}
            <p className="mb-8 max-w-xl text-base text-[var(--color-text-muted)] lg:text-lg">
              {totalYears} years building production systems across federal emergency management
              platforms, enterprise logistics, and distributed services. Currently consulting at 4
              Arrows.
            </p>

            {/* Availability badge */}
            <div className="mb-8 inline-flex items-center gap-2 rounded-sm border border-[var(--color-border-emphasis)] px-3 py-1.5 text-xs text-[var(--color-text-muted)]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
              Open to C2C and W2 roles
            </div>

            {/* CTA */}
            <div className="flex flex-col items-start gap-3">
              <a
                href="#contact"
                className="inline-block rounded-none bg-[var(--color-accent)] px-8 py-3 font-semibold text-[var(--color-text-on-accent)] transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Get in touch
              </a>
              <a
                href="mailto:matt@matthewbsmith.com"
                className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-accent)]"
              >
                matt@matthewbsmith.com
              </a>
            </div>
          </div>

          {/* Right column — headshot */}
          <div className="flex justify-center lg:justify-end shrink-0">
            <img
              src="/photo1.jpg"
              alt="Matthew Smith"
              className="w-64 rounded-xl object-cover lg:w-72"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
