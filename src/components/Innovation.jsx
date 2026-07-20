import { motion } from 'framer-motion';

const PATENTS = [
  {
    badge: 'Patent Pending',
    title: 'Patent Pending Technologies',
    desc: 'Advanced digital systems and intelligent solutions designed for scalable web applications and business automation.',
    tags: ['Technology', 'Automation'],
  },
  {
    badge: 'Patent Applied',
    title: 'Confidential Technology Research',
    desc: 'Research-oriented systems and features currently progressing through the patent application process.',
    tags: ['Research', 'Development'],
  },
];

export default function Innovation() {
  return (
    <section id="innovation" className="section innovation">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Innovation</span>
          <h2>Patents applied</h2>
          <p>
            Innovative and research-driven technology systems currently under
            patent application and development.
          </p>
        </motion.div>

        <div className="patent-grid">
          {PATENTS.map((p, i) => (
            <motion.article
              key={p.title}
              className="patent-card-simple"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="patent-badge">{p.badge}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul className="patent-tags">
                {p.tags.map((t) => <li key={t}>{t}</li>)}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
