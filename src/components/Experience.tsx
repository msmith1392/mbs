import React from 'react';

type Role = {
  jobTitle: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  bullets: string[];
  techStack: string[];
};

const roles: Role[] = [
  {
    jobTitle: 'Senior Software Engineer',
    company: '4 Arrows Consulting, Inc.',
    location: 'Remote / Somerset, KY',
    startDate: 'March 2019',
    endDate: 'Present',
    bullets: [
      'Designed and built the Svelte frontend for a TypeScript monorepo of AWS serverless ' +
        'applications serving as a unified access portal for FEMA platforms including PrepToolkit, ' +
        'RTLT, RIS, and OneResponder.',
      'Built real-time presence tracking for the Unified Reporting Tool, including distributed session ' +
        'logic and polling timeouts to keep data consistent across concurrent federal users.',
      'Automated enterprise reporting with Docmosis and Apache POI, cutting processing time ' +
        'from hours to minutes for national emergency preparedness programs.',
      'Delivered features across Spring Boot and .NET backends, MySQL, and Svelte frontends ' +
        'within the FEMA preparedness platform suite.',
      'Translated FEMA program requirements (THIRA/SPR, CPG, NIMS, UAWG) into technical ' +
        'solutions, coordinating with project leads to meet federal compliance and security standards.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'Svelte',
      'TypeScript',
      'AWS Lambda',
      'API Gateway',
      'CloudFront',
      'Docker',
      'Git',
      'MySQL',
    ],
  },
  {
    jobTitle: 'Applications Developer',
    company: 'United Parcel Service (UPS)',
    location: 'Louisville, KY',
    startDate: 'March 2017',
    endDate: 'March 2019',
    bullets: [
      'Engineered backend logic and UI features for real-time transportation visibility systems ' +
        'operating in a 24/7 high-throughput production environment.',
      'Architected complex decision flows using the Drools inference engine (BRMS), decoupling ' +
        'business policy from application code and reducing manual intervention.',
      'Identified and resolved critical latency bottlenecks under peak traffic through targeted ' +
        'performance analysis with JMeter.',
    ],
    techStack: ['Java', 'Spring Framework', 'Drools', 'JMeter', 'SQL Server'],
  },
  {
    jobTitle: 'Software Developer',
    company: 'Apax Software',
    location: 'Lexington, KY',
    startDate: 'March 2016',
    endDate: 'March 2017',
    bullets: [
      'Built reusable backend components and modular UI features across multiple client projects, ' +
        'accelerating release cycles and enabling scalable feature expansion.',
      'Translated stakeholder requirements directly into production-ready RESTful APIs for ' +
        'clients including Presbyterian Church USA and the University of Kentucky.',
      'Implemented server-side validation, authentication, and RBAC for sensitive event ' +
        'registration and CMS workflows.',
    ],
    techStack: ['Python', 'Django', 'JavaScript', 'PostgreSQL', 'AWS', 'Git'],
  },
  {
    jobTitle: 'Programming Analyst',
    company: 'Knowledge Facilitations Group (KFG)',
    location: 'Richmond, KY',
    startDate: 'March 2015',
    endDate: 'March 2016',
    bullets: [
      'Developed Python-based transformation engines to validate and map disparate industry ' +
        'standards (X12, EDIFACT, XML, JSON) for seamless data exchange across the EDITRACE platform.',
      'Built real-time monitoring dashboards providing immediate visibility into automated EDI ' +
        'data pipelines, reducing troubleshooting time for critical processes.',
    ],
    techStack: ['Python', 'EDI (X12/EDIFACT)', 'Bootstrap', 'Git'],
  },
];

function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="scroll-mt-20 bg-[var(--color-bg-primary)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl text-[var(--color-text-primary)]">Experience</h2>
        <div>
          {roles.map((role) => (
            <div
              key={`${role.company}-${role.startDate}`}
              className="border-t border-[var(--color-border)] py-10"
            >
              {/* Top line: title + date range */}
              <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl text-[var(--color-text-primary)]">{role.jobTitle}</h3>
                <span className="shrink-0 text-sm text-[var(--color-text-subtle)]">
                  {role.startDate} &ndash; {role.endDate}
                </span>
              </div>
              {/* Second line: company + location */}
              <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <span className="text-sm text-[var(--color-accent)]">{role.company}</span>
                <span className="text-sm text-[var(--color-text-subtle)]">{role.location}</span>
              </div>
              {/* Bullets */}
              <ul className="mb-5 space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex gap-3 text-sm leading-relaxed text-[var(--color-text-muted)]"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              {/* Tech stack tags */}
              <div className="flex flex-wrap gap-2">
                {role.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-sm px-2.5 py-0.5 text-xs text-[var(--color-text-muted)] ring-1 ring-[var(--color-border-emphasis)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
