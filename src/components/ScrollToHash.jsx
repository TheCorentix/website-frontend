import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scrolls to the element matching the URL hash whenever the route or hash
// changes (e.g. navigating from /services/full-stack-development back to
// /#contact). Falls back to scrolling to top on plain route changes.
export default function ScrollToHash() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a tick so the target section has mounted/rendered.
      const id = hash.replace('#', '');
      const t = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
      return () => clearTimeout(t);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
