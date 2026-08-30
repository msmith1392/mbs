import React from 'react';

function SkipToMain(): React.JSX.Element {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-100 -translate-y-full rounded-md bg-cta px-4 py-2 text-sm font-medium text-text-on-cta shadow-lg transition-transform focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-(--color-bg-primary)"
    >
      Skip to main content
    </a>
  );
}

export default SkipToMain;
