import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const ref = useRef(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isCoarse = window.matchMedia('(hover: none), (pointer: coarse)').matches;
    if (reduceMotion || isCoarse) return;

    const el = ref.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let raf;

    function move(e) {
      x = e.clientX;
      y = e.clientY;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      el.classList.remove('is-hidden');
    }

    function onOver(e) {
      const target = e.target.closest('a, button, input, textarea, select, [role="button"], .hover-target');
      el.classList.toggle('is-hovering', Boolean(target));
    }

    function onLeave() {
      el.classList.add('is-hidden');
    }

    window.addEventListener('mousemove', move, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.addEventListener('mouseleave', onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return <div className="cx-cursor is-hidden" ref={ref} aria-hidden="true" />;
}
