import { motion } from 'framer-motion';
import { Users, Rocket, Target, ShieldCheck, Layers, Handshake, Globe2, PackageCheck } from 'lucide-react';

const PILLARS = [
  { icon: Users, title: 'Specialist Team', desc: 'Domain experts, not generalists.' },
  { icon: Rocket, title: 'Fast, Not Sloppy', desc: 'Rapid delivery, clean architecture.' },
  { icon: Target, title: 'Results-First', desc: 'Built to convert, retain, grow.' },
  { icon: ShieldCheck, title: 'Full Ownership', desc: 'Your code, no black boxes.' },
  { icon: Layers, title: 'Built to Scale', desc: 'Grows with you, no rewrites.' },
  { icon: Handshake, title: 'True Partnership', desc: 'We work like your own team.' },
  { icon: Globe2, title: 'Global Standards', desc: 'International quality, local pricing.' },
  { icon: PackageCheck, title: 'End-to-End', desc: 'Design to deployment, one team.' },
];

export default function WhyUs() {
  return (
    <section className="section why-us" id="about">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Why Corentix Labs</span>
          <h2>The team that delivers</h2>
          <p>
            A tight-knit team of specialists who've shipped products that
            actually move the needle — from MVPs to enterprise-grade systems.
          </p>
        </motion.div>

        <div className="why-grid">
          {PILLARS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                className="why-chip"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.07 }}
              >
                <span className="why-chip-icon"><Icon size={19} strokeWidth={1.75} /></span>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
