import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section id="hero" className="bg-dark px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-900/40 px-3 py-1 text-xs font-semibold text-emerald-300 ring-1 ring-emerald-500/30">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
          Currently available for C2C engagements
        </div>
        <h1 className="mt-2 mb-2 text-4xl font-bold tracking-wide text-white">Matthew B. Smith</h1>
        <p className="mb-4 text-xl font-semibold tracking-wide text-blue-lct">
          Senior Software Engineer
        </p>
        <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-white/70">
          Independent consultant for technical teams that need senior engineering capacity.{' '}
          {totalYears}+ years shipping production software across federal agency platforms,
          enterprise systems, and distributed services at scale.
        </p>
        <p className="mb-8 text-sm text-white/50">
          <a
            href="mailto:matt@matthewbsmith.com"
            className="text-white/70 underline underline-offset-2 transition-colors hover:text-white"
          >
            matt@matthewbsmith.com
          </a>
          <span className="mx-2 text-white/20" aria-hidden="true">
            &middot;
          </span>
          Somerset, KY &middot; Available remotely
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
          >
            Get in Touch
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border-2 border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:border-white"
          >
            Download CV
          </a>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/10 pt-10">
          <div>
            <div className="text-3xl font-bold text-white">{totalYears}+</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/60">
              Years Experience
            </div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">4</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/60">Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">2</div>
            <div className="mt-1 text-xs uppercase tracking-wide text-white/60">
              Sectors (Federal &amp; Private)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
