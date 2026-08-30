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
      'Built real-time presence tracking for the Unified Reporting Tool (URT), using session records, polling, and configurable timeout behavior to reduce accidental overwrite risk across concurrent federal users.',
      'Delivered a reusable PrepToolkit calendar portlet configurable for HSEEP or REP, with day, month, year, and 8-year views, filtered event APIs, and PDF export.',
      'Owned a searchable HSEEP exercise-template library and copy workflow, including permission-aware cross-domain access, selective copying of modules and simulation data, and Playwright coverage for creation and compatibility rules.',
      'Built Svelte access-management UI and TypeScript Lambda APIs in a serverless monorepo, covering user-admin workflows for pending requests, current access, activity history, and bulk site-membership changes.',
      'Modernized ten FEMA report and data-extract workflows using MySQL JSON functions and Docmosis templates, including current and legacy routing for changing annual assessment requirements.',
      'Delivered full-stack features that translated FEMA program requirements (THIRA/SPR, CPG, NIMS, UAWG) into technical solutions in coordination with project leads to meet federal compliance and security standards.',
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
      'Engineered backend logic and UI features for real-time transportation visibility systems in a 24/7 high-throughput production environment.',
      'Translated business requirements into discrete rules for the Drools inference engine (BRMS), decoupling policy from application code and reducing manual intervention.',
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
      'Built reusable backend components and modular UI features across multiple client projects, helping teams ship without rebuilding the same foundations.',
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
        'standards (X12, EDIFACT, XML, JSON) for seamless data exchange across the EDITRACE platform.',
      'Built real-time monitoring dashboards providing immediate visibility into automated EDI ' +
        'data pipelines, reducing troubleshooting time for critical processes.',
    ],
    techStack: ['Python', 'EDI (X12/EDIFACT)', 'XML', 'JSON'],
  },
];

function Experience(): React.JSX.Element {
  return (
    <section id="experience" className="scroll-mt-24 border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <p className="mb-6 font-mono text-xs text-text-subtle lg:mb-0">Experience</p>
        <div>
          <h2 className="text-3xl tracking-tight text-text-primary sm:text-4xl">
            Engineering Experience
          </h2>

          <div className="mt-10">
            {roles.map((role) => (
              <article
                key={`${role.company}-${role.startDate}`}
                className="border-t border-border py-9"
              >
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                  <h3 className="text-xl text-text-primary">{role.jobTitle}</h3>
                  <p className="shrink-0 font-mono text-xs text-text-subtle">
                    {role.startDate} to {role.endDate}
                  </p>
                </div>
                <div className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-sm">
                  <span className="text-accent">{role.company}</span>
                  <span className="text-text-subtle">{role.location}</span>
                </div>

                <ul className="mt-6 max-w-3xl space-y-3">
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
                  <span className="text-text-muted">Technologies:</span> {role.techStack.join(', ')}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
