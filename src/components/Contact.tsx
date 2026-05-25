import React from 'react';

function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="scroll-mt-20 bg-(--color-bg-primary) px-6 py-12">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-4 text-3xl font-normal text-text-primary">Get In Touch</h2>
        <p className="text-text-muted">
          If my background seems relevant to what you are building or hiring for, send me an email:{' '}
          <a
            href="mailto:matt@matthewbsmith.com"
            className="text-accent underline underline-offset-2 transition-colors hover:text-accent-hover"
          >
            matt@matthewbsmith.com
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;
