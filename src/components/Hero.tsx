import React from 'react';
import { Link } from 'react-router-dom';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function Hero(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section
      id="hero"
      className="flex scroll-mt-20 flex-col items-center bg-dark px-6 py-24 text-center"
    >
      <h1 className="text-4xl font-bold text-white max-w-3xl leading-tight mb-4 tracking-wide">
        Senior Software Engineer. Independent Consultant.
      </h1>
      <p className="text-lg text-white/70 max-w-2xl mb-4">
        I build production-grade software for teams and businesses that need it done right. My
        background spans federal agency platforms, enterprise systems, and custom web solutions for
        clients across the region.
      </p>
      <p className="text-sm font-medium text-fg-muted mb-10 tracking-widest uppercase">
        Software engineering and web development. Somerset, KY.
      </p>
      <Link
        to="/contact"
        className="bg-blue-lct-cta text-white px-8 py-3 rounded font-semibold hover:bg-blue-lct-cta-hover transition-colors"
      >
        Get in Touch
      </Link>
      <p className="mt-10 text-sm text-fg-muted max-w-2xl">
        {totalYears}+ years delivering production software across federal agencies, enterprise
        organizations, and regional businesses. Custom websites for local clients too.
      </p>
    </section>
  );
}

export default Hero;
