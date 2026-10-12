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
    <section id="contact" className="scroll-mt-20 border-t border-border px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="text-lg text-text-primary">Contact</h2>
        <p className="mt-2 text-sm leading-relaxed text-text-muted">
          If my background fits what you are building or hiring for, LinkedIn is the best place to
          start. My resume and public code are here too.
        </p>

        <div className="mt-6">
          {contactOptions.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group -mx-3 flex items-start justify-between gap-6 rounded-md px-3 py-4 transition-colors hover:bg-bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <span>
                <span className="block text-base text-text-primary">{option.title}</span>
                <span className="mt-1 block text-sm leading-relaxed text-text-muted">
                  {option.description}
                </span>
              </span>
              <span className="shrink-0 pt-0.5 font-mono text-xs text-text-subtle transition-colors group-hover:text-accent">
                {option.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
