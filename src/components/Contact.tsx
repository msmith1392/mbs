import React from 'react';

function Contact(): React.JSX.Element {
  return (
    <section id="contact" className="scroll-mt-20 bg-dark px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">Get in Touch</h2>
        <p className="mb-8 text-white/60">
          If you are weighing whether a contractor makes sense for your situation, that conversation
          costs nothing. Describe what you are working on and I will follow up.{' '}
          <a
            href="mailto:matt@matthewbsmith.com"
            className="text-blue-lct underline underline-offset-2 transition-colors hover:text-blue-400"
          >
            matt@matthewbsmith.com
          </a>
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="mailto:matt@matthewbsmith.com"
            className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
          >
            Send an Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded border-2 border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:border-white"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
