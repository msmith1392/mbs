import React from 'react';

interface WorkItem {
  category: string;
  title: string;
  description: string;
  caseStudy: {
    problem: string;
    decision: string;
    outcome: string;
  };
  tags: string[];
}

const workItems: WorkItem[] = [
  {
    category: '4 Arrows Consulting · Federal Systems',
    title: 'Concurrent Session Safety in FEMA Reporting',
    description:
      'PrepToolkit and the Unified Reporting Tool (URT) are FEMA preparedness platforms used by emergency management partners to complete THIRA/SPR assessments and support National Preparedness System reporting.',
    caseStudy: {
      problem:
        "Federal users could be in the same reporting workflow at the same time. Without a safeguard, one user's changes could silently overwrite another user's data, and expired sessions made it harder to tell who was actually active.",
      decision:
        'I designed and implemented real-time presence tracking using session records with configurable timeout behavior. Users could see when another session was active without locking the workflow or forcing the system to assume only one person could edit at a time.',
      outcome:
        "Concurrent users in FEMA preparedness assessments now get a warning before potentially overwriting each other's data, while the workflow stays flexible for program staff.",
    },
    tags: ['Java', 'Spring Boot', '.NET', 'Svelte', 'React', 'TypeScript', 'AWS', 'MySQL'],
  },
  {
    category: '4 Arrows Consulting · Federal Systems',
    title: 'FEMA Unified Access Portal',
    description:
      'FEMA partners used several separate platforms with no single entry point. I designed and built a Svelte dashboard that unified access across PrepToolkit, URT, RIS, and OneResponder as part of a TypeScript monorepo of AWS serverless applications.',
    caseStudy: {
      problem:
        'Each FEMA platform had its own login and navigation. Users needed to know which system to go to for which task, and there was no way to surface memberships or activity across platforms in one place.',
      decision:
        'I built a configurable card-based dashboard where each platform is a card the user can add, remove, and reorder. Cards pull live membership data from each provider API, check permissions before surfacing action links, and persist per-user configuration as serialized JSON so the schema never needs to change. Auth flows through Keycloak with silent SSO.',
      outcome:
        'Federal users across PrepToolkit, URT, RIS, and OneResponder have a single entry point with a personalized dashboard that reflects their actual memberships and access across systems.',
    },
    tags: ['TypeScript', 'Svelte', 'AWS Lambda', 'API Gateway', 'CloudFront', 'Keycloak'],
  },
];

function HighlightedWork(): React.JSX.Element {
  return (
    <section
      id="highlights"
      className="scroll-mt-20 border-y border-border bg-bg-secondary px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl tracking-tight text-text-primary sm:text-4xl">
            Highlighted Work
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            Two examples from my work on FEMA preparedness platforms where I owned the problem end
            to end.
          </p>
        </div>

        <div className="space-y-8">
          {workItems.map((item) => (
            <article
              key={item.title}
              className="rounded-lg border border-border bg-(--color-bg-primary) p-6 sm:p-8"
            >
              <p className="text-sm font-medium text-accent">{item.category}</p>
              <h3 className="mt-2 text-2xl tracking-tight text-text-primary">{item.title}</h3>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-text-muted sm:text-base">
                {item.description}
              </p>

              <dl className="mt-7 grid gap-6 border-t border-border pt-7 md:grid-cols-3">
                <div>
                  <dt className="text-sm font-medium text-text-primary">Problem</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.problem}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-text-primary">Decision</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.decision}
                  </dd>
                </div>
                <div>
                  <dt className="text-sm font-medium text-text-primary">Outcome</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.outcome}
                  </dd>
                </div>
              </dl>

              <div className="mt-7 flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-bg-secondary px-2.5 py-1 text-xs text-text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightedWork;
