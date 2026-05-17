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
      'Designed and delivered the Svelte frontend for a TypeScript monorepo of AWS serverless ' +
        'applications (Lambda, API Gateway, CloudFront) serving as a unified access portal for ' +
        'FEMA platforms including PrepToolkit, RTLT, RIS, and OneResponder.',
      'Implemented a real-time presence tracking system for the Unified Reporting Tool (URT), ' +
        'designing distributed session logic and polling timeouts to maintain data integrity for ' +
        'concurrent federal users.',
      'Automated enterprise reporting workflows using Docmosis and Apache POI, cutting ' +
        'processing time from hours to minutes for national emergency preparedness programs.',
      'Delivered complex features across backend (Spring Boot and .NET), database, and frontend ' +
        'layers within FEMA preparedness platforms, ensuring cohesive integration between APIs, ' +
        'data models, and user interfaces.',
      'Translated complex FEMA business requirements (THIRA/SPR, CPG, NIMS, UAWG) into scalable ' +
        'technical solutions, coordinating with project leads to ensure deliverables met federal ' +
        'compliance and security standards.',
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
    <section id="experience" className="scroll-mt-20 bg-dark px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-wide text-white">
          Experience
        </h2>
        <div className="flex flex-col gap-10">
          {roles.map((role) => (
            <div
              key={`${role.company}-${role.startDate}`}
              className="rounded-xl border-l-4 border-blue-lct bg-dark-light p-8"
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white">{role.jobTitle}</h3>
                  <p className="font-medium text-blue-lct">{role.company}</p>
                </div>
                <div className="shrink-0 text-sm text-fg-muted sm:text-right">
                  <p>
                    {role.startDate} &ndash; {role.endDate}
                  </p>
                  <p>{role.location}</p>
                </div>
              </div>
              <ul className="mb-5 space-y-2">
                {role.bullets.map((bullet) => (
                  <li
                    key={bullet.slice(0, 40)}
                    className="flex gap-3 text-sm leading-relaxed text-white/70"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-lct"
                      aria-hidden="true"
                    />
                    {bullet}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {role.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-dark px-2.5 py-0.5 text-xs font-medium text-white/60 ring-1 ring-white/10"
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
