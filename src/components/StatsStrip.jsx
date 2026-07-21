import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { target: 20, suffix: '+', label: 'Projects Shipped', sub: 'Across SaaS, e-commerce, automation & more' },
  { target: 3, suffix: '×', label: 'Avg. Growth', sub: 'Average conversion uplift reported by clients' },
  { target: 99, suffix: '%', label: 'Satisfaction', sub: 'Clients who would recommend Corentix' },
  { target: 24, suffix: 'h', label: 'Response Time', sub: 'Always reachable, always responsive' },
];

function CountUp({ target, suffix }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const rafRef = useRef(null);
  const runningRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) { setVal(target); return; }

    function play() {
      if (runningRef.current) return;
      runningRef.current = true;
      setVal(0);
      const duration = 1100;
      const start = performance.now();
      function tick(now) {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(eased * target));
        if (p < 1) {
          rafRef.current = requestAnimationFrame(tick);
        } else {
          runningRef.current = false;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    // Replays the count-up every time the stat scrolls back into view,
    // so it counts from 0 each time the section is (re)opened.
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        play();
      } else {
        runningRef.current = false;
        cancelAnimationFrame(rafRef.current);
        setVal(0);
      }
    }, { threshold: 0.6 });

    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(rafRef.current);
    };
  }, [target]);

  return <strong ref={ref}>{val}{suffix}</strong>;
}

export default function StatsStrip() {
  return (
    <section className="stats-strip-section">
      <div className="wrap">
        <div className="cx-stats-standalone">
          {STATS.map((s, i) => (
            <motion.div
              key={s.label}
              className="cx-stat-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <CountUp target={s.target} suffix={s.suffix} />
              <span className="lbl">{s.label}</span>
              <span className="sub">{s.sub}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
