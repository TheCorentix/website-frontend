import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const LETTERS = [
  { l: 'C', word: 'Core' },
  { l: 'O', word: 'Operational' },
  { l: 'R', word: 'Revenue' },
  { l: 'E', word: 'Engineering' },
  { l: 'N', word: 'Navigated by' },
  { l: 'T', word: 'Technology' },
  { l: 'I', word: 'Intelligence', sub: '(AI)' },
  { l: 'X', word: 'eXperience' },
];

const CENTER = (LETTERS.length - 1) / 2;

function KineticLetter({ item, i, progress }) {
  const dir = i - CENTER; // negative left of center, positive right
  const x = useTransform(progress, [0, 1], [0, dir * 46]);
  const opacity = useTransform(progress, [0, 0.7], [1, 0.15]);

  return (
    <motion.div
      className="name-cell"
      style={{ x, opacity }}
      initial={{ opacity: 0, y: 40, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
    >
      <span className="name-letter">{item.l}</span>
      <span className="name-word">
        {item.word}
        {item.sub && <em>{item.sub}</em>}
      </span>
    </motion.div>
  );
}

export default function CompanyName() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  return (
    <section className="name-reveal" aria-label="What Corentix Labs stands for" ref={ref}>
      <div className="wrap">
        <motion.p
          className="eyebrow center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
        >
          Decoding the name
        </motion.p>

        <div className="name-kinetic-stage">
          <div className="name-row" style={{ perspective: 1000 }}>
            {LETTERS.map((item, i) => (
              <KineticLetter key={item.l} item={item} i={i} progress={scrollYProgress} />
            ))}
          </div>
        </div>

        <motion.p
          className="name-sentence"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          Core Operational &amp; Revenue Engineering — Navigated by Technology,
          Intelligence, and eXperience.
        </motion.p>
      </div>
    </section>
  );
}
