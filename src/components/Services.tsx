import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Code2 } from 'lucide-react';

type ServiceCard = {
  icon: React.ReactNode;
  name: string;
  description: string;
  learnMoreHref: string;
  learnMoreAriaLabel: string;
};

const serviceCards: ServiceCard[] = [
  {
    icon: <Code2 size={32} />,
    name: 'Technical Consulting',
    description:
      'Custom internal tools, system integrations, and project-based engineering for teams that need more than off-the-shelf software can offer.',
    learnMoreHref: '/consulting',
    learnMoreAriaLabel: 'Learn more about technical consulting',
  },
  {
    icon: <Globe size={32} />,
    name: 'Custom Websites',
    description:
      'A website that is fast, secure, and built to represent your business properly. No templates, no page builders. I scope, design, and build it from the ground up.',
    learnMoreHref: '/websites',
    learnMoreAriaLabel: 'Learn more about my website services',
  },
];

function Services(): React.JSX.Element {
  return (
    <section id="services" className="scroll-mt-20 bg-dark-light px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">What I Do</h2>
          <p className="mx-auto max-w-2xl text-pretty text-white/60">
            Custom websites for local businesses. Senior engineering capacity for teams that need
            more.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
          {serviceCards.map((card) => (
            <div
              key={card.name}
              className="flex flex-col rounded-xl bg-dark p-8 ring-1 ring-white/10"
            >
              <div className="mb-4 text-blue-lct">{card.icon}</div>
              <h3 className="mb-3 text-xl font-bold tracking-wide text-white">{card.name}</h3>
              <p className="flex-1 text-sm leading-relaxed text-white/60">{card.description}</p>
              <div className="mt-8">
                <Link
                  to={card.learnMoreHref}
                  aria-label={card.learnMoreAriaLabel}
                  className="inline-block rounded border-2 border-white/30 px-5 py-2 text-sm font-semibold text-white transition-colors hover:border-white"
                >
                  Learn More{' '}
                  <span className="sr-only">
                    {card.learnMoreAriaLabel.replace('Learn more about ', '')}
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
