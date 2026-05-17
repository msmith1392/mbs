import React from 'react';

function SkipToMain(): React.JSX.Element {
  return (
    <a
      href="#main-content"
      className="fixed left-4 top-0 z-100 -translate-y-full rounded bg-blue-lct-cta px-4 py-2 text-sm font-semibold text-white shadow-lg transition-transform focus:translate-y-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-dark"
    >
      Skip to main content
    </a>
  );
}

export default SkipToMain;
