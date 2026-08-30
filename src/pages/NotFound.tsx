import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): React.JSX.Element {
  return (
    <section className="flex min-h-[65vh] items-center px-6 py-20">
      <div className="mx-auto w-full max-w-6xl lg:grid lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16">
        <p className="mb-6 font-mono text-xs text-text-subtle lg:mb-0">404</p>
        <div className="motion-safe:animate-enter">
          <h1 className="text-4xl tracking-tight text-text-primary sm:text-5xl lg:text-6xl">
            Page Not Found
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
            The link may be broken or the page may have moved.
          </p>
          <div className="mt-8 flex flex-wrap gap-5">
            <Link
              to="/"
              className="rounded-md bg-cta px-4 py-2.5 text-sm font-medium text-text-on-cta transition-colors hover:bg-cta-hover"
            >
              Go home
            </Link>
            <Link
              to="/#contact"
              className="py-2.5 text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              Contact options
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NotFound;
