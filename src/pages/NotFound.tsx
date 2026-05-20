import React from 'react';
import { Link } from 'react-router-dom';

function NotFound(): React.JSX.Element {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center bg-(--color-bg-primary) px-6 py-24 text-center">
      <p className="text-8xl font-bold text-text-subtle">404</p>
      <h1 className="mt-4 text-2xl font-bold tracking-wide text-text-primary">Page Not Found</h1>
      <p className="mt-3 text-sm text-text-muted">
        The link may be broken or the page may have moved.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="inline-block rounded bg-accent px-8 py-3 font-semibold text-(--color-text-on-accent) transition-colors hover:bg-accent-hover"
        >
          Go Home
        </Link>
        <Link
          to="/contact"
          className="inline-block rounded border-2 border-white/30 px-8 py-3 font-semibold text-white transition-colors hover:border-white"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}

export default NotFound;
