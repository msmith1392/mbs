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
      'Delivered a reusable PrepToolkit calendar portlet configurable for HSEEP or REP, with day, month, year, and 8-year views, filtered event APIs, and PDF export.',
      'Modernized ten FEMA report and data-extract workflows using MySQL JSON functions and Docmosis templates, including current and legacy routing for changing annual assessment requirements.',
      'Turned changing FEMA program requirements (THIRA/SPR, CPG, NIMS, UAWG) into full-stack features each assessment year, working with the product manager on scope.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'C#',
      '.NET',
      'Svelte',
      'TypeScript',
      'Playwright',
      'React',
      'AWS Lambda',
      'Node.js',
      'MySQL',
      'Docmosis',
    ],
  },
  {
    jobTitle: 'Applications Developer',
    company: 'United Parcel Service (UPS)',
    location: 'Louisville, KY',
    startDate: 'March 2017',
    endDate: 'March 2019',
    bullets: [
      'Translated business requirements into discrete rules for the Drools inference engine (BRMS), decoupling policy from application code and reducing manual intervention.',
      'Found and fixed latency bottlenecks under peak traffic in 24/7 real-time transportation visibility systems, using JMeter for performance analysis.',
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
      'Translated stakeholder requirements into production REST APIs for clients including Presbyterian Church USA and the University of Kentucky.',
      'Implemented server-side validation, authentication, and RBAC for sensitive event registration and CMS workflows.',
    ],
    techStack: ['Python', 'Django', 'JavaScript', 'PostgreSQL', 'PHP', 'Drupal', 'AWS'],
  },
  {
    jobTitle: 'Programming Analyst',
    company: 'Knowledge Facilitations Group (KFG)',
    location: 'Richmond, KY',
    startDate: 'March 2015',
    endDate: 'March 2016',
    bullets: [
      'Developed Python-based transformation engines to validate and map disparate industry ' +
        'standards (X12, EDIFACT, XML, JSON) for data exchange across the EDITRACE platform.',
      'Built real-time monitoring dashboards providing immediate visibility into automated EDI ' +
        'data pipelines, reducing troubleshooting time for critical processes.',
    ],
    techStack: ['Python', 'EDI (X12/EDIFACT)', 'XML', 'JSON'],
  },
];

function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="scroll-mt-20 border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-lg text-text-primary">Experience</h2>

        <div className="mt-6">
          {roles.map((role) => (
            <article
              key={`${role.company}-${role.startDate}`}
              className="border-t border-border py-8 first:border-t-0"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h3 className="text-base text-text-primary">{role.jobTitle}</h3>
                <p className="shrink-0 font-mono text-xs text-text-subtle">
                  {role.startDate} to {role.endDate}
                </p>
              </div>
              <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                <span className="text-accent">{role.company}</span>
                <span className="text-text-subtle">{role.location}</span>
              </div>

              <ul className="mt-5 space-y-3">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span
                      className="mt-2 h-1 w-1 shrink-0 rounded-full bg-border-emphasis"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>

              <p className="mt-6 font-mono text-xs leading-relaxed text-text-subtle">
                {role.techStack.join(' · ')}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
