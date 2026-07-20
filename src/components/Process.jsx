import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';

const STEPS = [
  { n: '01', title: 'Discovery Call', desc: 'We talk through your goals, timeline, and budget. We ask the right questions before writing a single line of code.' },
  { n: '02', title: 'Proposal & Scope', desc: "A clear proposal with deliverables, milestones, and fixed pricing. You know exactly what you're getting." },
  { n: '03', title: 'Build & Review', desc: 'Iterative build cycles with regular updates. Feedback goes straight into the next sprint — no surprises.' },
  { n: '04', title: 'Launch & Support', desc: 'Smooth deployment, handover docs, and 30 days of post-launch support included as standard.' },
];

export default function Process() {
  const trackRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ['start 0.75', 'end 0.4'],
  });
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 22, mass: 0.3 });

  return (
    <section id="process" className="section">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">How we work</span>
          <h2>Transparent process, zero surprises</h2>
          <p>Clear milestones and direct communication at every step of the journey.</p>
        </motion.div>

        <div className="process-track" ref={trackRef}>
          <div className="process-line" />
          <motion.div className="process-line-fill" style={{ scaleX }} />
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              className="process-step"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, delay: i * 0.12 }}
            >
              <span className="process-n">{s.n}</span>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
