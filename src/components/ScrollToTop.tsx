import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(): null {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      const frameId = window.requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView();
      });
      return () => window.cancelAnimationFrame(frameId);
    }

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduceMotion && typeof document.startViewTransition === 'function') {
      document.startViewTransition(() => {
        window.scrollTo({ top: 0 });
      });
      return undefined;
    }

    window.scrollTo({ top: 0 });
    return undefined;
  }, [hash, pathname]);

  return null;
}

export default ScrollToTop;
