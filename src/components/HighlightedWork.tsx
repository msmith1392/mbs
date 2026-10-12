import React from 'react';
import { ChevronRight } from 'lucide-react';

interface WorkItem {
  title: string;
  summary: string;
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
    title: 'Concurrent Editing Safety in FEMA Assessments',
    summary:
      'Warns FEMA partners when someone else is editing the same assessment, without locking anyone out.',
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
    title: 'Reusable FEMA Exercise Templates',
    summary:
      'Lets exercise planners start from an approved template instead of rebuilding a complex exercise by hand.',
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
    title: 'FEMA Platform Access Management',
    summary:
      "Gives administrators a real view of each user's access across FEMA platforms, with pending requests and bulk membership changes.",
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
    <section id="highlights" className="scroll-mt-20 border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-lg text-text-primary">Highlights</h2>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          Features I owned end to end on FEMA preparedness platforms at 4 Arrows Consulting.
        </p>

        <div className="mt-6">
          {workItems.map((item) => (
            <article key={item.title} className="border-t border-border py-8 first:border-t-0">
              <h3 className="text-base text-text-primary">{item.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-text-muted">{item.summary}</p>
              <p className="mt-3 font-mono text-xs leading-relaxed text-text-subtle">
                {item.tags.join(' · ')}
              </p>

              <details className="group mt-4">
                <summary className="inline-flex cursor-pointer list-none items-center gap-1 rounded-sm text-sm text-accent transition-colors hover:text-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent [&::-webkit-details-marker]:hidden">
                  <ChevronRight
                    size={16}
                    aria-hidden="true"
                    className="transition-transform group-open:rotate-90 motion-reduce:transition-none"
                  />
                  How I built it
                </summary>

                <div className="mt-5 space-y-5 border-l border-border-emphasis pl-5">
                  <p className="text-sm leading-relaxed text-text-muted">{item.description}</p>
                  <dl className="space-y-5">
                    <div>
                      <dt className="font-mono text-xs text-text-primary">Problem</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                        {item.caseStudy.problem}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs text-text-primary">Decision</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                        {item.caseStudy.decision}
                      </dd>
                    </div>
                    <div>
                      <dt className="font-mono text-xs text-text-primary">Outcome</dt>
                      <dd className="mt-2 text-sm leading-relaxed text-text-muted">
                        {item.caseStudy.outcome}
                      </dd>
                    </div>
                  </dl>
                </div>
              </details>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HighlightedWork;
