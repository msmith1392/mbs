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
    title: 'Concurrent Editing Safety in FEMA Assessments',
    description:
      "PrepToolkit's Unified Reporting Tool supports FEMA partners completing high-stakes preparedness assessments across several national programs.",
    caseStudy: {
      problem:
        'Multiple users could work in the same jurisdiction and assessment without knowing another editor was active, creating a risk of overlapping changes. Inactivity and navigation between jurisdictions could also leave presence warnings out of sync.',
      decision:
        'I owned this feature end to end, implementing database-backed presence tracking across persistence, Spring services, REST APIs, and the client application. The design detects other active editors without locking the workflow, expires inactive sessions, and cleans up presence as users navigate between jurisdictions. I later hardened the client lifecycle so detached views and late network responses could not republish stale state.',
      outcome:
        'Users now receive stable warnings when someone else is active in the same assessment, helping them avoid conflicting changes while preserving the flexible workflow program staff needed.',
    },
    tags: ['Java', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'MySQL'],
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
      className="scroll-mt-20 border-y border-border bg-bg-secondary px-6 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mx-auto mb-4 max-w-2xl text-center">
          <h2 className="text-3xl tracking-tight text-text-primary sm:text-4xl">
            Highlighted Work
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-text-muted sm:text-base">
            Two examples from my work on FEMA preparedness platforms where I owned the problem end
            to end.
          </p>
        </div>

        <div>
          {workItems.map((item) => (
            <article
              key={item.title}
              className="border-t border-border-emphasis py-12 first:mt-10 sm:py-14"
            >
              <p className="text-center text-sm font-medium text-accent">{item.category}</p>
              <h3 className="mt-2 text-center text-2xl tracking-tight text-text-primary sm:text-3xl">
                {item.title}
              </h3>
              <p className="mx-auto mt-4 max-w-4xl text-center text-base leading-relaxed text-text-muted">
                {item.description}
              </p>

              <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
                <dl className="border-t-2 border-border-emphasis pt-5">
                  <dt className="text-sm font-medium text-text-primary">Problem</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.problem}
                  </dd>
                </dl>
                <dl className="border-t-2 border-border-emphasis pt-5">
                  <dt className="text-sm font-medium text-text-primary">Decision</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.decision}
                  </dd>
                </dl>
                <dl className="border-t-2 border-border-emphasis pt-5">
                  <dt className="text-sm font-medium text-text-primary">Outcome</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.outcome}
                  </dd>
                </dl>
              </div>

              <p className="mt-9 text-xs leading-relaxed text-text-subtle">
                <span className="font-medium text-text-muted">Technologies:</span>{' '}
                {item.tags.join(', ')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightedWork;
