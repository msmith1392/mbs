import React, { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import msbcWordmark from '../assets/mbsc-wordmark.svg'; // SVG wordmark

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Portfolio', href: '/#portfolio' },
  { label: 'Contact', href: '/#contact' },
];

function Header(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLDivElement>(null);
  const prevMenuOpen = useRef<boolean>(false);

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

  function renderDesktopLink(item: NavItem): React.JSX.Element {
    return (
      <a
        key={item.href}
        href={item.href}
        className="rounded px-3 py-1.5 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
      >
        {item.label}
      </a>
    );
  }

  function renderMobileLink(item: NavItem): React.JSX.Element {
    return (
      <a
        key={item.href}
        href={item.href}
        className="rounded px-3 py-1.5 text-base font-medium text-white/70 transition-colors hover:bg-white/10 hover:text-white"
        onClick={() => setMenuOpen(false)}
      >
        {item.label}
      </a>
    );
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-dark shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="flex items-center gap-1"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          {/* SVG wordmark */}
          <img src={msbcWordmark} alt="Matthew B. Smith Consulting" className="h-8 w-auto" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navItems.map(renderDesktopLink)}
        </nav>
        <button
          ref={menuButtonRef}
          type="button"
          className="text-gray-300 lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {menuOpen && (
        <nav
          ref={mobileNavRef}
          id="mobile-nav"
          className="flex flex-col gap-3 border-t border-white/10 bg-dark px-6 pb-4 lg:hidden"
          aria-label="Primary mobile"
        >
          {navItems.map(renderMobileLink)}
        </nav>
      )}
    </header>
  );
}

export default Header;
