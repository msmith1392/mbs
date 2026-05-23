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
      <section className="bg-(--color-bg-primary) px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <Link
              to="/"
              className="text-sm text-text-subtle transition-colors hover:text-text-primary"
            >
              &larr; Back
            </Link>
          </div>
          <h1 className="mb-6 text-5xl font-normal leading-[1.05]">
            Working with organizations in Kentucky.
          </h1>
          <p className="text-base leading-relaxed text-text-muted">
            I build software for teams that do not have an engineer on staff: local government,
            nonprofits, and small businesses. The first conversation is free.
          </p>
        </div>
      </section>

      <section className="bg-(--color-bg-primary) px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl text-text-primary">What I work on</h2>
          <div>
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

      <section className="bg-(--color-bg-primary) px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl text-text-primary">What to expect</h2>
          <div>
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

      <section className="bg-(--color-bg-primary) px-6 pb-16 pt-4">
        <div className="mx-auto max-w-5xl border-t border-border pt-10">
          <h2 className="mb-4 text-3xl font-normal text-text-primary">Ready to talk?</h2>
          <p className="text-text-muted">
            The first conversation is free.{' '}
            <a
              href="mailto:matt@matthewbsmith.com"
              className="text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
            >
              matt@matthewbsmith.com
            </a>
          </p>
          <p className="mt-3 text-sm text-text-subtle">
            Tell me about your organization, what you need, and your timeline. That is enough to get
            started.
          </p>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
