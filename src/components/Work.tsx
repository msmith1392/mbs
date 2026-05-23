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

  function handleExperienceLinkClick(e: React.MouseEvent<HTMLAnchorElement>): void {
    e.preventDefault();
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  }

  const featuredWork: FeaturedWorkItem = {
    category: 'Federal Systems',
    title: 'FEMA Preparedness Platforms',
    description: `PrepToolkit is a FEMA preparedness platform used by emergency management partners to plan exercises, complete assessments, and support National Preparedness System reporting. I have spent ${federalYears} years working on PrepToolkit and the Unified Reporting Tool (URT), where grantees complete THIRA/SPR assessments that inform preparedness reporting.`,
    caseStudy: {
      title: 'Closer look',
      summary: 'One representative example from URT.',
      problem:
        "Federal users could be in the same reporting workflow at the same time. Without a safeguard, one user's changes could silently overwrite another user's reporting data, and expired sessions made it harder to tell who was actually active.",
      decision:
        'I designed and implemented real-time presence tracking using session records with configurable timeout behavior. Users could see when another session was active without locking the workflow or forcing the system to assume only one person could edit at a time.',
      outcome:
        "Concurrent users in FEMA preparedness assessments now get a warning before potentially overwriting each other's data, while the workflow stays flexible for program staff.",
    },
    tags: ['Java', 'Spring Boot', '.NET', 'Svelte', 'React', 'TypeScript', 'AWS', 'MySQL'],
    link: '#experience',
    linkLabel: 'See full experience',
  };

  const supportingWork: SupportingWorkItem[] = [
    {
      category: 'Local Client',
      title: 'Sprout and Learn',
      description:
        'Sprout and Learn is a new pediatric ABA, occupational, and speech-language therapy clinic in Radcliff, KY. I built the site around the questions families are likely to have first: what services are offered, who the clinic helps, and how to get in touch without digging around.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Cloudflare Pages'],
      link: 'https://sproutky-demo.matthewbsmith.com',
      linkLabel: 'View demo',
      status: 'in-development',
    },
    {
      category: 'Personal Project',
      title: 'RAG Document Q&A',
      description:
        'I built this as a focused learning project while getting up to speed on local AI document workflows. It uses local embeddings, FAISS, and a local Mistral model to answer questions against private documents without sending the source material to a hosted AI service.',
      tags: ['Python', 'LangChain', 'FAISS', 'Mistral 7B'],
      link: 'https://github.com/msmith1392/rag-demo',
      linkLabel: 'View on GitHub',
      status: 'demo',
    },
  ];

  return (
    <section
      id="highlights"
      className="scroll-mt-20 border-y border-border bg-bg-secondary px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="mb-4 text-3xl text-text-primary">A Closer Look</h2>
          <p className="text-sm leading-relaxed text-text-muted">
            A closer look at a particular challenge from my 4 Arrows consulting work on FEMA
            preparedness platforms, where I designed and implemented a solution that needed product
            judgment, technical design, and long-term maintainability.
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
                onClick={handleExperienceLinkClick}
                className="hidden shrink-0 text-sm text-text-subtle transition-colors hover:text-accent sm:block sm:text-right"
              >
                {featuredWork.linkLabel}
              </a>
            )}
          </div>
          <p className="mb-6 text-base leading-relaxed text-text-muted">
            {featuredWork.description}
          </p>

          <div className="mb-6">
            <div className="mb-5">
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
          {featuredWork.link && featuredWork.linkLabel && (
            <a
              href={featuredWork.link}
              onClick={handleExperienceLinkClick}
              className="mt-6 inline-block text-sm text-text-subtle transition-colors hover:text-accent sm:hidden"
            >
              {featuredWork.linkLabel}
            </a>
          )}
        </div>

        <div className="mt-4 border-t border-border-emphasis pt-12">
          <h3 className="mb-6 text-2xl text-text-primary">Other Projects</h3>
          {supportingWork.map((item) => (
            <div
              key={item.title}
              className="relative border-t border-border py-10"
            >
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
              {item.link && item.linkLabel && (
                <a
                  href={item.link}
                  {...(item.link.startsWith('http')
                    ? { target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                  className="mt-6 inline-block text-sm text-text-subtle transition-colors hover:text-accent sm:absolute sm:right-0 sm:top-10 sm:mt-0"
                >
                  {item.linkLabel}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;
