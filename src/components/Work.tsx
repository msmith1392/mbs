import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { FEDERAL_START } from '../data/constants';

type WorkStatus = 'live' | 'in-development' | 'demo';

interface SupportingWorkItem {
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  linkLabel: string | null;
  status: WorkStatus;
}

interface FeaturedWorkItem {
  category: string;
  title: string;
  description: string;
  caseStudy: {
    title: string;
    summary: string;
    problem: string;
    decision: string;
    outcome: string;
  };
  tags: string[];
  link: string;
  linkLabel: string;
}

function Work(): React.JSX.Element {
  const federalYears: number = useYearsOfExperience(FEDERAL_START);

  const featuredWork: FeaturedWorkItem = {
    category: 'Federal Systems',
    title: 'FEMA Preparedness Platforms',
    description: `PrepToolkit is a FEMA preparedness platform used by emergency management partners to plan exercises, complete assessments, and support National Preparedness System reporting. I have spent ${federalYears} years working on PrepToolkit and the Unified Reporting Tool (URT), where grantees complete THIRA/SPR assessments that inform preparedness reporting.`,
    caseStudy: {
      title: 'Closer look',
      summary: 'One representative example from URT.',
      problem:
        "Multiple federal users could be active in the same reporting workflow simultaneously. Stale sessions could not be trusted, and there was no mechanism to prevent concurrent users from overwriting each other's reporting data.",
      decision:
        'Implemented real-time presence tracking using distributed session logic with polling and timeout behavior, rather than locking records or assuming a single active editor. This kept the workflow understandable for program staff while reducing overwrite risk.',
      outcome:
        'Reduced accidental overwrite risk for concurrent federal users in a national preparedness reporting system where data accuracy had compliance implications.',
    },
    tags: ['Java', 'Spring Boot', '.NET', 'Svelte', 'React', 'TypeScript', 'AWS', 'MySQL'],
    link: '#experience',
    linkLabel: 'See full experience below',
  };

  const supportingWork: SupportingWorkItem[] = [
    {
      category: 'Local Client',
      title: 'Sprout and Learn',
      description:
        'Multi-page site for a pediatric ABA, occupational, and speech-language therapy clinic in Radcliff, KY. Built to give a new clinic clear service pages, a simple contact path, and a maintainable Cloudflare deployment without adding unnecessary operational overhead.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Cloudflare Pages'],
      link: 'https://sproutky-demo.matthewbsmith.com',
      linkLabel: 'View demo',
      status: 'in-development',
    },
    {
      category: 'Personal Project',
      title: 'RAG Document Q&A',
      description:
        'Offline document Q&A prototype for evaluating private document search workflows. Used local embeddings, FAISS vector search, and a local Mistral model so source documents could stay out of hosted AI services while testing where retrieval helped and where human review still mattered.',
      tags: ['Python', 'LangChain', 'FAISS', 'Mistral 7B'],
      link: 'https://github.com/msmith1392/rag-demo',
      linkLabel: 'View on GitHub',
      status: 'demo',
    },
  ];

  return (
    <section id="work" className="scroll-mt-20 bg-(--color-bg-primary) px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 max-w-2xl">
          <h2 className="mb-4 text-3xl text-text-primary">Highlighted Work</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            A closer look at my FEMA platform work and the production problems I had to reason
            through there.
          </p>
        </div>

        <div className="border-t border-border py-10">
          <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">
            {featuredWork.category}
          </p>
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-2xl text-text-primary">{featuredWork.title}</h3>
            {featuredWork.link && featuredWork.linkLabel && (
              <a
                href={featuredWork.link}
                className="shrink-0 text-sm text-text-subtle transition-colors hover:text-accent sm:text-right"
              >
                {featuredWork.linkLabel}
              </a>
            )}
          </div>
          <p className="mb-6 max-w-3xl text-base leading-relaxed text-text-muted">
            {featuredWork.description}
          </p>

          <div className="mb-6">
            <div className="mb-5 max-w-2xl">
              <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">
                {featuredWork.caseStudy.title}
              </p>
              <p className="text-sm leading-relaxed text-text-muted">
                {featuredWork.caseStudy.summary}
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="border-t border-border pt-4">
                <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">Problem</p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {featuredWork.caseStudy.problem}
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">Decision</p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {featuredWork.caseStudy.decision}
                </p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">Outcome</p>
                <p className="text-sm leading-relaxed text-text-muted">
                  {featuredWork.caseStudy.outcome}
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {featuredWork.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-sm px-2.5 py-0.5 text-xs text-text-muted ring-1 ring-border-emphasis"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="pt-8">
          <h3 className="mb-2 text-2xl text-text-primary">Additional Work</h3>
          <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-muted">
            I also take on smaller projects, including local client work and private-document AI
            prototyping, when there is a clear problem to solve and a practical path to shipping it.
          </p>
          {supportingWork.map((item) => (
            <div
              key={item.title}
              className="border-t border-border py-10 sm:flex sm:items-start sm:justify-between sm:gap-12"
            >
              {/* Left column */}
              <div className="flex-1">
                <p className="mb-2 text-xs uppercase tracking-widest text-text-subtle">
                  {item.category}
                </p>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl text-text-primary">{item.title}</h3>
                  {item.status === 'in-development' && (
                    <span className="text-xs text-text-subtle">In development</span>
                  )}
                </div>
                <p className="mb-5 text-sm leading-relaxed text-text-muted">{item.description}</p>
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
              </div>

              {/* Right column — link */}
              {item.link && item.linkLabel && (
                <div className="mt-6 shrink-0 sm:mt-0 sm:text-right">
                  <a
                    href={item.link}
                    {...(item.link.startsWith('http')
                      ? { target: '_blank', rel: 'noopener noreferrer' }
                      : {})}
                    className="text-sm text-text-subtle transition-colors hover:text-accent"
                  >
                    {item.linkLabel}
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
