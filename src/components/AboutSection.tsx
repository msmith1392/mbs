import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { CAREER_START } from '../data/constants';

function AboutSection(): React.JSX.Element {
  const totalYears: number = useYearsOfExperience(CAREER_START);
  return (
    <section id="about" className="scroll-mt-20 bg-dark-light px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        {/* Photo slot: add an <img> here when a headshot is available */}
        <h2 className="mb-8 text-3xl font-bold tracking-wide text-white">About</h2>
        <div className="space-y-5 text-base leading-relaxed text-white/70">
          <p>
            I am a senior software engineer based in Somerset, KY with {totalYears}+ years
            delivering production software across federal and enterprise environments. My background
            runs from federal emergency management platforms and enterprise logistics systems to
            cloud-native serverless architecture on AWS. I work across the full stack: Java and
            Spring Boot on the backend, React, Svelte, and TypeScript on the frontend, and AWS
            infrastructure throughout.
          </p>
          <p>
            I am available for C2C subcontracting engagements: staff augmentation, fixed-scope
            projects, and architecture or advisory work. I embed directly into your team, use your
            tooling, and ship alongside your people. You get a senior engineer who has worked in
            regulated, high-availability, and compliance-driven environments, without the overhead
            of a full-time hire.
          </p>
          <p>
            I also independently own and operate{' '}
            <a
              href="https://lakecumberlandtech.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-lct transition-colors hover:text-blue-400"
            >
              Lake Cumberland Technology Consulting
            </a>
            , a web services firm serving small businesses in the region.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
