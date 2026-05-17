import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Lock, Server, TrendingUp } from 'lucide-react';
import FaqAccordion from '../components/FaqAccordion';
import type { FaqItem } from '../components/FaqAccordion';

type WebsiteFeature = {
  icon: React.ReactNode;
  label: string;
  description: string;
};

const features: WebsiteFeature[] = [
  {
    icon: <Zap size={28} />,
    label: 'Fast',
    description:
      'Template sites load generic JavaScript frameworks, third-party scripts, and bloated CSS whether your site needs them or not. I build only what your site requires, optimized from the start. The result is a lean, fast site that performs well from day one and does not slow down over time.',
  },
  {
    icon: <Lock size={28} />,
    label: 'Secure',
    description:
      'Most website security problems are architectural. I minimize the attack surface by design: no unnecessary plugins, no unaudited third-party code, and infrastructure configured to follow security best practices. You are not responsible for patching a CMS install or chasing down a compromised plugin.',
  },
  {
    icon: <Server size={28} />,
    label: 'Reliable',
    description:
      'I deploy to professional infrastructure built for uptime. No shared hosting, no single points of failure. Your site is monitored and available whether you have ten visitors or ten thousand, and I am the one watching it so you do not have to.',
  },
  {
    icon: <TrendingUp size={28} />,
    label: 'Scalable',
    description:
      'Whether you are a single location today or planning to grow, the architecture grows with you. I do not build systems that need to be thrown out the moment your business changes. Adding pages, features, or integrations later does not require starting over.',
  },
];

const websiteFaqItems: FaqItem[] = [
  {
    question: 'Do I need a new website or custom software?',
    answer:
      'A brochure or marketing site is the right tool when your goal is credibility, discovery, and leads. Custom software makes sense when spreadsheets, manual handoffs, or off-the-shelf tools are slowing you down. If you are unsure, describe your situation and I will recommend the right path.',
  },
  {
    question: 'Do you support the site after launch?',
    answer:
      'Yes. Websites on a managed service plan include ongoing monitoring, infrastructure, and routine content updates. For one-time delivery projects, support and changes are available at my hourly rate with a one-hour minimum. Renewal terms and ongoing costs are always spelled out before any work begins.',
  },
  {
    question: 'What is the difference between Managed Service and One-Time Delivery?',
    answer:
      'Managed Service means I host, monitor, and maintain your site on an ongoing basis. You pay monthly or yearly and I handle everything in the background. One-Time Delivery means I build the site, hand you the source code, and you take it from there. Both start with the same build quality. The difference is who owns the infrastructure and handles things after launch.',
  },
];

function Websites(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-wide text-white">
            Custom Websites Built to Last
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/70">
            Your business deserves more than a page builder template. I scope, design, and build
            your site from the ground up: fast, secure, and built to represent your business without
            compromise. Available as a managed service or one-time delivery. No templates, no
            surprise renewals, no cutting corners.
          </p>
          <Link
            to="/contact"
            className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
          >
            Start a Free Consultation
          </Link>
        </div>
      </section>

      {/* What you actually get */}
      <section className="bg-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">
              What You Actually Get
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-white/60">
              Four words get thrown around a lot in web design. Here is what each one means when I
              build your site.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.label}
                className="flex gap-5 rounded-xl bg-dark p-8 ring-1 ring-white/10"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark-light text-blue-lct">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold tracking-wide text-white">
                    {feature.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Managed service explained */}
      <section className="bg-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">
              What &ldquo;Managed&rdquo; Means
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-white/60">
              A managed website means I do not hand you the keys and walk away. I stay involved.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-dark-light p-8">
              <h3 className="mb-3 text-base font-bold tracking-wide text-white">
                Infrastructure and Monitoring
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Your site runs on professional infrastructure. I handle uptime monitoring,
                performance, and anything that breaks in the underlying systems. You are not
                debugging server issues at midnight.
              </p>
            </div>
            <div className="rounded-xl bg-dark-light p-8">
              <h3 className="mb-3 text-base font-bold tracking-wide text-white">
                Updates and Changes
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                Need to update your hours, add a new service, or swap out a photo? Send me a
                message. I know your site and can make changes without a ticket queue or a new
                statement of work for every small update.
              </p>
            </div>
            <div className="rounded-xl bg-dark-light p-8">
              <h3 className="mb-3 text-base font-bold tracking-wide text-white">
                A Direct Line to Me
              </h3>
              <p className="text-sm leading-relaxed text-white/60">
                You work with the person who built your site. Not a support desk that passes your
                ticket around. I know the history of your project and can answer questions without
                starting from scratch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="bg-dark-light px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-14 text-center text-3xl font-bold tracking-wide text-white">Pricing</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col rounded-xl bg-dark p-8 ring-2 ring-blue-lct">
              <span className="mb-3 inline-block rounded border border-blue-lct px-3 py-1 text-xs font-semibold uppercase tracking-widest text-blue-lct">
                Most Popular
              </span>
              <h3 className="mb-2 text-xl font-bold tracking-wide text-white">Managed Service</h3>
              <p className="mb-4 font-semibold text-white">Starting at $150/month or $1,500/year</p>
              <ul className="mb-4 flex-1 space-y-2">
                {[
                  'Hosting and infrastructure included',
                  'Uptime monitoring included',
                  'Routine content updates included',
                  'Single point of contact',
                  'No surprise renewals at renewal time',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-lct" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/50">
                Initial setup fee varies by project scope and is quoted before any work begins.
                Larger feature additions or redesigns after launch are scoped and quoted separately.
              </p>
            </div>
            <div className="flex flex-col rounded-xl bg-dark p-8 ring-1 ring-white/10">
              <h3 className="mb-2 text-xl font-bold tracking-wide text-white">One-Time Delivery</h3>
              <p className="mb-4 font-semibold text-white">Quoted per project</p>
              <ul className="mb-4 flex-1 space-y-2">
                {[
                  'You own the source code',
                  'You control your own infrastructure',
                  'I handle the initial deployment',
                  'Full walkthrough before handoff',
                  'Ongoing support available on request',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-white/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-lct" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-white/50">
                Support and changes billed at my hourly rate with a one-hour minimum.
              </p>
            </div>
          </div>
          <p className="mt-10 text-center text-sm leading-relaxed text-white/50">
            Every project starts with a free consultation. I scope the work, give you a written
            quote, and only move forward when the scope and fit are clear on both sides.
          </p>
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-dark px-6 py-24" aria-labelledby="websites-faq-heading">
        <div className="mx-auto max-w-3xl">
          <div className="mb-14 text-center">
            <h2
              id="websites-faq-heading"
              className="mb-3 text-3xl font-bold tracking-wide text-white"
            >
              Common Questions
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-base leading-relaxed text-white/60">
              Questions I hear often from local businesses and organizations. Not answered here? Ask
              me on the contact form.
            </p>
          </div>
          <FaqAccordion items={websiteFaqItems} />
        </div>
      </section>
    </>
  );
}

export default Websites;
