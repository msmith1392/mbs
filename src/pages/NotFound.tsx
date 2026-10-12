import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): React.JSX.Element {
  return (
    <section className="flex min-h-[65vh] items-center px-6 py-20">
      <div className="mx-auto w-full max-w-2xl motion-safe:animate-enter">
        <p className="font-mono text-xs text-text-subtle">404</p>
        <h1 className="mt-3 text-2xl leading-snug tracking-tight text-text-primary sm:text-3xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-text-muted">
          The link may be broken or the page may have moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link
            to="/"
            className="rounded-md bg-cta px-4 py-2.5 text-sm font-medium text-text-on-cta transition-colors hover:bg-cta-hover"
          >
            Go home
          </Link>
          <Link
            to="/#contact"
            className="text-sm font-medium text-text-muted transition-colors hover:text-accent"
          >
            Contact options
          </Link>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
