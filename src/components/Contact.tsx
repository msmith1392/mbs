import React from 'react';

type ContactOption = {
  label: string;
  title: string;
  description: string;
  href: string;
};

const contactOptions: ContactOption[] = [
  {
    label: 'LinkedIn',
    title: 'Connect on LinkedIn',
    description: 'Best place for recruiter messages, role context, and quick introductions.',
    href: 'https://www.linkedin.com/in/matthew-smith-22310b111/',
  },
  {
    label: 'Resume',
    title: 'Download my resume',
    description: 'Includes my current contact details, background, and recent project history.',
    href: '/MatthewSmithResume.pdf',
  },
  {
    label: 'GitHub',
    title: 'Review my GitHub',
    description: 'A quick way to see how I structure projects and think through implementation.',
    href: 'https://github.com/msmith1392',
  },
];

function Contact(): React.JSX.Element {
  return (
    <section
      id="contact"
      className="scroll-mt-20 border-t border-border bg-bg-secondary px-6 py-16"
    >
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
          <div>
            <h2 className="text-3xl tracking-tight text-text-primary sm:text-4xl">Get In Touch</h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
              If my background seems relevant to what you are building or hiring for, LinkedIn is
              the best place to start. My resume and public code are available here too.
            </p>
          </div>

          <div className="overflow-hidden rounded-lg border border-border bg-(--color-bg-primary)">
            {contactOptions.map((option, index) => (
              <a
                key={option.title}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start justify-between gap-5 p-5 transition-colors hover:bg-bg-secondary ${index > 0 ? 'border-t border-border' : ''}`}
              >
                <span>
                  <span className="block text-xs font-medium text-accent">{option.label}</span>
                  <span className="mt-1 block font-medium text-text-primary">{option.title}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-text-muted">
                    {option.description}
                  </span>
                </span>
                <span
                  className="mt-1 text-text-subtle transition-colors group-hover:text-accent"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
