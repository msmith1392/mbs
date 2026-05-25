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
  link: string | null;
  linkLabel: string | null;
}

function HighlightedWork(): React.JSX.Element {
  function handleExperienceLinkClick(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
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
      link: null,
      linkLabel: null,
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
      link: null,
      linkLabel: null,
    },
  ];

  return (
    <section
      id="highlights"
      className="scroll-mt-20 border-y border-border bg-bg-secondary px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl text-text-primary">Highlighted Work</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            Two examples from my work on FEMA preparedness platforms where I owned the problem end
            to end.
          </p>
        </div>

        {workItems.map((item) => (
          <div key={item.title} className="border-t border-border py-10">
            <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">
              {item.category}
            </p>
            <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <h3 className="text-2xl text-text-primary">{item.title}</h3>
              {item.link && item.linkLabel && (
                <a
                  href={item.link}
                  onClick={item.link === '#experience' ? handleExperienceLinkClick : undefined}
                  className="hidden shrink-0 text-sm text-text-subtle transition-colors hover:text-accent sm:block sm:text-right"
                >
                  {item.linkLabel}
                </a>
              )}
            </div>
            <p className="mb-6 text-base leading-relaxed text-text-muted">{item.description}</p>

            <div className="mb-6">
              <div className="grid gap-6 md:grid-cols-3">
                <div className="border-t border-border pt-4">
                  <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">Problem</p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.problem}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">
                    Decision
                  </p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.decision}
                  </p>
                </div>
                <div className="border-t border-border pt-4">
                  <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">Outcome</p>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {item.caseStudy.outcome}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm px-2.5 py-0.5 text-xs text-text-muted ring-1 ring-border-emphasis"
                >
                  {tag}
                </span>
              ))}
            </div>
            {item.link && item.linkLabel && (
              <a
                href={item.link}
                onClick={item.link === '#experience' ? handleExperienceLinkClick : undefined}
                className="mt-6 inline-block text-sm text-text-subtle transition-colors hover:text-accent sm:hidden"
              >
                {item.linkLabel}
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default HighlightedWork;
