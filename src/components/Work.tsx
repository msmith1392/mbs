import React from 'react';
import useYearsOfExperience from '../hooks/useYearsOfExperience';
import { FEDERAL_START } from '../data/constants';

type WorkStatus = 'live' | 'in-development' | 'demo';

interface WorkItem {
  category: string;
  title: string;
  description: string;
  tags: string[];
  link: string | null;
  linkLabel: string | null;
  status: WorkStatus;
}

function Work(): React.JSX.Element {
  const federalYears: number = useYearsOfExperience(FEDERAL_START);

  const works: WorkItem[] = [
    {
      category: 'Federal / Enterprise',
      title: 'FEMA Preparedness Platforms',
      description: `${federalYears} years embedded on PrepToolkit and the Unified Reporting Tool, national emergency management systems used across federal agencies. Java and Spring Boot backends, Svelte, React, and TypeScript frontends, AWS serverless infrastructure.`,
      tags: ['Java', 'Spring Boot', 'Svelte', 'React', 'TypeScript', 'AWS'],
      link: '#experience',
      linkLabel: 'See full experience below',
      status: 'live',
    },
    {
      category: 'Local Client',
      title: 'Sprout and Learn',
      description:
        'Multi-page site for a pediatric ABA, occupational, and speech-language therapy clinic in Radcliff, KY. Custom design system, service pages, contact form.',
      tags: ['React', 'TypeScript', 'Tailwind', 'Cloudflare Pages'],
      link: 'https://sproutky-demo.matthewbsmith.com',
      linkLabel: 'View demo',
      status: 'in-development',
    },
    {
      category: 'Personal Project',
      title: 'RAG Document Q&A',
      description:
        'Locally-running offline retrieval-augmented generation system for document Q&A. Sentence transformers for embeddings, FAISS for vector search, Mistral 7B.',
      tags: ['Python', 'LangChain', 'FAISS', 'Mistral 7B'],
      link: 'https://github.com/msmith1392/rag-demo',
      linkLabel: 'View on GitHub',
      status: 'demo',
    },
  ];

  return (
    <section id="work" className="scroll-mt-20 bg-[var(--color-bg-primary)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl text-[var(--color-text-primary)]">Work</h2>
        <div>
          {works.map((item) => (
            <div
              key={item.title}
              className="border-t border-[var(--color-border)] py-10 sm:flex sm:items-start sm:justify-between sm:gap-12"
            >
              {/* Left column */}
              <div className="flex-1">
                <p className="mb-2 text-xs uppercase tracking-widest text-[var(--color-text-subtle)]">
                  {item.category}
                </p>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl text-[var(--color-text-primary)]">{item.title}</h3>
                  {item.status === 'in-development' && (
                    <span className="text-xs text-[var(--color-text-subtle)]">In development</span>
                  )}
                </div>
                <p className="mb-5 max-w-xl text-sm leading-relaxed text-[var(--color-text-muted)]">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-sm px-2.5 py-0.5 text-xs text-[var(--color-text-muted)] ring-1 ring-[var(--color-border-emphasis)]"
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
                    className="text-sm text-[var(--color-text-subtle)] transition-colors hover:text-[var(--color-accent)]"
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
