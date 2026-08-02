import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): React.JSX.Element {
  return (
    <section className="flex min-h-[65vh] items-center bg-(--color-bg-primary) px-6 py-20">
      <div className="mx-auto w-full max-w-2xl text-center">
        <p className="text-sm font-medium text-accent">404</p>
        <h1 className="mt-3 text-4xl tracking-tight text-text-primary sm:text-5xl">
          Page Not Found
        </h1>
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-text-muted sm:text-base">
          The link may be broken or the page may have moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-5">
          <Link
            to="/"
            className="rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-(--color-text-on-accent) transition-colors hover:bg-accent-hover"
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
    </section>
  );
}

export default NotFound;
