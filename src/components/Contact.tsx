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
    <section id="contact" className="scroll-mt-24 border-t border-border px-6 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <p className="mb-6 font-mono text-xs text-text-subtle lg:mb-0">Contact</p>
        <div>
          <h2 className="text-3xl tracking-tight text-text-primary sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            If my background seems relevant to what you are building or hiring for, LinkedIn is the
            best place to start. My resume and public code are available here too.
          </p>

          <div className="mt-10 overflow-hidden rounded-lg border border-border md:grid md:grid-cols-3">
            {contactOptions.map((option, index) => (
              <a
                key={option.title}
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-start p-6 text-left transition-colors hover:bg-bg-secondary focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${index > 0 ? 'border-t border-border md:border-t-0 md:border-l' : ''}`}
              >
                <span className="font-mono text-xs text-accent">{option.label}</span>
                <span className="mt-2 font-medium text-text-primary">{option.title}</span>
                <span className="mt-2 text-sm leading-relaxed text-text-muted">
                  {option.description}
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
