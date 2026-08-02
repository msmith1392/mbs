import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import msbcWordmark from '../assets/mbsc-wordmark.svg';
import { siteNavLinks } from '../data/siteNav';
import type { SiteNavLink } from '../data/siteNav';

function Header(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const prevMenuOpen = useRef<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (prevMenuOpen.current && !menuOpen) {
      menuButtonRef.current?.focus();
    }
    prevMenuOpen.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }
    const nav = mobileNavRef.current;
    if (!nav) {
      return;
    }
    const focusables = nav.querySelectorAll<HTMLElement>('a[href]');
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    first?.focus();

    function handleKeyDown(e: KeyboardEvent): void {
      if (e.key !== 'Tab' || focusables.length === 0) {
        return;
      }
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        }
      } else if (document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    }

    nav.addEventListener('keydown', handleKeyDown);
    return () => nav.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  function handleNavClick(e: React.MouseEvent<HTMLAnchorElement>, item: SiteNavLink): void {
    if (pathname !== '/') {
      return;
    }
    e.preventDefault();
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document
      .getElementById(item.sectionId)
      ?.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
  }

  function renderDesktopLink(item: SiteNavLink): React.JSX.Element {
    return (
      <a
        key={item.href}
        href={item.href}
        className="rounded-md px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-bg-secondary hover:text-text-primary"
        onClick={(e) => handleNavClick(e, item)}
      >
        {item.label}
      </a>
    );
  }

  function renderMobileLink(item: SiteNavLink): React.JSX.Element {
    return (
      <a
        key={item.href}
        href={item.href}
        className="rounded-md px-3 py-3 text-base font-medium text-text-muted transition-colors hover:bg-bg-secondary hover:text-text-primary"
        onClick={(e) => {
          handleNavClick(e, item);
          setMenuOpen(false);
        }}
      >
        {item.label}
      </a>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-(--color-bg-primary)/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link
          to="/"
          className="flex items-center"
          onClick={() => {
            if (pathname === '/') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
        >
          <img src={msbcWordmark} alt="Matthew B. Smith" className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {pathname === '/' && siteNavLinks.map(renderDesktopLink)}
        </nav>
        {pathname === '/' && (
          <button
            ref={menuButtonRef}
            type="button"
            className="rounded-md p-2 text-text-muted transition-colors hover:bg-bg-secondary hover:text-text-primary md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>
      {menuOpen && pathname === '/' && (
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          className="mx-auto flex max-w-5xl flex-col gap-1 border-t border-border bg-(--color-bg-primary) px-3 py-3 md:hidden"
          aria-label="Primary mobile"
        >
          {siteNavLinks.map(renderMobileLink)}
        </nav>
      )}
    </header>
  );
}

export default Header;
