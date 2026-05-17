import React from 'react';
import { Link } from 'react-router-dom';
import mbscWordmarkSm from '../assets/mbsc-wordmark-sm.svg';

function Footer(): React.JSX.Element {
  return (
    <footer className="border-t border-white/10 bg-dark px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl text-center">
        <img
          src={mbscWordmarkSm}
          alt="Matthew B. Smith Consulting"
          className="mx-auto h-6 w-auto"
        />
        <p className="mt-3 text-sm text-white/55">
          Software engineering and web development. Somerset, KY.
        </p>
        <nav className="mt-6 flex flex-wrap items-center justify-center gap-x-1 gap-y-2">
          <Link to="/" className="text-sm text-white/60 transition-colors hover:text-white">
            Home
          </Link>
          <span className="text-sm text-white/20">&middot;</span>
          <Link
            to="/consulting"
            className="text-sm text-white/60 transition-colors hover:text-white"
          >
            Consulting
          </Link>
          <span className="text-sm text-white/20">&middot;</span>
          <Link to="/websites" className="text-sm text-white/60 transition-colors hover:text-white">
            Websites
          </Link>
          <span className="text-sm text-white/20">&middot;</span>
          <Link to="/about" className="text-sm text-white/60 transition-colors hover:text-white">
            About
          </Link>
          <span className="text-sm text-white/20">&middot;</span>
          <Link to="/contact" className="text-sm text-white/60 transition-colors hover:text-white">
            Contact
          </Link>
        </nav>
        <div className="mt-10 border-t border-white/10 pt-8">
          <p className="text-sm text-fg-muted">
            &copy; {new Date().getFullYear()} Matthew B. Smith Consulting
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
