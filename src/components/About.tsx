import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function About(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section id="about" className="scroll-mt-20 bg-[var(--color-bg-primary)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        {/* Photo slot: add an <img> here when a headshot is available */}
        <h2 className="mb-8 text-3xl font-normal text-[var(--color-text-primary)]">About</h2>
        <div className="space-y-5 text-base leading-relaxed text-[var(--color-text-muted)]">
          <p>
            I am a senior software engineer based in Somerset, KY. For the past {totalYears} years I
            have shipped production software across federal emergency management platforms,
            enterprise logistics systems, and cloud-native AWS infrastructure, working across the
            full stack in Java, Spring Boot, TypeScript, React, and Svelte.
          </p>
          <p>
            I am available for C2C and W2 engagements. I embed directly into your team, use your
            tooling, and ship alongside your people.
          </p>
          <p>
            I also build websites for local businesses in the Somerset area. Current work:{' '}
            <a
              href="https://sproutky-demo.matthewbsmith.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-accent)] underline underline-offset-2 transition-colors hover:text-[var(--color-accent-hover)]"
            >
              Sprout and Learn
            </a>{' '}
            (in development).
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
