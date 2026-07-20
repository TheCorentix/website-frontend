import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronDown,
  LayoutDashboard, ShoppingCart, Webhook, Users, Calendar, Globe2,
  Search, Megaphone, Zap, BarChart3, Bot, PenTool,
  MessageSquare, Link2, Cpu,
  Palette, Smartphone, Puzzle, Compass,
  Rocket, AppWindow, Target, Sparkles, Share2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data/servicesData';

const ICONS = {
  layoutDashboard: LayoutDashboard, cart: ShoppingCart, webhook: Webhook, users: Users,
  calendar: Calendar, globe: Globe2, search: Search, megaphone: Megaphone, zap: Zap,
  chart: BarChart3, bot: Bot, penTool: PenTool, messageSquare: MessageSquare, link: Link2,
  agent: Cpu, palette: Palette, smartphone: Smartphone, puzzle: Puzzle, research: Compass,
  rocket: Rocket, appWindow: AppWindow, target: Target, sparkles: Sparkles, share2: Share2,
};

function TitleLines({ lines }) {
  return lines.map((line, i) => {
    if (typeof line === 'string') {
      return <span key={i}>{line}<br /></span>;
    }
    return line.accent
      ? <span key={i} className="svc-accent">{line.text}<br /></span>
      : <span key={i}>{line.text}<br /></span>;
  });
}

function FaqItem({ q, a, isOpen, onClick }) {
  return (
    <div className={`svc-faq-item ${isOpen ? 'is-open' : ''}`}>
      <button className="svc-faq-q" onClick={onClick}>
        <span>{q}</span>
        <ChevronDown size={18} />
      </button>
      <div className="svc-faq-a" style={{ maxHeight: isOpen ? '240px' : '0px' }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function ServicePage() {
  const { slug } = useParams();
  const data = SERVICES_DATA[slug];
  const [openFaq, setOpenFaq] = useState(0);

  if (!data) {
    return (
      <section className="section">
        <div className="wrap" style={{ textAlign: 'center', padding: '120px 0' }}>
          <h2>Service not found</h2>
          <p style={{ marginTop: 12 }}><Link to="/" className="cx-link-ghost">← Back to home</Link></p>
        </div>
      </section>
    );
  }

  return (
    <div className="svc-page">
      {/* Hero */}
      <section className="section svc-hero">
        <div className="wrap">
          <div className="svc-hero-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="svc-eyebrow">{data.n} // {data.tag}</span>
              <h1 className="svc-h1"><TitleLines lines={data.titleLines} /></h1>
              <p className="svc-lead">{data.lead}</p>
              <div className="svc-actions">
                <Link to="/#contact" className="cx-btn-primary" style={{ textDecoration: 'none' }}>
                  {data.ctaPrimary} <ArrowRight size={16} />
                </Link>
                <Link to="/#projects" className="cx-link-ghost" style={{ textDecoration: 'none' }}>
                  {data.ctaSecondary} ↓
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="svc-stat-panel"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="svc-stat-grid">
                {data.heroStats.map((s) => (
                  <div key={s.l}><strong>{s.v}</strong><span>{s.l}</span></div>
                ))}
              </div>
              <span className="svc-stack-label">Relevant stack</span>
              <div className="svc-stack-tags">
                {data.stackTags.map((t) => <span key={t}>{t}</span>)}
              </div>
            </motion.div>
          </div>
        </div>

        <div className="svc-ticker">
          <div className="svc-ticker-track">
            {data.tickerWords.concat(data.tickerWords).map((w, i) => (
              <span className="svc-ticker-item" key={i}>{w} <span aria-hidden="true">·</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">{data.capsEyebrow}</span>
            <h2><TitleLines lines={data.capsTitle} /></h2>
            <p>{data.capsLead}</p>
          </motion.div>

          <div className="svc-caps-grid">
            {data.capabilities.map((c, i) => {
              const Icon = ICONS[c.icon] || Zap;
              return (
                <motion.div
                  key={c.title} className="svc-cap-card"
                  initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                >
                  <span className="svc-cap-icon"><Icon size={22} strokeWidth={1.75} /></span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                  <ul className="svc-cap-tags">
                    {c.tags.map((t) => <li key={t}>{t}</li>)}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="wrap">
          <div className="svc-process-panel">
            <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
              <span className="eyebrow">{data.processEyebrow}</span>
              <h2><TitleLines lines={data.processTitle} /></h2>
              <p>{data.processLead}</p>
            </motion.div>

            <div className="svc-process-grid">
              {data.process.map((p, i) => (
                <motion.div
                  key={p.n} className="svc-process-card"
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <span className="svc-process-n">{p.n}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case studies */}
      <section className="section">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">{data.casesEyebrow}</span>
            <h2><TitleLines lines={data.casesTitle} /></h2>
            <p>Live URLs are protected under client confidentiality agreements — the outcomes speak for themselves.</p>
          </motion.div>

          <div className="svc-cases-grid">
            {data.cases.map((c, i) => (
              <motion.div
                key={c.name} className="svc-case-card"
                initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
              >
                <span className="svc-case-tag">{c.tag}</span>
                <h3>{c.name}</h3>
                <p>{c.desc}</p>
                <div className="svc-case-stats">
                  {c.stats.map((s) => <span key={s}>{s}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="wrap">
          <motion.div className="section-head" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}>
            <span className="eyebrow">FAQ</span>
            <h2>Common <span className="svc-accent">questions</span></h2>
          </motion.div>

          <div className="svc-faq-list">
            {data.faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="wrap">
          <motion.div
            className="svc-cta-banner"
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.4 }} transition={{ duration: 0.6 }}
          >
            <h2><TitleLines lines={data.ctaTitle} /></h2>
            <p>{data.ctaLead}</p>
            <div className="svc-actions" style={{ justifyContent: 'center' }}>
              <Link to="/#contact" className="cx-btn-primary" style={{ textDecoration: 'none' }}>
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link to="/#contact" className="cx-link-ghost" style={{ textDecoration: 'none' }}>
                Email Us Directly
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
