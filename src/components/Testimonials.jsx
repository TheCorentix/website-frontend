import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const QUOTES = [
  {
    initials: 'CS', name: 'Chandra Sekhar', role: 'CSR Associates',
    quote: 'Delivered the project two days early and the code quality was exceptional. Our load time dropped by 60%. I wouldn\u2019t hesitate to hire again.',
  },
  {
    initials: 'PS', name: 'Pushpa', role: 'Apex Pipes, MD',
    quote: 'What stood out was the communication — always responsive, always clear. The dashboard looked exactly like our Figma, but better executed.',
  },
  {
    initials: 'PR', name: 'Prasad Reddy', role: 'Lakshya Steel',
    quote: 'Our sign-ups went up 3\u00d7 in the first month. The attention to UX detail was incredible — users absolutely love the experience.',
  },
  {
    initials: 'AR', name: 'Arun Reddy', role: 'Client',
    quote: 'The AI chatbot they built for us handles over 70% of our customer queries automatically. The ROI in the first quarter was beyond expectations.',
  },
  {
    initials: 'VK', name: 'Vikram Kumar', role: 'TechVision Solutions, Founder',
    quote: 'They transformed our legacy system into a modern, scalable platform. The team was proactive and delivered exactly what we envisioned—no surprises.',
  },
  {
    initials: 'RB', name: 'Rashmi Bhavani', role: 'EcoGreen Initiatives, Director',
    quote: 'Outstanding work on our mobile app. User retention increased by 45% within two months. The design is intuitive and beautiful.',
  },
  {
    initials: 'SM', name: 'Sanjay Mehta', role: 'FinServe Analytics, CEO',
    quote: 'They built our data visualization dashboard from scratch. The performance is incredible and it handles millions of data points seamlessly.',
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % QUOTES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const active = QUOTES[index];

  return (
    <section className="section testimonials">
      <div className="wrap">
        <motion.div
          className="section-head"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Client stories</span>
          <h2>What our clients say</h2>
          <p>Real feedback from clients who trusted us to build their digital products.</p>
        </motion.div>

        <div className="quote-stage">
          <span className="quote-mark" aria-hidden="true">&ldquo;</span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <blockquote>{active.quote}</blockquote>
              <figcaption>
                <strong>{active.name}</strong>
                <span>{active.role}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="quote-filmstrip" role="tablist" aria-label="Select testimonial">
          {QUOTES.map((q, i) => (
            <button
              key={q.name}
              role="tab"
              aria-selected={i === index}
              className={`filmstrip-tile ${i === index ? 'is-active' : ''}`}
              onClick={() => setIndex(i)}
            >
              <span className="filmstrip-initials">{q.initials}</span>
              <span className="filmstrip-name">{q.name.split(' ')[0]}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
