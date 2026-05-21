import React from 'react';
import { Link } from 'react-router-dom';

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
      {/* Conversational Intro */}
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
          <h1 className="mb-8 text-5xl font-normal leading-[1.05]">How I can help</h1>
          <p className="mb-8 text-base leading-relaxed text-text-muted">
            I work with small businesses, nonprofits, and local organizations to build websites,
            modernize software, and solve technical problems. If you need a new site, want to
            automate a process, or just need advice, I'm happy to help.
          </p>
        </div>
      </section>

      {/* Services List - simplified, direct */}
      <section className="bg-(--color-bg-primary) px-6 py-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl text-text-primary">What I do</h2>
          <p className="mb-8 text-base leading-relaxed text-text-muted">
            After more than a decade building software for all kinds of teams, I've learned most
            businesses just want someone who listens, solves the right problem, and keeps things
            simple. Here's what I actually do for clients.
          </p>
          <ul className="space-y-12">
            <li className="border-t border-border pt-12">
              <div className="space-y-4">
                <h3 className="text-xl text-text-primary">Software & Automation</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  Need a tool or process automated? I build custom software and internal tools to
                  help your business run smoother. I'll always be honest about what's worth fixing
                  or building.
                </p>
              </div>
            </li>
            <li className="border-t border-border pt-12">
              <div className="space-y-4">
                <h3 className="text-xl text-text-primary">Custom Websites</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  I design and build fast, secure websites that represent your business the way you
                  want. Hosting and maintenance are available if you want to hand that off.
                </p>
              </div>
            </li>
            <li className="border-t border-border pt-12">
              <div className="space-y-4">
                <h3 className="text-xl text-text-primary">Technical Consulting</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  Not sure what you need? I'm happy to talk through your ideas and help you figure
                  out the best next step.
                </p>
              </div>
            </li>
          </ul>
          <div className="border-t border-border mt-8" aria-hidden="true" />
        </div>
      </section>

      {/* Contact / CTA - condensed */}
      <section className="bg-(--color-bg-primary) px-6 pb-16 pt-12">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-3xl font-normal text-text-primary">Contact</h2>
          <p className="mb-8 text-base leading-relaxed text-text-muted">
            If you reach out, we’ll talk about what you need. I’ll put together a clear plan and let
            you know what it’ll cost. You’ll always know what’s going on, and you can ask me
            anything along the way.
          </p>
          <p className="mb-2 text-base leading-relaxed text-text-muted">
            The first conversation is always free.
          </p>
          <p className="mb-2 text-base leading-relaxed">
            <a
              href="mailto:matt@matthewbsmith.com"
              className="text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
            >
              matt@matthewbsmith.com
            </a>
          </p>
          <p className="text-sm text-text-subtle">
            Tell me about your business, what you need, or just say hello. I'll get back to you as
            soon as I can.
          </p>
        </div>
      </section>
    </>
  );
}

export default ServicesPage;
