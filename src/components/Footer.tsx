import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import mbscWordmarkSm from '../assets/mbsc-wordmark-sm.svg';

function Footer(): React.JSX.Element {
  const { pathname } = useLocation();

  function handleWordmarkClick(): void {
    if (pathname === '/') {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
    }
  }

  return (
    <footer className="border-t border-border bg-(--color-bg-primary) px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Link to="/" onClick={handleWordmarkClick} className="inline-block">
            <img src={mbscWordmarkSm} alt="Matthew B. Smith" className="h-6 w-auto" />
          </Link>
          <p className="mt-3 text-sm text-text-muted">Senior Software Engineer. Somerset, KY.</p>
          <p className="mt-2 text-xs text-text-subtle">
            &copy; {new Date().getFullYear()} Matthew Smith
          </p>
        </div>

        <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Footer">
          <a
            href="https://www.linkedin.com/in/matthew-smith-22310b111/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/msmith1392"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href="/MatthewSmithResume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-muted transition-colors hover:text-accent"
          >
            Resume
          </a>
          <Link to="/#contact" className="text-text-muted transition-colors hover:text-accent">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
