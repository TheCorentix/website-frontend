import { useState } from 'react';
import { motion } from 'framer-motion';

const MAX_CHARS = 600;
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function Field({ id, label, type = 'text', value, onChange, required, placeholder }) {
  return (
    <div className="cf-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id} type={type} placeholder={placeholder} required={required}
        value={value} onChange={onChange}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', details: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  function update(key, value) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    if (status === 'sending') return;
    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        const firstError = data.errors && Object.values(data.errors)[0];
        throw new Error(firstError || data.error || 'Something went wrong.');
      }

      setStatus('sent');
    } catch (err) {
      setStatus('error');
      setErrorMsg(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="eyebrow">Let's work together</span>
          <h2>Have a project in mind?</h2>
          <p>Currently open to new projects. Let's build something exceptional together.</p>

          <div className="availability-chip">
            <span className="pulse-dot" />
            Replying within 4h · CET
          </div>

          <dl className="info-list">
            <div>
              <dt>Email</dt>
              <dd><a href="mailto:corentixlabs@gmail.com">corentixlabs@gmail.com</a></dd>
            </div>
            <div>
              <dt>Response Time</dt>
              <dd>Within 24 hours</dd>
            </div>
            <div>
              <dt>Availability</dt>
              <dd><span className="dot" /> Open to new projects</dd>
            </div>
          </dl>
        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
        >
          {status === 'sent' ? (
            <div className="form-success">
              <span className="form-success-icon">✓</span>
              <h3>Message sent</h3>
              <p>Thanks, {form.name.split(' ')[0] || 'there'} — we'll reply within 24 hours.</p>
            </div>
          ) : (
            <>
              <div className="form-row-two">
                <Field
                  id="cf-name" label="Name" required placeholder="Your name"
                  value={form.name} onChange={(e) => update('name', e.target.value)}
                />
                <Field
                  id="cf-email" label="Email" type="email" required placeholder="you@company.com"
                  value={form.email} onChange={(e) => update('email', e.target.value)}
                />
              </div>
              <Field
                id="cf-company" label="Company" placeholder="Where do you work?"
                value={form.company} onChange={(e) => update('company', e.target.value)}
              />
              <div className="cf-field cf-textarea">
                <label htmlFor="cf-details">Project Brief</label>
                <textarea
                  id="cf-details" placeholder="What are you building, and what's in the way?"
                  rows={5} required maxLength={MAX_CHARS}
                  value={form.details} onChange={(e) => update('details', e.target.value)}
                />
                <span className="char-counter">{form.details.length}/{MAX_CHARS}</span>
              </div>
              {status === 'error' && (
                <p className="form-error" role="alert">{errorMsg}</p>
              )}
              <button type="submit" className={`btn btn-primary form-submit form-submit-morph is-${status}`}>
                {status === 'sending' ? (
                  <span className="submit-spinner" aria-hidden="true" />
                ) : (
                  <>Send brief <span aria-hidden="true">→</span></>
                )}
              </button>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}