import { motion } from 'framer-motion';

const PROJECTS = [
  {
    name: 'CRM Dashboard', category: 'CRM / Web App', year: '2026', industry: 'Sales Tech',
    desc: 'Sales CRM for managing leads, tracking deals, and monitoring team performance in real time.',
    tags: ['React', 'Next.js'], viz: 'bars',
  },
  {
    name: 'Timesheets Application', category: 'Productivity App', year: '2023', industry: 'Workforce Ops',
    desc: 'Work platform for logging hours, tracking project time, and generating clean weekly reports.',
    tags: ['React', 'Next.js'], viz: 'lines',
  },
  {
    name: 'Corporate Website', category: 'Website', year: '2024', industry: 'Manufacturing',
    desc: 'Corporate website showcasing services, team, and driving inbound leads for the business.',
    tags: ['React', 'Next.js'], viz: 'dots',
  },
  {
    name: 'Quiz Application', category: 'Web App', year: '2025', industry: 'EdTech',
    desc: 'Interactive quiz platform with timed rounds, scoring, leaderboards, and multi-category question banks.',
    tags: ['React', 'Spring Boot', 'Java'], viz: 'radial',
  },
  {
    name: 'Corporate Exam Portal', category: 'Web App', year: '2026', industry: 'HR & Training',
    desc: 'Enterprise-grade exam platform for employee assessments, certifications, and training evaluations with role-based access and analytics.',
    tags: ['React', 'Spring Boot', 'PostgreSQL'], viz: 'grid',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Selected work</span>
          <h2>Projects we're proud of</h2>
          <p>
            Real clients, real deliverables, real results. Live URLs are protected
            under client confidentiality agreements.
          </p>
        </motion.div>

        <div className="project-grid">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.name}
              className="project-card"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
            >
              <div className="project-visual">
                <div className="project-accent" />
                <span className="project-lock">🔒 NDA protected</span>
              </div>
              <div className="project-body">
                <div className="project-meta-row">
                  <span>Confidential</span><span aria-hidden="true">·</span>
                  <span>{p.industry}</span><span aria-hidden="true">·</span>
                  <span>{p.year}</span>
                </div>
                <span className="project-category">{p.category}</span>
                <h3>{p.name}</h3>
                <p>{p.desc}</p>
                <ul className="project-tags">
                  {p.tags.map((t) => <li key={t}>{t}</li>)}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
