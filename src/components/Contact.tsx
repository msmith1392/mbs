import React from 'react';
import { Link } from 'react-router-dom';

function Contact(): React.JSX.Element {
  return (
    <section className="bg-dark px-6 py-24 text-center">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-4 text-3xl font-bold tracking-wide text-white">
          Ready to work together?
        </h2>
        <p className="mb-10 text-white/60">
          Tell me what you are building. I will follow up with the right questions.
        </p>
        <Link
          to="/contact"
          className="inline-block rounded bg-blue-lct-cta px-8 py-3 font-semibold text-white transition-colors hover:bg-blue-lct-cta-hover"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default Contact;
