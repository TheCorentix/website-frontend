import { motion } from 'framer-motion';
import { Compass, Target, ArrowRight, Mail, Clock, CalendarClock, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CORE_STATS, VISION_MISSION, TEAM, PROCESS_OWNERS, CTA_INFO } from '../data/coreEngineData';

const ICONS = { compass: Compass, target: Target };
const DISCIPLINES = ['ENGINEERING', 'DESIGN', 'GROWTH', 'STRATEGY', 'AUTOMATION', 'BRAND'];

function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function Avatar({ name, size = 56 }) {
  return (
    <span className="ce-avatar-wrap" style={{ width: size, height: size }}>
      <span className="ce-avatar-sq" style={{ fontSize: size * 0.32 }}>{initials(name)}</span>
    </span>
  );
}

export default function CoreEngine() {
  const founder = TEAM[0];
  const restOfTeam = TEAM.slice(1);

  return (
    <div className="svc-page">
      {/* Hero */}
      <section className="section svc-hero">
        <div className="wrap">
          <div className="svc-hero-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="svc-eyebrow">Core Engine</span>
              <h1 className="svc-h1">The people <span className="svc-accent">behind</span> Corentix Labs</h1>
              <p className="svc-lead">
                We're a small, senior team of builders — engineers, designers, and growth
                strategists — working as one accountable unit instead of a chain of vendors.
              </p>
              <div className="svc-actions">
                <Link to="/#contact" className="cx-btn-primary" style={{ textDecoration: 'none' }}>
                  Start a Project <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="svc-stat-panel"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="svc-stat-grid">
                {CORE_STATS.map((s) => (
                  <div key={s.label}><strong>{s.value}</strong><span>{s.label}</span></div>
                ))}
              </div>
              <span className="svc-stack-label">One team, every discipline</span>
              <div className="svc-stack-tags">
                {DISCIPLINES.slice(0, 4).map((t) => <span key={t}>{t}</span>)}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="svc-ticker">
          <div className="svc-ticker-track">
            {DISCIPLINES.concat(DISCIPLINES).map((w, i) => (
              <span className="svc-ticker-item" key={i}>{w} <span aria-hidden="true">·</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="section section-tight-top">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">What drives us</span>
            <h2>Vision &amp; <span className="svc-accent">Mission</span></h2>
          </motion.div>

          <div className="ce-vm-grid">
            {VISION_MISSION.map((v, i) => {
              const Icon = ICONS[v.icon];
              return (
                <motion.div
                  key={v.title}
                  className={`ce-vm-item ce-vm-item--${i === 0 ? 'a' : 'b'}`}
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                >
                  <span className="ce-vm-glow" aria-hidden="true" />
                  <span className="ce-icon"><Icon size={22} strokeWidth={1.75} /></span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">Our people</span>
            <h2>Meet the <span className="svc-accent">team</span></h2>
            <p>The specialists who plan, design, build, and ship every project.</p>
          </motion.div>

          <div className="ce-team-layout">
            <motion.div
              className="ce-founder-card"
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55 }}
            >
              <Avatar name={founder.name} size={92} />
              <h3>{founder.name}</h3>
              <span className="ce-team-role">{founder.role}</span>

              {founder.quote && (
                <blockquote className="ce-founder-quote">
                  <Quote size={16} strokeWidth={2} />
                  <span>{founder.quote}</span>
                </blockquote>
              )}

              <p className="ce-founder-bio">{founder.bio}</p>

              <div className="ce-meta-row ce-founder-meta">
                <span><em>Focus</em>{founder.focus}</span>
                <span><em>Years</em>{founder.years}</span>
                <span><em>Location</em>{founder.location}</span>
              </div>
            </motion.div>

            <div className="ce-team-list">
              {restOfTeam.map((p, i) => (
                <motion.div
                  key={p.name + i} className="ce-team-row"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <Avatar name={p.name} size={52} />
                  <div className="ce-team-row-body">
                    <h4>{p.name}</h4>
                    <span className="ce-team-role">{p.role}</span>
                    <p>{p.bio}</p>
                    <div className="ce-meta-row">
                      <span><em>Focus</em>{p.focus}</span>
                      <span><em>Years</em>{p.years}</span>
                      <span><em>Location</em>{p.location}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How we work as one unit */}
      <section className="section">
        <div className="wrap">
          <div className="svc-process-panel ce-owner-panel">
            <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow">How we work</span>
              <h2>One team, <span className="svc-accent">one accountable unit</span></h2>
              <p>Every stage has a single named owner from the team above — no hand-offs, no dropped context.</p>
            </motion.div>

            <div className="process-track ce-owner-track">
              <div className="process-line" />
              {PROCESS_OWNERS.map((s, i) => (
                <motion.div
                  key={s.n}
                  className="process-step"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <span className="process-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <span className="ce-process-owner">{s.owner}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section section-roomy-top">
        <div className="wrap">
          <motion.div
            className="svc-cta-banner ce-cta-banner"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}
          >
            <div className="ce-cta-grid">
              <div className="ce-cta-copy">
                <h2>Want to work with <span className="svc-accent">our team?</span></h2>
                <p>Tell us about your project — we'll respond within 24 hours with next steps.</p>
                <div className="svc-actions">
                  <Link to="/#contact" className="cx-btn-primary" style={{ textDecoration: 'none' }}>
                    Start a Project <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              <div className="ce-cta-info">
                <div className="ce-cta-info-item">
                  <span className="svc-cap-icon"><Mail size={18} strokeWidth={1.75} /></span>
                  <div>
                    <strong>{CTA_INFO.email}</strong>
                    <span>Direct line to the founder</span>
                  </div>
                </div>
                <div className="ce-cta-info-item">
                  <span className="svc-cap-icon"><Clock size={18} strokeWidth={1.75} /></span>
                  <div>
                    <strong>{CTA_INFO.responseTime}</strong>
                    <span>Guaranteed first response</span>
                  </div>
                </div>
                <div className="ce-cta-info-item">
                  <span className="svc-cap-icon"><CalendarClock size={18} strokeWidth={1.75} /></span>
                  <div>
                    <strong>{CTA_INFO.availability}</strong>
                    <span>Book yours before the slate fills</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
