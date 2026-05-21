import React from 'react';
import { Link } from 'react-router-dom';

type ServiceItem = {
  index: string;
  name: string;
  description: string;
};

const serviceItems: ServiceItem[] = [
  {
    index: '01',
    name: 'Custom Software',
    description:
      'If your business needs software built around how it actually works, I scope it, build it, and hand it off. I have built order management systems, web portals, and internal tools for businesses in Kentucky. Cost is locked in before any work begins.',
  },
  {
    index: '02',
    name: 'Existing Systems',
    description:
      'If your business runs on software that is failing or falling behind, I can get it working again or tell you honestly whether it is worth fixing.',
  },
  {
    index: '03',
    name: 'Custom Website Builds',
    description:
      'I design and build your site from scratch that is fast, secure, and built to represent your business the way you want it. Your site will hold up as your business grows. Hosting and maintenance plans available if you want to hand that off.',
  },
];

type Step = {
  number: string;
  label: string;
  description: string;
  deliverable: string;
};

const steps: Step[] = [
  {
    number: '01',
    label: 'Consult',
    description:
      'I start with a free conversation. You walk me through your business and the problems you are facing, and I determine whether I can actually solve your problem.',
    deliverable: 'Free call',
  },
  {
    number: '02',
    label: 'Scope',
    description:
      'After the consultation, I scope the work and define what gets delivered, the timeline, and the cost. You will know exactly what you are getting before anything starts.',
    deliverable: 'Written scope',
  },
  {
    number: '03',
    label: 'Build',
    description:
      'While I build, you get regular updates and direct access to me. If I need your input, I ask before making assumptions.',
    deliverable: 'Direct access',
  },
  {
    number: '04',
    label: 'Ship and support',
    description:
      'Once work is finished, I will walk you through the final product before handing it off. If you need them, ongoing maintenance, updates, and support are available on an hourly basis.',
    deliverable: 'Stays available',
  },
];

function ServicesPage(): React.JSX.Element {
  return (
    <>
      {/* Intro */}
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
            Working with businesses in Kentucky.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-text-muted">
            I build software for businesses in Kentucky that do not have an engineer on staff. The
            first conversation is free.
          </p>
        </div>
      </section>

      {/* Services items */}
      <section className="bg-(--color-bg-primary) px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl text-text-primary">What I work on</h2>
          <div>
            {serviceItems.map((item) => (
              <div
                key={item.index}
                className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-start sm:gap-10"
              >
                <span className="font-['Instrument_Serif',serif] text-4xl font-normal leading-none text-text-subtle sm:w-12 sm:shrink-0">
                  {item.index}
                </span>
                <div
                  className="hidden w-px self-stretch bg-border-emphasis sm:block"
                  aria-hidden="true"
                />
                <div>
                  <h3 className="mb-2 text-xl text-text-primary">{item.name}</h3>
                  <p className="max-w-prose text-sm leading-relaxed text-text-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
            <div className="border-t border-border" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="bg-(--color-bg-primary) px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-3xl text-text-primary">What to expect</h2>
          <div>
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex flex-col gap-4 border-t border-border py-8 sm:flex-row sm:items-center sm:gap-10"
              >
                <span className="font-['Instrument_Serif',serif] text-4xl font-normal leading-none text-accent sm:w-12 sm:shrink-0">
                  {step.number}
                </span>
                <div className="flex-1">
                  <h3 className="mb-2 text-xl text-text-primary">{step.label}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{step.description}</p>
                  <span className="mt-3 inline-block border border-border-emphasis px-3 py-1 text-xs uppercase tracking-widest text-text-subtle sm:hidden">
                    {step.deliverable}
                  </span>
                </div>
                <div className="hidden shrink-0 sm:block">
                  <span className="border border-border-emphasis px-3 py-1 text-xs uppercase tracking-widest text-text-subtle">
                    {step.deliverable}
                  </span>
                </div>
              </div>
            ))}
            <div className="border-t border-border" aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-(--color-bg-primary) px-6 pb-16 pt-4">
        <div className="mx-auto max-w-5xl border-t border-border pt-10">
          <h2 className="mb-4 text-3xl font-normal text-text-primary">Ready to talk?</h2>
          <p className="mb-3 text-text-muted">
            The first conversation is free.{' '}
            <a
              href="mailto:matt@matthewbsmith.com"
              className="text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
            >
              matt@matthewbsmith.com
            </a>
          </p>
          <p className="text-sm text-text-subtle">
            Tell me about your business, what you need, and your timeline. That is enough to get
            started.
          </p>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
