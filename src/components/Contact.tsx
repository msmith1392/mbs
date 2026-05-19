import React from 'react';

function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="scroll-mt-20 bg-[var(--color-bg-primary)] px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-normal text-[var(--color-text-primary)]">Get in Touch</h2>
        <p className="text-[var(--color-text-muted)]">
          Have a project or role you think I would be a good fit for? Let&#39;s get in touch:{' '}
          <a
            href="mailto:matt@matthewbsmith.com"
            className="text-[var(--color-accent)] underline underline-offset-2 transition-colors hover:text-[var(--color-accent-hover)]"
          >
            matt@matthewbsmith.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
