import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const SERVICES = [
  {
    n: '01', tag: 'DEVELOPMENT', title: 'Full Stack Development',
    desc: 'Scalable modern web applications from frontend to backend with performance, security, and clean architecture in mind.',
    stack: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'REST APIs'],
    diagram: 'stack',
    slug: 'full-stack-development',
  },
  {
    n: '02', tag: 'GROWTH', title: 'Digital Marketing',
    desc: 'Growth-focused strategies designed to increase visibility, leads, conversions, and long-term business growth.',
    stack: ['SEO', 'Google Ads', 'Lead Generation', 'Social Media', 'Analytics'],
    diagram: 'growth',
    slug: 'digital-marketing',
  },
  {
    n: '03', tag: 'INTELLIGENCE', title: 'AI & Automation',
    desc: 'Smart automation systems and AI-powered workflows that save time, automate operations, and improve customer engagement.',
    stack: ['AI Chatbots', 'AI Agents', 'Automation', 'WhatsApp Bots', 'API Integrations'],
    diagram: 'neural',
    slug: 'ai-automation',
  },
  {
    n: '04', tag: 'DESIGN', title: 'UI/UX & Design',
    desc: 'Clean, modern, conversion-focused interfaces designed to create seamless digital experiences across all devices.',
    stack: ['Figma', 'UI Design', 'UX Design', 'Responsive', 'Design Systems'],
    diagram: 'frame',
    slug: 'ui-ux-design',
  },
  {
    n: '05', tag: 'NO-CODE', title: 'No-Code / Low-Code',
    desc: 'Rapid MVP and business system development using modern no-code platforms for faster time-to-market delivery.',
    stack: ['Webflow', 'Bubble', 'Shopify', 'Zapier', 'n8n'],
    diagram: 'blocks',
    slug: 'no-code-low-code',
  },
  {
    n: '06', tag: 'CONTENT', title: 'Content & Branding',
    desc: 'Content systems and brand strategies built to grow audiences, improve engagement, and strengthen online presence.',
    stack: ['Content Creation', 'Video Editing', 'Brand Strategy', 'Social Media', 'Canva'],
    diagram: 'wave',
    slug: 'content-branding',
  },
];

export default function WhatWeDo() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">What we do</span>
          <h2>Scalable digital solutions</h2>
          <p>
            From development and AI automation to branding and growth — our team
            delivers complete digital solutions under one roof.
          </p>
        </motion.div>

        <div className="service-grid">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.n}
              className="service-card"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: (i % 3) * 0.08 }}
            >
              <div className="service-card-body">
                <div className="service-top">
                  <span className="service-n">{s.n}</span>
                  <span className="service-total">/{String(SERVICES.length).padStart(2, '0')}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <Link to={`/services/${s.slug}`} className="service-link">
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
