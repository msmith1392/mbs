import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, ShieldCheck, Cloud, RefreshCw, Users, FileText, Layers } from 'lucide-react';

type EngagementType = {
  icon: React.ReactNode;
  label: string;
  description: string;
};

const engagementTypes: EngagementType[] = [
  {
    icon: <Users size={28} />,
    label: 'Staff Augmentation',
    description:
      'Embedded on your team for a sprint, a quarter, or longer. I work inside your environment, use your tooling, and ship alongside your people. Useful when you need to move faster without making a permanent hire.',
  },
  {
    icon: <FileText size={28} />,
    label: 'Fixed-Scope Projects',
    description:
      'Defined deliverable, clear timeline, accountable execution. You get a written scope before any work starts. Useful when you have a specific capability to build without the overhead of a long-term engagement.',
  },
  {
    icon: <Layers size={28} />,
    label: 'Architecture and Advisory',
    description:
      'Codebase audit, system design review, or technical direction for teams that need a senior perspective without a full-time hire. Delivered as a report, a working session, or an ongoing advisory relationship.',
  },
];

type BackgroundItem = {
  icon: React.ReactNode;
  label: string;
  description: string;
};

const backgroundItems: BackgroundItem[] = [
  {
    icon: <Shield size={28} />,
    label: 'Federal Agency Platforms',
    description:
      'Production systems for federal emergency management platforms, built for reliability, compliance, and availability when it matters most. Not prototype work.',
  },
  {
    icon: <ShieldCheck size={28} />,
    label: 'Compliance-Driven Engineering',
    description:
      'FISMA and Section 508 designed in from day one. Compliance is a constraint I build around, not a checklist I run at the end.',
  },
  {
    icon: <Cloud size={28} />,
    label: 'Serverless AWS Architecture',
    description:
      'Lambda, API Gateway, DynamoDB, S3, and CloudFront: distributed systems built for scale and cost efficiency without managing servers.',
  },
  {
    icon: <RefreshCw size={28} />,
    label: 'Legacy Modernization',
    description:
      'Migrated and rebuilt aging systems without taking operations offline. Undocumented codebases, end-of-life stacks, systems too critical to simply replace.',
  },
];

function Consulting(): React.JSX.Element {
  return (
    <>
      {/* Hero */}
      <section className="bg-dark px-6 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          <h1 className="mb-4 text-4xl font-bold leading-tight tracking-wide text-white">
            Project-Based Consulting and Staff Augmentation
          </h1>
          <p className="mx-auto mb-4 max-w-2xl text-lg text-white/70">
            Senior engineering capacity for teams that need to move fast without cutting corners. My
            background spans federal agency platforms, distributed systems, and compliance-driven
            environments where reliability is non-negotiable.
          </p>
          <p className="mb-10 text-sm font-medium tracking-widest text-fg-muted uppercase">
            Fixed-scope projects &bull; Team augmentation &bull; Technical advisory
          </p>
          <Link
            to="/contact"
            className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
          >
            Start a Conversation
          </Link>
        </div>
      </section>

      {/* Engagement types */}
      <section className="bg-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">How I Work</h2>
            <p className="mx-auto max-w-2xl text-pretty text-white/60">
              I keep the engagement model simple. Pick the structure that fits your situation, or I
              can work one out during the first conversation.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {engagementTypes.map((item) => (
              <div key={item.label} className="flex flex-col gap-4 rounded-xl bg-dark p-8">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark-light text-blue-lct">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold tracking-wide text-white">{item.label}</h3>
                <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Background / credentials */}
      <section className="bg-dark px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">
              What I Have Shipped
            </h2>
            <p className="mx-auto max-w-2xl text-pretty text-white/60">
              Enterprise and federal work demands a different standard. This is the environment most
              of my engineering background comes from.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {backgroundItems.map((item) => (
              <div key={item.label} className="flex gap-5 rounded-xl bg-dark-light p-8 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-dark text-blue-lct">
                  {item.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-bold tracking-wide text-white">
                    {item.label}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/60">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="bg-dark-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">Technical Stack</h2>
            <p className="mx-auto max-w-2xl text-pretty text-white/60">
              Primary languages, frameworks, and platforms I work in professionally.
            </p>
          </div>
          <div className="mx-auto max-w-2xl flex flex-col gap-8">
            {[
              {
                label: 'Backend',
                items: ['Java', 'Spring Boot', 'C#', '.NET', 'Python', 'Django', 'REST APIs'],
              },
              {
                label: 'Frontend',
                items: ['TypeScript', 'React', 'Svelte', 'Angular'],
              },
              {
                label: 'Cloud and Infrastructure',
                items: [
                  'AWS Lambda',
                  'API Gateway',
                  'CloudFront',
                  'S3',
                  'Cloudflare Workers',
                  'Docker',
                ],
              },
              {
                label: 'Databases',
                items: ['MySQL', 'PostgreSQL', 'SQL Server'],
              },
            ].map((group) => (
              <div key={group.label}>
                <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-fg-muted">
                  {group.label}
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-dark px-3 py-1 text-sm text-white/70"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Secondary */}
      <section className="bg-dark px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-2xl font-bold tracking-wide text-white">
            Also Available for Smaller Engagements
          </h2>
          <p className="mx-auto max-w-2xl leading-relaxed text-white/60">
            Not every project is a distributed federal system. I build websites and internal tools
            for businesses across the region at the same standard of quality. If you landed here
            looking for a website or a simpler project, that work is available too.
          </p>
          <Link
            to="/websites"
            className="mt-8 inline-block rounded border-2 border-white/30 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:border-white"
          >
            See Custom Websites
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark-light px-6 py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">Ready to Talk?</h2>
          <p className="mx-auto mb-10 max-w-xl leading-relaxed text-white/60">
            Describe your engagement in a few sentences. I will follow up with clarifying questions
            and make sure scope and fit make sense on both sides before anything moves forward.
          </p>
          <div className="flex flex-col items-center gap-3">
            <Link
              to="/contact"
              className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
            >
              Get in Touch
            </Link>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              Download my CV ↓
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Consulting;
