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
      'Designed and built the Svelte frontend for a TypeScript monorepo of AWS serverless applications serving as a unified access portal for FEMA platforms including PrepToolkit, RTLT, RIS, and OneResponder.',
      'Automated enterprise reporting with Docmosis and Apache POI, cutting processing time ' +
        'from hours to minutes for national emergency preparedness programs.',
      'Delivered full-stack features across Spring Boot and .NET backends, MySQL, and Svelte frontends within the FEMA preparedness platform suite.',
      'Translated FEMA program requirements (THIRA/SPR, CPG, NIMS, UAWG) into technical solutions, coordinating with project leads to meet federal compliance and security standards.',
    ],
    techStack: [
      'Java',
      'Spring Boot',
      'C#',
      '.NET',
      'Svelte',
      'TypeScript',
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
    <section id="experience" className="scroll-mt-20 bg-(--color-bg-primary) px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-12 text-3xl text-text-primary">Engineering Experience</h2>
        <div>
          {roles.map((role) => (
            <div key={`${role.company}-${role.startDate}`} className="border-t border-border py-10">
              {/* Top line: title + date range */}
              <div className="mb-1 flex flex-col gap-0.5 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="text-xl text-text-primary">{role.jobTitle}</h3>
                <span className="shrink-0 text-sm text-text-subtle">
                  {role.startDate} &ndash; {role.endDate}
                </span>
              </div>
              {/* Second line: company + location */}
              <div className="mb-5 flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
                <span className="text-sm text-accent">{role.company}</span>
                <span className="text-sm text-text-subtle">{role.location}</span>
              </div>
              {/* Bullets */}
              <ul className="mb-5 space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex gap-3 text-sm leading-relaxed text-text-muted"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
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
                    className="rounded-sm px-2.5 py-0.5 text-xs text-text-muted ring-1 ring-border-emphasis"
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
