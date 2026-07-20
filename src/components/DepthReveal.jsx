import { useEffect, useRef, useState } from 'react';

/**
 * Wraps a section and animates it in from "depth" (scaled down, pushed back
 * on the z-axis, blurred, offset) into full focus as the user scrolls it
 * into view — then reverses if the user scrolls back up past it, so each
 * section arrives on its own beat, one at a time.
 *
 * IMPORTANT: the IntersectionObserver watches an untransformed outer
 * element. The 3D transform (translateZ/scale) lives on an inner element
 * instead. If the observer watched the transformed element directly, its
 * on-screen bounding box would shrink/shift as it moved in z-space, which
 * throws off "is this in view" math and causes later sections to glitch
 * in early during fast top-to-bottom scrolling.
 *
 * `initiallyVisible` skips the hidden starting state entirely — use this
 * for the first section on the page (e.g. Hero) so it's simply visible
 * the moment the preloader clears, with no dependency on observer timing.
 */
export default function DepthReveal({
  children,
  className = '',
  as: Tag = 'div',
  initiallyVisible = false,
  ...rest
}) {
  const outerRef = useRef(null);
  const [inView, setInView] = useState(initiallyVisible);

  useEffect(() => {
    if (initiallyVisible) return;

    const node = outerRef.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {
        threshold: 0.18,
        rootMargin: '0px 0px -12% 0px',
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [initiallyVisible]);

  return (
    <Tag ref={outerRef} className={`depth-outer ${className}`.trim()} {...rest}>
      <div className={`depth-panel ${inView ? 'is-in-depth' : ''}`}>{children}</div>
    </Tag>
  );
}
