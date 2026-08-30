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
    title: 'Reusable FEMA Exercise Templates',
    description:
      "PrepToolkit's HSEEP module helps FEMA partners plan and conduct preparedness exercises. I built a template library so planners could start from an approved exercise instead of reconstructing the full setup by hand.",
    caseStudy: {
      problem:
        'Exercise planners needed to create complex exercises repeatedly, but rebuilding objectives, modules, simulation events, venues, phonebooks, and related configuration by hand was time-consuming and risked inconsistent setups.',
      decision:
        'I owned the template and copy workflow across the application stack. I introduced a searchable library of approved exercise templates, implemented permission-aware cross-domain access, and extended the copy service to selectively duplicate interconnected exercise data while remapping relationships and shifting schedule dates. I added Playwright coverage for template creation, module and simulation-data options, and exercise-type compatibility rules.',
      outcome:
        'Exercise planners can now begin with an approved template or reuse an existing exercise while preserving the selected planning and simulation structure, providing a faster and more consistent starting point.',
    },
    tags: [
      'Java',
      'Spring Boot',
      'REST APIs',
      'JPA/Hibernate',
      'MySQL',
      'TypeScript',
      'Playwright',
    ],
  },
  {
    category: '4 Arrows Consulting · Federal Systems',
    title: 'Reusable FEMA Exercise Calendar',
    description:
      'PrepToolkit needed one calendar that HSEEP and REP teams could configure and reuse instead of maintaining a separate implementation for each division.',
    caseStudy: {
      problem:
        'HSEEP and REP staff needed shared views of exercises, milestones, and events, but each division had its own calendar path. Planners could not drop one calendar onto a page and configure it for their program.',
      decision:
        'I owned the calendar end to end across persistence, Spring services, REST APIs, authorization, the client, and Liferay portlet configuration. One portlet can be set to HSEEP or REP, with day, month, year, and 8-year views, filters that stay applied when switching views, generic events, exercise creation from a selected date, region coloring, and PDF export of the active filtered view.',
      outcome:
        'Program staff can place one calendar, configure it for their division, and work from a shared filtered view of exercises and events instead of maintaining separate calendar implementations.',
    },
    tags: ['Java', 'Spring Boot', 'REST APIs', 'JPA/Hibernate', 'MySQL', 'Liferay'],
  },
  {
    category: '4 Arrows Consulting · Federal Systems',
    title: 'FEMA Platform Access Management',
    description:
      'A TypeScript monorepo of AWS serverless applications supports FEMA platforms including PrepToolkit, URT, RTLT, RIS, and OneResponder. I built the Svelte access-management UI and membership APIs that administrators use to inspect and change user access.',
    caseStudy: {
      problem:
        "Administrators needed a working view of a user's access, pending module and group requests, and activity, plus a way to clear or assign site memberships in bulk. Early screens still used mock data, so that workflow was not ready for production use.",
      decision:
        'I implemented the access-management UI in Svelte and wired it to TypeScript repositories and Lambda APIs. The user-admin view covers profile, current access, pending requests, activity history, and editing of module and group requests. I also built bulk clear-and-assign membership updates across the Svelte form, Lambda handlers, and a Java Liferay resource.',
      outcome:
        "Access administrators can review a user's real access and request state, act on pending requests, and update site memberships in bulk from the access-management UI.",
    },
    tags: ['TypeScript', 'Svelte', 'AWS Lambda', 'API Gateway', 'Java'],
  },
];

function HighlightedWork(): React.JSX.Element {
  return (
    <section id="highlights" className="scroll-mt-24 border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <p className="mb-6 font-mono text-xs text-text-subtle lg:mb-0">Highlights</p>
        <div>
          <h2 className="text-3xl tracking-tight text-text-primary sm:text-4xl">
            Highlighted Work
          </h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            Selected examples from my work on FEMA preparedness platforms where I owned the problem
            end to end.
          </p>

          <div className="mt-4">
            {workItems.map((item) => (
              <article
                key={item.title}
                className="border-t border-border py-12 first:mt-10 sm:py-14"
              >
                <p className="font-mono text-xs text-accent">{item.category}</p>
                <h3 className="mt-3 text-2xl tracking-tight text-text-primary sm:text-3xl">
                  {item.title}
                </h3>
                <p className="mt-4 max-w-3xl text-base leading-relaxed text-text-muted">
                  {item.description}
                </p>

                <div className="mt-10 grid gap-8 lg:grid-cols-3 lg:gap-10">
                  <dl className="border-t border-border-emphasis pt-5">
                    <dt className="font-mono text-xs text-text-primary">Problem</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-text-muted">
                      {item.caseStudy.problem}
                    </dd>
                  </dl>
                  <dl className="border-t border-border-emphasis pt-5">
                    <dt className="font-mono text-xs text-text-primary">Decision</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-text-muted">
                      {item.caseStudy.decision}
                    </dd>
                  </dl>
                  <dl className="border-t border-border-emphasis pt-5">
                    <dt className="font-mono text-xs text-text-primary">Outcome</dt>
                    <dd className="mt-3 text-sm leading-relaxed text-text-muted">
                      {item.caseStudy.outcome}
                    </dd>
                  </dl>
                </div>

                <p className="mt-9 font-mono text-xs leading-relaxed text-text-subtle">
                  <span className="text-text-muted">Technologies:</span> {item.tags.join(', ')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HighlightedWork;
