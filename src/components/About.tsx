import React from 'react';
import { Link } from 'react-router-dom';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function About(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section id="about" className="scroll-mt-20 bg-(--color-bg-primary) px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-3xl font-normal text-text-primary">About</h2>
        <div className="space-y-5 text-base leading-relaxed text-text-muted">
          <p>
            I am Matthew Smith, a senior software engineer based in Somerset, KY. For the past{' '}
            {totalYears} years I have shipped production software across federal emergency
            management platforms, enterprise logistics systems, and cloud-native AWS infrastructure.
          </p>
          <p>
            I also build software for local businesses and nonprofits throughout Kentucky.{' '}
            <Link
              to="/services"
              className="text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
            >
              See how I can help.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
