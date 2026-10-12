import React from 'react';
import { Link } from 'react-router-dom';
import LabeledEntry from '../components/LabeledEntry';

type ServiceItem = {
  category: string;
  title: string;
  description: string;
};

const serviceItems: ServiceItem[] = [
  {
    category: 'Software & systems',
    title: 'Custom software',
    description:
      'I build custom software when off-the-shelf tools are not enough, with a written scope and fixed price before work starts.',
  },
  {
    category: 'Existing systems',
    title: 'Repair and modernization',
    description:
      'If you run on software that is failing or falling behind, I can get it working again or tell you honestly whether it is worth fixing.',
  },
  {
    category: 'Websites',
    title: 'Custom website builds',
    description:
      'When a site is the right deliverable, I design and build it with simple hosting, clear documentation, and fewer moving parts for teams without engineers on staff. Ongoing maintenance is available if you want someone to keep it updated.',
  },
];

type ProcessStep = {
  title: string;
  description: string;
  deliverable: string;
};

const processSteps: ProcessStep[] = [
  {
    title: 'Consult',
    description:
      'I start with a free conversation. You walk me through the problem you are facing, and I determine whether I can actually solve it.',
    deliverable: 'Free call',
  },
  {
    title: 'Scope',
    description:
      'After the consultation, I scope the work and define what gets delivered, the timeline, and the cost. You will know exactly what you are getting before anything starts.',
    deliverable: 'Written scope',
  },
  {
    title: 'Build',
    description:
      'While I build, you get regular updates and direct access to me. If I need your input, I ask before making assumptions.',
    deliverable: 'Direct access',
  },
  {
    title: 'Ship and support',
    description:
      'Once work is finished, I walk you through the final product before handing it off. Ongoing maintenance, updates, and support are available on an hourly basis if you need them.',
    deliverable: 'Stays available',
  },
];

function ServicesPage(): React.JSX.Element {
  return (
    <>
      <section className="px-6 pt-16 pb-16 sm:pt-24 sm:pb-20">
        <div className="mx-auto max-w-2xl">
          <Link
            to="/"
            className="font-mono text-xs text-text-subtle transition-colors hover:text-accent"
          >
            ← matthewbsmith.com
          </Link>
          <div className="mt-10 motion-safe:animate-enter">
            <h1 className="text-2xl leading-snug tracking-tight text-balance text-text-primary sm:text-3xl">
              I work with clients who need something built for them.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-text-muted">
              I work with businesses, nonprofits, and local government offices that need something
              built specifically for them. Teams without engineers on staff, organizations that have
              outgrown their current tools, and anyone who wants a fixed scope before work starts.
              The first conversation is free.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg text-text-primary">What I work on</h2>
          <div className="mt-6">
            {serviceItems.map((item) => (
              <LabeledEntry
                key={item.title}
                label={item.category}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg text-text-primary">What to expect</h2>
          <div className="mt-6">
            {processSteps.map((step) => (
              <LabeledEntry
                key={step.title}
                label={step.deliverable}
                title={step.title}
                description={step.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border px-6 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-lg text-text-primary">Ready to talk?</h2>
          <p className="mt-2 text-base leading-relaxed text-text-muted">
            The first conversation is free. Send me a short description of your organization, what
            you need, and your timeline through LinkedIn.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="https://www.linkedin.com/in/matthew-smith-22310b111/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-cta px-4 py-2.5 text-sm font-medium text-text-on-cta transition-colors hover:bg-cta-hover"
            >
              Message me on LinkedIn
            </a>
            <a
              href="/MatthewSmithResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              Review my resume
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
