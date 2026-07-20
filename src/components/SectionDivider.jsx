import { useEffect, useRef, useState } from 'react';

export default function SectionDivider() {
  const ref = useRef(null);
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setDrawn(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`section-divider ${drawn ? 'is-drawn' : ''}`} ref={ref} aria-hidden="true">
      <svg viewBox="0 0 1400 2" preserveAspectRatio="none">
        <path d="M0,1 L1400,1" />
      </svg>
    </div>
  );
}
