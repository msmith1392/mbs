import React from 'react';

type SkillCategory = {
  id: string;
  label: string;
  tags: string[];
};

const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    label: 'Languages',
    tags: ['Java', 'TypeScript', 'JavaScript', 'Python', 'C#', 'SQL'],
  },
  {
    id: 'frameworks',
    label: 'Frameworks & Libraries',
    tags: ['Spring Boot', '.NET', 'React', 'Svelte', 'Angular', 'Django', 'Node.js'],
  },
  {
    id: 'cloud',
    label: 'Cloud & Infrastructure',
    tags: [
      'AWS Lambda',
      'API Gateway',
      'CloudFront',
      'S3',
      'DynamoDB',
      'Cloudflare Workers',
      'Docker',
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    tags: ['MySQL', 'PostgreSQL', 'SQL Server'],
  },
  {
    id: 'devops',
    label: 'DevOps & Tools',
    tags: ['Git', 'Gradle', 'Maven', 'npm', 'Podman'],
  },
];

function TechStack(): React.JSX.Element {
  return (
    <section id="skills" className="scroll-mt-20 bg-dark-light px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-center text-3xl font-bold tracking-wide text-white">
          Technical Skills
        </h2>
        <div className="divide-y divide-white/10 overflow-hidden rounded-xl border border-white/10">
          {skillCategories.map((category) => (
            <div key={category.id} className="bg-dark px-6 py-5">
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-fg-muted">
                {category.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full px-3 py-1 text-sm text-white/70 ring-1 ring-white/10"
                  >
                    {tag}
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

export default TechStack;
