import React from 'react';
import { projects, statusConfig } from '../data/projects';

function PortfolioPreview(): React.JSX.Element {
  const featured = projects.filter((p) => p.featured);

  return (
    <section id="portfolio" className="scroll-mt-20 bg-dark px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">What I Have Built</h2>
          <p className="mx-auto max-w-2xl text-pretty text-white/60">
            Here is a sample of what I have delivered.
          </p>
        </div>

        <div className="flex flex-col gap-10">
          {featured.map((project) => {
            const status = statusConfig[project.status];
            const url = project.liveUrl ?? project.demoUrl;

            return (
              <div
                key={project.name}
                className="flex flex-col overflow-hidden rounded-xl bg-dark-light shadow-md ring-1 ring-white/10 md:flex-row"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block shrink-0 overflow-hidden bg-dark md:w-2/5"
                  aria-label={`View ${project.name} ${project.status === 'demo' ? 'demo' : 'site'}`}
                >
                  <img
                    src={project.image}
                    alt={project.imageAlt}
                    className="w-full h-56 md:h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
                <div className="flex flex-col justify-center bg-dark-light p-6 md:w-3/5">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-semibold ${status.classes}`}
                    >
                      {status.label}
                    </span>
                    <span className="text-xs text-fg-muted font-medium">{project.industry}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{project.name}</h3>
                  <p className="text-sm text-blue-lct font-medium mb-3">{project.tagline}</p>
                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-white/60 md:line-clamp-none">
                    {project.description}
                  </p>
                  {url && (
                    <div className="flex items-center gap-4">
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-white border-2 border-white/30 px-4 py-2 rounded hover:border-white transition-colors"
                      >
                        {project.status === 'live' ? 'View Site' : 'View Demo'}
                        <span aria-hidden="true">→</span>
                      </a>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PortfolioPreview;
